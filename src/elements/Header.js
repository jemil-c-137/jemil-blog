import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding: 0 1rem;

  @media ${props => props.theme.breakpoints.tablet} {
    padding: 0 2.5rem;
  }
`