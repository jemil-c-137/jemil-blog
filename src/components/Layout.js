import React, { useState, useContext } from "react"
import { BurgerMenu, ThemeSwitcher, Navbar } from "./"
import { ThemeContext } from "styled-components"
import { GlobalStyles } from "../themes/globalStyles"
import { Container, Header, H1 } from "../elements"
import { Link } from "gatsby"
import useWindowSize from "../utils/hooks/useWindowSize"
import { StaticImage } from "gatsby-plugin-image"

export const Layout = ({ children }) => {
  const theme = useContext(ThemeContext)

  const [showBurger, setShowBurger] = useState(false)

  const toggleShow = () => {
    setShowBurger(s => !s)
  }

  const { width } = useWindowSize()

  return (
    <main
      style={{
        overflowX: "hidden",
        overflowY: `${showBurger ? "hidden" : "auto"}`,
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <ThemeSwitcher />
      <GlobalStyles theme={theme} />
      <Container>
        <Header>
            <StaticImage
              src={"../images/lg.png"}
              alt=""
              layout="fixed"
              width={100}
              height={100}
              imgStyle={{borderRadius: "50%"}}
            />
          {width <= 768 ? (
            <BurgerMenu show={showBurger} toggleShow={toggleShow} />
          ) : (
            <Navbar />
          )}
        </Header>
        {children}
      </Container>
    </main>
  )
}
