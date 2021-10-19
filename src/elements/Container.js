import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;


  @media ${props => props.theme.breakpoints.desktop} {
    max-width: 1040px;
    padding: 0;
  }

`