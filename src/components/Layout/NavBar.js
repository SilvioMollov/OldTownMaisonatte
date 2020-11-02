import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { withTranslation } from "react-i18next";

import "../../styles/NavBar.scss";

class NavBar extends Component {
  render() {
    const { t } = this.props;

    return (
      <ul className="navbar__items">
        <li>
          <NavLink
            to="/home"
            className="navbar__navlinks"
            onClick={this.props.onClick}
          >
            {t("Home")}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/gallery"
            className="navbar__navlinks"
            onClick={this.props.onClick}
          >
            {t("Gallery")}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/reservation"
            className="navbar__navlinks"
            onClick={this.props.onClick}
          >
            {t("Reservation")}
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default withTranslation("NavigationBar")(NavBar);
