import { useState, useEffect } from 'react'
import { Product } from '../types'

const URL = 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json'

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading]   = useState(true)
  const [error, setError]       = useState<string | null>(null)

  useEffect(() => {
    fetch(URL)
      .then(r => { if (!r.ok) throw new Error('Erro ao carregar'); return r.json() })
      .then(d => { setProducts(d.products || []); setLoading(false) })
      .catch(e => { setError(e.message); setLoading(false) })
  }, [])

  return { products, loading, error }
}
