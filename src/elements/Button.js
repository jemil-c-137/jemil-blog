import styled from "styled-components";

export const Button = styled.button`
  padding: 16px 20px;
  color: ${props => props.theme.colors.light};
  background: ${props => props.theme.colors.orange};
  border-radius: 2px;
  font-size: 1.25rem;
  line-height: 1.5rem;
`