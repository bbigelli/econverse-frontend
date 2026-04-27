import { useState, useEffect } from 'react'
import { Product, ApiResponse } from '../types'

const API_URL = 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        
        console.log('🔄 Carregando produtos da URL:', API_URL)
        
        // Adicionar timeout para evitar espera infinita
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 10000)
        
        const response = await fetch(API_URL, {
          signal: controller.signal,
          mode: 'cors', // Tentar CORS
          headers: {
            'Accept': 'application/json',
          }
        })
        
        clearTimeout(timeoutId)
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`)
        }
        
        const data: ApiResponse = await response.json()
        
        if (data.success && Array.isArray(data.products)) {
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
        let errorMessage = 'Erro ao carregar produtos'
        
        if (err instanceof Error) {
          if (err.name === 'AbortError') {
            errorMessage = 'Timeout ao carregar produtos. Verifique sua conexão.'
          } else if (err.message.includes('fetch')) {
            errorMessage = 'Erro de conexão. Verifique sua internet.'
          } else {
            errorMessage = err.message
          }
        }
        
        setError(errorMessage)
        console.error('❌ Erro detalhado:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return { products, loading, error }
}