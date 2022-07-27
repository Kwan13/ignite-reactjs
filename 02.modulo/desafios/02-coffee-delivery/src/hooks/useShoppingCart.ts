import { useContext } from 'react'
import { shoppingCartContext } from '../contexts/ShoppingCart'

export function useShoppingCart() {
  const context = useContext(shoppingCartContext)

  return context
}
