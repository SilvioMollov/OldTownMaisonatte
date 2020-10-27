import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "../../styles/NavBar.scss";

class NavBar extends Component {
  render() {
    let userRoutes = (
      <>
        <li>
          <NavLink
            to="/home"
            className="navbar__navlinks"
            onClick={this.props.onClick}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/gallery"
            className="navbar__navlinks"
            onClick={this.props.onClick}
          >
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className="navbar__navlinks"
            onClick={this.props.onClick}
          >
            About Us
          </NavLink>
        </li>
      </>
    );

    return <ul className="navbar__items">{userRoutes}</ul>;
  }
}

export default NavBar;
