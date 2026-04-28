
// Plattr — Mock Data

const CONSULTANTS = [
  {
    id: 1, slug: "priya-sharma",
    name: "Priya Sharma",
    photo: null,
    initials: "PS",
    expertise: "Turnkey Restaurant Setup",
    tags: ["Turnkey", "Dine-in", "Fine Dining", "QSR"],
    city: "Mumbai",
    tagline: "From concept to opening day — end-to-end restaurant setup across formats.",
    bio: "With 14 years of experience setting up restaurants across Mumbai, Pune, and Goa, I've helped 60+ founders navigate the full journey from site selection to soft launch. I specialise in turnkey projects where a founder needs a single trusted partner rather than a fragmented vendor network. My approach starts with understanding your guest — who are they, what do they want, and how do we build an operation that delivers that consistently at your target economics.\n\nI've worked across formats: standalone fine dining, QSR chains, food courts, and hotel F&B. I bring a builder's mindset: structured timelines, vendor relationships, and a no-surprises approach to capex.",
    yearsExp: 14,
    projectTypes: ["New Restaurant", "Renovation", "QSR"],
    services: [
      { name: "Full Turnkey Setup", desc: "Concept to opening: space, kitchen, design, licences, staffing, soft launch." },
      { name: "Concept Development", desc: "Format, cuisine positioning, brand identity brief, menu architecture." },
      { name: "Vendor Coordination", desc: "Vetted kitchen equipment suppliers, FF&E, contractors, POS systems." },
      { name: "Pre-opening Training", desc: "SOP documentation and staff training for service, kitchen, and hygiene." }
    ],
    portfolio: [
      { name: "Ember, Lower Parel", location: "Mumbai", type: "Fine Dining", desc: "80-cover contemporary Indian restaurant. Full turnkey from raw space. 14-week delivery.", images: 3 },
      { name: "Wrap & Roll, Bandra", location: "Mumbai", type: "QSR", desc: "Fast casual wrap concept. Compact 400 sqft kitchen. Opened 3 outlets in 6 months.", images: 2 },
      { name: "The Grindhouse", location: "Pune", type: "Café", desc: "Specialty coffee + all-day dining. 60 covers. Focus on kitchen efficiency.", images: 4 }
    ],
    enquiries: 47, featured: true
  },
  {
    id: 2, slug: "rahul-mehta",
    name: "Rahul Mehta",
    photo: null,
    initials: "RM",
    expertise: "Kitchen Design",
    tags: ["Kitchen Design", "Cloud Kitchen", "Equipment", "Workflow"],
    city: "Bangalore",
    tagline: "High-efficiency kitchen layouts that cut waste and maximise throughput.",
    bio: "I'm a commercial kitchen consultant and certified kitchen designer with 11 years of experience. I've designed kitchens for everything from 3-star hotel banquets to 150 sqft ghost kitchens. My work is rooted in workflow — how does food move from prep to plate, and where does time and money leak?\n\nI work closely with chefs during the design phase, not just after. The most expensive kitchen mistakes happen when the designer and the chef never talk. I also have deep relationships with equipment vendors and can help you spec the right kit without over-investing.",
    yearsExp: 11,
    projectTypes: ["New Restaurant", "Cloud Kitchen", "Renovation"],
    services: [
      { name: "Kitchen Layout Design", desc: "Zone planning, flow optimisation, AutoCAD drawings, utility schematic." },
      { name: "Equipment Specification", desc: "BOQ preparation, brand comparisons, vendor negotiation support." },
      { name: "Cloud Kitchen Setup", desc: "Compact, multi-brand kitchen layouts optimised for delivery economics." },
      { name: "Kitchen Audit", desc: "Assessment of existing kitchens for efficiency, safety, and FSSAI compliance." }
    ],
    portfolio: [
      { name: "DarkKitchen.co Hub, Whitefield", location: "Bangalore", type: "Cloud Kitchen", desc: "6-brand ghost kitchen hub, 1800 sqft. Designed for max output in minimal space.", images: 5 },
      { name: "Taj Vivanta Banquet Kitchen", location: "Bangalore", type: "Hotel", desc: "Redesign of banquet prep kitchen. 40% throughput improvement post-renovation.", images: 3 }
    ],
    enquiries: 31, featured: true
  },
  {
    id: 3, slug: "ananya-iyer",
    name: "Ananya Iyer",
    photo: null,
    initials: "AI",
    expertise: "F&B Strategy",
    tags: ["F&B Strategy", "Menu Engineering", "Unit Economics", "Scaling"],
    city: "Delhi",
    tagline: "Unit economics and growth strategy for founders who want to scale, not just survive.",
    bio: "I spent 8 years as an F&B strategy consultant at a Big 4 firm before going independent in 2020. I work with restaurant founders and operators on the strategic questions: Is your menu priced right? Are your unit economics viable? Where are you leaking margin? Should you scale this model?\n\nI'm data-driven but practical. I don't just hand you a deck — I work alongside your team to implement, measure, and adjust. My clients range from single-outlet café founders to multi-city QSR operators.",
    yearsExp: 10,
    projectTypes: ["New Restaurant", "QSR", "Café"],
    services: [
      { name: "Unit Economics Audit", desc: "Deep-dive into your P&L: COGS, labour, rent ratios, and what to fix first." },
      { name: "Menu Engineering", desc: "Data-led menu redesign to improve contribution margin and drive high-value orders." },
      { name: "Scaling Roadmap", desc: "Outlet expansion plan with capital requirements, break-even modelling, risk assessment." },
      { name: "Investor Deck Prep", desc: "Financial modelling and narrative preparation for F&B fundraising." }
    ],
    portfolio: [
      { name: "BurgerBros Chain Optimisation", location: "Delhi NCR", type: "QSR", desc: "Margin recovery project for 12-outlet burger QSR. Achieved 8pt EBITDA improvement in 6 months.", images: 2 },
      { name: "Chai Stop Expansion", location: "Delhi", type: "Café", desc: "Scaled from 2 to 8 outlets. Unit economics modelling and SOP systemisation.", images: 3 }
    ],
    enquiries: 58, featured: false
  },
  {
    id: 4, slug: "vikram-nair",
    name: "Vikram Nair",
    photo: null,
    initials: "VN",
    expertise: "Branding & Concept",
    tags: ["Branding", "Concept Design", "Identity", "Positioning"],
    city: "Mumbai",
    tagline: "Restaurant brands that guests remember, talk about, and return to.",
    bio: "I run a boutique restaurant branding studio and have been building F&B brands since 2013. My work spans naming, positioning, visual identity, menu design, and the full brand expression across space and digital. I believe that the best restaurant brands have a clear point of view — and my job is to help founders discover and articulate theirs.\n\nI've worked with standalone restaurants, hotel F&B concepts, and FMCG-backed restaurant chains. My process is collaborative and fast — I'm not interested in 6-month branding projects that produce a PDF.",
    yearsExp: 12,
    projectTypes: ["New Restaurant", "Café", "QSR"],
    services: [
      { name: "Brand Identity", desc: "Name, logo, colour, typography, tone of voice — the full identity system." },
      { name: "Concept Development", desc: "Guest experience concept, positioning statement, cuisine and format definition." },
      { name: "Menu Design", desc: "Menu architecture, copy, and print/digital design." },
      { name: "Space Branding", desc: "Signage, wayfinding, branded touchpoints across the dining space." }
    ],
    portfolio: [
      { name: "Solis Café", location: "Mumbai", type: "Café", desc: "Full brand identity for a Mediterranean all-day café. Named, positioned, designed, and launched in 10 weeks.", images: 5 },
      { name: "Katta Street Food", location: "Mumbai", type: "QSR", desc: "Vibrant identity for a Maharashtrian street food chain. 4 outlets and growing.", images: 4 }
    ],
    enquiries: 39, featured: false
  },
  {
    id: 5, slug: "deepa-krishnan",
    name: "Deepa Krishnan",
    photo: null,
    initials: "DK",
    expertise: "Cloud Kitchen Setup",
    tags: ["Cloud Kitchen", "Delivery", "Multi-brand", "Operations"],
    city: "Bangalore",
    tagline: "Profitable delivery-first kitchens built for the age of aggregators.",
    bio: "I help founders set up cloud kitchens that actually make money. That sounds obvious, but most delivery-first operations are built without understanding aggregator economics, brand proliferation strategy, or delivery radius optimisation.\n\nI've set up 25+ cloud kitchens across Bangalore and Hyderabad since 2019. My consulting covers site selection (not all industrial spaces are equal), kitchen layout, aggregator onboarding strategy, multi-brand portfolio design, and the first 90 days of operations.",
    yearsExp: 7,
    projectTypes: ["Cloud Kitchen"],
    services: [
      { name: "Cloud Kitchen Feasibility", desc: "Location scouting, rental benchmarks, delivery radius analysis, format recommendation." },
      { name: "Kitchen Setup", desc: "Layout, equipment, licensing, aggregator setup." },
      { name: "Brand Portfolio Strategy", desc: "How many brands, what cuisines, how to position across Zomato/Swiggy." },
      { name: "Operations Playbook", desc: "SOPs, packaging specs, rating improvement plan, reorder systems." }
    ],
    portfolio: [
      { name: "FoodBox Hub, Koramangala", location: "Bangalore", type: "Cloud Kitchen", desc: "4-brand cloud kitchen. Reached ₹8L/month GMV within 90 days.", images: 3 },
      { name: "QuickEats, HSR Layout", location: "Bangalore", type: "Cloud Kitchen", desc: "Solo operator's first cloud kitchen. Full setup in 3 weeks.", images: 2 }
    ],
    enquiries: 22, featured: false
  },
  {
    id: 6, slug: "arjun-kapoor",
    name: "Arjun Kapoor",
    photo: null,
    initials: "AK",
    expertise: "QSR Operations",
    tags: ["QSR", "Operations", "SOPs", "Franchise"],
    city: "Delhi",
    tagline: "Scalable systems for quick service restaurants — from 1 to 100 outlets.",
    bio: "I spent 9 years in operations leadership at two major QSR chains before becoming an independent consultant. I've opened 80+ outlets across North India and understand what makes QSR systems work at scale — and what breaks them.\n\nI work with founders building their first QSR as well as operators looking to franchise. My focus areas: kitchen standardisation, SOP development, hiring and training systems, and franchise documentation.",
    yearsExp: 13,
    projectTypes: ["QSR", "New Restaurant"],
    services: [
      { name: "QSR Operations Setup", desc: "Full operations manual, SOP library, kitchen standards, vendor lists." },
      { name: "Franchise Readiness", desc: "FDD preparation, franchise operations manual, franchisee training programme." },
      { name: "Outlet Audit", desc: "On-ground assessment of operational consistency, hygiene, and speed of service." },
      { name: "Opening Support", desc: "On-site support for the first 2 weeks of a new QSR outlet." }
    ],
    portfolio: [
      { name: "RollZone QSR Chain", location: "Delhi NCR", type: "QSR", desc: "Built the full ops system for a 7-outlet roll chain. Now franchising.", images: 2 },
      { name: "Maggi Uncle", location: "Delhi", type: "QSR", desc: "Nostalgic Maggi concept. Helped systemise for replication. 3 outlets in 8 months.", images: 3 }
    ],
    enquiries: 18, featured: false
  },
  {
    id: 7, slug: "meera-patel",
    name: "Meera Patel",
    photo: null,
    initials: "MP",
    expertise: "Restaurant Branding",
    tags: ["Branding", "Social Media", "Marketing", "F&B Strategy"],
    city: "Ahmedabad",
    tagline: "Building restaurant brands that punch above their weight in a crowded market.",
    bio: "I've worked in restaurant marketing and branding for 9 years, based in Ahmedabad but working across Gujarat and Maharashtra. I started in digital marketing, moved into brand strategy, and now offer an integrated service that connects the two.\n\nMy typical client is a founder-run restaurant with ambitions but a limited marketing budget. I help them get maximum impact from every rupee — with a brand identity that works, a social presence that's consistent, and a launch plan that drives footfall.",
    yearsExp: 9,
    projectTypes: ["New Restaurant", "Café"],
    services: [
      { name: "Brand Strategy + Identity", desc: "Positioning, naming, visual identity for new restaurants." },
      { name: "Launch Marketing", desc: "Pre-launch buzz, opening event, first-month digital plan." },
      { name: "Social Media Management", desc: "Monthly retainer: content calendar, photography brief, posting, engagement." },
      { name: "Google + Meta Ads", desc: "Paid acquisition setup and management for footfall and delivery orders." }
    ],
    portfolio: [
      { name: "The Dough Bar", location: "Ahmedabad", type: "Café", desc: "Brand and launch for a bakery-café. 2,000 followers in week 1.", images: 4 },
      { name: "Gujju Tadka", location: "Surat", type: "Dine-in", desc: "Repositioning of an existing restaurant. Revamped identity and social.", images: 2 }
    ],
    enquiries: 15, featured: false
  },
  {
    id: 8, slug: "sanjay-gupta",
    name: "Sanjay Gupta",
    photo: null,
    initials: "SG",
    expertise: "Menu Engineering",
    tags: ["Menu Engineering", "COGS", "Pricing", "Culinary"],
    city: "Mumbai",
    tagline: "Menus that sell the right dishes at the right price — and hit your margin targets.",
    bio: "I'm a former executive chef turned menu consultant. After 16 years in hotel and restaurant kitchens, I moved to the consulting side to help founders fix the single most controllable lever of restaurant profitability: the menu.\n\nI work on menu design from both the culinary and commercial angle — which is what most consultants miss. I can tell you if a dish is priced wrong, if your portion cost is eating your margin, and which items are silently hurting your profitability. I also help develop or refine the actual dishes.",
    yearsExp: 16,
    projectTypes: ["New Restaurant", "Café", "QSR"],
    services: [
      { name: "Menu Engineering Audit", desc: "Category-by-category analysis: stars, plowhorses, puzzles, dogs. Fix plan included." },
      { name: "New Menu Development", desc: "Recipe development, costing, plating, and menu design collaboration." },
      { name: "COGS Reduction", desc: "Ingredient rationalisation, portion standardisation, vendor benchmarking." },
      { name: "Pricing Strategy", desc: "Market benchmarking + cost-plus + psychological pricing synthesis." }
    ],
    portfolio: [
      { name: "Zaffran, Juhu", location: "Mumbai", type: "Fine Dining", desc: "Menu overhaul for a North Indian fine diner. Reduced menu from 120 to 65 items; GP improved by 6pts.", images: 3 },
      { name: "Bun & Brew", location: "Mumbai", type: "Café", desc: "New menu development for a burger + craft beer café.", images: 2 }
    ],
    enquiries: 33, featured: false
  }
];

