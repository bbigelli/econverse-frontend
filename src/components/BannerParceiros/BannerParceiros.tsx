import React from 'react'
import './BannerParceiros.scss'

const BannerParcel: React.FC = () => (
  <section className="banners" aria-label="Banners promocionais">
    <div className="container banners__grid">
      <article className="banners__card banners__card--apple">
        <div className="banners__card-content">
          <div className="banners__card-text">
            <h3 className="banners__card-title">
              Parceiros
            </h3>
            <p className="banners__card-sub">
              Produtos originais com garantia<br />
              e suporte certificado
            </p>
            <button className="banners__card-btn">Confira</button>
          </div>
        </div>
      </article>

      <article className="banners__card banners__card--apple">
        <div className="banners__card-content">
          <div className="banners__card-text">
            <h3 className="banners__card-title">
              Parceiros
            </h3>
            <p className="banners__card-sub">
              Produtos originais com garantia<br />
              e suporte certificado
            </p>
            <button className="banners__card-btn">Confira</button>
          </div>          
        </div>
      </article>
    </div>
  </section>
)

export default BannerParcel