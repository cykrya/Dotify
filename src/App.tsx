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
<<<<<<< HEAD
<<<<<<< HEAD
    //const { access_token = null } = getQueryParams(window.location.hash);
=======
>>>>>>> a8d7d82 (added test for track component)
=======
>>>>>>> 948f2a5 (minor fixes)
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
<<<<<<< HEAD
<<<<<<< HEAD
    console.log('test1')
    return (
      // <Router >
      //    <Switch>
      //     <Route path="/create-playlist" component={Home}></Route>
      //   </Switch>
      // <Provider store={store}>
      // <div className="App">
      //   {/* <Home accessToken={accessToken} /> */}
      //   <Link
      //     className={`${
      //         linkState.includes("pressed") ? "disabled-link" : "link"
      //       } `}
      //     onClick={() => changelinkstate()}
      //     to="/create-playlist">{linkState.includes("pressed") ? "" : "Create Playlist"}</Link>
      // </div>
      // </Provider>
      // </Router>
      <h1>test</h1>
=======
=======
>>>>>>> 948f2a5 (minor fixes)
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
          to="/create-playlist">{linkState.includes("pressed") ? "" : "Create Playlist"}</Link>
      </div>
      </Provider>
      </Router>
<<<<<<< HEAD
   
>>>>>>> a8d7d82 (added test for track component)
=======
 
>>>>>>> 948f2a5 (minor fixes)
    );
    }
  return (
    <div className="App">
      <Router>
        <Switch>
<<<<<<< HEAD
<<<<<<< HEAD
          <Route path="/" component={Login}></Route>
=======
          <Route path="/">
            <Login />
          </Route>
>>>>>>> a8d7d82 (added test for track component)
=======
          <Route path="/" >
            <Login />
          </Route>
>>>>>>> 948f2a5 (minor fixes)
        </Switch>
      </Router>
    </div>
  );
}

export default App;