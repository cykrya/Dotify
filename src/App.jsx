import React, {useState,useEffect } from "react";
import "./App.css";
import Home from "./pages/home";
import Login from "./pages/login";
import getQueryParams from "./utils/getQueryParams";
import { Provider } from "react-redux";
import store from "./components/core/store";
import { getAccessToken } from "./components/core/action";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const App = () => {
  const [accessToken,setAccessToken]= useState('');
  const dispatch=useDispatch();
  useEffect(()=>{
    const { access_token = null } = getQueryParams(window.location.hash);
    if (access_token) {
      setAccessToken(access_token);
    }
  },[]);

  if (accessToken){
    dispatch(getAccessToken (accessToken));
    console.log('test')
    return (
      <Router>
         <Switch>
          <Route path="/create-playlist" component={Home}></Route>
          <Route path="/" component={Login}></Route>
        </Switch>
      <Provider store={store}>
      <div className="App">
        {/* <Home accessToken={accessToken} /> */}
        <Link to="/create-playlist">Create Playlist</Link>
      </div>
      </Provider>
      </Router>
    );
    }
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/create-playlist" component={Home}></Route>
          <Route path="/" component={Login}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;