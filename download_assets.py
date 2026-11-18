import urllib.request
import urllib.parse
import json
import re
import os

players = [
    {"name": "Tim David", "file": "tim_david.jpg"},
    {"name": "Tilak Varma", "file": "tilak_varma.jpg"},
    {"name": "Virat Kohli", "file": "virat_kohli.jpg"},
    {"name": "Rajat Patidar", "file": "rajat_patidar.jpg"},
    {"name": "Heinrich Klaasen", "file": "heinrich_klaasen.jpg"},
    {"name": "Tristan Stubbs", "file": "tristan_stubbs.jpg"},
    {"name": "Vaibhav Sooryavanshi", "file": "vaibhav_sooryavanshi.jpg"},
    {"name": "Nicholas Pooran", "file": "nicholas_pooran.jpg"},
    {"name": "David Miller", "file": "david_miller.jpg"},
    {"name": "Suryakumar Yadav", "file": "suryakumar_yadav.jpg"},
    {"name": "Josh Hazlewood", "file": "josh_hazlewood.jpg"},
    {"name": "Jasprit Bumrah", "file": "jasprit_bumrah.jpg"},
    {"name": "Arshdeep Singh", "file": "arshdeep_singh.jpg"},
    {"name": "Rashid Khan", "file": "rashid_khan.jpg"},
    {"name": "Bhuvneshwar Kumar", "file": "bhuvneshwar_kumar.jpg"},
    {"name": "Yuzvendra Chahal", "file": "yuzvendra_chahal.jpg"},
    {"name": "Matheesha Pathirana", "file": "matheesha_pathirana.jpg"},
    {"name": "Wanindu Hasaranga", "file": "wanindu_hasaranga.jpg"},
    {"name": "Jason Holder", "file": "jason_holder.jpg"},
    {"name": "Krunal Pandya", "file": "krunal_pandya.jpg"}
]

os.makedirs("public/assets/players", exist_ok=True)

# Direct verified image URLs or API retrieval
direct_urls = {
    "Tim David": "https://images.icc-cricket.com/image/upload/t_player-headshot-portrait-lg-webp/prd/assets/players/generic/colored/67402.png",
    "Heinrich Klaasen": "https://images.icc-cricket.com/image/upload/t_player-headshot-portrait-lg-webp/prd/assets/players/8322/59736.png",
}

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}

for p in players:
    name = p["name"]
    dest = os.path.join("public/assets/players", p["file"])
    if os.path.exists(dest) and os.path.getsize(dest) > 1000:
        print(f"Already have {name}")
        continue

    url = direct_urls.get(name)
    if not url:
        # Try Wikipedia
        search_url = f"https://en.wikipedia.org/w/api.php?action=opensearch&search={urllib.parse.quote(name)}&limit=3&format=json"
        try:
            req = urllib.request.Request(search_url, headers={'User-Agent': 'CricketDashboard/1.0 (admin@rrhackathon.com)'})
            with urllib.request.urlopen(req) as resp:
                data = json.loads(resp.read().decode('utf-8'))
                titles = data[1]
                title = titles[0] if titles else name
                img_url = f"https://en.wikipedia.org/w/api.php?action=query&titles={urllib.parse.quote(title)}&prop=pageimages&format=json&pithumbsize=600"
                req2 = urllib.request.Request(img_url, headers={'User-Agent': 'CricketDashboard/1.0 (admin@rrhackathon.com)'})
                with urllib.request.urlopen(req2) as resp2:
                    d2 = json.loads(resp2.read().decode('utf-8'))
                    pages = d2['query']['pages']
                    for pid in pages:
                        url = pages[pid].get('thumbnail', {}).get('source')
        except Exception as e:
            print(f"Wiki lookup failed for {name}: {e}")

    if url:
        print(f"Downloading {name} from {url[:80]}...")
        try:
            req = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(req, timeout=10) as response, open(dest, 'wb') as out_file:
                out_file.write(response.read())
            print(f"Successfully saved {name} ({os.path.getsize(dest)} bytes)")
        except Exception as e:
            print(f"Download failed for {name}: {e}")
    else:
        print(f"No direct URL found for {name}")
