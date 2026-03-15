import './Gallery.css'

const galleryItems = [
  { label: 'Various Buffet Paper Plates', image: '/images/plates/various paper plates.jpg' },
  { label: 'Quality Raw Materials', image: '/images/plates/raw material.jpg' },
  { label: 'Bulk Packaging', image: '/images/plates/plates bundles.jpg' },
  { label: 'Square Paper Plates', image: '/images/plates/square paper plates.avif' },
  { label: 'Spoons', image: '/images/spoons/spoons6.jpg' },
  { label: 'Spoons', image: '/images/spoons/spoons1.jpg' },
]

function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <p className="section-subtitle">
          A glimpse into our products and what we offer
        </p>

        <div className="gallery__grid">
          {galleryItems.map((item, index) => (
            <div key={index} className="gallery__item">
              <img src={item.image} alt={item.label} />
              <p className="gallery__label">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
