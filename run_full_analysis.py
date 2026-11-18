import pandas as pd
import numpy as np
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import StandardScaler
import warnings
warnings.filterwarnings('ignore')

print("Loading data...")
data_dir = r"d:\Rajasthan Royals\Data Pack"
bbb = pd.read_csv(f"{data_dir}/ball_by_ball.csv")
matches = pd.read_csv(f"{data_dir}/matches.csv")
comps = pd.read_csv(f"{data_dir}/competitions.csv")
p_map = pd.read_csv(f"{data_dir}/competition_team_player_mapping.csv")

# Clean & Merge
matches = matches.merge(comps[['comp_id', 'comp_name', 'match_format', 'season']], on='comp_id', how='left')
bbb = bbb.merge(matches[['match_id', 'comp_id', 'comp_name', 'match_format', 'season', 'win_team_id', 'revised_target', 'knock_out']], on='match_id', how='left')

bbb['innings_ball_num'] = pd.to_numeric(bbb['innings_ball_num'], errors='coerce').fillna(0)
bbb = bbb.sort_values(['match_id', 'innings', 'overid', 'over_ball_num']).reset_index(drop=True)

bbb['runs'] = pd.to_numeric(bbb['runs'], errors='coerce').fillna(0)
bbb['extras1_runs'] = pd.to_numeric(bbb['extras1_runs'], errors='coerce').fillna(0)
bbb['extras_2_runs'] = pd.to_numeric(bbb['extras_2_runs'], errors='coerce').fillna(0)
bbb['total_ball_runs'] = bbb['runs'] + bbb['extras1_runs'] + bbb['extras_2_runs']

is_bye_legbye = bbb['extras_type'].isin(['byes', 'legbyes'])
bbb['bowler_runs'] = np.where(is_bye_legbye, 0, bbb['total_ball_runs'])
bbb['is_legal'] = ~bbb['extras_type'].isin(['wide', 'Overstep'])

non_bowler_dismissals = ['RunOut', 'Retire Out', 'Obstracting the field', 'Obstructing the field']
bbb['is_bowler_wicket'] = bbb['is_wicket'] & (~bbb['dismissal_type'].isin(non_bowler_dismissals))

# Cumulative state
bbb['cum_runs'] = bbb.groupby(['match_id', 'innings'])['total_ball_runs'].cumsum() - bbb['total_ball_runs']
bbb['cum_wickets'] = bbb.groupby(['match_id', 'innings'])['is_wicket'].cumsum() - bbb['is_wicket']
bbb['wickets_in_hand'] = np.maximum(0, 10 - bbb['cum_wickets'])
bbb['legal_balls_bowled'] = bbb.groupby(['match_id', 'innings'])['is_legal'].cumsum() - bbb['is_legal']
bbb['balls_remaining'] = np.maximum(0, 120 - bbb['legal_balls_bowled'])

inn1_totals = bbb[bbb['innings'] == 1].groupby('match_id')['total_ball_runs'].sum().reset_index()
inn1_totals.columns = ['match_id', 'inn1_total']
bbb = bbb.merge(inn1_totals, on='match_id', how='left')

bbb['target'] = np.where(bbb['revised_target'].notna(), bbb['revised_target'], bbb['inn1_total'] + 1)
bbb['runs_needed'] = np.maximum(0, bbb['target'] - bbb['cum_runs'])
bbb['rrr'] = np.where(
    (bbb['innings'] == 2) & (bbb['balls_remaining'] > 0),
    (bbb['runs_needed'] * 6.0) / bbb['balls_remaining'],
    0.0
)

bbb['phase'] = np.where(bbb['overid'] <= 6, 'Powerplay',
                np.where(bbb['overid'] <= 15, 'Middle', 'Death'))

# Win indicator for batting team
bbb['batting_team_won'] = (bbb['batting_team_id'] == bbb['win_team_id']).astype(int)

print("Training Win Probability & Leverage Model for Chases...")
chase_balls = bbb[(bbb['innings'] == 2) & (bbb['balls_remaining'] > 0) & (bbb['wickets_in_hand'] > 0)].copy()

features = ['runs_needed', 'balls_remaining', 'wickets_in_hand', 'rrr']
X = chase_balls[features]
y = chase_balls['batting_team_won']

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

wp_model = LogisticRegression(max_iter=1000, random_state=42)
wp_model.fit(X_scaled, y)

chase_balls['wp'] = wp_model.predict_proba(X_scaled)[:, 1]

