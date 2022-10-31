import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import VinylContextProvider from './VinylContext'
import BagContextProvider from './BagContext'
import { ThemeProvider } from 'styled-components'

import mainTheme from '../themes/mainTheme'

const queryClient = new QueryClient()

const ContextProviders: React.FC = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <VinylContextProvider>
        <BagContextProvider>
          <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>
        </BagContextProvider>
      </VinylContextProvider>
    </QueryClientProvider>
  )
}

export default ContextProviders
