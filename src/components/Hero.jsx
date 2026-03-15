import './Hero.css'

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__overlay"></div>
      <div className="container hero__inner">
        <div className="hero__content">
          <h1 className="hero__title">
            Subramanyeswara<br />
            <span className="hero__title-accent">Paper Plates</span>
          </h1>
          <p className="hero__subtitle">
            Premium quality paper plates, crafted with care and sold directly
            to you — no middlemen, no extra costs. Just the best plates at the best
            prices.
          </p>
          <div className="hero__actions">
            <a href="#contact" className="btn btn-secondary">
              Order Now
            </a>
            <a href="#products" className="btn btn-outline">
              View Products
            </a>
          </div>
          <div className="hero__stats">
            <div className="hero__stat">
              <strong>10+</strong>
              <span>Years Experience</span>
            </div>
            <div className="hero__stat">
              <strong>50K+</strong>
              <span>Happy Customers</span>
            </div>
            <div className="hero__stat">
              <strong>100%</strong>
              <span>Eco-Friendly</span>
            </div>
          </div>
        </div>
        <div className="hero__image">
          <img src={`${import.meta.env.BASE_URL}images/Main.jpeg`} alt="Subramanyeswara Paper Plates Products" />
        </div>
      </div>
    </section>
  )
}

export default Hero
