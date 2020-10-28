import React from "react";
import "../../styles/DrawerToggle.scss";

const drawerToggle = (props) => {
  let className = "";

  if (props.isOpen) {
    className = "change";
  }

  return (
    <div className={`DrawerToggle ${className}`} onClick={props.toggleDrawer}>
      <div className={`bar1 ${className}`}></div>
      <div className={`bar2 ${className}`}></div>
      <div className={`bar3 ${className}`}></div>
    </div>
  );
};

export default drawerToggle;
