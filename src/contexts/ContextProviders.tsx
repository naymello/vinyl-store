import VinylContextProvider from './VinylContext'
import BagContextProvider from './BagContext'
import { ThemeProvider } from 'styled-components'

import mainTheme from '../themes/mainTheme'

const ContextProviders: React.FC = ({ children }) => {
  return (
    <VinylContextProvider>
      <BagContextProvider>
        <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>
      </BagContextProvider>
    </VinylContextProvider>
  )
}

export default ContextProviders
