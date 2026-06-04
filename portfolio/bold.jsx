// Reference MiniMock via window so bold.jsx can find it — exported from safe.jsx
const BoldMiniMock = ({ slug }) => (window.MiniMock ? <window.MiniMock slug={slug}/> : null);

const BoldPortfolio = () => (
  <div style={{ width: "100%", minHeight: "100%", background: "#1a1a24", color: "#f0f0f5", fontFamily: "'Source Sans 3',sans-serif", position: "relative", overflowX: "clip" }}>
    <BoldGrid />
    <BoldNav />
    <BoldHero />
    <BoldAgentDock />
    <BoldAbout />
    <BoldNow />
    <BoldToolkit />
    <BoldWork />
    <BoldTestimonials />
    <BoldFooter />
  </div>
);

const BoldGrid = () => (
  <div aria-hidden style={{
    position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
    backgroundImage: `
      radial-gradient(ellipse at 20% 0%, rgba(73,28,255,0.35), transparent 55%),
      radial-gradient(ellipse at 80% 100%, rgba(255,153,212,0.28), transparent 55%),
      radial-gradient(ellipse at 50% 50%, rgba(167,143,255,0.08), transparent 70%),
      linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
    `,
    backgroundSize: "100% 100%, 100% 100%, 100% 100%, 56px 56px, 56px 56px",
  }}/>
);

const BoldNav = () => (
  <nav className="bp-nav" style={{
    position: "sticky", top: 0, zIndex: 100, padding: "20px 32px",
    display: "flex", justifyContent: "space-between", alignItems: "center",
    background: "rgba(26,26,36,0.7)", backdropFilter: "blur(20px)",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  }}>
    <div className="bp-nav-brand" style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "ui-monospace,Menlo,monospace", fontSize: 13, fontWeight: 700, color: "#fff" }}>
      <span style={{ width: 28, height: 28, borderRadius: 8, background: "linear-gradient(135deg,#491cff,#ff99d4)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 900, letterSpacing: -1 }}>AY</span>
      <span>aditya.design</span>
      <span style={{ color: "rgba(255,255,255,0.3)" }}>/agent</span>
      <span className="bp-nav-status" style={{ display: "inline-flex", alignItems: "center", gap: 6, marginLeft: 10, fontSize: 11, color: "rgba(255,255,255,0.6)", background: "rgba(34,197,94,0.12)", padding: "3px 10px", borderRadius: 100, border: "1px solid rgba(34,197,94,0.3)", fontFamily: "'Source Sans 3',sans-serif", fontWeight: 700 }}>
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80" }}/> ready
      </span>
    </div>
    <div className="bp-nav-links" style={{ display: "flex", gap: 20, fontSize: 13, fontFamily: "ui-monospace,Menlo,monospace" }}>
      {[["home","/"],["about","/about"],["work","/work"],["now","/now"],["contact","/hello"]].map(([label, path]) => (
        <a key={label} href={`#${label}`} style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>
          {path}
        </a>
      ))}
    </div>
  </nav>
);

// ─── BOLD HERO: agent as the hero ────────────────────────────────────────
const BoldHero = () => (
  <section id="home" className="bp-hero" style={{ position: "relative", zIndex: 1, padding: "56px 32px 64px", maxWidth: 1280, margin: "0 auto" }}>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24, marginBottom: 40 }}>
      <h1 style={{ fontSize: 64, fontWeight: 900, lineHeight: 1.08, letterSpacing: -2, textAlign: "center", maxWidth: 1100, margin: 0, color: "#ffffff" }}>
        <span style={{ color: "rgba(255,255,255,0.98)" }}>9 years of UX, from startups to </span>
        <span style={{ background: "linear-gradient(90deg,#a78fff,#ff99d4)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>enterprise AI</span>
        <span style={{ color: "rgba(255,255,255,0.98)" }}> at Salesforce.</span>
        <br/>
        <span style={{ background: "linear-gradient(90deg,#491cff,#ff99d4)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>Now vibe-prototyping at the speed of thought.</span>
      </h1>
      <p className="bp-hero-sub" style={{ fontSize: 20, color: "rgba(255,255,255,0.7)", textAlign: "center", maxWidth: 720, lineHeight: 1.6, margin: 0 }}>
        I'm <strong style={{ color: "#fff", fontWeight: 700 }}>Aditya</strong> — I design core platform and AI experiences for complex systems. These days I vibe-code them too, so design meets engineering the moment an idea lands.
      </p>
      <span className="bp-hero-kicker" style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 12, color: "rgba(255,255,255,0.5)", letterSpacing: 1.5, textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: 8, marginTop: 8 }}>
        <span style={{ display: "inline-flex", animation: "sparklePulse 1.6s ease-in-out infinite", color: "#ff99d4", filter: "drop-shadow(0 0 8px rgba(255,153,212,0.7))" }}><SparkleIcon size={14}/></span> To learn more, talk to an agent that knows Aditya — ask it anything
      </span>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", marginTop: 4 }}>
        <button onClick={() => window.dispatchEvent(new Event("open-agent"))} style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          background: "linear-gradient(135deg,#491cff,#ff99d4)", color: "#fff",
          border: "none", borderRadius: 100, padding: "15px 28px", cursor: "pointer",
          fontSize: 16, fontWeight: 700, fontFamily: "inherit",
          boxShadow: "0 14px 40px rgba(73,28,255,0.5)",
        }}>
          <span style={{ display: "inline-flex", animation: "sparklePulse 1.6s ease-in-out infinite" }}><SparkleIcon size={16}/></span>
          Ask the agent
        </button>
        <a href="#work" style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "transparent", color: "rgba(255,255,255,0.85)",
          border: "1.5px solid rgba(255,255,255,0.25)", borderRadius: 100,
          padding: "15px 26px", cursor: "pointer", fontSize: 16, fontWeight: 600,
          fontFamily: "inherit", textDecoration: "none",
        }}>
          Just show me the work →
        </a>
      </div>
    </div>
    <BoldHeroStats />
  </section>
);

