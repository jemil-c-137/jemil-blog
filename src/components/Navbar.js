import { Link } from 'gatsby'
import React from 'react'
import { navigationLinks } from '../data/navigation'
import { Navigation } from '../elements'

export const Navbar = () => {
  return (
    <Navigation>
      <ul>
        {navigationLinks.map(link => {
          return (
            <li>
              <Link to={link.to}>{link.title}</Link>
            </li>
          )
        })}
      </ul>
    </Navigation>
  )
}
