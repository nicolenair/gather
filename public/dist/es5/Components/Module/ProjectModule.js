"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
require("./Module.css");

var connect = require("react-redux").connect;
var NavLink = require("react-router-dom").NavLink;
var FaEllipsisV = require("react-icons/fa").FaEllipsisV;
var ProjectModule = (function (Component) {
    function ProjectModule(props) {
        _classCallCheck(this, ProjectModule);

        _get(Object.getPrototypeOf(ProjectModule.prototype), "constructor", this).call(this, props);
        this.state = {
            title: this.props.project.projectName,
            img: this.props.project.projectpic,
            editDate: this.props.project.lastEdited,
            status: this.props.project.status
        };
        this.handleClick = this.handleClick.bind(this);
    }

    _inherits(ProjectModule, Component);

    _prototypeProperties(ProjectModule, null, {
        handleClick: {
            value: function handleClick() {
                this.props.dispatch({ type: "SELECT_PROJECT", selected_project: this.props.id, selected_project_name: this.props.project.projectName });
            },
            writable: true,
            configurable: true
        },
        render: {
            value: function render() {
                var crntDate = new Date();
                var editDate = new Date(this.state.editDate);

                var diffTime = Math.abs(crntDate.getTime() - editDate.getTime());
                var diffMin = Math.floor(diffTime / (1000 * 60));
                var diffHour = Math.floor(diffTime / (1000 * 60 * 60));
                var diffDay = Math.floor(diffTime / (1000 * 60 * 60 * 24));
                function monthDiff(d1, d2) {
                    var months;
                    months = (d2.getFullYear() - d1.getFullYear()) * 12;
                    months -= d1.getMonth();
                    months += d2.getMonth();
                    return months <= 0 ? 0 : months;
                }
                var diffMonth = monthDiff(editDate, crntDate);
                var diffYear = crntDate.getFullYear() - editDate.getFullYear();

                var lastEdited = "";
                if (diffMin < 1) {
                    lastEdited = "Edited less than a minute ago";
                } else if (diffMin === 1) {
                    lastEdited = "Edited 1 minute ago";
                } else if (diffHour < 1) {
                    lastEdited = "Edited " + diffMin + " minutes ago";
                } else if (diffHour === 1) {
                    lastEdited = "Edited 1 hour ago";
                } else if (diffDay < 1) {
                    lastEdited = "Edited " + diffHour + " hours ago";
                } else if (diffDay === 1) {
                    lastEdited = "Edited 1 day ago";
                } else if (diffDay < 30) {
                    lastEdited = "Edited " + diffDay + " days ago";
                } else if (diffMonth === 1) {
                    lastEdited = "Edited 1 month ago";
                } else if (diffMonth < 12) {
                    lastEdited = "Edited " + diffMonth + " months ago";
                } else if (diffYear === 1) {
                    lastEdited = "Edited 1 year ago";
                } else {
                    lastEdited = "Edited " + diffYear + " years ago";
                }


                return React.createElement(
                    NavLink,
                    { className: "module-margin", to: "/project/" + this.props.id, onClick: this.handleClick },
                    React.createElement(
                        "div",
                        { className: "module" },
                        React.createElement("img", { className: "module-img", src: this.state.img, alt: "" }),
                        React.createElement(
                            "div",
                            { className: "module-desc" },
                            React.createElement(
                                "h4",
                                null,
                                this.state.title
                            ),
                            React.createElement(
                                "p",
                                null,
                                lastEdited
                            )
                        ),
                        React.createElement(
                            "span",
                            null,
                            React.createElement(
                                "button",
                                { className: "module-options-btn" },
                                React.createElement(FaEllipsisV, { style: { fontSize: "22px" } })
                            )
                        )
                    )
                );
            },
            writable: true,
            configurable: true
        }
    });

    return ProjectModule;
})(Component);

var mapStateToProps = function (state) {
    return {
        selected_project: state.selected_project };
};
module.exports = connect(mapStateToProps)(ProjectModule);