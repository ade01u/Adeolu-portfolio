import { useState } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'

const services = [
  {
    title: 'Business Websites',
    icon: '🌐',
    description:
      'Professional business websites that clearly communicate your value, attract visitors, and convert interest into action.',
    features: ['Modern layouts', 'Responsive design', 'Interactive sections'],
  },
  {
    title: 'Portfolio Branding',
    icon: '✨',
    description:
      'Distinctive personal and professional brand experiences tailored to help clients, employers, and organisations remember your work.',
    features: ['Brand storytelling', 'Lead generation', 'Visual identity'],
  },
  {
    title: 'Digital Experience Design',
    icon: '📈',
    description:
      'User-first digital experiences designed to make information easy to access, navigation effortless, and customers more confident.',
    features: ['UX improvements', 'Content structure', 'Conversion-focused design'],
  },
]

const highlights = [
  { label: 'Projects delivered', value: '12+' },
  { label: 'Client satisfaction', value: '98%' },
  { label: 'Response time', value: '24h' },
]

const values = [
  {
    title: 'Strategic Design',
    text: 'Every section is planned to communicate a clear message and support business goals.',
  },
  {
    title: 'Clean Code',
    text: 'Components are organised, reusable, and easy to scale as the product grows.',
  },
  {
    title: 'User-Centric UX',
    text: 'Strong navigation, clear calls-to-action, and mobile-friendly layouts keep users engaged.',
  },
]

const initialForm = {
  fullName: '',
  email: '',
  subject: '',
  message: '',
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="brand" aria-label="Daramola Adeoluwa brand">
          <span className="brand-mark">DA</span>
          <div>
            <strong>Daramola Adeoluwa</strong>
            <small>Frontend Developer</small>
          </div>
        </div>

        <nav className={`site-nav ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
          <NavLink to="/" end onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>
          <NavLink to="/services" onClick={() => setMenuOpen(false)}>
            Services
          </NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
        </nav>

        <button
          type="button"
          className="menu-toggle"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </header>

      <main className="page-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <p>© 2026 Daramola Adeoluwa. Built with React JS.</p>
      </footer>
    </div>
  )
}

function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Helping brands grow through digital experiences</p>
          <h1>Building modern, responsive web apps that turn ideas into impact.</h1>
          <p className="lead">
            I’m Daramola Adeoluwa, a junior React developer focused on creating elegant, user-friendly
            experiences for businesses and personal brands.
          </p>

          <div className="button-row">
            <NavLink className="primary-btn" to="/contact">
              Let’s work together
            </NavLink>
            <NavLink className="secondary-btn" to="/services">
              View services
            </NavLink>
          </div>

          <div className="mini-stats" aria-label="Key business statistics">
            {highlights.map((item) => (
              <div key={item.label} className="stat-box">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="image-panel">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"
              alt="Portrait of Daramola Adeoluwa"
            />
          </div>
        </div>
      </section>

      <section className="feature-section">
        <div className="section-heading">
          <p className="eyebrow">What I bring</p>
          <h2>Thoughtful design meets practical React solutions</h2>
        </div>

        <div className="feature-grid">
          <article className="feature-card">
            <span className="feature-icon">💡</span>
            <h3>Business-first thinking</h3>
            <p>Every element is designed to clarify the value of your product or service.</p>
          </article>
          <article className="feature-card">
            <span className="feature-icon">⚙️</span>
            <h3>React expertise</h3>
            <p>Reusable components, controlled forms, clear states, and clean code structure.</p>
          </article>
          <article className="feature-card">
            <span className="feature-icon">📱</span>
            <h3>Responsive experience</h3>
            <p>Optimised interfaces that work smoothly on phones, tablets, and desktops.</p>
          </article>
        </div>
      </section>
    </>
  )
}

function AboutPage() {
  return (
    <section className="content-page">
      <div className="section-heading left-align">
        <p className="eyebrow">About me</p>
        <h2>Making digital experiences feel clear, welcoming, and effective</h2>
      </div>

      <div className="about-layout">
        <div className="about-copy">
          <p>
            I am Daramola Adeoluwa, a React developer who enjoys turning ideas into engaging digital
            experiences. I focus on building practical interfaces that are easy to use, visually clean,
            and tailored to real-world business needs.
          </p>
          <p>
            My approach combines strong design fundamentals with technical execution. I enjoy creating
            interfaces that help businesses explain their story, showcase products, and connect with
            customers more effectively.
          </p>
        </div>

        <div className="about-panel">
          <h3>Mission</h3>
          <p>To build digital products that are simple, trustworthy, and memorable for every user.</p>
        </div>
      </div>

      <div className="value-grid">
        {values.map((value) => (
          <article key={value.title} className="value-card">
            <h3>{value.title}</h3>
            <p>{value.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function ServicesPage() {
  return (
    <section className="content-page">
      <div className="section-heading left-align">
        <p className="eyebrow">My services</p>
        <h2>Solutions designed to help businesses stand out online</h2>
      </div>

      <div className="service-grid">
        {services.map((service) => (
          <article key={service.title} className="service-card">
            <div className="service-icon" aria-hidden="true">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul>
              {service.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

function ContactPage() {
  const [formData, setFormData] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [successMessage, setSuccessMessage] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required.'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required.'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.'
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Message should be at least 20 characters long.'
    }

    return newErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const newErrors = validateForm()

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setSuccessMessage('')
      return
    }

    setErrors({})
    setSuccessMessage(`Thanks, ${formData.fullName.split(' ')[0]}! Your message has been sent successfully.`)
    setFormData(initialForm)
  }

  return (
    <section className="content-page contact-page">
      <div className="section-heading left-align">
        <p className="eyebrow">Contact</p>
        <h2>Let’s discuss your digital project</h2>
      </div>

      <div className="contact-layout">
        <div className="contact-card">
          <h3>Get in touch</h3>
          <ul>
            <li>
              <span>Email</span>
              <a href="mailto:adeoluwadaramola@gmail.com">adeoluwadaramola@gmail.com</a>
            </li>
            <li>
              <span>Phone</span>
              <a href="tel:+2348000000000">+234 800 000 0000</a>
            </li>
            <li>
              <span>Location</span>
              <p>Lagos, Nigeria</p>
            </li>
          </ul>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="input-group">
            <label htmlFor="fullName">Full name</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
            {errors.fullName && <small className="error-message">{errors.fullName}</small>}
          </div>

          <div className="input-group">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            {errors.email && <small className="error-message">{errors.email}</small>}
          </div>

          <div className="input-group">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Project enquiry"
            />
            {errors.subject && <small className="error-message">{errors.subject}</small>}
          </div>

          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your website idea"
            />
            {errors.message && <small className="error-message">{errors.message}</small>}
          </div>

          <button type="submit" className="primary-btn submit-btn">
            Send message
          </button>

          {successMessage && <p className="success-message">{successMessage}</p>}
        </form>
      </div>
    </section>
  )
}

export default App
