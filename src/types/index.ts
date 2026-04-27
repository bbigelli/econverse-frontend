export interface Product {
  id: string | number
  productName: string
  descriptionShort: string
  photo: string
  price: number
  installments?: {
    count: number
    value: number
  }
}

export interface ApiResponse {
  success: boolean
  products: Omit<Product, 'id' | 'installments'>[] // Produtos vêm sem id e parcelas
}

export type Category = 'CELULAR' | 'ACESSÓRIOS' | 'TABLETS' | 'NOTEBOOKS' | 'TVS' | 'VER TODOS'
