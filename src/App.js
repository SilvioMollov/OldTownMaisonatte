import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  withRouter,
  Redirect,
} from "react-router-dom";
import "./App.scss";
import HomePage from "./components/Pages/HomePage";
import Layout from "./components/Layout/Layout";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Layout>
            <Route path="/home" component={HomePage} />
            <Redirect to={"/home"} />
          </Layout>
        </Router>
      </div>
    );
  }
}

export default withRouter(App);
