import React from "react";
import "../../styles/ToolBar.scss";
import NavBar from "./NavBar";
import DrawerToggle from "./DrawerToggle";

import { NavLink } from "react-router-dom";

const toolbar = (props) => {
  return (
    <header className={"toolbar"}>
      <nav className={"toolbar__navigation"}>
        <DrawerToggle
          isOpen={props.isOpen}
          toggleDrawer={props.drawerClickHandler}
        />

        <div className="toolbar__logo">
          <NavLink to="/home" className="toolbar__navLink">
            Old Town Maisonette
          </NavLink>
        </div>

        <div className="toolbar__buttons-container">
          <NavBar />

          <div className="toolbar__buttons-lang">
            <button onClick={props.languageSwitchHandler}>
              {props.isBg ? "BG" : "EN"}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default toolbar;
