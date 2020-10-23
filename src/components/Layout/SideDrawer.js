import React from "react";
import NavBar from "./NavBar";
import "../../styles/SideDrawer.scss";

const sideDrawer = (props) => {
  let drawerClasses = "SideDrawer";

  if (props.isOpen) {
    drawerClasses = "SideDrawer Open";
  }

  return (
    <>
      <nav className={drawerClasses}>
        <NavBar onClick={props.clicked} />
      </nav>
    </>
  );
};

export default sideDrawer;
