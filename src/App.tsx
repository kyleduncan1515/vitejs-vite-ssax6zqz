// @ts-nocheck 
import { useState, useEffect, useRef } from 'react';
const NICHES = [
  {
    id: 'hvac',
    label: 'HVAC',
    emoji: '❄️',
    color: '#0EA5E9',
    searches: 'furnace repair near me, AC installation, HVAC service',
  },
  {
    id: 'plumbing',
    label: 'Plumbing',
    emoji: '🔧',
    color: '#0284C7',
    searches: 'plumber near me, drain cleaning, water heater repair',
  },
  {
    id: 'roofing',
    label: 'Roofing',
    emoji: '🏠',
    color: '#7C3AED',
    searches: 'roof repair near me, roofing company, new roof cost',
  },
  {
    id: 'electrical',
    label: 'Electrical',
    emoji: '⚡',
    color: '#D97706',
    searches: 'electrician near me, panel upgrade, outlet repair',
  },
  {
    id: 'landscaping',
    label: 'Landscaping',
    emoji: '🌿',
    color: '#16A34A',
    searches: 'landscaper near me, lawn care service, tree trimming',
  },
  {
    id: 'cleaning',
    label: 'Cleaning',
    emoji: '✨',
    color: '#EC4899',
    searches: 'house cleaning near me, maid service, deep cleaning',
  },
  {
    id: 'dental',
    label: 'Dental',
    emoji: '🦷',
    color: '#06B6D4',
    searches: 'dentist near me, teeth cleaning, dental implants',
  },
  {
    id: 'realestate',
    label: 'Real Estate',
    emoji: '🏡',
    color: '#F59E0B',
    searches: 'homes for sale near me, realtor, sell my house fast',
  },
  {
    id: 'auto',
    label: 'Auto Repair',
    emoji: '🚗',
    color: '#EF4444',
    searches: 'auto repair near me, oil change, brake service',
  },
  {
    id: 'legal',
    label: 'Law Firms',
    emoji: '⚖️',
    color: '#6366F1',
    searches: 'lawyer near me, personal injury attorney, DUI lawyer',
  },
];

const PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    price: 297,
    color: '#0EA5E9',
    popular: false,
    tagline: 'For businesses getting serious about SEO',
    includes: [
      '4 SEO blog posts per month',
      '8 Google Business Profile posts',
      '1 service page rewrite',
      'Local keyword research',
      'Monthly performance report',
      '1 city targeted',
    ],
    results: 'Avg. 34% more organic traffic in 90 days',
  },
  {
    id: 'growth',
    name: 'Growth',
    price: 497,
    color: '#F97316',
    popular: true,
    tagline: 'For businesses ready to dominate their market',
    includes: [
      '8 SEO blog posts per month',
      '16 Google Business Profile posts',
      '4 service page rewrites',
      'Competitor keyword gap analysis',
      'Weekly performance reports',
      '3 cities targeted',
      'Email newsletter (monthly)',
      'Review response templates',
    ],
    results: 'Avg. 78% more organic traffic in 90 days',
  },
  {
    id: 'dominate',
    name: 'Dominate',
    price: 797,
    color: '#0F172A',
    popular: false,
    tagline: 'For businesses that want to own their city',
    includes: [
      '12 SEO blog posts per month',
      '30 Google Business Profile posts',
      'Full website copy refresh',
      'Weekly competitor monitoring',
      'Daily performance tracking',
      'Unlimited cities targeted',
      'Email newsletter (weekly)',
      'Social media captions',
      'Ad copy variations',
      'Dedicated account manager',
    ],
    results: 'Avg. 140% more organic traffic in 90 days',
  },
];

const FAQS = [
  {
    q: 'How does the content get created?',
    a: 'We use a combination of AI writing and human review. Our system researches the top-ranking pages for your target keywords, analyzes what your competitors are doing, and writes content specifically for your business, your city, and your services. Every piece is edited for accuracy before delivery.',
  },
  {
    q: 'Do I have to do anything?',
    a: 'Almost nothing. We need your business name, location, services, and website URL to get started. After that, we handle everything. You review and approve content in your dashboard before it publishes — typically takes 5 minutes per month.',
  },
  {
    q: 'How long before I see results?',
    a: 'Most clients see measurable ranking improvements within 60–90 days. SEO compounds over time — the longer you run, the more your rankings grow. Clients who have been with us for 6+ months consistently rank in the top 3 for their primary keywords.',
  },
  {
    q: 'What industries do you work with?',
    a: 'We specialize in home services (HVAC, plumbing, roofing, electrical, landscaping), healthcare, legal, real estate, and auto repair. We work best with local businesses that serve a specific geographic area.',
  },
  {
    q: 'Is this just AI-generated content?',
    a: 'No. Our system uses AI to research, draft, and optimize content, but every piece goes through a quality review process. The result is content that reads naturally, targets the right keywords, and accurately represents your business.',
  },
  {
    q: 'Can I cancel anytime?',
    a: "Yes. No contracts, no cancellation fees. Cancel anytime from your dashboard. We recommend at least 90 days to see the full impact on your rankings, but we'll never lock you in.",
  },
  {
    q: "What if I don't have a website?",
    a: 'We can still create your Google Business Profile content, which drives significant local traffic. If you need a website, we can recommend partners who build them for our clients.',
  },
  {
    q: 'How is this different from hiring an SEO agency?',
    a: 'Traditional SEO agencies charge $2,000–$5,000/month for the same deliverables and take weeks to get started. We deliver in days, cost a fraction of the price, and use AI to produce content at a scale no human team can match.',
  },
];

const RESULTS = [
  {
    biz: 'Dallas HVAC Co.',
    niche: 'HVAC',
    before: '3 calls/week',
    after: '22 calls/week',
    time: '90 days',
    plan: 'Growth',
  },
  {
    biz: 'Phoenix Plumbing',
    niche: 'Plumbing',
    before: 'Page 4 Google',
    after: '#1 for 12 keywords',
    time: '4 months',
    plan: 'Dominate',
  },
  {
    biz: 'Austin Roofing',
    niche: 'Roofing',
    before: '0 blog posts',
    after: '$45K new contracts',
    time: '6 months',
    plan: 'Growth',
  },
  {
    biz: 'Chicago Electricians',
    niche: 'Electrical',
    before: '2 reviews/mo',
    after: '31 reviews/mo',
    time: '60 days',
    plan: 'Starter',
  },
];

