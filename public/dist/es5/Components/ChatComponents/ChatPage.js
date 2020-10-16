"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _toConsumableArray = function (arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
require("./ChatPage.css");

var ConvoList = _interopRequire(require("./ConvoList"));

var MessageList = _interopRequire(require("./MessageList"));

var InputMsg = _interopRequire(require("./InputMsg"));

var Search = _interopRequire(require("./Search"));

var MessageHeading = _interopRequire(require("./MessageHeading"));

var Chatkit = _interopRequire(require("../../../node_modules/@pusher/chatkit-client"));

var _APIconfig = require("./APIconfig");

var tokenUrl = _APIconfig.tokenUrl;
var instanceLocator = _APIconfig.instanceLocator;
var ChatPage = (function (Component) {
    function ChatPage() {
        _classCallCheck(this, ChatPage);

        _get(Object.getPrototypeOf(ChatPage.prototype), "constructor", this).call(this);
        this.state = {
            roomId: null,
            messages: [],
            joinableRooms: [],
            joinedRooms: [],
            roomName: null
        };
        this.sendMessage = this.sendMessage.bind(this);
        this.subscribeToRoom = this.subscribeToRoom.bind(this);
        this.getRooms = this.getRooms.bind(this);
    }

    _inherits(ChatPage, Component);

    _prototypeProperties(ChatPage, null, {
        componentDidMount: {
            value: function componentDidMount() {
                var _this = this;
                var chatManager = new Chatkit.ChatManager({
                    instanceLocator: instanceLocator,
                    userId: "Stranger",
                    tokenProvider: new Chatkit.TokenProvider({
                        url: tokenUrl
                    })
                });
                chatManager.connect().then(function (currentUser) {
                    _this.currentUser = currentUser;
                    _this.getRooms();
                    /** */
                    _this.currentUser.subscribeToRoom({
                        roomId: "19446702" }).then(function () {
                        _this.subscribeToRoom([].concat(_toConsumableArray(_this.state.joinableRooms), _toConsumableArray(_this.state.joinedRooms)).sort(function (a, b) {
                            return new Date(b.lastMessageAt).getTime() - new Date(a.lastMessageAt).getTime();
                        })[0].id);
                    });
                })["catch"](function (err) {
                    return console.log("error on connecting: ", err);
                });
            },
            writable: true,
            configurable: true
        },
        getRooms: {
            value: function getRooms() {
                var _this = this;
                this.currentUser.getJoinableRooms().then(function (joinableRooms) {
                    _this.setState({
                        joinableRooms: joinableRooms,
                        joinedRooms: _this.currentUser.rooms
                    });
                })["catch"](function (err) {
                    return console.log("error on joinableRooms: ", err);
                });
            },
            writable: true,
            configurable: true
        },
        subscribeToRoom: {
            value: function subscribeToRoom(roomId) {
                var _this = this;
                this.setState({ messages: [] });
                this.currentUser.subscribeToRoom({
                    roomId: roomId,
                    hooks: {
                        onMessage: function (message) {
                            _this.setState({
                                messages: [].concat(_toConsumableArray(_this.state.messages), [message])
                            });
                        }
                    }
                }).then(function (room) {
                    _this.setState({
                        roomId: room.id,
                        roomName: room.name
                    });
                    _this.getRooms();
                })["catch"](function (err) {
                    return console.log("error on subscribing to room: ", err);
                });
            },
            writable: true,
            configurable: true
        },
        sendMessage: {
            value: function sendMessage(text) {
                this.currentUser.sendMessage({
                    text: text,
                    roomId: this.state.roomId
                });
            },
            writable: true,
            configurable: true
        },
        render: {
            value: function render() {
                return React.createElement(
                    "div",
                    { className: "chat" },
                    React.createElement(
                        "div",
                        { className: "inbox" },
                        React.createElement(
                            "div",
                            { className: "inbox-heading" },
                            React.createElement(
                                "div",
                                { className: "messages-heading" },
                                "Messages"
                            ),
                            React.createElement(Search, null)
                        ),
                        React.createElement(ConvoList, {
                            roomId: this.state.roomId,
                            subscribeToRoom: this.subscribeToRoom,
                            rooms: [].concat(_toConsumableArray(this.state.joinableRooms), _toConsumableArray(this.state.joinedRooms)) })
                    ),
                    React.createElement(
                        "div",
                        { className: "msg" },
                        React.createElement(MessageHeading, { roomName: this.state.roomName }),
                        React.createElement(MessageList, { messages: this.state.messages }),
                        React.createElement(InputMsg, { sendMessage: this.sendMessage })
                    )
                );
            },
            writable: true,
            configurable: true
        }
    });

    return ChatPage;
})(Component);

module.exports = ChatPage;