const ARTICLES = [
  {
    id: 1, slug: "true-cost-opening-restaurant-mumbai",
    title: "The True Cost of Opening a Restaurant in Mumbai in 2026",
    category: "Finance & Compliance",
    date: "April 20, 2026",
    readTime: "8 min read",
    excerpt: "Most founders underestimate their capex by 30–40%. Here's a detailed breakdown of what it actually costs to open across formats in Mumbai — from raw space to first cover.",
    author: "Priya Sharma"
  },
  {
    id: 2, slug: "cloud-kitchen-vs-traditional",
    title: "Cloud Kitchen vs. Traditional Restaurant: A Founder's Decision Framework",
    category: "Starting Out",
    date: "April 15, 2026",
    readTime: "6 min read",
    excerpt: "Before you sign a lease or buy equipment, understand the fundamental trade-offs between delivery-first and dine-in models — and which one fits your context.",
    author: "Deepa Krishnan"
  },
  {
    id: 3, slug: "fssai-licensing-guide-2026",
    title: "FSSAI Licensing in 2026: What You Need, When You Need It",
    category: "Finance & Compliance",
    date: "April 10, 2026",
    readTime: "5 min read",
    excerpt: "A practical guide to navigating FSSAI registration, state licensing, and fire NOC timelines — so compliance doesn't delay your opening.",
    author: "Plattr Editorial"
  },
  {
    id: 4, slug: "break-even-restaurant-explained",
    title: "How to Calculate Your Restaurant's Break-Even Point (With Real Examples)",
    category: "Finance & Compliance",
    date: "April 5, 2026",
    readTime: "7 min read",
    excerpt: "Break-even analysis is the single most important calculation a restaurant founder can do before signing anything. Here's how to do it correctly — with Mumbai and Bangalore benchmarks.",
    author: "Ananya Iyer"
  },
  {
    id: 5, slug: "kitchen-layout-cloud-kitchen",
    title: "Designing a High-Output Cloud Kitchen in Under 800 Sqft",
    category: "Kitchen & Design",
    date: "March 28, 2026",
    readTime: "6 min read",
    excerpt: "Space is your most expensive variable in a cloud kitchen. This guide walks through zone planning, equipment selection, and the layout principles that maximise output per sqft.",
    author: "Rahul Mehta"
  },
  {
    id: 6, slug: "restaurant-brand-positioning",
    title: "Why Most Restaurant Brands Fail to Differentiate (And How to Fix It)",
    category: "Branding & Marketing",
    date: "March 22, 2026",
    readTime: "5 min read",
    excerpt: "In a market where every café claims to be 'cosy' and every restaurant promises 'authentic', differentiation is existential. Here's a framework for finding your real positioning.",
    author: "Vikram Nair"
  },
  {
    id: 7, slug: "menu-engineering-basics",
    title: "Menu Engineering 101: Turn Your Menu into a Profit Machine",
    category: "Operations",
    date: "March 18, 2026",
    readTime: "8 min read",
    excerpt: "Your menu is your most powerful sales tool and your most transparent cost centre. Learn the stars-plowhorses-puzzles-dogs framework that every profitable restaurant uses.",
    author: "Sanjay Gupta"
  },
  {
    id: 8, slug: "location-evaluation-restaurant",
    title: "How to Evaluate a Restaurant Location Before You Sign",
    category: "Location & Real Estate",
    date: "March 12, 2026",
    readTime: "6 min read",
    excerpt: "A bad location kills a good restaurant. Here's a systematic 10-factor checklist for evaluating any shortlisted site — footfall, rent ratios, competition density, and more.",
    author: "Plattr Editorial"
  }
];