const DELIVERABLES = [
  {
    icon: '📝',
    title: 'SEO Blog Posts',
    desc: 'Long-form articles targeting the keywords your customers search for. Each post is optimized for Google and written for your city and services.',
  },
  {
    icon: '📍',
    title: 'Google Business Posts',
    desc: 'Weekly Google Business Profile updates that keep your listing active, improve local pack rankings, and drive calls directly from search results.',
  },
  {
    icon: '🏗️',
    title: 'Service Page Content',
    desc: 'Rewrites of your existing service pages optimized for conversion and ranking. The pages customers land on when they find you on Google.',
  },
  {
    icon: '🔑',
    title: 'Keyword Research',
    desc: "Monthly identification of the exact terms your target customers are searching for — including low-competition opportunities your competitors haven't touched.",
  },
  {
    icon: '📊',
    title: 'Performance Reports',
    desc: 'Clear monthly reports showing ranking changes, traffic growth, and leads generated. You always know exactly what your investment is producing.',
  },
  {
    icon: '📧',
    title: 'Email Newsletters',
    desc: 'Monthly email to your customer list keeping your business top of mind, showcasing recent work, and driving repeat business and referrals.',
  },
];

export default function App() {
  const [activeNiche, setActiveNiche] = useState('hvac');
  const [navScrolled, setNavScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [annual, setAnnual] = useState(false);
  const [demoStep, setDemoStep] = useState(1);
  const [demoNiche, setDemoNiche] = useState('');
  const [demoCity, setDemoCity] = useState('');
  const [demoService, setDemoService] = useState('');
  const [demoOutput, setDemoOutput] = useState('');
  const [generating, setGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const fn = () => setNavScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const scroll = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  const niche = NICHES.find((n) => n.id === activeNiche) || NICHES[0];
  const price = (p) => (annual ? Math.round(p * 0.8) : p);

  const runDemo = async () => {
    if (!demoNiche || !demoCity || !demoService) return;
    setGenerating(true);
    setDemoOutput('');
    setDemoStep(3);
    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-6',
          max_tokens: 600,
          system: `You are an expert local SEO content writer. Write compelling, keyword-optimized blog post introductions for local service businesses. Your writing is professional, locally specific, and designed to rank on Google. Always mention the city naturally. Include the primary service keyword in the first sentence.`,
          messages: [
            {
              role: 'user',
              content: `Write the opening 3 paragraphs of an SEO blog post for a ${demoNiche} business in ${demoCity} that offers ${demoService}. 

Title format: "[Service] in [City]: What You Need to Know Before Calling"

Requirements:
- Mention ${demoCity} naturally 3+ times
- Include the primary keyword "${demoService} ${demoCity}" in paragraph 1
- Address the reader directly
- Build trust and authority
- End with a subtle call to action
- Write in a helpful, expert tone — not salesy

Start writing the title and post immediately.`,
            },
          ],
        }),
      });
      const data = await res.json();
      setDemoOutput(data.content?.map((b) => b.text || '').join('') || '');
    } catch (e) {
      setDemoOutput('Error: ' + e.message);
    }
    setGenerating(false);
  };

  return (
    <div
      style={{
        fontFamily: "'Plus Jakarta Sans',sans-serif",
        color: '#0F172A',
        background: '#FFFFFF',
        overflowX: 'hidden',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital,wght@0,400;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=DM+Mono:wght@400;500&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        ::-webkit-scrollbar{width:4px;}::-webkit-scrollbar-thumb{background:#F97316;border-radius:2px;}
        .btn{transition:all .2s;cursor:pointer;font-family:'Plus Jakarta Sans',sans-serif;}
        .btn:hover{filter:brightness(1.06);transform:translateY(-1px);}
        .btn:active{transform:translateY(0);}
        .hover-card{transition:all .2s;cursor:pointer;}
        .hover-card:hover{transform:translateY(-3px);box-shadow:0 12px 40px rgba(0,0,0,.1);}
        .niche-pill{transition:all .15s;cursor:pointer;}
        .niche-pill:hover{transform:scale(1.04);}
        .faq-row{transition:background .15s;cursor:pointer;}
        .faq-row:hover{background:#FFF7ED;}
        @keyframes fadeup{from{opacity:0;transform:translateY(16px);}to{opacity:1;transform:translateY(0);}}
        @keyframes float{0%,100%{transform:translateY(0);}50%{transform:translateY(-8px);}}
        .fadeup{animation:fadeup .35s ease forwards;}
        .float{animation:float 4s ease-in-out infinite;}
        input,select,textarea{font-family:'Plus Jakarta Sans',sans-serif;}
        a{color:inherit;text-decoration:none;}
      `}</style>

      {/* ── NAV ── */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 40px',
          transition: 'all .3s',
          background: navScrolled ? 'rgba(255,255,255,.97)' : 'transparent',
          backdropFilter: navScrolled ? 'blur(16px)' : 'none',
          borderBottom: navScrolled ? '1px solid #F1F5F9' : 'none',
        }}
      >
        <div
          style={{
            fontFamily: "'Instrument Serif',serif",
            fontSize: 24,
            color: navScrolled ? '#0F172A' : '#FFFFFF',
            letterSpacing: '-.5px',
          }}
        >
          Rank<span style={{ color: '#F97316' }}>Local</span> AI
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          {['How It Works', 'Results', 'Pricing', 'Demo'].map((l) => (
            <button
              key={l}
              onClick={() => scroll(l.toLowerCase().replace(' ', '-'))}
              style={{
                background: 'none',
                border: 'none',
                fontSize: 14,
                fontWeight: 500,
                color: navScrolled ? '#475569' : 'rgba(255,255,255,.85)',
                cursor: 'pointer',
                fontFamily: "'Plus Jakarta Sans',sans-serif",
              }}
            >
              {l}
            </button>
          ))}
          <button
            className="btn"
            onClick={() => scroll('pricing')}
            style={{
              padding: '10px 24px',
              borderRadius: 8,
              background: '#F97316',
              color: '#fff',
              border: 'none',
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: '-.2px',
            }}
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section
        ref={heroRef}
        style={{
          minHeight: '100vh',
          background:
            'linear-gradient(150deg,#0F172A 0%,#1E293B 60%,#0F2040 100%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '120px 40px 80px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background elements */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(ellipse at 20% 50%,rgba(249,115,22,.12) 0%,transparent 55%),radial-gradient(ellipse at 80% 30%,rgba(14,165,233,.1) 0%,transparent 55%)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.02) 1px,transparent 1px)',
            backgroundSize: '60px 60px',
            pointerEvents: 'none',
          }}
        />

        {/* Floating content preview */}
        <div
          className="float"
          style={{
            position: 'absolute',
            top: 120,
            right: '8%',
            width: 220,
            padding: '14px 16px',
            background: 'rgba(255,255,255,.06)',
            backdropFilter: 'blur(12px)',
            borderRadius: 12,
            border: '1px solid rgba(255,255,255,.1)',
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            gap: 6,
          }}
        >
          <div
            style={{
              fontSize: 9,
              color: '#F97316',
              fontWeight: 700,
              letterSpacing: '1px',
            }}
          >
            NEW POST PUBLISHED
          </div>
          <div
            style={{
              fontSize: 11,
              color: '#FFFFFF',
              fontWeight: 600,
              lineHeight: 1.4,
            }}
          >
            "Best HVAC Company in Austin: What to Look For"
          </div>
          <div style={{ fontSize: 9, color: 'rgba(255,255,255,.4)' }}>
            Ranking #2 for "HVAC Austin TX" · +18 calls this month
          </div>
        </div>
        <div
          className="float"
          style={{
            position: 'absolute',
            bottom: 160,
            left: '6%',
            width: 200,
            padding: '12px 14px',
            background: 'rgba(249,115,22,.12)',
            backdropFilter: 'blur(12px)',
            borderRadius: 12,
            border: '1px solid rgba(249,115,22,.25)',
            textAlign: 'left',
            animationDelay: '2s',
          }}
        >
          <div
            style={{
              fontSize: 9,
              color: '#F97316',
              fontWeight: 700,
              letterSpacing: '1px',
            }}
          >
            RANKING UPDATE
          </div>
          <div
            style={{
              fontSize: 11,
              color: '#FFFFFF',
              fontWeight: 600,
              lineHeight: 1.4,
              marginTop: 3,
            }}
          >
            🏆 #1 for "plumber near me Houston"
          </div>
          <div
            style={{ fontSize: 9, color: 'rgba(255,255,255,.4)', marginTop: 3 }}
          >
            Was #9 three months ago
          </div>
        </div>

        {/* Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '6px 16px',
            borderRadius: 20,
            border: '1px solid rgba(249,115,22,.4)',
            background: 'rgba(249,115,22,.1)',
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 5,
              height: 5,
              borderRadius: '50%',
              background: '#F97316',
            }}
          />
          <span
            style={{
              fontSize: 11,
              color: '#F97316',
              fontWeight: 700,
              letterSpacing: '1px',
              textTransform: 'uppercase',
            }}
          >
            AI-Powered · Done For You · Cancel Anytime
          </span>
        </div>

        <h1
          style={{
            fontFamily: "'Instrument Serif',serif",
            fontSize: 'clamp(38px,5.5vw,80px)',
            color: '#FFFFFF',
            lineHeight: 1.05,
            letterSpacing: '-2px',
            maxWidth: 900,
            marginBottom: 22,
          }}
        >
          We Write All Your SEO Content.
          <br />
          <span style={{ color: '#F97316', fontStyle: 'italic' }}>
            You Get the Calls.
          </span>
        </h1>

        <p
          style={{
            fontSize: 'clamp(15px,1.5vw,19px)',
            color: 'rgba(255,255,255,.55)',
            maxWidth: 560,
            lineHeight: 1.75,
            marginBottom: 14,
            fontWeight: 400,
          }}
        >
          Monthly blog posts, Google Business updates, and service pages — all
          written by AI, optimized for your city, delivered automatically.
        </p>
        <p
          style={{
            fontSize: 14,
            color: 'rgba(255,255,255,.3)',
            marginBottom: 44,
          }}
        >
          Starting at $297/month. No contracts. Average client sees{' '}
          <strong style={{ color: 'rgba(255,255,255,.6)' }}>
            +78% organic traffic in 90 days.
          </strong>
        </p>

        <div
          style={{
            display: 'flex',
            gap: 12,
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom: 60,
          }}
        >
          <button
            className="btn"
            onClick={() => scroll('demo')}
            style={{
              padding: '15px 36px',
              borderRadius: 8,
              background: '#F97316',
              color: '#fff',
              border: 'none',
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: '-.3px',
            }}
          >
            See Your Content Live →
          </button>
          <button
            className="btn"
            onClick={() => scroll('how-it-works')}
            style={{
              padding: '15px 28px',
              borderRadius: 8,
              background: 'rgba(255,255,255,.08)',
              color: 'rgba(255,255,255,.8)',
              border: '1px solid rgba(255,255,255,.15)',
              fontSize: 15,
              fontWeight: 500,
            }}
          >
            How It Works
          </button>
        </div>

        {/* Niche pills */}
        <div
          style={{
            display: 'flex',
            gap: 8,
            flexWrap: 'wrap',
            justifyContent: 'center',
            maxWidth: 700,
          }}
        >
          {NICHES.map((n) => (
            <div
              key={n.id}
              className="niche-pill"
              onClick={() => setActiveNiche(n.id)}
              style={{
                padding: '6px 14px',
                borderRadius: 20,
                border: `1px solid ${
                  activeNiche === n.id ? n.color : 'rgba(255,255,255,.15)'
                }`,
                background:
                  activeNiche === n.id
                    ? n.color + '22'
                    : 'rgba(255,255,255,.05)',
                fontSize: 12,
                fontWeight: activeNiche === n.id ? 700 : 400,
                color: activeNiche === n.id ? n.color : 'rgba(255,255,255,.5)',
                display: 'flex',
                alignItems: 'center',
                gap: 5,
              }}
            >
              <span>{n.emoji}</span>
              {n.label}
            </div>
          ))}
        </div>

        {/* Active niche keywords */}
        <div
          style={{ marginTop: 16, fontSize: 12, color: 'rgba(255,255,255,.3)' }}
        >
          Your customers search:{' '}
          <span
            style={{
              color: 'rgba(255,255,255,.5)',
              fontFamily: "'DM Mono',monospace",
            }}
          >
            {niche.searches}
          </span>
        </div>

        {/* Stats */}
        <div
          style={{
            display: 'flex',
            gap: 0,
            marginTop: 60,
            borderTop: '1px solid rgba(255,255,255,.08)',
            paddingTop: 40,
            width: '100%',
            maxWidth: 700,
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {[
            { n: '10', l: 'Industries served' },
            { n: '$297', l: 'Starting monthly' },
            { n: '90', l: 'Day avg. ROI window' },
            { n: '0', l: 'Contracts required' },
          ].map((s, i) => (
            <div
              key={i}
              style={{
                flex: '1 1 140px',
                padding: '0 24px',
                textAlign: 'center',
                borderRight: i < 3 ? '1px solid rgba(255,255,255,.08)' : 'none',
              }}
            >
              <div
                style={{
                  fontFamily: "'Instrument Serif',serif",
                  fontSize: 36,
                  color: '#F97316',
                }}
              >
                {s.n}
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: 'rgba(255,255,255,.3)',
                  marginTop: 4,
                  letterSpacing: '.3px',
                }}
              >
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section style={{ padding: '80px 40px', background: '#F8FAFC' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
          <div
            style={{
              fontSize: 11,
              color: '#F97316',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              fontWeight: 700,
              marginBottom: 14,
            }}
          >
            The Problem
          </div>
          <h2
            style={{
              fontFamily: "'Instrument Serif',serif",
              fontSize: 'clamp(28px,4vw,48px)',
              color: '#0F172A',
              marginBottom: 20,
              letterSpacing: '-1px',
              lineHeight: 1.1,
            }}
          >
            Your competitors are showing up on Google.
            <br />
            <span style={{ fontStyle: 'italic', color: '#F97316' }}>
              You're not.
            </span>
          </h2>
          <p
            style={{
              fontSize: 16,
              color: '#64748B',
              maxWidth: 560,
              margin: '0 auto 48px',
              lineHeight: 1.75,
            }}
          >
            93% of local service calls start with a Google search. If you're not
            on page 1, those calls are going to someone else. But writing SEO
            content takes 10+ hours a week — time you don't have.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
              gap: 16,
              maxWidth: 800,
              margin: '0 auto',
            }}
          >
            {[
              {
                icon: '⏱️',
                prob: 'No time to write',
                sol: 'We write everything for you',
              },
              {
                icon: '🤷',
                prob: "Don't know what to write",
                sol: 'We research the keywords',
              },
              {
                icon: '💸',
                prob: 'Agencies charge too much',
                sol: 'Fraction of agency pricing',
              },
              {
                icon: '📉',
                prob: 'Rankings not improving',
                sol: 'Content that actually ranks',
              },
            ].map((p, i) => (
              <div
                key={i}
                style={{
                  padding: '20px',
                  background: '#FFFFFF',
                  borderRadius: 10,
                  border: '1px solid #E2E8F0',
                  textAlign: 'left',
                }}
              >
                <div style={{ fontSize: 24, marginBottom: 8 }}>{p.icon}</div>
                <div
                  style={{
                    fontSize: 13,
                    color: '#EF4444',
                    fontWeight: 600,
                    marginBottom: 6,
                    textDecoration: 'line-through',
                    opacity: 0.7,
                  }}
                >
                  {p.prob}
                </div>
                <div
                  style={{ fontSize: 13, color: '#16A34A', fontWeight: 600 }}
                >
                  {p.sol}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section
        id="how-it-works"
        style={{ padding: '80px 40px', background: '#FFFFFF' }}
      >
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div
              style={{
                fontSize: 11,
                color: '#F97316',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontWeight: 700,
                marginBottom: 14,
              }}
            >
              How It Works
            </div>
            <h2
              style={{
                fontFamily: "'Instrument Serif',serif",
                fontSize: 'clamp(28px,4vw,48px)',
                color: '#0F172A',
                letterSpacing: '-1px',
              }}
            >
              Up and running in 24 hours.
            </h2>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
              gap: 24,
              position: 'relative',
            }}
          >
            {[
              {
                n: '01',
                icon: '📋',
                title: 'Tell us about your business',
                desc: 'Answer 5 questions: your business name, city, services, website, and who your ideal customer is. Takes 3 minutes.',
              },
              {
                n: '02',
                icon: '🤖',
                title: 'We research and write',
                desc: 'Our AI analyzes your competitors, identifies keyword gaps, and writes your first month of content — tailored to your city and services.',
              },
              {
                n: '03',
                icon: '✅',
                title: 'You review and approve',
                desc: 'Log into your dashboard, review each piece of content, and approve with one click. Takes 5 minutes per month.',
              },
              {
                n: '04',
                icon: '📈',
                title: 'Rankings improve',
                desc: 'Your content publishes, Google indexes it, and your rankings start climbing. Most clients see results within 60 days.',
              },
            ].map((s, i) => (
              <div
                key={i}
                style={{
                  padding: '28px 24px',
                  background: '#F8FAFC',
                  borderRadius: 12,
                  border: '1px solid #E2E8F0',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    fontFamily: "'Instrument Serif',serif",
                    fontSize: 52,
                    color: '#F1F5F9',
                    lineHeight: 1,
                    fontWeight: 400,
                  }}
                >
                  {s.n}
                </div>
                <div style={{ fontSize: 28, marginBottom: 14 }}>{s.icon}</div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 16,
                    color: '#0F172A',
                    marginBottom: 8,
                    letterSpacing: '-.3px',
                  }}
                >
                  {s.title}
                </div>
                <div
                  style={{ fontSize: 13, color: '#64748B', lineHeight: 1.65 }}
                >
                  {s.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DELIVERABLES ── */}
      <section style={{ padding: '80px 40px', background: '#0F172A' }}>
        <div style={{ maxWidth: 1060, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div
              style={{
                fontSize: 11,
                color: '#F97316',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontWeight: 700,
                marginBottom: 14,
              }}
            >
              What You Get Every Month
            </div>
            <h2
              style={{
                fontFamily: "'Instrument Serif',serif",
                fontSize: 'clamp(28px,4vw,48px)',
                color: '#FFFFFF',
                letterSpacing: '-1px',
              }}
            >
              Content that ranks. Delivered automatically.
            </h2>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))',
              gap: 14,
            }}
          >
            {DELIVERABLES.map((d, i) => (
              <div
                key={i}
                style={{
                  padding: '22px 22px',
                  background: 'rgba(255,255,255,.04)',
                  borderRadius: 12,
                  border: '1px solid rgba(255,255,255,.08)',
                  display: 'flex',
                  gap: 14,
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    background: 'rgba(249,115,22,.15)',
                    border: '1px solid rgba(249,115,22,.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 20,
                    flexShrink: 0,
                  }}
                >
                  {d.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: 14,
                      color: '#FFFFFF',
                      marginBottom: 5,
                      letterSpacing: '-.2px',
                    }}
                  >
                    {d.title}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: 'rgba(255,255,255,.45)',
                      lineHeight: 1.6,
                    }}
                  >
                    {d.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIVE DEMO ── */}
      <section
        id="demo"
        style={{ padding: '80px 40px', background: '#FFF7ED' }}
      >
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div
              style={{
                fontSize: 11,
                color: '#F97316',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontWeight: 700,
                marginBottom: 14,
              }}
            >
              Live Demo
            </div>
            <h2
              style={{
                fontFamily: "'Instrument Serif',serif",
                fontSize: 'clamp(26px,4vw,44px)',
                color: '#0F172A',
                letterSpacing: '-1px',
                marginBottom: 10,
              }}
            >
              See Your Content Generated Right Now
            </h2>
            <p style={{ fontSize: 14, color: '#64748B' }}>
              Enter your business details below — we'll write a real SEO blog
              post opening for you in 30 seconds.
            </p>
          </div>

          <div
            style={{
              background: '#FFFFFF',
              borderRadius: 16,
              border: '2px solid #FED7AA',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(249,115,22,.1)',
            }}
          >
            {/* Steps */}
            <div style={{ display: 'flex', borderBottom: '1px solid #FEE2E2' }}>
              {['Your Business', 'Your Content'].map((s, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    padding: '12px',
                    textAlign: 'center',
                    background: demoStep === i + 1 ? '#FFF7ED' : '#FFFFFF',
                    borderBottom:
                      demoStep === i + 1
                        ? '2px solid #F97316'
                        : '2px solid transparent',
                  }}
                >
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: demoStep === i + 1 ? 700 : 400,
                      color: demoStep === i + 1 ? '#F97316' : '#9CA3AF',
                    }}
                  >
                    {i + 1}. {s}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ padding: '32px' }}>
              {demoStep === 1 && (
                <div className="fadeup">
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: 14,
                      marginBottom: 14,
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          color: '#374151',
                          marginBottom: 6,
                        }}
                      >
                        Your Industry *
                      </div>
                      <select
                        value={demoNiche}
                        onChange={(e) => setDemoNiche(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '11px 14px',
                          borderRadius: 8,
                          border: '1px solid #E5E7EB',
                          fontSize: 14,
                          color: '#0F172A',
                          outline: 'none',
                        }}
                      >
                        <option value="">Select your industry…</option>
                        {NICHES.map((n) => (
                          <option key={n.id} value={n.label}>
                            {n.emoji} {n.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          color: '#374151',
                          marginBottom: 6,
                        }}
                      >
                        Your City *
                      </div>
                      <input
                        value={demoCity}
                        onChange={(e) => setDemoCity(e.target.value)}
                        placeholder="e.g. Austin, TX"
                        style={{
                          width: '100%',
                          padding: '11px 14px',
                          borderRadius: 8,
                          border: '1px solid #E5E7EB',
                          fontSize: 14,
                          color: '#0F172A',
                          outline: 'none',
                        }}
                      />
                    </div>
                  </div>
                  <div style={{ marginBottom: 24 }}>
                    <div
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        color: '#374151',
                        marginBottom: 6,
                      }}
                    >
                      Primary Service *
                    </div>
                    <input
                      value={demoService}
                      onChange={(e) => setDemoService(e.target.value)}
                      placeholder="e.g. AC Installation, Furnace Repair, Drain Cleaning…"
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        borderRadius: 8,
                        border: '1px solid #E5E7EB',
                        fontSize: 14,
                        color: '#0F172A',
                        outline: 'none',
                      }}
                    />
                  </div>
                  <button
                    className="btn"
                    onClick={runDemo}
                    disabled={!demoNiche || !demoCity || !demoService}
                    style={{
                      width: '100%',
                      padding: '14px',
                      borderRadius: 8,
                      background:
                        demoNiche && demoCity && demoService
                          ? '#F97316'
                          : '#E5E7EB',
                      color:
                        demoNiche && demoCity && demoService
                          ? '#FFFFFF'
                          : '#9CA3AF',
                      border: 'none',
                      fontSize: 15,
                      fontWeight: 700,
                      cursor:
                        demoNiche && demoCity && demoService
                          ? 'pointer'
                          : 'not-allowed',
                    }}
                  >
                    Generate My Free Sample →
                  </button>
                </div>
              )}
              {demoStep === 3 && (
                <div className="fadeup">
                  {generating ? (
                    <div style={{ textAlign: 'center', padding: '32px 0' }}>
                      <div style={{ fontSize: 32, marginBottom: 12 }}>✍️</div>
                      <div
                        style={{
                          fontFamily: "'Instrument Serif',serif",
                          fontSize: 20,
                          color: '#0F172A',
                          marginBottom: 6,
                        }}
                      >
                        Writing your content…
                      </div>
                      <div
                        style={{
                          fontSize: 13,
                          color: '#64748B',
                          marginBottom: 24,
                        }}
                      >
                        Researching {demoCity} {demoNiche} keywords · Analyzing
                        competitors · Writing your post
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 8,
                          maxWidth: 320,
                          margin: '0 auto',
                        }}
                      >
                        {[
                          'Researching local keywords…',
                          'Analyzing top competitors…',
                          'Writing for your audience…',
                          'Optimizing for Google…',
                        ].map((s, i) => (
                          <div
                            key={i}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 8,
                              opacity: 0.4 + i * 0.18,
                            }}
                          >
                            <div
                              style={{
                                width: 6,
                                height: 6,
                                borderRadius: '50%',
                                background: '#F97316',
                                flexShrink: 0,
                              }}
                            />
                            <div style={{ fontSize: 12, color: '#64748B' }}>
                              {s}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : demoOutput ? (
                    <div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginBottom: 14,
                        }}
                      >
                        <div>
                          <div
                            style={{
                              fontWeight: 700,
                              fontSize: 14,
                              color: '#0F172A',
                            }}
                          >
                            ✅ Your Sample Content
                          </div>
                          <div
                            style={{
                              fontSize: 11,
                              color: '#64748B',
                              marginTop: 2,
                            }}
                          >
                            {demoNiche} · {demoCity} · {demoService}
                          </div>
                        </div>
                        <div style={{ display: 'flex', gap: 8 }}>
                          <button
                            className="btn"
                            onClick={() => {
                              navigator.clipboard.writeText(demoOutput);
                              setCopied(true);
                              setTimeout(() => setCopied(false), 2000);
                            }}
                            style={{
                              padding: '7px 14px',
                              borderRadius: 6,
                              background: copied ? '#16A34A' : '#F1F5F9',
                              color: copied ? '#fff' : '#475569',
                              border: 'none',
                              fontSize: 12,
                              fontWeight: 600,
                            }}
                          >
                            {copied ? '✓ Copied' : 'Copy'}
                          </button>
                          <button
                            className="btn"
                            onClick={() => {
                              setDemoStep(1);
                              setDemoOutput('');
                            }}
                            style={{
                              padding: '7px 14px',
                              borderRadius: 6,
                              background: '#F1F5F9',
                              color: '#475569',
                              border: 'none',
                              fontSize: 12,
                              fontWeight: 600,
                            }}
                          >
                            New Sample
                          </button>
                        </div>
                      </div>
                      <div
                        style={{
                          background: '#F8FAFC',
                          border: '1px solid #E2E8F0',
                          borderRadius: 10,
                          padding: '20px',
                          maxHeight: 360,
                          overflowY: 'auto',
                        }}
                      >
                        <pre
                          style={{
                            fontFamily: "'Plus Jakarta Sans',sans-serif",
                            fontSize: 13,
                            color: '#334155',
                            lineHeight: 1.8,
                            whiteSpace: 'pre-wrap',
                            wordWrap: 'break-word',
                          }}
                        >
                          {demoOutput}
                        </pre>
                      </div>
                      <div
                        style={{
                          marginTop: 16,
                          padding: '12px 16px',
                          background: '#FFF7ED',
                          borderRadius: 8,
                          border: '1px solid #FED7AA',
                          fontSize: 12,
                          color: '#92400E',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <span>
                          📅 This is just the opening. Each monthly post is
                          1,500–2,500 words, fully optimized.
                        </span>
                        <button
                          className="btn"
                          onClick={() => scroll('pricing')}
                          style={{
                            padding: '7px 14px',
                            borderRadius: 6,
                            background: '#F97316',
                            color: '#fff',
                            border: 'none',
                            fontSize: 12,
                            fontWeight: 700,
                            flexShrink: 0,
                            marginLeft: 10,
                          }}
                        >
                          Get This Monthly →
                        </button>
                      </div>
                    </div>
                  ) : null}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── RESULTS ── */}
      <section
        id="results"
        style={{ padding: '80px 40px', background: '#FFFFFF' }}
      >
        <div style={{ maxWidth: 1060, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div
              style={{
                fontSize: 11,
                color: '#F97316',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontWeight: 700,
                marginBottom: 14,
              }}
            >
              Results
            </div>
            <h2
              style={{
                fontFamily: "'Instrument Serif',serif",
                fontSize: 'clamp(28px,4vw,48px)',
                color: '#0F172A',
                letterSpacing: '-1px',
              }}
            >
              Real businesses. Real rankings.
            </h2>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill,minmax(230px,1fr))',
              gap: 14,
            }}
          >
            {RESULTS.map((r, i) => (
              <div
                key={i}
                className="hover-card"
                style={{
                  padding: '22px',
                  background: '#F8FAFC',
                  borderRadius: 12,
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 1px 4px rgba(0,0,0,.04)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: 14,
                  }}
                >
                  <div
                    style={{ fontSize: 12, fontWeight: 700, color: '#0F172A' }}
                  >
                    {r.biz}
                  </div>
                  <div
                    style={{
                      fontSize: 10,
                      padding: '3px 8px',
                      borderRadius: 10,
                      background: '#FFF7ED',
                      color: '#F97316',
                      fontWeight: 700,
                    }}
                  >
                    {r.plan}
                  </div>
                </div>
                <div style={{ marginBottom: 10 }}>
                  <div
                    style={{ fontSize: 11, color: '#9CA3AF', marginBottom: 3 }}
                  >
                    BEFORE
                  </div>
                  <div
                    style={{ fontSize: 13, color: '#EF4444', fontWeight: 600 }}
                  >
                    {r.before}
                  </div>
                </div>
                <div
                  style={{
                    width: '100%',
                    height: 1,
                    background: '#E5E7EB',
                    margin: '10px 0',
                  }}
                />
                <div style={{ marginBottom: 10 }}>
                  <div
                    style={{ fontSize: 11, color: '#9CA3AF', marginBottom: 3 }}
                  >
                    AFTER ({r.time})
                  </div>
                  <div
                    style={{ fontSize: 14, color: '#16A34A', fontWeight: 700 }}
                  >
                    {r.after}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section
        id="pricing"
        style={{ padding: '80px 40px', background: '#0F172A' }}
      >
        <div style={{ maxWidth: 1060, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 50 }}>
            <div
              style={{
                fontSize: 11,
                color: '#F97316',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontWeight: 700,
                marginBottom: 14,
              }}
            >
              Pricing
            </div>
            <h2
              style={{
                fontFamily: "'Instrument Serif',serif",
                fontSize: 'clamp(28px,4vw,52px)',
                color: '#FFFFFF',
                letterSpacing: '-1.5px',
                marginBottom: 14,
              }}
            >
              One call from a new customer pays for the month.
            </h2>
            <p
              style={{
                fontSize: 15,
                color: 'rgba(255,255,255,.4)',
                maxWidth: 440,
                margin: '0 auto 28px',
              }}
            >
              No contracts. Cancel anytime. Most clients see positive ROI in the
              first 30 days.
            </p>
            <div
              style={{
                display: 'inline-flex',
                padding: '5px',
                borderRadius: 30,
                background: 'rgba(255,255,255,.06)',
                border: '1px solid rgba(255,255,255,.1)',
              }}
            >
              <button
                onClick={() => setAnnual(false)}
                style={{
                  padding: '7px 20px',
                  borderRadius: 24,
                  background: !annual ? '#F97316' : 'transparent',
                  color: '#fff',
                  border: 'none',
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: "'Plus Jakarta Sans',sans-serif",
                  transition: 'all .2s',
                }}
              >
                Monthly
              </button>
              <button
                onClick={() => setAnnual(true)}
                style={{
                  padding: '7px 20px',
                  borderRadius: 24,
                  background: annual ? '#F97316' : 'transparent',
                  color: annual ? '#fff' : 'rgba(255,255,255,.45)',
                  border: 'none',
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: "'Plus Jakarta Sans',sans-serif",
                  transition: 'all .2s',
                }}
              >
                Annual <span style={{ fontSize: 10 }}>Save 20%</span>
              </button>
            </div>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(290px,1fr))',
              gap: 20,
              alignItems: 'start',
            }}
          >
            {PLANS.map((plan) => (
              <div
                key={plan.id}
                style={{
                  borderRadius: 16,
                  padding: '32px 28px',
                  background: plan.popular
                    ? '#FFFFFF'
                    : 'rgba(255,255,255,.04)',
                  border: plan.popular
                    ? `2px solid #F97316`
                    : '1px solid rgba(255,255,255,.08)',
                  position: 'relative',
                  boxShadow: plan.popular
                    ? '0 24px 60px rgba(249,115,22,.25)'
                    : 'none',
                  transition: 'transform .2s',
                }}
              >
                {plan.popular && (
                  <div
                    style={{
                      position: 'absolute',
                      top: -14,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      padding: '5px 18px',
                      borderRadius: 20,
                      background: '#F97316',
                      fontSize: 11,
                      fontWeight: 700,
                      color: '#fff',
                      letterSpacing: '1px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    MOST POPULAR
                  </div>
                )}
                <div
                  style={{
                    fontSize: 11,
                    color: plan.popular ? '#F97316' : 'rgba(255,255,255,.4)',
                    fontWeight: 700,
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    marginBottom: 6,
                  }}
                >
                  {plan.tagline}
                </div>
                <div
                  style={{
                    fontFamily: "'Instrument Serif',serif",
                    fontSize: 26,
                    color: plan.popular ? '#0F172A' : '#FFFFFF',
                    marginBottom: 4,
                  }}
                >
                  {plan.name}
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: 4,
                    marginBottom: 4,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Instrument Serif',serif",
                      fontSize: 52,
                      color: plan.popular ? '#0F172A' : '#FFFFFF',
                      lineHeight: 1,
                    }}
                  >
                    ${price(plan.price)}
                  </span>
                  <span
                    style={{
                      fontSize: 14,
                      color: plan.popular ? '#64748B' : 'rgba(255,255,255,.4)',
                    }}
                  >
                    /month
                  </span>
                </div>
                {annual && (
                  <div
                    style={{
                      fontSize: 12,
                      color: '#22C55E',
                      marginBottom: 4,
                      fontWeight: 600,
                    }}
                  >
                    Save ${plan.price * 12 - price(plan.price) * 12}/year
                  </div>
                )}
                <div
                  style={{
                    fontSize: 12,
                    color: plan.popular ? '#16A34A' : 'rgba(255,255,255,.4)',
                    fontWeight: 600,
                    marginBottom: 24,
                  }}
                >
                  {plan.results}
                </div>
                <button
                  className="btn"
                  style={{
                    width: '100%',
                    padding: '13px',
                    borderRadius: 8,
                    background: plan.popular
                      ? '#F97316'
                      : 'rgba(255,255,255,.08)',
                    color: '#FFFFFF',
                    border: plan.popular
                      ? 'none'
                      : '1px solid rgba(255,255,255,.15)',
                    fontSize: 14,
                    fontWeight: 700,
                    marginBottom: 24,
                  }}
                >
                  Start {plan.name} →
                </button>
                <div
                  style={{ display: 'flex', flexDirection: 'column', gap: 9 }}
                >
                  {plan.includes.map((f, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 9,
                      }}
                    >
                      <span
                        style={{
                          color: '#F97316',
                          flexShrink: 0,
                          marginTop: 1,
                          fontWeight: 700,
                        }}
                      >
                        ✓
                      </span>
                      <span
                        style={{
                          fontSize: 13,
                          color: plan.popular
                            ? '#475569'
                            : 'rgba(255,255,255,.6)',
                          lineHeight: 1.45,
                        }}
                      >
                        {f}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              textAlign: 'center',
              marginTop: 36,
              fontSize: 13,
              color: 'rgba(255,255,255,.25)',
            }}
          >
            🛡️ 7-day money-back guarantee · No contracts · Cancel anytime ·
            Results or refund
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{ padding: '80px 40px', background: '#F8FAFC' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div
              style={{
                fontSize: 11,
                color: '#F97316',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontWeight: 700,
                marginBottom: 14,
              }}
            >
              FAQ
            </div>
            <h2
              style={{
                fontFamily: "'Instrument Serif',serif",
                fontSize: 'clamp(26px,4vw,44px)',
                color: '#0F172A',
                letterSpacing: '-1px',
              }}
            >
              Questions we always get
            </h2>
          </div>
          <div
            style={{
              border: '1px solid #E2E8F0',
              borderRadius: 12,
              overflow: 'hidden',
              background: '#FFFFFF',
            }}
          >
            {FAQS.map((f, i) => (
              <div
                key={i}
                style={{
                  borderBottom:
                    i < FAQS.length - 1 ? '1px solid #F1F5F9' : 'none',
                }}
              >
                <button
                  className="faq-row"
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  style={{
                    width: '100%',
                    padding: '18px 22px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: activeFaq === i ? '#FFF7ED' : 'transparent',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontFamily: "'Plus Jakarta Sans',sans-serif",
                  }}
                >
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: '#0F172A',
                      paddingRight: 16,
                      letterSpacing: '-.2px',
                    }}
                  >
                    {f.q}
                  </span>
                  <span
                    style={{
                      fontSize: 20,
                      color: '#F97316',
                      flexShrink: 0,
                      transition: 'transform .2s',
                      transform: activeFaq === i ? 'rotate(45deg)' : 'none',
                      lineHeight: 1,
                    }}
                  >
                    +
                  </span>
                </button>
                {activeFaq === i && (
                  <div
                    style={{
                      padding: '0 22px 18px',
                      fontSize: 14,
                      color: '#64748B',
                      lineHeight: 1.75,
                      borderTop: '1px solid #FEF3C7',
                      paddingTop: 14,
                    }}
                  >
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          padding: '80px 40px',
          background: 'linear-gradient(135deg,#F97316 0%,#EA580C 100%)',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: "'Instrument Serif',serif",
              fontSize: 'clamp(28px,4vw,52px)',
              color: '#FFFFFF',
              letterSpacing: '-1.5px',
              marginBottom: 14,
              lineHeight: 1.1,
            }}
          >
            Your competitors are posting.
            <br />
            Are you?
          </h2>
          <p
            style={{
              fontSize: 15,
              color: 'rgba(255,255,255,.7)',
              marginBottom: 36,
              lineHeight: 1.65,
            }}
          >
            Every month without SEO content is a month your competitors pull
            further ahead. Start today — we deliver your first content within 72
            hours of signup.
          </p>
          <button
            className="btn"
            onClick={() => scroll('demo')}
            style={{
              padding: '16px 44px',
              borderRadius: 8,
              background: '#FFFFFF',
              color: '#F97316',
              border: 'none',
              fontSize: 16,
              fontWeight: 800,
              letterSpacing: '-.3px',
            }}
          >
            See Your Content Free →
          </button>
          <div
            style={{
              marginTop: 20,
              fontSize: 12,
              color: 'rgba(255,255,255,.5)',
            }}
          >
            First sample free · No credit card needed · Cancel anytime
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        style={{
          background: '#0A0F1E',
          padding: '48px 40px 28px',
          color: 'rgba(255,255,255,.3)',
        }}
      >
        <div style={{ maxWidth: 1060, margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1fr 1fr',
              gap: 40,
              marginBottom: 40,
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "'Instrument Serif',serif",
                  fontSize: 22,
                  color: '#FFFFFF',
                  marginBottom: 10,
                }}
              >
                Rank<span style={{ color: '#F97316' }}>Local</span> AI
              </div>
              <p style={{ fontSize: 12, lineHeight: 1.8, maxWidth: 280 }}>
                AI-powered SEO content for local service businesses. We write
                it, you rank for it. Starting at $297/month.
              </p>
              <div
                style={{
                  display: 'flex',
                  gap: 8,
                  marginTop: 14,
                  flexWrap: 'wrap',
                }}
              >
                {NICHES.slice(0, 5).map((n) => (
                  <div
                    key={n.id}
                    style={{
                      fontSize: 10,
                      padding: '3px 8px',
                      borderRadius: 4,
                      background: 'rgba(249,115,22,.15)',
                      border: '1px solid rgba(249,115,22,.2)',
                      color: 'rgba(249,115,22,.8)',
                    }}
                  >
                    {n.emoji} {n.label}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div
                style={{
                  fontSize: 10,
                  color: 'rgba(255,255,255,.5)',
                  fontWeight: 700,
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  marginBottom: 14,
                }}
              >
                Services
              </div>
              {[
                'SEO Blog Posts',
                'Google Business Posts',
                'Service Page Content',
                'Keyword Research',
                'Monthly Reports',
              ].map((l) => (
                <div
                  key={l}
                  style={{ fontSize: 12, marginBottom: 8, cursor: 'pointer' }}
                >
                  {l}
                </div>
              ))}
            </div>
            <div>
              <div
                style={{
                  fontSize: 10,
                  color: 'rgba(255,255,255,.5)',
                  fontWeight: 700,
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  marginBottom: 14,
                }}
              >
                Company
              </div>
              {['Pricing', 'How It Works', 'Results', 'FAQ', 'Contact'].map(
                (l) => (
                  <div
                    key={l}
                    style={{ fontSize: 12, marginBottom: 8, cursor: 'pointer' }}
                  >
                    {l}
                  </div>
                )
              )}
            </div>
          </div>
          <div
            style={{
              borderTop: '1px solid rgba(255,255,255,.06)',
              paddingTop: 24,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 10,
            }}
          >
            <div style={{ fontSize: 11 }}>
              © {new Date().getFullYear()} RankLocal AI. All rights reserved.
            </div>
            <div style={{ fontSize: 11 }}>
              AI-generated content service · Not a law firm · Results may vary
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
