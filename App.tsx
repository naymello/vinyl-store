import { ThemeProvider } from 'styled-components'

import Routes from './src/routes/Routes'
import mainTheme from './src/themes/mainTheme'
import BagContextProvider from './src/contexts/BagContext'

export default function App() {
  return (
    <BagContextProvider>
      <ThemeProvider theme={mainTheme}>
        <Routes />
      </ThemeProvider>
    </BagContextProvider>
  )
}