// A bigger version of the agent chat — full-width, the page itself
const SUGGESTIONS_BOLD = [
  "What's Aditya's best AI shipping story?",
  "How does vibe-coding change design reviews?",
  "Walk me through Tableau Pulse",
  "Pitch me a reason to hire for Staff",
];
const CANNED_BOLD = {
  "What's Aditya's best AI shipping story?": "Salesforce Personalization Core Platform — 0→1 over four years, shipped to every Marketing Cloud enterprise customer. He owned the interaction model for how marketers configure ML-driven recommendations without reading an ML paper. The workflow he designed is the one still in production.",
  "How does vibe-coding change design reviews?": "Instead of reviewing 40 static frames, the team reviews a working prototype. Edge cases, empty states, loading, and error paths all exist. PM asks 'what happens when X' and we click it instead of promising to mock it. Decisions happen in hours, not sprints.",
  "Walk me through Tableau Pulse": "Pulse is Salesforce's AI-powered business monitoring platform. Aditya led design strategy and 0→1 design for Project Nexio, the generative-AI insight discovery layer. The hard problem: making AI outputs feel trustworthy and actionable for analysts. The shipped flows — Metrics Digest, Pulse Homepage, AI insight flows — are what he validated.",
  "Pitch me a reason to hire for Staff": "He bridges three rare axes: ML research fluency, enterprise-systems thinking, and vibe-coded prototyping. Most designers have one of those. Staff-level impact comes from multiplying across a team — and Aditya's prototypes become the brief other designers design against.",
};

