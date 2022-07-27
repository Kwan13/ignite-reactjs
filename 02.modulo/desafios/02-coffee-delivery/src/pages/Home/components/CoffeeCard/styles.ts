import styled from 'styled-components'

export const CoffeeContainer = styled.div`
  width: 100%;
  background-color: var(--base-card);
  border-radius: 6px 36px;
  padding: 0 1.5rem 1.25rem;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .coffeImage {
    margin-top: -20px;

    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 7.5rem;
      height: 7.5rem;
    }

    .coffeeTag {
      display: flex;
      flex-wrap: wrap;
      gap: 0.25rem;

      span {
        display: block;
        background-color: var(--yellow-light);
        padding: 0.25rem 0.5rem;
        color: var(--yellow-dark);
        text-align: center;
        font-weight: 700;
        font-size: 0.625rem;
        line-height: 130%;
        text-transform: uppercase;
        border-radius: 100px;
        margin-top: 0.75rem;
      }
    }
  }

  .coffeeDescription {
    margin-top: 1rem;
    text-align: center;

    strong {
      font-family: 'Baloo 2', sans-serif;
      font-weight: 700;
      font-size: 1.25rem;
      color: var(--base-subtitle);
      line-height: 130%;
    }

    p {
      margin-top: 0.5rem;
      font-size: 0.875rem;
      line-height: 130%;
      color: var(--base-label);
    }
  }

  .coffeePrice {
    margin-top: 2.063rem;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 0.875rem;
      line-height: 130%;
      color: var(--base-text);

      span {
        font-family: 'Baloo 2', sans-serif;
        font-weight: 800;
        font-size: 1.5rem;
      }
    }

    .shoppingCart {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      .addCart {
        border-radius: 6px;
        background: var(--base-button);
        padding: 0.5rem;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.25rem;

        button {
          background: transparent;
          border: 0;
          line-height: 0;
        }
      }

      > button {
        background-color: var(--purple-dark);
        border: 0;
        border-radius: 6px;
        padding: 0.5rem;
        line-height: 0;
        transition: background-color 0.2s;

        &:hover {
          background-color: var(--purple);
        }
      }
    }
  }
`
