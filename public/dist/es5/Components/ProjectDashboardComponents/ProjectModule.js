"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
require("./ProjectModule.css");

var NavLink = require("react-router-dom").NavLink;
var ProjectModule = (function (Component) {
    function ProjectModule() {
        _classCallCheck(this, ProjectModule);

        if (Component != null) {
            Component.apply(this, arguments);
        }
    }

    _inherits(ProjectModule, Component);

    _prototypeProperties(ProjectModule, null, {
        render: {
            value: function render() {
                return React.createElement(
                    NavLink,
                    { to: "/airbnb" },
                    React.createElement(
                        "div",
                        { className: "project" },
                        React.createElement("img", { className: "company-logo", src: "data:image/png;base64,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", alt: "" }),
                        React.createElement(
                            "div",
                            { className: "company-name" },
                            "Airbnb"
                        ),
                        React.createElement(
                            "div",
                            { className: "project-type" },
                            "Logo Design"
                        ),
                        React.createElement(
                            "div",
                            { className: "progress" },
                            React.createElement("span", null)
                        ),
                        React.createElement(
                            "div",
                            { className: "due" },
                            "Due in 3 days"
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

module.exports = ProjectModule;