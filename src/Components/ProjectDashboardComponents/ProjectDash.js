import React, { Component } from "react";
import { connect } from "react-redux";
import "./ProjectDash.css";

import ProjectModule from "../Module/ProjectModule";

import { IoIosAddCircleOutline } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import CreateProject from "./CreateProject";

import { GoogleLogout } from "react-google-login";

class ProjectDash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addProject: false,
      filter: "All",
      showProfileMenu: false,
    };
    this.addProject = this.addProject.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleClickAll = this.handleClickAll.bind(this);
    this.handleClickCurrent = this.handleClickCurrent.bind(this);
    this.handleClickCompleted = this.handleClickCompleted.bind(this);

    this.showProfileMenu = this.showProfileMenu.bind(this);
    this.closeProfileMenu = this.closeProfileMenu.bind(this);
  }
  handleClickAll() {
    this.setState({
      filter: "All",
    });
  }
  handleClickCurrent() {
    this.setState({
      filter: "Current",
    });
  }
  handleClickCompleted() {
    this.setState({
      filter: "Completed",
    });
  }
  addProject() {
    this.setState({
      addProject: !this.state.addProject,
    });
  }
  componentDidMount() {
    this.props.dispatch({ type: "SELECT_PROJECT", selected_project: "" });
    // this.props.getData();
  }

  showProfileMenu(event) {
    event.preventDefault();

    this.setState({ showProfileMenu: true }, () => {
      document.addEventListener("click", this.closeProfileMenu);
    });
  }

  closeProfileMenu(event) {
    // if (!this.dropdownProfileMenu.contains(event.target)) {
    this.setState({ showProfileMenu: false }, () => {
      document.removeEventListener("click", this.closeProfileMenu);
    });
    //}
  }

  logout() {
    sessionStorage.clear();
    window.location.reload();
  }

  render() {
    const projectModules = this.props.projects
      .sort((a, b) => {
        a = new Date(a.lastEdited);
        b = new Date(b.lastEdited);
        return a > b ? -1 : a < b ? 1 : 0;
      })
      .map((project) => (
        <ProjectModule key={project._id} id={project._id} project={project} />
      ));

    return (
      <div className="projects">
        <nav className="navbar">
          <div>
            <a
              className="navbar-filter underline-from-center"
              onClick={this.handleClickAll}
            >
              All
            </a>
            <a
              className="navbar-filter underline-from-center"
              onClick={this.handleClickCurrent}
            >
              Current
            </a>
            <a
              className="navbar-filter underline-from-center"
              onClick={this.handleClickCompleted}
            >
              Completed
            </a>
          </div>
          <div className="navbar-sort">
            Sort by <strong>due date</strong> <FaAngleDown />
          </div>
          <div className="profile" onClick={this.showProfileMenu}>
            {this.props.username}
            <img className="profile-pic" src={this.props.profile_pic} alt="" />
            {this.state.showProfileMenu ? (
              <div
                className="profile-menu"
                ref={(element) => {
                  this.dropdownProfileMenu = element;
                }}
              >
                <button> Profile </button>
                <GoogleLogout
                  clientId="250039694980-rj02nk2mdr9iru0ohgfin3dsm78plt1o.apps.googleusercontent.com"
                  render={(renderProps) => (
                    <button
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      Log Out
                    </button>
                  )}
                  buttonText="Logout"
                  onLogoutSuccess={this.logout}
                ></GoogleLogout>
              </div>
            ) : null}
          </div>
        </nav>

        <div className="project-all" href="/add-project">
          <div onClick={this.addProject} className="project-add">
            Add a new project
            <div className="project-add-btn">
              <IoIosAddCircleOutline />
            </div>
          </div>
          {projectModules}
        </div>
        {this.state.addProject ? (
          <CreateProject closeAddProject={this.addProject} />
        ) : null}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  username: state.username,
  projects: state.projects,
  profile_pic: state.profile_pic,
});
export default connect(mapStateToProps)(ProjectDash);
