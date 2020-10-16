import React, {Component} from 'react';

import { FaFile, FaObjectGroup, FaHighlighter } from 'react-icons/fa';


  
class MessageHeading extends Component{
    render(){
        return (
                <div className="msg-heading">
                    <div className="msg-heading-room">
                        {this.props.roomName}
                    </div>
                    <div className="msg-heading-btn">
                        <div className="btn">
                            <FaFile />
                        </div>
                        <div className="btn">
                            <FaObjectGroup />
                        </div>
                        <div className="btn">
                            <FaHighlighter />
                        </div>
                    </div>
                </div>
        );
        }
}

export default MessageHeading;