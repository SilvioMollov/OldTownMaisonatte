import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { withTranslation } from "react-i18next";
import { withRouter } from "react-router";

import "../../styles/NavBar.scss";

class NavBar extends Component {
  componentDidUpdate(prevProps) {
    const { isEng, history } = this.props;

    if (prevProps.isEng !== isEng) {
      const locationPath = history.location.pathname.slice(0, -2);

      history.push(`${locationPath}${isEng ? "en" : "bg"}`);
    }
  }

  render() {
    const { t, isEng } = this.props;

    return (
      <ul className="navbar__items">
        <li>
          <NavLink
            to={`/home/${isEng ? "en" : "bg"}`}
            className="navbar__navlinks"
            onClick={this.props.onClick}
          >
            {t("Home")}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/gallery/${isEng ? "en" : "bg"}`}
            className="navbar__navlinks"
            onClick={this.props.onClick}
          >
            {t("Gallery")}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={`/reservation/${isEng ? "en" : "bg"}`}
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

export default withTranslation("NavigationBar")(withRouter(NavBar));
