import React from "react"
import styled from "styled-components"
import { H2, Description } from "../elements"
import { SiHtml5 } from "@react-icons/all-files/si/SiHtml5"
import { SiCss3 } from "@react-icons/all-files/si/SiCss3"
import { SiJavascript } from "@react-icons/all-files/si/SiJavascript"
import { SiTypescript } from "@react-icons/all-files/si/SiTypescript"
import { SiReact } from "@react-icons/all-files/si/SiReact"
import { SiRedux } from "@react-icons/all-files/si/SiRedux"
import { SiGatsby } from "@react-icons/all-files/si/SiGatsby"
import { SiNextDotJs } from "@react-icons/all-files/si/SiNextDotJs"
import { SiGraphql } from "@react-icons/all-files/si/SiGraphql"
import { SiApollographql } from "@react-icons/all-files/si/SiApollographql"
import { SiMongodb } from "@react-icons/all-files/si/SiMongodb"
import { SiAngular } from "@react-icons/all-files/si/SiAngular"
import { SiMaterialUi } from "@react-icons/all-files/si/SiMaterialUi"
import { SiTailwindcss } from "@react-icons/all-files/si/SiTailwindcss"
import { SiGithub } from "@react-icons/all-files/si/SiGithub"
import { SiFigma } from "@react-icons/all-files/si/SiFigma"

import { AiOutlineAntDesign } from "@react-icons/all-files/ai/AiOutlineAntDesign"

const columns = {
  col1: [
    { logo: <SiHtml5 size={22} />, name: "HTML", id: 0 },
    { logo: <SiCss3 size={22} />, name: "CSS", id: 1 },
    { logo: <SiJavascript size={22} />, name: "JavaScript", id: 2 },
    { logo: <SiTypescript size={22} />, name: "TypeScript", id: 3 },
  ],
  col2: [
    { logo: <SiReact size={22} />, name: "React", id: 0 },
    { logo: <SiRedux size={22} />, name: "Redux", id: 1 },
    { logo: <SiGatsby size={22} />, name: "Gatsby", id: 2 },
    { logo: <SiNextDotJs size={22} />, name: "Next", id: 3 },
  ],
  col3: [
    { logo: <SiGraphql size={22} />, name: "GraphQl", id: 0 },
    {
      logo: <SiApollographql size={22} />,
      name: "Apollo client/server",
      id: 1,
    },
    { logo: <SiMongodb size={22} />, name: "MongoDB", id: 2 },
    { logo: <SiMongodb size={22} />, name: "Express js", id: 3 },
  ],
  col4: [
    { logo: <SiAngular size={22} />, name: "Angular (TS)", id: 0 },
    { logo: <AiOutlineAntDesign size={22} />, name: "Ant Design", id: 1 },
    { logo: <SiMaterialUi size={22} />, name: "Material UI", id: 2 },
    { logo: <SiTailwindcss size={22} />, name: "Tailwind CSS", id: 3 },
  ],
  col5: [
    { logo: <SiAngular size={22} />, name: "JAMStack", id: 0 },
    { logo: <SiFigma size={22} />, name: "Figma", id: 1 },
    { logo: <SiGithub size={22} />, name: "Git", id: 2 },
    { logo: <SiTailwindcss size={22} />, name: "React-hook-form", id: 3 },
  ],
}

const Section = styled.section``

const SectionTitle = styled(H2)`
  margin-bottom: 3rem;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 1rem;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${props => props.theme.breakpoints.desktop} {
    grid-template-columns: repeat(4, 1fr);
  }
`

const GridItem = styled.div`
  margin-bottom: 1rem;
`

const Box = styled.div`
  display: flex;
  column-gap: 0.5rem;
  justify-content: flex-start;
  align-items: center;
`

const Icon = styled.img`
  width: 22px;
  height: 22px;
`

const Skills = ({ title = "Skills", skills }) => {
  const splitInChunks = (array, chunkSize) => {
    const result = []
    for (let i = 0; i < array.length; i += chunkSize) {
      const chunk = array.slice(i, i + chunkSize)
      result.push(chunk)
    }
    return result
  }

  const columns = splitInChunks(skills, 4)

  console.log(columns)

  return (
    <Section>
      <SectionTitle>{title}</SectionTitle>
      <Grid>
        {columns.map(column => (
          <GridItem key={column[0].id}>
            {column.map(skill => (
              <Box key={skill.name}>
                {skill.svgIcon && <Icon src={skill.svgIcon.url} />}
                <Description>{skill.name}</Description>
              </Box>
            ))}
          </GridItem>
        ))}
      </Grid>
      {/*      
      <Grid>
        <div>
          {columns.col1.map(skill => (
            <GridItem key={skill.name}>
              {skill.logo}
              <Description>{skill.name}</Description>
            </GridItem>
          ))}
        </div>
        <div>
          {columns.col2.map(skill => (
            <GridItem key={skill.name}>
              {skill.logo}
              <Description>{skill.name}</Description>
            </GridItem>
          ))}
        </div>
        <div>
          {columns.col3.map(skill => (
            <GridItem key={skill.name}>
              {skill.logo}
              <Description>{skill.name}</Description>
            </GridItem>
          ))}
        </div>
        <div>
          {columns.col4.map(skill => (
            <GridItem key={skill.name}>
              {skill.logo}
              <Description>{skill.name}</Description>
            </GridItem>
          ))}
        </div>
        <div>
          {columns.col5.map(skill => (
            <GridItem key={skill.name}>
              {skill.logo}
              <Description>{skill.name}</Description>
            </GridItem>
          ))}
        </div>
      </Grid> */}
    </Section>
  )
}

export default Skills
