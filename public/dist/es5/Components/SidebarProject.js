"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var NavLink = require("react-router-dom").NavLink;
var connect = require("react-redux").connect;
var SidebarProject = (function (Component) {
    function SidebarProject(props) {
        _classCallCheck(this, SidebarProject);

        _get(Object.getPrototypeOf(SidebarProject.prototype), "constructor", this).call(this, props);
        this.state = {
            name: this.props.name
        };
        this.handleClick = this.handleClick.bind(this);
    }

    _inherits(SidebarProject, Component);

    _prototypeProperties(SidebarProject, null, {
        handleClick: {
            value: function handleClick() {
                this.props.dispatch({ type: "SELECT_PROJECT", selected_project: this.props.id, selected_project_name: this.props.name });
            },
            writable: true,
            configurable: true
        },
        render: {
            value: function render() {
                if (this.props.active === "true") {
                    return React.createElement(
                        NavLink,
                        { className: "sidebar-nav-project project-active", onClick: this.handleClick, to: "/project/" + this.props.id },
                        React.createElement(
                            "span",
                            null,
                            this.state.name
                        )
                    );
                } else {
                    return React.createElement(
                        NavLink,
                        { className: "sidebar-nav-project", onClick: this.handleClick, to: "/project/" + this.props.id },
                        React.createElement(
                            "span",
                            null,
                            this.state.name
                        )
                    );
                }
            },
            writable: true,
            configurable: true
        }
    });

    return SidebarProject;
})(Component);

var mapStateToProps = function (state) {
    return {
        selected_project: state.selected_project };
};
module.exports = connect(mapStateToProps)(SidebarProject);