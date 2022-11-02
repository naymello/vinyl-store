import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import AlbumsContextProvider from './AlbumsContext'
import BagContextProvider from './BagContext'
import { ThemeProvider } from 'styled-components'

import mainTheme from '../themes/mainTheme'

const queryClient = new QueryClient()

const ContextProviders: React.FC = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AlbumsContextProvider>
        <BagContextProvider>
          <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>
        </BagContextProvider>
      </AlbumsContextProvider>
    </QueryClientProvider>
  )
}

export default ContextProviders