# Leverage index: potential swing on ball
# Simulate outcomes: dot ball vs wicket vs boundary (4)
# State after dot: runs_needed same, balls_rem - 1
dot_state = chase_balls[features].copy()
dot_state['balls_remaining'] = np.maximum(0, dot_state['balls_remaining'] - 1)
dot_state['rrr'] = np.where(dot_state['balls_remaining'] > 0, (dot_state['runs_needed'] * 6.0) / dot_state['balls_remaining'], 24.0)
wp_dot = wp_model.predict_proba(scaler.transform(dot_state))[:, 1]

# State after wicket: runs_needed same, balls_rem - 1, w_in_hand - 1
wkt_state = dot_state.copy()
wkt_state['wickets_in_hand'] = np.maximum(0, wkt_state['wickets_in_hand'] - 1)
wp_wkt = wp_model.predict_proba(scaler.transform(wkt_state))[:, 1]

# State after four: runs_needed - 4, balls_rem - 1
four_state = dot_state.copy()
four_state['runs_needed'] = np.maximum(0, four_state['runs_needed'] - 4)
four_state['rrr'] = np.where(four_state['balls_remaining'] > 0, (four_state['runs_needed'] * 6.0) / four_state['balls_remaining'], 0.0)
wp_four = wp_model.predict_proba(scaler.transform(four_state))[:, 1]

chase_balls['swing'] = np.abs(wp_four - wp_wkt) + np.abs(wp_dot - wp_wkt)
mean_swing = chase_balls['swing'].mean()
chase_balls['leverage_index'] = chase_balls['swing'] / (mean_swing if mean_swing > 0 else 1.0)

# Merge back leverage index to bbb
bbb = bbb.merge(chase_balls[['match_id', 'innings', 'overid', 'over_ball_num', 'leverage_index']], 
                on=['match_id', 'innings', 'overid', 'over_ball_num'], how='left')
bbb['leverage_index'] = bbb['leverage_index'].fillna(1.0)

# Define Pressure: Dual Engine
# Engine 1: Leverage Index >= 1.25 (top ~30% swing)
lev_pressure = (bbb['innings'] == 2) & (bbb['leverage_index'] >= 1.25)

# Engine 2: Rule-Based Match Context
rule_pressure_chase = (
    (bbb['innings'] == 2) & 
    (
        ((bbb['overid'] >= 11) & (bbb['rrr'] >= 9.5) & (bbb['rrr'] <= 22.0) & (bbb['wickets_in_hand'] >= 2)) |
        ((bbb['overid'] >= 16) & (bbb['runs_needed'] <= 60) & (bbb['balls_remaining'] >= 6)) |
        ((bbb['runs_needed'] <= 30) & (bbb['balls_remaining'] <= 24))
    )
)

rule_pressure_defend = (
    (bbb['innings'] == 1) & 
    (
        ((bbb['overid'] <= 6) & (bbb['cum_wickets'] >= 2)) | # Powerplay collapse
        ((bbb['overid'] <= 10) & (bbb['cum_wickets'] >= 3)) | # Early collapse
        ((bbb['overid'] >= 16) & (bbb['wickets_in_hand'] >= 3)) | # Death acceleration
        (bbb['knock_out'] == True) # Knockout pressure
    )
)

super_over_pressure = (bbb['innings'] >= 3)

bbb['is_pressure'] = lev_pressure | rule_pressure_chase | rule_pressure_defend | super_over_pressure

pressure_pct = bbb['is_pressure'].mean() * 100
print(f"Total Pressure Deliveries: {bbb['is_pressure'].sum():,} ({pressure_pct:.1f}% of all balls)")

# Save checkpoint
bbb.to_pickle("d:/Rajasthan Royals/bbb_processed.pkl")
print("Saved processed ball-by-ball dataset.")

