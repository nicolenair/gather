import React, {Component} from 'react';
import Convo from './Convo';


class ConvoList extends Component{

    render(){
        const orderedRooms = [...this.props.rooms].sort((a, b) => new Date(b.lastMessageAt).getTime() -  new Date(a.lastMessageAt).getTime())
        return (
            <div className="inbox-convo">
                {orderedRooms.map(room => {
                    const active =  this.props.roomId === room.id ? "active-convo" : "";
                    return(
                    <div onClick={() => {this.props.subscribeToRoom(room.id)}} key={room.id} className={"convo " + active}>
                        {/*<Convo onClick={() => {this.props.subscribeToRoom(room.id)}} 
                    key={room.id} name={room.name}/>*/}
                        <div className="convo-img"> 
                            <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> 
                        </div>
                        <div className="convo-desc">
                            <h5>{room.name} <span className="convo-date">Dec 25</span></h5>
                            <p>Test, which is a new approach to have the life that you want to have before 
                                you have the life to have...</p>
                        </div>
                    </div>
                    )
                })}
            </div>
                
        );
        }
}

export default ConvoList;
