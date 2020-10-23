import React from "react";
import "../../styles/ToolBar.scss";
import NavBar from "./NavBar";
import DrawerToggle from "./DrawerToggle";

import { NavLink } from "react-router-dom";

const toolbar = (props) => {
  return (
    <header className={"toolbar"}>
      <nav className={"toolbar__navigation"}>
        <DrawerToggle toggleDrawer={props.drawerClickHandler} />

        <div className="toolbar__logo">
          <NavLink to="/home" className="toolbar__navLink">
            Old Town Maisonette
          </NavLink>
        </div>
        <div className="toolbar__spacer"></div>
        <NavBar />
      </nav>
    </header>
  );
};

export default toolbar;
