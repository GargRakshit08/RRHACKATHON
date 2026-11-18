import os
import subprocess

html_content = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>SupeRR Selector Season 2 - Methodology Report & Player Rankings</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;600;700&display=swap');

  @page {
    size: A4 portrait;
    margin: 10mm 12mm 10mm 12mm;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }

  body {
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    color: #0F172A;
    background: #FFFFFF;
    font-size: 8.5pt;
    line-height: 1.42;
  }

  .mono {
    font-family: 'JetBrains Mono', Consolas, monospace;
  }

  /* Page container */
  .page {
    width: 100%;
    page-break-after: always;
    page-break-inside: avoid;
    height: 277mm; /* Exact A4 height minus margins */
    max-height: 277mm;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2mm 0;
  }

  .page:last-child {
    page-break-after: avoid;
  }

  /* Header & Footer */
  .header-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #E6186D;
    padding-bottom: 2.5mm;
    margin-bottom: 3.5mm;
  }

  .rr-brand {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .rr-logo-box {
    background: #001A4B;
    color: #E6186D;
    font-weight: 800;
    font-size: 13pt;
    padding: 3px 8px;
    border-radius: 5px;
    letter-spacing: 0.5px;
    border: 1px solid #E6186D;
  }

  .brand-text h4 {
    font-size: 10pt;
    font-weight: 800;
    color: #001A4B;
    letter-spacing: 0.3px;
    text-transform: uppercase;
  }

  .brand-text p {
    font-size: 7pt;
    color: #64748B;
    font-weight: 600;
    letter-spacing: 0.5px;
  }

  .header-tag {
    background: #FFF1F6;
    border: 1px solid #FFC5DB;
    color: #D70566;
    font-size: 7pt;
    font-weight: 700;
    padding: 3px 9px;
    border-radius: 20px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .footer-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #E2E8F0;
    padding-top: 2mm;
    font-size: 7pt;
    color: #64748B;
    margin-top: auto;
  }

  .footer-bar .pink-text {
    color: #E6186D;
    font-weight: 700;
  }

  /* Titles */
  .section-title {
    font-size: 12pt;
    font-weight: 800;
    color: #001A4B;
    margin-bottom: 2mm;
    display: flex;
    align-items: center;
    gap: 6px;
    letter-spacing: -0.2px;
  }

  .section-title .bar {
    width: 4px;
    height: 14px;
    background: #E6186D;
    border-radius: 2px;
    display: inline-block;
  }

  .sub-desc {
    font-size: 8pt;
    color: #475569;
    margin-bottom: 3mm;
    line-height: 1.35;
  }

  /* Metric KPI Grid */
  .kpi-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2.5mm;
    margin-bottom: 3.5mm;
  }

  .kpi-card {
    background: #F8FAFC;
    border: 1px solid #E2E8F0;
    border-radius: 6px;
    padding: 2.8mm 3mm;
    border-top: 3px solid #001A4B;
  }

  .kpi-card.pink { border-top-color: #E6186D; }
  .kpi-card.gold { border-top-color: #D4AF37; }
  .kpi-card.navy { border-top-color: #001A4B; }
  .kpi-card.sky { border-top-color: #0284C7; }

  .kpi-label {
    font-size: 6.8pt;
    font-weight: 700;
    color: #64748B;
    text-transform: uppercase;
    letter-spacing: 0.4px;
    margin-bottom: 1.5px;
  }

  .kpi-val {
    font-size: 13.5pt;
    font-weight: 800;
    color: #001A4B;
    font-family: 'JetBrains Mono', monospace;
    line-height: 1.1;
  }

  .kpi-card.pink .kpi-val { color: #E6186D; }
  .kpi-card.gold .kpi-val { color: #B45309; }

  .kpi-sub {
    font-size: 6.8pt;
    color: #475569;
    margin-top: 2px;
  }

  /* Callout boxes */
  .callout-box {
    background: #F8FAFC;
    border: 1px solid #E2E8F0;
    border-left: 3.5px solid #001A4B;
    padding: 2.8mm 3.2mm;
    border-radius: 4px;
    margin-bottom: 3mm;
    font-size: 8pt;
    line-height: 1.38;
  }

  .callout-box.pink-callout {
    background: #FFF5F8;
    border-color: #FED7E2;
    border-left-color: #E6186D;
  }

  .callout-box.gold-callout {
    background: #FFFBEB;
    border-color: #FDE68A;
    border-left-color: #D4AF37;
  }

  .callout-title {
    font-size: 8pt;
    font-weight: 700;
    color: #001A4B;
    margin-bottom: 1.5px;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .callout-box.pink-callout .callout-title { color: #9D174D; }
  .callout-box.gold-callout .callout-title { color: #92400E; }

  /* Tables */
  table.data-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 7.4pt;
    margin-bottom: 3mm;
    border: 1px solid #CBD5E1;
  }

  table.data-table th {
    background: #001A4B;
    color: #FFFFFF;
    font-weight: 700;
    padding: 4.5px 4.5px;
    text-align: left;
    font-size: 7pt;
    letter-spacing: 0.2px;
    border: 1px solid #0F2A66;
  }

  table.data-table th.center, table.data-table td.center {
    text-align: center;
  }

  table.data-table th.num, table.data-table td.num {
    text-align: right;
    font-family: 'JetBrains Mono', monospace;
  }

  table.data-table td {
    padding: 3.8px 4.5px;
    border-bottom: 1px solid #E2E8F0;
    color: #1E293B;
  }

  table.data-table tr:nth-child(even) {
    background-color: #F8FAFC;
  }

  table.data-table tr:hover {
    background-color: #FFF0F6;
  }

  /* Badges */
  .rank-badge {
    display: inline-block;
    width: 17px;
    height: 17px;
    line-height: 17px;
    text-align: center;
    border-radius: 50%;
    font-size: 7.2pt;
    font-weight: 800;
  }

  .rank-1 { background: #FEF08A; color: #854D0E; border: 1px solid #FACC15; }
  .rank-2 { background: #E2E8F0; color: #334155; border: 1px solid #CBD5E1; }
  .rank-3 { background: #FED7AA; color: #9A3412; border: 1px solid #FB923C; }
  .rank-other { background: #F1F5F9; color: #475569; border: 1px solid #E2E8F0; }

  .role-pill {
    display: inline-block;
    padding: 1px 4.5px;
    border-radius: 3px;
    font-size: 6.6pt;
    font-weight: 600;
    letter-spacing: 0.2px;
  }

  .pill-lhb { background: #EFF6FF; color: #1D4ED8; border: 1px solid #BFDBFE; }
  .pill-rhb { background: #F0FDF4; color: #15803D; border: 1px solid #BBF7D0; }
  .pill-spin { background: #FAF5FF; color: #7E22CE; border: 1px solid #E9D5FF; }
  .pill-pace { background: #FFF1F2; color: #BE123C; border: 1px solid #FECDD3; }

  .score-val {
    font-weight: 800;
    color: #E6186D;
    font-family: 'JetBrains Mono', monospace;
  }

  .highlight-val {
    font-weight: 700;
    color: #001A4B;
  }

  /* Spotlight Grid */
  .spotlight-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2.8mm;
    margin-bottom: 3mm;
  }

  .spotlight-card {
    background: #FFFFFF;
    border: 1px solid #CBD5E1;
    border-left: 3px solid #E6186D;
    border-radius: 5px;
    padding: 2.5mm 3.2mm;
    box-shadow: 0 1px 2px rgba(0,0,0,0.03);
  }

  .spotlight-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5mm;
    border-bottom: 1px solid #F1F5F9;
    padding-bottom: 1.2mm;
  }

  .spotlight-name {
    font-size: 8.5pt;
    font-weight: 800;
    color: #001A4B;
  }

  .spotlight-rank {
    background: #001A4B;
    color: #FFFFFF;
    font-size: 6.8pt;
    font-weight: 700;
    padding: 1px 5px;
    border-radius: 10px;
  }

  .spotlight-stats {
    display: flex;
    gap: 8px;
    margin-bottom: 1.5mm;
  }

  .spotlight-stat {
    font-size: 7pt;
    color: #475569;
  }

  .spotlight-stat strong {
    color: #001A4B;
    font-family: 'JetBrains Mono', monospace;
  }

  .spotlight-desc {
    font-size: 7.2pt;
    color: #334155;
    line-height: 1.35;
  }

  /* Architecture Diagram & Formulas */
  .flowchart-container {
    display: flex;
    flex-direction: column;
    gap: 2.5mm;
    margin-bottom: 3.5mm;
  }

  .flow-row {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    gap: 2.5mm;
  }

  .flow-node {
    flex: 1;
    background: #F8FAFC;
    border: 1px solid #CBD5E1;
    border-radius: 5px;
    padding: 2.5mm 3mm;
    font-size: 7.3pt;
  }

  .flow-node.primary {
    background: #001A4B;
    color: #FFFFFF;
    border-color: #001A4B;
  }

  .flow-node.pink-node {
    background: #FFF1F6;
    border-color: #FFC5DB;
    color: #001A4B;
  }

  .flow-node-title {
    font-weight: 800;
    font-size: 8pt;
    margin-bottom: 2mm;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .formula-card {
    background: #F8FAFC;
    border: 1px solid #E2E8F0;
    border-radius: 5px;
    padding: 2.8mm 3.2mm;
    margin-bottom: 2.5mm;
  }

  .formula-title {
    font-size: 7.8pt;
    font-weight: 800;
    color: #001A4B;
    margin-bottom: 1.5mm;
    display: flex;
    justify-content: space-between;
  }

  .formula-box {
    background: #FFFFFF;
    border: 1px solid #CBD5E1;
    border-radius: 4px;
    padding: 2mm 3mm;
    font-family: 'JetBrains Mono', monospace;
    font-size: 7.4pt;
    color: #001A4B;
    margin-bottom: 1.5mm;
    font-weight: 600;
  }

  .formula-expl {
    font-size: 7pt;
    color: #475569;
    line-height: 1.35;
  }

  /* Two Column Layout */
  .two-col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3.5mm;
    margin-bottom: 3mm;
  }

  .col-card {
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 5px;
    padding: 2.8mm 3.2mm;
  }

  .col-card h5 {
    font-size: 8pt;
    font-weight: 800;
    color: #001A4B;
    margin-bottom: 2mm;
    border-bottom: 1px solid #F1F5F9;
    padding-bottom: 1mm;
  }

  ul.clean-list {
    list-style: none;
    padding-left: 0;
  }

  ul.clean-list li {
    font-size: 7.2pt;
    color: #334155;
    margin-bottom: 1.8mm;
    position: relative;
    padding-left: 12px;
    line-height: 1.35;
  }

  ul.clean-list li::before {
    content: "•";
    color: #E6186D;
    font-weight: 800;
    position: absolute;
    left: 2px;
    font-size: 10pt;
    top: -2px;
  }

  .checklist-item {
    display: flex;
    align-items: flex-start;
    gap: 6px;
    margin-bottom: 1.8mm;
    font-size: 7.3pt;
  }

  .check-icon {
    color: #059669;
    font-weight: 800;
    font-size: 8.5pt;
    line-height: 1;
  }
</style>
</head>
<body>

<!-- ========================================== -->
<!-- PAGE 1: EXECUTIVE BRIEFING & CORE OVERVIEW -->
<!-- ========================================== -->
<div class="page">
  <div>
    <div class="header-bar">
      <div class="rr-brand">
        <div class="rr-logo-box">RR</div>
        <div class="brand-text">
          <h4>Rajasthan Royals Analytics & Scouting</h4>
          <p>Cricket Intelligence Think-Tank | SupeRR Selector Season 2</p>
        </div>
      </div>
      <div class="header-tag">Round 1 Official Submission</div>
    </div>

    <div style="margin-bottom: 3.5mm;">
      <h1 style="font-size: 15pt; font-weight: 800; color: #001A4B; line-height: 1.25; margin-bottom: 1.5mm;">
        Identifying the Most Reliable Players Under Pressure in T20 Cricket
      </h1>
      <p style="font-size: 8.2pt; color: #475569; font-weight: 500;">
        A Continuous Win-Probability Swing Framework & Contextual Performance Index Calibrated for Franchise Auction Strategy
      </p>
    </div>

    <!-- KPI Grid -->
    <div class="kpi-grid">
      <div class="kpi-card pink">
        <div class="kpi-label">Analyzed Deliveries</div>
        <div class="kpi-val">200,999</div>
        <div class="kpi-sub">883 T20 & T20I Matches</div>
      </div>
      <div class="kpi-card gold">
        <div class="kpi-label">High-Pressure Sample</div>
        <div class="kpi-val">98,752</div>
        <div class="kpi-sub">49.1% High-Leverage Phase</div>
      </div>
      <div class="kpi-card navy">
        <div class="kpi-label">RR Retained Core</div>
        <div class="kpi-val">19 Players</div>
        <div class="kpi-sub">Core Nucleus Locked</div>
      </div>
      <div class="kpi-card sky">
        <div class="kpi-label">Auction War Chest</div>
        <div class="kpi-val">₹27.05 Cr</div>
        <div class="kpi-sub">6 Vacancies (3 Overseas)</div>
      </div>
    </div>

    <!-- Executive Summary -->
    <div class="section-title"><span class="bar"></span> 1. Executive Summary & Problem Formulation</div>
    <div class="sub-desc">
      In modern T20 cricket, career aggregates (raw average, general strike rate, overall economy) mislead scouting departments. A boundary hit in the 4th over of a 220-run blowout carries fundamentally different psychological and probabilistic weight than a boundary struck in the 19th over requiring 12 runs off 6 balls with 4 wickets in hand. 
      The goal of <strong>SupeRR Selector Season 2</strong> is to isolate true match-winning reliability when win leverage spikes.
    </div>

    <div class="callout-box pink-callout">
      <div class="callout-title">
        <span>⚡</span> The Dual-Engine Pressure Thesis
      </div>
      Pressure is not a static over-number. It is a mathematical dynamic between <strong>Win Probability (WP) Volatility</strong> and <strong>Acute Situational Crises</strong>. We developed a Dual-Engine Model:
      <strong>Engine 1</strong> computes real-time Leverage Index (<i>LI<sub>t</sub></i>) across 2nd-innings run chases, tagging balls where outcome swings exceed 1.25&times; the historical mean.
      <strong>Engine 2</strong> accounts for 1st-innings defensive states: top-order collapses (&le; 6 overs with &ge; 2 wickets down), death-overs par acceleration (overs 16–20), and super overs.
    </div>

    <div class="section-title"><span class="bar"></span> 2. Architectural Think-Tank Overview</div>
    <div class="sub-desc">
      Our Think-Tank Performance Score moves beyond isolated metrics by penalizing dot-ball accumulation and unforced dismissals while heavily weighting match-winning closures and partnership-breaking strikes:
    </div>

    <div class="two-col">
      <div class="col-card" style="border-top: 3px solid #E6186D;">
        <h5>🏏 Batter Evaluation Architecture</h5>
        <ul class="clean-list">
          <li><strong>Least Dots Wasted (20%)</strong>: Strike rotation under leverage prevents scoreboard stalling.</li>
          <li><strong>Pressure Strike Rate & Volume (40%)</strong>: Boundary velocity adjusted for match context.</li>
          <li><strong>Finishing the Job (15%)</strong>: Match-winning Not-Outs in successful run chases.</li>
          <li><strong>Wicket Preservation (10%)</strong>: Balls per dismissal (<i>BPD</i>) penalizes reckless dismissals.</li>
        </ul>
      </div>

      <div class="col-card" style="border-top: 3px solid #001A4B;">
        <h5>🎯 Bowler Evaluation Architecture</h5>
        <ul class="clean-list">
          <li><strong>Dot Ball % to the Field (20%)</strong>: Consistent execution of tactical plans under heat.</li>
          <li><strong>Run Suppression & Economy (20%)</strong>: Economy rate relative to phase par.</li>
          <li><strong>Death Overs Wickets (20%)</strong>: Wickets in overs 16–20 that dismantle opposition tail.</li>
          <li><strong>Partnership Breakers & Hauls (40%)</strong>: Breaking 30+ stands and multi-wicket winning spells.</li>
        </ul>
      </div>
    </div>

    <div class="callout-box gold-callout">
      <div class="callout-title">
        <span>🏆</span> Verified Reliability & Strategic Utility
      </div>
      Split-half reliability testing across independent odd/even match samples yields highly statistically significant stability (<i>r</i> &gt; 0.30, <i>p</i> &lt; 10<sup>-5</sup>), proving that high-pressure performance is an inherent, repeatable player trait rather than random variance.
    </div>
  </div>

  <div class="footer-bar">
    <span>Rajasthan Royals Analytics Think-Tank • SupeRR Selector Season 2</span>
    <span>Official Submission Document</span>
    <span>Page 1 of 5</span>
  </div>
</div>

<!-- ========================================== -->
<!-- PAGE 2: TOP 10 BATTERS UNDER PRESSURE      -->
<!-- ========================================== -->
<div class="page">
  <div>
    <div class="header-bar">
      <div class="rr-brand">
        <div class="rr-logo-box">RR</div>
        <div class="brand-text">
          <h4>Rajasthan Royals Analytics & Scouting</h4>
          <p>Official Player Rankings | Batting Think-Tank Index</p>
        </div>
      </div>
      <div class="header-tag">Batters Selection List</div>
    </div>

    <div class="section-title"><span class="bar"></span> Top 10 Batters Under Pressure (Selected on Unstop)</div>
    <div class="sub-desc">
      Ranked using the standardized <strong>Batter Think-Tank Score (BTTS)</strong>. Incorporates pressure run volume, pressure strike rate, dot-ball resistance, boundary percentage, and verified match finishes.
    </div>

    <table class="data-table">
      <thead>
        <tr>
          <th class="center" style="width: 28px;">Rank</th>
          <th>Player Name</th>
          <th class="center" style="width: 38px;">Hand</th>
          <th>Role Archetype</th>
          <th class="num">Press Balls</th>
          <th class="num">Press Runs (SR)</th>
          <th class="num">Dot %</th>
          <th class="num">Bnd %</th>
          <th class="center">Finishes</th>
          <th class="num">BPD</th>
          <th class="num" style="width: 48px;">Score</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="center"><span class="rank-badge rank-1">1</span></td>
          <td><strong>Suryakumar Yadav</strong></td>
          <td class="center"><span class="role-pill pill-rhb">RHB</span></td>
          <td>360° Enforcer / Match Winner</td>
          <td class="num">1,301</td>
          <td class="num">2,289 <span class="highlight-val">(175.94)</span></td>
          <td class="num">31.4%</td>
          <td class="num">26.8%</td>
          <td class="center"><strong>12</strong></td>
          <td class="num">21.7</td>
          <td class="num score-val">2.044</td>
        </tr>
        <tr>
          <td class="center"><span class="rank-badge rank-2">2</span></td>
          <td><strong>Namboori Tilak Varma</strong></td>
          <td class="center"><span class="role-pill pill-lhb">LHB</span></td>
          <td>Crisis Finisher / Anchor</td>
          <td class="num">1,465</td>
          <td class="num">2,190 <span class="highlight-val">(149.49)</span></td>
          <td class="num">30.4%</td>
          <td class="num">18.8%</td>
          <td class="center"><strong style="color: #E6186D;">21</strong></td>
          <td class="num"><strong>27.1</strong></td>
          <td class="num score-val">1.938</td>
        </tr>
        <tr>
          <td class="center"><span class="rank-badge rank-3">3</span></td>
          <td><strong>Tim David</strong></td>
          <td class="center"><span class="role-pill pill-rhb">RHB</span></td>
          <td>Death Power Hitter / Game Closer</td>
          <td class="num">828</td>
          <td class="num">1,503 <span class="highlight-val">(181.52)</span></td>
          <td class="num">30.4%</td>
          <td class="num">25.7%</td>
          <td class="center"><strong>15</strong></td>
          <td class="num">16.9</td>
          <td class="num score-val">1.758</td>
        </tr>
        <tr>
          <td class="center"><span class="rank-badge rank-other">4</span></td>
          <td><strong>Vaibhav Sooryavanshi</strong></td>
          <td class="center"><span class="role-pill pill-lhb">LHB</span></td>
          <td>Aggressive Opener / Boundary Disruptor</td>
          <td class="num">232</td>
          <td class="num">530 <span class="highlight-val">(228.45)</span></td>
          <td class="num">35.8%</td>
          <td class="num"><strong style="color: #E6186D;">38.8%</strong></td>
          <td class="center">0</td>
          <td class="num"><strong>29.0</strong></td>
          <td class="num score-val">1.589</td>
        </tr>
        <tr>
          <td class="center"><span class="rank-badge rank-other">5</span></td>
          <td><strong>Rinku Singh</strong></td>
          <td class="center"><span class="role-pill pill-lhb">LHB</span></td>
          <td>Chase Finisher / Pressure Absorber</td>
          <td class="num">870</td>
          <td class="num">1,464 <span class="highlight-val">(168.28)</span></td>
          <td class="num">30.0%</td>
          <td class="num">24.1%</td>
          <td class="center"><strong>12</strong></td>
          <td class="num">19.8</td>
          <td class="num score-val">1.481</td>
        </tr>
        <tr>
          <td class="center"><span class="rank-badge rank-other">6</span></td>
          <td><strong>David Miller</strong></td>
          <td class="center"><span class="role-pill pill-lhb">LHB</span></td>
          <td>Veteran Closer / Ice-Man</td>
          <td class="num">901</td>
          <td class="num">1,421 <span class="highlight-val">(157.71)</span></td>
          <td class="num">28.3%</td>
          <td class="num">20.3%</td>
          <td class="center"><strong>15</strong></td>
          <td class="num">21.5</td>
          <td class="num score-val">1.434</td>
        </tr>
        <tr>
          <td class="center"><span class="rank-badge rank-other">7</span></td>
          <td><strong>Heinrich Klaasen</strong></td>
          <td class="center"><span class="role-pill pill-rhb">RHB</span></td>
          <td>Spin Destroyer / Middle Enforcer</td>
          <td class="num">864</td>
          <td class="num">1,500 <span class="highlight-val">(173.61)</span></td>
          <td class="num"><strong style="color: #059669;">25.4%</strong></td>
          <td class="num">23.0%</td>
          <td class="center">5</td>
          <td class="num">20.6</td>
          <td class="num score-val">1.409</td>
        </tr>
        <tr>
          <td class="center"><span class="rank-badge rank-other">8</span></td>
          <td><strong>Nicholas Pooran</strong></td>
          <td class="center"><span class="role-pill pill-lhb">LHB</span></td>
          <td>Explosive Left-Hand Finisher</td>
          <td class="num">1,010</td>
          <td class="num">1,672 <span class="highlight-val">(165.54)</span></td>
          <td class="num">33.9%</td>
          <td class="num">23.5%</td>
          <td class="center"><strong>12</strong></td>
          <td class="num">21.0</td>
          <td class="num score-val">1.401</td>
        </tr>
        <tr>
          <td class="center"><span class="rank-badge rank-other">9</span></td>
          <td><strong>Tristan Stubbs</strong></td>
          <td class="center"><span class="role-pill pill-rhb">RHB</span></td>
          <td>Dynamic Middle-Order Closer</td>
          <td class="num">709</td>
          <td class="num">1,168 <span class="highlight-val">(164.74)</span></td>
          <td class="num"><strong style="color: #059669;">24.1%</strong></td>
          <td class="num">21.2%</td>
          <td class="center">10</td>
          <td class="num">23.6</td>
          <td class="num score-val">1.397</td>
        </tr>
        <tr>
          <td class="center"><span class="rank-badge rank-other">10</span></td>
          <td><strong>Virat Kohli</strong></td>
          <td class="center"><span class="role-pill pill-rhb">RHB</span></td>
          <td>Master Chaser / Inning Builder</td>
          <td class="num">896</td>
          <td class="num">1,413 <span class="highlight-val">(157.70)</span></td>
          <td class="num">27.7%</td>
          <td class="num">21.5%</td>
          <td class="center">9</td>
          <td class="num"><strong>27.2</strong></td>
          <td class="num score-val">1.323</td>
        </tr>
      </tbody>
    </table>

    <div class="section-title"><span class="bar"></span> Deep-Dive Tactical Spotlights</div>
    <div class="spotlight-grid">
      <div class="spotlight-card">
        <div class="spotlight-header">
          <div class="spotlight-name">Suryakumar Yadav</div>
          <div class="spotlight-rank">#1 Batter</div>
        </div>
        <div class="spotlight-stats">
          <div class="spotlight-stat">SR: <strong>175.94</strong></div>
          <div class="spotlight-stat">Runs: <strong>2,289</strong></div>
          <div class="spotlight-stat">Finishes: <strong>12</strong></div>
        </div>
        <div class="spotlight-desc">
          Unquestioned gold standard of high-leverage scoring. Maintains a +17.70 SR surge over baseline even against deep defensive field settings. Scores 360° boundaries against both express pace and elite mystery spin.
        </div>
      </div>

      <div class="spotlight-card">
        <div class="spotlight-header">
          <div class="spotlight-name">Namboori Tilak Varma</div>
          <div class="spotlight-rank">#2 Batter</div>
        </div>
        <div class="spotlight-stats">
          <div class="spotlight-stat">Finishes: <strong>21</strong></div>
          <div class="spotlight-stat">BPD: <strong>27.13</strong></div>
          <div class="spotlight-stat">Dots: <strong>30.38%</strong></div>
        </div>
        <div class="spotlight-desc">
          The ultimate crisis closer in the dataset. Logged 21 successful chase finishes (dataset high). Outstanding wicket preservation (27.1 balls/dismissal) ensures batting collapses are arrested without stall.
        </div>
      </div>

      <div class="spotlight-card">
        <div class="spotlight-header">
          <div class="spotlight-name">Tim David</div>
          <div class="spotlight-rank">#3 Batter</div>
        </div>
        <div class="spotlight-stats">
          <div class="spotlight-stat">SR: <strong>181.52</strong></div>
          <div class="spotlight-stat">Bnd %: <strong>25.72%</strong></div>
          <div class="spotlight-stat">Finishes: <strong>15</strong></div>
        </div>
        <div class="spotlight-desc">
          Pure death-overs accelerator. Converts 1 out of every 4 deliveries into boundaries when Required Run Rate exceeds 10.0. Finished 15 high-pressure run chases at the crease.
        </div>
      </div>

      <div class="spotlight-card">
        <div class="spotlight-header">
          <div class="spotlight-name">Vaibhav Sooryavanshi</div>
          <div class="spotlight-rank">#4 Batter</div>
        </div>
        <div class="spotlight-stats">
          <div class="spotlight-stat">SR: <strong>228.45</strong></div>
          <div class="spotlight-stat">Bnd %: <strong>38.79%</strong></div>
          <div class="spotlight-stat">BPD: <strong>29.00</strong></div>
        </div>
        <div class="spotlight-desc">
          Historic boundary strike rate. Hits a boundary on 38.8% of pressure deliveries. His 228.45 pressure SR instantly breaks opposition bowling momentum in high-difficulty phases.
        </div>
      </div>
    </div>
  </div>

  <div class="footer-bar">
    <span>Rajasthan Royals Analytics Think-Tank • SupeRR Selector Season 2</span>
    <span>Batting Performance Engine</span>
    <span>Page 2 of 5</span>
  </div>
</div>

<!-- ========================================== -->
<!-- PAGE 3: TOP 10 BOWLERS UNDER PRESSURE      -->
<!-- ========================================== -->
<div class="page">
  <div>
    <div class="header-bar">
      <div class="rr-brand">
        <div class="rr-logo-box">RR</div>
        <div class="brand-text">
          <h4>Rajasthan Royals Analytics & Scouting</h4>
          <p>Official Player Rankings | Bowling Think-Tank Index</p>
        </div>
      </div>
      <div class="header-tag">Bowlers Selection List</div>
    </div>

    <div class="section-title"><span class="bar"></span> Top 10 Bowlers Under Pressure (Selected on Unstop)</div>
    <div class="sub-desc">
      Ranked using the standardized <strong>Bowler Think-Tank Score (BoTTS)</strong>. Rewards dot-ball percentage (plan execution to field), death-overs wicket extraction, partnership breaking, and multi-wicket winning spells.
    </div>

    <table class="data-table">
      <thead>
        <tr>
          <th class="center" style="width: 28px;">Rank</th>
          <th>Player Name</th>
          <th class="center" style="width: 44px;">Type</th>
          <th>Role Archetype</th>
          <th class="num">Press Balls</th>
          <th class="num">Econ (Wkts)</th>
          <th class="num">Dot %</th>
          <th class="center">Death Wkts</th>
          <th class="center">Part Break</th>
          <th class="center">Win Hauls</th>
          <th class="num" style="width: 48px;">Score</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="center"><span class="rank-badge rank-1">1</span></td>
          <td><strong>Arshdeep Singh</strong></td>
          <td class="center"><span class="role-pill pill-pace">Pace</span></td>
          <td>Death Specialist / Strike Pacer</td>
          <td class="num">1,585</td>
          <td class="num">8.81 <span class="highlight-val">(109)</span></td>
          <td class="num">36.8%</td>
          <td class="center"><strong style="color: #E6186D;">75</strong></td>
          <td class="center"><strong style="color: #E6186D;">33</strong></td>
          <td class="center"><strong>18</strong></td>
          <td class="num score-val">2.728</td>
        </tr>
        <tr>
          <td class="center"><span class="rank-badge rank-2">2</span></td>
          <td><strong>Rashid Khan</strong></td>
          <td class="center"><span class="role-pill pill-spin">Spin</span></td>
          <td>Mystery Wrist-Spinner / Controller</td>
          <td class="num">1,386</td>
          <td class="num"><strong>7.46</strong> <span class="highlight-val">(86)</span></td>
          <td class="num">36.0%</td>
          <td class="center">51</td>
          <td class="center">22</td>
          <td class="center"><strong style="color: #E6186D;">19</strong></td>
          <td class="num score-val">2.188</td>
        </tr>
        <tr>
          <td class="center"><span class="rank-badge rank-3">3</span></td>
          <td><strong>Jasprit Bumrah</strong></td>
          <td class="center"><span class="role-pill pill-pace">Pace</span></td>
          <td>Gold-Standard Precision Pacer</td>
          <td class="num">957</td>
          <td class="num"><strong style="color: #059669;">7.00</strong> <span class="highlight-val">(52)</span></td>
          <td class="num"><strong style="color: #059669;">42.5%</strong></td>
          <td class="center">35</td>
          <td class="center">13</td>
          <td class="center">12</td>
          <td class="num score-val">1.543</td>
        </tr>
        <tr>
          <td class="center"><span class="rank-badge rank-other">4</span></td>
          <td><strong>Wanindu Hasaranga</strong></td>
          <td class="center"><span class="role-pill pill-spin">Spin</span></td>
          <td>Attacking Middle-Overs Leg-Spinner</td>
          <td class="num">895</td>
          <td class="num">8.27 <span class="highlight-val">(73)</span></td>
          <td class="num">36.1%</td>
          <td class="center">27</td>
          <td class="center">23</td>
          <td class="center">14</td>
          <td class="num score-val">1.375</td>
        </tr>
        <tr>
          <td class="center"><span class="rank-badge rank-other">5</span></td>
          <td><strong>Matheesha Pathirana</strong></td>
          <td class="center"><span class="role-pill pill-pace">Pace</span></td>
          <td>Slinging Death Yorker Specialist</td>
          <td class="num">693</td>
          <td class="num"><strong>7.70</strong> <span class="highlight-val">(57)</span></td>
          <td class="num">37.4%</td>
          <td class="center"><strong>44</strong></td>
          <td class="center">15</td>
          <td class="center">8</td>
          <td class="num score-val">1.210</td>
        </tr>
        <tr>
          <td class="center"><span class="rank-badge rank-other">6</span></td>
          <td><strong>Josh Hazlewood</strong></td>
          <td class="center"><span class="role-pill pill-pace">Pace</span></td>
          <td>Metronomic Test-Line Pacer</td>
          <td class="num">847</td>
          <td class="num">8.17 <span class="highlight-val">(62)</span></td>
          <td class="num"><strong style="color: #059669;">43.5%</strong></td>
          <td class="center">30</td>
          <td class="center">8</td>
          <td class="center">14</td>
          <td class="num score-val">1.200</td>
        </tr>
        <tr>
          <td class="center"><span class="rank-badge rank-other">7</span></td>
          <td><strong>Jason Holder</strong></td>
          <td class="center"><span class="role-pill pill-pace">Pace</span></td>
          <td>Tall Seam Death & Powerplay Enforcer</td>
          <td class="num">1,077</td>
          <td class="num">8.59 <span class="highlight-val">(70)</span></td>
          <td class="num">33.8%</td>
          <td class="center">43</td>
          <td class="center">19</td>
          <td class="center">11</td>
          <td class="num score-val">1.188</td>
        </tr>
        <tr>
          <td class="center"><span class="rank-badge rank-other">8</span></td>
          <td><strong>Harshal Patel</strong></td>
          <td class="center"><span class="role-pill pill-pace">Pace</span></td>
          <td>Slower-Ball & Dipper Specialist</td>
          <td class="num">1,000</td>
          <td class="num">9.35 <span class="highlight-val">(71)</span></td>
          <td class="num">31.9%</td>
          <td class="center"><strong>53</strong></td>
          <td class="center">21</td>
          <td class="center">10</td>
          <td class="num score-val">1.159</td>
        </tr>
        <tr>
          <td class="center"><span class="rank-badge rank-other">9</span></td>
          <td><strong>Yuzvendra Chahal</strong></td>
          <td class="center"><span class="role-pill pill-spin">Spin</span></td>
          <td>Attacking Middle Leg-Spinner</td>
          <td class="num">1,230</td>
          <td class="num">8.77 <span class="highlight-val">(76)</span></td>
          <td class="num">29.9%</td>
          <td class="center">34</td>
          <td class="center">23</td>
          <td class="center">14</td>
          <td class="num score-val">1.151</td>
        </tr>
        <tr>
          <td class="center"><span class="rank-badge rank-other">10</span></td>
          <td><strong>Ravi Bishnoi</strong></td>
          <td class="center"><span class="role-pill pill-spin">Spin</span></td>
          <td>Skidding Googly Specialist</td>
          <td class="num">1,274</td>
          <td class="num">8.20 <span class="highlight-val">(74)</span></td>
          <td class="num">37.8%</td>
          <td class="center">24</td>
          <td class="center">16</td>
          <td class="center">14</td>
          <td class="num score-val">1.148</td>
        </tr>
      </tbody>
    </table>

    <div class="section-title"><span class="bar"></span> Deep-Dive Tactical Spotlights</div>
    <div class="spotlight-grid">
      <div class="spotlight-card">
        <div class="spotlight-header">
          <div class="spotlight-name">Arshdeep Singh</div>
          <div class="spotlight-rank">#1 Bowler</div>
        </div>
        <div class="spotlight-stats">
          <div class="spotlight-stat">Wickets: <strong>109</strong></div>
          <div class="spotlight-stat">Death Wkts: <strong>75</strong></div>
          <div class="spotlight-stat">Hauls: <strong>18</strong></div>
        </div>
        <div class="spotlight-desc">
          The undisputed king of pressure bowling. 109 pressure wickets, including 75 in the death overs (16–20). Breaks game-defining stands with unmatched pinpoint yorker execution.
        </div>
      </div>

      <div class="spotlight-card">
        <div class="spotlight-header">
          <div class="spotlight-name">Rashid Khan</div>
          <div class="spotlight-rank">#2 Bowler</div>
        </div>
        <div class="spotlight-stats">
          <div class="spotlight-stat">Econ: <strong>7.46</strong></div>
          <div class="spotlight-stat">Wickets: <strong>86</strong></div>
          <div class="spotlight-stat">Hauls: <strong>19</strong></div>
        </div>
        <div class="spotlight-desc">
          Total game strangulation under pressure. Exceptional 7.46 economy across 1,386 high-pressure deliveries. Generated 19 match-winning multi-wicket hauls, highest in the dataset.
        </div>
      </div>

      <div class="spotlight-card">
        <div class="spotlight-header">
          <div class="spotlight-name">Jasprit Bumrah</div>
          <div class="spotlight-rank">#3 Bowler</div>
        </div>
        <div class="spotlight-stats">
          <div class="spotlight-stat">Econ: <strong>7.00</strong></div>
          <div class="spotlight-stat">Dots: <strong>42.53%</strong></div>
          <div class="spotlight-stat">Balls: <strong>957</strong></div>
        </div>
        <div class="spotlight-desc">
          Flawless field execution. 42.53% dot-ball percentage and an absurd 7.00 economy across 957 pressure balls. Opponents consistently score under par when targeting Bumrah in high-stakes overs.
        </div>
      </div>

      <div class="spotlight-card">
        <div class="spotlight-header">
          <div class="spotlight-name">Matheesha Pathirana</div>
          <div class="spotlight-rank">#5 Bowler</div>
        </div>
        <div class="spotlight-stats">
          <div class="spotlight-stat">Econ: <strong>7.70</strong></div>
          <div class="spotlight-stat">Death Wkts: <strong>44</strong></div>
          <div class="spotlight-stat">SR: <strong>12.1</strong></div>
        </div>
        <div class="spotlight-desc">
          Lethal slinging death-overs specialist. Strikes every 12.1 balls in high-leverage situations. Concedes just 7.70 runs/over at the death, shutting down opposition power hitters completely.
        </div>
      </div>
    </div>
  </div>

  <div class="footer-bar">
    <span>Rajasthan Royals Analytics Think-Tank • SupeRR Selector Season 2</span>
    <span>Bowling Performance Engine</span>
    <span>Page 3 of 5</span>
  </div>
</div>

<!-- ========================================== -->
<!-- PAGE 4: DUAL-ENGINE METHODOLOGY & MATH     -->
<!-- ========================================== -->
<div class="page">
  <div>
    <div class="header-bar">
      <div class="rr-brand">
        <div class="rr-logo-box">RR</div>
        <div class="brand-text">
          <h4>Rajasthan Royals Analytics & Scouting</h4>
          <p>Dual-Engine Pressure Framework & Mathematical Modeling</p>
        </div>
      </div>
      <div class="header-tag">Analytical Rigor</div>
    </div>

    <div class="section-title"><span class="bar"></span> 3. Objective Definition of Pressure: The Dual-Engine Model</div>
    <div class="sub-desc">
      To eliminate subjective selection bias, pressure was modeled across two complementary mathematical systems: continuous win-probability leverage and discrete situational crisis parameters.
    </div>

    <!-- Flowchart Representation -->
    <div class="flowchart-container">
      <div class="flow-row">
        <div class="flow-node primary">
          <div class="flow-node-title"><span>📡</span> Ball-by-Ball Delivery Input Vector</div>
          <strong>Dataset</strong>: 200,999 Deliveries across 883 Matches (IPL &amp; T20I, 2022–2026). State vector includes Runs Needed, Balls Left, Wickets Down, Current Run Rate, and Opposition Quality.
        </div>
      </div>

      <div class="flow-row">
        <div class="flow-node pink-node">
          <div class="flow-node-title"><span style="color: #E6186D;">⚙️</span> Engine 1: Dynamic Win Probability (WP)</div>
          <strong>Second-Innings Chases</strong>: Logistic regression model estimates real-time Win Probability <i>P</i>(Win) from chase state.<br><br>
          <div style="background: #FFFFFF; border: 1px solid #FFC5DB; border-radius: 4px; padding: 4px 6px; font-family: 'JetBrains Mono', monospace; font-size: 6.8pt; color: #001A4B; margin-bottom: 4px;">
            Swing<sub>t</sub> = |&Delta;P(Boundary) - &Delta;P(Wicket)| + |&Delta;P(Dot) - &Delta;P(Wicket)|<br>
            LI<sub>t</sub> = Swing<sub>t</sub> / E[Swing] &ge; 1.25 &rArr; Tagged as High Pressure
          </div>
          Captures the top 30% most leverage-volatile deliveries in short-format cricket.
        </div>
        <div class="flow-node" style="border-left: 3px solid #001A4B;">
          <div class="flow-node-title"><span style="color: #001A4B;">🛡️</span> Engine 2: Contextual Crisis States</div>
          <strong>First &amp; Second Innings Boundary Conditions</strong>:
          <ul style="padding-left: 12px; margin-top: 3px; font-size: 6.8pt; color: #475569; line-height: 1.45;">
            <li><strong>Chase Danger Zone</strong>: Required Run Rate &ge; 9.5 in overs 11–20, or &le; 30 runs required in &le; 24 balls.</li>
            <li><strong>Collapse Par Defense</strong>: Overs 1–6 with &ge; 2 wickets down; overs 7–10 with &ge; 3 wickets down.</li>
            <li><strong>Death Overs Acceleration/Defense</strong>: Overs 16–20 with &ge; 3 wickets in hand.</li>
            <li><strong>Super Overs</strong>: Innings 3 &amp; 4 (100% Maximum Pressure).</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="section-title"><span class="bar"></span> 4. Mathematical Formulations & Standardized Scoring</div>

    <div class="formula-card">
      <div class="formula-title">
        <span>Batter Think-Tank Score (BTTS) Formulation</span>
        <span class="mono" style="color: #E6186D;">Weights: 20% | 20% | 20% | 15% | 15% | 10%</span>
      </div>
      <div class="formula-box">
        BTTS = 0.20·Z(PressRuns) + 0.20·Z(SR_press) - 0.20·Z(Dot%) + 0.15·Z(Bound%) + 0.15·Z(ChaseFinishes) + 0.10·Z(ln(1 + BPD))
      </div>
      <div class="formula-expl">
        <strong>Strategic Mechanics</strong>: Standardizes volume and boundary scoring while heavily penalizing dot ball accumulation under pressure. Rewards batters who stay not out at the crease in victorious chases (<i>ChaseFinishes</i>) and penalizes reckless wicket loss via ln(1 + <i>Balls Per Dismissal</i>).
      </div>
    </div>

    <div class="formula-card">
      <div class="formula-title">
        <span>Bowler Think-Tank Score (BoTTS) Formulation</span>
        <span class="mono" style="color: #001A4B;">Weights: 20% | 20% | 20% | 20% | 20%</span>
      </div>
      <div class="formula-box">
        BoTTS = 0.20·Z(Dot%) - 0.20·Z(Econ_press) + 0.20·Z(DeathWkts) + 0.20·Z(PartBreakWkts) + 0.20·Z(WinningHauls)
      </div>
      <div class="formula-expl">
        <strong>Strategic Mechanics</strong>: Balances run containment (<i>Econ_press</i>) and plan execution to the field (<i>Dot%</i>) with direct match impact: extracting wickets in overs 16–20, breaking dangerous 30+ partnerships, and delivering multi-wicket winning spells (<i>WinningHauls</i>).
      </div>
    </div>

    <div class="callout-box" style="margin-bottom: 0;">
      <div class="callout-title">
        <span>📐</span> Empirical Bayes Shrinkage Calibration
      </div>
      To prevent small-sample distortion from skewing extreme strike rates or economies, raw performance metrics were shrunken toward the population mean using Empirical Bayes prior distributions (<i>K</i> = 50 balls). This ensures that established elite performers and breakout prospects are evaluated on an identical mathematical baseline.
    </div>
  </div>

  <div class="footer-bar">
    <span>Rajasthan Royals Analytics Think-Tank • SupeRR Selector Season 2</span>
    <span>Mathematical Formulation</span>
    <span>Page 4 of 5</span>
  </div>
</div>

<!-- ========================================== -->
<!-- PAGE 5: RELIABILITY & RR AUCTION STRATEGY  -->
<!-- ========================================== -->
<div class="page">
  <div>
    <div class="header-bar">
      <div class="rr-brand">
        <div class="rr-logo-box">RR</div>
        <div class="brand-text">
          <h4>Rajasthan Royals Analytics & Scouting</h4>
          <p>Statistical Validation & Rajasthan Royals Strategic Blueprint</p>
        </div>
      </div>
      <div class="header-tag">Franchise Strategic Roadmap</div>
    </div>

    <div class="section-title"><span class="bar"></span> 5. Split-Half Reliability & Repeatability Testing</div>
    <div class="sub-desc">
      A metric is useless for scouting if it measures random noise. We performed split-half cross-validation across independent odd- and even-numbered matches (<i>N</i> &approx; 190 qualified players) to establish true skill repeatability.
    </div>

    <table class="data-table" style="margin-bottom: 3.5mm;">
      <thead>
        <tr>
          <th>Evaluated Metric</th>
          <th class="center">Sample Size</th>
          <th class="num">Pearson Correlation (<i>r</i>)</th>
          <th class="num">Spearman Rank (<i>&rho;</i>)</th>
          <th class="center">p-value</th>
          <th>Statistical Deduction</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Batter Pressure Strike Rate</strong></td>
          <td class="center"><i>N</i> = 194</td>
          <td class="num"><strong>0.341</strong></td>
          <td class="num"><strong>0.321</strong></td>
          <td class="center mono" style="color: #059669;">&lt; 1.2 &times; 10<sup>-6</sup></td>
          <td>High stability across independent match environments</td>
        </tr>
        <tr>
          <td><strong>Batter Dot-Ball Resistance</strong></td>
          <td class="center"><i>N</i> = 194</td>
          <td class="num"><strong>0.382</strong></td>
          <td class="num"><strong>0.365</strong></td>
          <td class="center mono" style="color: #059669;">&lt; 4.1 &times; 10<sup>-8</sup></td>
          <td>Extremely durable individual temperament trait</td>
        </tr>
        <tr>
          <td><strong>Bowler Dot Ball % (Field Execution)</strong></td>
          <td class="center"><i>N</i> = 188</td>
          <td class="num"><strong>0.344</strong></td>
          <td class="num"><strong>0.328</strong></td>
          <td class="center mono" style="color: #059669;">&lt; 9.1 &times; 10<sup>-7</sup></td>
          <td>Confirms field execution is a repeatable bowling skill</td>
        </tr>
        <tr>
          <td><strong>Bowler Death-Over Wicket Rate</strong></td>
          <td class="center"><i>N</i> = 188</td>
          <td class="num"><strong>0.315</strong></td>
          <td class="num"><strong>0.302</strong></td>
          <td class="center mono" style="color: #059669;">&lt; 3.5 &times; 10<sup>-5</sup></td>
          <td>Genuine clutch wicket-taking instinct under pressure</td>
        </tr>
      </tbody>
    </table>

    <div class="section-title"><span class="bar"></span> 6. Rajasthan Royals Squad Blueprint (Auction War Room)</div>
    <div class="sub-desc">
      Connecting analytical rankings directly to Rajasthan Royals roster dynamics ahead of the December 16 Auction:
    </div>

    <div class="two-col" style="margin-bottom: 3.5mm;">
      <div class="col-card" style="border-top: 3px solid #E6186D;">
        <h5>📋 Retained Core vs Gaps</h5>
        <div style="font-size: 7.2pt; color: #475569; margin-bottom: 2mm;">
          <strong>Retained Nucleus (19 Players)</strong>: Sanju Samson, Yashasvi Jaiswal, Riyan Parag, Dhruv Jurel, Shimron Hetmyer, Sandeep Sharma, etc.
        </div>
        <ul class="clean-list">
          <li><strong>Remaining Purse</strong>: ₹27.05 Crore (Healthy flexibility).</li>
          <li><strong>Auction Vacancies</strong>: 6 total slots available.</li>
          <li><strong>Overseas Slots</strong>: 3 overseas positions open.</li>
          <li><strong>Primary Structural Need</strong>: Elite death-overs strike pacer and a high-leverage spin-bowling disruptor.</li>
        </ul>
      </div>

      <div class="col-card" style="border-top: 3px solid #001A4B;">
        <h5>🎯 Targeted Auction Archetypes</h5>
        <ul class="clean-list">
          <li><strong>Death-Overs Enforcer</strong>: Target high dot% pacers who execute yorkers under heat (Profile: <em>Pathirana / Arshdeep archetype</em>).</li>
          <li><strong>Middle-Overs Spin Anchor</strong>: Target wrist-spinners with &ge; 35% dot rate and proven partnership-breaking capability.</li>
          <li><strong>Clutch Finisher Insurance</strong>: Middle-order hitters with <i>BPD</i> &gt; 20 and strike rates &gt; 165 in high RRR chases.</li>
          <li><strong>Budget Optimization</strong>: Deploy ₹15–18 Cr on primary bowling targets, preserving ₹9–12 Cr for versatile Indian depth.</li>
        </ul>
      </div>
    </div>

    <div class="section-title"><span class="bar"></span> 7. Unstop Submission Verification Checklist</div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2.5mm; background: #F8FAFC; border: 1px solid #CBD5E1; border-radius: 5px; padding: 2.5mm 3.2mm;">
      <div>
        <div class="checklist-item">
          <span class="check-icon">✓</span>
          <span><strong>Top 10 Batters</strong> selected & exact Unstop dropdown names verified.</span>
        </div>
        <div class="checklist-item">
          <span class="check-icon">✓</span>
          <span><strong>Top 10 Bowlers</strong> selected & exact Unstop dropdown names verified.</span>
        </div>
        <div class="checklist-item">
          <span class="check-icon">✓</span>
          <span><strong>Dual-Engine Pressure Definition</strong> formulated with mathematical rigor.</span>
        </div>
      </div>
      <div>
        <div class="checklist-item">
          <span class="check-icon">✓</span>
          <span><strong>Dot-Ball Execution & Finishing Metrics</strong> standardly normalized.</span>
        </div>
        <div class="checklist-item">
          <span class="check-icon">✓</span>
          <span><strong>Split-Half Reliability Validation</strong> mathematically proven (<i>p</i> &lt; 10<sup>-5</sup>).</span>
        </div>
        <div class="checklist-item">
          <span class="check-icon">✓</span>
          <span><strong>Franchise Strategy</strong> aligned with RR purse & retention vacancies.</span>
        </div>
      </div>
    </div>
  </div>

  <div class="footer-bar">
    <span>Rajasthan Royals Analytics Think-Tank • SupeRR Selector Season 2</span>
    <span>Official Submission Document • Final Approval</span>
    <span>Page 5 of 5</span>
  </div>
</div>

</body>
</html>
"""

html_path = r"d:\Rajasthan Royals\Rajasthan_Royals_SupeRR_Selector_Report.html"
pdf_path = r"d:\Rajasthan Royals\Rajasthan_Royals_SupeRR_Selector_Season_2_Methodology_Report.pdf"

with open(html_path, "w", encoding="utf-8") as f:
    f.write(html_content)

print(f"HTML generated at {html_path}")

edge_path = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
cmd = [
    edge_path,
    "--headless",
    "--disable-gpu",
    "--no-pdf-header-footer",
    f"--print-to-pdf={pdf_path}",
    html_path
]

print("Rendering PDF via Microsoft Edge headless...")
res = subprocess.run(cmd, capture_output=True, text=True)
if os.path.exists(pdf_path):
    size_kb = os.path.getsize(pdf_path) / 1024
    print(f"SUCCESS: PDF generated at {pdf_path} ({size_kb:.1f} KB)")
else:
    print(f"ERROR: PDF was not generated. Return code: {res.returncode}")
    print(f"Stderr: {res.stderr}")
