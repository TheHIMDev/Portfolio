import React from 'react'
import { NavLink } from 'react-router'

function SocialHeroIcon({children,URL}) {
  return (
    <li>
        <NavLink  to={URL}>{children}</NavLink>
    </li>
  )
}

export default SocialHeroIcon
