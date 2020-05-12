import { css } from '@emotion/core'
import normalize from 'normalize.css'

const GlobalStyle = css`
  ${normalize}
  * {
    box-sizing: border-box;
    margin: 0;
  }

  html {
  }
  body {
    background-color: #fff;
    ${'' /* Try to move this to global, atm it was hard to reference the theme, 
    Looks like theme provider is not visible here */}
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif;
    font-size: 0.875rem;
    > div {
      ${'' /* background-color: #ccc; */}
    }
  }
`

export default GlobalStyle
