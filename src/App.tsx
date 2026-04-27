import React, { useState } from 'react'
import { Product } from './types'
import { useProducts } from './hooks/useProducts'
import { CartProvider } from './contexts'
import Cart from './components/Cart/Cart'

import Header from './components/Header/Header'
import HeroBanner from './components/HeroBanner/HeroBanner'
import CategoryMenu from './components/CategoryMenu/CategoryMenu'
import ProductShowcase from './components/ProductShowcase/ProductShowcase'
import BannerParcel from './components/BannerParceiros/BannerParceiros'
import BrandNav from './components/BrandNav/BrandNav'
import Newsletter from './components/Newsletter/Newsletter'
import Footer from './components/Footer/Footer'
import ProductModal from './components/ProductModal/ProductModal'

const AppContent: React.FC = () => {
  const { products, loading, error } = useProducts()
  const [selected, setSelected] = useState<Product | null>(null)
  const [isCartOpen, setIsCartOpen] = useState(false)

  const openProduct = (p: Product) => setSelected(p)
  const closeProduct = () => setSelected(null)
  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)

  return (
    <>
      {/* ── Cabeçalho com carrinho ── */}
      <Header onCartClick={openCart} />

      <main>
        {/* ── Hero Banner Black Friday ── */}
        <HeroBanner />

        {/* ── Menu de categorias ── */}
        <CategoryMenu />

        {/* ── Vitrine 1: Produtos relacionados com sidebar ── */}
        <ProductShowcase
          title="Produtos relacionados"
          products={products}
          loading={loading}
          error={error}
          onProductClick={openProduct}
          showSidebar
        />

        {/* ── Banners Parcelô ── */}
        <BannerParcel />

        {/* ── Vitrine 2: Produtos relacionados ── */}
        <ProductShowcase
          title="Produtos relacionados"
          products={products}
          loading={loading}
          error={error}
          onProductClick={openProduct}
          showViewAll={true}
        />

        {/* ── Banners Parcelô (repetição) ── */}
        <BannerParcel />

        {/* ── Navegar por marcas ── */}
        <BrandNav />

        {/* ── Vitrine 3: Produtos relacionados (celular) ── */}
        <ProductShowcase
          title="Produtos relacionados"
          products={products}
          loading={loading}
          error={error}
          onProductClick={openProduct}
          showViewAll={true}
        />

        {/* ── Newsletter ── */}
        <Newsletter />
      </main>

      {/* ── Footer ── */}
      <Footer />

      {/* ── Modal de produto ── */}
      <ProductModal product={selected} onClose={closeProduct} />

      {/* ── Carrinho de compras ── */}
      <Cart isOpen={isCartOpen} onClose={closeCart} />
    </>
  )
}

const App: React.FC = () => {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  )
}

export default App