/**
 * Rajasthan Royals - SupeRR Selector Season 2 | Official Analytics Dashboard
 * Built for RRHACKATHON
 */

const PLAYERS_DATA = [
  // ==========================================
  // TOP 10 BATTERS UNDER PRESSURE
  // ==========================================
  {
    id: 'bat-1',
    rank: 1,
    type: 'batter',
    name: 'Tim David',
    image: 'assets/players/tim_david.jpg',
    hand: 'RHB',
    archetype: 'Death Power Hitter / Finisher',
    balls: 828,
    runs: '1,503',
    primaryMetricLabel: 'Pressure Strike Rate',
    primaryMetricValue: '181.52',
    primarySubBadge: '199.81 Death SR',
    stat1: { label: 'Pressure Balls', val: '828' },
    stat2: { label: 'Pressure Runs', val: '1,503' },
    stat3: { label: 'Death SR (16-20)', val: '199.81' },
    stat4: { label: 'Dot % (Min Dots)', val: '30.4%' },
    stat5: { label: 'Boundary %', val: '25.7%' },
    stat6: { label: 'Chase Finishes', val: '15' },
    extraMetric: { label: 'Balls / Dismissal', val: '16.9' },
    justification: 'Peak death closer (199.8 Death SR) + 15 chase finishes. Data demonstrates he is the single most lethal finisher at overs 16–20 (535 balls, 1,069 runs).'
  },
  {
    id: 'bat-2',
    rank: 2,
    type: 'batter',
    name: 'Namboori Tilak Varma',
    image: 'assets/players/tilak_varma.jpg',
    hand: 'LHB',
    archetype: 'Crisis Finisher / Chase Master',
    balls: 1465,
    runs: '2,190',
    primaryMetricLabel: 'Pressure Strike Rate',
    primaryMetricValue: '149.49',
    primarySubBadge: '21 Chase Wins (Most)',
    stat1: { label: 'Pressure Balls', val: '1,465' },
    stat2: { label: 'Pressure Runs', val: '2,190' },
    stat3: { label: 'Death SR (16-20)', val: '191.88' },
    stat4: { label: 'Dot % (Min Dots)', val: '30.4%' },
    stat5: { label: 'Boundary %', val: '18.8%' },
    stat6: { label: 'Chase Finishes', val: '21 ★' },
    extraMetric: { label: 'Balls / Dismissal', val: '27.1' },
    justification: 'Uncontested #1 chase anchor; 21 successful chase finishes (highest in IPL database). Absorbs collapses while sustaining 191.88 Death SR.'
  },
  {
    id: 'bat-3',
    rank: 3,
    type: 'batter',
    name: 'Virat Kohli',
    image: 'assets/players/virat_kohli.jpg',
    hand: 'RHB',
    archetype: 'Master Anchor / Chase Specialist',
    balls: 896,
    runs: '1,413',
    primaryMetricLabel: 'Pressure Strike Rate',
    primaryMetricValue: '157.70',
    primarySubBadge: '27.2 BPD Anchor',
    stat1: { label: 'Pressure Balls', val: '896' },
    stat2: { label: 'Pressure Runs', val: '1,413' },
    stat3: { label: 'Death SR (16-20)', val: '186.53' },
    stat4: { label: 'Dot % (Min Dots)', val: '27.7%' },
    stat5: { label: 'Boundary %', val: '21.5%' },
    stat6: { label: 'Chase Finishes', val: '9' },
    extraMetric: { label: 'Balls / Dismissal', val: '27.2' },
    justification: 'Wicket security benchmark; elite 27.2 balls per dismissal and sub-28% dot rate protects the team’s foundation while shifting gears to 186.53 SR at death.'
  },
  {
    id: 'bat-4',
    rank: 4,
    type: 'batter',
    name: 'Rajat Patidar',
    image: 'assets/players/rajat_patidar.jpg',
    hand: 'RHB',
    archetype: 'Middle-to-Death Spin Enforcer',
    balls: 461,
    runs: '739',
    primaryMetricLabel: 'Pressure Strike Rate',
    primaryMetricValue: '160.30',
    primarySubBadge: '217.00 Death SR (Elite)',
    stat1: { label: 'Pressure Balls', val: '461' },
    stat2: { label: 'Pressure Runs', val: '739' },
    stat3: { label: 'Death SR (16-20)', val: '217.00' },
    stat4: { label: 'Dot % (Min Dots)', val: '32.5%' },
    stat5: { label: 'Boundary %', val: '22.3%' },
    stat6: { label: 'Chase Finishes', val: '1' },
    extraMetric: { label: 'Balls / Dismissal', val: '17.1' },
    justification: 'Middle-to-death spin transition enforcer (217.0 Death SR across 112 balls). Actively demolishes primary spinners to shift game momentum.'
  },
  {
    id: 'bat-5',
    rank: 5,
    type: 'batter',
    name: 'Heinrich Klaasen',
    image: 'assets/players/heinrich_klaasen.jpg',
    hand: 'RHB',
    archetype: 'Zero-Dot Spin Demolisher',
    balls: 864,
    runs: '1,500',
    primaryMetricLabel: 'Pressure Strike Rate',
    primaryMetricValue: '173.61',
    primarySubBadge: '25.3% Dots (Elite)',
    stat1: { label: 'Pressure Balls', val: '864' },
    stat2: { label: 'Pressure Runs', val: '1,500' },
    stat3: { label: 'Death SR (16-20)', val: '198.97' },
    stat4: { label: 'Dot % (Min Dots)', val: '25.3%' },
    stat5: { label: 'Boundary %', val: '23.0%' },
    stat6: { label: 'Chase Finishes', val: '5' },
    extraMetric: { label: 'Balls / Dismissal', val: '20.6' },
    justification: 'Zero-dot spin demolisher (scores off ~75% of deliveries faced under pressure). Stifles dry spells with 198.97 death strike rate.'
  },
  {
    id: 'bat-6',
    rank: 6,
    type: 'batter',
    name: 'Tristan Stubbs',
    image: 'assets/players/tristan_stubbs.jpg',
    hand: 'RHB',
    archetype: '360° Strike Rotator & Closer',
    balls: 709,
    runs: '1,168',
    primaryMetricLabel: 'Pressure Strike Rate',
    primaryMetricValue: '164.74',
    primarySubBadge: '24.1% Dots (Lowest)',
    stat1: { label: 'Pressure Balls', val: '709' },
    stat2: { label: 'Pressure Runs', val: '1,168' },
    stat3: { label: 'Death SR (16-20)', val: '196.16' },
    stat4: { label: 'Dot % (Min Dots)', val: '24.1%' },
    stat5: { label: 'Boundary %', val: '21.2%' },
    stat6: { label: 'Chase Finishes', val: '10' },
    extraMetric: { label: 'Balls / Dismissal', val: '23.6' },
    justification: 'Lowest dot-ball % in IPL (24.1%) & 360° death hitting. Guarantees continuous scoreboard movement with 10 chase finishes.'
  },
  {
    id: 'bat-7',
    rank: 7,
    type: 'batter',
    name: 'Vaibhav Sooryavanshi',
    image: 'assets/players/vaibhav_sooryavanshi.jpg',
    hand: 'LHB',
    archetype: 'Generational Boundary Disruptor',
    balls: 232,
    runs: '530',
    primaryMetricLabel: 'Pressure Strike Rate',
    primaryMetricValue: '228.45',
    primarySubBadge: '38.8% Boundary (Peak)',
    stat1: { label: 'Pressure Balls', val: '232' },
    stat2: { label: 'Pressure Runs', val: '530' },
    stat3: { label: 'Death SR (16-20)', val: '290.00' },
    stat4: { label: 'Dot % (Min Dots)', val: '35.8%' },
    stat5: { label: 'Boundary %', val: '38.8%' },
    stat6: { label: 'Chase Finishes', val: '0' },
    extraMetric: { label: 'Balls / Dismissal', val: '29.0' },
    justification: 'Unrivaled boundary velocity (38.8% boundary rate & 228.5 SR). Highest statistical ceiling of crisis disruption in modern T20 cricket.'
  },
  {
    id: 'bat-8',
    rank: 8,
    type: 'batter',
    name: 'Nicholas Pooran',
    image: 'assets/players/nicholas_pooran.jpg',
    hand: 'LHB',
    archetype: 'Explosive Left-Handed Finisher',
    balls: 1010,
    runs: '1,672',
    primaryMetricLabel: 'Pressure Strike Rate',
    primaryMetricValue: '165.54',
    primarySubBadge: '190.07 Death SR',
    stat1: { label: 'Pressure Balls', val: '1,010' },
    stat2: { label: 'Pressure Runs', val: '1,672' },
    stat3: { label: 'Death SR (16-20)', val: '190.07' },
    stat4: { label: 'Dot % (Min Dots)', val: '33.9%' },
    stat5: { label: 'Boundary %', val: '23.5%' },
    stat6: { label: 'Chase Finishes', val: '12' },
    extraMetric: { label: 'Balls / Dismissal', val: '21.0' },
    justification: 'High-impact middle enforcer; 1,672 runs & 190.1 Death SR. Forces opposition captains to alter defensive field dimensions.'
  },
  {
    id: 'bat-9',
    rank: 9,
    type: 'batter',
    name: 'David Miller',
    image: 'assets/players/david_miller.jpg',
    hand: 'LHB',
    archetype: 'Veteran Closer / Ice-Man',
    balls: 901,
    runs: '1,421',
    primaryMetricLabel: 'Pressure Strike Rate',
    primaryMetricValue: '157.71',
    primarySubBadge: '15 Chase Finishes',
    stat1: { label: 'Pressure Balls', val: '901' },
    stat2: { label: 'Pressure Runs', val: '1,421' },
    stat3: { label: 'Death SR (16-20)', val: '174.07' },
    stat4: { label: 'Dot % (Min Dots)', val: '28.3%' },
    stat5: { label: 'Boundary %', val: '20.3%' },
    stat6: { label: 'Chase Finishes', val: '15' },
    extraMetric: { label: 'Balls / Dismissal', val: '21.5' },
    justification: 'Proven veteran closer; 15 chase finishes & sub-29% dots. Ice-cool temperament prevents panic in nail-biting final-over scenarios.'
  },
  {
    id: 'bat-10',
    rank: 10,
    type: 'batter',
    name: 'Suryakumar Yadav',
    image: 'assets/players/suryakumar_yadav.jpg',
    hand: 'RHB',
    archetype: '360° Match Winner / Enforcer',
    balls: 1301,
    runs: '2,289',
    primaryMetricLabel: 'Pressure Strike Rate',
    primaryMetricValue: '175.94',
    primarySubBadge: '2,289 Runs (Most)',
    stat1: { label: 'Pressure Balls', val: '1,301' },
    stat2: { label: 'Pressure Runs', val: '2,289' },
    stat3: { label: 'Death SR (16-20)', val: '217.22' },
    stat4: { label: 'Dot % (Min Dots)', val: '31.4%' },
    stat5: { label: 'Boundary %', val: '26.7%' },
    stat6: { label: 'Chase Finishes', val: '12' },
    extraMetric: { label: 'Balls / Dismissal', val: '21.7' },
    justification: 'Volume benchmark; 2,289 runs & 217.2 death strike rate. Peak aggregate run producer under high leverage in T20 cricket.'
  },

  // ==========================================
  // TOP 10 BOWLERS UNDER PRESSURE
  // ==========================================
  {
    id: 'bowl-1',
    rank: 1,
    type: 'bowler',
    name: 'Josh Hazlewood',
    image: 'assets/players/josh_hazlewood.jpg',
    style: 'Right-arm fast-medium',
    category: 'Pace',
    balls: 847,
    runs: '-',
    primaryMetricLabel: 'Pressure Economy',
    primaryMetricValue: '8.17',
    primarySubBadge: '43.4% Dots (Highest)',
    stat1: { label: 'Pressure Balls', val: '847' },
    stat2: { label: 'Death Econ (16-20)', val: '9.47' },
    stat3: { label: 'Dot % (Field Exec)', val: '43.4%' },
    stat4: { label: 'Total Wickets', val: '62' },
    stat5: { label: 'Death Wickets', val: '30' },
    stat6: { label: 'Partnership Breakers', val: '8' },
    extraMetric: { label: 'Winning Hauls', val: '14' },
    justification: 'Supreme field execution; #1 dot rate in IPL (43.4%). Metronomic top-of-off line and length induces false strokes, driving 14 winning hauls.'
  },
  {
    id: 'bowl-2',
    rank: 2,
    type: 'bowler',
    name: 'Jasprit Bumrah',
    image: 'assets/players/jasprit_bumrah.jpg',
    style: 'Right-arm Fast',
    category: 'Pace',
    balls: 957,
    runs: '-',
    primaryMetricLabel: 'Pressure Economy',
    primaryMetricValue: '7.00',
    primarySubBadge: '7.19 Death Econ (Lowest)',
    stat1: { label: 'Pressure Balls', val: '957' },
    stat2: { label: 'Death Econ (16-20)', val: '7.19' },
    stat3: { label: 'Dot % (Field Exec)', val: '42.5%' },
    stat4: { label: 'Total Wickets', val: '52' },
    stat5: { label: 'Death Wickets', val: '35' },
    stat6: { label: 'Partnership Breakers', val: '13' },
    extraMetric: { label: 'Winning Hauls', val: '12' },
    justification: 'Gold standard; 7.00 overall & 7.19 death economy across 957 pressure balls. Defies modern scoring inflations where par is 9.82 RPO.'
  },
  {
    id: 'bowl-3',
    rank: 3,
    type: 'bowler',
    name: 'Arshdeep Singh',
    image: 'assets/players/arshdeep_singh.jpg',
    style: 'Left-arm medium-fast',
    category: 'Pace',
    balls: 1585,
    runs: '-',
    primaryMetricLabel: 'Pressure Economy',
    primaryMetricValue: '8.81',
    primarySubBadge: '109 Wkts (Most in IPL)',
    stat1: { label: 'Pressure Balls', val: '1,585' },
    stat2: { label: 'Death Econ (16-20)', val: '9.46' },
    stat3: { label: 'Dot % (Field Exec)', val: '36.8%' },
    stat4: { label: 'Total Wickets', val: '109 ★' },
    stat5: { label: 'Death Wickets', val: '75 ★' },
    stat6: { label: 'Partnership Breakers', val: '33 ★' },
    extraMetric: { label: 'Winning Hauls', val: '18' },
    justification: 'Wicket kingpin; #1 in pressure wickets (109), death wickets (75), and partnership breakers (33). Systematically dismantles lower orders.'
  },
  {
    id: 'bowl-4',
    rank: 4,
    type: 'bowler',
    name: 'Rashid Khan',
    image: 'assets/players/rashid_khan.jpg',
    style: 'Right-arm Leg-Break',
    category: 'Spin',
    balls: 1386,
    runs: '-',
    primaryMetricLabel: 'Pressure Economy',
    primaryMetricValue: '7.46',
    primarySubBadge: '19 Winning Hauls (Most)',
    stat1: { label: 'Pressure Balls', val: '1,386' },
    stat2: { label: 'Death Econ (16-20)', val: '8.63' },
    stat3: { label: 'Dot % (Field Exec)', val: '36.0%' },
    stat4: { label: 'Total Wickets', val: '86' },
    stat5: { label: 'Death Wickets', val: '51' },
    stat6: { label: 'Partnership Breakers', val: '22' },
    extraMetric: { label: 'Winning Hauls', val: '19 ★' },
    justification: 'Match-winning anchor; 19 winning hauls (highest in tournament) & 7.46 economy. Combines suffocating run defense with strike potency.'
  },
  {
    id: 'bowl-5',
    rank: 5,
    type: 'bowler',
    name: 'Bhuvneshwar Kumar',
    image: 'assets/players/bhuvneshwar_kumar.jpg',
    style: 'Right-arm medium',
    category: 'Pace',
    balls: 1144,
    runs: '-',
    primaryMetricLabel: 'Pressure Economy',
    primaryMetricValue: '8.56',
    primarySubBadge: '42 Death Wkts',
    stat1: { label: 'Pressure Balls', val: '1,144' },
    stat2: { label: 'Death Econ (16-20)', val: '9.63' },
    stat3: { label: 'Dot % (Field Exec)', val: '36.0%' },
    stat4: { label: 'Total Wickets', val: '61' },
    stat5: { label: 'Death Wickets', val: '42' },
    stat6: { label: 'Partnership Breakers', val: '17' },
    extraMetric: { label: 'Winning Hauls', val: '9' },
    justification: 'Seam discipline; 42 death wickets hitting defensive fields with knuckle-balls and wide yorkers. High reliability in late-game defense.'
  },
  {
    id: 'bowl-6',
    rank: 6,
    type: 'bowler',
    name: 'Yuzvendra Chahal',
    image: 'assets/players/yuzvendra_chahal.jpg',
    style: 'Right-arm Leg-Break',
    category: 'Spin',
    balls: 1230,
    runs: '-',
    primaryMetricLabel: 'Pressure Economy',
    primaryMetricValue: '8.77',
    primarySubBadge: '23 Partnership Breakers',
    stat1: { label: 'Pressure Balls', val: '1,230' },
    stat2: { label: 'Death Econ (16-20)', val: '9.91' },
    stat3: { label: 'Dot % (Field Exec)', val: '29.9%' },
    stat4: { label: 'Total Wickets', val: '76' },
    stat5: { label: 'Death Wickets', val: '34' },
    stat6: { label: 'Partnership Breakers', val: '23' },
    extraMetric: { label: 'Winning Hauls', val: '14' },
    justification: 'Fearless baiter; 76 wickets & 23 partnership breakers (30+ stands). Employs flight boldly in middle overs to snap threatening stands.'
  },
  {
    id: 'bowl-7',
    rank: 7,
    type: 'bowler',
    name: 'Matheesha Pathirana',
    image: 'assets/players/matheesha_pathirana.jpg',
    style: 'Right-arm Fast (Sling)',
    category: 'Pace',
    balls: 693,
    runs: '-',
    primaryMetricLabel: 'Pressure Economy',
    primaryMetricValue: '7.70',
    primarySubBadge: '44 Death Wkts / 693 Balls',
    stat1: { label: 'Pressure Balls', val: '693' },
    stat2: { label: 'Death Econ (16-20)', val: '8.18' },
    stat3: { label: 'Dot % (Field Exec)', val: '37.4%' },
    stat4: { label: 'Total Wickets', val: '57' },
    stat5: { label: 'Death Wickets', val: '44' },
    stat6: { label: 'Partnership Breakers', val: '15' },
    extraMetric: { label: 'Winning Hauls', val: '8' },
    justification: 'Deadly sling yorkers; strikes every 12.1 balls at death. Claimed 44 death wickets in just 693 pressure balls at 8.18 economy.'
  },
  {
    id: 'bowl-8',
    rank: 8,
    type: 'bowler',
    name: 'Wanindu Hasaranga',
    image: 'assets/players/wanindu_hasaranga.jpg',
    style: 'Right-arm Leg-Break',
    category: 'Spin',
    balls: 895,
    runs: '-',
    primaryMetricLabel: 'Pressure Economy',
    primaryMetricValue: '8.27',
    primarySubBadge: '73 Wkts / 23 Breakers',
    stat1: { label: 'Pressure Balls', val: '895' },
    stat2: { label: 'Death Econ (16-20)', val: '8.38' },
    stat3: { label: 'Dot % (Field Exec)', val: '36.1%' },
    stat4: { label: 'Total Wickets', val: '73' },
    stat5: { label: 'Death Wickets', val: '27' },
    stat6: { label: 'Partnership Breakers', val: '23' },
    extraMetric: { label: 'Winning Hauls', val: '14' },
    justification: 'Middle enforcer; 73 wickets, 23 partnership breakers & 14 winning hauls. Skidding googlies choke opposition acceleration phases.'
  },
  {
    id: 'bowl-9',
    rank: 9,
    type: 'bowler',
    name: 'Jason Holder',
    image: 'assets/players/jason_holder.jpg',
    style: 'Right-arm medium-fast',
    category: 'Pace',
    balls: 1077,
    runs: '-',
    primaryMetricLabel: 'Pressure Economy',
    primaryMetricValue: '8.59',
    primarySubBadge: '43 Death Wkts',
    stat1: { label: 'Pressure Balls', val: '1,077' },
    stat2: { label: 'Death Econ (16-20)', val: '9.82' },
    stat3: { label: 'Dot % (Field Exec)', val: '33.8%' },
    stat4: { label: 'Total Wickets', val: '70' },
    stat5: { label: 'Death Wickets', val: '43' },
    stat6: { label: 'Partnership Breakers', val: '19' },
    extraMetric: { label: 'Winning Hauls', val: '11' },
    justification: 'Heavy bounce enforcer; 43 death wickets & 19 breakers. Steep release height induces mistimed pull shots and boundary catches.'
  },
  {
    id: 'bowl-10',
    rank: 10,
    type: 'bowler',
    name: 'Krunal Pandya',
    image: 'assets/players/krunal_pandya.jpg',
    style: 'Slow left-arm orthodox',
    category: 'Spin',
    balls: 581,
    runs: '-',
    primaryMetricLabel: 'Pressure Economy',
    primaryMetricValue: '7.39',
    primarySubBadge: '7.39 Econ (Containment)',
    stat1: { label: 'Pressure Balls', val: '581' },
    stat2: { label: 'Death Econ (16-20)', val: '10.09' },
    stat3: { label: 'Dot % (Field Exec)', val: '32.7%' },
    stat4: { label: 'Total Wickets', val: '28' },
    stat5: { label: 'Death Wickets', val: '5' },
    stat6: { label: 'Partnership Breakers', val: '9' },
    extraMetric: { label: 'Winning Hauls', val: '7' },
    justification: 'Defensive run stranglehold; 7.39 pressure economy and 13.8% boundaries. Fires tight darts into the blockhole to choke run chases.'
  }
];

