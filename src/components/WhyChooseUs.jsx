import './WhyChooseUs.css'

const reasons = [
  {
    icon: '🏭',
    title: 'Best Direct Prices',
    description: 'We sell directly to you, eliminating all middlemen. You save more with every order.',
  },
  {
    icon: '✅',
    title: 'Quality Assured',
    description: 'Every plate undergoes strict quality checks to ensure uniform thickness, durability, and a clean finish.',
  },
  {
    icon: '🌱',
    title: 'Eco-Friendly Materials',
    description: '100% biodegradable and compostable. Our plates are safe for nature and safe for your food.',
  },
  {
    icon: '📦',
    title: 'Bulk Orders Welcome',
    description: 'From small household needs to large event orders — we cater to all quantities with special bulk pricing.',
  },
  {
    icon: '💰',
    title: 'Best Value Guaranteed',
    description: 'Premium quality at competitive prices. No hidden charges, no surprises — just great value.',
  },
]

function WhyChooseUs() {
  return (
    <section id="why-us" className="why-us">
      <div className="container">
        <h2 className="section-title">Why Choose Us</h2>
        <p className="section-subtitle">
          Here's why thousands of customers trust Subramanyeswara Paper Plates
        </p>

        <div className="why-us__grid">
          {reasons.map((reason, index) => (
            <div key={index} className="why-us__card">
              <div className="why-us__icon">{reason.icon}</div>
              <h3 className="why-us__card-title">{reason.title}</h3>
              <p className="why-us__card-desc">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
