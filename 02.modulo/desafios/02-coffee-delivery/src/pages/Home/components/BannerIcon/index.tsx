import { Package, ShoppingCart, Timer, Coffee } from 'phosphor-react'

import { BannerIconContainer } from './styles'

interface BannerIconProps {
  icon: 'package' | 'shoppingCart' | 'timer' | 'coffee'
  description: string
}

export function BannerIcon({ icon, description }: BannerIconProps) {
  return (
    <BannerIconContainer iconsColors={icon}>
      <span>
        {icon === 'coffee' && <Coffee weight="fill" color="#FFFFFF" />}
        {icon === 'shoppingCart' && (
          <ShoppingCart weight="fill" color="#FFFFFF" />
        )}
        {icon === 'timer' && <Timer weight="fill" color="#FFFFFF" />}
        {icon === 'package' && <Package weight="fill" color="#FFFFFF" />}
      </span>

      {description}
    </BannerIconContainer>
  )
}
