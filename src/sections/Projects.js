import React from "react"
import styled from "styled-components"
import ProjectCard from "../components/ProjectCard"
import { H2 } from "../elements"

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin: 0 auto;
  justify-items: center;
  align-items: center;
  margin-bottom: 3rem;
  column-gap: 1rem;
  row-gap: 1rem;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const SectionTitle = styled(H2)`
  margin-bottom: 3rem;
`

const Projects = ({ projects, title = "My Projects" }) => {
  return (
    <section>
      <SectionTitle>{title}</SectionTitle>
      <Grid>
        {projects.map(project => (
          <ProjectCard {...project} key={project.id} />
        ))}
      </Grid>
    </section>
  )
}

export default Projects
