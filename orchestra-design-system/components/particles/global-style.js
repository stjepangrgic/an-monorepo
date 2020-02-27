// import { createGlobalStyle } from 'styled-components'
// import 'normalize.css/normalize.css' // Adding this line adds the normalize to the global styles

// const GlobalStyle = createGlobalStyle`
//   body {
//     background-color: ${(props) => props.theme.color.globayBackground};
//     font-family: sans-serif
//   }
// `

// export default GlobalStyle

import { css } from '@emotion/core'
import normalize from 'normalize.css'

const GlobalStyle = css`
  ${normalize}
  * {
    box-sizing: border-box;
    margin: 0;
  }

  html,
  body {
    /* Gatsby styles */
    background-color: #cac;
    > div {
      background-color: #ccc;
    }
  }
`

export default GlobalStyle