const BigAgentChat = ({ compact }) => {
  const [messages, setMessages] = React.useState([
    { role: "system", text: "agent initialized · reading aditya_yellamraju.résumé ·  indexing 9 years of work…" },
    { role: "agent", text: "Heads up — I'm still in training. Aditya's teaching me everything he knows (9 years of it, so… give him a minute). Soon I'll answer anything about his work, his process, and why he vibe-codes. For now, find him on LinkedIn — he replies faster than I load. 🤖✨" },
  ]);
  const [input, setInput] = React.useState("");
  const [typing, setTyping] = React.useState(false);
  const [sugg, setSugg] = React.useState([]);
  const scrollRef = React.useRef(null);
  React.useEffect(() => { if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight; }, [messages, typing]);

  const ask = async (q) => {
    if (!q.trim()) return;
    setMessages(m => [...m, { role: "user", text: q }]);
    setInput("");
    setSugg(s => s.filter(x => x !== q));
    setTyping(true);
    let reply = "Still in training, still can't help you properly — the irony of an AI portfolio with a not-yet-AI agent isn't lost on me. 😅 Aditya's on it. Catch him on LinkedIn meanwhile.";
    await new Promise(r => setTimeout(r, 700));
    setTyping(false);
    setMessages(m => [...m, { role: "agent", text: reply }]);
  };

  return (
    <div className="bp-chat" style={{
      maxWidth: compact ? "100%" : 900, margin: "0 auto", borderRadius: 20,
      background: "rgba(36,36,48,0.95)", border: "1px solid rgba(167,143,255,0.3)",
      backdropFilter: "blur(20px)", overflow: "hidden",
      boxShadow: "0 60px 120px rgba(73,28,255,0.45), 0 0 0 1px rgba(167,143,255,0.12)",
    }}>
      <div className="bp-chat-header" style={{ padding: "12px 18px", borderBottom: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", gap: 12, background: "rgba(26,26,36,0.5)", fontFamily: "ui-monospace,Menlo,monospace", fontSize: 11, color: "rgba(255,255,255,0.6)" }}>
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ade80" }}/>
        agent.adityay.com — session #7f3a · claude-haiku-4-5
        <span className="bp-chat-header-end" style={{ marginLeft: "auto", color: "rgba(255,255,255,0.3)" }}>vibe-coded</span>
      </div>
      <div ref={scrollRef} className="bp-chat-body" style={{ padding: 24, display: "flex", flexDirection: "column", gap: 14, maxHeight: compact ? 360 : 420, minHeight: compact ? 300 : 380, overflowY: "auto" }}>
        {messages.map((m, i) => m.role === "system"
          ? <div key={i} style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 12, color: "rgba(167,143,255,0.7)" }}>$ {m.text}</div>
          : <BoldBubble key={i} role={m.role} text={m.text} />)}
        {typing && <BoldBubble role="agent" text={<TypingDots />} />}
      </div>
      {sugg.length > 0 && (
        <div className="bp-chat-suggestions" style={{ padding: "0 24px 16px", display: "flex", gap: 8, flexWrap: "wrap" }}>
          {sugg.map(s => (
            <button key={s} onClick={() => ask(s)} style={{
              fontFamily: "ui-monospace,Menlo,monospace", fontSize: 12, color: "rgba(255,255,255,0.75)",
              background: "rgba(73,28,255,0.1)", border: "1px solid rgba(73,28,255,0.3)",
              borderRadius: 8, padding: "7px 12px", cursor: "pointer",
            }}>› {s}</button>
          ))}
        </div>
      )}
      <form onSubmit={e => { e.preventDefault(); ask(input); }} className="bp-chat-form" style={{ display: "flex", gap: 10, padding: "16px 20px", borderTop: "1px solid rgba(255,255,255,0.08)", background: "rgba(26,26,36,0.5)", alignItems: "center" }}>
        <span style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 14, color: "#a78fff" }}>›</span>
        <input value={input} onChange={e => setInput(e.target.value)}
          placeholder="ask anything…"
          style={{ flex: 1, background: "transparent", border: "none", color: "#fff", fontSize: 15, fontFamily: "'Source Sans 3',sans-serif", outline: "none" }}/>
        <span className="bp-cmd-hint" style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 11, color: "rgba(255,255,255,0.35)", display: "flex", alignItems: "center", gap: 4 }}>
          <CommandIcon size={12}/> ↵
        </span>
        <button type="submit" style={{ background: "linear-gradient(135deg,#491cff,#ff99d4)", color: "#fff", border: "none", borderRadius: 10, padding: "8px 16px", cursor: "pointer", fontSize: 13, fontWeight: 700, fontFamily: "inherit", display: "inline-flex", alignItems: "center", gap: 6 }}>
          Send <ArrowIcon size={13}/>
        </button>
      </form>
    </div>
  );
};
const BoldBubble = ({ role, text }) => (
  <div style={{ display: "flex", gap: 12, alignItems: "flex-start", flexDirection: role === "user" ? "row-reverse" : "row" }}>
    {role === "agent" && (
      <div style={{ width: 30, height: 30, borderRadius: 10, background: "linear-gradient(135deg,#491cff,#ff99d4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 12, fontWeight: 900, letterSpacing: -0.5 }}>AY</div>
    )}
    <div className="bp-bubble" style={{
      background: role === "user" ? "rgba(73,28,255,0.25)" : "rgba(255,255,255,0.08)",
      border: `1px solid ${role === "user" ? "rgba(73,28,255,0.45)" : "rgba(255,255,255,0.12)"}`,
      color: "rgba(255,255,255,0.95)",
      padding: "12px 16px", borderRadius: 12, fontSize: 15, lineHeight: 1.6, maxWidth: "80%",
    }}>{text}</div>
  </div>
);

// ─── VIBE-CODING PROTOTYPES ───────────────────────────────────────────
const VIBE_PROTOS = [
  { src: "assets/vibe/proto-1.gif", title: "Salesforce Personalization Campaign", tool: "Claude + Cursor", desc: "The core configuration platform, reimagined marketer-friendly — prototyped and clickable, not static frames." },  { src: "assets/vibe/proto-2.gif", title: "Agentic Web Content Personalization", tool: "Cursor", desc: "The platform applied to a conversational, agentic marketing use case — live and navigable." },
  { src: "assets/vibe/proto-3.gif", title: "Agentic Recommendation Filters Creation", tool: "Claude Code", desc: "Part of the recommendations engine — building catalog filters through a natural-language agent." },
];
const BoldVibeProtos = () => (
  <div style={{ marginTop: 40 }}>
    <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 20, flexWrap: "wrap" }}>
      <SectionKicker>Prototypes</SectionKicker>
      <span style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 12, color: "rgba(255,255,255,0.4)" }}>design meets engineering the moment an idea lands</span>
    </div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }} className="bp-vibe-grid">
      {VIBE_PROTOS.map((p, i) => (
        <div key={i} style={{ borderRadius: 16, overflow: "hidden", border: "1px solid rgba(167,143,255,0.22)", background: "rgba(36,36,48,0.7)", display: "flex", flexDirection: "column" }}>
          <div style={{ aspectRatio: "16 / 10", background: "rgba(20,20,28,0.6)", position: "relative", overflow: "hidden" }}>
            <img src={p.src} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              onError={e => { e.currentTarget.style.display = "none"; e.currentTarget.nextSibling.style.display = "flex"; }} />
            <div style={{ display: "none", position: "absolute", inset: 0, alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 8, color: "rgba(167,143,255,0.8)", textAlign: "center", padding: 16 }}>
              <span style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 10, letterSpacing: 1.4, textTransform: "uppercase", fontWeight: 800 }}>GIF coming</span>
            </div>
          </div>
          <div style={{ padding: "16px 18px", display: "flex", flexDirection: "column", gap: 6 }}>
            <span style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 10, color: "#a78fff", background: "rgba(73,28,255,0.15)", border: "1px solid rgba(167,143,255,0.3)", borderRadius: 6, padding: "2px 8px", alignSelf: "flex-start", textTransform: "uppercase", letterSpacing: 0.8 }}>{p.tool}</span>
            <span style={{ fontSize: 16, fontWeight: 800, color: "#fff", lineHeight: 1.25 }}>{p.title}</span>
            <span style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>{p.desc}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const BoldAgentDock = () => {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-agent", handler);
    const key = (e) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", key);
    return () => { window.removeEventListener("open-agent", handler); window.removeEventListener("keydown", key); };
  }, []);

  return (
    <>
      {/* Floating launch button */}
      {!open && (
        <button onClick={() => setOpen(true)} aria-label="Open the agent" style={{
          position: "fixed", bottom: 28, right: 28, zIndex: 300,
          display: "inline-flex", alignItems: "center", gap: 10,
          background: "linear-gradient(135deg,#491cff,#ff99d4)", color: "#fff",
          border: "none", borderRadius: 100, padding: "14px 22px", cursor: "pointer",
          fontSize: 15, fontWeight: 700, fontFamily: "'Source Sans 3',sans-serif",
          boxShadow: "0 14px 40px rgba(73,28,255,0.5)",
        }}>
          <span style={{ display: "inline-flex", animation: "sparklePulse 1.6s ease-in-out infinite" }}><SparkleIcon size={16}/></span>
          Ask the agent
        </button>
      )}

      {/* Panel + backdrop */}
      {open && (
        <div onClick={() => setOpen(false)} style={{
          position: "fixed", inset: 0, zIndex: 400,
          background: "rgba(10,10,16,0.6)", backdropFilter: "blur(6px)",
          display: "flex", alignItems: "flex-end", justifyContent: "flex-end",
          padding: 28,
        }}>
          <div onClick={e => e.stopPropagation()} style={{
            width: "100%", maxWidth: 460, position: "relative",
            animation: "agentDockIn 0.28s cubic-bezier(0.22,1,0.36,1) both",
          }}>
            <button onClick={() => setOpen(false)} aria-label="Close" style={{
              position: "absolute", top: -14, right: -6, zIndex: 2,
              width: 32, height: 32, borderRadius: "50%", cursor: "pointer",
              background: "rgba(36,36,48,0.95)", border: "1px solid rgba(255,255,255,0.15)",
              color: "#fff", fontSize: 16, lineHeight: 1, display: "flex", alignItems: "center", justifyContent: "center",
            }}>×</button>
            <BigAgentChat compact />
          </div>
        </div>
      )}
    </>
  );
};