print("\n--- COMPUTING BATTER METRICS ---")
# Batter stats
batters = []
# Group by striker_name
for name, group in bbb.groupby('striker_name'):
    tot_balls = len(group[group['is_legal']])
    press_group = group[group['is_pressure'] & group['is_legal']]
    base_group = group[(~group['is_pressure']) & group['is_legal']]
    
    n_press = len(press_group)
    n_base = len(base_group)
    
    if n_press < 100: # Threshold for high-pressure sample
        continue
        
    press_runs = press_group['runs'].sum()
    base_runs = base_group['runs'].sum()
    
    sr_press = (press_runs / n_press) * 100 if n_press > 0 else 0
    sr_base = (base_runs / n_base) * 100 if n_base > 0 else 0
    delta_sr = sr_press - sr_base
    
    dot_press = (press_group['runs'] == 0).mean() * 100
    dot_base = (base_group['runs'] == 0).mean() * 100
    
    bound_press = (press_group['is_four'] | press_group['is_six']).mean() * 100
    bound_base = (base_group['is_four'] | base_group['is_six']).mean() * 100
    
    # Dismissals under pressure
    dismissals_press = press_group['is_wicket'].sum()
    balls_per_dismissal = n_press / dismissals_press if dismissals_press > 0 else n_press
    
    # Split vs Pace and Spin under pressure
    pace_press = press_group[press_group['pace_or_spin'] == 'Pace']
    spin_press = press_group[press_group['pace_or_spin'] == 'Spin']
    sr_pace_press = (pace_press['runs'].sum() / len(pace_press)) * 100 if len(pace_press) > 15 else np.nan
    sr_spin_press = (spin_press['runs'].sum() / len(spin_press)) * 100 if len(spin_press) > 15 else np.nan
    
    # IPL balls
    ipl_press_balls = len(press_group[press_group['match_format'] == 'T20'])
    t20i_press_balls = len(press_group[press_group['match_format'] == 'T20I'])
    
    # Batting hand
    bat_hand = group['batting_type'].mode()[0] if len(group['batting_type'].dropna()) > 0 else 'Unknown'
    
    batters.append({
        'player_name': name,
        'bat_hand': bat_hand,
        'total_balls': tot_balls,
        'press_balls': n_press,
        'press_runs': press_runs,
        'sr_press': sr_press,
        'sr_base': sr_base,
        'delta_sr': delta_sr,
        'dot_pct_press': dot_press,
        'boundary_pct_press': bound_press,
        'balls_per_dismissal': balls_per_dismissal,
        'dismissals_press': dismissals_press,
        'sr_pace_press': sr_pace_press,
        'sr_spin_press': sr_spin_press,
        'ipl_press_balls': ipl_press_balls,
        't20i_press_balls': t20i_press_balls
    })

df_bat = pd.DataFrame(batters)
mu_sr = df_bat['sr_press'].mean()
K_bat = 50.0

# Empirical Bayes Shrinkage on SR
df_bat['sr_shrunk'] = (df_bat['press_balls'] / (df_bat['press_balls'] + K_bat)) * df_bat['sr_press'] + (K_bat / (df_bat['press_balls'] + K_bat)) * mu_sr

# Composite Batter Pressure Rating
# Standardize features
def z_score(s):
    return (s - s.mean()) / s.std()

df_bat['z_sr'] = z_score(df_bat['sr_shrunk'])
df_bat['z_delta_sr'] = z_score(df_bat['delta_sr'])
df_bat['z_bound'] = z_score(df_bat['boundary_pct_press'])
df_bat['z_dot'] = -z_score(df_bat['dot_pct_press']) # Lower dot% is better
df_bat['z_survival'] = z_score(np.log1p(df_bat['balls_per_dismissal']))

df_bat['batter_pressure_score'] = (
    0.35 * df_bat['z_sr'] +
    0.25 * df_bat['z_delta_sr'] +
    0.20 * df_bat['z_bound'] +
    0.10 * df_bat['z_dot'] +
    0.10 * df_bat['z_survival']
)

top10_batters = df_bat.sort_values('batter_pressure_score', ascending=False).head(10).reset_index(drop=True)
top10_batters['rank'] = range(1, 11)

print("\n=== TOP 10 BATTERS UNDER PRESSURE ===")
cols_bat = ['rank', 'player_name', 'bat_hand', 'press_balls', 'sr_press', 'sr_base', 'delta_sr', 'boundary_pct_press', 'dot_pct_press', 'batter_pressure_score']
print(top10_batters[cols_bat].to_string(index=False))


