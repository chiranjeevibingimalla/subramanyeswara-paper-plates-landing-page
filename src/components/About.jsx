import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p className="section-subtitle">
          A legacy of quality paper plate manufacturing in Guntakal
        </p>

        <div className="about__grid">
          <div className="about__image">
            <div className="about__image-placeholder">
              <span>🏭</span>
              <p>Our Manufacturing Unit</p>
            </div>
          </div>

          <div className="about__text">
            <h3 className="about__heading">
              Directly from Our Factory to Your Doorstep
            </h3>
            <p className="about__description">
              At <strong>Subramanyeswara Paper Plates</strong>, we take pride in
              manufacturing premium quality paper plates right here in Guntakal,
              Andhra Pradesh. With years of experience in the paper plates
              industry, we have perfected the art of creating durable,
              eco-friendly plates that are perfect for every occasion.
            </p>
            <p className="about__description">
              What makes us different? We sell directly to our customers — no
              distributors, no wholesalers, no middlemen. This means you get
              the best quality plates at factory-direct prices, saving you
              money without compromising on quality.
            </p>

            <div className="about__highlights">
              <div className="about__highlight">
                <span className="about__highlight-icon">🌿</span>
                <div>
                  <strong>Eco-Friendly</strong>
                  <p>100% biodegradable and compostable materials</p>
                </div>
              </div>
              <div className="about__highlight">
                <span className="about__highlight-icon">🏷️</span>
                <div>
                  <strong>Factory Direct</strong>
                  <p>No middlemen means best prices for you</p>
                </div>
              </div>
              <div className="about__highlight">
                <span className="about__highlight-icon">✅</span>
                <div>
                  <strong>Quality Assured</strong>
                  <p>Every plate passes strict quality checks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
