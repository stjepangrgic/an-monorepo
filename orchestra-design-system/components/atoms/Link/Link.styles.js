import styled from '@emotion/styled'

// const buttonBackground = (props) => console.log(props)

const StyledLink = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;
  color: ${({ theme }) => `${theme.color.black}`};
  /* font-family: ${(props) => `${props.variant}`}; */
  background-color: ${(props) =>
    props.variant === 'primary'
      ? `${props.theme.color.mellowYellow}`
      : 'transparent'};



  /* TODO Figure out how to style different variants in the simplest way */
`

export default StyledLink
