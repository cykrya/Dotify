import { Component, useState,useEffect } from "react";
import "./App.css";
import Home from "./pages/home";
import Login from "./pages/login";
import getQueryParams from "./utils/getQueryParams";


class App extends Component {
  state = {
    accessToken:
      '',
  };

  componentDidMount() {
    const { access_token = null } = getQueryParams(window.location.hash);
    if (access_token) this.setState({ accessToken: access_token });
  }

  render() {
    const { accessToken = null } = this.state;
    if (accessToken)
      return (
        <div className="App">
          <Home accessToken={accessToken} />
        </div>
      );

    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;
