import { useEffect, useState, type FormEvent, type ReactNode } from 'react'
import './App.css'
import { Icon, type IconName } from './components/Icon'
import { Logo } from './components/Logo'
import {
  CONTACT_EMAIL,
  commitments,
  faqs,
  featuredServices,
  industries,
  models,
  practices,
  products,
  services,
  stack,
  steps,
  timelines,
  voiceSolutions,
} from './content'

type Menu = 'services' | 'products' | null

const sectionIds = ['services', 'voice-ai', 'process', 'engineering', 'products', 'technologies', 'faq', 'contact']

const productTags: Record<string, string[]> = {
  junocrm: ['Sales & CRM', 'Inventory', 'Purchasing', 'Finance', 'HR & payroll', 'Reports'],
  calito: ['Voice agents', 'In-app voice', 'Talking avatars', 'Call automation'],
}

const platforms: { icon: IconName; label: string }[] = [
  { icon: 'mobile', label: 'iOS & Android' },
  { icon: 'web', label: 'Web apps' },
  { icon: 'enterprise', label: 'Enterprise' },
  { icon: 'cloud', label: 'Cloud' },
  { icon: 'ai', label: 'AI' },
  { icon: 'avatar', label: 'Voice AI & avatars' },
]

function SectionHead({
  eyebrow,
  title,
  children,
  align = 'center',
}: {
  eyebrow: string
  title: string
  children?: ReactNode
  align?: 'center' | 'left'
}) {
  return (
    <div className={`section-head section-head-${align} reveal`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {children ? <p>{children}</p> : null}
    </div>
  )
}

function HeroVisual() {
  const bars = [38, 52, 44, 64, 58, 72, 66, 84, 76, 90, 82, 96]
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="mock-browser">
        <div className="mock-bar">
          <span />
          <span />
          <span />
          <div className="mock-url">app.yourproduct.com</div>
        </div>
        <div className="mock-body">
          <div className="mock-side">
            <i className="mock-side-logo" />
            <i className="is-active" />
            <i />
            <i />
            <i />
          </div>
          <div className="mock-main">
            <div className="mock-kpis">
              <div>
                <small>Active users</small>
                <b>12,480</b>
                <em>+18%</em>
              </div>
              <div>
                <small>Orders</small>
                <b>1,284</b>
                <em>+9%</em>
              </div>
              <div>
                <small>Uptime</small>
                <b>99.9%</b>
                <em>SLA</em>
              </div>
            </div>
            <div className="mock-chart">
              {bars.map((h, i) => (
                <span key={i} style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="mock-rows">
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
      </div>

      <div className="mock-phone">
        <div className="mock-screen">
          <div className="mock-notch" />
          <div className="mock-app-head">
            <b>Good morning</b>
            <i />
          </div>
          <div className="mock-app-card">
            <small>This week</small>
            <b>24 bookings</b>
            <svg viewBox="0 0 100 30" preserveAspectRatio="none">
              <path d="M0 26 L14 20 L28 22 L42 13 L56 16 L70 8 L84 10 L100 3" />
            </svg>
          </div>
          <div className="mock-list">
            <div>
              <i />
              <span />
            </div>
            <div>
              <i />
              <span />
            </div>
            <div>
              <i />
              <span />
            </div>
          </div>
          <div className="mock-tabbar">
            <i className="is-active" />
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>

      <div className="float-chip chip-a">
        <Icon name="checkCircle" />
        Build passed · deployed
      </div>
      <div className="float-chip chip-b">
        <Icon name="mobile" />
        iOS · Android · Web
      </div>
    </div>
  )
}

function VoiceDemo() {
  const bars = Array.from({ length: 36 }, (_, i) =>
    28 + Math.round(Math.abs(Math.sin(i * 0.72) * Math.cos(i * 0.31)) * 72),
  )
  return (
    <div className="voice-demo reveal" aria-hidden="true">
      <div className="voice-screen">
        <div className="voice-stage">
          <span className="voice-badge">
            <i />
            Live · Talking avatar
          </span>
          <svg className="avatar-svg" viewBox="0 0 200 160" fill="none">
            <defs>
              <linearGradient id="av-head" x1="70" y1="36" x2="130" y2="96" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F2DC80" />
                <stop offset="1" stopColor="#C9A82E" />
              </linearGradient>
              <linearGradient id="av-body" x1="100" y1="104" x2="100" y2="160" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3D9A52" />
                <stop offset="1" stopColor="#1F6B35" />
              </linearGradient>
            </defs>
            <circle className="av-ring av-ring-2" cx="100" cy="70" r="66" />
            <circle className="av-ring" cx="100" cy="70" r="50" />
            <path d="M42 160c3-34 28-52 58-52s55 18 58 52z" fill="url(#av-body)" />
            <path d="M86 109l14 16 14-16" stroke="#fff" strokeOpacity="0.28" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="92" y="90" width="16" height="20" rx="7" fill="#B8921F" />
            <circle cx="100" cy="66" r="30" fill="url(#av-head)" />
            <path d="M70 64c-1-19 12-31 30-31 19 0 32 12 30 32-5-10-14-17-30-17-15 0-25 6-30 16z" fill="#2A2108" />
            <path d="M86 42a22 22 0 0 1 14-4" stroke="#fff" strokeOpacity="0.3" strokeWidth="2.5" strokeLinecap="round" />
            <g className="av-eyes" fill="#101C14">
              <ellipse cx="89" cy="64" rx="2.8" ry="3.4" />
              <ellipse cx="111" cy="64" rx="2.8" ry="3.4" />
            </g>
            <rect className="av-mouth" x="91" y="77" width="18" height="6" rx="3" fill="#101C14" />
          </svg>
          <div className="voice-wave">
            {bars.map((h, i) => (
              <span key={i} style={{ height: `${h}%`, animationDelay: `${-((i * 0.37) % 1.2).toFixed(2)}s` }} />
            ))}
          </div>
        </div>
        <div className="voice-body">
          <div className="voice-meta">
            <span className="voice-meta-icon">
              <Icon name="wave" />
            </span>
            <div>
              <strong>Calito</strong>
              <small>Voice AI · speaking</small>
            </div>
          </div>
          <p className="bubble bubble-user">Can I book a service visit for Saturday morning?</p>
          <p className="bubble bubble-ai">
            Of course! I have 9:30 and 11:00 free on Saturday. Which one works best for you?
          </p>
        </div>
      </div>
      <div className="float-chip voice-chip">
        <Icon name="mic" />
        Powered by Calito AI
      </div>
    </div>
  )
}

function ContactForm() {
  const [sent, setSent] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const get = (key: string) => String(data.get(key) ?? '').trim()
    const subject = `Project enquiry — ${get('service') || 'New project'}`
    const body = [
      `Name: ${get('name')}`,
      `Email: ${get('email')}`,
      `Company: ${get('company') || '—'}`,
      `Service: ${get('service')}`,
      `Timeline: ${get('timeline')}`,
      '',
      get('message'),
    ].join('\n')
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="field-row">
        <label className="field">
          <span>Full name</span>
          <input name="name" type="text" autoComplete="name" required placeholder="Your name" />
        </label>
        <label className="field">
          <span>Work email</span>
          <input name="email" type="email" autoComplete="email" required placeholder="you@company.com" />
        </label>
      </div>
      <div className="field-row">
        <label className="field">
          <span>Company</span>
          <input name="company" type="text" autoComplete="organization" placeholder="Optional" />
        </label>
        <label className="field">
          <span>What do you need?</span>
          <select name="service" required defaultValue="">
            <option value="" disabled>
              Select a service
            </option>
            {featuredServices.map((s) => (
              <option key={s.id}>{s.eyebrow.replace(' development', '')}</option>
            ))}
            {services.map((s) => (
              <option key={s.id}>{s.title}</option>
            ))}
            <option>Something else</option>
          </select>
        </label>
      </div>
      <label className="field">
        <span>Timeline</span>
        <select name="timeline" defaultValue={timelines[1]}>
          {timelines.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>
      <label className="field">
        <span>Tell us about your project</span>
        <textarea name="message" rows={4} required placeholder="Goals, users, platforms, any existing systems…" />
      </label>
      <button className="btn btn-gold btn-lg btn-block" type="submit">
        Send project brief
        <Icon name="arrowRight" />
      </button>
      <p className="form-note" role="status">
        {sent
          ? `Your email app should open with the brief ready. If it doesn't, write to ${CONTACT_EMAIL}.`
          : 'Opens your email app with the brief filled in. We treat every enquiry as confidential.'}
      </p>
    </form>
  )
}

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<Menu>(null)
  const [active, setActive] = useState('')
  const [stackTab, setStackTab] = useState(stack[0].id)

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
    if (!openMenu) return
    const onDown = (e: PointerEvent) => {
      if (!(e.target as Element).closest('.nav-item')) setOpenMenu(null)
    }
    document.addEventListener('pointerdown', onDown)
    return () => document.removeEventListener('pointerdown', onDown)
  }, [openMenu])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenMenu(null)
        setMenuOpen(false)
      }
    }
    const desktop = window.matchMedia('(min-width: 1101px)')
    const onDesktop = () => desktop.matches && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    desktop.addEventListener('change', onDesktop)
    return () => {
      window.removeEventListener('keydown', onKey)
      desktop.removeEventListener('change', onDesktop)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActive(visible.target.id)
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: [0, 0.2, 0.5] },
    )
    sectionIds.forEach((id) => {
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
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )
    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  const closeAll = () => {
    setMenuOpen(false)
    setOpenMenu(null)
  }

  const navItemClass = (id: 'services' | 'products') =>
    `nav-item ${openMenu === id ? 'is-open' : ''} ${active === id ? 'is-active' : ''}`

  const currentStack = stack.find((s) => s.id === stackTab) ?? stack[0]

  return (
    <div className="site">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className={`topnav ${scrolled ? 'topnav-scrolled' : ''}`}>
        <div className="container topnav-inner">
          <a className="brand" href="#top" aria-label="Jupeemoon home" onClick={closeAll}>
            <Logo />
          </a>

          <nav className="nav-links" aria-label="Primary">
            <div
              className={navItemClass('services')}
              onPointerEnter={(e) => e.pointerType === 'mouse' && setOpenMenu('services')}
              onPointerLeave={(e) => e.pointerType === 'mouse' && setOpenMenu(null)}
            >
              <button
                type="button"
                className="nav-trigger"
                aria-expanded={openMenu === 'services'}
                aria-controls="mega-services"
                onClick={() => setOpenMenu((v) => (v === 'services' ? null : 'services'))}
              >
                Services
                <span className="nav-caret" aria-hidden="true" />
              </button>
              <div className="mega-panel mega-services" id="mega-services">
                <div className="mega-featured">
                  {featuredServices.map((f) => (
                    <a key={f.id} href={`#service-${f.id}`} className="mega-feature" onClick={closeAll}>
                      <span className="mega-icon">
                        <Icon name={f.icon} />
                      </span>
                      <span>
                        <strong>{f.eyebrow}</strong>
                        <small>{f.stack.slice(0, 3).join(' · ')}</small>
                      </span>
                    </a>
                  ))}
                  <a className="mega-cta" href="#contact" onClick={closeAll}>
                    Get an estimate
                    <Icon name="arrowRight" />
                  </a>
                </div>
                <div className="mega-list">
                  {services.map((s) => (
                    <a
                      key={s.id}
                      href={s.id === 'avatars' ? '#voice-ai' : '#other-services'}
                      className="mega-row"
                      onClick={closeAll}
                    >
                      <Icon name={s.icon} />
                      <span>{s.title}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <a href="#voice-ai" className={active === 'voice-ai' ? 'is-active' : undefined}>
              Voice AI
            </a>
            <a href="#process" className={active === 'process' ? 'is-active' : undefined}>
              Process
            </a>
            <a href="#engineering" className={active === 'engineering' ? 'is-active' : undefined}>
              Why us
            </a>

            <div
              className={navItemClass('products')}
              onPointerEnter={(e) => e.pointerType === 'mouse' && setOpenMenu('products')}
              onPointerLeave={(e) => e.pointerType === 'mouse' && setOpenMenu(null)}
            >
              <button
                type="button"
                className="nav-trigger"
                aria-expanded={openMenu === 'products'}
                aria-controls="mega-products"
                onClick={() => setOpenMenu((v) => (v === 'products' ? null : 'products'))}
              >
                Products
                <span className="nav-caret" aria-hidden="true" />
              </button>
              <div className="mega-panel mega-products" id="mega-products">
                {products.map((p) => (
                  <a key={p.id} href="#products" className="mega-product" onClick={closeAll}>
                    <span className="mega-icon">
                      <Icon name={p.icon} />
                    </span>
                    <span>
                      <strong>{p.title}</strong>
                      <small>{p.copy}</small>
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <a href="#technologies" className={active === 'technologies' ? 'is-active' : undefined}>
              Technologies
            </a>
            <a href="#faq" className={active === 'faq' ? 'is-active' : undefined}>
              FAQ
            </a>
          </nav>

          <div className="nav-actions">
            <a className="btn btn-gold btn-sm nav-cta" href="#contact" onClick={closeAll}>
              Start a project
            </a>
            <button
              className={`nav-toggle ${menuOpen ? 'is-open' : ''}`}
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-panel"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        <div id="mobile-panel" className={`mobile-panel ${menuOpen ? 'is-open' : ''}`} hidden={!menuOpen}>
          <nav className="mobile-links" aria-label="Mobile">
            <a href="#services" onClick={closeAll}>
              Services
            </a>
            <a href="#voice-ai" onClick={closeAll}>
              Voice AI & avatars
            </a>
            <a href="#process" onClick={closeAll}>
              Process
            </a>
            <a href="#engineering" onClick={closeAll}>
              Why us
            </a>
            <a href="#products" onClick={closeAll}>
              Products
            </a>
            <a href="#technologies" onClick={closeAll}>
              Technologies
            </a>
            <a href="#faq" onClick={closeAll}>
              FAQ
            </a>
            <a href="#contact" onClick={closeAll}>
              Contact
            </a>
          </nav>
          <a className="btn btn-gold btn-lg btn-block" href="#contact" onClick={closeAll}>
            Start a project
          </a>
        </div>
      </header>

      <main id="main">
        {/* —— Hero —— */}
        <section className="hero" id="top" aria-label="Introduction">
          <div className="hero-bg" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="pill">
                <span className="pill-dot" />
                Mobile · Web · Voice AI · Enterprise
              </p>
              <h1>
                We build <span className="hl-gold">mobile apps</span>,{' '}
                <span className="hl-green">web apps</span> and software that scales.
              </h1>
              <p className="hero-lede">
                Jupeemoon is a product engineering company. From idea and UX to launch and
                long-term support, we ship reliable iOS, Android, web and cloud applications for
                startups and growing businesses.
              </p>
              <div className="cta-row">
                <a className="btn btn-gold btn-lg" href="#contact">
                  Start your project
                  <Icon name="arrowRight" />
                </a>
                <a className="btn btn-outline-light btn-lg" href="#services">
                  Explore services
                </a>
              </div>
              <ul className="hero-trust">
                <li>
                  <Icon name="lock" />
                  NDA from day one
                </li>
                <li>
                  <Icon name="code" />
                  You own 100% of the code
                </li>
                <li>
                  <Icon name="calendar" />
                  Weekly demos
                </li>
              </ul>
            </div>
            <HeroVisual />
          </div>

          <div className="container">
            <ul className="platforms" aria-label="Platforms we build for">
              {platforms.map((p) => (
                <li key={p.label}>
                  <Icon name={p.icon} />
                  {p.label}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* —— Services —— */}
        <section className="section" id="services">
          <div className="container">
            <SectionHead
              eyebrow="Services"
              title="Everything you need to build, launch and grow a digital product."
            >
              One accountable team for strategy, design, engineering and support — whether you need
              a mobile app, a web platform or a custom system for your business.
            </SectionHead>

            <div className="feature-stack">
              {featuredServices.map((f, i) => (
                <article
                  key={f.id}
                  id={`service-${f.id}`}
                  className={`feature reveal ${i % 2 ? 'feature-flip' : ''}`}
                >
                  <div className="feature-copy">
                    <span className="feature-icon">
                      <Icon name={f.icon} />
                    </span>
                    <span className="eyebrow">{f.eyebrow}</span>
                    <h3>{f.title}</h3>
                    <p>{f.copy}</p>
                    <ul className="chips" aria-label="Technologies">
                      {f.stack.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                    <a className="link-arrow" href="#contact">
                      Discuss your {f.id === 'mobile' ? 'mobile app' : 'web app'}
                      <Icon name="arrowRight" />
                    </a>
                  </div>
                  <div className="feature-panel">
                    <p className="feature-panel-title">What we deliver</p>
                    <ul>
                      {f.capabilities.map((c) => (
                        <li key={c}>
                          <Icon name="check" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>

            <div className="subhead reveal" id="other-services">
              <h3>…and every other application your business needs.</h3>
              <p>Custom software, AI, commerce, cloud and more — designed and built under one roof.</p>
            </div>

            <div className="service-grid">
              {services.map((s, i) => (
                <article
                  key={s.id}
                  className="service-card reveal"
                  style={{ transitionDelay: `${(i % 4) * 60}ms` }}
                >
                  <span className="service-icon">
                    <Icon name={s.icon} />
                  </span>
                  <h4>{s.title}</h4>
                  <p>{s.copy}</p>
                </article>
              ))}
              <a className="service-card service-card-cta reveal" href="#contact">
                <h4>Have something else in mind?</h4>
                <p>Tell us what you are building and we will recommend the right approach.</p>
                <span className="link-arrow">
                  Talk to us
                  <Icon name="arrowRight" />
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* —— Voice AI & talking avatars —— */}
        <section className="section section-dark" id="voice-ai">
          <div className="section-dark-bg" aria-hidden="true" />
          <div className="container">
            <div className="voice-grid">
              <div className="voice-intro reveal">
                <span className="eyebrow">Voice AI & talking avatars</span>
                <h2>Give your product a voice — and a face.</h2>
                <p>
                  Calito, Jupeemoon&rsquo;s own voice AI model, powers natural conversations for
                  customer support, sales and in-app assistants. Pair it with a talking avatar to
                  create lifelike digital receptionists, tutors and presenters.
                </p>
                <div className="cta-row">
                  <a className="btn btn-gold btn-lg" href="#contact">
                    Request a Calito demo
                    <Icon name="arrowRight" />
                  </a>
                  <a className="btn btn-outline-light btn-lg" href="#voice-solutions">
                    See solutions
                  </a>
                </div>
              </div>
              <VoiceDemo />
            </div>

            <div className="voice-solutions" id="voice-solutions">
              {voiceSolutions.map((v, i) => (
                <article
                  key={v.id}
                  className="voice-solution reveal"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="voice-solution-head">
                    <span className="practice-icon">
                      <Icon name={v.icon} />
                    </span>
                    <span className="voice-solution-tag">{v.eyebrow}</span>
                  </div>
                  <h3>{v.title}</h3>
                  <p>{v.copy}</p>
                  <ul>
                    {v.points.map((pt) => (
                      <li key={pt}>
                        <Icon name="check" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <a className="link-arrow" href="#contact">
                    {v.cta}
                    <Icon name="arrowRight" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* —— Process —— */}
        <section className="section" id="process">
          <div className="container">
            <SectionHead eyebrow="How we work" title="A clear path from idea to launch — and beyond.">
              Tight feedback loops, visible milestones and no mystery phases. You see progress
              every week.
            </SectionHead>
            <ol className="process-grid">
              {steps.map((step, i) => (
                <li
                  key={step.n}
                  className="process-step reveal"
                  style={{ transitionDelay: `${(i % 3) * 80}ms` }}
                >
                  <span className="process-n">{step.n}</span>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* —— Professional development —— */}
        <section className="section section-dark" id="engineering">
          <div className="section-dark-bg" aria-hidden="true" />
          <div className="container">
            <div className="eng-grid">
              <div className="eng-intro reveal">
                <span className="eyebrow">Professional development</span>
                <h2>Engineering standards you can rely on.</h2>
                <p>
                  Great software is more than what users see. Every Jupeemoon project follows the
                  same disciplined engineering practices, so your product stays secure, testable
                  and easy to grow long after launch.
                </p>
                <a className="btn btn-gold" href="#contact">
                  Talk to an engineer
                  <Icon name="arrowRight" />
                </a>
              </div>
              <div className="practice-grid">
                {practices.map((p, i) => (
                  <article
                    key={p.title}
                    className="practice reveal"
                    style={{ transitionDelay: `${(i % 2) * 70}ms` }}
                  >
                    <span className="practice-icon">
                      <Icon name={p.icon} />
                    </span>
                    <h3>{p.title}</h3>
                    <p>{p.copy}</p>
                  </article>
                ))}
              </div>
            </div>

            <ul className="commit-row reveal" aria-label="Our commitments">
              {commitments.map((c) => (
                <li key={c.value}>
                  <strong>{c.value}</strong>
                  <span>{c.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* —— Products —— */}
        <section className="section section-tint" id="products">
          <div className="container">
            <SectionHead eyebrow="Our products" title="Products built and run by Jupeemoon.">
              The same team that builds for clients builds its own products — so we know what it
              takes to ship and operate software at scale.
            </SectionHead>
            <div className="product-grid">
              {products.map((p, i) => (
                <article
                  key={p.id}
                  className={`product reveal ${productTags[p.id] ? 'product-lead' : ''}`}
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="product-top">
                    <span className="product-icon">
                      <Icon name={p.icon} />
                    </span>
                    <span className="product-badge">{p.badge}</span>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.copy}</p>
                  {productTags[p.id] ? (
                    <ul className="product-modules" aria-label={`${p.title} highlights`}>
                      {productTags[p.id].map((m) => (
                        <li key={m}>{m}</li>
                      ))}
                    </ul>
                  ) : null}
                  <a className="link-arrow" href={p.id === 'calito' ? '#voice-ai' : '#contact'}>
                    {productTags[p.id] ? `Request a ${p.title.split(' ')[0]} demo` : 'Learn more'}
                    <Icon name="arrowRight" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* —— Industries —— */}
        <section className="section section-tight" aria-labelledby="industries-title">
          <div className="container industries">
            <div className="industries-head reveal">
              <span className="eyebrow">Industries</span>
              <h2 id="industries-title">Built for the way your industry works.</h2>
            </div>
            <ul className="industry-grid">
              {industries.map((ind, i) => (
                <li key={ind.title} className="reveal" style={{ transitionDelay: `${(i % 4) * 50}ms` }}>
                  <Icon name={ind.icon} />
                  {ind.title}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* —— Technologies —— */}
        <section className="section section-tint" id="technologies">
          <div className="container">
            <div className="tech-grid">
              <SectionHead eyebrow="Technologies" title="Modern, proven technology — chosen for your product." align="left">
                We pick the stack that fits your goals, budget and team, not the latest trend. Every
                choice is documented so you are never locked in.
              </SectionHead>
              <div className="tech-panel reveal">
                <div className="tech-tabs" role="tablist" aria-label="Technology categories">
                  {stack.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      role="tab"
                      id={`tab-${s.id}`}
                      aria-selected={stackTab === s.id}
                      aria-controls="tech-panel"
                      className={stackTab === s.id ? 'is-active' : undefined}
                      onClick={() => setStackTab(s.id)}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
                <ul className="tech-chips" id="tech-panel" role="tabpanel" aria-labelledby={`tab-${currentStack.id}`}>
                  {currentStack.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* —— Engagement models —— */}
        <section className="section" aria-labelledby="models-title">
          <div className="container">
            <div className="section-head section-head-center reveal">
              <span className="eyebrow">Engagement models</span>
              <h2 id="models-title">Flexible ways to work together.</h2>
              <p>Start small, scale when it makes sense. Every model includes the same engineering standards.</p>
            </div>
            <div className="model-grid">
              {models.map((m, i) => (
                <article key={m.title} className="model reveal" style={{ transitionDelay: `${i * 70}ms` }}>
                  <h3>{m.title}</h3>
                  <p className="model-fit">
                    <span>Best for</span>
                    {m.fit}
                  </p>
                  <ul>
                    {m.points.map((pt) => (
                      <li key={pt}>
                        <Icon name="check" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <a className="btn btn-outline btn-block" href="#contact">
                    Get a proposal
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* —— FAQ —— */}
        <section className="section section-tint" id="faq">
          <div className="container faq-grid">
            <div className="faq-intro reveal">
              <span className="eyebrow">FAQ</span>
              <h2>Questions, answered.</h2>
              <p>
                Can&rsquo;t find what you&rsquo;re looking for? Email{' '}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> and a member of the team
                will get back to you.
              </p>
            </div>
            <div className="faq-list reveal">
              {faqs.map((f, i) => (
                <details key={f.q} open={i === 0}>
                  <summary>
                    {f.q}
                    <span className="faq-toggle" aria-hidden="true" />
                  </summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* —— Contact —— */}
        <section className="section contact" id="contact">
          <div className="container">
            <div className="contact-card reveal">
              <div className="contact-copy">
                <span className="eyebrow">Start a project</span>
                <h2>Let&rsquo;s build something great together.</h2>
                <p>
                  Share your idea, product or the system you want to modernize. We&rsquo;ll reply
                  with clear next steps and an honest recommendation.
                </p>
                <ol className="next-steps">
                  <li>
                    <span>1</span>
                    <div>
                      <strong>We review your brief</strong>
                      <small>and reply with questions or a call invite.</small>
                    </div>
                  </li>
                  <li>
                    <span>2</span>
                    <div>
                      <strong>Discovery call</strong>
                      <small>to understand goals, users and constraints.</small>
                    </div>
                  </li>
                  <li>
                    <span>3</span>
                    <div>
                      <strong>Proposal & estimate</strong>
                      <small>with scope, milestones and timeline.</small>
                    </div>
                  </li>
                </ol>
                <a className="contact-email" href={`mailto:${CONTACT_EMAIL}`}>
                  <Icon name="mail" />
                  {CONTACT_EMAIL}
                </a>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a className="brand" href="#top" aria-label="Jupeemoon home">
                <Logo />
              </a>
              <p>
                Mobile apps, web apps and custom software — designed, engineered and supported by
                one accountable team.
              </p>
              <a className="footer-email" href={`mailto:${CONTACT_EMAIL}`}>
                <Icon name="mail" />
                {CONTACT_EMAIL}
              </a>
            </div>
            <nav aria-label="Services">
              <h2>Services</h2>
              <a href="#service-mobile">Mobile app development</a>
              <a href="#service-web">Web app development</a>
              <a href="#other-services">Custom enterprise software</a>
              <a href="#voice-ai">Voice AI & talking avatars</a>
              <a href="#other-services">AI & automation</a>
              <a href="#other-services">UI/UX design</a>
            </nav>
            <nav aria-label="Company">
              <h2>Company</h2>
              <a href="#engineering">Why Jupeemoon</a>
              <a href="#process">Process</a>
              <a href="#technologies">Technologies</a>
              <a href="#faq">FAQ</a>
              <a href="#contact">Contact</a>
            </nav>
            <nav aria-label="Products">
              <h2>Products</h2>
              {products.map((p) => (
                <a key={p.id} href="#products">
                  {p.title}
                </a>
              ))}
            </nav>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Jupeemoon Software Pvt Ltd. All rights reserved.</p>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
