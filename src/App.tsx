import { useEffect, useId, useState } from 'react'
import './App.css'

const navItems = [
  { href: '#services', id: 'services', label: 'Services' },
  { href: '#products', id: 'products', label: 'Products' },
  { href: '#process', id: 'process', label: 'Process' },
  { href: '#about', id: 'about', label: 'About' },
  { href: '#contact', id: 'contact', label: 'Contact' },
]

const services = [
  {
    tag: '01',
    label: 'Mobile',
    title: 'Mobile app design & development',
    copy: 'End-to-end iOS and Android apps — UX/UI design, native or cross-platform build, APIs, testing, and App Store / Play Store launch.',
  },
  {
    tag: '02',
    label: 'Web',
    title: 'Web app design & development',
    copy: 'Custom web applications and SaaS — product design, dashboards, portals, admin panels, and secure APIs built for performance and scale.',
  },
  {
    tag: '03',
    label: 'AI',
    title: 'Artificial intelligence',
    copy: 'AI-powered features for your products — chat assistants, recommendations, automation, content tools, and smart workflows tailored to your users.',
  },
  {
    tag: '04',
    label: 'Games',
    title: 'Games',
    copy: 'Casual and mid-core mobile games — art direction, gameplay loops, live ops readiness, and smooth performance on real devices.',
  },
  {
    tag: '05',
    label: 'Brand',
    title: 'Branding',
    copy: 'Brand identity for digital products — naming support, visual systems, logo direction, tone of voice, and consistent UI brand language.',
  },
  {
    tag: '06',
    label: 'Prototype',
    title: 'Prototyping',
    copy: 'Clickable prototypes and design proofs — flows, wireframes, and interactive demos so stakeholders can feel the product before build.',
  },
  {
    tag: '07',
    label: 'MVP',
    title: 'MVP development',
    copy: 'Ship the smallest lovable product fast — scoped features, clean architecture, and a launch path from idea to first paying users.',
  },
  {
    tag: '08',
    label: 'Consolidate',
    title: 'Consolidation of existing systems',
    copy: 'Unify legacy apps, scattered tools, and outdated platforms — migrate, refactor, and modernize without losing what already works.',
  },
  {
    tag: '09',
    label: 'Platforms',
    title: 'Home services marketplace',
    copy: 'UrbanClap-style booking platforms for cleaning, repairs, beauty, and on-demand pros — discovery, scheduling, payments, and ratings.',
  },
  {
    tag: '10',
    label: 'Growth',
    title: 'Digital marketing systems',
    copy: 'Campaign sites, analytics dashboards, automation, and content tooling that help brands reach the right people without guessing.',
  },
  {
    tag: '11',
    label: 'Learning',
    title: 'Kids learning apps',
    copy: 'Playful, age-aware learning experiences — reading, math, and curiosity products designed for small hands and trusted by parents.',
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
        <circle
          cx="32"
          cy="32"
          r="22.8"
          stroke={`url(#${ring})`}
          strokeWidth="1.15"
          fill="none"
        />
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
    const ids = navItems.map((item) => item.id)
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

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site">
      <div className="noise" aria-hidden="true" />

      <header className={`topnav ${scrolled ? 'topnav-scrolled' : ''}`}>
        <div className="topnav-inner">
          <a className="brand" href="#top" aria-label="Jupeemoon home" onClick={closeMenu}>
            <LogoMark className="brand-mark" />
            <span className="brand-text">
              Jupee<span>moon</span>
            </span>
          </a>

          <nav className="nav-links" aria-label="Primary">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={active === item.id ? 'is-active' : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
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
            {navItems.map((item) => (
              <a key={item.id} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
          </nav>
          <a className="btn btn-primary mobile-cta" href="#contact" onClick={closeMenu}>
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
              prototyping, MVPs, and modernization of existing products — built
              with craft, shipped with care.
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href="#contact">
                Talk to us
              </a>
              <a className="btn btn-ghost" href="#services">
                Explore services
              </a>
            </div>
          </div>
        </section>

        <section className="marquee" aria-hidden="true">
          <div className="marquee-track">
            <span>Mobile apps</span>
            <span>Web apps</span>
            <span>Artificial intelligence</span>
            <span>Games</span>
            <span>Branding</span>
            <span>Prototyping</span>
            <span>MVP</span>
            <span>Consolidation</span>
            <span>Home services</span>
            <span>Digital marketing</span>
            <span>Kids learning</span>
            <span>Mobile apps</span>
            <span>Web apps</span>
            <span>Artificial intelligence</span>
            <span>Games</span>
            <span>Branding</span>
            <span>Prototyping</span>
            <span>MVP</span>
            <span>Consolidation</span>
            <span>Home services</span>
            <span>Digital marketing</span>
            <span>Kids learning</span>
          </div>
        </section>

        <section className="section services" id="services">
          <div className="section-head reveal">
            <span className="eyebrow">What we build</span>
            <h2>Full-stack product services.</h2>
            <p>
              From first prototype and brand to MVP, AI features, games, and
              consolidating what you already have — design and development under
              one roof.
            </p>
          </div>
          <div className="service-list">
            {services.map((item, index) => (
              <article
                className="service-item reveal"
                key={item.title}
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <span className="service-num">{item.tag}</span>
                <div className="service-body">
                  <span className="service-tag">{item.label}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
                <span className="service-arrow" aria-hidden="true">
                  →
                </span>
              </article>
            ))}
          </div>
        </section>

        <section className="section products" id="products">
          <div className="section-head reveal">
            <span className="eyebrow">Flagship focus</span>
            <h2>Learning and play, done with care.</h2>
            <p>
              Two product worlds we love — experiences that stick for families
              and sessions that spark joy for players.
            </p>
          </div>
          <div className="product-grid">
            <article className="product product-learn reveal">
              <div className="product-glow" aria-hidden="true" />
              <span className="service-tag">Kids learning</span>
              <h3>Curious minds, calm parents</h3>
              <p>
                Interactive lessons, clear progress, and interfaces designed for
                small hands and short attention spans.
              </p>
            </article>
            <article
              className="product product-games reveal"
              style={{ transitionDelay: '90ms' }}
            >
              <div className="product-glow" aria-hidden="true" />
              <span className="service-tag">Mobile games</span>
              <h3>Sessions that spark joy</h3>
              <p>
                From first tap to live ops — art direction, gameplay loops, and
                performance tuned for real phones.
              </p>
            </article>
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
                home-services marketplace or a classroom companion, we ship
                interfaces people remember and systems that stay up.
              </p>
            </div>
            <div className="stat-row reveal" aria-label="Company highlights">
              <div className="stat">
                <strong>11</strong>
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
                Tell us about your mobile or web product, AI idea, game, brand,
                prototype, MVP, or an existing system you want to consolidate. We
                will reply with a clear path from brief to build.
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
          <a href="#services">Services</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
        </nav>
        <p>© {new Date().getFullYear()} Jupeemoon Software Pvt Ltd</p>
      </footer>
    </div>
  )
}

export default App
