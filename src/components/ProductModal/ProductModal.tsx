import React, { useEffect } from 'react'
import { Product } from '../../types'
import { fmt, oldPrice, installment } from '../../utils/format'
import './ProductModal.scss'

interface Props {
  product: Product | null
  onClose: () => void
}

const ProductModal: React.FC<Props> = ({ product, onClose }) => {
  useEffect(() => {
    if (!product) return
    const h = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', h)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', h); document.body.style.overflow = '' }
  }, [product, onClose])

  if (!product) return null

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label={product.productName}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Fechar">✕</button>
        <div className="modal__body">
          <div className="modal__left">
            <img src={product.photo} alt={product.productName} />
          </div>
          <div className="modal__right">
            <h2 className="modal__name">{product.productName}</h2>
            <p className="modal__desc">{product.descriptionShort}</p>
            <p className="modal__old"><s>{oldPrice(product.price)}</s></p>
            <p className="modal__price">{fmt(product.price)}</p>
            <p className="modal__inst">ou 2x de {installment(product.price)} sem juros</p>
            <p className="modal__ship">Frete grátis</p>
            <button className="modal__btn">Comprar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductModal
