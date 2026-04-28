
// Plattr — Homepage

function HomePage({ onNavigate, onAuthOpen, onViewConsultant }) {
  return (
    <div>
      <HeroSection onNavigate={onNavigate} onAuthOpen={onAuthOpen} />
      <CategoryStrip onNavigate={onNavigate} />
      <HowItWorks />
      <FeaturedConsultants onNavigate={onNavigate} onViewConsultant={onViewConsultant} />
      <FeaturedResources onNavigate={onNavigate} />
      <BottomCTA onAuthOpen={onAuthOpen} onNavigate={onNavigate} />
    </div>
  );
}

function HeroSection({ onNavigate, onAuthOpen }) {
  return (
    <section style={{
      minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center",
      background:"var(--bg)", position:"relative", overflow:"hidden", paddingTop:"64px"
    }}>
      {/* Decorative background */}
      <div style={{position:"absolute",inset:0,pointerEvents:"none",overflow:"hidden"}}>
        <div style={{position:"absolute",top:"-10%",right:"-5%",width:"600px",height:"600px",borderRadius:"50%",background:"radial-gradient(circle, oklch(0.95 0.04 38) 0%, transparent 70%)",opacity:0.6}} />
        <div style={{position:"absolute",bottom:"-15%",left:"-5%",width:"500px",height:"500px",borderRadius:"50%",background:"radial-gradient(circle, oklch(0.95 0.06 195) 0%, transparent 70%)",opacity:0.4}} />
        {/* Grid texture */}
        <svg style={{position:"absolute",inset:0,width:"100%",height:"100%",opacity:0.03}} xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="g" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0v40" fill="none" stroke="var(--text)" strokeWidth="0.5"/></pattern></defs>
          <rect width="100%" height="100%" fill="url(#g)"/>
        </svg>
      </div>

      <div style={{maxWidth:900,margin:"0 auto",padding:"80px 24px",textAlign:"center",position:"relative"}}>
        <div style={{display:"inline-flex",alignItems:"center",gap:"8px",background:"white",border:"1px solid var(--border)",borderRadius:"100px",padding:"6px 16px",marginBottom:"32px",boxShadow:"0 2px 12px rgba(0,0,0,0.05)"}}>
          <span style={{width:8,height:8,borderRadius:"50%",background:"var(--accent)",display:"inline-block",animation:"pulse 2s infinite"}} />
          <span style={{fontFamily:"var(--font-body)",fontSize:"13px",color:"var(--text2)",fontWeight:500}}>Now live — 60+ vetted consultants across India</span>
        </div>

        <h1 style={{fontFamily:"var(--font-display)",fontSize:"clamp(42px,6vw,80px)",fontWeight:700,color:"var(--text)",lineHeight:1.1,letterSpacing:"-0.03em",marginBottom:"24px",margin:"0 0 24px"}}>
          Open your restaurant<br />
          <span style={{color:"var(--accent)"}}>with the right experts</span><br />
          by your side.
        </h1>

        <p style={{fontFamily:"var(--font-body)",fontSize:"clamp(17px,2vw,21px)",color:"var(--text2)",lineHeight:1.65,maxWidth:620,margin:"0 auto 40px",fontWeight:400}}>
          India's first curated platform connecting F&B founders with vetted hospitality consultants — for kitchen design, brand strategy, operations, and beyond.
        </p>

        <div style={{display:"flex",gap:"14px",justifyContent:"center",flexWrap:"wrap"}}>
          <button onClick={() => onNavigate("directory")} style={{background:"var(--accent)",border:"none",borderRadius:"12px",padding:"16px 32px",cursor:"pointer",fontFamily:"var(--font-body)",fontSize:"16px",fontWeight:600,color:"white",boxShadow:"0 4px 24px rgba(196,113,74,0.35)",transition:"all 0.2s"}}
            onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-1px)";e.currentTarget.style.boxShadow="0 8px 32px rgba(196,113,74,0.4)"}}
            onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="0 4px 24px rgba(196,113,74,0.35)"}}>
            Find a Consultant
          </button>
          <button onClick={() => onAuthOpen("signup-consultant")} style={{background:"white",border:"1px solid var(--border)",borderRadius:"12px",padding:"16px 32px",cursor:"pointer",fontFamily:"var(--font-body)",fontSize:"16px",fontWeight:500,color:"var(--text)",transition:"all 0.2s",boxShadow:"0 2px 12px rgba(0,0,0,0.05)"}}
            onMouseEnter={e=>{e.currentTarget.style.borderColor="var(--accent)";e.currentTarget.style.color="var(--accent)"}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor="var(--border)";e.currentTarget.style.color="var(--text)"}}>
            Join as a Consultant
          </button>
        </div>

        {/* Trust numbers */}
        <div style={{display:"flex",gap:"48px",justifyContent:"center",marginTop:"64px",flexWrap:"wrap"}}>
          {[["60+","Vetted consultants"],["15,000+","F&B founders served"],["₹500Cr+","Projects supported"],["5","Cities covered"]].map(([n,l]) => (
            <div key={l} style={{textAlign:"center"}}>
              <div style={{fontFamily:"var(--font-display)",fontSize:"32px",fontWeight:700,color:"var(--text)",letterSpacing:"-0.03em"}}>{n}</div>
              <div style={{fontFamily:"var(--font-body)",fontSize:"13px",color:"var(--text3)",marginTop:"4px"}}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryStrip({ onNavigate }) {
  const cats = [
    { label:"Turnkey Setup", icon:"🏗", desc:"End-to-end restaurant launch" },
    { label:"Kitchen Design", icon:"👨‍🍳", desc:"Layout, equipment, workflow" },
    { label:"Branding", icon:"🎨", desc:"Identity, concept, positioning" },
    { label:"F&B Strategy", icon:"📊", desc:"Unit economics, growth plans" },
    { label:"Cloud Kitchen", icon:"🛵", desc:"Delivery-first operations" },
    { label:"QSR Operations", icon:"⚡", desc:"Systems, SOPs, franchising" },
    { label:"Menu Engineering", icon:"📋", desc:"Pricing, COGS, dish mix" },
  ];
  return (
    <section style={{background:"var(--text)",padding:"56px 24px"}}>
      <div style={{maxWidth:1200,margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:"40px"}}>
          <h2 style={{fontFamily:"var(--font-display)",fontSize:"28px",fontWeight:700,color:"white",marginBottom:"8px",letterSpacing:"-0.02em"}}>Find the right expertise</h2>
          <p style={{fontFamily:"var(--font-body)",fontSize:"15px",color:"rgba(255,255,255,0.5)"}}>Browse by specialisation — from concept to operations and everything between.</p>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))",gap:"12px"}}>
          {cats.map(c => (
            <button key={c.label} onClick={() => onNavigate("directory")} style={{background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"12px",padding:"20px 16px",cursor:"pointer",textAlign:"center",transition:"all 0.2s",color:"white"}}
              onMouseEnter={e=>{e.currentTarget.style.background="rgba(196,113,74,0.2)";e.currentTarget.style.borderColor="rgba(196,113,74,0.4)"}}
              onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,0.06)";e.currentTarget.style.borderColor="rgba(255,255,255,0.1)"}}>
              <div style={{fontSize:"28px",marginBottom:"10px"}}>{c.icon}</div>
              <div style={{fontFamily:"var(--font-body)",fontWeight:600,fontSize:"14px",color:"white",marginBottom:"4px"}}>{c.label}</div>
              <div style={{fontFamily:"var(--font-body)",fontSize:"12px",color:"rgba(255,255,255,0.45)",lineHeight:1.4}}>{c.desc}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n:"01", title:"Browse & filter", desc:"Explore 60+ vetted consultants by expertise, city, and project type. Read detailed profiles and portfolios before reaching out." },
    { n:"02", title:"Send an enquiry", desc:"Contact consultants directly through the platform. Tell them about your project — they'll get back within 24 hours." },
    { n:"03", title:"Get to work", desc:"Once you've found your match, Plattr steps back. You own the relationship — we just made the introduction." },
  ];
  return (
    <section style={{padding:"96px 24px",background:"var(--bg)"}}>
      <div style={{maxWidth:1100,margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:"64px"}}>
          <div style={{fontFamily:"var(--font-body)",fontSize:"13px",fontWeight:600,color:"var(--accent)",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:"12px"}}>How it works</div>
          <h2 style={{fontFamily:"var(--font-display)",fontSize:"38px",fontWeight:700,color:"var(--text)",letterSpacing:"-0.02em",margin:"0 0 16px"}}>From search to engagement<br />in under 10 minutes.</h2>
          <p style={{fontFamily:"var(--font-body)",fontSize:"16px",color:"var(--text2)",maxWidth:480,margin:"0 auto",lineHeight:1.65}}>No referrals needed. No chasing WhatsApp contacts. Just structured, verified expertise — when you need it.</p>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"40px",position:"relative"}}>
          {/* Connector line */}
          <div style={{position:"absolute",top:"36px",left:"calc(33.33% + 20px)",right:"calc(33.33% + 20px)",height:"1px",background:"var(--border)",zIndex:0}} />
          {steps.map((s, i) => (
            <div key={i} style={{textAlign:"center",position:"relative",zIndex:1}}>
              <div style={{width:72,height:72,borderRadius:"50%",background:"white",border:"2px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 24px",boxShadow:"0 4px 16px rgba(0,0,0,0.06)"}}>
                <span style={{fontFamily:"var(--font-display)",fontSize:"20px",fontWeight:700,color:"var(--accent)"}}>{s.n}</span>
              </div>
              <h3 style={{fontFamily:"var(--font-display)",fontSize:"22px",fontWeight:700,color:"var(--text)",marginBottom:"12px",letterSpacing:"-0.01em"}}>{s.title}</h3>
              <p style={{fontFamily:"var(--font-body)",fontSize:"15px",color:"var(--text2)",lineHeight:1.65,margin:0}}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedConsultants({ onNavigate, onViewConsultant }) {
  const featured = CONSULTANTS.filter(c => c.featured).slice(0, 3).concat(CONSULTANTS.filter(c => !c.featured).slice(0,1));
  return (
    <section style={{padding:"80px 24px",background:"var(--bg2)"}}>
      <div style={{maxWidth:1200,margin:"0 auto"}}>
        <div style={{display:"flex",alignItems:"flex-end",justifyContent:"space-between",marginBottom:"40px",flexWrap:"wrap",gap:"16px"}}>
          <div>
            <div style={{fontFamily:"var(--font-body)",fontSize:"13px",fontWeight:600,color:"var(--accent)",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:"8px"}}>Our consultants</div>
            <h2 style={{fontFamily:"var(--font-display)",fontSize:"36px",fontWeight:700,color:"var(--text)",letterSpacing:"-0.02em",margin:0}}>Vetted experts, ready to help.</h2>
          </div>
          <button onClick={() => onNavigate("directory")} style={{background:"none",border:"1px solid var(--border)",borderRadius:"10px",padding:"10px 20px",cursor:"pointer",fontFamily:"var(--font-body)",fontSize:"14px",fontWeight:500,color:"var(--text2)",transition:"all 0.15s",whiteSpace:"nowrap"}}
            onMouseEnter={e=>{e.currentTarget.style.borderColor="var(--accent)";e.currentTarget.style.color="var(--accent)"}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor="var(--border)";e.currentTarget.style.color="var(--text2)"}}>
            View all consultants →
          </button>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:"20px"}}>
          {featured.map(c => <ConsultantCard key={c.id} consultant={c} onClick={() => onViewConsultant(c.slug)} />)}
        </div>
      </div>
    </section>
  );
}

function FeaturedResources({ onNavigate }) {
  const articles = ARTICLES.slice(0, 3);
  const catColors = { "Finance & Compliance":"#C4714A","Starting Out":"#4A7EC4","Kitchen & Design":"#4AC48A","Branding & Marketing":"#C4A84A","Operations":"#A44AC4","Location & Real Estate":"#4AC4B8" };
  return (
    <section style={{padding:"80px 24px",background:"var(--bg)"}}>
      <div style={{maxWidth:1200,margin:"0 auto"}}>
        <div style={{display:"flex",alignItems:"flex-end",justifyContent:"space-between",marginBottom:"40px",flexWrap:"wrap",gap:"16px"}}>
          <div>
            <div style={{fontFamily:"var(--font-body)",fontSize:"13px",fontWeight:600,color:"var(--accent)",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:"8px"}}>Resources</div>
            <h2 style={{fontFamily:"var(--font-display)",fontSize:"36px",fontWeight:700,color:"var(--text)",letterSpacing:"-0.02em",margin:0}}>Knowledge to make better decisions.</h2>
          </div>
          <button onClick={() => onNavigate("resources")} style={{background:"none",border:"1px solid var(--border)",borderRadius:"10px",padding:"10px 20px",cursor:"pointer",fontFamily:"var(--font-body)",fontSize:"14px",fontWeight:500,color:"var(--text2)",transition:"all 0.15s"}}
            onMouseEnter={e=>{e.currentTarget.style.borderColor="var(--accent)";e.currentTarget.style.color="var(--accent)"}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor="var(--border)";e.currentTarget.style.color="var(--text2)"}}>
            Browse all articles →
          </button>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"24px"}}>
          {articles.map(a => (
            <div key={a.id} onClick={() => onNavigate("resources")} style={{background:"white",border:"1px solid var(--border)",borderRadius:"14px",overflow:"hidden",cursor:"pointer",transition:"all 0.2s"}}
              onMouseEnter={e=>{e.currentTarget.style.boxShadow="0 8px 32px rgba(0,0,0,0.08)";e.currentTarget.style.transform="translateY(-2px)"}}
              onMouseLeave={e=>{e.currentTarget.style.boxShadow="none";e.currentTarget.style.transform="translateY(0)"}}>
              {/* Thumbnail placeholder */}
              <div style={{height:"160px",background:`repeating-linear-gradient(45deg, var(--bg2) 0px, var(--bg2) 6px, var(--bg) 6px, var(--bg) 12px)`,display:"flex",alignItems:"center",justifyContent:"center"}}>
                <span style={{fontFamily:"var(--font-body)",fontSize:"12px",color:"var(--text3)",textAlign:"center",padding:"0 24px"}}>article thumbnail</span>
              </div>
              <div style={{padding:"20px"}}>
                <div style={{display:"flex",alignItems:"center",gap:"8px",marginBottom:"10px"}}>
                  <span style={{fontFamily:"var(--font-body)",fontSize:"11px",fontWeight:600,color:catColors[a.category]||"var(--accent)",textTransform:"uppercase",letterSpacing:"0.06em"}}>{a.category}</span>
                  <span style={{color:"var(--border)"}}>·</span>
                  <span style={{fontFamily:"var(--font-body)",fontSize:"12px",color:"var(--text3)"}}>{a.readTime}</span>
                </div>
                <h3 style={{fontFamily:"var(--font-display)",fontSize:"17px",fontWeight:600,color:"var(--text)",lineHeight:1.35,marginBottom:"10px",letterSpacing:"-0.01em"}}>{a.title}</h3>
                <p style={{fontFamily:"var(--font-body)",fontSize:"13px",color:"var(--text2)",lineHeight:1.6,margin:"0 0 14px",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"}}>{a.excerpt}</p>
                <div style={{fontFamily:"var(--font-body)",fontSize:"12px",color:"var(--text3)"}}>By {a.author} · {a.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BottomCTA({ onAuthOpen, onNavigate }) {
  return (
    <section style={{padding:"96px 24px",background:"var(--accent)",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",inset:0,pointerEvents:"none"}}>
        <div style={{position:"absolute",top:"-30%",right:"-5%",width:"500px",height:"500px",borderRadius:"50%",background:"rgba(255,255,255,0.06)"}} />
        <div style={{position:"absolute",bottom:"-20%",left:"-5%",width:"400px",height:"400px",borderRadius:"50%",background:"rgba(0,0,0,0.08)"}} />
      </div>
      <div style={{maxWidth:800,margin:"0 auto",textAlign:"center",position:"relative"}}>
        <h2 style={{fontFamily:"var(--font-display)",fontSize:"44px",fontWeight:700,color:"white",letterSpacing:"-0.03em",marginBottom:"20px",lineHeight:1.1}}>
          Ready to build your restaurant?
        </h2>
        <p style={{fontFamily:"var(--font-body)",fontSize:"18px",color:"rgba(255,255,255,0.8)",lineHeight:1.65,marginBottom:"40px",maxWidth:480,margin:"0 auto 40px"}}>
          Join 300+ founders already using Plattr to find trusted hospitality consultants.
        </p>
        <div style={{display:"flex",gap:"14px",justifyContent:"center",flexWrap:"wrap"}}>
          <button onClick={() => onAuthOpen("signup")} style={{background:"white",border:"none",borderRadius:"12px",padding:"15px 32px",cursor:"pointer",fontFamily:"var(--font-body)",fontSize:"16px",fontWeight:600,color:"var(--accent)",transition:"all 0.2s",boxShadow:"0 4px 24px rgba(0,0,0,0.15)"}}
            onMouseEnter={e=>e.currentTarget.style.transform="translateY(-1px)"}
            onMouseLeave={e=>e.currentTarget.style.transform="translateY(0)"}>
            Create Free Account
          </button>
          <button onClick={() => onNavigate("tools")} style={{background:"transparent",border:"2px solid rgba(255,255,255,0.5)",borderRadius:"12px",padding:"15px 32px",cursor:"pointer",fontFamily:"var(--font-body)",fontSize:"16px",fontWeight:500,color:"white",transition:"all 0.2s"}}
            onMouseEnter={e=>e.currentTarget.style.borderColor="white"}
            onMouseLeave={e=>e.currentTarget.style.borderColor="rgba(255,255,255,0.5)"}>
            Try the Free Tools
          </button>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { HomePage });
