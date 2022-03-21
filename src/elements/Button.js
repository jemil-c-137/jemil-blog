import styled from "styled-components"

export const Button = styled.button`
  padding: 12px 12px;
  color: ${props => props.theme.colors.light};
  background: ${props => props.theme.colors.blue};
  border-radius: 8px;

  font-size: 1rem;
  line-height: 1.2rem;
  cursor: pointer;

  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 1.25rem;
    line-height: 1.5rem;
    padding: 16px 20px;
  }
`
