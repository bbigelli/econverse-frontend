// src/contexts/CartContext.tsx
import React, { createContext, useReducer, useEffect, useContext } from 'react'
import { Product } from '../types'

interface CartItem extends Product {
  quantity: number
}

interface CartState {
  items: CartItem[]
  totalItems: number
  totalPrice: number
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: Product }
  | { type: 'REMOVE_ITEM'; payload: string | number }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string | number; quantity: number } }
  | { type: 'CLEAR_CART' }

const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
}

const calculateTotals = (items: CartItem[]) => {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  return { totalItems, totalPrice }
}

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.id === action.payload.id)
      
      let newItems: CartItem[]
      if (existingItem) {
        newItems = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        newItems = [...state.items, { ...action.payload, quantity: 1 }]
      }
      
      return { ...state, items: newItems, ...calculateTotals(newItems) }
    }
    
    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(item => String(item.id) !== String(action.payload))
      return { ...state, items: newItems, ...calculateTotals(newItems) }
    }
    
    case 'UPDATE_QUANTITY': {
      const newItems = state.items.map(item =>
        String(item.id) === String(action.payload.id)
          ? { ...item, quantity: action.payload.quantity }
          : item
      ).filter(item => item.quantity > 0)
      
      return { ...state, items: newItems, ...calculateTotals(newItems) }
    }
    
    case 'CLEAR_CART':
      return initialState
      
    default:
      return state
  }
}

// Criar o Context
const CartContext = createContext<CartContextType | undefined>(undefined)

// Definir o tipo do Context
interface CartContextType extends CartState {
  addItem: (product: Product) => void
  removeItem: (id: string | number) => void
  updateQuantity: (id: string | number, quantity: number) => void
  clearCart: () => void
}

// Provider component
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)
  
  // Carregar carrinho do localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      try {
        const parsed = JSON.parse(savedCart)
        if (parsed.items && Array.isArray(parsed.items)) {
          // Restaurar os itens do carrinho
          parsed.items.forEach((item: CartItem) => {
            dispatch({ type: 'ADD_ITEM', payload: item })
          })
        }
      } catch (error) {
        console.error('Error loading cart:', error)
      }
    }
  }, [])
  
  // Salvar carrinho no localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state))
  }, [state])
  
  const addItem = (product: Product) => {
    dispatch({ type: 'ADD_ITEM', payload: product })
  }
  
  const removeItem = (id: string | number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id })
  }
  
  const updateQuantity = (id: string | number, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } })
  }
  
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }
  
  return (
    <CartContext.Provider value={{
      ...state,
      addItem,
      removeItem,
      updateQuantity,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  )
}

// Hook personalizado para usar o carrinho
export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}