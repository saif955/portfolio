import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
const rootElement = document.getElementById('root')

// Use Vite's BASE_URL to determine the correct basename for the router
const base = import.meta.env.BASE_URL
const basename = base && base !== '/' && base !== './' ? base : undefined

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter basename={basename}>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
)