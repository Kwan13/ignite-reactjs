import { BannerIcon } from './components/BannerIcon'

import coffeImage from '../../assets/banner-coffe.svg'

import { CoffeeCard } from './components/CoffeeCard'

import { useShoppingCart } from '../../hooks/useShoppingCart'
import {
  HomeContainer,
  BannerContainer,
  BannerContent,
  CoffeeListContainer,
} from './styles'

export function Home() {
  const { coffeeList } = useShoppingCart()

  return (
    <HomeContainer>
      <BannerContainer>
        <BannerContent>
          <div className="bannerText">
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>

            <div className="bannerIcons">
              <BannerIcon
                icon="shoppingCart"
                description="Compra simples e segura"
              />
              <BannerIcon
                icon="package"
                description="Embalagem mantém o café intacto"
              />
              <BannerIcon
                icon="timer"
                description="Entrega rápida e rastreada"
              />
              <BannerIcon
                icon="coffee"
                description="O café chega fresquinho até você"
              />
            </div>
          </div>
          <div className="bannerImg">
            <img src={coffeImage} alt="" />
          </div>
        </BannerContent>
      </BannerContainer>
      <CoffeeListContainer>
        <div className="coffeeListContent">
          <h2>Nossos cafés</h2>

          <div className="coffeeListGrid">
            {coffeeList.map((coffee) => (
              <CoffeeCard key={coffee.id} data={coffee} />
            ))}
          </div>
        </div>
      </CoffeeListContainer>
    </HomeContainer>
  )
}
