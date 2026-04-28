
// Plattr — Resources Hub (Design System v2)

function ResourcesPage({ onNavigate }) {
  const [activeCategory, setActiveCategory] = React.useState("All");
  const [search, setSearch] = React.useState("");

  const catColors = {
    "Finance & Compliance": "#2D7B4F",
    "Starting Out":         "#4A7EC4",
    "Kitchen & Design":     "#2D7B4F",
    "Branding & Marketing": "#D67729",
    "Operations":           "#9B59B6",
    "Location & Real Estate":"#16A085"
  };

  const filtered = ARTICLES.filter(a => {
    const matchCat = activeCategory === "All" || a.category === activeCategory;
    const q = search.toLowerCase();
    const matchSearch = !q || a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q) || a.author.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  const featured = ARTICLES[0];
  const showFeatured = activeCategory === "All" && !search;
  const rest = showFeatured ? filtered.filter(a => a.id !== featured.id) : filtered;

  return (
    <div style={{minHeight:"100vh",background:"var(--bg)",paddingTop:68}}>
      {/* Header */}
      <div style={{background:"rgb(26,26,26)",padding:"60px 24px 52px"}}>
        <div style={{maxWidth:1100,margin:"0 auto"}}>
          <div style={{fontFamily:"var(--font-body)",fontSize:"22.4px",fontWeight:600,letterSpacing:"1.792px",textTransform:"uppercase",color:"var(--accent)",marginBottom:"14px"}}>Resources & Guides</div>
          <h1 style={{fontFamily:"var(--font-display)",fontSize:"clamp(32px,4vw,54px)",fontWeight:700,color:"white",letterSpacing:"-1.5px",margin:"0 0 18px",lineHeight:1.1}}>
            Everything you need to know<br/>before you open.
          </h1>
          <p style={{fontFamily:"var(--font-body)",fontSize:"17px",color:"rgba(255,255,255,0.6)",margin:"0 0 36px",maxWidth:500,lineHeight:"28px"}}>
            Expert-written guides on finance, kitchen design, branding, and operations. {ARTICLES.length} articles and counting.
          </p>
          <div style={{position:"relative",maxWidth:520,background:"white",borderRadius:"24px",boxShadow:"var(--shadow-search)",display:"flex",alignItems:"center",padding:"6px 6px 6px 20px"}}>
            <svg style={{flexShrink:0,opacity:0.4}} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search articles…"
              style={{flex:1,border:"none",outline:"none",fontFamily:"var(--font-body)",fontSize:"15px",color:"var(--text)",padding:"8px 12px",background:"transparent"}} />
          </div>
        </div>
      </div>

      {/* Category tabs */}
      <div style={{borderBottom:"1px solid var(--border)",background:"var(--surface)",position:"sticky",top:68,zIndex:10}}>
        <div style={{maxWidth:1100,margin:"0 auto",padding:"0 24px",display:"flex",overflowX:"auto"}}>
          {["All",...ARTICLE_CATEGORIES].map(cat => (
            <button key={cat} onClick={()=>setActiveCategory(cat)} style={{
              background:"none",border:"none",cursor:"pointer",padding:"16px 18px",
              fontFamily:"var(--font-body)",fontSize:"14px",fontWeight:activeCategory===cat?600:400,
              color:activeCategory===cat?"var(--accent)":"var(--text2)",
              borderBottom:activeCategory===cat?"2px solid var(--accent)":"2px solid transparent",
              whiteSpace:"nowrap",transition:"color 0.15s",marginBottom:"-1px"
            }}>{cat}</button>
          ))}
        </div>
      </div>

      <div style={{maxWidth:1100,margin:"0 auto",padding:"48px 24px"}}>
        {/* Featured article */}
        {showFeatured && (
          <div style={{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:"20px",overflow:"hidden",marginBottom:"40px",display:"grid",gridTemplateColumns:"1fr 380px",cursor:"pointer",transition:"all 0.2s",boxShadow:"var(--shadow-sm)"}}
            onMouseEnter={e=>{e.currentTarget.style.boxShadow="var(--shadow-card)";e.currentTarget.style.transform="translateY(-2px)"}}
            onMouseLeave={e=>{e.currentTarget.style.boxShadow="var(--shadow-sm)";e.currentTarget.style.transform="translateY(0)"}}>
            <div style={{padding:"40px"}}>
              <span style={{background:"var(--accent-light)",color:"var(--accent)",borderRadius:"9999px",padding:"5px 14px",fontFamily:"var(--font-body)",fontSize:"12px",fontWeight:600,display:"inline-block",marginBottom:"18px"}}>{featured.category}</span>
              <h2 style={{fontFamily:"var(--font-display)",fontSize:"28px",fontWeight:700,color:"var(--text)",lineHeight:"36px",letterSpacing:"-0.5px",marginBottom:"16px"}}>{featured.title}</h2>
              <p style={{fontFamily:"var(--font-body)",fontSize:"16px",color:"var(--text2)",lineHeight:"26px",marginBottom:"24px"}}>{featured.excerpt}</p>
              <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
                <div style={{width:36,height:36,borderRadius:"50%",background:"var(--bg2)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"var(--font-display)",fontWeight:700,fontSize:"13px",color:"var(--text2)"}}>{featured.author.split(" ").map(w=>w[0]).join("")}</div>
                <div>
                  <div style={{fontFamily:"var(--font-body)",fontSize:"14px",fontWeight:500,color:"var(--text)"}}>{featured.author}</div>
                  <div style={{fontFamily:"var(--font-body)",fontSize:"13px",color:"var(--text3)"}}>{featured.date} · {featured.readTime}</div>
                </div>
              </div>
            </div>
            <div style={{background:`repeating-linear-gradient(45deg,var(--bg2) 0,var(--bg2) 7px,var(--bg) 7px,var(--bg) 14px)`,display:"flex",alignItems:"center",justifyContent:"center"}}>
              <span style={{fontFamily:"var(--font-body)",fontSize:"12px",color:"var(--text3)"}}>featured image</span>
            </div>
          </div>
        )}

        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:"24px"}}>
          {rest.map(a => <ArticleCard key={a.id} article={a} catColor={catColors[a.category]} />)}
        </div>

        {filtered.length === 0 && (
          <div style={{textAlign:"center",padding:"80px",background:"var(--surface)",borderRadius:"20px",border:"1px solid var(--border)"}}>
            <div style={{fontSize:"40px",marginBottom:"16px"}}>📚</div>
            <p style={{fontFamily:"var(--font-body)",fontSize:"16px",color:"var(--text2)"}}>No articles match your search.</p>
          </div>
        )}

        {/* Newsletter */}
        <div style={{background:"var(--accent-light)",border:"1px solid rgba(45,123,79,0.15)",borderRadius:"20px",padding:"48px",textAlign:"center",marginTop:"56px"}}>
          <div style={{fontFamily:"var(--font-body)",fontSize:"22.4px",fontWeight:600,letterSpacing:"1.792px",textTransform:"uppercase",color:"var(--accent)",marginBottom:"12px"}}>Weekly digest</div>
          <h3 style={{fontFamily:"var(--font-display)",fontSize:"28px",fontWeight:700,color:"var(--text)",marginBottom:"10px",letterSpacing:"-0.5px"}}>2 new articles every week.</h3>
          <p style={{fontFamily:"var(--font-body)",fontSize:"15px",color:"var(--text2)",marginBottom:"24px",lineHeight:"24px"}}>The best guides on restaurant finance, design, and operations — straight to your inbox.</p>
          <div style={{display:"flex",gap:"10px",justifyContent:"center",maxWidth:420,margin:"0 auto"}}>
            <input placeholder="your@email.com" style={{flex:1,padding:"12px 16px",border:"1px solid var(--border)",borderRadius:"16px",fontFamily:"var(--font-body)",fontSize:"14px",color:"var(--text)",background:"white",outline:"none"}} />
            <button style={{background:"var(--accent)",border:"none",borderRadius:"16px",padding:"12px 22px",cursor:"pointer",fontFamily:"var(--font-body)",fontSize:"14px",fontWeight:500,color:"white",whiteSpace:"nowrap",transition:"background 0.15s"}}
              onMouseEnter={e=>e.currentTarget.style.background="var(--accent-dark)"} onMouseLeave={e=>e.currentTarget.style.background="var(--accent)"}>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArticleCard({ article, catColor }) {
  return (
    <div style={{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:"20px",overflow:"hidden",cursor:"pointer",transition:"all 0.2s",boxShadow:"none"}}
      onMouseEnter={e=>{e.currentTarget.style.boxShadow="var(--shadow-card)";e.currentTarget.style.transform="translateY(-3px)"}}
      onMouseLeave={e=>{e.currentTarget.style.boxShadow="none";e.currentTarget.style.transform="translateY(0)"}}>
      <div style={{height:144,background:`repeating-linear-gradient(45deg,var(--bg2) 0,var(--bg2) 7px,var(--bg) 7px,var(--bg) 14px)`,display:"flex",alignItems:"center",justifyContent:"center"}}>
        <span style={{fontFamily:"var(--font-body)",fontSize:"11px",color:"var(--text3)"}}>article image</span>
      </div>
      <div style={{padding:"22px"}}>
        <div style={{display:"flex",alignItems:"center",gap:"8px",marginBottom:"12px"}}>
          <span style={{background:"var(--accent-light)",color:"var(--accent)",borderRadius:"9999px",padding:"3px 10px",fontSize:"11px",fontWeight:600,fontFamily:"var(--font-body)"}}>{article.category}</span>
          <span style={{fontFamily:"var(--font-body)",fontSize:"12px",color:"var(--text3)"}}>{article.readTime}</span>
        </div>
        <h3 style={{fontFamily:"var(--font-display)",fontSize:"18px",fontWeight:600,color:"var(--text)",lineHeight:"28px",marginBottom:"10px"}}>{article.title}</h3>
        <p style={{fontFamily:"var(--font-body)",fontSize:"14px",color:"var(--text2)",lineHeight:"22px",margin:"0 0 16px",display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden"}}>{article.excerpt}</p>
        <div style={{display:"flex",alignItems:"center",gap:"8px",paddingTop:"14px",borderTop:"1px solid var(--border)"}}>
          <div style={{width:28,height:28,borderRadius:"50%",background:"var(--bg2)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"var(--font-display)",fontWeight:700,fontSize:"11px",color:"var(--text2)",flexShrink:0}}>{article.author.split(" ").map(w=>w[0]).join("")}</div>
          <span style={{fontFamily:"var(--font-body)",fontSize:"12px",color:"var(--text3)"}}>{article.author} · {article.date}</span>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ResourcesPage });
