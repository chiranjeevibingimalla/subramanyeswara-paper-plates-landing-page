import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './Products.css'

const products = [
  {
    name: 'Eco-Friendly 13" Plates',
    image: 'images/plates/plates1.jpg',
  },
  {
    name: '12" Buffet Paper Plates',
    image: 'images/plates/plates2.jpg',
  },
  {
    name: 'Printed Regular Plates',
    image: 'images/plates/plates8.jpg',
  },
  {
    name: 'Silver Buffet Plates',
    image: 'images/plates/silver buffet paper plates.jpg',
  },
  {
    name: '125ml Paper Cups',
    image: 'images/water glasses/glass1.jpg',
  },
  {
    name: '110ml Paper Cups',
    image: 'images/water glasses/glass2.jpg',
  },
  {
    name: '150ml Tea & Coffee Cups',
    image: 'images/water glasses/glass3.jpg',
  },
  {
    name: 'Plastic Carry Bags',
    image: 'images/plastic bags/bag4.jpg',
  },
  {
    name: 'Plastic Carry Bags',
    image: 'images/plastic bags/bag1.jpg',
  },
]

function Products() {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <section id="products" className="products">
      <div className="container">
        <h2 className="section-title">Our Products</h2>
        <p className="section-subtitle">
          Quality paper plates, cups & bags for every occasion
        </p>

        <div className="products__carousel">
          <button ref={prevRef} className="products__nav products__nav-prev" aria-label="Previous">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <button ref={nextRef} className="products__nav products__nav-next" aria-label="Next">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current
              swiper.params.navigation.nextEl = nextRef.current
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              480: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="products__slide">
                  <div className="products__image">
                    <img src={`${import.meta.env.BASE_URL}${product.image}`} alt={product.name} />
                  </div>
                  <p className="products__name">{product.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="products__cta">
          <a
            href="https://wa.me/918074957293"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Enquire on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

export default Products
