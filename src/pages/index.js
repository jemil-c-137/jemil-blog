import React from "react"
import { graphql } from "gatsby"
import { HeroSection } from "../sections/HeroSection"
import Projects from "../sections/Projects"
import Skills from "../sections/Skills"
import ContactMe from "../sections/ContactMe"

export const query = graphql`
  query MyQuery {
    datoCmsHomepage {
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
  console.log(datoCmsHomepage)
  const { heading, subheading, projects, projectsTitle, skills, skillsTitle } =
    datoCmsHomepage

  return (
    <main>
      <HeroSection />
      <Projects projects={projects} title={projectsTitle} />
      <Skills title={skillsTitle} skills={skills} />
      <ContactMe />
    </main>
  )
}
