import React from "react"
import { useStyledDarkMode } from "gatsby-styled-components-dark-mode"


export const ThemeSwitcher = () => {
  const { isDark, toggleDark } = useStyledDarkMode()
  return <button onClick={() => toggleDark()}>click</button>
}
