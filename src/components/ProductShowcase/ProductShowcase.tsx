// src/components/ProductShowcase/ProductShowcase.tsx
import React, { useState } from 'react'
import { Product, Category } from '../../types'
import CategoryTabs from '../CategoryTabs/CategoryTabs'
import ProductCard from '../ProductCard/ProductCard'
import Carousel from '../Carousel/Carousel'
import './ProductShowcase.scss'

interface Props {
  products: Product[]
  loading: boolean
  error: string | null
  onProductClick: (p: Product) => void
  title: string
  subtitle?: string
  showSidebar?: boolean
  dark?: boolean
  showViewAll?: boolean
  onViewAllClick?: () => void
}

const ProductShowcase: React.FC<Props> = ({
  products, loading, error, onProductClick, title, subtitle, showSidebar, dark, showViewAll, onViewAllClick
}) => {
  const [active, setActive] = useState<Category>('CELULAR')

  const handleViewAllClick = () => {
    if (onViewAllClick) {
      onViewAllClick()
    } else {
      console.log(`Ver todos os produtos de: ${title}`)
    }
  }

  return (
    <section className={`showcase${dark ? ' showcase--dark' : ''}`}>
      <div className="container">
        <header className="showcase__header">
          {subtitle && <p className="showcase__subtitle">{subtitle}</p>}
          <h2 className="showcase__title">{title}</h2>
          {showViewAll && (
            <button className="showcase__view-all" onClick={handleViewAllClick}>
              Ver Todos
            </button>
          )}
        </header>

        <CategoryTabs active={active} onChange={setActive} />

        <div className={`showcase__layout${showSidebar ? ' showcase__layout--with-sidebar' : ''}`}>
          <div className="showcase__carousel-wrap">
            {loading && <p className="showcase__msg">Carregando produtos...</p>}
            {error && <p className="showcase__msg showcase__msg--error">{error}</p>}
            {!loading && !error && (
              <Carousel itemsPerView={showSidebar ? 3 : 4}>
                {products.map((p, i) => (
                  <ProductCard key={i} product={p} onClick={onProductClick} />
                ))}
              </Carousel>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase