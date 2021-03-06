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
    isEng: true,
    threshold: null,
    touchStartPoint: null,
    touchEndPoint: null,
    touchM: null,
  };

  languageSwitchHandler = (e) => {
    const htmlLang = document.querySelector("html");
    const body = document.querySelector("body");

    const { isEng } = this.state;
    const { i18n, history } = this.props;

    console.log(history.location.pathname);

    this.setState({ isEng: !isEng }, () => {
      if (this.state.isEng) {
        body.className = "en";
        i18n.changeLanguage("en");
        htmlLang.attributes.lang.value = "en";
        history.push(history.location.pathname);
      } else {
        body.className = "bg";
        i18n.changeLanguage("bg");
        htmlLang.attributes.lang.value = "bg";
        history.push(history.location.pathname + "/?lang=bg");
      }
    });
  };

  drawerCloseHandler = () => {
    this.setState({ showSideDrawer: false }, () => {
      const targetElement = document.querySelector(".SideDrawer");
      targetElement.style.transition = `all 0.4s ease-in-out`;
      targetElement.style.transform = `translateX(-100%)`;
    });
  };

  drawerOpenHandler = () => {
    this.setState({ showSideDrawer: !this.state.showSideDrawer }, () => {
      const targetElement = document.querySelector(".SideDrawer");

      if (this.state.showSideDrawer) {
        targetElement.style.transition = `all 0.4s ease-in-out`;
        targetElement.style.transform = `translateX(0px)`;
      } else {
        targetElement.style.transition = `all 0.4s ease-in-out`;
        targetElement.style.transform = `translateX(-100%)`;
      }
    });
  };

  onTouchStartHandler = (e) => {
    this.setState({
      touchStartPoint: e.touches[0].clientX,
      threshold: e.targetTouches[0].target.offsetWidth / 2,
    });
  };

  onTouchMoveHandler = (e) => {
    this.setState({ touchM: e.touches[0].clientX });
  };

  onTouchEndHandler = (e) => {
    this.setState({ touchEndPoint: e.changedTouches[0].clientX });
  };

  onSwipeHandler = (prevState) => {
    const { touchStartPoint, touchM, touchEndPoint, threshold } = this.state;
    const targetElement = document.querySelector(".SideDrawer");
    let movingPosition = touchStartPoint - touchM;

    if (prevState.touchM !== touchM) {
      targetElement.style.transition = `none`;
      targetElement.style.transform = `translateX(${-movingPosition}px)`;

      if (movingPosition < 0) {
        targetElement.style.transform = `translateX(0px)`;
      }
    } else if (prevState.touchEndPoint !== touchEndPoint) {
      if (
        touchStartPoint > threshold &&
        touchEndPoint < threshold &&
        movingPosition > threshold / 2
      ) {
        this.drawerCloseHandler();
      } else {
        targetElement.style.transition = `all 0.4s ease-in-out`;
        targetElement.style.transform = `translateX(0px)`;
      }
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.onSwipeHandler(prevState);
    }
  }

  componentDidMount() {
    const htmlLang = document.querySelector("html");
    const body = document.querySelector("body");
    const { i18n, history } = this.props;

    this.setState(
      { isEng: Boolean(history.location.search) ? false : true },
      () => {
        if (this.state.isEng) {
          body.className = "en";
          i18n.changeLanguage("en");
          htmlLang.attributes.lang.value = "en";
        } else {
          body.className = "bg";
          i18n.changeLanguage("bg");
          htmlLang.attributes.lang.value = "bg";
        }
      }
    );
  }

  render() {
    const { showSideDrawer, isEng } = this.state;
    const body = document.querySelector("body");

    showSideDrawer
      ? (body.style = "overflow: hidden")
      : (body.style = "overflow: auto");

    return (
      <>
        <ToolBar
          isEng={isEng}
          languageSwitchHandler={this.languageSwitchHandler}
          isOpen={this.state.showSideDrawer}
          drawerClickHandler={this.drawerOpenHandler}
        />
        <SideDrawer
          isEng={isEng}
          touchStart={this.onTouchStartHandler}
          touchMove={this.onTouchMoveHandler}
          touchEnd={this.onTouchEndHandler}
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
