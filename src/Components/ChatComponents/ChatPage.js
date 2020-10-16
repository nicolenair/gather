import React, {Component} from 'react';
import './ChatPage.css';
import ConvoList from './ConvoList';
import MessageList from './MessageList';
import InputMsg from './InputMsg';
import Search from './Search';
import MessageHeading from './MessageHeading';
import Chatkit from "../../../node_modules/@pusher/chatkit-client";
import { tokenUrl, instanceLocator } from './APIconfig'


class ChatPage extends Component{

    constructor(){
        super()
        this.state = {
            roomId: null,
            messages: [],
            joinableRooms: [],
            joinedRooms: [],
            roomName: null
        }
        this.sendMessage = this.sendMessage.bind(this)
        this.subscribeToRoom = this.subscribeToRoom.bind(this)
        this.getRooms = this.getRooms.bind(this)
    }
        
    componentDidMount() {
          const chatManager = new Chatkit.ChatManager({
              instanceLocator,
              userId: 'Stranger',
              tokenProvider: new Chatkit.TokenProvider({
                  url: tokenUrl
              })
          })
          chatManager.connect()
          .then(currentUser => {
            this.currentUser = currentUser
            this.getRooms()
            /** */
            this.currentUser.subscribeToRoom({
                roomId: "19446702",
            })
            .then(() => {
                this.subscribeToRoom([...this.state.joinableRooms, ...this.state.joinedRooms].sort((a, b) => new Date(b.lastMessageAt).getTime() -  new Date(a.lastMessageAt).getTime())[0].id)
            })
        })
          .catch(err => console.log('error on connecting: ', err))
    }

    getRooms() {
        this.currentUser.getJoinableRooms()
        .then(joinableRooms => {
            this.setState({
                joinableRooms,
                joinedRooms: this.currentUser.rooms
            })
        })
        .catch(err => console.log('error on joinableRooms: ', err))
    }

    subscribeToRoom(roomId){
        this.setState({ messages: [] })
        this.currentUser.subscribeToRoom({
            roomId: roomId,
            hooks: {
                onMessage: message => {
                    this.setState({
                        messages: [...this.state.messages, message]
                    })
                }
            }
        })
        .then(room => {
            this.setState({
                roomId:room.id,
                roomName:room.name
            })
            this.getRooms()
        })
        .catch(err => console.log('error on subscribing to room: ', err))
    }

    sendMessage(text) {
        this.currentUser.sendMessage({
            text,
            roomId: this.state.roomId
        })
    }

    render(){
        return (
            <div className="chat">
                <div className="inbox">
                    <div className="inbox-heading">
                        <div className="messages-heading">
                            Messages
                        </div>
                        <Search />
                    </div>
                    <ConvoList 
                    roomId={this.state.roomId}
                    subscribeToRoom={this.subscribeToRoom} 
                    rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]} />
                </div>

                <div className="msg">
                    <MessageHeading roomName={this.state.roomName}/>
                    <MessageList messages={this.state.messages}/>
                    <InputMsg sendMessage={this.sendMessage}/>
                </div>
        </div>
        );
        }
}

export default ChatPage;
