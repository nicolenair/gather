"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
require("./LogIn.css");

var GoogleLogin = _interopRequire(require("react-google-login"));

var LogIn = (function (Component) {
  function LogIn() {
    _classCallCheck(this, LogIn);

    _get(Object.getPrototypeOf(LogIn.prototype), "constructor", this).call(this);
    this.responseGoogleSuccess = this.responseGoogleSuccess.bind(this);
  }

  _inherits(LogIn, Component);

  _prototypeProperties(LogIn, null, {
    responseGoogleSuccess: {
      value: function responseGoogleSuccess(res) {
        sessionStorage.setItem("userToken", res.tokenObj.id_token);
        this.props.login();
      },
      writable: true,
      configurable: true
    },
    responseGoogleFail: {
      value: function responseGoogleFail(res) {
        console.log(res);
      },
      writable: true,
      configurable: true
    },
    render: {
      value: function render() {
        return React.createElement(
          "div",
          { className: "login" },
          React.createElement(
            "div",
            { className: "login-content" },
            React.createElement(
              "div",
              { className: "login-content-fields" },
              React.createElement(
                "h3",
                null,
                "Try gather today."
              ),
              React.createElement(
                "p",
                null,
                "Get started by signing up with your Google account"
              ),
              React.createElement("br", null),
              React.createElement(GoogleLogin, {
                clientId: "250039694980-rj02nk2mdr9iru0ohgfin3dsm78plt1o.apps.googleusercontent.com",
                buttonText: "Login with Google",
                onSuccess: this.responseGoogleSuccess,
                onFailure: this.responseGoogleFail,
                cookiePolicy: "single_host_origin"
              })
            )
          ),
          React.createElement(
            "div",
            { className: "login-display" },
            React.createElement("span", { className: "login-display-helper" }),
            React.createElement("img", {
              src: "https://www.gurgaongraphics.in/wp-content/uploads/2016/11/gurgaon-graphics-website-design-services.png",
              className: "login-display-img"
            })
          )
        );
      },
      writable: true,
      configurable: true
    }
  });

  return LogIn;
})(Component);

module.exports = LogIn;