import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
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

export const HeroSection = ({ avatar, heading, subheading }) => {
  const { width } = useWindowSize()

  const image = getImage(avatar)

  return (
    <StyledSection>
      <TextWrapper>
        <HeroHeading className={css.title}>
          <p>{heading}</p>
        </HeroHeading>
        <Description mt={4} mb={3}>
          {subheading}
        </Description>
        <Flex $colGap="2rem">
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
        <GatsbyImage
          style={{ borderRadius: "50%" }}
          image={image}
          alt="picture of nice and hub,le guy"
        />
      </ImageWrapper>
    </StyledSection>
  )
}
