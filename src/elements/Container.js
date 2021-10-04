import styled from "styled-components";

export const Container = styled.main`
  margin: 0 auto;
  padding: 0 1rem;
  
  @media ${props => props.theme.breakpoints.tablet} {
    padding: 0 2.5rem;
  }

  @media ${props => props.theme.breakpoints.desktop} {
    max-width: 1040px;
    padding: 0;
  }

`