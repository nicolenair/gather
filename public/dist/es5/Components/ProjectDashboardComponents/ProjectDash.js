"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var connect = require("react-redux").connect;
require("./ProjectDash.css");

var ProjectModule = _interopRequire(require("../Module/ProjectModule"));

var IoIosAddCircleOutline = require("react-icons/io").IoIosAddCircleOutline;
var FaAngleDown = require("react-icons/fa").FaAngleDown;
var CreateProject = _interopRequire(require("./CreateProject"));

var GoogleLogout = require("react-google-login").GoogleLogout;
var ProjectDash = (function (Component) {
  function ProjectDash(props) {
    _classCallCheck(this, ProjectDash);

    _get(Object.getPrototypeOf(ProjectDash.prototype), "constructor", this).call(this, props);
    this.state = {
      addProject: false,
      filter: "All",
      showProfileMenu: false };
    this.addProject = this.addProject.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleClickAll = this.handleClickAll.bind(this);
    this.handleClickCurrent = this.handleClickCurrent.bind(this);
    this.handleClickCompleted = this.handleClickCompleted.bind(this);

    this.showProfileMenu = this.showProfileMenu.bind(this);
    this.closeProfileMenu = this.closeProfileMenu.bind(this);
  }

  _inherits(ProjectDash, Component);

  _prototypeProperties(ProjectDash, null, {
    handleClickAll: {
      value: function handleClickAll() {
        this.setState({
          filter: "All" });
      },
      writable: true,
      configurable: true
    },
    handleClickCurrent: {
      value: function handleClickCurrent() {
        this.setState({
          filter: "Current" });
      },
      writable: true,
      configurable: true
    },
    handleClickCompleted: {
      value: function handleClickCompleted() {
        this.setState({
          filter: "Completed" });
      },
      writable: true,
      configurable: true
    },
    addProject: {
      value: function addProject() {
        this.setState({
          addProject: !this.state.addProject });
      },
      writable: true,
      configurable: true
    },
    componentDidMount: {
      value: function componentDidMount() {
        this.props.dispatch({ type: "SELECT_PROJECT", selected_project: "" });
        // this.props.getData();
      },
      writable: true,
      configurable: true
    },
    showProfileMenu: {
      value: function showProfileMenu(event) {
        var _this = this;
        event.preventDefault();

        this.setState({ showProfileMenu: true }, function () {
          document.addEventListener("click", _this.closeProfileMenu);
        });
      },
      writable: true,
      configurable: true
    },
    closeProfileMenu: {
      value: function closeProfileMenu(event) {
        var _this = this;
        // if (!this.dropdownProfileMenu.contains(event.target)) {
        this.setState({ showProfileMenu: false }, function () {
          document.removeEventListener("click", _this.closeProfileMenu);
        });
        //}
      },
      writable: true,
      configurable: true
    },
    logout: {
      value: function logout() {
        sessionStorage.clear();
        window.location.reload();
      },
      writable: true,
      configurable: true
    },
    render: {
      value: function render() {
        var _this = this;
        var projectModules = this.props.projects.sort(function (a, b) {
          a = new Date(a.lastEdited);
          b = new Date(b.lastEdited);
          return a > b ? -1 : a < b ? 1 : 0;
        }).map(function (project) {
          return React.createElement(ProjectModule, { key: project._id, id: project._id, project: project });
        });

        return React.createElement(
          "div",
          { className: "projects" },
          React.createElement(
            "nav",
            { className: "navbar" },
            React.createElement(
              "div",
              null,
              React.createElement(
                "a",
                {
                  className: "navbar-filter underline-from-center",
                  onClick: this.handleClickAll
                },
                "All"
              ),
              React.createElement(
                "a",
                {
                  className: "navbar-filter underline-from-center",
                  onClick: this.handleClickCurrent
                },
                "Current"
              ),
              React.createElement(
                "a",
                {
                  className: "navbar-filter underline-from-center",
                  onClick: this.handleClickCompleted
                },
                "Completed"
              )
            ),
            React.createElement(
              "div",
              { className: "navbar-sort" },
              "Sort by ",
              React.createElement(
                "strong",
                null,
                "due date"
              ),
              " ",
              React.createElement(FaAngleDown, null)
            ),
            React.createElement(
              "div",
              { className: "profile", onClick: this.showProfileMenu },
              this.props.username,
              React.createElement("img", { className: "profile-pic", src: this.props.profile_pic, alt: "" }),
              this.state.showProfileMenu ? React.createElement(
                "div",
                {
                  className: "profile-menu",
                  ref: function (element) {
                    _this.dropdownProfileMenu = element;
                  }
                },
                React.createElement(
                  "button",
                  null,
                  " Profile "
                ),
                React.createElement(GoogleLogout, {
                  clientId: "250039694980-rj02nk2mdr9iru0ohgfin3dsm78plt1o.apps.googleusercontent.com",
                  render: function (renderProps) {
                    return React.createElement(
                      "button",
                      {
                        onClick: renderProps.onClick,
                        disabled: renderProps.disabled
                      },
                      "Log Out"
                    );
                  },
                  buttonText: "Logout",
                  onLogoutSuccess: this.logout
                })
              ) : null
            )
          ),
          React.createElement(
            "div",
            { className: "project-all", href: "/add-project" },
            React.createElement(
              "div",
              { onClick: this.addProject, className: "project-add" },
              "Add a new project",
              React.createElement(
                "div",
                { className: "project-add-btn" },
                React.createElement(IoIosAddCircleOutline, null)
              )
            ),
            projectModules
          ),
          this.state.addProject ? React.createElement(CreateProject, { closeAddProject: this.addProject }) : null
        );
      },
      writable: true,
      configurable: true
    }
  });

  return ProjectDash;
})(Component);

var mapStateToProps = function (state) {
  return {
    username: state.username,
    projects: state.projects,
    profile_pic: state.profile_pic };
};
module.exports = connect(mapStateToProps)(ProjectDash);