// Fallback avatar generator
function getFallbackAvatar(name) {
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2);
  return `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" fill="%230f1c35"/><text x="50" y="55" font-family="sans-serif" font-size="34" font-weight="bold" fill="%23e10098" text-anchor="middle" dominant-baseline="middle">${initials}</text></svg>`;
}

// App State
let currentFilter = 'all';
let searchQuery = '';
let currentSort = 'rank-asc';

// DOM Elements
const cardsContainer = document.getElementById('cardsGrid');
const searchInput = document.getElementById('playerSearch');
const sortSelect = document.getElementById('sortSelect');
const tabButtons = document.querySelectorAll('.tab-btn');

function renderCards() {
  if (!cardsContainer) return;

  // Filter
  let filtered = PLAYERS_DATA.filter(p => {
    if (currentFilter === 'batters' && p.type !== 'batter') return false;
    if (currentFilter === 'bowlers' && p.type !== 'bowler') return false;
    
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchName = p.name.toLowerCase().includes(q);
      const matchArch = (p.archetype || p.style || '').toLowerCase().includes(q);
      const matchHand = (p.hand || p.category || '').toLowerCase().includes(q);
      const matchJust = p.justification.toLowerCase().includes(q);
      return matchName || matchArch || matchHand || matchJust;
    }
    return true;
  });

  // Sort
  filtered.sort((a, b) => {
    if (currentSort === 'rank-asc') return a.rank - b.rank;
    if (currentSort === 'rank-desc') return b.rank - a.rank;
    if (currentSort === 'metric-high') {
      return parseFloat(b.primaryMetricValue) - parseFloat(a.primaryMetricValue);
    }
    if (currentSort === 'metric-low') {
      return parseFloat(a.primaryMetricValue) - parseFloat(b.primaryMetricValue);
    }
    if (currentSort === 'balls-high') return b.balls - a.balls;
    return 0;
  });

  if (filtered.length === 0) {
    cardsContainer.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <p style="font-size: 1.2rem; font-weight: 700; color: #fff; margin-bottom: 0.5rem;">No players found</p>
        <p>No cricketers matched your search query "${searchQuery}".</p>
      </div>
    `;
    return;
  }

  cardsContainer.innerHTML = filtered.map(player => {
    const isBatter = player.type === 'batter';
    const rankClass = player.rank === 1 ? 'rank-gold' : '';
    const cardClass = isBatter ? 'batter-card' : 'bowler-card';
    const accentClass = isBatter ? '' : 'bowler-accent';
    const subMeta = isBatter 
      ? `<span class="style-badge">${player.hand}</span> • <span>${player.archetype}</span>`
      : `<span class="style-badge">${player.category}</span> • <span>${player.style}</span>`;

    return `
      <article class="player-card ${cardClass} reveal-on-scroll is-visible" id="${player.id}">
        <div class="card-top-accent ${accentClass}"></div>
        
        <div class="card-header">
          <div class="player-avatar-wrap">
            <img 
              src="${player.image}" 
              alt="${player.name}" 
              class="player-avatar"
              loading="lazy"
              onerror="this.onerror=null; this.src='${getFallbackAvatar(player.name)}';"
            />
            <span class="rank-pill ${rankClass}">#${player.rank}</span>
          </div>
          
          <div class="card-meta">
            <h3 class="player-name" title="${player.name}">${player.name}</h3>
            <span class="archetype-tag">${isBatter ? player.archetype : player.category}</span>
            <div class="sub-meta">${subMeta}</div>
          </div>
        </div>

        <div class="card-primary-stat">
          <div>
            <div class="stat-group-label">${player.primaryMetricLabel}</div>
            <div class="stat-group-value tabular">${player.primaryMetricValue}</div>
          </div>
          <span class="stat-sub-badge">${player.primarySubBadge}</span>
        </div>

        <div class="card-stats-grid">
          <div class="mini-stat">
            <div class="mini-stat-val tabular">${player.stat1.val}</div>
            <div class="mini-stat-lbl">${player.stat1.label}</div>
          </div>
          <div class="mini-stat">
            <div class="mini-stat-val tabular">${player.stat2.val}</div>
            <div class="mini-stat-lbl">${player.stat2.label}</div>
          </div>
          <div class="mini-stat">
            <div class="mini-stat-val tabular">${player.stat3.val}</div>
            <div class="mini-stat-lbl">${player.stat3.label}</div>
          </div>
          <div class="mini-stat">
            <div class="mini-stat-val tabular">${player.stat4.val}</div>
            <div class="mini-stat-lbl">${player.stat4.label}</div>
          </div>
          <div class="mini-stat">
            <div class="mini-stat-val tabular">${player.stat5.val}</div>
            <div class="mini-stat-lbl">${player.stat5.label}</div>
          </div>
          <div class="mini-stat">
            <div class="mini-stat-val tabular">${player.stat6.val}</div>
            <div class="mini-stat-lbl">${player.stat6.label}</div>
          </div>
        </div>

        <div class="card-justification">
          <div class="justification-title">
            <span>⚡ Think-Tank Tactical Justification</span>
          </div>
          <p class="justification-text">${player.justification}</p>
        </div>
      </article>
    `;
  }).join('');

  // Re-observe newly added cards for scroll effects
  initScrollAnimations();
}

// Scroll Entrance Observer
function initScrollAnimations() {
  const reveals = document.querySelectorAll('.reveal-on-scroll:not(.is-visible)');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

// Event Listeners
function setupEvents() {
  // Tabs
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderCards();
    });
  });

  // Search
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderCards();
    });
  }

  // Sort
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderCards();
    });
  }
}

// Initial Boot
document.addEventListener('DOMContentLoaded', () => {
  renderCards();
  initScrollAnimations();
  setupEvents();
});
