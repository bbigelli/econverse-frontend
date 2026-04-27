import React from 'react'
import { Product } from '../../types'
import { fmt, oldPrice, installment } from '../../utils/format'
import './ProductCard.scss'

interface Props {
  product: Product
  onClick: (p: Product) => void
  dark?: boolean
}

const ProductCard: React.FC<Props> = ({ product, onClick, dark }) => (
  <article
    className={`pcard${dark ? ' pcard--dark' : ''}`}
    onClick={() => onClick(product)}
    aria-label={product.productName}
  >
    <div className="pcard__img-wrap">
      <img src={product.photo} alt={product.productName} loading="lazy" />
    </div>
    <p className="pcard__name">{product.descriptionShort}</p>
    <p className="pcard__old"><s>{oldPrice(product.price)}</s></p>
    <p className="pcard__price">{fmt(product.price)}</p>
    <p className="pcard__inst">ou 2x de {installment(product.price)} sem juros</p>
    <p className="pcard__ship">Frete grátis</p>
    <button
      className="pcard__btn"
      onClick={e => { e.stopPropagation(); onClick(product) }}
      aria-label={`Comprar ${product.productName}`}
    >Comprar</button>
  </article>
)

export default ProductCard
