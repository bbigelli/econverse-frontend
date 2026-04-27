import React, { useState } from 'react'
import { Product } from './types'
import { useProducts } from './hooks/useProducts'

import Header          from './components/Header/Header'
import HeroBanner      from './components/HeroBanner/HeroBanner'
import CategoryMenu    from './components/CategoryMenu/CategoryMenu'
import ProductShowcase from './components/ProductShowcase/ProductShowcase'
import BannerParcel    from './components/BannerParceiros/BannerParceiros'
import BrandNav        from './components/BrandNav/BrandNav'
import Newsletter      from './components/Newsletter/Newsletter'
import Footer          from './components/Footer/Footer'
import ProductModal    from './components/ProductModal/ProductModal'

const App: React.FC = () => {
  const { products, loading, error } = useProducts()
  const [selected, setSelected] = useState<Product | null>(null)

  const open  = (p: Product) => setSelected(p)
  const close = ()           => setSelected(null)

  return (
    <>
      {/* ── Cabeçalho ── */}
      <Header />

      <main>
        {/* ── Hero Banner Black Friday ── */}
        <HeroBanner />

        {/* ── Menu de categorias ── */}
        <CategoryMenu />

        {/* ── Vitrine 1: Produtos relacionados com sidebar ── */}
        <ProductShowcase
          title="Produtos relacionados"
          subtitle="EM OFERTA"
          products={products}
          loading={loading}
          error={error}
          onProductClick={open}
          showSidebar
        />

        {/* ── Banners Parcelô ── */}
        <BannerParcel />

        {/* ── Vitrine 2: Produtos relacionados (dark) ── */}
        <ProductShowcase
          title="Produtos relacionados"
          products={products}
          loading={loading}
          error={error}
          onProductClick={open}
          dark
        />

        {/* ── Banners Parcelô (repetição) ── */}
        <BannerParcel />

        {/* ── Navegar por marcas ── */}
        <BrandNav />

        {/* ── Vitrine 3: Produtos relacionados (celular) ── */}
        <ProductShowcase
          title="Produtos relacionados"
          subtitle="CELULAR"
          products={products}
          loading={loading}
          error={error}
          onProductClick={open}
        />

        {/* ── Newsletter ── */}
        <Newsletter />
      </main>

      {/* ── Footer ── */}
      <Footer />

      {/* ── Modal de produto ── */}
      <ProductModal product={selected} onClose={close} />
    </>
  )
}

export default App
