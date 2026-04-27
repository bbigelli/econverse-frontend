import React from 'react'
import './BrandNav.scss'
import logoImage from '../../assets/images/Logo.png'

const BRANDS = ['econverse', 'econverse', 'econverse', 'econverse', 'econverse']

const BrandNav: React.FC = () => (
  <section className="brands">
    <div className="container">
      <h2 className="brands__title">Navegar por marcas</h2>
      <ul className="brands__list">
        {BRANDS.map((b, i) => (
          <li key={i} className="brands__item">
            <button className="brands__btn" aria-label={`Marca ${b}`}>
              <img src={logoImage} alt={b} className="brands__logo" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  </section>
)

export default BrandNav