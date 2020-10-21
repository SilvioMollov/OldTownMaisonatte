import React, { Component } from "react";
import "../../styles/Layout.scss";
import ToolBar from "./ToolBar";


class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  drawerCloseHandler = () => {
    this.setState({ showSideDrawer: false });
    console.log(this.state.showSideDrawer);
  };

  drawerOpenHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <>
        <ToolBar drawerClickHandler={this.drawerOpenHandler} />
        {/* <SideDrawer
          //   isAuth={this.props.isAuth}
          isOpen={this.state.showSideDrawer}
          clicked={this.drawerCloseHandler}
        />
        <Backdrop
          show={this.state.showSideDrawer}
          clicked={this.drawerCloseHandler}
        ></Backdrop> */}

        <main>{this.props.children}</main>
      </>
    );
  }
}

export default Layout;
