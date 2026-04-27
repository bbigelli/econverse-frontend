// src/components/ProductCard/ProductSkeleton.tsx
import React from 'react'
import './ProductSkeleton.scss'

const ProductSkeleton: React.FC = () => (
  <div className="product-skeleton">
    <div className="product-skeleton__image"></div>
    <div className="product-skeleton__name"></div>
    <div className="product-skeleton__price"></div>
    <div className="product-skeleton__btn"></div>
  </div>
)

export default ProductSkeleton
