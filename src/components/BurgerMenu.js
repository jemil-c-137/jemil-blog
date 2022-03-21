import React from "react"
import { Link } from "gatsby"
import { Burger, Nav } from "../elements"
import { navigationLinks } from "../data/navigation"
export const BurgerMenu = ({ show, toggleShow, children }) => {
  return (
    <>
      <Burger onClick={toggleShow}>
        <div></div>
        <div></div>
        <div></div>
      </Burger>
      <Nav show={show}>
        <ul>
          {navigationLinks.map(link => {
            return (
              <li>
                <Link onClick={toggleShow} to={link.to}>
                  {link.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </Nav>
    </>
  )
}
