import React, { Component } from "react";
import "../../styles/Layout.scss";
import { withTranslation } from "react-i18next";
import { withRouter } from "react-router";

import ToolBar from "./ToolBar";
import Backdrop from "../Utilities/BackDrop";
import SideDrawer from "./SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false,
    eng: false,
  };

  languageSwitchHandler = (e) => {
    const htmlLang = document.querySelector("html");
    const body = document.querySelector("body");

    const { eng } = this.state;
    const { i18n } = this.props;

    this.setState({ eng: !eng }, () => {
      if (eng) {
        body.className = "en";
        i18n.changeLanguage("en");
        htmlLang.attributes.lang.value = "en";
      } else {
        body.className = "bg";
        i18n.changeLanguage("bg");
        htmlLang.attributes.lang.value = "bg";
      }
    });

    // console.log(location);
  };

  drawerCloseHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  drawerOpenHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    const { showSideDrawer, eng } = this.state;
    const body = document.querySelector("body");

    showSideDrawer
      ? (body.style = "overflow: hidden")
      : (body.style = "overflow: auto");

    return (
      <>
        <ToolBar
          isEng={eng}
          languageSwitchHandler={this.languageSwitchHandler}
          isOpen={this.state.showSideDrawer}
          drawerClickHandler={this.drawerOpenHandler}
        />
        <SideDrawer
          isOpen={this.state.showSideDrawer}
          clicked={this.drawerCloseHandler}
        />
        <Backdrop
          showBackDrop={this.state.showSideDrawer}
          clickedBackDrop={this.drawerCloseHandler}
        ></Backdrop>

        <main>{this.props.children}</main>
      </>
    );
  }
}

export default withTranslation()(withRouter(Layout));
