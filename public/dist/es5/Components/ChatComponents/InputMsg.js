"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var FaPaperclip = require("react-icons/fa").FaPaperclip;
var InputMsg = (function (Component) {
    function InputMsg() {
        _classCallCheck(this, InputMsg);

        _get(Object.getPrototypeOf(InputMsg.prototype), "constructor", this).call(this);
        this.state = {
            message: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    _inherits(InputMsg, Component);

    _prototypeProperties(InputMsg, null, {
        handleChange: {
            value: function handleChange(e) {
                this.setState({
                    message: e.target.value
                });
            },
            writable: true,
            configurable: true
        },
        handleSubmit: {
            value: function handleSubmit(e) {
                e.preventDefault();
                this.props.sendMessage(this.state.message);
                this.setState({
                    message: ""
                });
            },
            writable: true,
            configurable: true
        },
        render: {
            value: function render() {
                return React.createElement(
                    "div",
                    { className: "msg-new" },
                    React.createElement(
                        "form",
                        { onSubmit: this.handleSubmit },
                        React.createElement("input", { onChange: this.handleChange,
                            value: this.state.message, type: "text", className: "msg-new-input", placeholder: "type a message..." }),
                        React.createElement(
                            "button",
                            { className: "msg-new-btn", type: "button" },
                            React.createElement(FaPaperclip, null)
                        )
                    )
                );
            },
            writable: true,
            configurable: true
        }
    });

    return InputMsg;
})(Component);

module.exports = InputMsg;