import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, phone, message } = formData
    const text = `Hi, I'm ${name}. ${message} (Phone: ${phone})`
    const encoded = encodeURIComponent(text)
    window.open(`https://wa.me/918074957293?text=${encoded}`, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact & Order</h2>
        <p className="section-subtitle">
          Ready to order? Reach out to us directly — we'd love to hear from you!
        </p>

        <div className="contact__grid">
          {/* Contact info */}
          <div className="contact__info">
            <div className="contact__card">
              <span className="contact__card-icon">📞</span>
              <div>
                <h4>Call Us</h4>
                <a href="tel:9701602772" className="contact__link">97016 02772</a>
              </div>
            </div>

            <div className="contact__card">
              <span className="contact__card-icon">💬</span>
              <div>
                <h4>WhatsApp</h4>
                <a
                  href="https://wa.me/918074957293"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__link"
                >
                  8074957293
                </a>
              </div>
            </div>

            <a 
              href="https://maps.app.goo.gl/b7aYyQsjVJPnWEdeA"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__card contact__card--clickable"
            >
              <span className="contact__card-icon">📍</span>
              <div>
                <h4>Visit Us</h4>
                <p className="contact__address">
                  Royal Circle, 18/795 F-23A,<br />
                  60 Feet Rd, Tilak Nagar,<br />
                  Guntakal, Andhra Pradesh 515801
                </p>
              </div>
            </a>

            <a
              href="https://wa.me/918074957293"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp contact__whatsapp-btn"
            >
              💬 Chat on WhatsApp
            </a>

            {/* Map link */}
            <a 
              href="https://maps.app.goo.gl/b7aYyQsjVJPnWEdeA"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__map-card"
            >
              <div className="contact__map-icon">
                <img src="/images/google maps logo.jpg" alt="Google Maps" />
              </div>
              <div className="contact__map-content">
                <h4>Open in Google Maps</h4>
                <p>Tap to get directions</p>
              </div>
              <div className="contact__map-arrow">→</div>
            </a>
          </div>

          {/* Contact form */}
          <div className="contact__form-wrapper">
            <h3 className="contact__form-title">Send Us a Message</h3>
            <p className="contact__form-desc">
              Fill in your details and we'll get back to you, or your message will be sent via WhatsApp.
            </p>

            {submitted ? (
              <div className="contact__success">
                <span>✅</span>
                <h4>Message Sent!</h4>
                <p>Thank you for reaching out. We'll get back to you shortly.</p>
                <button
                  className="btn btn-primary"
                  onClick={() => { setSubmitted(false); setFormData({ name: '', phone: '', message: '' }) }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact__form">
                <div className="contact__field">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    required
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Tell us about your order or enquiry..."
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary contact__submit">
                  Send via WhatsApp →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