const BoldHeroStats = () => (
  <div className="bp-stats" style={{ maxWidth: 1100, margin: "48px auto 0", display: "flex", flexDirection: "column", gap: 16 }}>
    {/* Top row — 3 hero numbers */}
    <div className="bp-stats-row1" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
      {[
        ["9", "years of UX"],
        ["2", "0→1 launches"],
        ["10+", "vibe-coded prototypes"],
      ].map(([n, l], i) => (
        <div key={i} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 14, padding: "22px 20px", textAlign: "center" }}>
          <div className="bp-stat-num" style={{ fontSize: 52, fontWeight: 900, letterSpacing: -2.5, lineHeight: 1, background: "linear-gradient(90deg,#491cff,#ff99d4)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: 6 }}>{n}</div>
          <div style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 11, color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: 1.2, fontWeight: 600 }}>{l}</div>
        </div>
      ))}
    </div>

    {/* Design Expertise row */}
    <div className="bp-stats-card" style={{ background: "rgba(36,36,48,0.6)", border: "1px solid rgba(167,143,255,0.22)", borderRadius: 16, padding: "20px 24px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
        <span style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 11, letterSpacing: 1.4, textTransform: "uppercase", color: "rgba(255,153,212,0.9)", fontWeight: 700 }}>Design Expertise</span>
        <span style={{ flex: 1, height: 1, background: "linear-gradient(90deg, rgba(255,153,212,0.3), transparent)" }}/>
      </div>
      <div className="bp-stats-row2" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10 }}>
        {[
          { t: "Agentic UX", d: "chat, canvases, tool-use" },
          { t: "AI / ML UX", d: "models meet workflows" },
          { t: "Enterprise SaaS UX", d: "platforms that scale" },
          { t: "Data Storytelling UX", d: "insights to action" },
        ].map((x, i) => (
          <div key={i} style={{
            background: "rgba(73,28,255,0.1)",
            border: "1px solid rgba(167,143,255,0.25)",
            borderRadius: 12,
            padding: "14px 16px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}>
            <span style={{ fontSize: 11, fontFamily: "ui-monospace,Menlo,monospace", color: "#a78fff", fontWeight: 700 }}>0{i+1}</span>
            <span style={{ fontSize: 15, fontWeight: 700, color: "#ffffff", lineHeight: 1.25 }}>{x.t}</span>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", lineHeight: 1.4 }}>{x.d}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ─── ABOUT ──────────────────────────────────────────────────────────────
const BoldAbout = () => (
  <section id="about" className="bp-section bp-about" style={{ position: "relative", zIndex: 1, padding: "96px 32px", maxWidth: 1100, margin: "0 auto" }}>
    <SectionKicker>01 · about</SectionKicker>
    <h2 style={{ fontSize: 52, fontWeight: 900, lineHeight: 1.05, letterSpacing: -1.5, marginTop: 16, marginBottom: 36, color: "#ffffff" }}>
      From <em style={{ fontStyle: "normal", color: "#ff99d4" }}>advertising</em> to{" "}
      <em style={{ fontStyle: "normal", background: "linear-gradient(90deg,#491cff,#ff99d4)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>complex systems UX</em>.
    </h2>

    <div className="bp-about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <p style={{ fontSize: 19, color: "rgba(255,255,255,0.78)", lineHeight: 1.7, margin: 0 }}>
          I started in <strong style={{ color: "#fff", fontWeight: 700 }}>advertising and digital media</strong>, where the work was fast, measurable, and stakeholder-heavy. Wearing multiple hats — strategy, research, client management, and design execution — trained me to clarify ambiguity, align teams, and ship under real constraints.
        </p>
        <p style={{ fontSize: 19, color: "rgba(255,255,255,0.78)", lineHeight: 1.7, margin: 0 }}>
          That foundation made the transition to product design natural: I brought an outcomes mindset — instrumentation, experiments, iteration — and deepened it with an <strong style={{ color: "#fff", fontWeight: 700 }}>M.S. in Human-Computer Interaction from DePaul University</strong>. Today I apply those skills to enterprise platforms, turning <strong style={{ color: "#fff", fontWeight: 700 }}>complex AI and data systems</strong> into usable workflows that scale.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 11, letterSpacing: 1.4, textTransform: "uppercase", color: "rgba(255,153,212,0.85)", marginBottom: 4 }}>
          What you'll see in the work below
        </div>
        {[
          { k: "Systems thinking", v: "workflows, state models, guardrails, and scalable patterns" },
          { k: "Measurement maturity", v: "success metrics, experimentation, and learning velocity" },
          { k: "Cross-functional leadership", v: "tight partnership with PM, Eng, Data Science, and Research" },
        ].map((item, i) => (
          <div key={i} style={{
            border: "1px solid rgba(167,143,255,0.22)",
            background: "rgba(36,36,48,0.6)",
            borderRadius: 12,
            padding: "16px 18px",
            display: "flex",
            gap: 14,
            alignItems: "flex-start",
          }}>
            <span style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 11, color: "#a78fff", marginTop: 2, fontWeight: 700, letterSpacing: 0.5 }}>
              0{i + 1}
            </span>
            <div>
              <div style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 2 }}>{item.k}</div>
              <div style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.55 }}>{item.v}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
const SectionKicker = ({ children }) => (
  <span style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 12, letterSpacing: 1.5, textTransform: "uppercase", color: "rgba(255,153,212,0.8)" }}>{children}</span>
);

// ─── NOW ────────────────────────────────────────────────────────────────
const BoldNow = () => (
  <section id="now" className="bp-section" style={{ position: "relative", zIndex: 1, padding: "64px 32px", maxWidth: 1000, margin: "0 auto" }}>
    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 24 }}>
      <SectionKicker>02 · now</SectionKicker>
      <span style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 11, color: "rgba(255,255,255,0.4)" }}>
        last synced · 2 days ago
      </span>
    </div>
    <div style={{ border: "1px solid rgba(167,143,255,0.25)", borderRadius: 18, background: "rgba(36,36,48,0.75)", overflow: "hidden" }}>
      {NOW.map((n, i) => (
        <div key={i} className="bp-now-row" style={{ padding: "24px 28px", borderBottom: i < NOW.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none", display: "flex", gap: 20, alignItems: "flex-start" }}>
          <span style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 12, color: "#a78fff", marginTop: 4, width: 28, flexShrink: 0, fontWeight: 700 }}>0{i+1}</span>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 11, letterSpacing: 1.4, textTransform: "uppercase", color: "rgba(255,153,212,0.85)", fontWeight: 700 }}>{n.label}</span>
            <span style={{ fontSize: 18, color: "rgba(255,255,255,0.88)", lineHeight: 1.55 }}>{n.text}</span>
          </div>
        </div>
      ))}
    </div>

    {/* Featured — Agentblazer Champion (recognition) */}
    <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "18px 22px", border: "1px solid rgba(255,153,212,0.4)", background: "linear-gradient(135deg, rgba(73,28,255,0.18) 0%, rgba(255,153,212,0.08) 100%)", borderRadius: 14, marginTop: 16, flexWrap: "wrap" }}>
      <span style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 11, color: "#ffd6ec", letterSpacing: 1.4, textTransform: "uppercase", fontWeight: 800 }}>★ Recognition</span>
      <span style={{ fontSize: 16, color: "#fff", fontWeight: 600, flex: 1, minWidth: 240 }}>Salesforce <strong><a href="https://trailhead.salesforce.com/agentblazer" target="_blank" rel="noopener" style={{ color: "#ffd6ec", textDecoration: "none", borderBottom: "1px solid rgba(255,214,236,0.4)" }}>Agentblazer Champion</a></strong> — top-tier status in Salesforce's Agentblazer program, recognizing advanced expertise in building with Agentforce, Data Cloud, and AI on the Salesforce platform.</span>
    </div>
  </section>
);

