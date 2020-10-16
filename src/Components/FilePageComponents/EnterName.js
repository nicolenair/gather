import React, { Component } from 'react';
import { connect } from "react-redux";
import axios from 'axios';



class EnterName extends Component {
    constructor(props){
        super(props)
        this.state = {
            clientName: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        const data = JSON.stringify({
            clientName: this.state.clientName,
        });
        this.props.dispatch({ type: "CLIENT_NAME", clientName: this.state.clientName })
        sessionStorage.setItem('clientName', this.state.clientName);
        this.props.closeEnterName()
        // axios.post("https://mongo-proj-ic8xgr.turbo360-vertex.com/api/project-create?token="+sessionStorage.getItem('userToken'), data)
        // .then(data => {
        //     this.props.history.push(('/project/' + data.data.data._id))
        //     window.location.reload();
        // })
        // .catch(error => {
        //     console.log(error)
        // })

    }
    render() {
        return (
            <div className="popup-enterName">
                <div className="enterName">
                    <h2>Welcome to Gather</h2>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            What's your name?
                        <br />
                            <input type="text" name="clientName" value={this.state.clientName} onChange={this.handleChange} />
                        </label>
                        <input className="enterName-submit" type="submit" value="Submit" />

                    </form>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    username: state.username
})
export default connect(mapStateToProps)(EnterName);
