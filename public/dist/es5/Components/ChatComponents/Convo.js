"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
require("./Convo.css");

var Convo = (function (Component) {
    function Convo() {
        _classCallCheck(this, Convo);

        if (Component != null) {
            Component.apply(this, arguments);
        }
    }

    _inherits(Convo, Component);

    _prototypeProperties(Convo, null, {
        render: {
            value: function render() {
                return React.createElement(
                    "div",
                    { className: "convo" },
                    React.createElement(
                        "div",
                        { className: "convo-img" },
                        React.createElement("img", { src: "https://ptetutorials.com/images/user-profile.png", alt: "sunil" })
                    ),
                    React.createElement(
                        "div",
                        { className: "convo-desc" },
                        React.createElement(
                            "h5",
                            null,
                            this.props.name,
                            " ",
                            React.createElement(
                                "span",
                                { className: "convo-date" },
                                "Dec 25"
                            )
                        ),
                        React.createElement(
                            "p",
                            null,
                            "Test, wasdfasdfasdfasdfasdf"
                        )
                    )
                );
            },
            writable: true,
            configurable: true
        }
    });

    return Convo;
})(Component);

module.exports = Convo;