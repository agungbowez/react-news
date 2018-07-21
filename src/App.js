import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
// import logo from "./logo.svg";
// import Button from "./modules/Button";
// import P from "./modules/P";
// import SourceList from "./modules/SourceList";
import NewsList from "./modules/NewsList";
import "./App.css";
import axios from "axios";

// const key = "955db8c26f4244ecb849f3e11da6b2e4";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NewsList />
      </div>
    );
  }
}

export default App;
