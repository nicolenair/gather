import React, { Component } from "react";
import "./LogIn.css";

import GoogleLogin from "react-google-login";

class LogIn extends Component {
  constructor() {
    super();
    this.responseGoogleSuccess = this.responseGoogleSuccess.bind(this);
  }

  responseGoogleSuccess(res) {
    sessionStorage.setItem("userToken", res.tokenObj.id_token);
    this.props.login();
  }
  responseGoogleFail(res) {
    console.log(res);
  }
  render() {
    return (
      <div className="login">
        <div className="login-content">
          <div className="login-content-fields">
            <h3>Try gather today.</h3>
            <p>Get started by signing up with your Google account</p>
            <br />
            <GoogleLogin
              clientId="250039694980-rj02nk2mdr9iru0ohgfin3dsm78plt1o.apps.googleusercontent.com"
              buttonText="Login with Google"
              onSuccess={this.responseGoogleSuccess}
              onFailure={this.responseGoogleFail}
              cookiePolicy={"single_host_origin"}
            />
          </div>
        </div>
        <div className="login-display">
          <span className="login-display-helper"></span>
          <img
            src="https://www.gurgaongraphics.in/wp-content/uploads/2016/11/gurgaon-graphics-website-design-services.png"
            className="login-display-img"
          />
        </div>
      </div>
    );
  }
}

export default LogIn;
