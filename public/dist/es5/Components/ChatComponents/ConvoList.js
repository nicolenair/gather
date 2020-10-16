"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _toConsumableArray = function (arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var Convo = _interopRequire(require("./Convo"));

var ConvoList = (function (Component) {
    function ConvoList() {
        _classCallCheck(this, ConvoList);

        if (Component != null) {
            Component.apply(this, arguments);
        }
    }

    _inherits(ConvoList, Component);

    _prototypeProperties(ConvoList, null, {
        render: {
            value: function render() {
                var _this = this;
                var orderedRooms = [].concat(_toConsumableArray(this.props.rooms)).sort(function (a, b) {
                    return new Date(b.lastMessageAt).getTime() - new Date(a.lastMessageAt).getTime();
                });
                return React.createElement(
                    "div",
                    { className: "inbox-convo" },
                    orderedRooms.map(function (room) {
                        var active = _this.props.roomId === room.id ? "active-convo" : "";
                        return React.createElement(
                            "div",
                            { onClick: function () {
                                    _this.props.subscribeToRoom(room.id);
                                }, key: room.id, className: "convo " + active },
                            React.createElement(
                                "div",
                                { className: "convo-img" },
                                React.createElement("img", { src: "https://ptetutorials.com/images/user-profile.png", alt: "sunil" })
                            ),
                            React.createElement(
                                "div",
                                { className: "convo-desc" },
                                React.createElement(
                                    "h5",
                                    null,
                                    room.name,
                                    " ",
                                    React.createElement(
                                        "span",
                                        { className: "convo-date" },
                                        "Dec 25"
                                    )
                                ),
                                React.createElement(
                                    "p",
                                    null,
                                    "Test, which is a new approach to have the life that you want to have before you have the life to have..."
                                )
                            )
                        );
                    })
                );
            },
            writable: true,
            configurable: true
        }
    });

    return ConvoList;
})(Component);

module.exports = ConvoList;
/*<Convo onClick={() => {this.props.subscribeToRoom(room.id)}} 
key={room.id} name={room.name}/>*/