import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <h3>
              <img 
                src={`${import.meta.env.BASE_URL}images/lord-subramanyeswara.jpg`} 
                alt="Lord Subramanyeswara" 
                className="footer__logo"
              />
              Subramanyeswara Paper Plates
            </h3>
            <p>
              Premium quality paper plates sold directly to
              customers. No middlemen, best prices guaranteed.
            </p>
          </div>

          <div className="footer__links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer__contact">
            <h4>Get in Touch</h4>
            <ul>
              <li>📞 <a href="tel:9701602772">97016 02772</a></li>
              <li>💬 <a href="https://wa.me/918074957293" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li>📍 <a href="https://maps.app.goo.gl/b7aYyQsjVJPnWEdeA" target="_blank" rel="noopener noreferrer">Guntakal, Andhra Pradesh</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {currentYear} Subramanyeswara Paper Plates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
