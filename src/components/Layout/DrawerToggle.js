import React from "react";
import "../../styles/DrawerToggle.scss";

const drawerToggle = (props) => (
  <div className={"DrawerToggle"} onClick={props.toggleDrawer}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default drawerToggle;