import React, { useState, useContext } from "react"
import { BurgerMenu, ThemeSwitcher } from "./"
import { ThemeContext } from "styled-components"
import { GlobalStyles } from "../themes/globalStyles"
import { Container, Header, H1 } from "../elements"
import { Link } from "gatsby"

export const Layout = ({ children }) => {
  const theme = useContext(ThemeContext)

  const [showBurger, setShowBurger] = useState(false)

  const toggleShow = () => {
    setShowBurger(s => !s)
  }

  return (
    <main style={{overflowX: "hidden", overflowY: `${showBurger ? "hidden" : "auto"}`, minHeight: "100vh", position: "relative"}} >
      <ThemeSwitcher />
      <GlobalStyles theme={theme} />
      <Container  >
        <Header>
          <Link to={"/"} ><H1>Jemil S.</H1> </Link>
          <BurgerMenu show={showBurger} toggleShow={toggleShow} />
        </Header>
        {children}
      </Container>
    </main>
  )
}
