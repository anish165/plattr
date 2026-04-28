
// Plattr — News Feed (Design System v2)

const NEWS_CAT_COLORS = {
  "Industry Trends":      "#2D7B4F",
  "New Openings":         "#4A7EC4",
  "Regulation & Policy":  "#C44A6E",
  "Funding & Investment": "#D67729",
  "Technology":           "#9B59B6",
};

function NewsPage() {
  const [activeCategory, setActiveCategory] = React.useState("All");
  const filtered = activeCategory === "All" ? NEWS : NEWS.filter(n => n.category === activeCategory);

  return (
    <div style={{minHeight:"100vh",background:"var(--bg)",paddingTop:68}}>
      {/* Header */}
      <div style={{background:"rgb(26,26,26)",padding:"60px 24px 52px"}}>
        <div style={{maxWidth:900,margin:"0 auto"}}>
          <div style={{fontFamily:"var(--font-body)",fontSize:"22.4px",fontWeight:600,letterSpacing:"1.792px",textTransform:"uppercase",color:"var(--accent)",marginBottom:"14px"}}>Industry News</div>
          <h1 style={{fontFamily:"var(--font-display)",fontSize:"clamp(32px,4vw,54px)",fontWeight:700,color:"white",letterSpacing:"-1.5px",margin:"0 0 14px",lineHeight:1.1}}>
            India's F&B industry,<br/>in brief.
          </h1>
          <p style={{fontFamily:"var(--font-body)",fontSize:"17px",color:"rgba(255,255,255,0.6)",maxWidth:460,margin:0,lineHeight:"28px"}}>
            Curated news on openings, regulation, funding, and market trends. 3–5 items per week. Quality over frequency.
          </p>
        </div>
      </div>

      {/* Category tabs */}
      <div style={{borderBottom:"1px solid var(--border)",background:"var(--surface)",position:"sticky",top:68,zIndex:10}}>
        <div style={{maxWidth:900,margin:"0 auto",padding:"0 24px",display:"flex",overflowX:"auto"}}>
          {NEWS_CATEGORIES.map(cat => (
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

      <div style={{maxWidth:900,margin:"0 auto",padding:"48px 24px"}}>
        {/* Featured item */}
        {activeCategory === "All" && filtered.length > 0 && (
          <div style={{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:"20px",overflow:"hidden",marginBottom:"28px",cursor:"pointer",transition:"all 0.2s",display:"grid",gridTemplateColumns:"1fr 300px",boxShadow:"var(--shadow-sm)"}}
            onMouseEnter={e=>{e.currentTarget.style.boxShadow="var(--shadow-card)";e.currentTarget.style.transform="translateY(-2px)"}}
            onMouseLeave={e=>{e.currentTarget.style.boxShadow="var(--shadow-sm)";e.currentTarget.style.transform="translateY(0)"}}>
            <div style={{padding:"36px"}}>
              <div style={{display:"flex",alignItems:"center",gap:"10px",marginBottom:"16px"}}>
                <span style={{background:NEWS_CAT_COLORS[filtered[0].category]+"22",color:NEWS_CAT_COLORS[filtered[0].category]||"var(--accent)",borderRadius:"9999px",padding:"4px 12px",fontFamily:"var(--font-body)",fontSize:"12px",fontWeight:600}}>{filtered[0].category}</span>
                <span style={{fontFamily:"var(--font-body)",fontSize:"13px",color:"var(--text3)"}}>{filtered[0].date}</span>
              </div>
              <h2 style={{fontFamily:"var(--font-display)",fontSize:"24px",fontWeight:700,color:"var(--text)",lineHeight:"32px",letterSpacing:"-0.5px",marginBottom:"14px"}}>{filtered[0].headline}</h2>
              <p style={{fontFamily:"var(--font-body)",fontSize:"15px",color:"var(--text2)",lineHeight:"26px",marginBottom:"18px"}}>{filtered[0].summary}</p>
              <div style={{display:"flex",alignItems:"center",gap:"16px"}}>
                <span style={{fontFamily:"var(--font-body)",fontSize:"13px",color:"var(--text3)"}}>Source: <strong style={{color:"var(--text2)"}}>{filtered[0].source}</strong></span>
                <a href={filtered[0].link} style={{fontFamily:"var(--font-body)",fontSize:"13px",fontWeight:600,color:"var(--accent)",textDecoration:"none"}}
                  onMouseEnter={e=>e.currentTarget.style.color="var(--accent-dark)"}
                  onMouseLeave={e=>e.currentTarget.style.color="var(--accent)"}>Read full story →</a>
              </div>
            </div>
            <div style={{background:`repeating-linear-gradient(45deg,var(--bg2) 0,var(--bg2) 7px,var(--bg) 7px,var(--bg) 14px)`,display:"flex",alignItems:"center",justifyContent:"center"}}>
              <span style={{fontFamily:"var(--font-body)",fontSize:"11px",color:"var(--text3)",padding:"20px",textAlign:"center"}}>news image</span>
            </div>
          </div>
        )}

        {/* News list */}
        <div style={{display:"flex",flexDirection:"column",gap:"14px"}}>
          {(activeCategory==="All" ? filtered.slice(1) : filtered).map(item => (
            <NewsItem key={item.id} item={item} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{textAlign:"center",padding:"80px",background:"var(--surface)",borderRadius:"20px",border:"1px solid var(--border)"}}>
            <div style={{fontSize:"40px",marginBottom:"16px"}}>📰</div>
            <p style={{fontFamily:"var(--font-body)",fontSize:"16px",color:"var(--text2)"}}>No news in this category yet. Check back soon.</p>
          </div>
        )}

        {/* Subscribe */}
        <div style={{background:"rgb(26,26,26)",borderRadius:"20px",padding:"48px",textAlign:"center",marginTop:"56px"}}>
          <div style={{fontFamily:"var(--font-body)",fontSize:"22.4px",fontWeight:600,letterSpacing:"1.792px",textTransform:"uppercase",color:"var(--accent)",marginBottom:"12px"}}>Weekly Digest</div>
          <h3 style={{fontFamily:"var(--font-display)",fontSize:"28px",fontWeight:700,color:"white",marginBottom:"10px",letterSpacing:"-0.5px"}}>The week's best F&B news.</h3>
          <p style={{fontFamily:"var(--font-body)",fontSize:"15px",color:"rgba(255,255,255,0.55)",marginBottom:"28px",lineHeight:"24px",maxWidth:360,margin:"0 auto 28px"}}>Every Monday, no noise. The most important hospitality industry stories curated for Indian founders.</p>
          <div style={{display:"flex",gap:"10px",justifyContent:"center",maxWidth:400,margin:"0 auto"}}>
            <input placeholder="your@email.com" style={{flex:1,padding:"12px 16px",border:"1px solid rgba(255,255,255,0.15)",borderRadius:"16px",fontFamily:"var(--font-body)",fontSize:"14px",color:"white",background:"rgba(255,255,255,0.08)",outline:"none"}} />
            <button style={{background:"var(--accent)",border:"none",borderRadius:"16px",padding:"12px 22px",cursor:"pointer",fontFamily:"var(--font-body)",fontSize:"14px",fontWeight:500,color:"white",whiteSpace:"nowrap",transition:"background 0.15s"}}
              onMouseEnter={e=>e.currentTarget.style.background="var(--accent-dark)"} onMouseLeave={e=>e.currentTarget.style.background="var(--accent)"}>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function NewsItem({ item }) {
  const color = NEWS_CAT_COLORS[item.category] || "var(--accent)";
  return (
    <div style={{background:"var(--surface)",border:"1px solid var(--border)",borderRadius:"16px",padding:"24px",cursor:"pointer",transition:"all 0.2s",boxShadow:"none"}}
      onMouseEnter={e=>{e.currentTarget.style.boxShadow="var(--shadow-card)";e.currentTarget.style.borderColor=color;e.currentTarget.style.transform="translateY(-1px)"}}
      onMouseLeave={e=>{e.currentTarget.style.boxShadow="none";e.currentTarget.style.borderColor="var(--border)";e.currentTarget.style.transform="translateY(0)"}}>
      <div style={{display:"flex",alignItems:"center",gap:"10px",marginBottom:"12px",flexWrap:"wrap"}}>
        <span style={{background:color+"18",color:color,borderRadius:"9999px",padding:"4px 12px",fontFamily:"var(--font-body)",fontSize:"11px",fontWeight:600,textTransform:"uppercase",letterSpacing:"0.04em"}}>{item.category}</span>
        <span style={{fontFamily:"var(--font-body)",fontSize:"13px",color:"var(--text3)"}}>{item.date}</span>
        <span style={{fontFamily:"var(--font-body)",fontSize:"13px",color:"var(--text3)"}}>· {item.source}</span>
      </div>
      <h3 style={{fontFamily:"var(--font-display)",fontSize:"19px",fontWeight:700,color:"var(--text)",lineHeight:"28px",letterSpacing:"-0.3px",marginBottom:"10px"}}>{item.headline}</h3>
      <p style={{fontFamily:"var(--font-body)",fontSize:"14px",color:"var(--text2)",lineHeight:"22px",margin:"0 0 14px"}}>{item.summary}</p>
      <a href={item.link} style={{fontFamily:"var(--font-body)",fontSize:"13px",fontWeight:600,color:"var(--accent)",textDecoration:"none",transition:"color 0.15s"}}
        onMouseEnter={e=>e.currentTarget.style.color="var(--accent-dark)"}
        onMouseLeave={e=>e.currentTarget.style.color="var(--accent)"}>Read full story →</a>
    </div>
  );
}

Object.assign(window, { NewsPage });
