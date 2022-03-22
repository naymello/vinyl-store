import { ThemeProvider } from 'styled-components'

import Routes from './src/routes/Routes'
import mainTheme from './src/themes/mainTheme'

export default function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <Routes />
    </ThemeProvider>
  )
}
