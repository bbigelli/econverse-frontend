import React, { useState } from 'react'
import { Product } from '../../types'
import { useCart } from '../../contexts'
import './ProductModal.scss'

interface ProductModalProps {
  product: Product | null
  onClose: () => void
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)

  if (!product) return null

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product)
    }
    onClose()
  }

  const increaseQuantity = () => setQuantity(prev => prev + 1)
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1))

  return (
    <div className="product-modal-overlay" onClick={onClose}>
      <div className="product-modal" onClick={(e) => e.stopPropagation()}>
        <button className="product-modal__close" onClick={onClose}>×</button>
        
        <div className="product-modal__content">
          <div className="product-modal__image">
            <img src={product.photo} alt={product.productName} />
          </div>
          
          <div className="product-modal__info">
            <h2 className="product-modal__title">{product.productName}</h2>
            <p className="product-modal__description">{product.descriptionShort}</p>
            
            <p className="product-modal__price">R$ {formatPrice(product.price)}</p>
            
            {product.installments && (
              <p className="product-modal__installments">
                Em até {product.installments.count}x de R$ {formatPrice(product.installments.value)} sem juros
              </p>
            )}
            
            <div className="product-modal__quantity">
              <span>Quantidade:</span>
              <div className="product-modal__quantity-controls">
                <button onClick={decreaseQuantity}>-</button>
                <span>{quantity}</span>
                <button onClick={increaseQuantity}>+</button>
              </div>
            </div>
            
            <button className="product-modal__btn" onClick={handleAddToCart}>
              COMPRAR
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductModal