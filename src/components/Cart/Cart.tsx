import React from 'react'
import { useCart } from '../../contexts'
import './Cart.scss'

interface CartProps {
  isOpen: boolean
  onClose: () => void
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { items, totalItems, totalPrice, removeItem, updateQuantity, clearCart } = useCart()

  if (!isOpen) return null

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
  }

  return (
    <div className="cart-overlay" onClick={onClose}>
      <div className="cart" onClick={(e) => e.stopPropagation()}>
        <div className="cart__header">
          <h2>Carrinho ({totalItems})</h2>
          <button className="cart__close" onClick={onClose}>×</button>
        </div>
        
        {items.length === 0 ? (
          <p className="cart__empty">Seu carrinho está vazio</p>
        ) : (
          <>
            <div className="cart__items">
              {items.map(item => (
                <div key={item.id} className="cart__item">
                  <img 
                    src={item.photo} 
                    alt={item.productName} 
                    className="cart__item-img" 
                  />
                  <div className="cart__item-info">
                    <h3 className="cart__item-name">{item.productName}</h3>
                    <p className="cart__item-description">{item.descriptionShort}</p>
                    <p className="cart__item-price">R$ {formatPrice(item.price)}</p>
                    <div className="cart__item-quantity">
                      <button onClick={() => updateQuantity(String(item.id), item.quantity - 1)}>
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(String(item.id), item.quantity + 1)}>
                        +
                      </button>
                    </div>
                  </div>
                  <button 
                    className="cart__item-remove" 
                    onClick={() => removeItem(String(item.id))}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
            
            <div className="cart__footer">
              <div className="cart__total">
                <span>Total:</span>
                <strong>R$ {formatPrice(totalPrice)}</strong>
              </div>
              <button className="cart__checkout">Finalizar compra</button>
              <button className="cart__clear" onClick={clearCart}>
                Limpar carrinho
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Cart