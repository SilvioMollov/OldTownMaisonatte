import React from "react";
import NavBar from "./NavBar";

import "../../styles/SideDrawer.scss";

const sideDrawer = (props) => {
  let drawerClasses = "SideDrawer";

  if (props.isOpen) {
    drawerClasses = "SideDrawer Open";
  }

  // const touchTest = (e) => {
  //   console.log(e.targetTouches);

  //   // console.log(
  //   //   e.targetTouches[0].clientX,
  //   //   e.targetTouches[0].target.offsetWidth / 2
  //   // );
  // };

  return (
    <>
      <nav
        className={drawerClasses}
        onTouchStart={props.touchStart}
        onTouchMove={props.touchMove}
        onTouchEnd={props.touchEnd}
      >
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
