// SAFE direction: refined evolution of the current portfolio.
// Keeps the dark hero + light body + pill nav + stacked cards DNA,
// but adds: hero agent chat, Now section, testimonials, real case-study
// hover expansion, tighter tag system, and "vibe-coded" identity as first-class.

const SafePortfolio = () => {
  const [active, setActive] = React.useState("hero");

  return (
    <div style={{ width: "100%", minHeight: "100%", background: "linear-gradient(to bottom,#f0f4f8,#d6dee6 75%)", color: "#0f0f0f", fontFamily: "'Source Sans 3',sans-serif" }}>
      <SafeNav active={active} setActive={setActive} />
      <SafeHero />
      <SafeAbout />
      <SafeNow />
      <SafeProjects />
      <SafeTestimonials />
      <SafeFooter />
      <SafeVibeBadge />
    </div>
  );
};

// ─── NAV ──────────────────────────────────────────────────────────────────
const SafeNav = () => (
  <nav style={{
    position: "sticky", top: 20, zIndex: 100, margin: "20px auto 0",
    width: "fit-content", border: "2.5px solid #491cff", borderRadius: 40,
    padding: "10px 12px", display: "flex", gap: 4,
    background: "rgba(28,28,28,0.7)", backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)",
  }}>
    {["Home", "About", "Now", "Work", "Testimonials", "Resume"].map((label, i) => (
      <a key={label} href={`#${label.toLowerCase()}`}
        style={{
          fontSize: 14, fontWeight: 600, color: i === 0 ? "#0f0f0f" : "rgba(255,255,255,0.82)",
          background: i === 0 ? "linear-gradient(to bottom,#f0f4f8,#d6dee6 75%)" : "transparent",
          textDecoration: "none", padding: "8px 16px", borderRadius: 40, whiteSpace: "nowrap",
        }}>{label}</a>
    ))}
  </nav>
);

// ─── HERO — with interactive agent chat ──────────────────────────────────
const SafeHero = () => (
  <section id="home" style={{
    background: "linear-gradient(135deg,#2a2a38 0%,#1c1c26 100%)",
    marginTop: -78, paddingTop: 160, paddingBottom: 100, paddingLeft: 64, paddingRight: 64,
    display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 64, position: "relative",
    borderRadius: 0, overflow: "hidden",
  }}>
    <HeroNoise />
    <div style={{ zIndex: 2 }}>
      <RolePill />
      <h1 style={{
        fontSize: 74, fontWeight: 900, color: "#fff", lineHeight: 1.02,
        letterSpacing: -2.5, margin: "28px 0 24px",
      }}>
        Hi, I'm Aditya.<br/>
        I design <em style={{ fontStyle: "normal", background: "linear-gradient(90deg,#491cff,#ff99d4)", WebkitBackgroundClip: "text", backgroundClip: "text", WebkitTextFillColor: "transparent" }}>agentic experiences<br/></em>
        with agentic tools.
      </h1>
      <p style={{ fontSize: 20, color: "rgba(255,255,255,0.8)", lineHeight: 1.65, maxWidth: 540, marginBottom: 36 }}>
        9 years designing <strong style={{ color: "rgba(255,255,255,0.92)", fontWeight: 600 }}>technically-dense enterprise UX</strong> at
        Salesforce and Tableau. Now vibe-coding AI-first prototypes as a daily design medium — because the clarity it creates is the whole point.
      </p>
      <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 40 }}>
        <a href="#work" style={ctaPri}>View my work <ArrowIcon /></a>
        <a href="#resume" style={ctaSec}><DownloadIcon /> Resume</a>
      </div>
      <ContextChips />
    </div>
    <div style={{ zIndex: 2, display: "flex", alignItems: "center" }}>
      <AgentChat />
    </div>
    <HeroStripe />
  </section>
);

