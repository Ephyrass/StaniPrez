import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="header">
      <h1>
        <Link to="/">
          <span className="stani"> Stani Prez</span> <br />{" "}
          <span className="art">Art abstrait</span>
        </Link>
      </h1>
      <nav className="nav">
        <a class="nav-link " href="#galerie">
          Galerie
        </a>
        <a class="nav-link" href="#partner">
          Partenaires
        </a>
        <a class="nav-link" href="#contact">
          Contact
        </a>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
