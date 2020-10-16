import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import axios from "axios";

import ProjectDash from "./Components/ProjectDashboardComponents/ProjectDash";
import Sidebar from "./Components/Sidebar";
import ProjectPage from "./Components/ProjectPageComponents/ProjectPage";
import FilePage from "./Components/FilePageComponents/FilePage";
import LogIn from "./LogIn/LogIn";

import { withRouter } from "react-router";
import {
  Route,
  NavLink,
  BrowserRouter,
  Redirect,
  Switch,
} from "react-router-dom";

import { FaSearch } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";

class App extends Component {
  constructor() {
    super();
    this.state = {
      authorized: false,
    };
    this.login = this.login.bind(this);
  }

  login() {
    this.componentDidMount();
    this.props.history.push("/project-dashboard");
  }

  componentDidMount() {
    axios
      .get("/api/dashboard?token=" + sessionStorage.getItem("userToken"))
      .then((data) => {
        if (!data.data.confirmation) {
          this.props.dispatch({ type: "LOAD_PROJECTS", data: data.data.data });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  checkToken() {
    axios
      .get("/api/validate-token?token=" + sessionStorage.getItem("userToken"))
      .then((data) => {
        if (!(data.data.confirmation == "success")) {
          sessionStorage.clear();
          window.location.reload();
        }
      });
  }
  render() {
    // var link = <Switch><Route exact path="/login" component={() => { return <LogIn login={this.login}/>}}/><Route exact path="/home" render={() => {window.location.href="Home.mustache"}}/><Route path="/" component={() => { return <Redirect to="/home"/>}}/></Switch>
    var link = (
      <Switch>
        <Route
          exact
          path="/login"
          component={() => {
            return <LogIn login={this.login} />;
          }}
        />
        {/* <Route exact path="/home" render={() => {window.location.href="Home.mustache"}}/> */}
        <Route
          path="/"
          component={() => {
            return (
              <React.Fragment>
                <Redirect to="/home" />
                {window.location.reload()}
              </React.Fragment>
            );
          }}
        />
      </Switch>
    );

    // <Switch>
    // {/* <Route exact path="/login" component={() => { return <LogIn login={this.login}/>}}/> */}
    // {/* <Route exact path="/home" render={() => {window.location.href="Home.html"}}/> */}
    // <Route exact path="/home" component={()=>{ return (<Home login={this.login}/>)}}/>
    // <Route path="/" component={() => { return <Redirect to="/home"/>}}/>
    // </Switch>

    // <React.Fragment><Redirect to='/login' /><LogIn login={this.login}/> </React.Fragment>

    if (sessionStorage.getItem("userToken") !== null) {
      {
        this.checkToken();
      }
      link = (
        <Route
          path="/"
          component={() => {
            return (
              <React.Fragment>
                <Sidebar />
                <div className="main">
                  <Switch>
                    <Route
                      exact
                      path="/project-dashboard"
                      component={() => (
                        <ProjectDash getData={this.componentDidMount} />
                      )}
                    />
                    {/* <Route path="/project/:project_id" component={ProjectPage} /> */}
                    {this.props.projects.map((project) => (
                      <Route
                        path={"/project/" + project._id}
                        key={project._id}
                        component={() => {
                          return (
                            <ProjectPage
                              id={project._id}
                              name={project.projectName}
                            />
                          );
                        }}
                      />
                    ))}
                    <Route path="/file" component={FilePage} />
                    {/* <Route path="/" component={()=> <Redirect to ="/project-dashboard"/>}/> */}
                  </Switch>
                </div>
              </React.Fragment>
            );
          }}
        />
      );
    }

    return (
      // <BrowserRouter>
      <Switch>
        <Route exact path="/file" component={FilePage} />
        {link}
      </Switch>

      // </BrowserRouter>
    );
  }
}
const mapStateToProps = (state) => ({
  data: state.data,
  projects: state.projects,
  selected_project: state.selected_project,
});

export default connect(mapStateToProps)(withRouter(App));
