/**
 * Rajasthan Royals - SupeRR Selector Season 2 | RRHACKATHON
 * Official Think-Tank Premium Dossier Engine (Editorial Matte Edition)
 */

const BATTERS_ROSTER = [
  {
    "rank": 1,
    "name": "Tim David",
    "image": "assets/players/tim_david.jpg",
    "hand": "Right-Handed Batter (RHB)",
    "archetype": "Death Power Hitter / Finisher",
    "primaryLabel": "Pressure Strike Rate",
    "primaryValue": "181.52",
    "primarySub": "199.81 Death SR (Overs 16-20)",
    "stat1": {
      "label": "Pressure Balls",
      "val": "828"
    },
    "stat2": {
      "label": "Pressure Runs",
      "val": "1,503"
    },
    "stat3": {
      "label": "Death SR (16-20)",
      "val": "199.81 \u2605"
    },
    "stat4": {
      "label": "Dot % (Min Dots)",
      "val": "30.4%"
    },
    "stat5": {
      "label": "Boundary %",
      "val": "25.7%"
    },
    "stat6": {
      "label": "Chase Finishes",
      "val": "15"
    },
    "bpd": "16.9",
    "scoutObservation": "A ferocious power-hitting beast capable of depositing the ball into the stands for maximums at will. Tim injects game-breaking momentum into the batting order, consistently finishing innings on an explosive high that demoralizes oppositions and carries momentum into the field. Complementing his death-over destruction, his towering athleticism and safe hands make him an absolute jewel of an outfield fielder.",
    "justification": "Peak death closer in world T20 cricket. In overs 16\u201320 under high pressure, David strikes at an astronomical 199.81 (535 balls, 1,069 runs). Moreover, this is not reckless slogging: he has remained not out to guide his team across the line 15 distinct times in successful chases."
  },
  {
    "rank": 2,
    "name": "Namboori Tilak Varma",
    "image": "assets/players/tilak_varma.jpg",
    "hand": "Left-Handed Batter (LHB)",
    "archetype": "Crisis Finisher / Chase Master",
    "primaryLabel": "Pressure Strike Rate",
    "primaryValue": "149.49",
    "primarySub": "21 Chase Finishes (Most in IPL)",
    "stat1": {
      "label": "Pressure Balls",
      "val": "1,465"
    },
    "stat2": {
      "label": "Pressure Runs",
      "val": "2,190"
    },
    "stat3": {
      "label": "Death SR (16-20)",
      "val": "191.88"
    },
    "stat4": {
      "label": "Dot % (Min Dots)",
      "val": "30.4%"
    },
    "stat5": {
      "label": "Boundary %",
      "val": "18.8%"
    },
    "stat6": {
      "label": "Chase Finishes",
      "val": "21 \u2605"
    },
    "bpd": "27.1",
    "scoutObservation": "A premier Indian batting tactician with an exceptional cricketing brain who reads match situations with surgical precision. Tilak is equally adept at arresting steep batting collapses through composed strike-rotation as he is at launching ferocious counter-attacks when the required run rate spikes. His elite technical versatility allows him to seamlessly execute dual roles as both stabilizer and high-impact crisis finisher.",
    "justification": "Uncontested #1 chase anchor in the league. Across 1,465 high-pressure deliveries, Tilak has anchored Mumbai through 21 successful chase finishes (the absolute highest in IPL history). His 27.1 balls per dismissal and 191.88 death strike rate combine elite wicket preservation with sudden lethal acceleration."
  },
  {
    "rank": 3,
    "name": "Virat Kohli",
    "image": "assets/players/virat_kohli.jpg",
    "hand": "Right-Handed Batter (RHB)",
    "archetype": "Master Anchor / Chase Specialist",
    "primaryLabel": "Pressure Strike Rate",
    "primaryValue": "157.70",
    "primarySub": "27.2 Balls / Dismissal (Security)",
    "stat1": {
      "label": "Pressure Balls",
      "val": "896"
    },
    "stat2": {
      "label": "Pressure Runs",
      "val": "1,413"
    },
    "stat3": {
      "label": "Death SR (16-20)",
      "val": "186.53"
    },
    "stat4": {
      "label": "Dot % (Min Dots)",
      "val": "27.7% \u2605"
    },
    "stat5": {
      "label": "Boundary %",
      "val": "21.5%"
    },
    "stat6": {
      "label": "Chase Finishes",
      "val": "9"
    },
    "bpd": "27.2",
    "scoutObservation": "The undisputed master veteran of modern cricket. In recent seasons, Virat has dynamically evolved his batting blueprint to embrace the modern high-tempo demands of the IPL while retaining peerless match awareness. If Kohli remains at the crease, victory is virtually assured\u2014his mastery over acceleration tempo, crisis stabilization, and situational calm is second to none, anchored by almost two decades of elite high-stakes experience.",
    "justification": "The benchmark of structural wicket security. Boasting 27.2 balls per dismissal under pressure alongside a sub-28% dot-ball rate (27.7%), Kohli protects the foundation, preventing fatal cluster collapses while seamlessly shifting gears to a 186.53 strike rate at the death."
  },
  {
    "rank": 4,
    "name": "Rajat Patidar",
    "image": "assets/players/rajat_patidar.png",
    "hand": "Right-Handed Batter (RHB)",
    "archetype": "Middle-to-Death Spin Enforcer",
    "primaryLabel": "Pressure Strike Rate",
    "primaryValue": "160.30",
    "primarySub": "217.00 Death SR (Elite)",
    "stat1": {
      "label": "Pressure Balls",
      "val": "461"
    },
    "stat2": {
      "label": "Pressure Runs",
      "val": "739"
    },
    "stat3": {
      "label": "Death SR (16-20)",
      "val": "217.00 \u2605"
    },
    "stat4": {
      "label": "Dot % (Min Dots)",
      "val": "32.5%"
    },
    "stat5": {
      "label": "Boundary %",
      "val": "22.3%"
    },
    "stat6": {
      "label": "Chase Finishes",
      "val": "1"
    },
    "bpd": "17.1",
    "scoutObservation": "A high-impact pick whose domestic and IPL numbers under pressure are off the charts. Patidar is cricket's foremost spin executioner, hunting middle-overs spinners with disdain and striking above 200 with effortless six-hitting arc. Alongside his boundary prowess, his calm, decisive leadership steered RCB to back-to-back championship triumphs in his first two years as captain, cementing his credentials as a clutch commander.",
    "justification": "Peerless ability to dismantle opposition bowling plans during the tricky overs 11\u201316 transition. In death overs under pressure, Patidar's strike rate escalates to an extraordinary 217.00 across 112 deliveries, converting quiet consolidation periods into decisive match-winning surges."
  },
  {
    "rank": 5,
    "name": "Heinrich Klaasen",
    "image": "assets/players/heinrich_klaasen.jpg",
    "hand": "Right-Handed Batter (RHB)",
    "archetype": "Zero-Dot Spin Demolisher",
    "primaryLabel": "Pressure Strike Rate",
    "primaryValue": "173.61",
    "primarySub": "25.3% Dot Rate (Elite Scorer)",
    "stat1": {
      "label": "Pressure Balls",
      "val": "864"
    },
    "stat2": {
      "label": "Pressure Runs",
      "val": "1,500"
    },
    "stat3": {
      "label": "Death SR (16-20)",
      "val": "198.97"
    },
    "stat4": {
      "label": "Dot % (Min Dots)",
      "val": "25.3% \u2605"
    },
    "stat5": {
      "label": "Boundary %",
      "val": "23.0%"
    },
    "stat6": {
      "label": "Chase Finishes",
      "val": "5"
    },
    "bpd": "20.6",
    "scoutObservation": "An absolute batting powerhouse and unmatched situational closer. Klaasen operates with brutal efficiency, elevating below-par scores into match-winning totals while possessing the technical grit to rebuild when early wickets tumble. His rare ability to maintain devastating strike rates against express pace and mystery spin alike makes him virtually immune to conventional match-ups.",
    "justification": "The ultimate pressure rotation and demolition engine. With an elite 25.3% dot-ball rate, Klaasen scores off 75% of deliveries faced under pressure. He pairs this non-stop turnover with an explosive 198.97 death strike rate, neutralizing mystery spin with pure reach and authority."
  },
  {
    "rank": 6,
    "name": "Tristan Stubbs",
    "image": "assets/players/tristan_stubbs.png",
    "hand": "Right-Handed Batter (RHB)",
    "archetype": "360\u00b0 Strike Rotator & Closer",
    "primaryLabel": "Pressure Strike Rate",
    "primaryValue": "164.74",
    "primarySub": "24.1% Dot Rate (Lowest in IPL)",
    "stat1": {
      "label": "Pressure Balls",
      "val": "709"
    },
    "stat2": {
      "label": "Pressure Runs",
      "val": "1,168"
    },
    "stat3": {
      "label": "Death SR (16-20)",
      "val": "196.16"
    },
    "stat4": {
      "label": "Dot % (Min Dots)",
      "val": "24.1% \u2605"
    },
    "stat5": {
      "label": "Boundary %",
      "val": "21.2%"
    },
    "stat6": {
      "label": "Chase Finishes",
      "val": "10"
    },
    "bpd": "23.6",
    "scoutObservation": "A dynamic South African game-changer who has been sensational for Delhi Capitals in recent seasons. Stubbs consistently produces clutch cameos and counter-punching masterclasses under extreme pressure, utilizing 360-degree innovation, lightning hands, and boundary access to all sectors of the ground to turn matches in the span of an over.",
    "justification": "Possesses the lowest dot-ball percentage in the entire IPL dataset under pressure at 24.1%. Stubbs virtually eliminates dead balls, pairing his hyper-efficient rotation with 360\u00b0 death hitting (196.16 death SR) and 10 successful chase finishes."
  },
  {
    "rank": 7,
    "name": "Vaibhav Sooryavanshi",
    "image": "assets/players/vaibhav_sooryavanshi.jpg",
    "hand": "Left-Handed Batter (LHB)",
    "archetype": "Generational Boundary Disruptor",
    "primaryLabel": "Pressure Strike Rate",
    "primaryValue": "228.45 \u2605",
    "primarySub": "38.8% Boundary % (Highest in IPL)",
    "stat1": {
      "label": "Pressure Balls",
      "val": "232"
    },
    "stat2": {
      "label": "Pressure Runs",
      "val": "530"
    },
    "stat3": {
      "label": "Death SR (16-20)",
      "val": "290.00 \u2605"
    },
    "stat4": {
      "label": "Dot % (Min Dots)",
      "val": "35.8%"
    },
    "stat5": {
      "label": "Boundary %",
      "val": "38.8% \u2605"
    },
    "stat6": {
      "label": "Chase Finishes",
      "val": "0"
    },
    "bpd": "29.0",
    "scoutObservation": "A generational teenage prodigy from India whose fearless batsmanship has stunned the cricketing world. In 2026, his first full IPL campaign, he delivered an awe-inspiring performance to claim the Orange Cap and swept prestigious tournament honours. His generational bat speed, boundary-scoring percentage (38.8%), and uninhibited strokeplay redefine the boundaries of T20 velocity.",
    "justification": "Generational boundary velocity. Sooryavanshi holds the highest pressure strike rate (228.45) and highest boundary frequency (38.8% of all balls hit for 4 or 6) in the competition. At the death, his 290.00 SR dismantles defensive bowling schemes before captains can react."
  },
  {
    "rank": 8,
    "name": "Nicholas Pooran",
    "image": "assets/players/nicholas_pooran.png",
    "hand": "Left-Handed Batter (LHB)",
    "archetype": "Explosive Left-Handed Finisher",
    "primaryLabel": "Pressure Strike Rate",
    "primaryValue": "165.54",
    "primarySub": "1,672 Pressure Runs & 190.1 Death SR",
    "stat1": {
      "label": "Pressure Balls",
      "val": "1,010"
    },
    "stat2": {
      "label": "Pressure Runs",
      "val": "1,672"
    },
    "stat3": {
      "label": "Death SR (16-20)",
      "val": "190.07"
    },
    "stat4": {
      "label": "Dot % (Min Dots)",
      "val": "33.9%"
    },
    "stat5": {
      "label": "Boundary %",
      "val": "23.5%"
    },
    "stat6": {
      "label": "Chase Finishes",
      "val": "12"
    },
    "bpd": "21.0",
    "scoutObservation": "A premier Caribbean finisher and among the most destructive ball-strikers in global franchise cricket. While a turbulent 2026 campaign offered personal frustration, his generational gift for striking boundaries and punishing full-length deliveries remains undisputed. With 1,672 pressure runs and effortless bat swing, his ceiling as a match-winner under crisis remains astronomical.",
    "justification": "Unlocks difficult middle-to-death matchups through devastating left-handed bat swing. With 1,672 runs scored under pressure and a 190.07 death strike rate, Pooran forces fielding captains into defensive boundary protection, opening easy singles."
  },
  {
    "rank": 9,
    "name": "David Miller",
    "image": "assets/players/david_miller.png",
    "hand": "Left-Handed Batter (LHB)",
    "archetype": "Veteran Closer / Ice-Man",
    "primaryLabel": "Pressure Strike Rate",
    "primaryValue": "157.71",
    "primarySub": "15 Chase Finishes (Sub-29% Dots)",
    "stat1": {
      "label": "Pressure Balls",
      "val": "901"
    },
    "stat2": {
      "label": "Pressure Runs",
      "val": "1,421"
    },
    "stat3": {
      "label": "Death SR (16-20)",
      "val": "174.07"
    },
    "stat4": {
      "label": "Dot % (Min Dots)",
      "val": "28.3%"
    },
    "stat5": {
      "label": "Boundary %",
      "val": "20.3%"
    },
    "stat6": {
      "label": "Chase Finishes",
      "val": "15"
    },
    "bpd": "21.5",
    "scoutObservation": "A world-class South African southpaw and seasoned master closer. 'Killer' Miller excels at taking impossible run chases and shrinking targets through calculated boundary surges and boundary-breaking leverage. While occasional hesitations in razor-close death scenarios keep him lower on our quantitative board, his raw match-winning pedigree and 15 undefeated chase finishes prove his pedigree.",
    "justification": "Battle-hardened veteran closer who holds 15 chase finishes while absorbing high-pressure periods with a sub-29% dot rate (28.3%). Miller calculates required run rates with ice in his veins, prioritizing target execution over hollow milestones."
  },
  {
    "rank": 10,
    "name": "Suryakumar Yadav",
    "image": "assets/players/suryakumar_yadav.jpg",
    "hand": "Right-Handed Batter (RHB)",
    "archetype": "360\u00b0 Match Winner / Enforcer",
    "primaryLabel": "Pressure Strike Rate",
    "primaryValue": "175.94",
    "primarySub": "2,289 Runs (Most in Dataset)",
    "stat1": {
      "label": "Pressure Balls",
      "val": "1,301"
    },
    "stat2": {
      "label": "Pressure Runs",
      "val": "2,289 \u2605"
    },
    "stat3": {
      "label": "Death SR (16-20)",
      "val": "217.22"
    },
    "stat4": {
      "label": "Dot % (Min Dots)",
      "val": "31.4%"
    },
    "stat5": {
      "label": "Boundary %",
      "val": "26.7%"
    },
    "stat6": {
      "label": "Chase Finishes",
      "val": "12"
    },
    "bpd": "21.7",
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
    "primaryLabel": "Pressure Dot Ball %",
    "primaryValue": "43.4% \u2605",
    "primarySub": "#1 Field Execution in IPL",
    "stat1": {
      "label": "Pressure Balls",
      "val": "847"
    },
    "stat2": {
      "label": "Pressure Econ",
      "val": "8.17"
    },
    "stat3": {
      "label": "Death Econ (16-20)",
      "val": "9.47"
    },
    "stat4": {
      "label": "Total Pressure Wkts",
      "val": "62"
    },
    "stat5": {
      "label": "Death Wkts",
      "val": "30"
    },
    "stat6": {
      "label": "Partnership Breakers",
      "val": "8"
    },
    "hauls": "14 Match-Winning Hauls",
    "scoutObservation": "An Australian seam-bowling treasure whose robotic discipline spearheaded RCB's drought-breaking 2025 title triumph after 18 years. Hazlewood's relentless accuracy on a nagging off-stump channel denies batters boundary access, creating suffocating psychological pressure that inexorably harvests wickets. His tournament-leading 43.4% dot-ball rate represents the pinnacle of pressure bowling.",
    "justification": "Supreme tactical execution under fire. Hazlewood owns the #1 dot-ball percentage in the competition at 43.4%, starving batters of scoring opportunities and forcing rash strokes. His 62 wickets and 14 winning hauls prove economy and wickets go hand-in-hand."
  },
  {
    "rank": 2,
    "name": "Jasprit Bumrah",
    "image": "assets/players/jasprit_bumrah.jpg",
    "style": "Right-Arm Fast (Express)",
    "category": "Pace",
    "primaryLabel": "Pressure Economy Rate",
    "primaryValue": "7.00 \u2605",
    "primarySub": "7.19 Death Econ (Lowest in IPL)",
    "stat1": {
      "label": "Pressure Balls",
      "val": "957"
    },
    "stat2": {
      "label": "Pressure Econ",
      "val": "7.00 \u2605"
    },
    "stat3": {
      "label": "Death Econ (16-20)",
      "val": "7.19 \u2605"
    },
    "stat4": {
      "label": "Dot % (Execution)",
      "val": "42.5%"
    },
    "stat5": {
      "label": "Total Pressure Wkts",
      "val": "52"
    },
    "stat6": {
      "label": "Death Wkts",
      "val": "35"
    },
    "hauls": "12 Match-Winning Hauls",
    "scoutObservation": "The crown jewel of India and Mumbai Indians' bowling artillery. Bumrah commands an unparalleled 7.00 pressure economy and 7.19 death-overs metric through laser-guided missile yorkers, deceptive dipping slower deliveries, and lethal bounce. He dictates terms to batters on every single delivery, turning death overs into defensive strangleholds.",
    "justification": "The undisputed gold standard of defensive and attacking cricket. Across 957 pressure deliveries, Bumrah concedes an unbelievable 7.00 runs per over, dropping to an IPL-record 7.19 in overs 16\u201320 where league average exceeds 11.20."
  },
  {
    "rank": 3,
    "name": "Arshdeep Singh",
    "image": "assets/players/arshdeep_singh.jpg",
    "style": "Left-Arm Medium-Fast",
    "category": "Pace",
    "primaryLabel": "Total Pressure Wickets",
    "primaryValue": "109 \u2605",
    "primarySub": "75 Death Wickets (Most in IPL)",
    "stat1": {
      "label": "Pressure Balls",
      "val": "1,585"
    },
    "stat2": {
      "label": "Pressure Econ",
      "val": "8.81"
    },
    "stat3": {
      "label": "Death Econ (16-20)",
      "val": "9.46"
    },
    "stat4": {
      "label": "Total Pressure Wkts",
      "val": "109 \u2605"
    },
    "stat5": {
      "label": "Death Wkts",
      "val": "75 \u2605"
    },
    "stat6": {
      "label": "Partnership Breakers",
      "val": "33 \u2605"
    },
    "hauls": "18 Match-Winning Hauls",
    "scoutObservation": "A left-arm bowling titan who ascended to become India's all-time leading T20I wicket-taker (surpassing Chahal). A decorated 2-time T20 World Champion, Arshdeep's venomous late swing breaches defenses with the new ball, while his ice-cold execution at the death delivered an IPL-record 109 pressure wickets and 33 critical partnership breakthroughs.",
    "justification": "The absolute wicket kingpin of high-leverage situations. Arshdeep leads the entire IPL dataset with 109 pressure wickets, 75 death wickets, and 33 crucial partnership-breaking strikes against rampaging set batters."
  },
  {
    "rank": 4,
    "name": "Rashid Khan",
    "image": "assets/players/rashid_khan.jpg",
    "style": "Right-Arm Leg-Break (Fast Spin)",
    "category": "Spin",
    "primaryLabel": "Match-Winning Hauls",
    "primaryValue": "19 \u2605",
    "primarySub": "7.46 Econ & 86 Pressure Wickets",
    "stat1": {
      "label": "Pressure Balls",
      "val": "1,386"
    },
    "stat2": {
      "label": "Pressure Econ",
      "val": "7.46"
    },
    "stat3": {
      "label": "Death Econ (16-20)",
      "val": "8.63"
    },
    "stat4": {
      "label": "Dot % (Execution)",
      "val": "36.0%"
    },
    "stat5": {
      "label": "Total Pressure Wkts",
      "val": "86"
    },
    "stat6": {
      "label": "Death Wkts",
      "val": "51"
    },
    "hauls": "19 Match-Winning Hauls \u2605",
    "scoutObservation": "Afghanistan's spin sorcerer whose rapid arm speed, sharp drift, and unpickable variations continue to baffle the world's finest batters. Beyond his remarkable 7.46 pressure economy and 19 match-winning hauls, Rashid's explosive lower-order batting depth and fearless mentality make him an invaluable multi-dimensional asset when games hang in the balance.",
    "justification": "Match-winning anchor. Rashid has produced 19 match-winning 2+ wicket hauls under crisis (the highest in the league), while maintaining a stingy 7.46 economy across 1,386 pressure balls."
  },
  {
    "rank": 5,
    "name": "Bhuvneshwar Kumar",
    "image": "assets/players/bhuvneshwar_kumar.jpg",
    "style": "Right-Arm Medium (Swing Specialist)",
    "category": "Pace",
    "primaryLabel": "Death Wickets (16-20)",
    "primaryValue": "42",
    "primarySub": "8.56 Econ & Knuckleball Execution",
    "stat1": {
      "label": "Pressure Balls",
      "val": "1,144"
    },
    "stat2": {
      "label": "Pressure Econ",
      "val": "8.56"
    },
    "stat3": {
      "label": "Death Econ (16-20)",
      "val": "9.63"
    },
    "stat4": {
      "label": "Dot % (Execution)",
      "val": "36.0%"
    },
    "stat5": {
      "label": "Total Pressure Wkts",
      "val": "61"
    },
    "stat6": {
      "label": "Death Wkts",
      "val": "42"
    },
    "hauls": "9 Match-Winning Hauls",
    "scoutObservation": "The undisputed Swing King of India. Bhuvi pairs pristine new-ball hoop with masterclass death execution\u2014deploying pinpoint yorkers, knuckleballs, and wide-line deliveries with surgical discipline. Narrowly missing the Purple Cap this season, his 42 death wickets while defending razor-thin margins reflect a timeless master of seam craft.",
    "justification": "Unrivaled seam discipline and tactical mastery. Bhuvneshwar hits defensive boundary-rider fields with surgical consistency, bagging 42 death wickets and maintaining an 8.56 overall pressure economy."
  },
  {
    "rank": 6,
    "name": "Yuzvendra Chahal",
    "image": "assets/players/yuzvendra_chahal.jpg",
    "style": "Right-Arm Leg-Break (Attacking)",
    "category": "Spin",
    "primaryLabel": "Partnership Breakers",
    "primaryValue": "23",
    "primarySub": "76 Wickets & Fearless Flight",
    "stat1": {
      "label": "Pressure Balls",
      "val": "1,230"
    },
    "stat2": {
      "label": "Pressure Econ",
      "val": "8.77"
    },
    "stat3": {
      "label": "Death Econ (16-20)",
      "val": "9.91"
    },
    "stat4": {
      "label": "Dot % (Execution)",
      "val": "29.9%"
    },
    "stat5": {
      "label": "Total Pressure Wkts",
      "val": "76"
    },
    "stat6": {
      "label": "Death Wkts",
      "val": "34"
    },
    "hauls": "14 Match-Winning Hauls",
    "scoutObservation": "A fearless spin maestro endowed with otherworldly cricketing intelligence. Chahal intentionally loops deliveries outside off-stump, inviting batters into aggressive traps before deceiving them with drift and dip. With 76 pressure wickets and 23 crucial partnership-breaking strikes, his tactical daring thrives precisely where other spinners retreat.",
    "justification": "Fearless tactical baiting. Unlike defensive spinners who bowl flat darts to restrict boundaries, Chahal flights the ball outside off-stump in crisis overs, inducing 23 partnership breaks and 76 total pressure wickets."
  },
  {
    "rank": 7,
    "name": "Matheesha Pathirana",
    "image": "assets/players/matheesha_pathirana.png",
    "style": "Right-Arm Fast (Sling)",
    "category": "Pace",
    "primaryLabel": "Death Strike Rate",
    "primaryValue": "12.1 Balls",
    "primarySub": "44 Death Wickets in 693 Balls",
    "stat1": {
      "label": "Pressure Balls",
      "val": "693"
    },
    "stat2": {
      "label": "Pressure Econ",
      "val": "7.70"
    },
    "stat3": {
      "label": "Death Econ (16-20)",
      "val": "8.18 \u2605"
    },
    "stat4": {
      "label": "Dot % (Execution)",
      "val": "37.4%"
    },
    "stat5": {
      "label": "Total Pressure Wkts",
      "val": "57"
    },
    "stat6": {
      "label": "Death Wkts",
      "val": "44 \u2605"
    },
    "hauls": "8 Match-Winning Hauls",
    "scoutObservation": "Sri Lanka's sling-arm phenomenon whose extreme round-arm trajectory poses a nightmare for batters to pick up. Pathirana leverages this unconventional release to unleash toe-crushing 145+ km/h yorkers and fiendish dipping slower deliveries, striking every 12.1 deliveries at the death to claim 44 death wickets in just 693 pressure balls.",
    "justification": "Lethal sling-arm yorker execution. In only 693 pressure deliveries, Pathirana has captured 44 death wickets with an 8.18 economy, striking every 12.1 deliveries\u2014the fastest strike rate at the death in modern T20 cricket."
  },
  {
    "rank": 8,
    "name": "Wanindu Hasaranga",
    "image": "assets/players/wanindu_hasaranga.jpg",
    "style": "Right-Arm Leg-Break (Googly Specialist)",
    "category": "Spin",
    "primaryLabel": "Partnership Breakers",
    "primaryValue": "23",
    "primarySub": "73 Wickets & 8.27 Pressure Econ",
    "stat1": {
      "label": "Pressure Balls",
      "val": "895"
    },
    "stat2": {
      "label": "Pressure Econ",
      "val": "8.27"
    },
    "stat3": {
      "label": "Death Econ (16-20)",
      "val": "8.38"
    },
    "stat4": {
      "label": "Dot % (Execution)",
      "val": "36.1%"
    },
    "stat5": {
      "label": "Total Pressure Wkts",
      "val": "73"
    },
    "stat6": {
      "label": "Death Wkts",
      "val": "27"
    },
    "hauls": "14 Match-Winning Hauls",
    "scoutObservation": "A high-octane Sri Lankan leg-spinner whose fast-turning googlies and deceptive flippers consistently break games open in the high-leverage middle overs. Responsible for 73 wickets and 23 partnership breakthroughs, his dynamic lower-order hitting power adds valuable balance and depth to any high-stakes lineup.",
    "justification": "Aggressive middle-overs and death enforcer. Hasaranga boasts an 8.27 pressure economy and 23 partnership-breaking wickets, preventing teams from setting up death-overs assaults."
  },
  {
    "rank": 9,
    "name": "Jason Holder",
    "image": "assets/players/jason_holder.jpg",
    "style": "Right-Arm Medium-Fast (Heavy Ball)",
    "category": "Pace",
    "primaryLabel": "Death Wickets (16-20)",
    "primaryValue": "43",
    "primarySub": "70 Wickets & 19 Partnership Breaks",
    "stat1": {
      "label": "Pressure Balls",
      "val": "1,077"
    },
    "stat2": {
      "label": "Pressure Econ",
      "val": "8.59"
    },
    "stat3": {
      "label": "Death Econ (16-20)",
      "val": "9.82"
    },
    "stat4": {
      "label": "Dot % (Execution)",
      "val": "33.8%"
    },
    "stat5": {
      "label": "Total Pressure Wkts",
      "val": "70"
    },
    "stat6": {
      "label": "Death Wkts",
      "val": "43"
    },
    "hauls": "11 Match-Winning Hauls",
    "scoutObservation": "A towering 6'7\" Caribbean fast-bowling all-rounder who generates awkward, steep bounce that dismantles top orders. Holder utilizes his height and release angle to hit hard lengths and execute defensive death lines (43 death wickets), while providing vital lower-order boundary clearing that steadies the lower half of the team.",
    "justification": "Heavy-bounce enforcer. Holder utilizes his towering release to extract steep bounce from good lengths under pressure, bagging 43 death wickets and 19 partnership breaks in tight contests."
  },
  {
    "rank": 10,
    "name": "Krunal Pandya",
    "image": "assets/players/krunal_pandya.png",
    "style": "Slow Left-Arm Orthodox (Defensive Dart)",
    "category": "Spin",
    "primaryLabel": "Pressure Economy Rate",
    "primaryValue": "7.39 \u2605",
    "primarySub": "Stranglehold Run Prevention",
    "stat1": {
      "label": "Pressure Balls",
      "val": "581"
    },
    "stat2": {
      "label": "Pressure Econ",
      "val": "7.39 \u2605"
    },
    "stat3": {
      "label": "Death Econ (16-20)",
      "val": "10.09"
    },
    "stat4": {
      "label": "Dot % (Execution)",
      "val": "32.7%"
    },
    "stat5": {
      "label": "Total Pressure Wkts",
      "val": "28"
    },
    "stat6": {
      "label": "Death Wkts",
      "val": "5"
    },
    "hauls": "7 Match-Winning Hauls",
    "scoutObservation": "A high-IQ tactical spinner whose resurgence over the last two seasons commanded his place in our rankings. Krunal crafts an extraordinary hybrid style\u2014approaching from a spinner's run-up but firing darts at medium-pace speeds, before astonishingly unleashing a steep, throat-high bouncer out of thin air with zero detectable change in his bowling arm action.",
    "justification": "Defensive run stranglehold. Across 581 pressure balls, Krunal concedes only 7.39 runs per over, shutting down scoring corridors when opposition batters attempt to mount middle-overs comebacks."
  }
];

// Application State
let currentRosterMode = 'batters'; // Defaults to Batters list

// DOM Elements
const switchBattersBtn = document.getElementById('switchBatters');
const switchBowlersBtn = document.getElementById('switchBowlers');
const dossierListEl = document.getElementById('dossierList');
const sectionHeadlineEl = document.getElementById('sectionHeadline');
const sectionSubEl = document.getElementById('sectionSub');

// Render Function
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

          <!-- Scout's Eye / Analyst Field Observation -->
          <div class="dossier-scout-notes">
            <div class="scout-tag">
              <span class="scout-icon">👁️</span>
              <span>Scout & Analyst Field Observation</span>
            </div>
            <p class="scout-text">${player.scoutObservation}</p>
          </div>

          <!-- Think-Tank Tactical Justification Briefing -->
          <div class="dossier-briefing">
            <div class="briefing-tag">
              <span class="briefing-icon">📐</span>
              <span>Quantitative Think-Tank Justification</span>
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
    rootMargin: '0px 0px -40px 0px'
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

// Smooth Anchor Scrolling
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

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  setupSwitcher();
  setupNavLinks();
  renderRoster();
  observeScrollReveals();
});
