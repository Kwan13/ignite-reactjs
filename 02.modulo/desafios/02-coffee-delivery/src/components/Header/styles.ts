import styled, { css } from 'styled-components'

interface HeaderContainerProps {
  hasScroll: boolean
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 6.5rem;
  transition: all 0.3s;
  padding: 0 1.25rem;
  ${(props) =>
    props.hasScroll &&
    css`
      background-color: var(--white);
    `}

  display: flex;
  align-items: center;
  justify-content: center;

  .headerContent {
    max-width: 70rem;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.75rem;

      span {
        padding: 0.5rem;
        background-color: var(--purple-light);
        font-size: 0.875rem;
        line-height: 130%;
        color: var(--purple-dark);
        border-radius: 6px;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.25rem;
      }

      a {
        position: relative;
        width: 2.375rem;
        height: 2.375rem;
        padding: 0.5rem;
        background-color: var(--yellow-light);
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;

        span {
          top: -10px;
          left: 25px;
          position: absolute;
          width: 1.25rem;
          height: 1.25rem;
          background-color: var(--yellow-dark);
          font-weight: 700;
          font-size: 0.75rem;
          line-height: 130%;
          color: var(--white);
          border-radius: 50%;
        }
      }
    }
  }
`