const NEWS = [
  {
    id: 1,
    headline: "Zomato Launches ₹500Cr 'Restaurant Partner Fund' for Tier-2 City Expansion",
    source: "Economic Times",
    date: "April 25, 2026",
    summary: "Zomato has announced a new lending programme targeting restaurant partners in Tier-2 and Tier-3 cities, offering working capital at subsidised rates. The fund aims to onboard 10,000 new restaurant partners by end of 2026.",
    link: "#",
    category: "Funding & Investment"
  },
  {
    id: 2,
    headline: "FSSAI Issues New Guidelines for Cloud Kitchen Licensing: What Changes in June",
    source: "Food Safety News India",
    date: "April 22, 2026",
    summary: "The Food Safety and Standards Authority of India has published revised licensing guidelines for cloud and ghost kitchens, effective June 1. Key changes include mandatory CCTV in prep areas and stricter packaging traceability requirements.",
    link: "#",
    category: "Regulation & Policy"
  },
  {
    id: 3,
    headline: "Mumbai Records 340 New Restaurant Openings in Q1 2026 — Highest Since Pre-Pandemic",
    source: "Mumbai Mirror",
    date: "April 20, 2026",
    summary: "Data from the Maharashtra Restaurant and Bar Association shows Mumbai saw 340 new F&B establishments open in the first quarter of 2026, surpassing the previous Q1 record set in 2019. Lower Parel and Bandra led by outlet count.",
    link: "#",
    category: "New Openings"
  },
  {
    id: 4,
    headline: "Rebel Foods Acquires Coimbatore-Based Cloud Kitchen Operator in ₹85Cr Deal",
    source: "Inc42",
    date: "April 18, 2026",
    summary: "Rebel Foods, operators of Faasos and Behrouz Biryani, has acquired Southern Cloud Kitchens to accelerate expansion in South India. The deal includes 12 operational hubs across Tamil Nadu and Karnataka.",
    link: "#",
    category: "Funding & Investment"
  },
  {
    id: 5,
    headline: "AI Menu Optimisation Tools Are Changing How Indian Restaurants Manage COGS",
    source: "Restaurant India",
    date: "April 14, 2026",
    summary: "A new wave of AI-powered tools promises to help restaurant operators reduce food costs by 8–12% through dynamic menu engineering and ingredient procurement optimisation. Early adopters report meaningful margin improvements.",
    link: "#",
    category: "Technology"
  },
  {
    id: 6,
    headline: "Bangalore's Indiranagar Overtakes Koramangala as City's Top Restaurant Destination",
    source: "Deccan Herald",
    date: "April 10, 2026",
    summary: "A new study by NRAI Bangalore Chapter shows Indiranagar has edged out Koramangala as the city's most active restaurant micro-market, with 28 new openings in Q1 and the highest average covers-per-seat in the city.",
    link: "#",
    category: "Industry Trends"
  }
];

const CATEGORIES = ["Turnkey", "Kitchen Design", "F&B Strategy", "Branding", "Cloud Kitchen", "QSR Operations", "Menu Engineering"];
const CITIES = ["Mumbai", "Bangalore", "Delhi", "Ahmedabad", "Pune", "Hyderabad", "Chennai"];
const PROJECT_TYPES = ["New Restaurant", "Renovation", "Cloud Kitchen", "Café", "QSR"];
const ARTICLE_CATEGORIES = ["Starting Out", "Kitchen & Design", "Branding & Marketing", "Operations", "Finance & Compliance", "Location & Real Estate"];
const NEWS_CATEGORIES = ["All", "Industry Trends", "New Openings", "Regulation & Policy", "Funding & Investment", "Technology"];

// Export to window
Object.assign(window, { CONSULTANTS, ARTICLES, NEWS, CATEGORIES, CITIES, PROJECT_TYPES, ARTICLE_CATEGORIES, NEWS_CATEGORIES });