const HeroNoise = () => (
  <div style={{
    position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.5,
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
  }}/>
);
const HeroStripe = () => (
  <div style={{ position: "absolute", bottom: 0, left: 0, width: "120%", height: 4, background: "linear-gradient(to right,#491cff,#ff99d4)", zIndex: 10 }}/>
);
const RolePill = () => (
  <div style={{
    display: "inline-flex", alignItems: "center", gap: 10,
    background: "rgba(73,28,255,0.18)", border: "1px solid rgba(73,28,255,0.5)",
    borderRadius: 100, padding: "7px 16px 7px 10px",
  }}>
    <Dot color="#ff99d4" />
    <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.2, textTransform: "uppercase", color: "rgba(255,255,255,0.75)" }}>
      Senior Product Designer · Open to Staff &amp; Lead
    </span>
  </div>
);
const ContextChips = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
    <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: "rgba(255,255,255,0.52)" }}>Shipped at</span>
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {["Salesforce", "Tableau", "AI / ML UX", "Enterprise SaaS", "0→1", "⌥ Vibe coded"].map((c, i) => (
        <span key={c} style={{
          fontSize: 13, fontWeight: 600,
          color: i === 5 ? "rgba(255,153,212,0.85)" : "rgba(255,255,255,0.72)",
          border: `1px solid ${i === 5 ? "rgba(255,153,212,0.35)" : "rgba(255,255,255,0.12)"}`,
          borderRadius: 8, padding: "6px 12px", background: "rgba(255,255,255,0.04)",
        }}>{c}</span>
      ))}
    </div>
  </div>
);
const Dot = ({ color }) => (
  <span style={{ width: 8, height: 8, borderRadius: "50%", background: color, animation: "pulse 2s ease-in-out infinite" }}/>
);

const ctaPri = {
  display: "inline-flex", alignItems: "center", gap: 10,
  background: "linear-gradient(135deg,#491cff 0%,#7b4dff 100%)",
  color: "#fff", fontSize: 15, fontWeight: 700,
  padding: "14px 28px", borderRadius: 100, textDecoration: "none",
  boxShadow: "0 8px 32px rgba(73,28,255,0.4)",
};
const ctaSec = {
  display: "inline-flex", alignItems: "center", gap: 10,
  color: "rgba(255,255,255,0.8)", fontSize: 15, fontWeight: 600,
  padding: "13px 24px", borderRadius: 100, textDecoration: "none",
  border: "1.5px solid rgba(255,255,255,0.2)",
};

// ─── AGENT CHAT ───────────────────────────────────────────────────────────
const SUGGESTIONS = [
  "Show me Aditya's best AI work",
  "Why should we hire for a Staff role?",
  "What does 'vibe-coded' mean here?",
  "Summarize 9 years in one paragraph",
];
const CANNED_REPLIES = {
  "Show me Aditya's best AI work":
    "The Personalization Core Platform at Salesforce — 0→1, four years, shipped across Marketing Cloud. I designed recommendations, decisioning, experimentation, and engagement signals end-to-end. Project Nexio (Tableau Pulse generative insights) is a close second — that's where I started treating AI trust as a first-class interaction problem.",
  "Why should we hire for a Staff role?":
    "Three reasons. One: I've owned 0→1 in AI/ML UX at enterprise scale for four years. Two: I bridge ML research and usable product — PMs and research credit me for that translation. Three: I vibe-code my own prototypes, so design reviews happen against working systems, not static screens.",
  "What does 'vibe-coded' mean here?":
    "I use Claude + Cursor as design tools, not dev tools. This whole portfolio was built that way. It lets me prototype interactions in hours instead of weeks, and it means design critique can happen against real, running UX. This is how I work now, and I think it's how the next generation of design teams will work.",
  "Summarize 9 years in one paragraph":
    "I started in advertising and digital media — fast, measurable, stakeholder-heavy work. An M.S. in HCI at DePaul took me into product. Since then: nine years at Salesforce and Tableau on AI-powered enterprise surfaces — personalization, data storytelling, experimentation, and generative insight discovery. Systems thinking, measurement maturity, and cross-functional leadership are what I bring to every team.",
};

