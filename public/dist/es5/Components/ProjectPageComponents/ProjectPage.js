"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var axios = _interopRequire(require("axios"));

var connect = require("react-redux").connect;
var withRouter = require("react-router").withRouter;
var FileModule = _interopRequire(require("../Module/FileModule"));

require("./ProjectPage.css");

var NavLink = require("react-router-dom").NavLink;
var FaAngleRight = require("react-icons/fa").FaAngleRight;
var IoIosAddCircleOutline = require("react-icons/io").IoIosAddCircleOutline;
var GoogleLogout = require("react-google-login").GoogleLogout;
var ProjectPage = (function (Component) {
  function ProjectPage(props) {
    _classCallCheck(this, ProjectPage);

    _get(Object.getPrototypeOf(ProjectPage.prototype), "constructor", this).call(this, props);
    this.state = {
      uploading: false,
      showProfileMenu: false };
    this.textInput = React.createRef();

    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleChangeUpload = this.handleChangeUpload.bind(this);
    this.handleSubmitUpload = this.handleSubmitUpload.bind(this);
    this.uploadComplete = this.uploadComplete.bind(this);

    this.showProfileMenu = this.showProfileMenu.bind(this);
    this.closeProfileMenu = this.closeProfileMenu.bind(this);
  }

  _inherits(ProjectPage, Component);

  _prototypeProperties(ProjectPage, null, {
    componentDidMount: {
      value: function componentDidMount() {
        var _this = this;
        this.props.dispatch({
          type: "SELECT_PROJECT",
          selected_project: this.props.id,
          selected_project_name: this.props.name });
        this.props.dispatch({ type: "LOAD_FILES", files: [] });

        axios.get("/api/project-pictures?projectId=" + this.props.selected_project + "&token=" + sessionStorage.getItem("userToken")).then(function (data) {
          _this.props.dispatch({
            type: "LOAD_FILES",
            files: data.data.data._doc.projectDoc,
            upload_info: data.data.data });
        })["catch"](function (err) {
          console.log(err);
        });
      },
      writable: true,
      configurable: true
    },
    handleChangeUpload: {
      value: function handleChangeUpload() {
        this.setState({
          uploading: true });
        this.form.dispatchEvent(new Event("submit"));
      },
      writable: true,
      configurable: true
    },
    handleSubmitUpload: {
      value: function handleSubmitUpload(e) {
        e.preventDefault();

        var data = new FormData(e.target);

        var xhr = new XMLHttpRequest();
        // xhr.upload.addEventListener("progress", this.uploadProgress, false);
        xhr.addEventListener("load", this.uploadComplete, false);
        xhr.addEventListener("error", this.uploadFailed, false);
        xhr.addEventListener("abort", this.uploadCanceled, false);

        xhr.open("POST", this.props.upload_info.url, true);
        xhr.send(data);
      },
      writable: true,
      configurable: true
    },
    uploadComplete: {
      value: function uploadComplete() {
        axios.get("/api/update-project-documents?key=" + this.props.upload_info.fields.key + "&projectId=" + this.props.selected_project + "&token=" + sessionStorage.getItem("userToken")).then(function (res) {
          return window.location.reload();
        });
      },
      writable: true,
      configurable: true
    },
    uploadFailed: {
      value: function uploadFailed() {},
      writable: true,
      configurable: true
    },
    uploadCanceled: {
      value: function uploadCanceled() {},
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
        // }
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
        var uploadForm = "";
        if (this.props.upload_info) {
          uploadForm = React.createElement(
            "form",
            { onSubmit: this.handleSubmitUpload, ref: function (r) {
                return _this.form = r;
              } },
            React.createElement("input", {
              type: "hidden",
              name: "key",
              value: this.props.upload_info.fields.key
            }),
            React.createElement("input", {
              type: "hidden",
              name: "acl",
              value: this.props.upload_info.fields.acl
            }),
            React.createElement("input", {
              type: "hidden",
              name: "X-Amz-Credential",
              value: this.props.upload_info.fields["X-Amz-Credential"]
            }),
            React.createElement("input", {
              type: "hidden",
              name: "X-Amz-Algorithm",
              value: this.props.upload_info.fields["X-Amz-Algorithm"]
            }),
            React.createElement("input", {
              type: "hidden",
              name: "X-Amz-Date",
              value: this.props.upload_info.fields["X-Amz-Date"]
            }),
            React.createElement("input", {
              type: "hidden",
              name: "Policy",
              value: this.props.upload_info.fields.Policy
            }),
            React.createElement("input", {
              type: "hidden",
              name: "X-Amz-Signature",
              value: this.props.upload_info.fields["X-Amz-Signature"]
            }),
            React.createElement(
              "label",
              { className: "file-add" },
              "Add a new ",
              React.createElement("br", null),
              "file",
              React.createElement(
                "div",
                { className: "file-add-btn" },
                React.createElement(IoIosAddCircleOutline, null)
              ),
              React.createElement("input", {
                className: "file-add-input",
                type: "file",
                name: "file",
                onChange: this.handleChangeUpload,
                required: true
              })
            ),
            React.createElement("br", null)
          );
        }

        var fileModules = "";
        if (this.props.files) {
          fileModules = this.props.files.sort(function (a, b) {
            a = new Date(a.lastEdited);
            b = new Date(b.lastEdited);
            return a > b ? -1 : a < b ? 1 : 0;
          }).map(function (file) {
            return React.createElement(FileModule, { key: file._id, id: file._id, file: file });
          });
        }

        var uploadScreen = "";
        if (this.state.uploading) {
          uploadScreen = React.createElement(
            "div",
            { className: "uploadScreen" },
            " Uploading..."
          );
        }

        return React.createElement(
          "div",
          { className: "files" },
          uploadScreen,
          React.createElement(
            "nav",
            { className: "navbar" },
            React.createElement(
              "div",
              { className: "history" },
              React.createElement(
                NavLink,
                { to: "/project-dashboard" },
                "Projects"
              ),
              React.createElement(FaAngleRight, { style: { fontSize: "25px", margin: "0 6px" } }),
              this.props.selected_project_name
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
            { className: "project-title" },
            this.props.selected_project_name
          ),
          React.createElement(
            "div",
            { className: "files-all" },
            React.createElement(
              "div",
              null,
              uploadForm
            ),
            fileModules
          )
        );
      },
      writable: true,
      configurable: true
    }
  });

  return ProjectPage;
})(Component);

var mapStateToProps = function (state) {
  return {
    selected_project: state.selected_project,
    username: state.username,
    selected_project_name: state.selected_project_name,
    files: state.files,
    profile_pic: state.profile_pic,
    upload_info: state.upload_info };
};
module.exports = connect(mapStateToProps)(withRouter(ProjectPage));
/* <input type="hidden" name="success_action_redirect" value={this.props.upload_info.fields.success_action_redirect} /> */ /* <input type="submit" name="submit" value="Upload" /> */ /* Add a new <br />file
                                                                                                                                                                                                 <div className="file-add-btn">
                                                                                                                                                                                                     <IoIosAddCircleOutline />
                                                                                                                                                                                      </div> */