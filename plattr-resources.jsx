
// Plattr — Resources Hub + Article View

function ResourcesPage({ onNavigate }) {
  const [activeCategory, setActiveCategory] = React.useState("All");
  const [search, setSearch] = React.useState("");

  const catColors = {
    "Finance & Compliance":"#C4714A","Starting Out":"#4A7EC4",
    "Kitchen & Design":"#4A9C6A","Branding & Marketing":"#C4A84A",
    "Operations":"#A44AC4","Location & Real Estate":"#4AC4B8"
  };

  const filtered = ARTICLES.filter(a => {
    const matchCat = activeCategory === "All" || a.category === activeCategory;
    const q = search.toLowerCase();
    const matchSearch = !q || a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q) || a.author.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  const featured = ARTICLES[0];
  const rest = filtered.filter(a => a.id !== featured.id || activeCategory !== "All" || search);
  const showFeatured = activeCategory === "All" && !search;

  return (
    <div style={{minHeight:"100vh",background:"var(--bg)",paddingTop:64}}>
      {/* Header */}
      <div style={{background:"var(--text)",padding:"56px 24px 48px"}}>
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          <div style={{fontFamily:"var(--font-body)",fontSize:"13px",fontWeight:600,color:"rgba(255,255,255,0.5)",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:"12px"}}>Resources & Guides</div>
          <h1 style={{fontFamily:"var(--font-display)",fontSize:"clamp(32px,4vw,52px)",fontWeight:700,color:"white",letterSpacing:"-0.03em",margin:"0 0 16px",lineHeight:1.1}}>
            Everything you need to know<br/>before you open.
          </h1>
          <p style={{fontFamily:"var(--font-body)",fontSize:"17px",color:"rgba(255,255,255,0.55)",margin:"0 0 32px",maxWidth:520,lineHeight:1.6}}>
            Expert-written guides on finance, kitchen design, branding, operations, and more. {ARTICLES.length} articles and counting.
          </p>
          {/* Search */}
          <div style={{position:"relative",maxWidth:480}}>
            <svg style={{position:"absolute",left:16,top:"50%",transform:"translateY(-50%)",opacity:0.4}} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search articles…"
              style={{width:"100%",padding:"13px 16px 13px 48px",border:"none",borderRadius:"10px",background:"rgba(255,255,255,0.1)",fontFamily:"var(--font-body)",fontSize:"15px",color:"white",outline:"none",boxSizing:"border-box"}} />
          </div>
        </div>
      </div>

      {/* Category tabs */}
      <div style={{borderBottom:"1px solid var(--border)",background:"white",position:"sticky",top:64,zIndex:10}}>
        <div style={{maxWidth:1100,margin:"0 auto",padding:"0 24px",display:"flex",gap:"0",overflowX:"auto"}}>
          {["All",...ARTICLE_CATEGORIES].map(cat => (
            <button key={cat} onClick={()=>setActiveCategory(cat)} style={{
              background:"none",border:"none",cursor:"pointer",padding:"16px 20px",fontFamily:"var(--font-body)",fontSize:"14px",fontWeight:activeCategory===cat?600:400,
              color:activeCategory===cat?"var(--accent)":"var(--text2)",
              borderBottom:activeCategory===cat?"2px solid var(--accent)":"2px solid transparent",
              whiteSpace:"nowrap",transition:"color 0.15s",marginBottom:"-1px"
            }}>{cat}</button>
          ))}
        </div>
      </div>

      <div style={{maxWidth:1100,margin:"0 auto",padding:"40px 24px"}}>
        {/* Featured article */}
        {showFeatured && (
          <div style={{background:"white",border:"1px solid var(--border)",borderRadius:"16px",overflow:"hidden",marginBottom:"40px",display:"grid",gridTemplateColumns:"1fr 420px",cursor:"pointer",transition:"all 0.2s"}}
            onMouseEnter={e=>{e.currentTarget.style.boxShadow="0 8px 40px rgba(0,0,0,0.1)";e.currentTarget.style.transform="translateY(-2px)"}}
            onMouseLeave={e=>{e.currentTarget.style.boxShadow="none";e.currentTarget.style.transform="translateY(0)"}}>
            <div style={{padding:"40px"}}>
              <div style={{display:"inline-block",background:catColors[featured.category]||"var(--accent)",color:"white",borderRadius:"6px",padding:"4px 10px",fontFamily:"var(--font-body)",fontSize:"11px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:"16px"}}>{featured.category}</div>
              <h2 style={{fontFamily:"var(--font-display)",fontSize:"28px",fontWeight:700,color:"var(--text)",lineHeight:1.25,letterSpacing:"-0.02em",marginBottom:"16px"}}>{featured.title}</h2>
              <p style={{fontFamily:"var(--font-body)",fontSize:"16px",color:"var(--text2)",lineHeight:1.65,marginBottom:"24px"}}>{featured.excerpt}</p>
              <div style={{display:"flex",alignItems:"center",gap:"16px"}}>
                <div style={{width:36,height:36,borderRadius:"50%",background:"var(--bg2)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"var(--font-body)",fontWeight:700,fontSize:"13px",color:"var(--text2)"}}>{featured.author.split(" ").map(w=>w[0]).join("")}</div>
                <div>
                  <div style={{fontFamily:"var(--font-body)",fontSize:"14px",fontWeight:500,color:"var(--text)"}}>{featured.author}</div>
                  <div style={{fontFamily:"var(--font-body)",fontSize:"13px",color:"var(--text3)"}}>{featured.date} · {featured.readTime}</div>
                </div>
              </div>
            </div>
            <div style={{background:`repeating-linear-gradient(45deg,var(--bg2) 0,var(--bg2) 6px,var(--bg) 6px,var(--bg) 12px)`,display:"flex",alignItems:"center",justifyContent:"center"}}>
              <span style={{fontFamily:"var(--font-body)",fontSize:"12px",color:"var(--text3)"}}>featured article image</span>
            </div>
          </div>
        )}

        {/* Article grid */}
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:"24px"}}>
          {(showFeatured ? rest : filtered).map(a => (
            <ArticleCard key={a.id} article={a} catColor={catColors[a.category]} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{textAlign:"center",padding:"80px",background:"white",borderRadius:"14px",border:"1px solid var(--border)"}}>
            <div style={{fontSize:"40px",marginBottom:"16px"}}>📚</div>
            <p style={{fontFamily:"var(--font-body)",fontSize:"16px",color:"var(--text2)"}}>No articles match your search. Try different keywords.</p>
          </div>
        )}

        {/* Newsletter CTA */}
        <div style={{background:"var(--accent-light)",border:"1px solid rgba(196,113,74,0.2)",borderRadius:"16px",padding:"40px",textAlign:"center",marginTop:"48px"}}>
          <h3 style={{fontFamily:"var(--font-display)",fontSize:"24px",fontWeight:700,color:"var(--text)",marginBottom:"8px",letterSpacing:"-0.02em"}}>2 new articles every week.</h3>
          <p style={{fontFamily:"var(--font-body)",fontSize:"15px",color:"var(--text2)",marginBottom:"20px"}}>Get the latest guides on restaurant finance, design, and operations — straight to your inbox.</p>
          <div style={{display:"flex",gap:"10px",justifyContent:"center",maxWidth:420,margin:"0 auto"}}>
            <input placeholder="your@email.com" style={{flex:1,padding:"11px 16px",border:"1px solid var(--border)",borderRadius:"9px",fontFamily:"var(--font-body)",fontSize:"14px",color:"var(--text)",background:"white",outline:"none"}} />
            <button style={{background:"var(--accent)",border:"none",borderRadius:"9px",padding:"11px 20px",cursor:"pointer",fontFamily:"var(--font-body)",fontSize:"14px",fontWeight:600,color:"white",whiteSpace:"nowrap"}}>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArticleCard({ article, catColor }) {
  return (
    <div style={{background:"white",border:"1px solid var(--border)",borderRadius:"14px",overflow:"hidden",cursor:"pointer",transition:"all 0.2s"}}
      onMouseEnter={e=>{e.currentTarget.style.boxShadow="0 8px 32px rgba(0,0,0,0.08)";e.currentTarget.style.transform="translateY(-2px)"}}
      onMouseLeave={e=>{e.currentTarget.style.boxShadow="none";e.currentTarget.style.transform="translateY(0)"}}>
      <div style={{height:140,background:`repeating-linear-gradient(45deg,var(--bg2) 0,var(--bg2) 6px,var(--bg) 6px,var(--bg) 12px)`,display:"flex",alignItems:"center",justifyContent:"center"}}>
        <span style={{fontFamily:"var(--font-body)",fontSize:"11px",color:"var(--text3)"}}>article thumbnail</span>
      </div>
      <div style={{padding:"20px"}}>
        <div style={{display:"flex",alignItems:"center",gap:"8px",marginBottom:"10px"}}>
          <span style={{fontFamily:"var(--font-body)",fontSize:"11px",fontWeight:700,color:catColor||"var(--accent)",textTransform:"uppercase",letterSpacing:"0.06em"}}>{article.category}</span>
          <span style={{color:"var(--border)"}}>·</span>
          <span style={{fontFamily:"var(--font-body)",fontSize:"12px",color:"var(--text3)"}}>{article.readTime}</span>
        </div>
        <h3 style={{fontFamily:"var(--font-display)",fontSize:"17px",fontWeight:600,color:"var(--text)",lineHeight:1.35,marginBottom:"10px",letterSpacing:"-0.01em"}}>{article.title}</h3>
        <p style={{fontFamily:"var(--font-body)",fontSize:"13px",color:"var(--text2)",lineHeight:1.6,margin:"0 0 14px",display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden"}}>{article.excerpt}</p>
        <div style={{display:"flex",alignItems:"center",gap:"8px",paddingTop:"12px",borderTop:"1px solid var(--bg2)"}}>
          <div style={{width:28,height:28,borderRadius:"50%",background:"var(--bg2)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"var(--font-body)",fontWeight:700,fontSize:"11px",color:"var(--text2)",flexShrink:0}}>{article.author.split(" ").map(w=>w[0]).join("")}</div>
          <span style={{fontFamily:"var(--font-body)",fontSize:"12px",color:"var(--text3)"}}>{article.author} · {article.date}</span>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ResourcesPage });
