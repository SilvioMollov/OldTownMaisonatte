import React, { Component } from "react";
import "../../styles/Layout.scss";
import ToolBar from "./ToolBar";
import Backdrop from "../Utilities/BackDrop";
import SideDrawer from "./SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false,
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

export default Layout;
