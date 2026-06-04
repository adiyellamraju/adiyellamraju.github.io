# Deploying aditya.design

This folder is the live site. Static HTML/CSS/JS — no build step.

## Phase 1 — Get it live (static, ~20 min)

### 1. Push to GitHub
Your repo: https://github.com/adiyellamraju/adiyellamraju.github.io

Easiest (web UI):
1. Open the repo → if it has old files, delete them (or just drag-drop over).
2. Click **Add file → Upload files**.
3. Drag in **everything inside this `site/` folder** (not the folder itself — the contents: `index.html`, `portfolio/`, `assets/`, etc.).
4. Commit to `main`.

Or terminal:
```bash
cd site
git init
git add .
git commit -m "Live portfolio"
git branch -M main
git remote add origin https://github.com/adiyellamraju/adiyellamraju.github.io.git
git push -f origin main
```

### 2. Connect Vercel
1. vercel.com → **Add New → Project**.
2. **Import** the `adiyellamraju.github.io` repo.
3. Framework preset: **Other**. Root directory: `/` (leave default). Build command: none. Output dir: leave blank.
4. **Deploy.** Live in ~1 min at `adiyellamraju.vercel.app`.

### 3. Point aditya.design at Vercel (Namecheap)
1. In Vercel: Project → **Settings → Domains → Add** `aditya.design`.
2. Vercel shows you DNS records. For the apex domain it'll ask for an **A record** (e.g. `76.76.21.21`) and a **CNAME** for `www`.
3. In Namecheap: **Domain List → Manage → Advanced DNS**.
   - Add **A Record**: Host `@`, Value = the IP Vercel gave you.
   - Add **CNAME Record**: Host `www`, Value = `cname.vercel-dns.com`.
   - Delete any conflicting parking/redirect records Namecheap added by default.
4. Back in Vercel, it auto-verifies (can take 5–60 min). Done.

## Updates
Every change → push to GitHub → Vercel auto-deploys in ~30 sec.

## Phase 2 — The live agent (next)
Currently the agent answers the canned prompts and falls back gracefully for free text. To make it answer ANYTHING and navigate the site, we'll add:
- `/api/agent.js` — a Vercel serverless function
- A knowledge base file about you
- Your Anthropic API key in Vercel **Settings → Environment Variables** (never in the code)

Ask Claude to "set up the live agent backend" when you're ready.
