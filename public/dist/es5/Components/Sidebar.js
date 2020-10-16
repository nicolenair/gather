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
var SidebarProject = _interopRequire(require("./SidebarProject"));

var FaSearch = require("react-icons/fa").FaSearch;
var Sidebar = (function (Component) {
    function Sidebar(props) {
        _classCallCheck(this, Sidebar);

        _get(Object.getPrototypeOf(Sidebar.prototype), "constructor", this).call(this, props);
        this.state = {};
    }

    _inherits(Sidebar, Component);

    _prototypeProperties(Sidebar, null, {
        render: {
            value: function render() {
                var _this = this;
                var projectHeadingActive = "";
                if (this.props.selected_project === "" | typeof this.props.selected_project === "undefined") {
                    projectHeadingActive = "heading-active";
                }
                return React.createElement(
                    "div",
                    { className: "sidebar" },
                    React.createElement(
                        NavLink,
                        { className: "sidebar-title", to: "/project-dashboard" },
                        React.createElement(
                            "span",
                            null,
                            "gather"
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "sidebar-search" },
                        React.createElement(
                            "button",
                            { type: "submit", className: "sidebar-search-btn" },
                            React.createElement(FaSearch, null)
                        ),
                        React.createElement("input", { type: "text", className: "sidebar-search-input", placeholder: "Search for a project or file" })
                    ),
                    React.createElement(
                        "div",
                        { className: "sidebar-nav-heading " + projectHeadingActive },
                        React.createElement(
                            NavLink,
                            { className: "sidebar-nav-heading-title", to: "/project-dashboard" },
                            React.createElement(
                                "span",
                                null,
                                "Projects"
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "sidebar-nav" },
                        this.props.projects.sort(function (a, b) {
                            a = new Date(a.lastEdited);
                            b = new Date(b.lastEdited);
                            return a > b ? -1 : a < b ? 1 : 0;
                        }).map(function (project) {
                            if (_this.props.selected_project === project._id) {
                                return React.createElement(SidebarProject, { key: project._id, id: project._id, name: project.projectName, active: "true" });
                            } else {
                                return React.createElement(SidebarProject, { key: project._id, id: project._id, name: project.projectName, active: "false" });
                            }
                        })
                    )
                );
            },
            writable: true,
            configurable: true
        }
    });

    return Sidebar;
})(Component);

var mapStateToProps = function (state) {
    return {
        selected_project: state.selected_project,
        projects: state.projects
    };
};
module.exports = connect(mapStateToProps)(Sidebar);
/* <button className="sidebar-nav-heading-btn">
<IoIosAddCircleOutline />
</button> */