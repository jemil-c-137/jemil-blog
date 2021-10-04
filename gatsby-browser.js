import React from "react"
import "@fontsource/fira-sans"
import "@fontsource/inter"
import { Layout } from "./src/components"

export const wrapPageElement = ({element}) => {
  return (
    <Layout>
      {element}
    </Layout>
  )
}