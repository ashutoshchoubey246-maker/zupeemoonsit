import { useEffect, useId, useState } from 'react'
import './App.css'

const productItems = [
  {
    id: 'kids',
    title: 'Kids learning apps',
    copy: 'Age-aware lessons and playful progress parents can trust.',
    href: '#products',
    badge: 'EdTech',
  },
  {
    id: 'games',
    title: 'Mobile games',
    copy: 'Casual and mid-core titles tuned for retention and joy.',
    href: '#products',
    badge: 'Play',
  },
  {
    id: 'home',
    title: 'Home services platforms',
    copy: 'UrbanClap-style booking, payments, and pro marketplaces.',
    href: '#products',
    badge: 'Platform',
  },
  {
    id: 'marketing',
    title: 'Marketing systems',
    copy: 'Campaign sites, dashboards, and growth automation.',
    href: '#products',
    badge: 'Growth',
  },
]

const serviceItems = [
  {
    tag: '01',
    title: 'Mobile app design & development',
    copy: 'iOS and Android — UX/UI, native or cross-platform, store-ready launches.',
  },
  {
    tag: '02',
    title: 'Web app design & development',
    copy: 'SaaS, dashboards, portals, and APIs built for speed and scale.',
  },
  {
    tag: '03',
    title: 'Artificial intelligence',
    copy: 'Assistants, recommendations, automation, and smart product features.',
  },
  {
    tag: '04',
    title: 'Games',
    copy: 'Gameplay loops, art direction, and live-ops ready mobile games.',
  },
  {
    tag: '05',
    title: 'Branding',
    copy: 'Visual systems, logo direction, and consistent product brand language.',
  },
  {
    tag: '06',
    title: 'Prototyping',
    copy: 'Wireframes and clickable demos before you invest in full build.',
  },
  {
    tag: '07',
    title: 'MVP development',
    copy: 'Ship the smallest lovable product from idea to first users.',
  },
  {
    tag: '08',
    title: 'Consolidation of existing systems',
    copy: 'Migrate, refactor, and modernize without losing what works.',
  },
]

const steps = [
  {
    n: '01',
    title: 'Discover',
    copy: 'We map the problem, users, and the smallest product that proves value.',
  },
  {
    n: '02',
    title: 'Design',
    copy: 'Interfaces and flows shaped for clarity — then stress-tested with real scenarios.',
  },
  {
    n: '03',
    title: 'Ship',
    copy: 'Build, launch, and iterate with metrics that keep the product honest.',
  },
]

