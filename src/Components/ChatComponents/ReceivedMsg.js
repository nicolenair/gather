import React, {Component} from 'react';
  
class RecievedMsg extends Component{
    render(){

        const date = new Date(JSON.parse(JSON.stringify(this.props.date)));

        return (
                <div className="msg-in">
                    <div className="msg-in-img"> 
                        <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> 
                    </div>
                    <div className="msg-in-content">
                        <div className="msg-in-content-box">
                          <p>{this.props.text} <span className="time_date"> {date.toLocaleTimeString().substr(0,5) + " " +  date.toLocaleTimeString().substr(8,9)}</span></p>
                          <span className="time_date">{date.toDateString().substr(4,6)}</span> 
                        </div>
                    </div>
                </div>
        );
        }
}

export default RecievedMsg;
