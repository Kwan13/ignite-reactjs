import styled from 'styled-components'

export const OrderItemContainer = styled.div`
  width: 100%;
  height: 6.5rem;
  border-bottom: 1px solid var(--base-button);

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 3.125rem;
  /* border: 1px solid red; */

  @media (max-width: 500px) {
    flex-direction: column;
    height: auto;
  }

  & + div {
    margin-top: 1.5rem;
  }

  > span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 130%;
    color: var(--base-text);
  }

  .orderItemContent {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.25rem;

    img {
      width: 4rem;
      height: 4rem;
    }

    .itemAmount {
      span {
        font-size: 1rem;
        line-height: 130%;
        color: var(--base-subtitle);
      }

      .cartControls {
        margin-top: 0.5rem;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;

        .addCart {
          border-radius: 0.375rem;
          background: var(--base-button);
          padding: 0.5rem;

          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;

          button {
            background: transparent;
            border: 0;
            line-height: 0;
          }
        }

        > button {
          padding: 0.5rem;
          background-color: var(--base-button);
          border: 0;
          border-radius: 6px;
          text-transform: uppercase;
          font-size: 12px;
          line-height: 160%;
          color: var(--base-text);

          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.25rem;
        }
      }
    }
  }
`
