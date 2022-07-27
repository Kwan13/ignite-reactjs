import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
`

export const BannerContainer = styled.div`
  width: 100%;
  height: 34rem;
  margin-top: 6.5rem;

  background: url(./src/assets/banner-bg.svg);
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0 1.25rem;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1000px) {
    height: 100%;
  }
`

export const BannerContent = styled.div`
  max-width: 70rem;
  width: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  @media (max-width: 1000px) {
    flex-direction: column;
  }

  .bannerText {
    max-width: 36.75rem;

    h1 {
      font-family: 'Baloo 2', sans-serif;
      font-size: 3rem;
      font-weight: 800;
      line-height: 62px;
      color: var(--base-title);
    }

    p {
      margin-top: 1rem;
      font-size: 1.25rem;
      line-height: 26px;
      color: var(--base-subtitle);
    }

    .bannerIcons {
      max-width: 35.438rem;
      margin-top: 4.125rem;
      display: grid;
      grid-template-columns: repeat(2, 2fr);

      gap: 1.25rem;

      @media (max-width: 1000px) {
        grid-template-columns: 1fr;
      }
    }
  }

  .bannerImg {
    max-width: 29.188rem;
    height: 22.5rem;

    img {
      width: 100%;
      height: 100%;
    }
  }
`

export const CoffeeListContainer = styled.div`
  padding: 2rem 1.25rem;

  .coffeeListContent {
    max-width: 70rem;
    margin: 0 auto;

    h2 {
      font-family: 'Baloo 2', sans-serif;
      font-weight: 800;
      font-size: 2rem;
      line-height: 130%;
      color: var(--base-subtitle);
    }
  }

  .coffeeListGrid {
    margin-top: 3.375rem;

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;

    @media (max-width: 1000px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 800px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 550px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`
