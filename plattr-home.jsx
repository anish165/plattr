
// Plattr — Homepage (Design System v2)

function SectionLabel({ text, orange }) {
  return (
    <div style={{fontFamily:"var(--font-body)",fontSize:"22.4px",fontWeight:600,letterSpacing:"1.792px",textTransform:"uppercase",color:orange?"var(--cta)":"var(--accent)",marginBottom:"14px"}}>
      {text}
    </div>
  );
}

function PrimaryBtn({ children, onClick, large, orange }) {
  const [hov, setHov] = React.useState(false);
  const bg = orange ? (hov?"var(--cta-hover)":"var(--cta)") : (hov?"var(--accent-dark)":"var(--accent)");
  return (
    <button onClick={onClick} onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{background:bg,border:"none",borderRadius:"16px",padding:large?"16px 36px":"12px 32px",cursor:"pointer",fontFamily:"var(--font-body)",fontSize:large?"17px":"15px",fontWeight:500,color:"white",transition:"background 0.15s",lineHeight:1}}>
      {children}
    </button>
  );
}

function OutlineBtn({ children, onClick, large, dark }) {
  const [hov, setHov] = React.useState(false);
  return (
    <button onClick={onClick} onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{background:"transparent",border:`2px solid ${dark?(hov?"white":"rgba(255,255,255,0.35)"):(hov?"var(--accent)":"var(--border)")}`,borderRadius:"16px",padding:large?"16px 36px":"12px 32px",cursor:"pointer",fontFamily:"var(--font-body)",fontSize:large?"17px":"15px",fontWeight:500,color:dark?"white":"var(--text2)",transition:"all 0.15s",lineHeight:1}}>
      {children}
    </button>
  );
}

