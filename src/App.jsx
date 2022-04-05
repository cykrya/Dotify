import {useState,useEffect } from "react";
import "./App.css";
import Home from "./pages/home";
import Login from "./pages/login";
import getQueryParams from "./utils/getQueryParams";
import { Provider } from "react-redux";
import store from "./components/core/store";

const App = () => {
  const [accessToken,setAccessToken]= useState('');
  
  useEffect(()=>{
    const { access_token = null } = getQueryParams(window.location.hash);
    if (access_token) setAccessToken(access_token);
  },[]);

  if (accessToken)
    return (
      <Provider store={store}>
      <div className="App">
        <Home accessToken={accessToken} />
      </div>
      </Provider>
    );

  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
