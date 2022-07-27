import styled, { css } from 'styled-components'

interface InputContainerProps {
  width: number
}

export const InputContainer = styled.div<InputContainerProps>`
  ${(props) =>
    props.width > 0
      ? css`
          width: ${props.width / 16}rem;
        `
      : css`
          flex: 1;
        `}
  background-color: var(--base-input);
  height: 42px;
  border-radius: 0.25rem;
  border: 0.0625rem solid var(--base-button);
  padding: 12px;

  @media (max-width: 1150px) {
    flex: 1;
    width: 100%;
  }

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  input {
    width: 100%;
    background-color: transparent;
    border: 0;
    outline: none;

    &::placeholder {
      font-size: 0.875rem;
      line-height: 130%;
      color: var(--base-label);
    }
  }

  span {
    font-size: 0.75rem;
    color: var(--base-label);
    line-height: 130%;
    font-style: italic;
  }
`