// ─── TOOLKIT ──────────────────────────────────────────────────────────────
const BoldToolkit = () => (
  <section id="toolkit" className="bp-section" style={{ position: "relative", zIndex: 1, padding: "64px 32px", maxWidth: 1100, margin: "0 auto" }}>
    <SectionKicker>03 · vibe coding toolkit</SectionKicker>
    <h2 style={{ fontSize: 42, fontWeight: 900, letterSpacing: -1, marginTop: 10, marginBottom: 8, color: "#ffffff" }}>AI-fluent design isn't a buzzword. It's my workbench.</h2>
    <p style={{ fontSize: 18, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, marginBottom: 28, maxWidth: "none" }}>
      Every artifact in this portfolio was built with the tools below. Each one earns its place — I pick the right tool for the moment, not the brand.
    </p>

    {/* Primary toolkit */}
    <div style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 11, color: "rgba(255,153,212,0.9)", letterSpacing: 1.4, textTransform: "uppercase", fontWeight: 800, marginBottom: 12 }}>Primary toolkit — daily drivers</div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 10, marginBottom: 24 }}>
      {[
        { name: "Claude", note: "daily driver — chat, agent, code", logo: "https://cdn.simpleicons.org/anthropic/ffffff" },
        { name: "Claude Code", note: "in-IDE pair programmer", logo: "https://cdn.simpleicons.org/anthropic/ffffff" },
        { name: "GitHub", note: "version control & deploys", logo: "https://cdn.simpleicons.org/github/ffffff" },
        { name: "Gemini", note: "multi-modal exploration", logo: "https://cdn.simpleicons.org/googlegemini/ffffff" },
        { name: "Agentforce", note: "Salesforce agentic platform", logo: "https://www.salesforce.com/news/wp-content/uploads/sites/3/2020/08/cropped-Salesforce_Logo_Web_Notext-1.png", filter: "brightness(0) invert(1)" },
      ].map((t, i) => (
        <div key={i} style={{
          background: "rgba(73,28,255,0.14)",
          border: "1px solid rgba(167,143,255,0.4)",
          borderRadius: 12, padding: "14px 16px",
          display: "flex", gap: 12, alignItems: "center",
        }}>
          <div style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            {t.svg ? t.svg : <img src={t.logo} alt="" width="20" height="20" style={{ opacity: 0.92, filter: t.filter }} onError={(e) => e.currentTarget.style.display = "none"} />}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 2, minWidth: 0 }}>
            <span style={{ fontSize: 15, fontWeight: 700, color: "#fff" }}>{t.name}</span>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.4 }}>{t.note}</span>
          </div>
        </div>
      ))}
    </div>

    {/* Also in rotation */}
    <div style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 11, color: "rgba(255,255,255,0.45)", letterSpacing: 1.4, textTransform: "uppercase", fontWeight: 800, marginBottom: 12 }}>Also in rotation</div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 10 }}>
      {[
        { name: "Cursor", note: "AI-native code editor", logo: "https://cdn.simpleicons.org/cursor/ffffff" },
        { name: "Figma Make", note: "AI-powered Figma prototyping", logo: "https://cdn.simpleicons.org/figma/ffffff" },
        { name: "ChatGPT", note: "research + copy generation", svg: <svg viewBox="0 0 24 24" width="20" height="20" fill="#ffffff" aria-hidden="true"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365 2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/></svg> },
        { name: "Google NotebookLM", note: "source-grounded synthesis", logo: "https://cdn.simpleicons.org/google/ffffff" },
      ].map((t, i) => (
        <div key={i} style={{
          background: "rgba(36,36,48,0.7)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 12, padding: "14px 16px",
          display: "flex", gap: 12, alignItems: "center",
        }}>
          {(t.logo || t.svg) && (
            <div style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              {t.svg ? t.svg : <img src={t.logo} alt="" width="20" height="20" style={{ opacity: 0.92, filter: t.filter }} onError={(e) => e.currentTarget.style.display = "none"} />}
            </div>
          )}
          <div style={{ display: "flex", flexDirection: "column", gap: 2, minWidth: 0 }}>
            <span style={{ fontSize: 15, fontWeight: 700, color: "#fff" }}>{t.name}</span>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.4 }}>{t.note}</span>
          </div>
        </div>
      ))}
    </div>

    <BoldVibeProtos />
  </section>
);

