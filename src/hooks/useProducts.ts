import { useState, useEffect } from 'react'
import { Product, ApiResponse } from '../types'

// Usando o proxy para evitar CORS
// O Vite vai redirecionar /api para https://app.econverse.com.br
const API_URL = '/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        
        console.log('🔄 Carregando produtos da URL:', API_URL)
        
        const response = await fetch(API_URL)
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`)
        }
        
        const data: ApiResponse = await response.json()
        
        if (data.success && Array.isArray(data.products)) {
          // Adiciona ID único para cada produto e parcelamento
          const productsWithId = data.products.map((product, index) => ({
            ...product,
            id: index + 1,
            installments: {
              count: 10,
              value: product.price / 10
            }
          }))
          
          setProducts(productsWithId)
          console.log(`✅ ${productsWithId.length} produtos carregados com sucesso`)
        } else {
          throw new Error('Formato do JSON inválido')
        }
        
        setError(null)
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Erro desconhecido'
        setError(`Falha ao carregar produtos: ${errorMessage}`)
        console.error('❌ Erro detalhado:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return { products, loading, error }
}