import { Component } from "react";
import formatParameter from "../../utils/formatParameter";

class Login extends Component {
  render() {
    const client_id = "35557af2eed94588b929b52693bc2ce7";
    const scope = "playlist-modify-private";
    const redirect_uri = "http://localhost:3000";

    return (
      <>
        <div className="body-login">
          <div>
            <h2 className="title-login">
              Sign in to your account
            </h2>
          </div>
          <form className="form-signin" action="#" method="POST">
            <a
              className="link-signin"
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
