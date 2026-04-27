import React from 'react'
import './HeroBanner.scss'
import blackFridayImage from '../../assets/images/BlackFriday.png'

const HeroBanner: React.FC = () => (
  <section 
    className="hero" 
    aria-label="Banner promocional Black Friday"
    style={{ backgroundImage: `url(${blackFridayImage})` }}
  >
    <div className="hero__overlay">
      <div className="hero__content">
        <div className="hero__text">
          <h1 className="hero__title">Venha conhecer nossas promoções</h1>
          <p className="hero__off"><strong>50% OFF</strong> nos produtos</p>
          <button className="hero__btn">Ver Produto</button>
        </div>
      </div>
    </div>
  </section>
)

export default HeroBanner