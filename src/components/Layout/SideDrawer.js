import React from "react";
import NavBar from "./NavBar";
import "../../styles/SideDrawer.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import { NavLink } from "react-router-dom";

const sideDrawer = (props) => {
  let drawerClasses = "SideDrawer";

  if (props.isOpen) {
    drawerClasses = "SideDrawer Open";
  }

  return (
    <>
      <nav className={drawerClasses}>
        <NavBar onClick={props.clicked} />
        <div className="side-drawer__logo">
          <span>Old Town</span>
          <span>Maisonette</span>
        </div>
      </nav>
    </>
  );
};

export default sideDrawer;
