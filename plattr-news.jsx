
// Plattr — News Feed

const NEWS_CAT_COLORS = {
  "Industry Trends": "#4A7EC4",
  "New Openings": "#4AC48A",
  "Regulation & Policy": "#C44A6E",
  "Funding & Investment": "#C4A84A",
  "Technology": "#A44AC4",
};

function NewsPage() {
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filtered = activeCategory === "All" ? NEWS : NEWS.filter(n => n.category === activeCategory);

  return (
    <div style={{minHeight:"100vh",background:"var(--bg)",paddingTop:64}}>
      {/* Header */}
      <div style={{background:"var(--text)",padding:"56px 24px 48px"}}>
        <div style={{maxWidth:900,margin:"0 auto"}}>
          <div style={{fontFamily:"var(--font-body)",fontSize:"13px",fontWeight:600,color:"rgba(255,255,255,0.5)",textTransform:"uppercase",letterSpacing:"0.1em",marginBottom:"12px"}}>Industry News</div>
          <h1 style={{fontFamily:"var(--font-display)",fontSize:"clamp(32px,4vw,50px)",fontWeight:700,color:"white",letterSpacing:"-0.03em",margin:"0 0 14px",lineHeight:1.1}}>
            India's F&B industry,<br/>in brief.
          </h1>
          <p style={{fontFamily:"var(--font-body)",fontSize:"17px",color:"rgba(255,255,255,0.55)",maxWidth:480,margin:0,lineHeight:1.6}}>
            Curated news on openings, regulation, funding, and market trends. 3–5 items per week. Quality over frequency.
          </p>
        </div>
      </div>

      {/* Category tabs */}
      <div style={{borderBottom:"1px solid var(--border)",background:"white",position:"sticky",top:64,zIndex:10}}>
        <div style={{maxWidth:900,margin:"0 auto",padding:"0 24px",display:"flex",gap:0,overflowX:"auto"}}>
          {NEWS_CATEGORIES.map(cat => (
            <button key={cat} onClick={()=>setActiveCategory(cat)} style={{
              background:"none",border:"none",cursor:"pointer",padding:"15px 18px",
              fontFamily:"var(--font-body)",fontSize:"14px",fontWeight:activeCategory===cat?600:400,
              color:activeCategory===cat?"var(--accent)":"var(--text2)",
              borderBottom:activeCategory===cat?"2px solid var(--accent)":"2px solid transparent",
              whiteSpace:"nowrap",transition:"color 0.15s",marginBottom:"-1px"
            }}>{cat}</button>
          ))}
        </div>
      </div>

      <div style={{maxWidth:900,margin:"0 auto",padding:"40px 24px"}}>
        {/* Featured news item */}
        {activeCategory === "All" && filtered.length > 0 && (
          <div style={{background:"white",border:"1px solid var(--border)",borderRadius:"16px",overflow:"hidden",marginBottom:"28px",cursor:"pointer",transition:"all 0.2s",display:"grid",gridTemplateColumns:"1fr 320px"}}
            onMouseEnter={e=>{e.currentTarget.style.boxShadow="0 8px 40px rgba(0,0,0,0.1)";e.currentTarget.style.transform="translateY(-2px)"}}
            onMouseLeave={e=>{e.currentTarget.style.boxShadow="none";e.currentTarget.style.transform="translateY(0)"}}>
            <div style={{padding:"32px"}}>
              <div style={{display:"flex",alignItems:"center",gap:"10px",marginBottom:"14px"}}>
                <span style={{background:NEWS_CAT_COLORS[filtered[0].category]||"var(--accent)",color:"white",borderRadius:"6px",padding:"4px 10px",fontFamily:"var(--font-body)",fontSize:"11px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em"}}>{filtered[0].category}</span>
                <span style={{fontFamily:"var(--font-body)",fontSize:"13px",color:"var(--text3)"}}>{filtered[0].date}</span>
              </div>
              <h2 style={{fontFamily:"var(--font-display)",fontSize:"22px",fontWeight:700,color:"var(--text)",lineHeight:1.3,letterSpacing:"-0.02em",marginBottom:"12px"}}>{filtered[0].headline}</h2>
              <p style={{fontFamily:"var(--font-body)",fontSize:"15px",color:"var(--text2)",lineHeight:1.65,marginBottom:"16px"}}>{filtered[0].summary}</p>
              <div style={{display:"flex",alignItems:"center",gap:"16px"}}>
                <span style={{fontFamily:"var(--font-body)",fontSize:"13px",color:"var(--text3)"}}>Source: <strong style={{color:"var(--text2)"}}>{filtered[0].source}</strong></span>
                <a href={filtered[0].link} style={{fontFamily:"var(--font-body)",fontSize:"13px",fontWeight:600,color:"var(--accent)",textDecoration:"none"}}>Read full story →</a>
              </div>
            </div>
            <div style={{background:`repeating-linear-gradient(45deg,var(--bg2) 0,var(--bg2) 6px,var(--bg) 6px,var(--bg) 12px)`,display:"flex",alignItems:"center",justifyContent:"center"}}>
              <span style={{fontFamily:"var(--font-body)",fontSize:"12px",color:"var(--text3)",padding:"20px",textAlign:"center"}}>news image</span>
            </div>
          </div>
        )}

        {/* News list */}
        <div style={{display:"flex",flexDirection:"column",gap:"16px"}}>
          {(activeCategory === "All" ? filtered.slice(1) : filtered).map(item => (
            <NewsItem key={item.id} item={item} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{textAlign:"center",padding:"80px",background:"white",borderRadius:"14px",border:"1px solid var(--border)"}}>
            <div style={{fontSize:"40px",marginBottom:"16px"}}>📰</div>
            <p style={{fontFamily:"var(--font-body)",fontSize:"16px",color:"var(--text2)"}}>No news in this category yet. Check back soon.</p>
          </div>
        )}

        {/* Subscribe block */}
        <div style={{background:"var(--text)",borderRadius:"16px",padding:"40px",textAlign:"center",marginTop:"48px"}}>
          <h3 style={{fontFamily:"var(--font-display)",fontSize:"24px",fontWeight:700,color:"white",marginBottom:"8px",letterSpacing:"-0.02em"}}>Weekly F&B digest</h3>
          <p style={{fontFamily:"var(--font-body)",fontSize:"15px",color:"rgba(255,255,255,0.55)",marginBottom:"24px",lineHeight:1.6,maxWidth:380,margin:"0 auto 24px"}}>The week's most important hospitality industry news, every Monday. No noise.</p>
          <div style={{display:"flex",gap:"10px",justifyContent:"center",maxWidth:400,margin:"0 auto"}}>
            <input placeholder="your@email.com" style={{flex:1,padding:"11px 16px",border:"1px solid rgba(255,255,255,0.15)",borderRadius:"9px",fontFamily:"var(--font-body)",fontSize:"14px",color:"white",background:"rgba(255,255,255,0.1)",outline:"none"}} />
            <button style={{background:"var(--accent)",border:"none",borderRadius:"9px",padding:"11px 20px",cursor:"pointer",fontFamily:"var(--font-body)",fontSize:"14px",fontWeight:600,color:"white",whiteSpace:"nowrap"}}>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function NewsItem({ item }) {
  const color = NEWS_CAT_COLORS[item.category] || "var(--accent)";
  return (
    <div style={{background:"white",border:"1px solid var(--border)",borderRadius:"14px",padding:"24px",cursor:"pointer",transition:"all 0.2s"}}
      onMouseEnter={e=>{e.currentTarget.style.boxShadow="0 4px 24px rgba(0,0,0,0.07)";e.currentTarget.style.borderColor="var(--accent)"}}
      onMouseLeave={e=>{e.currentTarget.style.boxShadow="none";e.currentTarget.style.borderColor="var(--border)"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:"16px"}}>
        <div style={{flex:1}}>
          <div style={{display:"flex",alignItems:"center",gap:"10px",marginBottom:"10px",flexWrap:"wrap"}}>
            <span style={{background:color+"22",color:color,borderRadius:"6px",padding:"3px 9px",fontFamily:"var(--font-body)",fontSize:"11px",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em"}}>{item.category}</span>
            <span style={{fontFamily:"var(--font-body)",fontSize:"13px",color:"var(--text3)"}}>{item.date}</span>
            <span style={{fontFamily:"var(--font-body)",fontSize:"13px",color:"var(--text3)"}}>· {item.source}</span>
          </div>
          <h3 style={{fontFamily:"var(--font-display)",fontSize:"18px",fontWeight:700,color:"var(--text)",lineHeight:1.35,letterSpacing:"-0.01em",marginBottom:"10px"}}>{item.headline}</h3>
          <p style={{fontFamily:"var(--font-body)",fontSize:"14px",color:"var(--text2)",lineHeight:1.65,margin:"0 0 12px"}}>{item.summary}</p>
          <a href={item.link} style={{fontFamily:"var(--font-body)",fontSize:"13px",fontWeight:600,color:"var(--accent)",textDecoration:"none"}}>Read full story →</a>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { NewsPage });
