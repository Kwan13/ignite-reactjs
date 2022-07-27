import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

import { useScroll } from '../../hooks/useScroll'
import { useShoppingCart } from '../../hooks/useShoppingCart'

import logoImg from '../../assets/logo.svg'

import { HeaderContainer } from './styles'

export function Header() {
  const { scrollYProgress } = useScroll()
  const { cartItems } = useShoppingCart()

  return (
    <HeaderContainer hasScroll={scrollYProgress > 0}>
      <div className="headerContent">
        <NavLink to="/">
          <img src={logoImg} alt="" />
        </NavLink>
        <nav>
          <span>
            <MapPin size={22} color="#8047F8" weight="fill" />
            Porto Alegrem, RS
          </span>
          <NavLink to="/checkout">
            <ShoppingCart size={22} color="#C47F17" weight="fill" />
            {cartItems.length > 0 && <span>{cartItems.length}</span>}
          </NavLink>
        </nav>
      </div>
    </HeaderContainer>
  )
}
