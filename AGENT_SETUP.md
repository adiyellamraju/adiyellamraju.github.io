# Turning on the agent (3 steps)

Your portfolio agent is built and wired. It runs as a tiny serverless function (`api/chat.js`)
that holds your API key, injects everything it knows about you (`agent/knowledge.md`, baked into
the function as the system prompt), calls Claude, and streams the answer back into the chat window.

**Important:** the working agent only runs on the **Vercel** deployment (aditya.design). On the
GitHub Pages mirror there's no server, so the chat shows a friendly "I'm only awake on the live
site" message and points visitors to LinkedIn. That's expected.

---

## Step 1 — Get an Anthropic API key

1. Go to **console.anthropic.com** and sign in (or sign up).
2. Add a little credit (Billing → it's pay-as-you-go; this agent costs roughly a fraction of a
   cent per conversation on the default model).
3. Go to **API Keys → Create Key**, name it `aditya-portfolio`, and copy the key
   (it starts with `sk-ant-`). You won't see it again, so paste it somewhere safe for a minute.

## Step 2 — Add the key to Vercel (this keeps it secret)

1. In **vercel.com**, open your project (the one connected to your repo / aditya.design).
2. **Settings → Environment Variables.**
3. Add a variable:
   - **Name:** `ANTHROPIC_API_KEY`
   - **Value:** paste your `sk-ant-...` key
   - **Environments:** check all (Production, Preview, Development)
4. Click **Save**.
5. *(Optional)* The agent runs on a **Sonnet-class model by default** (`claude-sonnet-4-5`) for
   richer answers. To switch to the cheaper/faster option, add `CLAUDE_MODEL` =
   `claude-3-5-haiku-latest`. Leave it unset to keep Sonnet.

## Step 3 — Deploy

1. Push the contents of the `site/` folder to your repo (same as you've been doing). Make sure the
   **`api/` folder and `agent/` folder are included** — they're part of the build now.
2. Vercel auto-redeploys on push. (If you only just added the env var and didn't push anything,
   go to **Deployments → … → Redeploy** so the key gets picked up.)
3. Open **aditya.design**, click **Ask the agent**, and ask something like *"What does Aditya do
   at Salesforce?"* — you should get a streamed, grounded answer.

---

## Updating what the agent knows

The agent's "brain" is the system prompt inside **`api/chat.js`** (the `SYSTEM_PROMPT` constant).
The human-readable mirror is **`agent/knowledge.md`**. If you want to change what it knows or how
it talks, edit the `SYSTEM_PROMPT` in `api/chat.js` (and update `knowledge.md` to match), then push.
Just ask me and I'll keep the two in sync for you.

## Cost & safety guardrails (already built in)

- **Short answers:** capped at 600 output tokens per reply.
- **Model:** runs on `claude-sonnet-4-5` by default (smarter, ~10–13¢ per conversation). Set
  `CLAUDE_MODEL` = `claude-3-5-haiku-latest` to drop to ~2–3¢ per conversation if you want.
- **Rate limiting:** best-effort ~30 messages/hour per visitor; over that, it politely points to
  LinkedIn. For airtight limits you can later add Vercel KV / Upstash — ask me when you want it.
- **Grounded:** the system prompt tells Claude to only answer from your knowledge doc and to say
  "I don't have that" instead of inventing things.
- **Key safety:** the key lives only in Vercel's env vars — it is never in the code, the repo, or
  the page, so visitors can't see or steal it.

## Troubleshooting

- **"The agent isn't configured yet"** → the `ANTHROPIC_API_KEY` env var isn't set (or you didn't
  redeploy after setting it). Recheck Step 2, then redeploy.
- **"I'm only awake on the live site"** → you're viewing the GitHub Pages mirror (or opened the
  file locally). Use the Vercel URL / aditya.design.
- **Model error** → the default model id may have changed; set `CLAUDE_MODEL` to a current model id
  from Anthropic's docs and redeploy.
