import styled from "styled-components"

export const HeroHeading = styled.h1`
  font-size: 2rem;
  line-height: 2.5rem;
  font-weight: 700;

  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 2.375rem;
    line-height: 3.125rem;
  }

  @media ${props => props.theme.breakpoints.desktop} {
    font-size: 2.75rem;
    line-height: 3.75rem;
  }
`

export const H1 = styled.h1`
  font-size: 1.875rem;
  line-height: 2.5rem;
  font-weight: 700;

  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 2.375rem;
    line-height: 3.125rem;
  }

  @media ${props => props.theme.breakpoints.desktop} {
    font-size: 2.75rem;
    line-height: 3.75rem;
  }
`

export const H2 = styled.h2`
  font-size: 1.375rem;
  line-height: 1.875rem;
  font-weight: 700;

  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 1.5rem;
    line-height: 2.125rem;
  }

  @media ${props => props.theme.breakpoints.desktop} {
    font-size: 1.675rem;
    line-height: 2.375rem;
  }

`
export const Description = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;

  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 1.125rem;
    line-height: 2.125rem;
  }

`

export const Categories = styled.h5`
  font-size: 1.125rem;
  line-height: 1.5rem;
  font-weight: 400;
  font-family: ${props => props.theme.fonts.secondary};

  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }

  @media ${props => props.theme.breakpoints.desktop} {
    font-size: 1.375rem;
    line-height: 2rem;
  }
`

export const Details = styled.p`
  font-family: ${props => props.theme.fonts.secondary};
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;

  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 1.125rem;
    line-height: 1.625rem;
  }
`

export const Title = styled.h3`
  font-size: 1.625rem;
  line-height: 2.375rem;
  font-weight: 500;

  @media ${props => props.theme.breakpoints.tablet} {
    font-size: 1.75rem;
    line-height: 2rem;
  }

  @media ${props => props.theme.breakpoints.desktop} {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }


`