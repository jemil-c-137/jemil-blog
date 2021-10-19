import React from "react"
import styled from "styled-components"

const Wrapper = styled.section`
  background: ${props => props.theme.global.additional};
  padding: 0 1rem;
    
  @media ${props => props.theme.breakpoints.tablet} {
    padding: 0 2.5rem;
  }
`

const RecentPosts = () => {
  return <Wrapper>Hello world</Wrapper>
}
export default RecentPosts
