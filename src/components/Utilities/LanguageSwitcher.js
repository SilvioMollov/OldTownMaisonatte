import React from "react";

const languageSwitcher = (props) => {
  return (
    <div>
      <label className="switch">
        <input type="checkbox" onClick={props.languageHandler} />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default languageSwitcher;
