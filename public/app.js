/**
 * Rajasthan Royals - SupeRR Selector Season 2 | RRHACKATHON
 * Official Think-Tank Premium Dossier Engine
 */

const BATTERS_ROSTER = [
  {
    rank: 1,
    name: "Tim David",
    image: "assets/players/tim_david.jpg",
    hand: "Right-Handed Batter (RHB)",
    archetype: "Death Power Hitter / Finisher",
    primaryLabel: "Pressure Strike Rate",
    primaryValue: "181.52",
    primarySub: "199.81 Death SR (Overs 16-20)",
    stat1: { label: "Pressure Balls", val: "828" },
    stat2: { label: "Pressure Runs", val: "1,503" },
    stat3: { label: "Death SR (16-20)", val: "199.81" },
    stat4: { label: "Dot % (Min Dots)", val: "30.4%" },
    stat5: { label: "Boundary %", val: "25.7%" },
    stat6: { label: "Chase Finishes", val: "15" },
    bpd: "16.9",
    justification: "Peak death closer in world T20 cricket. In overs 16–20 under high pressure, David strikes at an astronomical 199.81 (535 balls, 1,069 runs). Moreover, this is not reckless slogging: he has remained not out to guide his team across the line 15 distinct times in successful chases."
  },
  {
    rank: 2,
    name: "Namboori Tilak Varma",
    image: "assets/players/tilak_varma.jpg",
    hand: "Left-Handed Batter (LHB)",
    archetype: "Crisis Finisher / Chase Master",
    primaryLabel: "Pressure Strike Rate",
    primaryValue: "149.49",
    primarySub: "21 Chase Finishes (Most in IPL)",
    stat1: { label: "Pressure Balls", val: "1,465" },
    stat2: { label: "Pressure Runs", val: "2,190" },
    stat3: { label: "Death SR (16-20)", val: "191.88" },
    stat4: { label: "Dot % (Min Dots)", val: "30.4%" },
    stat5: { label: "Boundary %", val: "18.8%" },
    stat6: { label: "Chase Finishes", val: "21 ★" },
    bpd: "27.1",
    justification: "Uncontested #1 chase anchor in the competition. Tilak has anchored 21 successful chases to completion—the highest mark in the entire competition database. He averages 27.1 balls per dismissal while maintaining an exceptional death-overs strike rate of 191.88, absorbing early collapses without stalling."
  },
  {
    rank: 3,
    name: "Virat Kohli",
    image: "assets/players/virat_kohli.jpg",
    hand: "Right-Handed Batter (RHB)",
    archetype: "Master Anchor / Chase Specialist",
    primaryLabel: "Pressure Strike Rate",
    primaryValue: "157.70",
    primarySub: "27.2 BPD (Wicket Anchor)",
    stat1: { label: "Pressure Balls", val: "896" },
    stat2: { label: "Pressure Runs", val: "1,413" },
    stat3: { label: "Death SR (16-20)", val: "186.53" },
    stat4: { label: "Dot % (Min Dots)", val: "27.7%" },
    stat5: { label: "Boundary %", val: "21.5%" },
    stat6: { label: "Chase Finishes", val: "9" },
    bpd: "27.2",
    justification: "The benchmark of structural wicket security. Boasting 27.2 balls per dismissal under pressure alongside a sub-28% dot-ball rate (27.7%), Kohli protects the foundation, preventing fatal cluster collapses while seamlessly shifting gears to a 186.53 strike rate at the death."
  },
  {
    rank: 4,
    name: "Rajat Patidar",
    image: "assets/players/rajat_patidar.jpg",
    hand: "Right-Handed Batter (RHB)",
    archetype: "Middle-to-Death Spin Enforcer",
    primaryLabel: "Pressure Strike Rate",
    primaryValue: "160.30",
    primarySub: "217.00 Death SR (Elite)",
    stat1: { label: "Pressure Balls", val: "461" },
    stat2: { label: "Pressure Runs", val: "739" },
    stat3: { label: "Death SR (16-20)", val: "217.00 ★" },
    stat4: { label: "Dot % (Min Dots)", val: "32.5%" },
    stat5: { label: "Boundary %", val: "22.3%" },
    stat6: { label: "Chase Finishes", val: "1" },
    bpd: "17.1",
    justification: "Peerless ability to dismantle opposition bowling plans during the tricky overs 11–16 transition. In death overs under pressure, Patidar's strike rate escalates to an extraordinary 217.00 across 112 deliveries, converting quiet consolidation periods into decisive match-winning surges."
  },
  {
    rank: 5,
    name: "Heinrich Klaasen",
    image: "assets/players/heinrich_klaasen.jpg",
    hand: "Right-Handed Batter (RHB)",
    archetype: "Zero-Dot Spin Demolisher",
    primaryLabel: "Pressure Strike Rate",
    primaryValue: "173.61",
    primarySub: "25.3% Dots (Elite Resistance)",
    stat1: { label: "Pressure Balls", val: "864" },
    stat2: { label: "Pressure Runs", val: "1,500" },
    stat3: { label: "Death SR (16-20)", val: "198.97" },
    stat4: { label: "Dot % (Min Dots)", val: "25.3% ★" },
    stat5: { label: "Boundary %", val: "23.0%" },
    stat6: { label: "Chase Finishes", val: "5" },
    bpd: "20.6",
    justification: "Unrivaled boundary efficiency and strike rotation against spin. Klaasen records a microscopic dot-ball rate of just 25.3% under pressure—scoring off approximately 75% of all pressure deliveries faced. Backed by a 198.97 death strike rate and 1,500 pressure runs."
  },
  {
    rank: 6,
    name: "Tristan Stubbs",
    image: "assets/players/tristan_stubbs.png",
    hand: "Right-Handed Batter (RHB)",
    archetype: "360° Strike Rotator & Closer",
    primaryLabel: "Pressure Strike Rate",
    primaryValue: "164.74",
    primarySub: "24.1% Dots (Lowest in IPL)",
    stat1: { label: "Pressure Balls", val: "709" },
    stat2: { label: "Pressure Runs", val: "1,168" },
    stat3: { label: "Death SR (16-20)", val: "196.16" },
    stat4: { label: "Dot % (Min Dots)", val: "24.1% ★" },
    stat5: { label: "Boundary %", val: "21.2%" },
    stat6: { label: "Chase Finishes", val: "10" },
    bpd: "23.6",
    justification: "Holder of the lowest dot-ball percentage in the entire IPL dataset: a phenomenal 24.1%. In scenarios where dot balls create fatal psychological pressure, Stubbs guarantees continuous scoreboard movement. Complemented by 10 chase finishes, 23.6 BPD, and a 196.16 death strike rate."
  },
  {
    rank: 7,
    name: "Vaibhav Sooryavanshi",
    image: "assets/players/vaibhav_sooryavanshi.jpg",
    hand: "Left-Handed Batter (LHB)",
    archetype: "Generational Boundary Disruptor",
    primaryLabel: "Pressure Strike Rate",
    primaryValue: "228.45",
    primarySub: "38.8% Boundary % (Peak Ceiling)",
    stat1: { label: "Pressure Balls", val: "232" },
    stat2: { label: "Pressure Runs", val: "530" },
    stat3: { label: "Death SR (16-20)", val: "290.00" },
    stat4: { label: "Dot % (Min Dots)", val: "35.8%" },
    stat5: { label: "Boundary %", val: "38.8% ★" },
    stat6: { label: "Chase Finishes", val: "0" },
    bpd: "29.0",
    justification: "Unprecedented boundary frequency ceiling. When the game enters crisis mode, 38.8% of his deliveries result in boundaries (nearly 4 in every 10 balls). Striking at 228.45 under pressure with 29.0 balls per dismissal, Sooryavanshi rips games away before defensive fields can settle."
  },
  {
    rank: 8,
    name: "Nicholas Pooran",
    image: "assets/players/nicholas_pooran.png",
    hand: "Left-Handed Batter (LHB)",
    archetype: "Explosive Left-Handed Finisher",
    primaryLabel: "Pressure Strike Rate",
    primaryValue: "165.54",
    primarySub: "1,672 Runs & 190.1 Death SR",
    stat1: { label: "Pressure Balls", val: "1,010" },
    stat2: { label: "Pressure Runs", val: "1,672" },
    stat3: { label: "Death SR (16-20)", val: "190.07" },
    stat4: { label: "Dot % (Min Dots)", val: "33.9%" },
    stat5: { label: "Boundary %", val: "23.5%" },
    stat6: { label: "Chase Finishes", val: "12" },
    bpd: "21.0",
    justification: "Explosive middle-order enforcer with 1,672 pressure runs, 12 chase finishes, and a 190.07 death strike rate. As a destructive left-hander, Pooran shatters bowling matchups and boundary dimensions, forcing opposition captains into compromised defensive field sets."
  },
  {
    rank: 9,
    name: "David Miller",
    image: "assets/players/david_miller.png",
    hand: "Left-Handed Batter (LHB)",
    archetype: "Veteran Closer / Ice-Man",
    primaryLabel: "Pressure Strike Rate",
    primaryValue: "157.71",
    primarySub: "15 Chase Finishes & Sub-29% Dots",
    stat1: { label: "Pressure Balls", val: "901" },
    stat2: { label: "Pressure Runs", val: "1,421" },
    stat3: { label: "Death SR (16-20)", val: "174.07" },
    stat4: { label: "Dot % (Min Dots)", val: "28.3%" },
    stat5: { label: "Boundary %", val: "20.3%" },
    stat6: { label: "Chase Finishes", val: "15" },
    bpd: "21.5",
    justification: "Illustrious veteran track record of 15 chase finishes and 1,421 pressure runs. His sub-29% dot-ball rate (28.3%) and 174.07 death strike rate reflect an ice-cool temperament that prevents panic in nail-biting final-over encounters."
  },
  {
    rank: 10,
    name: "Suryakumar Yadav",
    image: "assets/players/suryakumar_yadav.jpg",
    hand: "Right-Handed Batter (RHB)",
    archetype: "360° Match Winner / Enforcer",
    primaryLabel: "Pressure Strike Rate",
    primaryValue: "175.94",
    primarySub: "2,289 Pressure Runs (Most in IPL)",
    stat1: { label: "Pressure Balls", val: "1,301" },
    stat2: { label: "Pressure Runs", val: "2,289 ★" },
    stat3: { label: "Death SR (16-20)", val: "217.22" },
    stat4: { label: "Dot % (Min Dots)", val: "31.4%" },
    stat5: { label: "Boundary %", val: "26.7%" },
    stat6: { label: "Chase Finishes", val: "12" },
    bpd: "21.7",
    justification: "The volume foundation of world T20 batting. His aggregate of 2,289 runs under pressure at a 175.94 strike rate (with 217.22 at the death) is the statistical volume pinnacle of the competition, creating immense scoreboard momentum across any phase."
  }
];

