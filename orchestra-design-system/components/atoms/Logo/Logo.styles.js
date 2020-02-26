import styled from 'styled-components'

// const buttonBackground = (props) => console.log(props)

const StyledLogo = styled.div`
  /* background-color: #faa; */
  height: ${({ size }) => (size === 'small' ? '48px' : null)};
  svg {
    height: inherit;
    .text {
      fill: ${({ theme }) => `${theme.color.black}`};
    }
    .badge {
      fill: ${({ theme }) => `${theme.color.mellowYellow}`};
    }
  }
`

export default StyledLogo
