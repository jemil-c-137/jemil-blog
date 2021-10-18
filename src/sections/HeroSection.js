import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Description, HeroHeading, Button } from "../elements"
import styled from "styled-components"
import * as css from "./sections.module.css"
import useWindowSize from "../utils/hooks/useWindowSize"

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${props => props.theme.breakpoints.tablet} {
    flex-direction: row;
    justify-content: space-evenly;
  }
`

const TextWrapper = styled.div`
    text-align: center;

  @media ${props => props.theme.breakpoints.tablet} {
    max-width: 50%;
  }
`

const ImageWrapper = styled.div`
  padding-bottom: 2.1rem;
`

export const HeroSection = () => {
  const { width } = useWindowSize()

  return (
    <StyledSection>
      <ImageWrapper>
        <StaticImage
          src="../images/me.jpg"
          alt="A nice and humble guy, i.e. me"
          placeholder="blurred"
          layout="fixed"
          width={200}
          height={200}
          imgClassName={css.image}
          quality={100}
        />
      </ImageWrapper>
      <TextWrapper>
        <HeroHeading className={css.title}>
          <p>Привет,</p>
          <p>Я Джемиль</p>
          <p>Frontend Разработчик</p>
        </HeroHeading>
        <Description mt={4} mb={3}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </Description>
        <Button>Портфолио</Button>
      </TextWrapper>
    </StyledSection>
  )
}
