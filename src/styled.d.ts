import 'styled-components'
import { ITheme } from './BLL/themeReducer'

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}