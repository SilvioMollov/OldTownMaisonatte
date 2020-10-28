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
        <div className="side-drawer__logo">
          <span>Old Town</span>
          <span>Maisonette</span>
        </div>
      </nav>
    </>
  );
};

export default sideDrawer;
