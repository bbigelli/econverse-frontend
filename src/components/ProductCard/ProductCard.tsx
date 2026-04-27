import React from 'react'
import { Product } from '../../types'
import { useCart } from '../../contexts'
import './ProductCard.scss'

interface ProductCardProps {
  product: Product
  onClick: (product: Product) => void
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const { addItem } = useCart()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation()
    addItem(product)
  }

  // Formatadores de preço
  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
  }

  return (
    <div className="pcard" onClick={() => onClick(product)}>
      <div className="pcard__img-wrap">
        <img src={product.photo} alt={product.productName} />
      </div>
      <h3 className="pcard__name">{product.productName}</h3>
      <p className="pcard__description">{product.descriptionShort}</p>
      <p className="pcard__price">R$ {formatPrice(product.price)}</p>
      {product.installments && (
        <p className="pcard__inst">
          em até {product.installments.count}x de R$ {formatPrice(product.installments.value)}
        </p>
      )}
      <p className="pcard__ship">Frete grátis</p>
      <button className="pcard__btn" onClick={handleAddToCart}>
        COMPRAR
      </button>
    </div>
  )
}

export default ProductCard