/* eslint-disable no-unused-vars */
import React, {useState,useEffect } from "react";
import "./App.css";
import Home from "./pages/home";
import Login from "./pages/login";
import getQueryParams from "./utils/getQueryParams";
import { Provider } from "react-redux";
import store from "./components/core/store";
import { getAccessToken } from "./components/core/action";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const App = () => {
  const [accessToken,setAccessToken]= useState <string |null> (null);
  const [linkState,setlinkState]= useState("");
  const dispatch=useDispatch();
  useEffect(()=>{
    let param: {[key : string] : string} = getQueryParams(window.location.hash);
    if (param.access_token) {
      setAccessToken(param.access_token);
    }
  },[]);

  const changelinkstate= ()=>{
    setlinkState("pressed");

  };

  if (accessToken){
    dispatch(getAccessToken (accessToken));
    return (
      <Router >
         <Switch>
          <Route path="/create-playlist" >
            <Home />
          </Route>
        </Switch>
      <Provider store={store}>
      <div className="App">
        <Link 
          className={`${
              linkState.includes("pressed") ? "disabled-link" : "link"
            } `}
          onClick={() => changelinkstate()}
          to="/create-playlist" >{linkState.includes("pressed") ? "" : "Create Playlist"}</Link>
      </div>
      </Provider>
      </Router>
 
    );
    }
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" >
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;