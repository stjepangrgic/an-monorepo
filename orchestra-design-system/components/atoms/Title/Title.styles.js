import styled from '@emotion/styled'

// const buttonBackground = (props) => console.log(props.theme.mellowYellow)

// if (${({ h }) => (h === '1' ? '48px' : null)})

const buttonBackground = (props) => {
  // Fallback value if we can't get access to props
  // if (!props || !props.theme || !props.theme.primary) return "#00FFFF";
  // If no variant is specified, return the primary colour in our theme
  // if (!props.variant) return props.theme.primary;

  // Dynamically determine the background colour based on props
  let size
  switch (props.h) {
    case '1':
      // colour = props.theme.primary
      size = '64px'
      break
    case '2':
      // colour = props.theme.secondary
      size = '48px'
      break
    case '3':
      // colour = props.theme.tertiary
      size = '32px'
      break
    case '4':
      // colour = props.theme.tertiary
      size = '24px'
      break
    case '5':
      // colour = props.theme.tertiary
      size = '16px'
      break
    default:
      // colour = props.theme.tertiary
      size = '16px'
      break
  }

  return size
}

const StyledTitle = styled.h1`
  color: ${({ theme }) => `${theme.color.black}`};
  font-size: ${(props) => buttonBackground(props)};
  margin: 0;
  padding-bottom: 1rem;
  padding-top: 1rem;
  font-weight: bold;
  text-transform: ${({ h }) => (h !== '6' ? 'uppercase' : null)};
  letter-spacing: 0.05em;
`

export default StyledTitle
