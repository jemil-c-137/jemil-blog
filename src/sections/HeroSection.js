import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Description, HeroHeading, Button, Flex } from "../elements"
import styled from "styled-components"
import * as css from "./sections.module.css"
import useWindowSize from "../utils/hooks/useWindowSize"

import { SiGithub } from "@react-icons/all-files/si/SiGithub"
import { SiLinkedin } from "@react-icons/all-files/si/SiLinkedin"

const StyledSection = styled.section`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  padding-top: 5rem;
  margin-bottom: 5rem;

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

const FlexSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
`

export const HeroSection = () => {
  const { width } = useWindowSize()

  return (
    <StyledSection>
      <TextWrapper>
        <HeroHeading className={css.title}>
          <p>Hello, I'm Jemil 👋</p>
        </HeroHeading>
        <Description mt={4} mb={3}>
          I am a Frontend Developer experienced in building marketing websites
          with JAMStack technology (Gatsby, Next, Netlify, DATOCms) and building
          Web Applications with React, Redux, TypeScript, GraphQL, MongoDB.
        </Description>
        <Flex $colGap="1rem">
          <Button>
            <a
              style={{ color: "inherit" }}
              target="_blank"
              rel="noreferrer"
              href="https://github.com/jemil-c-137"
            >
              <FlexSpan>
                <SiGithub />
                <span>GitHub</span>
              </FlexSpan>
            </a>
          </Button>
          <Button>
            <a
              style={{ color: "inherit" }}
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/jemil-suleimanov-559852116/"
            >
              <FlexSpan>
                <SiLinkedin />
                <span>LinkedIn</span>
              </FlexSpan>
            </a>
          </Button>
        </Flex>
      </TextWrapper>
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
    </StyledSection>
  )
}
