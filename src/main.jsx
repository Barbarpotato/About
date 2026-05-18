import { ChakraProvider } from '@chakra-ui/react'
import { Darwin } from 'personal-shared-layout'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <Darwin />
    <App />
  </ChakraProvider>
)
