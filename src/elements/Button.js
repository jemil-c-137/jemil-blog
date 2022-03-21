import styled from "styled-components"

export const Button = styled.button`
  padding: 16px 20px;
  color: ${props => props.theme.colors.light};
  background: ${props => props.theme.colors.blue};
  border-radius: 8px;
  font-size: 1.25rem;
  line-height: 1.5rem;
  cursor: pointer;
`
