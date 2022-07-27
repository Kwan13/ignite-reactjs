/* eslint-disable no-unused-vars */
import { Minus, Plus, ShoppingCart } from 'phosphor-react'

import { useShoppingCart } from '../../../../hooks/useShoppingCart'

import { CoffeeContainer } from './styles'

import { useState } from 'react'

interface Coffee {
  id: string
  image: string
  name: string
  description: string
  tags: string[]
  price: number
}

interface CoffeeCardProps {
  data: Coffee
}

export function CoffeeCard({ data }: CoffeeCardProps) {
  const [itemAmount, setItemAmount] = useState(1)
  const { addCartItem } = useShoppingCart()

  function handleAddNewItem() {
    setItemAmount((state) => state + 1)
  }

  function handleAddCartItem() {
    const item = {
      id: data.id,
      image: data.image,
      name: data.name,
      amount: itemAmount,
      price: data.price,
    }

    addCartItem(item)
  }

  function handleRemoveItem() {
    if (itemAmount === 1) {
      return
    }
    setItemAmount((state) => state - 1)
  }

  return (
    <CoffeeContainer>
      <div className="coffeImage">
        <img src={`http://127.0.0.1:5173/src/assets/${data.image}`} alt="" />
        <div className="coffeeTag">
          {data.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>

      <div className="coffeeDescription">
        <strong>{data.name}</strong>
        <p>{data.description}</p>
      </div>

      <footer className="coffeePrice">
        <p>
          R$
          <span>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })
              .format(data.price)
              .replace('R$', '')}
          </span>
        </p>

        <div className="shoppingCart">
          <div className="addCart">
            <button type="button" onClick={handleRemoveItem}>
              <Minus color="#8047F8" weight="bold" />
            </button>
            {itemAmount}
            <button type="button" onClick={handleAddNewItem}>
              <Plus color="#8047F8" weight="bold" />
            </button>
          </div>
          <button type="button" onClick={handleAddCartItem}>
            <ShoppingCart color="#FFFFFF" weight="fill" />
          </button>
        </div>
      </footer>
    </CoffeeContainer>
  )
}
