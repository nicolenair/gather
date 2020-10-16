import React, {Component} from 'react';

class SentMsg extends Component{

    render(){

      const date = new Date(JSON.parse(JSON.stringify(this.props.date)));

        return (
                <div className="msg-out">
                    <div className="msg-out-content">
                      <p>{this.props.text} <span className="time_date">{date.toLocaleTimeString()}</span> </p>
                      <span className="time_date">{date.toDateString().substr(4,6)}</span> 
                    </div>
                    <div className="msg-out-img"> 
                      <img src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png" alt="sunil"/> 
                  </div>
                </div>
        );
        }
}

export default SentMsg;
