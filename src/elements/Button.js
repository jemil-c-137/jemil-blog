import styled from "styled-components"

export const Button = styled.button`
  padding: 0.5em 2em;
  color: ${props => props.theme.colors.light};
  background: ${props => props.theme.colors.lightPurple};
  border-radius: 2px;
  font-size: 1.25rem;
  line-height: 1.5rem;
`