const BOWLERS_ROSTER = [
  {
    rank: 1,
    name: "Josh Hazlewood",
    image: "assets/players/josh_hazlewood.jpg",
    style: "Right-arm fast-medium",
    category: "Pace",
    primaryLabel: "Pressure Economy",
    primaryValue: "8.17",
    primarySub: "43.4% Dot % (#1 in IPL)",
    stat1: { label: "Pressure Balls", val: "847" },
    stat2: { label: "Death Econ (16-20)", val: "9.47" },
    stat3: { label: "Dot % (Field Exec)", val: "43.4% ★" },
    stat4: { label: "Total Pressure Wkts", val: "62" },
    stat5: { label: "Death Wickets", val: "30" },
    stat6: { label: "Partnership Breakers", val: "8" },
    hauls: "14 Winning Hauls",
    justification: "The ultimate benchmark of field execution. Hazlewood leads the entire competition with a staggering 43.4% dot-ball rate under pressure (nearly half of all deliveries yield zero runs). By metronomically hitting top-of-off line and defensive lengths, he forces errors, resulting in 14 match-winning hauls."
  },
  {
    rank: 2,
    name: "Jasprit Bumrah",
    image: "assets/players/jasprit_bumrah.jpg",
    style: "Right-arm Fast",
    category: "Pace",
    primaryLabel: "Pressure Economy",
    primaryValue: "7.00",
    primarySub: "7.19 Death Econ (Lowest in IPL)",
    stat1: { label: "Pressure Balls", val: "957" },
    stat2: { label: "Death Econ (16-20)", val: "7.19 ★" },
    stat3: { label: "Dot % (Field Exec)", val: "42.5%" },
    stat4: { label: "Total Pressure Wkts", val: "52" },
    stat5: { label: "Death Wickets", val: "35" },
    stat6: { label: "Partnership Breakers", val: "13" },
    hauls: "12 Winning Hauls",
    justification: "The gold standard of run suppression. Conceding just 7.00 RPO overall and a microscopic 7.19 RPO in death overs across 957 pressure balls, Bumrah completely defies modern T20 scoring inflations (where death par is 9.82 RPO). Supported by a 42.5% dot rate and 35 death wickets."
  },
  {
    rank: 3,
    name: "Arshdeep Singh",
    image: "assets/players/arshdeep_singh.jpg",
    style: "Left-arm medium-fast",
    category: "Pace",
    primaryLabel: "Pressure Economy",
    primaryValue: "8.81",
    primarySub: "109 Pressure Wkts (Most in IPL)",
    stat1: { label: "Pressure Balls", val: "1,585" },
    stat2: { label: "Death Econ (16-20)", val: "9.46" },
    stat3: { label: "Dot % (Field Exec)", val: "36.8%" },
    stat4: { label: "Total Pressure Wkts", val: "109 ★" },
    stat5: { label: "Death Wickets", val: "75 ★" },
    stat6: { label: "Partnership Breakers", val: "33 ★" },
    hauls: "18 Winning Hauls",
    justification: "The premier volume wicket-taker in world cricket under pressure. Leads the entire tournament across three decisive metrics: 109 total pressure wickets, 75 death-overs wickets, and 33 partnership-breaking strikes. Yorker execution systematically destroys lower orders."
  },
  {
    rank: 4,
    name: "Rashid Khan",
    image: "assets/players/rashid_khan.jpg",
    style: "Right-arm Leg-Break",
    category: "Spin",
    primaryLabel: "Pressure Economy",
    primaryValue: "7.46",
    primarySub: "19 Winning Hauls (Most in IPL)",
    stat1: { label: "Pressure Balls", val: "1,386" },
    stat2: { label: "Death Econ (16-20)", val: "8.63" },
    stat3: { label: "Dot % (Field Exec)", val: "36.0%" },
    stat4: { label: "Total Pressure Wkts", val: "86" },
    stat5: { label: "Death Wickets", val: "51" },
    stat6: { label: "Partnership Breakers", val: "22" },
    hauls: "19 Winning Hauls ★",
    justification: "Unmatched match-winning conversion. Rashid has produced 19 distinct multi-wicket hauls in matches won by his team—the highest in the competition. Operating at a 7.46 economy with 86 pressure wickets and 51 death wickets, he provides both suffocating containment and strike potency."
  },
  {
    rank: 5,
    name: "Bhuvneshwar Kumar",
    image: "assets/players/bhuvneshwar_kumar.jpg",
    style: "Right-arm medium",
    category: "Pace",
    primaryLabel: "Pressure Economy",
    primaryValue: "8.56",
    primarySub: "42 Death Wickets hitting fields",
    stat1: { label: "Pressure Balls", val: "1,144" },
    stat2: { label: "Death Econ (16-20)", val: "9.63" },
    stat3: { label: "Dot % (Field Exec)", val: "36.0%" },
    stat4: { label: "Total Pressure Wkts", val: "61" },
    stat5: { label: "Death Wickets", val: "42" },
    stat6: { label: "Partnership Breakers", val: "17" },
    hauls: "9 Winning Hauls",
    justification: "Masterclass seam and death discipline. With 42 death wickets, 17 partnership breakers, and a 36.0% dot-ball rate, Bhuvneshwar's knuckle-balls and wide yorkers consistently execute defensive field plans across late-innings crisis situations."
  },
  {
    rank: 6,
    name: "Yuzvendra Chahal",
    image: "assets/players/yuzvendra_chahal.jpg",
    style: "Right-arm Leg-Break",
    category: "Spin",
    primaryLabel: "Pressure Economy",
    primaryValue: "8.77",
    primarySub: "23 Partnership Breakers (30+ Stands)",
    stat1: { label: "Pressure Balls", val: "1,230" },
    stat2: { label: "Death Econ (16-20)", val: "9.91" },
    stat3: { label: "Dot % (Field Exec)", val: "29.9%" },
    stat4: { label: "Total Pressure Wkts", val: "76" },
    stat5: { label: "Death Wickets", val: "34" },
    stat6: { label: "Partnership Breakers", val: "23" },
    hauls: "14 Winning Hauls",
    justification: "Fearless attacking strike weapon. Breaking 23 dangerous partnerships of 30+ runs and claiming 76 pressure wickets (with 14 winning hauls), Chahal embraces flight in high-leverage middle overs to generate game-breaking wickets when opponents mount chases."
  },
  {
    rank: 7,
    name: "Matheesha Pathirana",
    image: "assets/players/matheesha_pathirana.png",
    style: "Right-arm Fast (Sling)",
    category: "Pace",
    primaryLabel: "Pressure Economy",
    primaryValue: "7.70",
    primarySub: "44 Death Wickets in 693 Balls",
    stat1: { label: "Pressure Balls", val: "693" },
    stat2: { label: "Death Econ (16-20)", val: "8.18" },
    stat3: { label: "Dot % (Field Exec)", val: "37.4%" },
    stat4: { label: "Total Pressure Wkts", val: "57" },
    stat5: { label: "Death Wickets", val: "44 ★" },
    stat6: { label: "Partnership Breakers", val: "15" },
    hauls: "8 Winning Hauls",
    justification: "The deadliest per-ball strike weapon at the death. In just 693 pressure balls, Pathirana has claimed 44 death wickets while maintaining an exceptional 8.18 death economy and 7.70 overall economy, striking every 12.1 deliveries with his unpickable sling yorkers."
  },
  {
    rank: 8,
    name: "Wanindu Hasaranga",
    image: "assets/players/wanindu_hasaranga.jpg",
    style: "Right-arm Leg-Break",
    category: "Spin",
    primaryLabel: "Pressure Economy",
    primaryValue: "8.27",
    primarySub: "73 Wkts & 23 Partnership Breakers",
    stat1: { label: "Pressure Balls", val: "895" },
    stat2: { label: "Death Econ (16-20)", val: "8.38" },
    stat3: { label: "Dot % (Field Exec)", val: "36.1%" },
    stat4: { label: "Total Pressure Wkts", val: "73" },
    stat5: { label: "Death Wickets", val: "27" },
    stat6: { label: "Partnership Breakers", val: "23" },
    hauls: "14 Winning Hauls",
    justification: "High-impact middle enforcer with 73 pressure wickets, 23 partnership breakers, and 14 match-winning hauls. His quick skidding googlies and rapid leg-breaks consistently stifle batters attempting to build acceleration momentum."
  },
  {
    rank: 9,
    name: "Jason Holder",
    image: "assets/players/jason_holder.jpg",
    style: "Right-arm medium-fast",
    category: "Pace",
    primaryLabel: "Pressure Economy",
    primaryValue: "8.59",
    primarySub: "43 Death Wickets & 19 Breakers",
    stat1: { label: "Pressure Balls", val: "1,077" },
    stat2: { label: "Death Econ (16-20)", val: "9.82" },
    stat3: { label: "Dot % (Field Exec)", val: "33.8%" },
    stat4: { label: "Total Pressure Wkts", val: "70" },
    stat5: { label: "Death Wickets", val: "43" },
    stat6: { label: "Partnership Breakers", val: "19" },
    hauls: "11 Winning Hauls",
    justification: "Heavy-ball death enforcer; 70 pressure wickets and 43 death wickets. Using his steep 6ft 7in release height, Holder extracts uncomfortable bounce at the death to force mistimed pull shots and boundary catches under extreme pressure."
  },
  {
    rank: 10,
    name: "Krunal Pandya",
    image: "assets/players/krunal_pandya.png",
    style: "Slow left-arm orthodox",
    category: "Spin",
    primaryLabel: "Pressure Economy",
    primaryValue: "7.39",
    primarySub: "7.39 Econ & 13.8% Boundaries",
    stat1: { label: "Pressure Balls", val: "581" },
    stat2: { label: "Death Econ (16-20)", val: "10.09" },
    stat3: { label: "Dot % (Field Exec)", val: "32.7%" },
    stat4: { label: "Total Pressure Wkts", val: "28" },
    stat5: { label: "Death Wickets", val: "5" },
    stat6: { label: "Partnership Breakers", val: "9" },
    hauls: "7 Winning Hauls",
    justification: "Defensive run stranglehold. Conceding just 7.39 RPO and a minuscule 13.8% boundary rate under high pressure, Krunal fires tight darts into the blockhole to choke opposition chases and prevent fatal boundary leaking."
  }
];

