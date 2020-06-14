import { Link } from "gatsby"
import React from "react"

const Header: React.FC<{siteTitle: string}> = ({ siteTitle }) => (
  <header>
    {siteTitle}
  </header>
)

export default Header