const AgentChat = () => {
  const [messages, setMessages] = React.useState([
    { role: "agent", text: "Hi — I'm the agent that reads Aditya's résumé. Ask me anything, or tap a suggestion below." },
  ]);
  const [input, setInput] = React.useState("");
  const [typing, setTyping] = React.useState(false);
  const [suggestions, setSuggestions] = React.useState(SUGGESTIONS);
  const scrollRef = React.useRef(null);

  React.useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, typing]);

  const ask = async (q) => {
    if (!q.trim()) return;
    setMessages(m => [...m, { role: "user", text: q }]);
    setInput("");
    setSuggestions(s => s.filter(x => x !== q));
    setTyping(true);

    let reply = CANNED_REPLIES[q];
    if (!reply && typeof window.claude?.complete === "function") {
      try {
        reply = await window.claude.complete({
          messages: [{
            role: "user",
            content:
              "You are an agent embedded in Aditya Yellamraju's portfolio. Aditya is a Senior Product Designer, 9 years, Salesforce + Tableau, specialty in AI/ML UX, data storytelling, experimentation, and personalization. He vibe-codes his own prototypes with Claude + Cursor and is open to Staff/Lead roles. Answer in 2-3 sentences, first person as the agent (not as Aditya). Question: " + q,
          }],
        });
      } catch {}
    }
    if (!reply) reply = "I can tell you about Aditya's work at Salesforce / Tableau, his AI/ML UX experience, or what 'vibe-coded' means in practice. Try one of the suggestions.";
    // small fake-typing delay for canned replies
    await new Promise(r => setTimeout(r, 550));
    setTyping(false);
    setMessages(m => [...m, { role: "agent", text: reply }]);
  };

  return (
    <div style={{
      width: "100%", maxWidth: 540, borderRadius: 20,
      background: "rgba(255,255,255,0.04)", border: "1px solid rgba(73,28,255,0.3)",
      backdropFilter: "blur(10px)", overflow: "hidden",
      boxShadow: "0 40px 100px rgba(0,0,0,0.5), 0 0 0 1px rgba(73,28,255,0.2)",
    }}>
      {/* chrome */}
      <div style={{ padding: "14px 18px", borderBottom: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", gap: 12, background: "rgba(255,255,255,0.04)" }}>
        <div style={{ display: "flex", gap: 6 }}>
          {["#ff5f57","#febc2e","#28c840"].map(c => <span key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }}/>)}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, flex: 1, background: "rgba(73,28,255,0.15)", padding: "5px 12px", borderRadius: 6, color: "#b9a6ff", fontSize: 11, fontWeight: 700, letterSpacing: 0.3 }}>
          <SparkleIcon size={12}/> ASK-THE-PORTFOLIO · agent
        </div>
      </div>

      {/* messages */}
      <div ref={scrollRef} style={{ padding: 18, display: "flex", flexDirection: "column", gap: 12, maxHeight: 360, minHeight: 340, overflowY: "auto" }}>
        {messages.map((m, i) => <ChatBubble key={i} role={m.role} text={m.text} />)}
        {typing && <ChatBubble role="agent" text={<TypingDots />} />}
      </div>

      {/* suggestions */}
      {suggestions.length > 0 && (
        <div style={{ padding: "0 18px 14px", display: "flex", gap: 6, flexWrap: "wrap" }}>
          {suggestions.slice(0, 3).map(s => (
            <button key={s} onClick={() => ask(s)} style={{
              fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.75)",
              background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 100, padding: "6px 12px", cursor: "pointer", fontFamily: "inherit",
            }}>{s}</button>
          ))}
        </div>
      )}

      {/* input */}
      <form onSubmit={e => { e.preventDefault(); ask(input); }} style={{ display: "flex", gap: 8, padding: "12px 14px", borderTop: "1px solid rgba(255,255,255,0.06)", background: "rgba(0,0,0,0.2)" }}>
        <input value={input} onChange={e => setInput(e.target.value)}
          placeholder="Ask the portfolio anything…"
          style={{
            flex: 1, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 100, padding: "10px 16px", color: "#fff", fontSize: 14, fontFamily: "inherit", outline: "none",
          }}/>
        <button type="submit" style={{
          background: "linear-gradient(135deg,#491cff,#7b4dff)", color: "#fff",
          border: "none", borderRadius: "50%", width: 40, height: 40, cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}><ArrowIcon size={16}/></button>
      </form>
    </div>
  );
};
const ChatBubble = ({ role, text }) => (
  <div style={{ display: "flex", gap: 10, alignItems: "flex-start", flexDirection: role === "user" ? "row-reverse" : "row" }}>
    {role === "agent" && (
      <div style={{ width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(135deg,#491cff,#ff99d4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 13 }}>✦</div>
    )}
    <div style={{
      background: role === "user" ? "rgba(73,28,255,0.25)" : "rgba(255,255,255,0.06)",
      border: `1px solid ${role === "user" ? "rgba(73,28,255,0.4)" : "rgba(255,255,255,0.08)"}`,
      color: role === "user" ? "#fff" : "rgba(255,255,255,0.85)",
      padding: "10px 14px", borderRadius: role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
      fontSize: 14, lineHeight: 1.55, maxWidth: "85%",
    }}>{text}</div>
  </div>
);
const TypingDots = () => (
  <span style={{ display: "inline-flex", gap: 4 }}>
    {[0,1,2].map(i => <span key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: "#b9a6ff", animation: `typing 1.2s ease-in-out ${i*0.15}s infinite` }}/>)}
  </span>
);

// ─── ABOUT ────────────────────────────────────────────────────────────────
const SafeAbout = () => (
  <section id="about" style={{ maxWidth: 1200, margin: "0 auto", padding: "96px 64px 48px", display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 80, alignItems: "center" }}>
    <div>
      <h2 style={{ fontSize: 38, fontWeight: 900, marginBottom: 20, lineHeight: 1.15 }}>Advertising taught me to ship. HCI taught me to systematize. AI is teaching me to vibe-code.</h2>
      <p style={{ fontSize: 20, color: "#3a3a3a", lineHeight: 1.65, marginBottom: 16 }}>
        I started in advertising and digital media — fast, measurable, stakeholder-heavy. That foundation made the transition to product natural: outcomes mindset, instrumentation, iteration. An <strong style={{ color: "#0f0f0f", fontWeight: 700 }}>M.S. in HCI from DePaul</strong> deepened it.
      </p>
      <p style={{ fontSize: 20, color: "#3a3a3a", lineHeight: 1.65 }}>
        Today I design enterprise AI systems — and prototype them with AI. Claude and Cursor sit next to Figma in my workflow. The <strong style={{ color: "#0f0f0f", fontWeight: 700 }}>irony isn't lost — but the clarity it creates is the whole point.</strong>
      </p>
    </div>
    <AboutPhoto />
  </section>
);
const AboutPhoto = () => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <div style={{ width: 340, height: 340, borderRadius: "50%", background: "linear-gradient(135deg,#491cff,#ff99d4)", padding: 4 }}>
      <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: "linear-gradient(to bottom,#f0f4f8,#d6dee6)", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 64, opacity: 0.35 }}>👤</div>
    </div>
  </div>
);

