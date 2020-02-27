import styled from '@emotion/styled'

// const buttonBackground = (props) => console.log(props.theme.mellowYellow)

// if (${({ h }) => (h === '1' ? '48px' : null)})
// switch (props.h) {
//   case '1':
//     // colour = props.theme.primary
//     break
//   case '2':
//     // colour = props.theme.secondary
//     break
//   case '3':
//     // colour = props.theme.tertiary
//     break
//   case '4':
//     // colour = props.theme.tertiary
//     break
//   case '5':
//     // colour = props.theme.tertiary
//     break
//   case '6':
//     // colour = props.theme.tertiary
//     break
// }

const StyledTitle = styled.h1`
  color: ${({ theme }) => `${theme.color.black}`};
`

export default StyledTitle