// ─── WORK — full-bleed horizontal scroller with expandable ───────────
const BoldWork = () => {
  const [expanded, setExpanded] = React.useState(null);
  return (
    <section id="work" className="bp-section" style={{ position: "relative", zIndex: 1, padding: "64px 32px 80px", maxWidth: 1280, margin: "0 auto" }}>
      <div className="bp-work-header" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 32 }}>
        <div>
          <SectionKicker>04 · work</SectionKicker>
          <h2 style={{ fontSize: 42, fontWeight: 900, letterSpacing: -1, marginTop: 10, color: "#ffffff" }}>Five case studies.</h2>
        </div>
        <span style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 12, color: "rgba(255,255,255,0.4)" }}>click any card to dive in ›</span>
      </div>
      <div className="bp-work-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16 }}>
        {CASES.map(c => (
          <BoldCase key={c.slug} c={c} expanded={expanded === c.slug} onToggle={() => setExpanded(expanded === c.slug ? null : c.slug)} />
        ))}
      </div>
    </section>
  );
};
const BoldCase = ({ c, expanded, onToggle }) => (
  <div
    className="bp-case"
    data-expanded={expanded ? "true" : "false"}
    onClick={() => {
      if (c.slug === "personalization") { window.location.href = "case-personalization-private.html"; return; }
      if (c.slug === "recommendations-engine") { window.location.href = "case-recommendations-engine.html"; return; }
      if (c.slug === "pulse-nexio") { window.location.href = "case-tableau-pulse.html"; return; }
      if (c.slug === "data-stories") { window.location.href = "case-data-stories.html"; return; }
      if (c.slug === "experimentation") { return; }
      onToggle();
    }}
    style={{
    border: "1px solid rgba(167,143,255,0.25)", borderRadius: 20, overflow: "hidden", cursor: c.slug === "experimentation" ? "default" : "pointer",
    background: "rgba(36,36,48,0.75)", transition: "border-color .2s, transform .2s",
    gridColumn: expanded ? "span 2" : "span 1",
    display: "grid", gridTemplateColumns: expanded ? "1.2fr 1fr" : "1fr",
  }}
    onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(167,143,255,0.55)"}
    onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(167,143,255,0.25)"}>
    <div className="bp-case-body" style={{ padding: 28, display: "flex", flexDirection: "column", gap: 14 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 11, color: "rgba(255,255,255,0.4)" }}>{c.year} · {c.company}</span>
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: "#ff99d4" }}>{c.slug === "experimentation" ? "Coming soon" : c.tags[0]}</span>
      </div>
      <h3 style={{ fontSize: 26, fontWeight: 900, lineHeight: 1.15, letterSpacing: -0.5, color: "#ffffff" }}>{c.title}</h3>
      <p style={{ fontSize: 15, color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}>{c.blurb}</p>
      {expanded && (
        <div style={{ paddingTop: 12, borderTop: "1px solid rgba(255,255,255,0.06)", marginTop: 8 }}>
          <div style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 11, color: "rgba(255,153,212,0.8)", textTransform: "uppercase", letterSpacing: 1.2, marginBottom: 8 }}>Outcome</div>
          <div style={{ fontSize: 16, color: "rgba(255,255,255,0.85)" }}>{c.outcome}</div>
          <div style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 11, color: "rgba(255,153,212,0.8)", textTransform: "uppercase", letterSpacing: 1.2, marginTop: 18, marginBottom: 8 }}>Scope</div>
          <div style={{ fontSize: 16, color: "rgba(255,255,255,0.85)" }}>{c.kicker}</div>
        </div>
      )}
      <div style={{ display: "flex", gap: 6, marginTop: "auto", flexWrap: "wrap" }}>
        {c.tags.map(t => <span key={t} style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 10, color: "rgba(167,143,255,0.8)", background: "rgba(73,28,255,0.12)", border: "1px solid rgba(73,28,255,0.25)", borderRadius: 6, padding: "3px 8px" }}>{t}</span>)}
      </div>
    </div>
    <div className="bp-case-mock" style={{ background: c.accent, display: "flex", alignItems: "center", justifyContent: "center", padding: c.hero ? 0 : 28, position: "relative", overflow: "hidden", minHeight: expanded ? 320 : 180 }}>
      {c.hero
        ? <img src={c.hero} alt={c.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}/>
        : <BoldMiniMock slug={c.slug}/>}
    </div>
  </div>
);

