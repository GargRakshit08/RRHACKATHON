/**
 * RRHACKATHON | SupeRR Selector Season 2
 * Elite Sports Telemetry & Think-Tank Intelligence Platform
 * Neo-Kinpaku High-Taste Edition
 */

const BATTERS_ROSTER = [
  {
    "rank": 1,
    "name": "Tim David",
    "image": "assets/players/tim_david.jpg",
    "hand": "Right-Handed Batter (RHB)",
    "archetype": "Death Power Hitter / Finisher",
    "superpower": "Peak Death Closer (199.8 Death SR) + 15 Chase Finishes",
    "bar1": {
      "label": "Death Strike Rate (Overs 16\u201320)",
      "value": "199.81",
      "percent": 88,
      "delta": "+61.6 vs IPL Par (138.2)",
      "status": "elite"
    },
    "bar2": {
      "label": "Dot Ball Resistance (Minimizing Dots)",
      "value": "30.4%",
      "percent": 74,
      "delta": "-10.8% dots vs League (41.2%)",
      "status": "elite"
    },
    "metrics": [
      {
        "label": "Pressure Balls & Runs",
        "val": "828 b / 1,503 r",
        "sub": "181.52 Pressure SR"
      },
      {
        "label": "Boundary Frequency",
        "val": "25.7%",
        "sub": "1 per 3.9 deliveries"
      },
      {
        "label": "Chase Finishes",
        "val": "15 Wins",
        "sub": "100% win rate when not out"
      },
      {
        "label": "Wicket Security",
        "val": "16.9 bpd",
        "sub": "Balls per dismissal"
      }
    ],
    "scoutObservation": "A ferocious power-hitting beast capable of depositing the ball into the stands for maximums at will. Tim injects game-breaking momentum into the batting order, consistently finishing innings on an explosive high that demoralizes oppositions and carries momentum into the field. Complementing his death-over destruction, his towering athleticism and safe hands make him an absolute jewel of an outfield fielder.",
    "justification": "Peak death closer in world T20 cricket. In overs 16\u201320 under high pressure, David strikes at an astronomical 199.81 (535 balls, 1,069 runs). Moreover, this is not reckless slogging: he has remained not out to guide his team across the line 15 distinct times in successful chases."
  },
  {
    "rank": 2,
    "name": "Namboori Tilak Varma",
    "image": "assets/players/tilak_varma.jpg",
    "hand": "Left-Handed Batter (LHB)",
    "archetype": "Crisis Finisher / Chase Master",
    "superpower": "Uncontested #1 Chase Anchor (21 Successful Finishes in IPL History)",
    "bar1": {
      "label": "Death Strike Rate (Overs 16\u201320)",
      "value": "191.88",
      "percent": 84,
      "delta": "+53.7 vs IPL Par (138.2)",
      "status": "elite"
    },
    "bar2": {
      "label": "Dot Ball Resistance (Minimizing Dots)",
      "value": "30.4%",
      "percent": 74,
      "delta": "-10.8% dots vs League (41.2%)",
      "status": "elite"
    },
    "metrics": [
      {
        "label": "Pressure Balls & Runs",
        "val": "1,465 b / 2,190 r",
        "sub": "149.49 Pressure SR"
      },
      {
        "label": "Boundary Frequency",
        "val": "18.8%",
        "sub": "Calculated gap finding"
      },
      {
        "label": "Chase Finishes",
        "val": "21 Wins \u2605",
        "sub": "Most in IPL history"
      },
      {
        "label": "Wicket Security",
        "val": "27.1 bpd \u2605",
        "sub": "Elite anchor preservation"
      }
    ],
    "scoutObservation": "A premier Indian batting tactician with an exceptional cricketing brain who reads match situations with surgical precision. Tilak is equally adept at arresting steep batting collapses through composed strike-rotation as he is at launching ferocious counter-attacks when the required run rate spikes. His elite technical versatility allows him to seamlessly execute dual roles as both stabilizer and high-impact crisis finisher.",
    "justification": "Uncontested #1 chase anchor in the league. Across 1,465 high-pressure deliveries, Tilak has anchored Mumbai through 21 successful chase finishes (the absolute highest in IPL history). His 27.1 balls per dismissal and 191.88 death strike rate combine elite wicket preservation with sudden lethal acceleration."
  },
  {
    "rank": 3,
    "name": "Virat Kohli",
    "image": "assets/players/virat_kohli.jpg",
    "hand": "Right-Handed Batter (RHB)",
    "archetype": "Master Anchor / Chase Specialist",
    "superpower": "Wicket Security Benchmark & Sub-28% Dot Suppression",
    "bar1": {
      "label": "Death Strike Rate (Overs 16\u201320)",
      "value": "186.53",
      "percent": 82,
      "delta": "+48.3 vs IPL Par (138.2)",
      "status": "elite"
    },
    "bar2": {
      "label": "Dot Ball Resistance (Minimizing Dots)",
      "value": "27.7% \u2605",
      "percent": 83,
      "delta": "-13.5% dots vs League (41.2%)",
      "status": "elite"
    },
    "metrics": [
      {
        "label": "Pressure Balls & Runs",
        "val": "896 b / 1,413 r",
        "sub": "157.70 Pressure SR"
      },
      {
        "label": "Boundary Frequency",
        "val": "21.5%",
        "sub": "Pristine placement"
      },
      {
        "label": "Chase Finishes",
        "val": "9 Wins",
        "sub": "Ice-cool run chases"
      },
      {
        "label": "Wicket Security",
        "val": "27.2 bpd \u2605",
        "sub": "Tournament benchmark"
      }
    ],
    "scoutObservation": "The undisputed master veteran of modern cricket. In recent seasons, Virat has dynamically evolved his batting blueprint to embrace the modern high-tempo demands of the IPL while retaining peerless match awareness. If Kohli remains at the crease, victory is virtually assured\u2014his mastery over acceleration tempo, crisis stabilization, and situational calm is second to none, anchored by almost two decades of elite high-stakes experience.",
    "justification": "The benchmark of structural wicket security. Boasting 27.2 balls per dismissal under pressure alongside a sub-28% dot-ball rate (27.7%), Kohli protects the foundation, preventing fatal cluster collapses while seamlessly shifting gears to a 186.53 strike rate at the death."
  },
  {
    "rank": 4,
    "name": "Rajat Patidar",
    "image": "assets/players/rajat_patidar.png",
    "hand": "Right-Handed Batter (RHB)",
    "archetype": "Middle-to-Death Spin Enforcer",
    "superpower": "Spin Demolisher (200+ SR vs Spin) & Back-to-Back Champion Leader",
    "bar1": {
      "label": "Death Strike Rate (Overs 16\u201320)",
      "value": "217.00 \u2605",
      "percent": 94,
      "delta": "+78.8 vs IPL Par (138.2)",
      "status": "elite"
    },
    "bar2": {
      "label": "Dot Ball Resistance (Minimizing Dots)",
      "value": "32.5%",
      "percent": 68,
      "delta": "-8.7% dots vs League (41.2%)",
      "status": "solid"
    },
    "metrics": [
      {
        "label": "Pressure Balls & Runs",
        "val": "461 b / 739 r",
        "sub": "160.30 Pressure SR"
      },
      {
        "label": "Boundary Frequency",
        "val": "22.3%",
        "sub": "High aerial arc"
      },
      {
        "label": "Chase Finishes",
        "val": "1 Win",
        "sub": "Transition specialist"
      },
      {
        "label": "Wicket Security",
        "val": "17.1 bpd",
        "sub": "Attacking intent"
      }
    ],
    "scoutObservation": "A high-impact pick whose domestic and IPL numbers under pressure are off the charts. Patidar is cricket's foremost spin executioner, hunting middle-overs spinners with disdain and striking above 200 with effortless six-hitting arc. Alongside his boundary prowess, his calm, decisive leadership steered RCB to back-to-back championship triumphs in his first two years as captain, cementing his credentials as a clutch commander.",
    "justification": "Peerless ability to dismantle opposition bowling plans during the tricky overs 11\u201316 transition. In death overs under pressure, Patidar's strike rate escalates to an extraordinary 217.00 across 112 deliveries, converting quiet consolidation periods into decisive match-winning surges."
  },
  {
    "rank": 5,
    "name": "Heinrich Klaasen",
    "image": "assets/players/heinrich_klaasen.jpg",
    "hand": "Right-Handed Batter (RHB)",
    "archetype": "Zero-Dot Spin Demolisher",
    "superpower": "Zero-Dot Demolisher: 75% Deliveries Scored Off Under Crisis",
    "bar1": {
      "label": "Death Strike Rate (Overs 16\u201320)",
      "value": "198.97",
      "percent": 88,
      "delta": "+60.8 vs IPL Par (138.2)",
      "status": "elite"
    },
    "bar2": {
      "label": "Dot Ball Resistance (Minimizing Dots)",
      "value": "25.3% \u2605",
      "percent": 88,
      "delta": "-15.9% dots vs League (41.2%)",
      "status": "elite"
    },
    "metrics": [
      {
        "label": "Pressure Balls & Runs",
        "val": "864 b / 1,500 r",
        "sub": "173.61 Pressure SR"
      },
      {
        "label": "Boundary Frequency",
        "val": "23.0%",
        "sub": "Pure power reach"
      },
      {
        "label": "Chase Finishes",
        "val": "5 Wins",
        "sub": "Accelerates 1st & 2nd inn"
      },
      {
        "label": "Wicket Security",
        "val": "20.6 bpd",
        "sub": "Consistent middle wall"
      }
    ],
    "scoutObservation": "An absolute batting powerhouse and unmatched situational closer. Klaasen operates with brutal efficiency, elevating below-par scores into match-winning totals while possessing the technical grit to rebuild when early wickets tumble. His rare ability to maintain devastating strike rates against express pace and mystery spin alike makes him virtually immune to conventional match-ups.",
    "justification": "The ultimate pressure rotation and demolition engine. With an elite 25.3% dot-ball rate, Klaasen scores off 75% of deliveries faced under pressure. He pairs this non-stop turnover with an explosive 198.97 death strike rate, neutralizing mystery spin with pure reach and authority."
  },
  {
    "rank": 6,
    "name": "Tristan Stubbs",
    "image": "assets/players/tristan_stubbs.png",
    "hand": "Right-Handed Batter (RHB)",
    "archetype": "360\u00b0 Strike Rotator & Closer",
    "superpower": "Lowest Dot-Ball % in Entire IPL (24.1%) & 360\u00b0 Innovation",
    "bar1": {
      "label": "Death Strike Rate (Overs 16\u201320)",
      "value": "196.16",
      "percent": 86,
      "delta": "+58.0 vs IPL Par (138.2)",
      "status": "elite"
    },
    "bar2": {
      "label": "Dot Ball Resistance (Minimizing Dots)",
      "value": "24.1% \u2605",
      "percent": 92,
      "delta": "-17.1% dots vs League (41.2%)",
      "status": "elite"
    },
    "metrics": [
      {
        "label": "Pressure Balls & Runs",
        "val": "709 b / 1,168 r",
        "sub": "164.74 Pressure SR"
      },
      {
        "label": "Boundary Frequency",
        "val": "21.2%",
        "sub": "360\u00b0 boundary access"
      },
      {
        "label": "Chase Finishes",
        "val": "10 Wins",
        "sub": "Clutch death executor"
      },
      {
        "label": "Wicket Security",
        "val": "23.6 bpd",
        "sub": "High cricket acumen"
      }
    ],
    "scoutObservation": "A dynamic South African game-changer who has been sensational for Delhi Capitals in recent seasons. Stubbs consistently produces clutch cameos and counter-punching masterclasses under extreme pressure, utilizing 360-degree innovation, lightning hands, and boundary access to all sectors of the ground to turn matches in the span of an over.",
    "justification": "Possesses the lowest dot-ball percentage in the entire IPL dataset under pressure at 24.1%. Stubbs virtually eliminates dead balls, pairing his hyper-efficient rotation with 360\u00b0 death hitting (196.16 death SR) and 10 successful chase finishes."
  },
  {
    "rank": 7,
    "name": "Vaibhav Sooryavanshi",
    "image": "assets/players/vaibhav_sooryavanshi.jpg",
    "hand": "Left-Handed Batter (LHB)",
    "archetype": "Generational Boundary Disruptor",
    "superpower": "Unrivaled Boundary Velocity: 38.8% Boundary Rate & 2026 Orange Cap",
    "bar1": {
      "label": "Death Strike Rate (Overs 16\u201320)",
      "value": "290.00 \u2605",
      "percent": 100,
      "delta": "+151.8 vs IPL Par (138.2)",
      "status": "elite"
    },
    "bar2": {
      "label": "Boundary Rate (4s & 6s)",
      "value": "38.8% \u2605",
      "percent": 100,
      "delta": "+16.8% over tournament best",
      "status": "elite"
    },
    "metrics": [
      {
        "label": "Pressure Balls & Runs",
        "val": "232 b / 530 r",
        "sub": "228.45 Pressure SR \u2605"
      },
      {
        "label": "Dot Ball %",
        "val": "35.8%",
        "sub": "Aggressive approach"
      },
      {
        "label": "Chase Finishes",
        "val": "0 Wins",
        "sub": "Early-order enforcer"
      },
      {
        "label": "Wicket Security",
        "val": "29.0 bpd \u2605",
        "sub": "Prolific run scorer"
      }
    ],
    "scoutObservation": "A generational teenage prodigy from India whose fearless batsmanship has stunned the cricketing world. In 2026, his first full IPL campaign, he delivered an awe-inspiring performance to claim the Orange Cap and swept prestigious tournament honours. His generational bat speed, boundary-scoring percentage (38.8%), and uninhibited strokeplay redefine the boundaries of T20 velocity.",
    "justification": "Generational boundary velocity. Sooryavanshi holds the highest pressure strike rate (228.45) and highest boundary frequency (38.8% of all balls hit for 4 or 6) in the competition. At the death, his 290.00 SR dismantles defensive bowling schemes before captains can react."
  },
  {
    "rank": 8,
    "name": "Nicholas Pooran",
    "image": "assets/players/nicholas_pooran.png",
    "hand": "Left-Handed Batter (LHB)",
    "archetype": "Explosive Left-Handed Finisher",
    "superpower": "High-Impact Enforcer: 1,672 Pressure Runs & 190.1 Death SR",
    "bar1": {
      "label": "Death Strike Rate (Overs 16\u201320)",
      "value": "190.07",
      "percent": 84,
      "delta": "+51.9 vs IPL Par (138.2)",
      "status": "elite"
    },
    "bar2": {
      "label": "Dot Ball Resistance (Minimizing Dots)",
      "value": "33.9%",
      "percent": 65,
      "delta": "-7.3% dots vs League (41.2%)",
      "status": "solid"
    },
    "metrics": [
      {
        "label": "Pressure Balls & Runs",
        "val": "1,010 b / 1,672 r",
        "sub": "165.54 Pressure SR"
      },
      {
        "label": "Boundary Frequency",
        "val": "23.5%",
        "sub": "Effortless bat swing"
      },
      {
        "label": "Chase Finishes",
        "val": "12 Wins",
        "sub": "High-leverage finisher"
      },
      {
        "label": "Wicket Security",
        "val": "21.0 bpd",
        "sub": "Established crisis anchor"
      }
    ],
    "scoutObservation": "A premier Caribbean finisher and among the most destructive ball-strikers in global franchise cricket. While a turbulent 2026 campaign offered personal frustration, his generational gift for striking boundaries and punishing full-length deliveries remains undisputed. With 1,672 pressure runs and effortless bat swing, his ceiling as a match-winner under crisis remains astronomical.",
    "justification": "Unlocks difficult middle-to-death matchups through devastating left-handed bat swing. With 1,672 runs scored under pressure and a 190.07 death strike rate, Pooran forces fielding captains into defensive boundary protection, opening easy singles."
  },
  {
    "rank": 9,
    "name": "David Miller",
    "image": "assets/players/david_miller.png",
    "hand": "Left-Handed Batter (LHB)",
    "archetype": "Veteran Closer / Ice-Man",
    "superpower": "Battle-Hardened Closer: 15 Chase Finishes & Sub-29% Dot Rate",
    "bar1": {
      "label": "Death Strike Rate (Overs 16\u201320)",
      "value": "174.07",
      "percent": 76,
      "delta": "+35.9 vs IPL Par (138.2)",
      "status": "solid"
    },
    "bar2": {
      "label": "Dot Ball Resistance (Minimizing Dots)",
      "value": "28.3%",
      "percent": 80,
      "delta": "-12.9% dots vs League (41.2%)",
      "status": "elite"
    },
    "metrics": [
      {
        "label": "Pressure Balls & Runs",
        "val": "901 b / 1,421 r",
        "sub": "157.71 Pressure SR"
      },
      {
        "label": "Boundary Frequency",
        "val": "20.3%",
        "sub": "Targeted execution"
      },
      {
        "label": "Chase Finishes",
        "val": "15 Wins",
        "sub": "Steely nerves"
      },
      {
        "label": "Wicket Security",
        "val": "21.5 bpd",
        "sub": "Crisis experience"
      }
    ],
    "scoutObservation": "A world-class South African southpaw and seasoned master closer. 'Killer' Miller excels at taking impossible run chases and shrinking targets through calculated boundary surges and boundary-breaking leverage. While occasional hesitations in razor-close death scenarios keep him lower on our quantitative board, his raw match-winning pedigree and 15 undefeated chase finishes prove his pedigree.",
    "justification": "Battle-hardened veteran closer who holds 15 chase finishes while absorbing high-pressure periods with a sub-29% dot rate (28.3%). Miller calculates required run rates with ice in his veins, prioritizing target execution over hollow milestones."
  },
  {
    "rank": 10,
    "name": "Suryakumar Yadav",
    "image": "assets/players/suryakumar_yadav.jpg",
    "hand": "Right-Handed Batter (RHB)",
    "archetype": "360\u00b0 Match Winner / Enforcer",
    "superpower": "All-Time Volume Benchmark: 2,289 Pressure Runs & 217.2 Death SR",
    "bar1": {
      "label": "Death Strike Rate (Overs 16\u201320)",
      "value": "217.22 \u2605",
      "percent": 94,
      "delta": "+79.0 vs IPL Par (138.2)",
      "status": "elite"
    },
    "bar2": {
      "label": "Boundary Frequency (4s & 6s)",
      "value": "26.7%",
      "percent": 85,
      "delta": "+7.5% over top tier avg",
      "status": "elite"
    },
    "metrics": [
      {
        "label": "Pressure Balls & Runs",
        "val": "1,301 b / 2,289 r \u2605",
        "sub": "175.94 Pressure SR"
      },
      {
        "label": "Dot Ball %",
        "val": "31.4%",
        "sub": "-9.8% vs league average"
      },
      {
        "label": "Chase Finishes",
        "val": "12 Wins",
        "sub": "Match defining blows"
      },
      {
        "label": "Wicket Security",
        "val": "21.7 bpd",
        "sub": "Heavy workload"
      }
    ],
    "scoutObservation": "India's T20 World Cup-winning captain whose revolutionary 360-degree strokeplay has redefined modern batting geometry. Capable of manipulating any boundary with audacious ramps, scoops, and whip-flicks, Surya remains an exhilarating spectacle. Ranked at #10 solely due to volume fluctuations across select IPL seasons, his 2,289 pressure runs stand as a testament to his match-defining caliber.",
    "justification": "The absolute volume and acceleration benchmark of T20 cricket. Across 1,301 pressure deliveries, SKY has produced 2,289 runs at a scorching 175.94 overall and 217.22 at the death, with an unmatched 26.7% boundary rate."
  }
];
const BOWLERS_ROSTER = [
  {
    "rank": 1,
    "name": "Josh Hazlewood",
    "image": "assets/players/josh_hazlewood.jpg",
    "style": "Right-Arm Fast-Medium",
    "category": "Pace",
    "superpower": "#1 Dot-Ball Rate in IPL (43.4%) & 2025 Title Architect",
    "bar1": {
      "label": "Dot Ball % (Field Execution)",
      "value": "43.4% \u2605",
      "percent": 96,
      "delta": "+11.2% dots over league baseline (32.2%)",
      "status": "elite"
    },
    "bar2": {
      "label": "Death Economy Rate (16\u201320)",
      "value": "9.47",
      "percent": 78,
      "delta": "-1.93 RPO saved vs 11.40 Par",
      "status": "solid"
    },
    "metrics": [
      {
        "label": "Total Pressure Wickets",
        "val": "62 Wkts",
        "sub": "8.17 Pressure Econ"
      },
      {
        "label": "Death Wickets (16-20)",
        "val": "30 Wkts",
        "sub": "Invasive off-stump length"
      },
      {
        "label": "Match-Winning Hauls",
        "val": "14 Hauls",
        "sub": "2+ wkts in decisive wins"
      },
      {
        "label": "Partnership Breakers",
        "val": "8 Breaks",
        "sub": "Chokes boundary access"
      }
    ],
    "scoutObservation": "An Australian seam-bowling treasure whose robotic discipline spearheaded RCB's drought-breaking 2025 title triumph after 18 years. Hazlewood's relentless accuracy on a nagging off-stump channel denies batters boundary access, creating suffocating psychological pressure that inexorably harvests wickets. His tournament-leading 43.4% dot-ball rate represents the pinnacle of pressure bowling.",
    "justification": "Supreme tactical execution under fire. Hazlewood owns the #1 dot-ball percentage in the competition at 43.4%, starving batters of scoring opportunities and forcing rash strokes. His 62 wickets and 14 winning hauls prove economy and wickets go hand-in-hand."
  },
  {
    "rank": 2,
    "name": "Jasprit Bumrah",
    "image": "assets/players/jasprit_bumrah.jpg",
    "style": "Right-Arm Fast (Express)",
    "category": "Pace",
    "superpower": "All-Time Gold Standard: 7.00 Pressure & 7.19 Death Economy",
    "bar1": {
      "label": "Death Economy Rate (16\u201320)",
      "value": "7.19 \u2605",
      "percent": 98,
      "delta": "-4.21 RPO suppressed vs 11.40 Par",
      "status": "elite"
    },
    "bar2": {
      "label": "Dot Ball % (Field Execution)",
      "value": "42.5%",
      "percent": 94,
      "delta": "+10.3% dots over league baseline (32.2%)",
      "status": "elite"
    },
    "metrics": [
      {
        "label": "Total Pressure Wickets",
        "val": "52 Wkts",
        "sub": "7.00 Pressure Econ \u2605"
      },
      {
        "label": "Death Wickets (16-20)",
        "val": "35 Wkts",
        "sub": "Pinpoint missile yorkers"
      },
      {
        "label": "Match-Winning Hauls",
        "val": "12 Hauls",
        "sub": "Dictates terms on every ball"
      },
      {
        "label": "Partnership Breakers",
        "val": "13 Breaks",
        "sub": "Defensive stranglehold"
      }
    ],
    "scoutObservation": "The crown jewel of India and Mumbai Indians' bowling artillery. Bumrah commands an unparalleled 7.00 pressure economy and 7.19 death-overs metric through laser-guided missile yorkers, deceptive dipping slower deliveries, and lethal bounce. He dictates terms to batters on every single delivery, turning death overs into defensive strangleholds.",
    "justification": "The undisputed gold standard of defensive and attacking cricket. Across 957 pressure deliveries, Bumrah concedes an unbelievable 7.00 runs per over, dropping to an IPL-record 7.19 in overs 16\u201320 where league average exceeds 11.20."
  },
  {
    "rank": 3,
    "name": "Arshdeep Singh",
    "image": "assets/players/arshdeep_singh.jpg",
    "style": "Left-Arm Medium-Fast",
    "category": "Pace",
    "superpower": "Wicket Kingpin: 109 Pressure Wkts, 75 Death Wkts (IPL Most)",
    "bar1": {
      "label": "Total Pressure Wickets",
      "value": "109 \u2605",
      "percent": 100,
      "delta": "#1 Most Wickets in IPL Dataset",
      "status": "elite"
    },
    "bar2": {
      "label": "Death Wickets (16\u201320)",
      "value": "75 \u2605",
      "percent": 100,
      "delta": "#1 Most Death Wickets in IPL",
      "status": "elite"
    },
    "metrics": [
      {
        "label": "Total Deliveries",
        "val": "1,585 Balls",
        "sub": "8.81 Pressure Econ"
      },
      {
        "label": "Dot Ball %",
        "val": "36.8%",
        "sub": "+4.6% vs baseline"
      },
      {
        "label": "Match-Winning Hauls",
        "val": "18 Hauls",
        "sub": "2-Time T20 World Champion"
      },
      {
        "label": "Partnership Breakers",
        "val": "33 Breaks \u2605",
        "sub": "Most in IPL history"
      }
    ],
    "scoutObservation": "A left-arm bowling titan who ascended to become India's all-time leading T20I wicket-taker (surpassing Chahal). A decorated 2-time T20 World Champion, Arshdeep's venomous late swing breaches defenses with the new ball, while his ice-cold execution at the death delivered an IPL-record 109 pressure wickets and 33 critical partnership breakthroughs.",
    "justification": "The absolute wicket kingpin of high-leverage situations. Arshdeep leads the entire IPL dataset with 109 pressure wickets, 75 death wickets, and 33 crucial partnership-breaking strikes against rampaging set batters."
  },
  {
    "rank": 4,
    "name": "Rashid Khan",
    "image": "assets/players/rashid_khan.jpg",
    "style": "Right-Arm Leg-Break (Fast Spin)",
    "category": "Spin",
    "superpower": "Match-Winning Anchor: 19 Winning Hauls & 7.46 Economy",
    "bar1": {
      "label": "Match-Winning Hauls",
      "value": "19 \u2605",
      "percent": 100,
      "delta": "#1 Most in IPL History",
      "status": "elite"
    },
    "bar2": {
      "label": "Pressure Economy Rate",
      "value": "7.46",
      "percent": 92,
      "delta": "-1.54 RPO vs T20 baseline",
      "status": "elite"
    },
    "metrics": [
      {
        "label": "Total Pressure Wickets",
        "val": "86 Wkts",
        "sub": "1,386 Pressure Balls"
      },
      {
        "label": "Death Wickets (16-20)",
        "val": "51 Wkts",
        "sub": "8.63 Death Economy"
      },
      {
        "label": "Dot Ball %",
        "val": "36.0%",
        "sub": "Fast spin & drift"
      },
      {
        "label": "Partnership Breakers",
        "val": "22 Breaks",
        "sub": "Crucial batting depth"
      }
    ],
    "scoutObservation": "Afghanistan's spin sorcerer whose rapid arm speed, sharp drift, and unpickable variations continue to baffle the world's finest batters. Beyond his remarkable 7.46 pressure economy and 19 match-winning hauls, Rashid's explosive lower-order batting depth and fearless mentality make him an invaluable multi-dimensional asset when games hang in the balance.",
    "justification": "Match-winning anchor. Rashid has produced 19 match-winning 2+ wicket hauls under crisis (the highest in the league), while maintaining a stingy 7.46 economy across 1,386 pressure balls."
  },
  {
    "rank": 5,
    "name": "Bhuvneshwar Kumar",
    "image": "assets/players/bhuvneshwar_kumar.jpg",
    "style": "Right-Arm Medium (Swing Specialist)",
    "category": "Pace",
    "superpower": "India's Swing King: 42 Death Wickets & Surgical Seam Control",
    "bar1": {
      "label": "Death Wickets (16\u201320)",
      "value": "42",
      "percent": 82,
      "delta": "+18 wickets over pace avg",
      "status": "solid"
    },
    "bar2": {
      "label": "Dot Ball % (Field Execution)",
      "value": "36.0%",
      "percent": 76,
      "delta": "+3.8% dots over league baseline",
      "status": "solid"
    },
    "metrics": [
      {
        "label": "Total Pressure Wickets",
        "val": "61 Wkts",
        "sub": "8.56 Pressure Econ"
      },
      {
        "label": "Death Economy",
        "val": "9.63",
        "sub": "Wide-line yorker master"
      },
      {
        "label": "Match-Winning Hauls",
        "val": "9 Hauls",
        "sub": "Near Purple Cap in 2026"
      },
      {
        "label": "Partnership Breakers",
        "val": "17 Breaks",
        "sub": "New ball + death poise"
      }
    ],
    "scoutObservation": "The undisputed Swing King of India. Bhuvi pairs pristine new-ball hoop with masterclass death execution\u2014deploying pinpoint yorkers, knuckleballs, and wide-line deliveries with surgical discipline. Narrowly missing the Purple Cap this season, his 42 death wickets while defending razor-thin margins reflect a timeless master of seam craft.",
    "justification": "Unrivaled seam discipline and tactical mastery. Bhuvneshwar hits defensive boundary-rider fields with surgical consistency, bagging 42 death wickets and maintaining an 8.56 overall pressure economy."
  },
  {
    "rank": 6,
    "name": "Yuzvendra Chahal",
    "image": "assets/players/yuzvendra_chahal.jpg",
    "style": "Right-Arm Leg-Break (Attacking)",
    "category": "Spin",
    "superpower": "Fearless Baiter: 76 Pressure Wickets & 23 Stand Breakers",
    "bar1": {
      "label": "Total Pressure Wickets",
      "value": "76",
      "percent": 86,
      "delta": "#2 Spin Wicket-Taker in Pressure",
      "status": "elite"
    },
    "bar2": {
      "label": "Partnership Breakers",
      "value": "23 Breaks",
      "percent": 88,
      "delta": "Decisive set-batter dismissals",
      "status": "elite"
    },
    "metrics": [
      {
        "label": "Pressure Balls",
        "val": "1,230 Balls",
        "sub": "8.77 Pressure Econ"
      },
      {
        "label": "Death Wickets (16-20)",
        "val": "34 Wkts",
        "sub": "Dares batters to hit"
      },
      {
        "label": "Match-Winning Hauls",
        "val": "14 Hauls",
        "sub": "Supreme match presence"
      },
      {
        "label": "Dot Ball %",
        "val": "29.9%",
        "sub": "Aggressive attacking lines"
      }
    ],
    "scoutObservation": "A fearless spin maestro endowed with otherworldly cricketing intelligence. Chahal intentionally loops deliveries outside off-stump, inviting batters into aggressive traps before deceiving them with drift and dip. With 76 pressure wickets and 23 crucial partnership-breaking strikes, his tactical daring thrives precisely where other spinners retreat.",
    "justification": "Fearless tactical baiting. Unlike defensive spinners who bowl flat darts to restrict boundaries, Chahal flights the ball outside off-stump in crisis overs, inducing 23 partnership breaks and 76 total pressure wickets."
  },
  {
    "rank": 7,
    "name": "Matheesha Pathirana",
    "image": "assets/players/matheesha_pathirana.png",
    "style": "Right-Arm Fast (Sling)",
    "category": "Pace",
    "superpower": "Deadly Sling Yorkers: Strikes Every 12.1 Balls at Death",
    "bar1": {
      "label": "Death Economy Rate (16\u201320)",
      "value": "8.18 \u2605",
      "percent": 90,
      "delta": "-3.22 RPO saved vs 11.40 Par",
      "status": "elite"
    },
    "bar2": {
      "label": "Death Strike Rate",
      "value": "12.1 Balls \u2605",
      "percent": 96,
      "delta": "Fastest death strike rate in T20",
      "status": "elite"
    },
    "metrics": [
      {
        "label": "Total Pressure Wickets",
        "val": "57 Wkts",
        "sub": "7.70 Pressure Econ"
      },
      {
        "label": "Death Wickets",
        "val": "44 Wkts \u2605",
        "sub": "Captured in only 693 balls"
      },
      {
        "label": "Dot Ball %",
        "val": "37.4%",
        "sub": "145+ km/h round-arm release"
      },
      {
        "label": "Match-Winning Hauls",
        "val": "8 Hauls",
        "sub": "Lethal toe crushers"
      }
    ],
    "scoutObservation": "Sri Lanka's sling-arm phenomenon whose extreme round-arm trajectory poses a nightmare for batters to pick up. Pathirana leverages this unconventional release to unleash toe-crushing 145+ km/h yorkers and fiendish dipping slower deliveries, striking every 12.1 deliveries at the death to claim 44 death wickets in just 693 pressure balls.",
    "justification": "Lethal sling-arm yorker execution. In only 693 pressure deliveries, Pathirana has captured 44 death wickets with an 8.18 economy, striking every 12.1 deliveries\u2014the fastest strike rate at the death in modern T20 cricket."
  },
  {
    "rank": 8,
    "name": "Wanindu Hasaranga",
    "image": "assets/players/wanindu_hasaranga.jpg",
    "style": "Right-Arm Leg-Break (Googly Specialist)",
    "category": "Spin",
    "superpower": "Middle Enforcer & Googly Weapon: 73 Wkts & 23 Breakers",
    "bar1": {
      "label": "Death Economy Rate (16\u201320)",
      "value": "8.38",
      "percent": 88,
      "delta": "-3.02 RPO saved vs 11.40 Par",
      "status": "elite"
    },
    "bar2": {
      "label": "Dot Ball % (Field Execution)",
      "value": "36.1%",
      "percent": 78,
      "delta": "+3.9% dots over league baseline",
      "status": "solid"
    },
    "metrics": [
      {
        "label": "Total Pressure Wickets",
        "val": "73 Wkts",
        "sub": "8.27 Pressure Econ"
      },
      {
        "label": "Partnership Breakers",
        "val": "23 Breaks",
        "sub": "Stops momentum shifts"
      },
      {
        "label": "Match-Winning Hauls",
        "val": "14 Hauls",
        "sub": "High-leverage dominance"
      },
      {
        "label": "Death Wickets",
        "val": "27 Wkts",
        "sub": "Lower-order hitting depth"
      }
    ],
    "scoutObservation": "A high-octane Sri Lankan leg-spinner whose fast-turning googlies and deceptive flippers consistently break games open in the high-leverage middle overs. Responsible for 73 wickets and 23 partnership breakthroughs, his dynamic lower-order hitting power adds valuable balance and depth to any high-stakes lineup.",
    "justification": "Aggressive middle-overs and death enforcer. Hasaranga boasts an 8.27 pressure economy and 23 partnership-breaking wickets, preventing teams from setting up death-overs assaults."
  },
  {
    "rank": 9,
    "name": "Jason Holder",
    "image": "assets/players/jason_holder.jpg",
    "style": "Right-Arm Medium-Fast (Heavy Ball)",
    "category": "Pace",
    "superpower": "6'7\" Heavy Bounce Enforcer: 43 Death Wickets & 19 Stand Breaks",
    "bar1": {
      "label": "Death Wickets (16\u201320)",
      "value": "43 Wkts",
      "percent": 82,
      "delta": "Heavy back-of-length bounce",
      "status": "solid"
    },
    "bar2": {
      "label": "Total Pressure Wickets",
      "value": "70 Wkts",
      "percent": 80,
      "delta": "1,077 pressure deliveries",
      "status": "solid"
    },
    "metrics": [
      {
        "label": "Pressure Balls",
        "val": "1,077 Balls",
        "sub": "8.59 Pressure Econ"
      },
      {
        "label": "Death Economy",
        "val": "9.82",
        "sub": "-1.58 RPO vs death par"
      },
      {
        "label": "Partnership Breakers",
        "val": "19 Breaks",
        "sub": "Breaks top-order stands"
      },
      {
        "label": "Match-Winning Hauls",
        "val": "11 Hauls",
        "sub": "Crucial lower-order balance"
      }
    ],
    "scoutObservation": "A towering 6'7\" Caribbean fast-bowling all-rounder who generates awkward, steep bounce that dismantles top orders. Holder utilizes his height and release angle to hit hard lengths and execute defensive death lines (43 death wickets), while providing vital lower-order boundary clearing that steadies the lower half of the team.",
    "justification": "Heavy-bounce enforcer. Holder utilizes his towering release to extract steep bounce from good lengths under pressure, bagging 43 death wickets and 19 partnership breaks in tight contests."
  },
  {
    "rank": 10,
    "name": "Krunal Pandya",
    "image": "assets/players/krunal_pandya.png",
    "style": "Slow Left-Arm Orthodox (Defensive Dart)",
    "category": "Spin",
    "superpower": "Hybrid Speed Tactical Enforcer: 7.39 Pressure Econ & Surprise Bouncers",
    "bar1": {
      "label": "Pressure Economy Rate",
      "value": "7.39 \u2605",
      "percent": 94,
      "delta": "-1.61 RPO vs league baseline",
      "status": "elite"
    },
    "bar2": {
      "label": "Dot Ball % (Field Execution)",
      "value": "32.7%",
      "percent": 70,
      "delta": "Flat darts with zero arm change",
      "status": "solid"
    },
    "metrics": [
      {
        "label": "Pressure Balls",
        "val": "581 Balls",
        "sub": "Stranglehold run containment"
      },
      {
        "label": "Total Wickets",
        "val": "28 Wkts",
        "sub": "5 death wickets"
      },
      {
        "label": "Partnership Breakers",
        "val": "9 Breaks",
        "sub": "Unpredictable bounce"
      },
      {
        "label": "Match-Winning Hauls",
        "val": "7 Hauls",
        "sub": "Resurgent 2 seasons"
      }
    ],
    "scoutObservation": "A high-IQ tactical spinner whose resurgence over the last two seasons commanded his place in our rankings. Krunal crafts an extraordinary hybrid style\u2014approaching from a spinner's run-up but firing darts at medium-pace speeds, before astonishingly unleashing a steep, throat-high bouncer out of thin air with zero detectable change in his bowling arm action.",
    "justification": "Defensive run stranglehold. Across 581 pressure balls, Krunal concedes only 7.39 runs per over, shutting down scoring corridors when opposition batters attempt to mount middle-overs comebacks."
  }
];

