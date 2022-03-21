import React from "react"
import { graphql } from "gatsby"
import { HeroSection } from "../sections/HeroSection"
import Projects from "../sections/Projects"
import Skills from "../sections/Skills"
import ContactMe from "../sections/ContactMe"

export const query = graphql`
  query MyQuery {
    datoCmsHomepage {
      avatar {
        gatsbyImageData(width: 200, height: 200, placeholder: BLURRED)
      }
      heading
      subheading
      projectsTitle
      projects {
        slug
        image {
          gatsbyImageData(width: 200, height: 200, placeholder: BLURRED)
        }
        title
        id
      }
      skillsTitle
      skills {
        name
        svgIcon {
          url
        }
        id
      }
    }
  }
`

export default function Home({ data }) {
  const { datoCmsHomepage } = data
  const {
    heading,
    subheading,
    projects,
    projectsTitle,
    skills,
    skillsTitle,
    avatar,
  } = datoCmsHomepage

  return (
    <main>
      <HeroSection avatar={avatar} heading={heading} subheading={subheading} />
      <Projects projects={projects} title={projectsTitle} />
      <Skills title={skillsTitle} skills={skills} />
      <ContactMe />
    </main>
  )
}
