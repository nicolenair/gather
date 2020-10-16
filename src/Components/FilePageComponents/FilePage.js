import React, { Component } from 'react';
import './FilePage.css';

import "annotorious"
//  import "./annotorious"
import "./anno-vanilla-rest-plugin"
import { IoIosAddCircleOutline } from "react-icons/io";

import { NavLink } from "react-router-dom";


import EnterName from "./EnterName"

import { connect } from "react-redux";
import axios from 'axios';
// import "./OpenLayers"


class FilePage extends Component {
    constructor() {
        super()
        this.state = {
            annotations: [],
            fileURL: "",
            enterName: false,
            showShare: false
        };
        this.annoHandler = this.annoHandler.bind(this)
        this.createAnnotation = this.createAnnotation.bind(this)
        this.closeEnterName = this.closeEnterName.bind(this)

        this.showShare = this.showShare.bind(this)
        this.closeShare = this.closeShare.bind(this)


    }
    annoHandler(handler, fn) {
        window.anno.addHandler(handler, fn);
    };
    createAnnotation(annotation) {
        this.setState({
            annotations: [...this.state.annotations, annotation]
        });
    };
    componentDidMount() {
        axios.get(
            '/api/file' + this.props.location.search + "&token=" + sessionStorage.getItem("userToken")
        )
            .then(data => {
                console.log(data.data.data)
                if (data.data.data.client === "false" || sessionStorage.getItem('clientName') !== null) {
                    if (sessionStorage.getItem('clientName') !== null) {
                        this.props.dispatch({ type: "CLIENT_NAME", clientName: sessionStorage.getItem('clientName') })
                    }
                } else {
                    this.setState({
                        enterName: true
                    })
                }
                this.props.dispatch({ type: "SELECT_FILE", selected_file_link: data.data.data.fileURL })
                this.setState({
                    fileURL: data.data.data.fileURL
                })

                setTimeout(function () {

                    window.anno.makeAnnotatable(this.myImage);
                    this.annoHandler("onAnnotationCreated", this.createAnnotation);
                    window.anno.addPlugin('VanillaREST', {
                        'prefix': '/api/',
                        'urls': {
                            read: '/get-notes',
                            create: '/create-notes',
                            update: '/update-notes/:id',
                            destroy: '/delete-notes/:id',
                        },
                        extraAnnotationData: { commenter: this.props.username }
                    })
                }.bind(this), 1000);
            })
            .catch(err => {
                console.log(err)
            })

        // window.anno.makeAnnotatable(this.myImage);
        // this.annoHandler("onAnnotationCreated", this.createAnnotation);

        // window.anno.addPlugin('VanillaREST', {
        //     'prefix': 'https://mongo-proj-ic8xgr.turbo360-vertex.com/api/',
        //     'urls': {
        //         read: '/get-notes',
        //         create: '/create-notes',
        //         update: '/update-notes/:id',
        //         destroy: '/delete-notes/:id',
        //     },
        //     extraAnnotationData: { commenter: this.props.username }
        // });

    }
    componentWillUnmount() {
        window.anno.destroy();
    }
    closeEnterName() {
        this.setState({
            enterName: false
        });
        console.log("s", this.props.username)
        this.componentDidMount()
        this.render()
    }

    showShare(event) {
        event.preventDefault();

        this.setState({ showShare: true }, () => {
            if(this.shareInput){
                this.shareInput.focus()
                this.shareInput.select()
                document.execCommand('copy');
                }
            document.addEventListener('click', this.closeShare);
        });

 
    }

    closeShare(event) {
        if (!this.sharePopup.contains(event.target)) {
        this.setState({ showShare: false }, () => {
            document.removeEventListener('click', this.closeShare);
        });
        }
    }

    render() {
        console.log("Asd",this.props.location)
        return (
            <React.Fragment>
            <NavLink className="title" to="/home">
                    gather
                </NavLink>
            <div className="feedback">
                {this.state.enterName ? <EnterName closeEnterName={this.closeEnterName} /> : null}
                
                <div className="share" onClick={this.showShare}>
                    SHARE
                    {this.state.showShare ? (
                        <React.Fragment>
                        <div className="share-popup" ref={(element) => { this.sharePopup = element }}>
                            <input ref={(element) => {this.shareInput = element}} value={"www.gatherapp.io/file"+this.props.location.search} className="share-link">
                            </input>
                            {/* <span>{"gatherapp.io/file"+this.props.location.search}</span> */}


                        </div>
                        <div className="share-confirmation">
                        Copied to clipboard!
                    </div>
                    </React.Fragment>
                    )
                        : (
                            null
                        )
                    }
                </div>
                <div className="file-container">
                <div className="file-img-container">
                <img
                    ref={r => (this.myImage = r)}
                    className="file-img"
                    src={this.state.fileURL}
                    alt=""
                />
                </div>
                </div>
            </div>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => ({
    selected_file_link: state.selected_file_link,
    username: state.username
})
export default connect(mapStateToProps)(FilePage);