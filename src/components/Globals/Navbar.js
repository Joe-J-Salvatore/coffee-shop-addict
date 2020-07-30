import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.svg"
import { MdShoppingCart } from "react-icons/md"

const Navbar = () => {
  const [navCollapse, setNavCollapsed] = useState(true)
  const handleNavCollapse = () => setNavCollapsed(!navCollapse)

  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="company logo" />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        onClick={handleNavCollapse}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className={`${
          navCollapse ? "collapse text-sm-right" : ""
        } navbar-collapse`}
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link text-right">
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link text-right">
              ABOUT
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link text-right">
              <MdShoppingCart className="cart-icon" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