function LogoMark({ className = '' }: { className?: string }) {
  const uid = useId().replace(/:/g, '')
  const disc = `jm-disc-${uid}`
  const textGrad = `jm-text-${uid}`
  const rayGrad = `jm-ray-${uid}`
  const glow = `jm-glow-${uid}`
  const ring = `jm-ring-${uid}`

  const rays = Array.from({ length: 18 }, (_, i) => {
    const angle = (i * 20 * Math.PI) / 180
    const major = i % 3 === 0
    const mid = i % 3 === 1
    const inner = major ? 20.8 : mid ? 21.6 : 22.2
    const outer = major ? 31.2 : mid ? 28.4 : 26.2
    return {
      major,
      mid,
      x1: 32 + Math.cos(angle) * inner,
      y1: 32 + Math.sin(angle) * inner,
      x2: 32 + Math.cos(angle) * outer,
      y2: 32 + Math.sin(angle) * outer,
    }
  })

  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id={disc} cx="34%" cy="28%" r="72%">
          <stop offset="0%" stopColor="#F7FBFF" />
          <stop offset="45%" stopColor="#D6E8F7" />
          <stop offset="100%" stopColor="#9BC4F0" />
        </radialGradient>
        <linearGradient id={textGrad} x1="14" y1="12" x2="52" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0F2A5C" />
          <stop offset="0.35" stopColor="#1E4A8C" />
          <stop offset="0.7" stopColor="#2F6FED" />
          <stop offset="1" stopColor="#7EB6E8" />
        </linearGradient>
        <linearGradient id={rayGrad} x1="32" y1="0" x2="32" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7EB6E8" />
          <stop offset="0.45" stopColor="#2F6FED" />
          <stop offset="1" stopColor="#1E4A8C" />
        </linearGradient>
        <linearGradient id={ring} x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9BC4F0" stopOpacity="0.2" />
          <stop offset="0.5" stopColor="#2F6FED" stopOpacity="0.7" />
          <stop offset="1" stopColor="#7EB6E8" stopOpacity="0.25" />
        </linearGradient>
        <radialGradient id={glow} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2F6FED" stopOpacity="0.32" />
          <stop offset="70%" stopColor="#7EB6E8" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#2F6FED" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="32" cy="32" r="31.5" fill={`url(#${glow})`} />
      <circle cx="32" cy="32" r="18.8" fill={`url(#${disc})`} />
      <circle cx="32" cy="32" r="18.8" stroke="#2F6FED" strokeOpacity="0.22" strokeWidth="1.1" />
      <circle cx="32" cy="32" r="16.2" stroke="#1E4A8C" strokeOpacity="0.1" strokeWidth="0.7" />

      <g className="logo-rays">
        <circle cx="32" cy="32" r="22.8" stroke={`url(#${ring})`} strokeWidth="1.15" fill="none" />
        <circle
          cx="32"
          cy="32"
          r="24.6"
          stroke={`url(#${rayGrad})`}
          strokeWidth="0.7"
          strokeOpacity="0.35"
          strokeDasharray="1.8 2.8"
          fill="none"
        />
        {rays.map((ray, i) => (
          <line
            key={i}
            x1={ray.x1}
            y1={ray.y1}
            x2={ray.x2}
            y2={ray.y2}
            stroke={`url(#${rayGrad})`}
            strokeWidth={ray.major ? 2.35 : ray.mid ? 1.4 : 0.95}
            strokeLinecap="round"
            opacity={ray.major ? 1 : ray.mid ? 0.7 : 0.42}
          />
        ))}
        {rays
          .filter((r) => r.major)
          .map((ray, i) => (
            <g key={`tip-${i}`}>
              <circle cx={ray.x2} cy={ray.y2} r="1.7" fill="#7EB6E8" opacity="0.45" />
              <circle cx={ray.x2} cy={ray.y2} r="1.05" fill="#2F6FED" />
            </g>
          ))}
      </g>

      <text
        x="32"
        y="33.2"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={`url(#${textGrad})`}
        fontFamily="Bricolage Grotesque, Arial Black, sans-serif"
        fontWeight="800"
        fontSize="18.5"
        letterSpacing="-1.7"
      >
        JM
      </text>
    </svg>
  )
}

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<'products' | 'services' | null>(null)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const ids = ['products', 'services', 'process', 'about', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActive(visible.target.id)
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: [0.1, 0.35, 0.6] },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  const closeAll = () => {
    setMenuOpen(false)
    setOpenMenu(null)
  }

  return (
    <div className="site">
      <div className="noise" aria-hidden="true" />

      <header className={`topnav ${scrolled ? 'topnav-scrolled' : ''}`}>
        <div className="topnav-inner">
          <a className="brand" href="#top" aria-label="Jupeemoon home" onClick={closeAll}>
            <LogoMark className="brand-mark" />
            <span className="brand-text">
              Jupee<span>moon</span>
            </span>
          </a>

          <nav className="nav-links" aria-label="Primary">
            <div
              className={`nav-item ${openMenu === 'products' ? 'is-open' : ''} ${active === 'products' ? 'is-active' : ''}`}
              onMouseEnter={() => setOpenMenu('products')}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                type="button"
                className="nav-trigger"
                aria-expanded={openMenu === 'products'}
                onClick={() => setOpenMenu((v) => (v === 'products' ? null : 'products'))}
              >
                Products
                <span className="nav-caret" aria-hidden="true" />
              </button>
              <div className="mega-panel" role="menu">
                <div className="mega-head">
                  <strong>Products</strong>
                  <span>Flagship builds we design and ship</span>
                </div>
                <div className="mega-grid">
                  {productItems.map((item) => (
                    <a key={item.id} href={item.href} className="mega-card" onClick={closeAll}>
                      <span className="mega-badge">{item.badge}</span>
                      <strong>{item.title}</strong>
                      <p>{item.copy}</p>
                    </a>
                  ))}
                </div>
                <a className="mega-foot" href="#products" onClick={closeAll}>
                  Explore all products →
                </a>
              </div>
            </div>

            <div
              className={`nav-item ${openMenu === 'services' ? 'is-open' : ''} ${active === 'services' ? 'is-active' : ''}`}
              onMouseEnter={() => setOpenMenu('services')}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                type="button"
                className="nav-trigger"
                aria-expanded={openMenu === 'services'}
                onClick={() => setOpenMenu((v) => (v === 'services' ? null : 'services'))}
              >
                Services
                <span className="nav-caret" aria-hidden="true" />
              </button>
              <div className="mega-panel mega-panel-wide" role="menu">
                <div className="mega-head">
                  <strong>Services</strong>
                  <span>Design, build, and modernize under one roof</span>
                </div>
                <div className="mega-grid mega-grid-3">
                  {serviceItems.slice(0, 6).map((item) => (
                    <a key={item.tag} href="#services" className="mega-card" onClick={closeAll}>
                      <span className="mega-badge">{item.tag}</span>
                      <strong>{item.title}</strong>
                      <p>{item.copy}</p>
                    </a>
                  ))}
                </div>
                <a className="mega-foot" href="#services" onClick={closeAll}>
                  See all services →
                </a>
              </div>
            </div>

            <a href="#process" className={active === 'process' ? 'is-active' : undefined}>
              Process
            </a>
            <a href="#about" className={active === 'about' ? 'is-active' : undefined}>
              About
            </a>
            <a href="#contact" className={active === 'contact' ? 'is-active' : undefined}>
              Contact
            </a>
          </nav>

          <div className="nav-actions">
            <a className="nav-link-quiet" href="mailto:contact@jupeemoon.com">
              Contact sales
            </a>
            <a className="nav-cta" href="#contact">
              Start a project
            </a>
            <button
              className={`nav-toggle ${menuOpen ? 'is-open' : ''}`}
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        <div className={`mobile-panel ${menuOpen ? 'is-open' : ''}`} hidden={!menuOpen}>
          <nav className="mobile-links" aria-label="Mobile">
            <a href="#products" onClick={closeAll}>
              Products
            </a>
            <a href="#services" onClick={closeAll}>
              Services
            </a>
            <a href="#process" onClick={closeAll}>
              Process
            </a>
            <a href="#about" onClick={closeAll}>
              About
            </a>
            <a href="#contact" onClick={closeAll}>
              Contact
            </a>
          </nav>
          <a className="btn btn-primary mobile-cta" href="#contact" onClick={closeAll}>
            Start a project
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-label="Hero">
          <div className="hero-mesh" aria-hidden="true" />
          <div className="hero-beam" aria-hidden="true" />
          <div className="hero-crescent" aria-hidden="true" />
          <div className="hero-copy">
            <p className="hero-kicker">Jupeemoon Software Pvt Ltd</p>
            <p className="hero-brand">Jupeemoon</p>
            <h1>Products with gravity.</h1>
            <p>
              Mobile and web design & development, AI, games, branding,
              prototyping, MVPs, and modernization — built with craft, shipped
              with care.
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href="#contact">
                Talk to us
              </a>
              <a className="btn btn-ghost" href="#products">
                Explore products
              </a>
            </div>
          </div>
        </section>

        <section className="marquee" aria-hidden="true">
          <div className="marquee-track">
            <span>Products</span>
            <span>Services</span>
            <span>Mobile apps</span>
            <span>Web apps</span>
            <span>AI</span>
            <span>Games</span>
            <span>MVP</span>
            <span>Branding</span>
            <span>Products</span>
            <span>Services</span>
            <span>Mobile apps</span>
            <span>Web apps</span>
            <span>AI</span>
            <span>Games</span>
            <span>MVP</span>
            <span>Branding</span>
          </div>
        </section>

        <section className="section products" id="products">
          <div className="section-head reveal">
            <span className="eyebrow">Products</span>
            <h2>The best builds at a glance.</h2>
            <p>
              Flagship product lanes — pick what you need, or combine them into
              one end-to-end engagement.
            </p>
          </div>

          <div className="glance-table reveal" role="table" aria-label="Products at a glance">
            <div className="glance-row glance-head" role="row">
              <span role="columnheader">Best for</span>
              <span role="columnheader">Product</span>
              <span role="columnheader">Standout</span>
            </div>
            {productItems.map((item) => (
              <a key={item.id} href={item.href} className="glance-row" role="row">
                <span className="glance-badge" role="cell">
                  {item.badge}
                </span>
                <strong role="cell">{item.title}</strong>
                <span role="cell">{item.copy}</span>
              </a>
            ))}
          </div>

          <div className="product-grid">
            {productItems.map((item, index) => (
              <article
                key={item.id}
                className={`product product-${item.id} reveal`}
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <div className="product-glow" aria-hidden="true" />
                <span className="service-tag">{item.badge}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <a className="product-link" href="#contact">
                  Talk about this →
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section services" id="services">
          <div className="section-head reveal">
            <span className="eyebrow">Services</span>
            <h2>What makes a great product partner.</h2>
            <p>
              Design and engineering across mobile, web, AI, games, brand, and
              modernization — so you can ship faster without splitting vendors.
            </p>
          </div>
          <div className="service-card-grid">
            {serviceItems.map((item, index) => (
              <article
                className="service-card reveal"
                key={item.title}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <span className="service-num">{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section process" id="process">
          <div className="section-head reveal">
            <span className="eyebrow">How we work</span>
            <h2>Simple path from brief to launch.</h2>
            <p>Tight loops. Clear milestones. No mystery phases.</p>
          </div>
          <div className="process-grid">
            {steps.map((step, index) => (
              <article
                className="process-step reveal"
                key={step.n}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <span className="process-n">{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section about" id="about">
          <div className="about-grid">
            <div className="section-head reveal">
              <span className="eyebrow">About Jupeemoon</span>
              <h2>Soft glow. Sharp edges.</h2>
              <p>
                We chase ambitious products without losing warmth. Whether it is a
                marketplace, learning app, or game, we ship interfaces people
                remember and systems that stay up.
              </p>
            </div>
            <div className="stat-row reveal" aria-label="Company highlights">
              <div className="stat">
                <strong>8+</strong>
                <span>Service lanes</span>
              </div>
              <div className="stat">
                <strong>0→1</strong>
                <span>Idea to launch</span>
              </div>
              <div className="stat">
                <strong>Live</strong>
                <span>Always-on mindset</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="contact-shell reveal">
            <div className="contact-panel">
              <span className="eyebrow">Contact</span>
              <h2>Let’s build your next product.</h2>
              <p>
                Tell us about your product idea, service need, or an existing
                system you want to consolidate. We will reply with a clear path
                from brief to build.
              </p>
              <div className="cta-row">
                <a className="btn btn-primary" href="mailto:contact@jupeemoon.com">
                  Email contact@jupeemoon.com
                </a>
                <a className="btn btn-ghost" href="#services">
                  Review services
                </a>
              </div>
              <div className="contact-meta">
                <span>Jupeemoon Software Pvt Ltd</span>
                <a href="mailto:contact@jupeemoon.com">contact@jupeemoon.com</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand brand-footer" href="#top">
          <LogoMark className="brand-mark" />
          <span className="brand-text">
            Jupee<span>moon</span>
          </span>
        </a>
        <nav className="footer-links" aria-label="Footer">
          <a href="#products">Products</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
        <p>© {new Date().getFullYear()} Jupeemoon Software Pvt Ltd</p>
      </footer>
    </div>
  )
}

export default App
