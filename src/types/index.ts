export interface Product {
  productName: string
  descriptionShort: string
  photo: string
  price: number
}

export interface ProductsResponse {
  success: boolean
  products: Product[]
}

export type Category = 'CELULAR' | 'ACESSÓRIOS' | 'TABLETS' | 'NOTEBOOKS' | 'TVS' | 'VER TODOS'
