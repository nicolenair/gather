import React, {Component} from 'react';
import { FaPaperclip } from 'react-icons/fa';


class InputMsg extends Component{

    constructor() {
        super()
        this.state = {
            message: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange(e) {
        this.setState({
            message: e.target.value
        })
    }
    
    handleSubmit(e) {
        e.preventDefault()
        this.props.sendMessage(this.state.message)
        this.setState({
            message: ''
        })
    }
    
    render(){
        return (
            <div className="msg-new">
                    <form onSubmit={this.handleSubmit}>
                        <input onChange={this.handleChange}
                    value={this.state.message} type="text" className="msg-new-input" placeholder="type a message..." />
                     <button className="msg-new-btn" type="button">
                        <FaPaperclip/>
                    </button>
                    </form>
            </div>

        );
        }
}

export default InputMsg;