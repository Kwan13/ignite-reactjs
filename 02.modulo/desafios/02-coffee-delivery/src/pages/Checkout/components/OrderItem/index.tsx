import { useState } from 'react'
import { Minus, Plus, Trash } from 'phosphor-react'

import { useShoppingCart } from '../../../../hooks/useShoppingCart'

import { OrderItemContainer } from './styles'

interface CartItem {
  id: string
  image: string
  name: string
  amount: number
  price: number
}

interface OrderItemProps {
  data: CartItem
}

export function OrderItem({ data }: OrderItemProps) {
  const [itemAmount, setItemAmount] = useState(data.amount)

  const { reduceAmount, increaseAmount, removeCartItem } = useShoppingCart()

  function handleAddNewItem() {
    setItemAmount((state) => state + 1)
    increaseAmount(data.id)
  }

  function handleRemoveItem() {
    if (itemAmount === 1) {
      return
    }
    setItemAmount((state) => state - 1)
    reduceAmount(data.id)
  }

  return (
    <OrderItemContainer>
      <div className="orderItemContent">
        <img src={`http://127.0.0.1:5173/src/assets/${data.image}`} alt="" />
        <div className="itemAmount">
          <span>{data.name}</span>
          <div className="cartControls">
            <div className="addCart">
              <button type="button" onClick={handleRemoveItem}>
                <Minus size={14} color="#8047F8" weight="bold" />
              </button>
              {itemAmount}
              <button type="button" onClick={handleAddNewItem}>
                <Plus size={14} color="#8047F8" weight="bold" />
              </button>
            </div>
            <button type="button" onClick={() => removeCartItem(data.id)}>
              <Trash size={16} color="#8047F8" weight="bold" />
              remover
            </button>
          </div>
        </div>
      </div>
      <span>
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(itemAmount * data.price)}
      </span>
    </OrderItemContainer>
  )
}
