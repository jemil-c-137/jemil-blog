import { Link } from 'gatsby'
import React from 'react'
import { navigationLinks } from '../data/navigation'
import { Navigation } from '../elements'
import {H2} from '../elements'


export const Navbar = () => {
  return (
    <Navigation>
      <ul>
        {navigationLinks.map((link, index) => {
          if (index === 0) {
            return null
          }
          return (
            <li>
              <Link to={link.to}><H2>{link.title}</H2></Link>
            </li>
          )
        })}
      </ul>
    </Navigation>
  )
}
