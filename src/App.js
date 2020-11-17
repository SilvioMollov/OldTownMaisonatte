import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Redirect,
} from "react-router-dom";
import SimpleReactLightbox from "simple-react-lightbox";

import "./App.scss";
import HomePage from "./components/Pages/HomePage";
import GalleryPage from "./components/Pages/GalleryPage";
import ReservationPage from "./components/Pages/ReservationPage";
import Layout from "./components/Layout/Layout";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <SimpleReactLightbox>
            <Layout>
              <Switch>
                <Route path="/home" exact component={HomePage} />
                <Route path="/gallery" exact component={GalleryPage} />
                <Route path="/reservation" exact component={ReservationPage} />
                <Redirect to={"/home"} />
              </Switch>
            </Layout>
          </SimpleReactLightbox>
        </Router>
      </div>
    );
  }
}

export default withRouter(App);
