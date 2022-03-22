import 'styled-components'
import mainTheme from '../themes/mainTheme'

declare module 'styled-components' {
  type ThemeType = typeof mainTheme

  export interface DefaultTheme extends ThemeType {}
}
