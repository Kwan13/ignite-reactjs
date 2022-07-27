import styled, { css } from 'styled-components'

const ICONS_COLORS = {
  package: '--base-text',
  shoppingCart: '--yellow-dark',
  timer: '--yellow',
  coffee: '--purple',
}

interface BannerIconContainerProps {
  iconsColors: keyof typeof ICONS_COLORS
}

export const BannerIconContainer = styled.div<BannerIconContainerProps>`
  color: var(--base-text);
  font-size: 1rem;
  line-height: 20.8px;

  display: flex;
  align-items: center;

  gap: 0.75rem;

  span {
    width: 2rem;
    height: 2rem;
    background-color: ${(props) => css`
      var(${ICONS_COLORS[props.iconsColors]})
    `};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`
