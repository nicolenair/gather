"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var SentMsg = (function (Component) {
  function SentMsg() {
    _classCallCheck(this, SentMsg);

    if (Component != null) {
      Component.apply(this, arguments);
    }
  }

  _inherits(SentMsg, Component);

  _prototypeProperties(SentMsg, null, {
    render: {
      value: function render() {
        var date = new Date(JSON.parse(JSON.stringify(this.props.date)));

        return React.createElement(
          "div",
          { className: "msg-out" },
          React.createElement(
            "div",
            { className: "msg-out-content" },
            React.createElement(
              "p",
              null,
              this.props.text,
              " ",
              React.createElement(
                "span",
                { className: "time_date" },
                date.toLocaleTimeString()
              ),
              " "
            ),
            React.createElement(
              "span",
              { className: "time_date" },
              date.toDateString().substr(4, 6)
            )
          ),
          React.createElement(
            "div",
            { className: "msg-out-img" },
            React.createElement("img", { src: "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png", alt: "sunil" })
          )
        );
      },
      writable: true,
      configurable: true
    }
  });

  return SentMsg;
})(Component);

module.exports = SentMsg;