let currentRosterMode = 'batters';

const switchBattersBtn = document.getElementById('switchBatters');
const switchBowlersBtn = document.getElementById('switchBowlers');
const dossierListEl = document.getElementById('dossierList');
const sectionHeadlineEl = document.getElementById('sectionHeadline');
const sectionSubEl = document.getElementById('sectionSub');

function renderRoster() {
  if (!dossierListEl) return;

  const isBatters = currentRosterMode === 'batters';
  const dataset = isBatters ? BATTERS_ROSTER : BOWLERS_ROSTER;

  if (sectionHeadlineEl) {
    sectionHeadlineEl.innerHTML = isBatters
      ? `<span>TOP 10 BATTERS UNDER PRESSURE</span>`
      : `<span>TOP 10 BOWLERS UNDER PRESSURE</span>`;
  }
  if (sectionSubEl) {
    sectionSubEl.textContent = isBatters
      ? "Evaluated across 200,999 records on run velocity, dot suppression, wicket preservation, and chase finishes."
      : "Evaluated across 200,999 records on field execution (dot %), run containment, death defense, and winning hauls.";
  }

  dossierListEl.innerHTML = dataset.map((player, index) => {
    const isEven = (index % 2 === 1);
    const rowClass = isEven ? 'even-row' : 'odd-row';
    const animationClass = isEven ? 'reveal-right' : 'reveal-left';
    const rankPadded = String(player.rank).padStart(2, '0');

    return `
      <article class="player-telemetry-card ${rowClass} ${animationClass}" id="player-${player.rank}">

        <!-- Visual Media Anchor -->
        <div class="card-visual-anchor">
          <div class="rank-badge-pill">
            <span class="rank-num">#${rankPadded}</span>
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

        <!-- Telemetry Intel & Performance Dashboard -->
        <div class="card-telemetry-body">

          <!-- Header: Role & Identification -->
          <div class="player-header-bar">
            <div class="role-archetype-tag">
              <span class="role-pill">${isBatters ? 'BATTER' : 'BOWLER'}</span>
              <span class="meta-dot">/</span>
              <span class="role-name">${isBatters ? player.hand : player.style}</span>
            </div>

            <h3 class="player-title-name">${player.name}</h3>

            <div class="superpower-pill">
              <span class="superpower-icon">⚡</span>
              <span class="superpower-text">${player.superpower}</span>
            </div>
          </div>

          <!-- Signature Telemetry Gauges (Visual Performance Bars) -->
          <div class="telemetry-gauge-cluster">
            <!-- Primary Bar -->
            <div class="gauge-card">
              <div class="gauge-meta">
                <span class="gauge-title">${player.bar1.label}</span>
                <span class="gauge-score tabular">${player.bar1.value}</span>
              </div>
              <div class="gauge-track">
                <div class="gauge-fill fill-primary" style="width: ${player.bar1.percent}%;"></div>
              </div>
              <div class="gauge-footer">
                <span class="gauge-delta">${player.bar1.delta}</span>
              </div>
            </div>

            <!-- Secondary Bar -->
            <div class="gauge-card">
              <div class="gauge-meta">
                <span class="gauge-title">${player.bar2.label}</span>
                <span class="gauge-score tabular">${player.bar2.value}</span>
              </div>
              <div class="gauge-track">
                <div class="gauge-fill fill-secondary" style="width: ${player.bar2.percent}%;"></div>
              </div>
              <div class="gauge-footer">
                <span class="gauge-delta">${player.bar2.delta}</span>
              </div>
            </div>
          </div>

          <!-- 4-Cell Telemetry Metric Matrix -->
          <div class="telemetry-grid">
            ${player.metrics.map(m => `
              <div class="telemetry-cell">
                <div class="cell-label">${m.label}</div>
                <div class="cell-value tabular">${m.val}</div>
                <div class="cell-sub">${m.sub}</div>
              </div>
            `).join('')}
          </div>

          <!-- Integrated Intelligence Briefing -->
          <div class="intel-briefing-wrap">
            <!-- Scout's Personal Observation -->
            <div class="intel-block scout-block">
              <div class="intel-header">
                <span class="intel-icon">👁️</span>
                <span class="intel-title">Scout & Analyst Field Observation</span>
              </div>
              <p class="intel-content">${player.scoutObservation}</p>
            </div>

            <!-- Quantitative Think-Tank Justification -->
            <div class="intel-block metrics-block">
              <div class="intel-header">
                <span class="intel-icon">📐</span>
                <span class="intel-title">Think-Tank Quantitative Framework</span>
              </div>
              <p class="intel-content">${player.justification}</p>
            </div>
          </div>

        </div>

      </article>
    `;
  }).join('');

  observeScrollReveals();
}

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
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

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

function setupNavLinks() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setupSwitcher();
  setupNavLinks();
  renderRoster();
  observeScrollReveals();
});
