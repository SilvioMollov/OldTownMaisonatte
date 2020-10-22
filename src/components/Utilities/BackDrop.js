import React from "react";
import "../../styles/Utilities/BackDrop.scss";

const backdrop = (props) => {
  return props.showBackDrop ? (
    <div className={"Backdrop"} onClick={props.clickedBackDrop}></div>
  ) : null;
};

export default backdrop;