print("\n--- COMPUTING BOWLER METRICS ---")
# Bowler stats
bowlers = []
for name, group in bbb.groupby('bowler_name'):
    tot_legal = len(group[group['is_legal']])
    press_group = group[group['is_pressure'] & group['is_legal']]
    base_group = group[(~group['is_pressure']) & group['is_legal']]
    
    n_press = len(press_group)
    n_base = len(base_group)
    
    if n_press < 120: # Minimum 20 overs under pressure
        continue
        
    press_runs = press_group['bowler_runs'].sum()
    base_runs = base_group['bowler_runs'].sum()
    
    econ_press = (press_runs / n_press) * 6.0 if n_press > 0 else 0
    econ_base = (base_runs / n_base) * 6.0 if n_base > 0 else 0
    delta_econ = econ_press - econ_base # negative is better
    
    # Wickets
    press_wkts = press_group['is_bowler_wicket'].sum()
    base_wkts = base_group['is_bowler_wicket'].sum()
    
    wkt_pct_press = (press_wkts / n_press) * 100 if n_press > 0 else 0
    sr_bowl_press = (n_press / press_wkts) if press_wkts > 0 else 999.0
    
    dot_press = (press_group['bowler_runs'] == 0).mean() * 100
    bound_press = (press_group['is_four'] | press_group['is_six']).mean() * 100
    
    # Death overs under pressure (overs 16-20)
    death_group = press_group[press_group['overid'] >= 16]
    death_econ = (death_group['bowler_runs'].sum() / len(death_group)) * 6.0 if len(death_group) >= 30 else np.nan
    death_wkts = death_group['is_bowler_wicket'].sum()
    
    # Pace or Spin & Style
    style = group['bowling_type'].mode()[0] if len(group['bowling_type'].dropna()) > 0 else 'Unknown'
    pace_spin = group['pace_or_spin'].mode()[0] if len(group['pace_or_spin'].dropna()) > 0 else 'Unknown'
    
    ipl_press_balls = len(press_group[press_group['match_format'] == 'T20'])
    t20i_press_balls = len(press_group[press_group['match_format'] == 'T20I'])
    
    bowlers.append({
        'player_name': name,
        'bowling_type': style,
        'pace_or_spin': pace_spin,
        'total_balls': tot_legal,
        'press_balls': n_press,
        'press_runs': press_runs,
        'econ_press': econ_press,
        'econ_base': econ_base,
        'delta_econ': delta_econ,
        'press_wkts': press_wkts,
        'wkt_pct_press': wkt_pct_press,
        'sr_bowl_press': sr_bowl_press,
        'dot_pct_press': dot_press,
        'boundary_pct_press': bound_press,
        'death_econ': death_econ,
        'death_wkts': death_wkts,
        'ipl_press_balls': ipl_press_balls,
        't20i_press_balls': t20i_press_balls
    })

df_bowl = pd.DataFrame(bowlers)
mu_econ = df_bowl['econ_press'].mean()
K_bowl = 50.0

# Empirical Bayes Shrinkage on Economy
df_bowl['econ_shrunk'] = (df_bowl['press_balls'] / (df_bowl['press_balls'] + K_bowl)) * df_bowl['econ_press'] + (K_bowl / (df_bowl['press_balls'] + K_bowl)) * mu_econ

df_bowl['z_econ'] = -z_score(df_bowl['econ_shrunk']) # Lower economy is better
df_bowl['z_delta_econ'] = -z_score(df_bowl['delta_econ']) # More negative delta is better
df_bowl['z_wkt'] = z_score(df_bowl['wkt_pct_press']) # Higher wkt% is better
df_bowl['z_dot'] = z_score(df_bowl['dot_pct_press']) # Higher dot% is better
df_bowl['z_bound'] = -z_score(df_bowl['boundary_pct_press']) # Lower boundary% conceded is better

df_bowl['bowler_pressure_score'] = (
    0.35 * df_bowl['z_econ'] +
    0.20 * df_bowl['z_delta_econ'] +
    0.25 * df_bowl['z_wkt'] +
    0.10 * df_bowl['z_dot'] +
    0.10 * df_bowl['z_bound']
)

top10_bowlers = df_bowl.sort_values('bowler_pressure_score', ascending=False).head(10).reset_index(drop=True)
top10_bowlers['rank'] = range(1, 11)

print("\n=== TOP 10 BOWLERS UNDER PRESSURE ===")
cols_bowl = ['rank', 'player_name', 'bowling_type', 'pace_or_spin', 'press_balls', 'econ_press', 'econ_base', 'delta_econ', 'press_wkts', 'dot_pct_press', 'boundary_pct_press', 'bowler_pressure_score']
print(top10_bowlers[cols_bowl].to_string(index=False))

# Export results to CSV for reporting and review
df_bat.to_csv("d:/Rajasthan Royals/batter_rankings_all.csv", index=False)
df_bowl.to_csv("d:/Rajasthan Royals/bowler_rankings_all.csv", index=False)
top10_batters.to_csv("d:/Rajasthan Royals/top10_batters.csv", index=False)
top10_bowlers.to_csv("d:/Rajasthan Royals/top10_bowlers.csv", index=False)
print("\nExported rankings to CSV.")
