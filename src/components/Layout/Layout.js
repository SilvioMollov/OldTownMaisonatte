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
    bgn: true,
  };

  languageSwitchHandler = (e) => {
    const { bgn } = this.state;
    const { i18n } = this.props;

    this.setState({ bgn: !bgn }, () => {
      if (bgn) {
        i18n.changeLanguage("bg");
      } else {
        i18n.changeLanguage("en");
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
    const { showSideDrawer } = this.state;
    const body = document.querySelector("body");

    showSideDrawer
      ? (body.style = "overflow: hidden")
      : (body.style = "overflow: auto");

    return (
      <>
        <ToolBar
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