// ─── TESTIMONIALS ───────────────────────────────────────────────────────
const BoldTestimonials = () => (
  <section className="bp-section" style={{ position: "relative", zIndex: 1, padding: "64px 32px", maxWidth: 1280, margin: "0 auto" }}>
    <SectionKicker>05 · signal</SectionKicker>
    <h2 style={{ fontSize: 42, fontWeight: 900, letterSpacing: -1, marginTop: 10, marginBottom: 40, color: "#ffffff" }}>From people I've shipped with.</h2>
    <div className="bp-testimonials-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
      {TESTIMONIALS.map((t, i) => (
        <div key={i} className="bp-testimonial" style={{ border: "1px solid rgba(255,255,255,0.12)", borderRadius: 18, padding: 26, background: "rgba(36,36,48,0.6)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <div style={{ width: 32, height: 32, borderRadius: 10, background: `linear-gradient(135deg, hsl(${250+i*30} 70% 55%), hsl(${320+i*20} 70% 65%))`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, color: "#fff" }}>{t.name.split(" ").map(w => w[0]).join("").slice(0,2)}</div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#ffffff" }}>{t.name}</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", fontFamily: "ui-monospace,Menlo,monospace" }}>{t.role}</div>
            </div>
          </div>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.8)", lineHeight: 1.6 }}>{t.quote}</p>
        </div>
      ))}
    </div>
  </section>
);

// ─── FOOTER ─────────────────────────────────────────────────────────────
const BoldFooter = () => (
  <footer id="contact" className="bp-footer" style={{ position: "relative", zIndex: 1, padding: "96px 32px 48px", maxWidth: 1280, margin: "0 auto" }}>
    <div className="bp-footer-inner" style={{ border: "1px solid rgba(73,28,255,0.4)", borderRadius: 24, padding: "56px 48px", background: "linear-gradient(135deg, rgba(73,28,255,0.15), rgba(255,153,212,0.08))", textAlign: "center", overflow: "hidden", position: "relative" }}>
      <SectionKicker>06 · contact</SectionKicker>
      <h2 style={{ fontSize: 56, fontWeight: 900, letterSpacing: -2, marginTop: 16, marginBottom: 12, color: "#ffffff" }}>Let's build something.</h2>
      <p style={{ fontSize: 18, color: "rgba(255,255,255,0.7)", marginBottom: 28 }}>Staff / Lead UX · Austin, TX · remote-friendly · open to relocation to Bay Area California, NYC, or Chicago</p>
      <div className="bp-footer-cta" style={{ display: "inline-flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
        <a href="https://www.linkedin.com/in/aditya-yellamraju" target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "linear-gradient(135deg,#491cff,#ff99d4)", color: "#fff", fontSize: 15, fontWeight: 700, padding: "14px 28px", borderRadius: 100, textDecoration: "none", boxShadow: "0 14px 40px rgba(73,28,255,0.5)" }}>Message me on LinkedIn <ArrowIcon size={14}/></a>
        <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 10, border: "1.5px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.85)", fontSize: 15, fontWeight: 600, padding: "13px 24px", borderRadius: 100, textDecoration: "none" }}><DownloadIcon size={14}/> Résumé</a>
      </div>
    </div>
    <div className="bp-footer-meta" style={{ display: "flex", justifyContent: "space-between", marginTop: 32, fontFamily: "ui-monospace,Menlo,monospace", fontSize: 12, color: "rgba(255,255,255,0.35)" }}>
      <span>© 2026 · aditya yellamraju · handcrafted, then robot-polished</span>
      <span>no designers were replaced in the making of this site</span>
    </div>
  </footer>
);

window.BoldPortfolio = BoldPortfolio;
