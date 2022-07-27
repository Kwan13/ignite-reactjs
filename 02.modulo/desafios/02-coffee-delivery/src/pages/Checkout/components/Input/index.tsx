import {
  InputHTMLAttributes,
  forwardRef,
  ForwardRefRenderFunction,
} from 'react'

import { InputContainer } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  optional?: boolean
  width?: number
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { optional = false, width = 0, ...rest },
  ref,
) => {
  return (
    <InputContainer width={width}>
      <input ref={ref} {...rest} />

      {optional && <span>Opcional</span>}
    </InputContainer>
  )
}

export default forwardRef(InputBase)
