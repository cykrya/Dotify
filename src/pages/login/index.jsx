import React,{ Component } from "react";
import formatParameter from "../../utils/formatParameter";

class Login extends Component {
  
  render() {
    const client_id = "35557af2eed94588b929b52693bc2ce7";
    const scope = "playlist-modify-private";
    const redirect_uri = "https://dotify-cykrya.vercel.app/";
    return (
      <>
        <div className="body-login">
          <h1 className="title-login">
              Dotify
          </h1>
            <div>
              <h3 className="title-signin">
                Sign in
              </h3>
            </div>
            <form className="form-signin" action="#" method="POST">
              <a
                className="anchor-login"
                href={`https://accounts.spotify.com/authorize?${formatParameter(
                  {
                    response_type: "token",
                    client_id,
                    scope,
                    redirect_uri,
                  }                
                )}`}
              >
                Sign using spotify
              </a>
            </form>
        </div>
      </>
    );
  }
}

export default Login;
