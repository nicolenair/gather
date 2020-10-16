"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var ReactDOM = _interopRequire(require("react-dom"));

require("./ChatPage.css");

var ReceivedMsg = _interopRequire(require("./ReceivedMsg"));

var SentMsg = _interopRequire(require("./SentMsg"));

var MessageList = (function (Component) {
  function MessageList() {
    _classCallCheck(this, MessageList);

    if (Component != null) {
      Component.apply(this, arguments);
    }
  }

  _inherits(MessageList, Component);

  _prototypeProperties(MessageList, null, {
    componentWillUpdate: {
      value: function componentWillUpdate() {
        var node = ReactDOM.findDOMNode(this);
        this.shouldScrollToBottom = node.scrollTop + node.clientHeight + 100 >= node.scrollHeight;
      },
      writable: true,
      configurable: true
    },
    componentDidUpdate: {
      value: function componentDidUpdate() {
        if (this.shouldScrollToBottom) {
          var node = ReactDOM.findDOMNode(this);
          node.scrollTop = node.scrollHeight;
        }
      },
      writable: true,
      configurable: true
    },
    render: {
      value: function render() {
        return React.createElement(
          "div",
          { className: "msg-history" },
          this.props.messages.map(function (message, index) {
            if (message.senderId === "Alexander") {
              return React.createElement(SentMsg, { key: index, date: message.createdAt, text: message.text });
            } else {
              return React.createElement(ReceivedMsg, { key: index, date: message.createdAt, text: message.text, username: message.senderId });
            }
          })
        );
      },
      writable: true,
      configurable: true
    }
  });

  return MessageList;
})(Component);

module.exports = MessageList;