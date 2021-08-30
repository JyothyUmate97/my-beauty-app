import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../images/Beauty_Logo_Small.svg";
import hamburger from "../../images/breadcrumbs-arrow.svg";
// import hamburgerhover from "../../images/hamburger-hover.svg";
import user from "../../images/breadcrumbs-arrow.svg";
import search from "../../images/breadcrumbs-arrow.svg"

function Header() {
  return (
    <nav class="main-menu" id="header">
      <div className="main-menu" style={{margin:"15px"}}>
        <div>
          <div className="storefront-logo-footer">
            <img src={Logo} style={{ height: "35px", width: "35px" }} />
            <NavLink exact activeClassName="active main-menu" to="/" style={{ padding: "0 1.5rem" }}>
              Home
            </NavLink>
            <NavLink activeClassName="active main-menu" to="/skincaretest" style={{ padding: "0 1.5rem" }}>
              SKIN TYPE TEST
            </NavLink>
            <NavLink activeClassName="active main-menu" to="/myblog" style={{ padding: "0 1.5rem" }}>
              MY BLOG
            </NavLink>
          </div>
        </div>
      </div>
    </nav>

  );
}
export default Header;
