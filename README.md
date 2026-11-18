# 🏏 RRHACKATHON | Rajasthan Royals - SupeRR Selector Season 2

[![Netlify Status](https://api.netlify.com/api/v1/badges/f889fb41-7ef4-46ef-a363-519f6d350098/deploy-status)](https://app.netlify.com/sites/rrhackathon/deploys)
[![Live Site](https://img.shields.io/badge/Live_Dashboard-rrhackathon.netlify.app-e10098?style=flat&logo=netlify)](https://rrhackathon.netlify.app)
[![IPL Records Evaluated](https://img.shields.io/badge/Deliveries_Evaluated-200%2C999-004ba0?style=flat)](https://rrhackathon.netlify.app)

> **Official Rajasthan Royals Analytics Think-Tank Dashboard** evaluating player performance under acute match crisis and leverage across 200,999 historical ball-by-ball records (883 matches).

---

## 🌐 Live Application
- **Live URL**: [https://rrhackathon.netlify.app](https://rrhackathon.netlify.app)
- **Netlify Dashboard**: [https://app.netlify.com/projects/rrhackathon](https://app.netlify.com/projects/rrhackathon)

---

## ⚡ Key Highlights & Architecture

### 1. Dual-Engine Pressure Model
- **Dynamic Leverage Index ($LI_t \ge 1.25$):** Win probability swing modeling predicting victory swings from state vectors $X = [\text{Runs Needed}, \text{Balls Remaining}, \text{Wickets in Hand}, \text{RRR}]$:
  $$\text{Swing}_t = |P(\text{Win} \mid \text{Boundary}) - P(\text{Win} \mid \text{Wicket})| + |P(\text{Win} \mid \text{Dot}) - P(\text{Win} \mid \text{Wicket})|$$
  $$LI_t = \frac{\text{Swing}_t}{E[\text{Swing}]}$$
- **Contextual Crisis Engine:** Evaluates 1st innings collapses, danger zone chases ($RRR \ge 9.5$), death overs (16–20), knockout playoffs, and super overs. Flagged **98,752 deliveries (49.1%)** as high-pressure situations.

### 2. Official Unstop Submission Roster (Top 10 Batters & Top 10 Bowlers)
- **Top 10 Batters:** Tim David (#1), Namboori Tilak Varma (#2), Virat Kohli (#3), Rajat Patidar (#4), Heinrich Klaasen (#5), Tristan Stubbs (#6), Vaibhav Sooryavanshi (#7), Nicholas Pooran (#8), David Miller (#9), Suryakumar Yadav (#10).
- **Top 10 Bowlers:** Josh Hazlewood (#1), Jasprit Bumrah (#2), Arshdeep Singh (#3), Rashid Khan (#4), Bhuvneshwar Kumar (#5), Yuzvendra Chahal (#6), Matheesha Pathirana (#7), Wanindu Hasaranga (#8), Jason Holder (#9), Krunal Pandya (#10).

### 3. Scientific Cross-Validation
- Evaluated across independent split-half match partitions ($N \approx 190$ players):
  - **Batter Pressure SR:** $r = 0.341, p < 1.2 \times 10^{-6}$
  - **Batter Dot Resistance:** $r = 0.382, p < 4.1 \times 10^{-8}$
  - **Bowler Field Execution:** $r = 0.344, p < 9.1 \times 10^{-7}$
  - **Bowler Death Wicket Rate:** $r = 0.315, p < 3.5 \times 10^{-5}$

---

## 📁 Repository Structure

```
RRHACKATHON/
├── public/
│   ├── index.html            # Main dashboard application
│   ├── styles.css            # RR Pink & Royal Blue theme with scroll animations
│   ├── app.js                # Search, filter, and dossier card renderer
│   └── assets/
│       ├── rr-logo.png       # Official Rajasthan Royals brand logo
│       └── players/          # 20 high-res portrait headshots
├── netlify.toml              # Netlify build and routing configuration
└── .gitignore                # Netlify state and large data exclusions
```

---

## 🚀 Local Development

To run the dashboard locally, simply serve the `public/` directory:

```bash
# Using python
python -m http.server 3000 --directory public

# Or using npx serve
npx serve public
```
Visit `http://localhost:3000` in your browser.
