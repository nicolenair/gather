import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import FilePage from "./Components/FilePageComponents/FilePage"

import {BrowserRouter} from "react-router-dom";

import {createStore} from "redux";
import {Provider} from "react-redux";

const initialState = {
    username: "",
    profile_pic: "",
    data: {},
    projects: [],
    selected_project: "",
    selected_project_name: "",
    files: [],
    upload_info: {},
}
function reducer(state = initialState, action){
    switch(action.type){
        case "LOAD_PROJECTS":
            return{
                data: action.data,
                projects: action.data.projects,
                username: action.data.userName,
                profile_pic: action.data.profilepic
                }
        case "SELECT_PROJECT":
            return{
                ...state,
                selected_project: action.selected_project,
                selected_project_name: action.selected_project_name
            }
        case "SELECT_FILE":
            return{
                ...state,
                // selected_file: action.selected_file,
                selected_file_link: action.selected_file_link
            }
        case "LOAD_FILES":
            return{
                ...state,
                files: action.files,
                upload_info: action.upload_info
            }
        case "CLIENT_NAME":
            return{
                ...state,
                username: action.clientName
            }
        default:
            return state
    }
}
const store = createStore(reducer);


ReactDOM.render(
    <Provider store={store}>
              <BrowserRouter>
    <App />
    </BrowserRouter>

    </Provider>, document.getElementById('root'));

