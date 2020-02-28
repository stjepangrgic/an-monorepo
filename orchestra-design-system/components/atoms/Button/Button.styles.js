import styled from '@emotion/styled'

const StyledButton = styled.button`
  background-color: ${({ theme }) => `${theme.color.black}`};
  color: #fff;
  font-size: inherit;
  font-weight: bold;
  border: 0;
  padding: 0.875em 1em;
  border-radius: 2px;
  text-transform: uppercase;
  line-height: 1;
  cursor: pointer;
  letter-spacing: 0.05em;
`

export default StyledButton
