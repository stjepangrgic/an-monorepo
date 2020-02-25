import { createGlobalStyle } from 'styled-components'
import 'normalize.css/normalize.css' // Adding this line adds the normalize to the global styles

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.color.globayBackground};
  }
`

export default GlobalStyle