// ─── NOW ──────────────────────────────────────────────────────────────────
const SafeNow = () => (
  <section id="now" style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 64px 64px" }}>
    <div style={{
      border: "2.5px solid #491cff", borderRadius: 26, padding: "40px 48px",
      background: "#fff", display: "grid", gridTemplateColumns: "200px 1fr", gap: 48, alignItems: "start",
    }}>
      <div>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: "rgba(0,0,0,0.45)", marginBottom: 8 }}>Now</div>
        <div style={{ fontSize: 28, fontWeight: 900, lineHeight: 1.15 }}>What I'm up to this season.</div>
        <div style={{ fontSize: 13, color: "rgba(0,0,0,0.5)", marginTop: 10, display: "flex", alignItems: "center", gap: 6 }}>
          <Dot color="#22c55e"/> Updated this week
        </div>
      </div>
      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
        {NOW.map((n, i) => (
          <li key={i} style={{ fontSize: 19, color: "#3a3a3a", lineHeight: 1.55, paddingLeft: 28, position: "relative" }}>
            <span style={{ position: "absolute", left: 0, color: "#491cff", fontWeight: 800 }}>→</span>{typeof n === "string" ? n : n.text}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

// ─── PROJECTS ─────────────────────────────────────────────────────────────
const SafeProjects = () => (
  <section id="work" style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 64px 96px" }}>
    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 40 }}>
      <h2 style={{ fontSize: 38, fontWeight: 900 }}>Impactful Projects</h2>
      <span style={{ fontSize: 15, fontWeight: 600, color: "#491cff" }}>4 case studies →</span>
    </div>
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      {CASES.map(c => <SafeProjectCard key={c.slug} c={c}/>)}
    </div>
  </section>
);
const SafeProjectCard = ({ c }) => {
  const [hov, setHov] = React.useState(false);
  return (
    <a href={c.slug === "personalization" ? "case-personalization-private.html" : c.slug === "recommendations-engine" ? "case-recommendations-engine.html" : c.slug === "pulse-nexio" ? "case-tableau-pulse.html" : c.slug === "data-stories" ? "case-data-stories.html" : `#case-${c.slug}`}
      onClick={(c.slug === "personalization" || c.slug === "recommendations-engine" || c.slug === "pulse-nexio" || c.slug === "data-stories") ? undefined : (e=>e.preventDefault())}
      onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{
        border: "2.5px solid #491cff", borderRadius: 26, overflow: "hidden",
        background: "#fff", display: "grid", gridTemplateColumns: "1fr 1fr",
        minHeight: 260, textDecoration: "none", color: "inherit", cursor: "pointer",
        transform: hov ? "translateY(-4px)" : "none",
        boxShadow: hov ? "0 24px 60px rgba(73,28,255,0.15)" : "none",
        transition: "transform .3s cubic-bezier(.22,1,.36,1), box-shadow .3s",
      }}>
      <div style={{ padding: "28px 40px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
            {c.tags.map(t => <Tag key={t}>{t}</Tag>)}
            <Tag pink>{c.company}</Tag>
          </div>
          <h3 style={{ fontSize: 30, fontWeight: 900, lineHeight: 1.15, letterSpacing: -0.3, marginBottom: 14 }}>{c.title}</h3>
          <p style={{ fontSize: 16, color: "#3a3a3a", lineHeight: 1.6 }}>{c.blurb}</p>
        </div>
        <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 12 }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 0.8, textTransform: "uppercase", color: "rgba(0,0,0,0.4)" }}>Scope</div>
            <div style={{ fontSize: 16, fontWeight: 700 }}>{c.kicker}</div>
          </div>
          <span style={{ ...ctaPri, width: "fit-content", fontSize: 13, padding: "11px 22px", boxShadow: hov ? "0 10px 32px rgba(73,28,255,0.45)" : "0 6px 24px rgba(73,28,255,0.3)" }}>View case study <ArrowIcon size={14}/></span>
        </div>
      </div>
      <div style={{ background: c.accent, margin: "16px 16px 16px 0", borderRadius: 18, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", color: "#fff", padding: 28 }}>
        <MiniMock slug={c.slug}/>
      </div>
    </a>
  );
};
const Tag = ({ children, pink }) => (
  <span style={{
    fontSize: 11, fontWeight: 700, letterSpacing: 0.9, textTransform: "uppercase",
    padding: "4px 11px", borderRadius: 100,
    background: pink ? "rgba(255,153,212,0.15)" : "rgba(73,28,255,0.1)",
    color: pink ? "#c4006d" : "#491cff",
    border: `1px solid ${pink ? "rgba(255,153,212,0.4)" : "rgba(73,28,255,0.25)"}`,
  }}>{children}</span>
);

// Shared mock visuals per case (used by both Safe + Bold)
const MiniMock = ({ slug }) => {
  if (slug === "personalization") return <FlowMock/>;
  if (slug === "recommendations-engine") return <RecsMock/>;
  if (slug === "pulse-nexio") return <PulseMock/>;
  if (slug === "data-stories") return <NLGMock/>;
  return <ABMock/>;
};

// Recommendations engine: content variants → qualifying logic → audience → delivered
const RecsMock = () => (
  <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 10 }}>
    {/* content variants */}
    <div style={{ display: "flex", gap: 6 }}>
      {[
        { c: "linear-gradient(135deg,#491cff,#b9a6ff)", l: "A" },
        { c: "linear-gradient(135deg,#c4006d,#ff99d4)", l: "B" },
        { c: "linear-gradient(135deg,#1d4ed8,#93c5fd)", l: "C" },
        { c: "rgba(255,255,255,0.10)", l: "D" },
      ].map((v, i) => (
        <div key={i} style={{ flex: 1, borderRadius: 8, padding: "10px 8px", background: v.c, border: "1px solid rgba(255,255,255,0.14)", display: "flex", flexDirection: "column", gap: 6, alignItems: "center" }}>
          <div style={{ width: "80%", height: 5, borderRadius: 3, background: "rgba(255,255,255,0.72)" }}/>
          <div style={{ width: "55%", height: 5, borderRadius: 3, background: "rgba(255,255,255,0.30)" }}/>
          <div style={{ fontSize: 9, fontWeight: 800, color: "rgba(255,255,255,0.85)", letterSpacing: 0.5 }}>{v.l}</div>
        </div>
      ))}
    </div>

    {/* funnel arrows into logic */}
    <div style={{ textAlign: "center", fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 0.8 }}>↓ ↓ ↓ ↓</div>

    {/* qualifying logic node */}
    <div style={{ background: "rgba(73,28,255,0.22)", border: "1px solid rgba(167,143,255,0.5)", borderRadius: 10, padding: "10px 12px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ width: 22, height: 22, borderRadius: 6, background: "linear-gradient(135deg,#491cff,#ff99d4)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11 }}>✦</span>
        <span style={{ fontSize: 12, fontWeight: 700, color: "#fff" }}>Decisioning logic</span>
      </div>
      <span style={{ fontSize: 10, fontWeight: 700, color: "#b9a6ff", fontFamily: "ui-monospace,Menlo,monospace" }}>rules + ML</span>
    </div>

    <div style={{ textAlign: "center", fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 0.8 }}>↓</div>

    {/* qualified audience → delivered */}
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <div style={{ flex: 1, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.10)", borderRadius: 8, padding: "9px 11px" }}>
        <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: 0.8, textTransform: "uppercase", color: "rgba(255,255,255,0.64)" }}>Qualified audience</div>
        <div style={{ fontSize: 15, fontWeight: 900, color: "#fff", marginTop: 3 }}>High-LTV · in-stock</div>
      </div>
      <span style={{ fontSize: 16, color: "#4ade80" }}>→</span>
      <div style={{ background: "rgba(34,197,94,0.15)", border: "1px solid rgba(34,197,94,0.35)", borderRadius: 8, padding: "9px 12px", textAlign: "center" }}>
        <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: 0.8, textTransform: "uppercase", color: "#4ade80" }}>Delivered</div>
        <div style={{ fontSize: 15, fontWeight: 900, color: "#fff", marginTop: 3 }}>Variant B</div>
      </div>
    </div>
  </div>
);
const FlowMock = () => (
  <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 8 }}>
    {["Audience", "Rules", "Model", "Launch"].map((s, i) => (
      <div key={s} style={{ display: "flex", alignItems: "center", gap: 12, background: i===1?"rgba(73,28,255,0.25)":"rgba(255,255,255,0.05)", border: `1px solid ${i===1?"rgba(73,28,255,0.5)":"rgba(255,255,255,0.08)"}`, borderRadius: 10, padding: "10px 12px" }}>
        <span style={{ width: 24, height: 24, borderRadius: "50%", background: i===1?"#491cff":"rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: i<=1?"#fff":"rgba(255,255,255,0.68)" }}>{i+1}</span>
        <span style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.85)" }}>{s}</span>
        {i===0 && <span style={{ marginLeft: "auto", fontSize: 10, fontWeight: 800, color: "#4ade80" }}>✓</span>}
      </div>
    ))}
  </div>
);
const PulseMock = () => (
  <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 10 }}>
    <div style={{ background: "rgba(73,28,255,0.15)", border: "1px solid rgba(73,28,255,0.4)", borderRadius: 10, padding: 12, display: "flex", gap: 10 }}>
      <span style={{ fontSize: 20 }}>📊</span>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: "#fff" }}>Revenue +38% WoW</div>
        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.78)" }}>Driven by EMEA segment</div>
      </div>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 2, height: 24 }}>
        {[40,65,50,80,95,72].map((h,i)=> <span key={i} style={{ width: 4, height: `${h}%`, borderRadius: 2, background: i===4?"#ff99d4":"#b9a6ff" }}/>)}
      </div>
    </div>
    {[{t:"CAC down 12%",d:"paid search"},{t:"Churn flat",d:"enterprise"}].map((x,i)=>(
      <div key={i} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: 10, display: "flex", justifyContent: "space-between" }}>
        <div><div style={{ fontSize: 12, fontWeight: 700, color: "#fff" }}>{x.t}</div><div style={{ fontSize: 10, color: "rgba(255,255,255,0.68)" }}>{x.d}</div></div>
      </div>
    ))}
  </div>
);
const NLGMock = () => (
  <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 10 }}>
    <div style={{ display: "flex", alignItems: "flex-end", gap: 5, height: 50, padding: 10, background: "rgba(255,255,255,0.04)", borderRadius: 8 }}>
      {[45,70,55,90,65,40,80,60].map((h,i)=>(
        <span key={i} style={{ flex: 1, height: `${h}%`, borderRadius: 3, background: i===3?"linear-gradient(to top,#1d4ed8,#93c5fd)":"rgba(59,130,246,0.25)" }}/>
      ))}
    </div>
    <div style={{ background: "rgba(255,255,255,0.07)", borderLeft: "3px solid #93c5fd", borderRadius: "0 8px 8px 0", padding: "10px 12px", fontSize: 12, color: "rgba(255,255,255,0.85)", lineHeight: 1.55 }}>
      "Q3 revenue grew <span style={{ background: "rgba(59,130,246,0.25)", padding: "1px 6px", borderRadius: 4 }}>+23%</span> vs. Q2, led by enterprise renewals."
    </div>
  </div>
);
const ABMock = () => (
  <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 10 }}>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
      <div style={{ background: "rgba(73,28,255,0.15)", border: "1px solid rgba(73,28,255,0.4)", borderRadius: 10, padding: 12 }}>
        <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: 1, textTransform: "uppercase", color: "#b9a6ff" }}>Variant A</div>
        <div style={{ height: 6, borderRadius: 4, background: "rgba(255,255,255,0.08)", marginTop: 8 }}><div style={{ width: "68%", height: "100%", borderRadius: 4, background: "linear-gradient(to right,#491cff,#b9a6ff)" }}/></div>
        <div style={{ fontSize: 16, fontWeight: 900, color: "#b9a6ff", marginTop: 8 }}>68.2%</div>
      </div>
      <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: 12 }}>
        <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: 1, textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>Variant B</div>
        <div style={{ height: 6, borderRadius: 4, background: "rgba(255,255,255,0.08)", marginTop: 8 }}><div style={{ width: "45%", height: "100%", borderRadius: 4, background: "rgba(255,255,255,0.25)" }}/></div>
        <div style={{ fontSize: 16, fontWeight: 900, color: "rgba(255,255,255,0.68)", marginTop: 8 }}>45.1%</div>
      </div>
    </div>
    <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 8, padding: "10px 12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div><div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: 0.8, color: "rgba(255,255,255,0.6)" }}>Confidence</div></div>
      <div style={{ fontSize: 18, fontWeight: 900, color: "#4ade80" }}>97.3%</div>
    </div>
  </div>
);

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────
const SafeTestimonials = () => (
  <section id="testimonials" style={{ background: "#1c1c26", padding: "96px 64px", position: "relative", overflow: "hidden" }}>
    <HeroNoise/>
    <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>
      <h2 style={{ fontSize: 38, fontWeight: 900, color: "#fff", marginBottom: 48 }}>What teammates say.</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
        {TESTIMONIALS.map((t, i) => (
          <div key={i} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(73,28,255,0.25)", borderRadius: 20, padding: 28, display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ fontSize: 36, lineHeight: 1, color: "#491cff", fontWeight: 900 }}>"</div>
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 16, lineHeight: 1.6 }}>{t.quote}</p>
            <div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#fff" }}>{t.name}</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.64)" }}>{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── FOOTER + VIBE BADGE ──────────────────────────────────────────────────
const SafeFooter = () => (
  <footer id="resume" style={{ background: "#0f0f0f", padding: "80px 64px 32px", color: "#fff" }}>
    <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 24 }}>
      <div>
        <h3 style={{ fontSize: 32, fontWeight: 900, color: "#ffffff" }}>Let's work together.</h3>
        <p style={{ fontSize: 16, color: "rgba(255,255,255,0.68)", marginTop: 6 }}>Staff / Lead UX · Austin, TX · Remote-friendly</p>
      </div>
      <div style={{ display: "flex", gap: 14 }}>
        <a href="#" style={{ ...ctaSec, borderColor: "rgba(255,255,255,0.25)" }}>hello@adityay.com</a>
        <a href="#" style={{ ...ctaPri, background: "linear-gradient(135deg,#491cff,#ff99d4)" }}>LinkedIn <ArrowIcon size={14}/></a>
      </div>
    </div>
    <div style={{ maxWidth: 1200, margin: "48px auto 0", paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", justifyContent: "space-between", fontSize: 12, color: "rgba(255,255,255,0.6)" }}>
      <span>Designed by me. Vibe-coded with Claude &amp; Cursor · 2026</span>
      <span>↓ Download résumé (PDF)</span>
    </div>
  </footer>
);
const SafeVibeBadge = () => (
  <a href="#" style={{
    position: "fixed", bottom: 20, right: 20, zIndex: 200,
    display: "inline-flex", alignItems: "center", gap: 8,
    background: "rgba(18,18,18,0.85)", border: "1px solid rgba(255,153,212,0.35)",
    borderRadius: 100, padding: "8px 14px 8px 10px",
    backdropFilter: "blur(16px)", textDecoration: "none",
    boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
  }}>
    <Dot color="#ff99d4"/>
    <span style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.75)" }}>Vibe coded · <span style={{ color: "#ff99d4" }}>Claude + Cursor</span></span>
  </a>
);

window.SafePortfolio = SafePortfolio;
Object.assign(window, { MiniMock, FlowMock, PulseMock, NLGMock, ABMock, RecsMock });
