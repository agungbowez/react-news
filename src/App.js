import React, { Component } from "react";
// import logo from "./logo.svg";
// import Button from "./modules/Button";
// import P from "./modules/P";
import SourceList from "./modules/SourceList";
import "./App.css";
import axios from "axios";

// const key = "955db8c26f4244ecb849f3e11da6b2e4";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SourceList />
      </div>
    );
  }
}

export default App;
