import { BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from './contexts/ShoppingCart'

import { Router } from './Router'

import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <BrowserRouter>
      <ShoppingCartProvider>
        <Router />
        <GlobalStyle />
      </ShoppingCartProvider>
    </BrowserRouter>
  )
}
