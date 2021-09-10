import React, { Component } from "react";
import { hot } from "react-hot-loader";

import "./App.css";
import OpenlayesMap from "./core/components/OL";
import MapBox from "./core/components/MapGL";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MapBox />
        <OpenlayesMap />
      </div>
    );
  }
}

export default hot(module)(App);
