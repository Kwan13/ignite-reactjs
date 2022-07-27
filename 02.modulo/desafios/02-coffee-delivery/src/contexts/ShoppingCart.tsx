import { createContext, ReactNode, useState } from 'react'
import { v4 as uuid } from 'uuid'

interface Coffee {
  id: string
  image: string
  name: string
  description: string
  tags: string[]
  price: number
}

interface CartItem {
  id: string
  image: string
  name: string
  amount: number
  price: number
}

interface ShoppingCartContextProps {
  coffeeList: Coffee[]
  cartItems: CartItem[]
  totalOrder: number
  deliveryFee: number
  addCartItem(data: CartItem): void
  reduceAmount(id: string): void
  increaseAmount(id: string): void
  removeCartItem(id: string): void
}

interface ShoppingCartProviderProps {
  children: ReactNode
}

const coffeeList: Coffee[] = [
  {
    id: uuid(),
    image: 'coffee-tradicional.svg',
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    tags: ['tradicional'],
    price: 9.9,
  },
  {
    id: uuid(),
    image: 'coffee-americano.svg',
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    tags: ['tradicional'],
    price: 9.9,
  },
  {
    id: uuid(),
    image: 'coffee-cremoso.svg',
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    tags: ['tradicional'],
    price: 9.9,
  },
  {
    id: uuid(),
    image: 'coffee-expresso-gelado.svg',
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    tags: ['tradicional', 'gelado'],
    price: 9.9,
  },
  {
    id: uuid(),
    image: 'coffee-leite.svg',
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
  },
  {
    id: uuid(),
    image: 'coffee-latte.svg',
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
  },
  {
    id: uuid(),
    image: 'coffee-capuccino.svg',
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
  },
  {
    id: uuid(),
    image: 'coffee-macchiato.svg',
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
  },
  {
    id: uuid(),
    image: 'coffee-mocaccino.svg',
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    tags: ['tradicional', 'com leite'],
    price: 9.9,
  },
  {
    id: uuid(),
    image: 'coffee-chocolate.svg',
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    tags: ['especial', 'com leite'],
    price: 9.9,
  },
  {
    id: uuid(),
    image: 'coffee-cubano.svg',
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    tags: ['especial', 'alcoólico', 'gelado'],
    price: 9.9,
  },
  {
    id: uuid(),
    image: 'coffee-havaiano.svg',
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    tags: ['especial'],
    price: 9.9,
  },
  {
    id: uuid(),
    image: 'coffee-arabe.svg',
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    tags: ['especial'],
    price: 9.9,
  },
  {
    id: uuid(),
    image: 'coffee-irlandes.svg',
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    tags: ['especial', 'alcoólico'],
    price: 9.9,
  },
]

export const shoppingCartContext = createContext({} as ShoppingCartContextProps)

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const { total, delivery } = cartItems.reduce(
    (accumulator, cartItem) => {
      accumulator.total += cartItem.price * cartItem.amount

      return accumulator
    },
    {
      total: 0,
      delivery: 3.5,
    },
  )

  function removeCartItem(id: string) {
    const newCartItems = cartItems.filter((item) => item.id !== id)
    setCartItems(newCartItems)
  }

  function addCartItem(data: CartItem) {
    setCartItems((state) => [...state, data])
  }

  function reduceAmount(id: string) {
    const cartItem = cartItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          amount: item.amount - 1,
        }
      }

      return item
    })

    setCartItems(cartItem)
  }

  function increaseAmount(id: string) {
    const cartItem = cartItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          amount: item.amount + 1,
        }
      }

      return item
    })

    setCartItems(cartItem)
  }

  return (
    <shoppingCartContext.Provider
      value={{
        coffeeList,
        addCartItem,
        cartItems,
        totalOrder: total,
        deliveryFee: delivery,
        reduceAmount,
        increaseAmount,
        removeCartItem,
      }}
    >
      {children}
    </shoppingCartContext.Provider>
  )
}
