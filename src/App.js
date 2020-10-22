import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Redirect,
} from "react-router-dom";
import "./App.scss";
import HomePage from "./components/Pages/HomePage";
import GalleryPage from "./components/Pages/GalleryPage";
import Layout from "./components/Layout/Layout";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Layout>
            <Switch>
              <Route path="/home" component={HomePage} />
              <Route path="/gallery" component={GalleryPage} />
              <Redirect to={"/home"} />
            </Switch>
          </Layout>
        </Router>
      </div>
    );
  }
}

export default withRouter(App);
