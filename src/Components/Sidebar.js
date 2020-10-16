import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import SidebarProject from "./SidebarProject"

import { FaSearch } from 'react-icons/fa';



class Sidebar extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        var projectHeadingActive = ""
        if (this.props.selected_project === "" | typeof this.props.selected_project === 'undefined') {
          projectHeadingActive = "heading-active"
        }
        return (
            <div className="sidebar">
                <NavLink className="sidebar-title" to="/project-dashboard">
                    <span>
                        gather
              </span>
                </NavLink>
                <div className="sidebar-search">
                    <button type="submit" className="sidebar-search-btn">
                        <FaSearch />
                    </button>
                    <input type="text" className="sidebar-search-input" placeholder="Search for a project or file" />
                </div>

                <div className={"sidebar-nav-heading " + projectHeadingActive}>
                    <NavLink className="sidebar-nav-heading-title" to="/project-dashboard">
                        <span >
                            Projects
                  </span>
                    </NavLink>
                    {/* <button className="sidebar-nav-heading-btn">
              <IoIosAddCircleOutline />
            </button> */}
                </div>

                <div className="sidebar-nav">
                    {this.props.projects.sort((a, b) => {
                        a = new Date(a.lastEdited);
                        b = new Date(b.lastEdited);
                        return a > b ? -1 : a < b ? 1 : 0;
                    }).map((project) => {
                        if (this.props.selected_project === project._id) {
                            return <SidebarProject key={project._id} id={project._id} name={project.projectName} active="true" />
                        }
                        else {
                            return <SidebarProject key={project._id} id={project._id} name={project.projectName} active="false" />
                        }
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    selected_project: state.selected_project,
    projects: state.projects
})
export default connect(mapStateToProps)(Sidebar);
