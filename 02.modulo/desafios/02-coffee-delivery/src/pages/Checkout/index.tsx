import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from 'phosphor-react'

import Input from './components/Input'
import { OrderItem } from './components/OrderItem'

import { useShoppingCart } from '../../hooks/useShoppingCart'

import {
  CheckoutContainer,
  CompleteOrderContainer,
  SelectedCoffees,
} from './styles'

export function Checkout() {
  const { cartItems, totalOrder, deliveryFee } = useShoppingCart()

  return (
    <CheckoutContainer>
      <form className="checkoutContent">
        <CompleteOrderContainer>
          <strong>Complete seu pedido</strong>

          <div className="deliveryAddress">
            <div className="deliveryAddressLabel">
              <MapPinLine size={22} color="#C47F17" />
              <div>
                <span>Endereço de Entrega</span>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </div>
            <div className="deliveryAddressInputs">
              <Input width={200} placeholder="CEP" />
              <Input placeholder="Rua" />
              <div className="deliveryAddressInputGroup">
                <Input type="number" width={200} placeholder="Número" />
                <Input placeholder="Complemento" optional />
              </div>
              <div className="deliveryAddressInputGroup">
                <Input width={200} placeholder="Bairro" />
                <Input width={230} placeholder="Cidade" />
                <Input placeholder="UF" maxLength={2} />
              </div>
            </div>
          </div>

          <div className="payment">
            <div className="paymentLabel">
              <CurrencyDollar size={22} color="#8047F8" />
              <div>
                <span>Endereço de Entrega</span>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </div>

            <div className="paymentMethods">
              <button type="button">
                <CreditCard size={16} color="#8047F8" /> cartão de crédito
              </button>
              <button type="button">
                <Bank size={16} color="#8047F8" /> cartão de débito
              </button>
              <button type="button">
                <Money size={16} color="#8047F8" /> dinheiro
              </button>
            </div>
          </div>
        </CompleteOrderContainer>

        <SelectedCoffees>
          <strong>Cafés selecionados</strong>

          <div className="orderDetailContainer">
            {cartItems.map((item) => (
              <OrderItem key={item.id} data={item} />
            ))}

            <div className="totalOrderAmount">
              <p>
                Total de itens
                <span>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(totalOrder)}
                </span>
              </p>
              <p>
                Entrega
                <span>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(deliveryFee)}
                </span>
              </p>
              <p>
                Total
                <span>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(totalOrder + deliveryFee)}
                </span>
              </p>
            </div>

            <button type="submit">confirmar pedido</button>
          </div>
        </SelectedCoffees>
      </form>
    </CheckoutContainer>
  )
}