// Current State
let currentRosterMode = 'batters'; // 'batters' or 'bowlers'

// DOM Elements
const dossierListEl = document.getElementById('dossierList');
const sectionHeadlineEl = document.getElementById('sectionHeadline');
const sectionSubEl = document.getElementById('sectionSub');
const switchBattersBtn = document.getElementById('switchBatters');
const switchBowlersBtn = document.getElementById('switchBowlers');

// Render the 10 Player Dossiers in Zig-Zag Alternating Layout
function renderRoster() {
  if (!dossierListEl) return;

  const isBatters = currentRosterMode === 'batters';
  const dataset = isBatters ? BATTERS_ROSTER : BOWLERS_ROSTER;

  // Update Section Headers
  if (sectionHeadlineEl) {
    sectionHeadlineEl.innerHTML = isBatters
      ? `<span>🏏 OFFICIAL TOP 10 BATTERS UNDER PRESSURE</span>`
      : `<span>🎯 OFFICIAL TOP 10 BOWLERS UNDER PRESSURE</span>`;
  }
  if (sectionSubEl) {
    sectionSubEl.textContent = isBatters
      ? "Selected on Unstop submission dropdowns | Evaluated on pure run velocity, dot resistance, chase finishes and wicket security."
      : "Selected on Unstop submission dropdowns | Evaluated on field execution (dot %), run containment, partnership breakers and winning hauls.";
  }

  // Generate Alternating Zig-Zag HTML
  dossierListEl.innerHTML = dataset.map((player, index) => {
    const isEven = (index % 2 === 1); // 0-indexed: index 0 (Rank 1) is odd, index 1 (Rank 2) is even
    const rowClass = isEven ? 'even-row' : 'odd-row';
    const animationClass = isEven ? 'reveal-right' : 'reveal-left';
    const themeClass = isBatters ? 'batter-theme' : 'bowler-theme';
    const rankClass = player.rank === 1 ? 'rank-champion' : '';
    const crownIcon = player.rank === 1 ? '👑 ' : '';

    return `
      <article class="player-dossier-card ${rowClass} ${themeClass} ${animationClass}" id="player-${player.rank}">
        
        <!-- Cricket Ball Cutout with Seam Stitch Frame -->
        <div class="dossier-visual">
          <div class="dossier-rank-emblem ${rankClass}">
            <span>${crownIcon}#${player.rank}</span>
          </div>

          <div class="ball-cutout-frame">
            <div class="cricket-seam-arc"></div>
            <img 
              src="${player.image}" 
              alt="${player.name}" 
              class="player-photo-cutout"
              loading="lazy"
            />
          </div>
        </div>

        <!-- Analytical Intel, Metrics & Tactical Dossier -->
        <div class="dossier-intel">
          <div class="player-role-pill">
            <span>${isBatters ? '🏏 BATTER' : '🎯 BOWLER'}</span>
            <span>•</span>
            <span>${isBatters ? player.archetype : player.category}</span>
          </div>

          <h3 class="dossier-player-name">${player.name}</h3>
          
          <div class="dossier-technique">
            <span>${isBatters ? player.hand : player.style}</span>
            <span>•</span>
            <span style="color: var(--text-dim);">${isBatters ? 'Balls/Dismissal: ' + player.bpd : player.hauls}</span>
          </div>

          <!-- Primary Metric Banner -->
          <div class="dossier-primary-stat">
            <div>
              <div class="primary-stat-lbl">${player.primaryLabel}</div>
              <div class="primary-stat-num tabular">${player.primaryValue}</div>
            </div>
            <div class="primary-sub-highlight">${player.primarySub}</div>
          </div>

          <!-- 6-Grid Structured Stats -->
          <div class="dossier-grid">
            <div class="dossier-tile">
              <div class="dossier-tile-num tabular">${player.stat1.val}</div>
              <div class="dossier-tile-lbl">${player.stat1.label}</div>
            </div>
            <div class="dossier-tile">
              <div class="dossier-tile-num tabular">${player.stat2.val}</div>
              <div class="dossier-tile-lbl">${player.stat2.label}</div>
            </div>
            <div class="dossier-tile">
              <div class="dossier-tile-num tabular">${player.stat3.val}</div>
              <div class="dossier-tile-lbl">${player.stat3.label}</div>
            </div>
            <div class="dossier-tile">
              <div class="dossier-tile-num tabular">${player.stat4.val}</div>
              <div class="dossier-tile-lbl">${player.stat4.label}</div>
            </div>
            <div class="dossier-tile">
              <div class="dossier-tile-num tabular">${player.stat5.val}</div>
              <div class="dossier-tile-lbl">${player.stat5.label}</div>
            </div>
            <div class="dossier-tile">
              <div class="dossier-tile-num tabular">${player.stat6.val}</div>
              <div class="dossier-tile-lbl">${player.stat6.label}</div>
            </div>
          </div>

          <!-- Think-Tank Tactical Justification Briefing -->
          <div class="dossier-briefing">
            <div class="briefing-tag">
              <span>⚡ Think-Tank Tactical Justification</span>
            </div>
            <p class="briefing-text">${player.justification}</p>
          </div>
        </div>

      </article>
    `;
  }).join('');

  // Re-initialize animations
  observeScrollReveals();
}

// Scroll Entrance Observer
function observeScrollReveals() {
  const elements = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-fade');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

// Switcher Controls Setup
function setupSwitcher() {
  if (switchBattersBtn) {
    switchBattersBtn.addEventListener('click', () => {
      if (currentRosterMode === 'batters') return;
      currentRosterMode = 'batters';
      switchBattersBtn.classList.add('active');
      switchBowlersBtn.classList.remove('active');
      renderRoster();
    });
  }

  if (switchBowlersBtn) {
    switchBowlersBtn.addEventListener('click', () => {
      if (currentRosterMode === 'bowlers') return;
      currentRosterMode = 'bowlers';
      switchBowlersBtn.classList.add('active');
      switchBattersBtn.classList.remove('active');
      renderRoster();
    });
  }
}

// Global Init
document.addEventListener('DOMContentLoaded', () => {
  renderRoster();
  setupSwitcher();
  observeScrollReveals();
});
