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
var withRouter = require("react-router").withRouter;
var axios = _interopRequire(require("axios"));

var connect = require("react-redux").connect;
var CreateProject = (function (Component) {
    function CreateProject(props) {
        _classCallCheck(this, CreateProject);

        _get(Object.getPrototypeOf(CreateProject.prototype), "constructor", this).call(this, props);
        this.state = {
            projectName: " "
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    _inherits(CreateProject, Component);

    _prototypeProperties(CreateProject, null, {
        handleChange: {
            value: function handleChange(e) {
                this.setState(_defineProperty({}, e.target.name, e.target.value));
            },
            writable: true,
            configurable: true
        },
        handleSubmit: {
            value: function handleSubmit(e) {
                var _this = this;
                e.preventDefault();
                var data = {
                    projectName: this.state.projectName };
                axios.post("/api/project-create?token=" + sessionStorage.getItem("userToken"), data).then(function (data) {
                    _this.props.history.push("/project/" + data.data.data._id);
                    window.location.reload();
                })["catch"](function (error) {
                    console.log(error);
                });
            },
            writable: true,
            configurable: true
        },
        render: {
            value: function render() {
                return React.createElement(
                    "div",
                    { className: "popup-create-prjt" },
                    React.createElement(
                        "div",
                        { className: "create-prjt" },
                        React.createElement(
                            "h2",
                            null,
                            "Give your project a name"
                        ),
                        React.createElement(
                            "form",
                            { onSubmit: this.handleSubmit },
                            React.createElement(
                                "label",
                                null,
                                "Project Title",
                                React.createElement("br", null),
                                React.createElement("input", { type: "text", name: "projectName", value: this.state.projectName, onChange: this.handleChange })
                            ),
                            React.createElement("input", { className: "create-prjt-submit", type: "submit", value: "Create New Project" })
                        )
                    ),
                    React.createElement("div", { onClick: this.props.closeAddProject, id: "close-CreateProject" })
                );
            },
            writable: true,
            configurable: true
        }
    });

    return CreateProject;
})(Component);

var mapStateToProps = function (state) {
    return {
        username: state.username
    };
};
module.exports = connect(mapStateToProps)(withRouter(CreateProject));