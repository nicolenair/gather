import React, {Component} from 'react';
import './Convo.css';


class Convo extends Component{

    render(){
        return (
                    <div className="convo">
                        <div className="convo-img"> 
                            <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> 
                        </div>
                        <div className="convo-desc">
                            <h5>{this.props.name} <span className="convo-date">Dec 25</span></h5>
                            <p>Test, wasdfasdfasdfasdfasdf</p>
                        </div>
                    </div>
                    
        );
        }
}

export default Convo;
