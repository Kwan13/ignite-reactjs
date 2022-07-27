import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  margin-top: 6.5rem;
  padding: 0 1.25rem;

  .checkoutContent {
    max-width: 70rem;
    width: 100%;
    margin: 2.5rem auto;

    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 2rem;

    @media (max-width: 1000px) {
      flex-direction: column;
      align-items: center;
    }
  }
`

export const CompleteOrderContainer = styled.div`
  width: 100%;

  @media (max-width: 1000px) {
    max-width: none;
  }

  strong {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;
    color: var(--base-subtitle);
  }

  .deliveryAddress {
    margin-top: 0.938rem;
    width: 100%;
    background-color: var(--base-card);
    border-radius: 6px;
    padding: 2.5rem;

    .deliveryAddressLabel {
      display: flex;
      align-items: flex-start;
      gap: 0.5rem;

      span {
        line-height: 130%;
        color: var(--base-subtitle);
        font-size: 1rem;
      }

      p {
        font-size: 0.875rem;
        line-height: 130%;
        color: var(--base-text);
      }
    }

    .deliveryAddressInputs {
      margin-top: 2rem;
      width: 100%;

      display: flex;
      flex-direction: column;
      gap: 1rem;

      .deliveryAddressInputGroup {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.75rem;

        @media (max-width: 500px) {
          flex-direction: column;
        }
      }
    }
  }

  .payment {
    margin-top: 0.75rem;
    width: 100%;
    background-color: var(--base-card);
    border-radius: 6px;
    padding: 2.5rem;

    .paymentLabel {
      display: flex;
      align-items: flex-start;
      gap: 0.5rem;

      span {
        line-height: 130%;
        color: var(--base-subtitle);
        font-size: 1rem;
      }

      p {
        font-size: 0.875rem;
        line-height: 130%;
        color: var(--base-text);
      }
    }

    .paymentMethods {
      margin-top: 2rem;

      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.75rem;

      @media (max-width: 500px) {
        flex-direction: column;
      }

      button {
        width: 100%;
        height: 3.1875rem;
        padding: 1rem;
        border: 0;
        background-color: var(--base-button);
        border-radius: 0.375rem;
        color: var(--base-text);
        font-size: 0.75rem;
        line-height: 160%;
        text-transform: uppercase;

        display: flex;
        align-items: center;
        gap: 0.75rem;
      }
    }
  }
`

export const SelectedCoffees = styled.div`
  max-width: 498px;
  width: 100%;

  @media (max-width: 1000px) {
    max-width: none;
  }

  strong {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;
    color: var(--base-subtitle);
  }

  .orderDetailContainer {
    margin-top: 0.938rem;
    max-width: 31.125rem;
    width: 100%;
    padding: 2.5rem;
    background-color: var(--base-card);
    border-radius: 6px 44px;

    button[type='submit'] {
      margin-top: 1.5rem;
      border: 0;
      padding: 0.75rem 0.5rem;
      background-color: var(--yellow);
      width: 100%;
      height: 2.875rem;
      border-radius: 6px;
      font-weight: 700;
      font-size: 0.875rem;
      line-height: 160%;
      color: var(--white);
      text-transform: uppercase;
    }

    .totalOrderAmount {
      width: 100%;

      p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 130%;
        color: var(--base-text);

        display: flex;
        align-items: center;
        justify-content: space-between;

        & + p {
          margin-top: 13px;
        }

        &:last-child {
          font-weight: 700;
          font-size: 20px;
          line-height: 130%;
          color: var(--base-subtitle);

          span {
            font-weight: 700;
            font-size: 20px;
            line-height: 130%;
            color: var(--base-subtitle);
          }
        }

        span {
          font-size: 16px;
          line-height: 130%;
          color: var(--base-text);
        }
      }
    }
  }
`
