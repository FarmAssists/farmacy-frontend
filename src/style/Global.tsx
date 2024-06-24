import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Text Me One', sans-serif;
    font-family: 'Lato', sans-serif;
  }
  body {
    background-color: #000000;
    background-image: url('/images/background.png');
    background-size: 100%;

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
