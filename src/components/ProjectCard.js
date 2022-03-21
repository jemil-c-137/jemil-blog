import React from "react"

import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Flex, Title } from "../elements"
import styled from "styled-components"

const Card = styled(Flex)`
  background: #edf7fa;
  border-radius: 8px;
  padding: 1rem 4rem;
  cursor: pointer;
  transition: background 0.3s linear;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;

  &:hover {
    background: #afeeee;
  }
`

const Link = styled.a`
  width: 100%;
  display: block;
`

const ProjectCard = ({ title, slug, image }) => {
  const img = getImage(image)

  return (
    <Link href={slug} target="_blank">
      <Card direction="column" rowGap="1rem" mb="2rem">
        <GatsbyImage
          image={img}
          alt="A nice and humble guy, i.e. me"
          placeholder="blurred"
          layout="fixed"
          width={200}
          height={200}
          quality={100}
        />
        <div>
          <Title>{title}</Title>
        </div>
      </Card>
    </Link>
  )
}

export default ProjectCard
