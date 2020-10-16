"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var RecievedMsg = (function (Component) {
    function RecievedMsg() {
        _classCallCheck(this, RecievedMsg);

        if (Component != null) {
            Component.apply(this, arguments);
        }
    }

    _inherits(RecievedMsg, Component);

    _prototypeProperties(RecievedMsg, null, {
        render: {
            value: function render() {
                var date = new Date(JSON.parse(JSON.stringify(this.props.date)));

                return React.createElement(
                    "div",
                    { className: "msg-in" },
                    React.createElement(
                        "div",
                        { className: "msg-in-img" },
                        React.createElement("img", { src: "https://ptetutorials.com/images/user-profile.png", alt: "sunil" })
                    ),
                    React.createElement(
                        "div",
                        { className: "msg-in-content" },
                        React.createElement(
                            "div",
                            { className: "msg-in-content-box" },
                            React.createElement(
                                "p",
                                null,
                                this.props.text,
                                " ",
                                React.createElement(
                                    "span",
                                    { className: "time_date" },
                                    " ",
                                    date.toLocaleTimeString().substr(0, 5) + " " + date.toLocaleTimeString().substr(8, 9)
                                )
                            ),
                            React.createElement(
                                "span",
                                { className: "time_date" },
                                date.toDateString().substr(4, 6)
                            )
                        )
                    )
                );
            },
            writable: true,
            configurable: true
        }
    });

    return RecievedMsg;
})(Component);

module.exports = RecievedMsg;