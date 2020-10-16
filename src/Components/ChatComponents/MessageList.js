import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import './ChatPage.css';
import ReceivedMsg from './ReceivedMsg';
import SentMsg from './SentMsg';


class MessageList extends Component{

  componentWillUpdate(){
    const node = ReactDOM.findDOMNode(this)
    this.shouldScrollToBottom = node.scrollTop + node.clientHeight + 100 >= node.scrollHeight
  }

  componentDidUpdate(){
      if (this.shouldScrollToBottom) {
          const node = ReactDOM.findDOMNode(this)
          node.scrollTop = node.scrollHeight
      }
  }

    render(){
        return (
              <div className="msg-history">
                {this.props.messages.map((message, index) =>{
                  if(message.senderId === "Alexander"){
                    return(
                          <SentMsg key={index} date={message.createdAt} text={message.text}/>
                    )
                  }
                  else{
                    return(
                          <ReceivedMsg key={index} date={message.createdAt} text={message.text} username={message.senderId}/>
                    )
                  }
    
                } )}
              </div>

                
        );
        }
}

export default MessageList;
