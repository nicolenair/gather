"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _defineProperty = function (obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var connect = require("react-redux").connect;
var axios = _interopRequire(require("axios"));

var EnterName = (function (Component) {
    function EnterName(props) {
        _classCallCheck(this, EnterName);

        _get(Object.getPrototypeOf(EnterName.prototype), "constructor", this).call(this, props);
        this.state = {
            clientName: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    _inherits(EnterName, Component);

    _prototypeProperties(EnterName, null, {
        handleChange: {
            value: function handleChange(e) {
                this.setState(_defineProperty({}, e.target.name, e.target.value));
            },
            writable: true,
            configurable: true
        },
        handleSubmit: {
            value: function handleSubmit(e) {
                e.preventDefault();
                var data = JSON.stringify({
                    clientName: this.state.clientName });
                this.props.dispatch({ type: "CLIENT_NAME", clientName: this.state.clientName });
                sessionStorage.setItem("clientName", this.state.clientName);
                this.props.closeEnterName();
            },
            writable: true,
            configurable: true
        },
        render: {
            value: function render() {
                return React.createElement(
                    "div",
                    { className: "popup-enterName" },
                    React.createElement(
                        "div",
                        { className: "enterName" },
                        React.createElement(
                            "h2",
                            null,
                            "Welcome to Gather"
                        ),
                        React.createElement(
                            "form",
                            { onSubmit: this.handleSubmit },
                            React.createElement(
                                "label",
                                null,
                                "What's your name?",
                                React.createElement("br", null),
                                React.createElement("input", { type: "text", name: "clientName", value: this.state.clientName, onChange: this.handleChange })
                            ),
                            React.createElement("input", { className: "enterName-submit", type: "submit", value: "Submit" })
                        )
                    )
                );
            },
            writable: true,
            configurable: true
        }
    });

    return EnterName;
})(Component);

var mapStateToProps = function (state) {
    return {
        username: state.username
    };
};
module.exports = connect(mapStateToProps)(EnterName);
// axios.post("https://mongo-proj-ic8xgr.turbo360-vertex.com/api/project-create?token="+sessionStorage.getItem('userToken'), data)
// .then(data => {
//     this.props.history.push(('/project/' + data.data.data._id))
//     window.location.reload();
// })
// .catch(error => {
//     console.log(error)
// })