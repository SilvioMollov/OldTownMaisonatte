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
            <i className="fas fa-user"></i>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/reservation"
            className="navbar__navlinks"
            onClick={this.props.onClick}
          >
            Reservation
            <i className="fas fa-heart"></i>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className="navbar__navlinks"
            onClick={this.props.onClick}
          >
            About Us
            <i className="fas fa-users"></i>
          </NavLink>
        </li>
      </>
    );

    return <ul className="navbar__items">{userRoutes}</ul>;
  }
}

export default NavBar;
