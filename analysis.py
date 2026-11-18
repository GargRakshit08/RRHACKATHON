import pandas as pd
import numpy as np
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import StandardScaler
import warnings
warnings.filterwarnings('ignore')

print("Starting cricket pressure pipeline...")

# 1. Load Data
data_dir = r"d:\Rajasthan Royals\Data Pack"
bbb = pd.read_csv(f"{data_dir}/ball_by_ball.csv")
matches = pd.read_csv(f"{data_dir}/matches.csv")
comps = pd.read_csv(f"{data_dir}/competitions.csv")

print(f"Loaded {len(bbb):,} balls, {len(matches):,} matches, {len(comps):,} competitions.")

# Merge match & comp metadata
matches = matches.merge(comps[['comp_id', 'comp_name', 'match_format', 'season']], on='comp_id', how='left')
bbb = bbb.merge(matches[['match_id', 'comp_id', 'comp_name', 'match_format', 'season', 'win_team_id', 'revised_target', 'knock_out']], on='match_id', how='left')

# Sort chronologically and logically
bbb['innings_ball_num'] = pd.to_numeric(bbb['innings_ball_num'], errors='coerce').fillna(0)
bbb = bbb.sort_values(['match_id', 'innings', 'overid', 'over_ball_num']).reset_index(drop=True)

# Total runs on ball
bbb['runs'] = pd.to_numeric(bbb['runs'], errors='coerce').fillna(0)
bbb['extras1_runs'] = pd.to_numeric(bbb['extras1_runs'], errors='coerce').fillna(0)
bbb['extras_2_runs'] = pd.to_numeric(bbb['extras_2_runs'], errors='coerce').fillna(0)
bbb['total_ball_runs'] = bbb['runs'] + bbb['extras1_runs'] + bbb['extras_2_runs']

# Bowler runs conceded (exclude byes and legbyes)
is_bye_legbye = bbb['extras_type'].isin(['byes', 'legbyes'])
bbb['bowler_runs'] = np.where(is_bye_legbye, 0, bbb['total_ball_runs'])

# Legal delivery definition (wides and no-balls are not legal)
bbb['is_legal'] = ~bbb['extras_type'].isin(['wide', 'Overstep'])

# Bowler wicket (exclude run out, retire out, obstructing field)
non_bowler_dismissals = ['RunOut', 'Retire Out', 'Obstracting the field', 'Obstructing the field']
bbb['is_bowler_wicket'] = bbb['is_wicket'] & (~bbb['dismissal_type'].isin(non_bowler_dismissals))

# Cumulative state tracking per innings
bbb['cum_runs'] = bbb.groupby(['match_id', 'innings'])['total_ball_runs'].cumsum() - bbb['total_ball_runs']
bbb['cum_wickets'] = bbb.groupby(['match_id', 'innings'])['is_wicket'].cumsum() - bbb['is_wicket']
bbb['wickets_in_hand'] = 10 - bbb['cum_wickets']
bbb['legal_balls_bowled'] = bbb.groupby(['match_id', 'innings'])['is_legal'].cumsum() - bbb['is_legal']
bbb['balls_remaining'] = np.maximum(0, 120 - bbb['legal_balls_bowled'])

# First innings total per match to determine target
inn1_totals = bbb[bbb['innings'] == 1].groupby('match_id')['total_ball_runs'].sum().reset_index()
inn1_totals.columns = ['match_id', 'inn1_total']
bbb = bbb.merge(inn1_totals, on='match_id', how='left')

# Target determination for 2nd innings
bbb['target'] = np.where(bbb['revised_target'].notna(), bbb['revised_target'], bbb['inn1_total'] + 1)
bbb['runs_needed'] = np.maximum(0, bbb['target'] - bbb['cum_runs'])
bbb['rrr'] = np.where(
    (bbb['innings'] == 2) & (bbb['balls_remaining'] > 0),
    (bbb['runs_needed'] * 6.0) / bbb['balls_remaining'],
    0.0
)

# Phase tagging
bbb['phase'] = np.where(bbb['overid'] <= 6, 'Powerplay',
                np.where(bbb['overid'] <= 15, 'Middle', 'Death'))

print("Calculated match-state dynamics.")