function HomePage({ onNavigate, onAuthOpen, onViewConsultant }) {
  return (
    <div>
      <HeroSection onNavigate={onNavigate} onAuthOpen={onAuthOpen} />
      <StatsBar />
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
      minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",
      background:"var(--bg)",position:"relative",overflow:"hidden",paddingTop:"68px"
    }}>
      {/* Warm radial bg */}
      <div style={{position:"absolute",inset:0,pointerEvents:"none"}}>
        <div style={{position:"absolute",top:"-5%",right:"-8%",width:"700px",height:"700px",borderRadius:"50%",background:"radial-gradient(circle, #E9F7EE 0%, transparent 65%)",opacity:0.7}} />
        <div style={{position:"absolute",bottom:"-10%",left:"-5%",width:"500px",height:"500px",borderRadius:"50%",background:"radial-gradient(circle, #FDF1E7 0%, transparent 65%)",opacity:0.6}} />
      </div>

      <div style={{maxWidth:960,margin:"0 auto",padding:"96px 24px",textAlign:"center",position:"relative"}}>
        <div style={{display:"inline-flex",alignItems:"center",gap:"8px",background:"var(--surface)",border:"1px solid var(--border)",borderRadius:"9999px",padding:"7px 18px",marginBottom:"36px",boxShadow:"var(--shadow-sm)"}}>
          <span style={{width:8,height:8,borderRadius:"50%",background:"var(--accent)",display:"inline-block",animation:"pulse 2s infinite"}} />
          <span style={{fontFamily:"var(--font-body)",fontSize:"13px",color:"var(--text2)",fontWeight:500}}>Now live — 60+ vetted consultants across India</span>
        </div>

        <h1 style={{fontFamily:"var(--font-display)",fontSize:"67.2px",fontWeight:700,color:"var(--text)",lineHeight:"70.56px",letterSpacing:"-1.68px",marginBottom:"28px"}}>
          Open your restaurant with<br/>
          <span style={{color:"var(--accent)"}}>the right experts</span> by your side.
        </h1>

        <p style={{fontFamily:"var(--font-body)",fontSize:"18px",fontWeight:400,color:"var(--text2)",lineHeight:"28px",maxWidth:580,margin:"0 auto 44px"}}>
          India's first curated platform connecting F&B founders with vetted hospitality consultants — kitchen design, branding, operations, and beyond.
        </p>

        <div style={{display:"flex",gap:"14px",justifyContent:"center",flexWrap:"wrap"}}>
          <PrimaryBtn large onClick={() => onNavigate("directory")}>Find a Consultant</PrimaryBtn>
          <OutlineBtn large onClick={() => onAuthOpen("signup")}>Join as a Consultant</OutlineBtn>
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  const stats = [["60+","Vetted Consultants"],["15,000+","F&B Founders Served"],["₹500Cr+","Projects Supported"],["5","Cities Covered"],["4.9","Average Rating"]];
  return (
    <section style={{background:"var(--bg2)",borderTop:"1px solid var(--border)",borderBottom:"1px solid var(--border)",padding:"48px 24px"}}>
      <div style={{maxWidth:1100,margin:"0 auto",display:"flex",justifyContent:"space-around",flexWrap:"wrap",gap:"32px"}}>
        {stats.map(([n,l]) => (
          <div key={l} style={{textAlign:"center"}}>
            <div style={{fontFamily:"var(--font-display)",fontSize:"48px",fontWeight:700,color:"var(--text)",letterSpacing:"-0.5px",lineHeight:1}}>{n}</div>
            <div style={{fontFamily:"var(--font-body)",fontSize:"15px",color:"var(--text2)",marginTop:"8px"}}>{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CategoryStrip({ onNavigate }) {
  const cats = [
    { label:"Turnkey Setup",    icon:"🏗", desc:"End-to-end restaurant launch" },
    { label:"Kitchen Design",   icon:"👨‍🍳", desc:"Layout, equipment, workflow" },
    { label:"Branding",         icon:"🎨", desc:"Identity, concept, positioning" },
    { label:"F&B Strategy",     icon:"📊", desc:"Unit economics, growth plans" },
    { label:"Cloud Kitchen",    icon:"🛵", desc:"Delivery-first operations" },
    { label:"QSR Operations",   icon:"⚡", desc:"Systems, SOPs, franchising" },
    { label:"Menu Engineering", icon:"📋", desc:"Pricing, COGS, dish mix" },
  ];
  return (
    <section style={{background:"var(--surface)",padding:"80px 24px"}}>
      <div style={{maxWidth:1200,margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:"48px"}}>
          <SectionLabel text="Explore by expertise" />
          <h2 style={{fontFamily:"var(--font-display)",fontSize:"40px",fontWeight:700,color:"var(--text)",letterSpacing:"normal",lineHeight:"50px",marginBottom:"14px"}}>Find the right specialist for your project.</h2>
          <p style={{fontFamily:"var(--font-body)",fontSize:"16px",color:"var(--text2)",lineHeight:"26px",maxWidth:480,margin:"0 auto"}}>From concept to operations — browse by the expertise your project needs most.</p>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(145px,1fr))",gap:"14px"}}>
          {cats.map(c => (
            <button key={c.label} onClick={() => onNavigate("directory")} style={{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:"20px",padding:"22px 16px",cursor:"pointer",textAlign:"center",transition:"all 0.2s",boxShadow:"none"}}
              onMouseEnter={e=>{e.currentTarget.style.boxShadow="var(--shadow-card)";e.currentTarget.style.borderColor="var(--accent)";e.currentTarget.style.transform="translateY(-2px)"}}
              onMouseLeave={e=>{e.currentTarget.style.boxShadow="none";e.currentTarget.style.borderColor="var(--border)";e.currentTarget.style.transform="translateY(0)"}}>
              <div style={{fontSize:"30px",marginBottom:"12px"}}>{c.icon}</div>
              <div style={{fontFamily:"var(--font-display)",fontWeight:600,fontSize:"15px",color:"var(--text)",marginBottom:"5px"}}>{c.label}</div>
              <div style={{fontFamily:"var(--font-body)",fontSize:"12px",color:"var(--text3)",lineHeight:1.5}}>{c.desc}</div>
            </button>
          ))}
        </div>
        <div style={{textAlign:"center",marginTop:"36px"}}>
          <button onClick={() => onNavigate("directory")} style={{background:"none",border:"none",cursor:"pointer",fontFamily:"var(--font-body)",fontSize:"16px",fontWeight:500,color:"var(--accent)",padding:0}}
            onMouseEnter={e=>e.currentTarget.style.color="var(--accent-dark)"}
            onMouseLeave={e=>e.currentTarget.style.color="var(--accent)"}>View all categories →</button>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n:"01", title:"Browse & filter", desc:"Explore 60+ vetted consultants by expertise, city, and project type. Read detailed profiles and portfolios before reaching out." },
    { n:"02", title:"Send an enquiry", desc:"Contact consultants directly through the platform. Tell them about your project — they'll respond within 24 hours." },
    { n:"03", title:"Get to work", desc:"Once you've found your match, Plattr steps back. You own the relationship — we just made the introduction." },
  ];
  return (
    <section style={{padding:"96px 24px",background:"var(--bg2)"}}>
      <div style={{maxWidth:1100,margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:"64px"}}>
          <SectionLabel text="How it works" />
          <h2 style={{fontFamily:"var(--font-display)",fontSize:"40px",fontWeight:700,color:"var(--text)",lineHeight:"50px",marginBottom:"16px"}}>From search to engagement<br/>in under 10 minutes.</h2>
          <p style={{fontFamily:"var(--font-body)",fontSize:"16px",color:"var(--text2)",maxWidth:460,margin:"0 auto",lineHeight:"26px"}}>No referrals, no chasing WhatsApp contacts — just structured, verified expertise when you need it.</p>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"40px",position:"relative"}}>
          <div style={{position:"absolute",top:"40px",left:"calc(33.33% + 20px)",right:"calc(33.33% + 20px)",height:"1px",background:"var(--border)"}} />
          {steps.map((s,i) => (
            <div key={i} style={{textAlign:"center",position:"relative",zIndex:1}}>
              <div style={{width:80,height:80,borderRadius:"50%",background:"var(--surface)",border:"2px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 24px",boxShadow:"var(--shadow-sm)"}}>
                <span style={{fontFamily:"var(--font-display)",fontSize:"22px",fontWeight:700,color:"var(--accent)"}}>{s.n}</span>
              </div>
              <h3 style={{fontFamily:"var(--font-display)",fontSize:"20px",fontWeight:700,color:"var(--text)",marginBottom:"12px"}}>{s.title}</h3>
              <p style={{fontFamily:"var(--font-body)",fontSize:"15px",color:"var(--text2)",lineHeight:"26px",margin:0}}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedConsultants({ onNavigate, onViewConsultant }) {
  const featured = CONSULTANTS.filter(c => c.featured).concat(CONSULTANTS.filter(c => !c.featured)).slice(0,4);
  return (
    <section style={{padding:"96px 24px",background:"var(--surface)"}}>
      <div style={{maxWidth:1200,margin:"0 auto"}}>
        <div style={{display:"flex",alignItems:"flex-end",justifyContent:"space-between",marginBottom:"48px",flexWrap:"wrap",gap:"16px"}}>
          <div>
            <SectionLabel text="Featured Experts" />
            <h2 style={{fontFamily:"var(--font-display)",fontSize:"40px",fontWeight:700,color:"var(--text)",lineHeight:"50px",margin:0}}>Vetted experts, ready to help.</h2>
          </div>
          <button onClick={() => onNavigate("directory")} style={{background:"none",border:"none",cursor:"pointer",fontFamily:"var(--font-body)",fontSize:"16px",fontWeight:500,color:"var(--accent)",padding:0}}
            onMouseEnter={e=>e.currentTarget.style.color="var(--accent-dark)"}
            onMouseLeave={e=>e.currentTarget.style.color="var(--accent)"}>View all consultants →</button>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(270px,1fr))",gap:"20px"}}>
          {featured.map(c => <ConsultantCard key={c.id} consultant={c} onClick={() => onViewConsultant(c.slug)} />)}
        </div>
      </div>
    </section>
  );
}

function FeaturedResources({ onNavigate }) {
  const articles = ARTICLES.slice(0,3);
  const catColors = {"Finance & Compliance":"#2D7B4F","Starting Out":"#4A7EC4","Kitchen & Design":"#2D7B4F","Branding & Marketing":"#D67729","Operations":"#9B59B6","Location & Real Estate":"#16A085"};
  return (
    <section style={{padding:"96px 24px",background:"var(--bg2)"}}>
      <div style={{maxWidth:1200,margin:"0 auto"}}>
        <div style={{display:"flex",alignItems:"flex-end",justifyContent:"space-between",marginBottom:"48px",flexWrap:"wrap",gap:"16px"}}>
          <div>
            <SectionLabel text="Resources" />
            <h2 style={{fontFamily:"var(--font-display)",fontSize:"40px",fontWeight:700,color:"var(--text)",lineHeight:"50px",margin:0}}>Knowledge to make better decisions.</h2>
          </div>
          <button onClick={() => onNavigate("resources")} style={{background:"none",border:"none",cursor:"pointer",fontFamily:"var(--font-body)",fontSize:"16px",fontWeight:500,color:"var(--accent)",padding:0}}
            onMouseEnter={e=>e.currentTarget.style.color="var(--accent-dark)"}
            onMouseLeave={e=>e.currentTarget.style.color="var(--accent)"}>Browse all articles →</button>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"24px"}}>
          {articles.map(a => (
            <div key={a.id} onClick={() => onNavigate("resources")} style={{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:"20px",overflow:"hidden",cursor:"pointer",transition:"all 0.2s"}}
              onMouseEnter={e=>{e.currentTarget.style.boxShadow="var(--shadow-card)";e.currentTarget.style.transform="translateY(-3px)"}}
              onMouseLeave={e=>{e.currentTarget.style.boxShadow="none";e.currentTarget.style.transform="translateY(0)"}}>
              <div style={{height:"160px",background:`repeating-linear-gradient(45deg,var(--bg2) 0,var(--bg2) 7px,var(--bg) 7px,var(--bg) 14px)`,display:"flex",alignItems:"center",justifyContent:"center"}}>
                <span style={{fontFamily:"var(--font-body)",fontSize:"11px",color:"var(--text3)"}}>article image</span>
              </div>
              <div style={{padding:"22px"}}>
                <div style={{display:"flex",alignItems:"center",gap:"8px",marginBottom:"10px"}}>
                  <span style={{background:"var(--accent-light)",color:"var(--accent)",borderRadius:"9999px",padding:"3px 10px",fontSize:"11px",fontWeight:600,fontFamily:"var(--font-body)",letterSpacing:"0.04em"}}>{a.category}</span>
                  <span style={{fontFamily:"var(--font-body)",fontSize:"12px",color:"var(--text3)"}}>{a.readTime}</span>
                </div>
                <h3 style={{fontFamily:"var(--font-display)",fontSize:"18px",fontWeight:600,color:"var(--text)",lineHeight:"28px",marginBottom:"10px"}}>{a.title}</h3>
                <p style={{fontFamily:"var(--font-body)",fontSize:"14px",color:"var(--text2)",lineHeight:"22px",margin:"0 0 14px",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"}}>{a.excerpt}</p>
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
    <section style={{padding:"96px 24px",background:"var(--text)",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",inset:0,pointerEvents:"none"}}>
        <div style={{position:"absolute",top:"-20%",right:"5%",width:"500px",height:"500px",borderRadius:"50%",background:"rgba(45,123,79,0.12)"}} />
        <div style={{position:"absolute",bottom:"-15%",left:"-5%",width:"400px",height:"400px",borderRadius:"50%",background:"rgba(214,119,41,0.08)"}} />
      </div>
      <div style={{maxWidth:760,margin:"0 auto",textAlign:"center",position:"relative"}}>
        <SectionLabel text="The Plattr Ecosystem" orange />
        <h2 style={{fontFamily:"var(--font-display)",fontSize:"40px",fontWeight:700,color:"white",lineHeight:"50px",marginBottom:"20px"}}>
          Ready to build your restaurant?
        </h2>
        <p style={{fontFamily:"var(--font-body)",fontSize:"18px",fontWeight:400,color:"rgba(255,255,255,0.7)",lineHeight:"28px",marginBottom:"44px",maxWidth:460,margin:"0 auto 44px"}}>
          Join 300+ founders already using Plattr to find trusted hospitality consultants.
        </p>
        <div style={{display:"flex",gap:"14px",justifyContent:"center",flexWrap:"wrap"}}>
          <PrimaryBtn large onClick={() => onAuthOpen("signup")}>Create Free Account</PrimaryBtn>
          <OutlineBtn dark large onClick={() => onNavigate("tools")}>Try the Free Tools</OutlineBtn>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { HomePage, SectionLabel, PrimaryBtn, OutlineBtn });
