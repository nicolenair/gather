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
require("./FilePage.css");

require("annotorious");

//  import "./annotorious"
require("./anno-vanilla-rest-plugin");

var IoIosAddCircleOutline = require("react-icons/io").IoIosAddCircleOutline;
var NavLink = require("react-router-dom").NavLink;
var EnterName = _interopRequire(require("./EnterName"));

var connect = require("react-redux").connect;
var axios = _interopRequire(require("axios"));

// import "./OpenLayers"


var FilePage = (function (Component) {
    function FilePage() {
        _classCallCheck(this, FilePage);

        _get(Object.getPrototypeOf(FilePage.prototype), "constructor", this).call(this);
        this.state = {
            annotations: [],
            fileURL: "",
            enterName: false,
            showShare: false
        };
        this.annoHandler = this.annoHandler.bind(this);
        this.createAnnotation = this.createAnnotation.bind(this);
        this.closeEnterName = this.closeEnterName.bind(this);

        this.showShare = this.showShare.bind(this);
        this.closeShare = this.closeShare.bind(this);

    }

    _inherits(FilePage, Component);

    _prototypeProperties(FilePage, null, {
        annoHandler: {
            value: function annoHandler(handler, fn) {
                window.anno.addHandler(handler, fn);
            },
            writable: true,
            configurable: true
        },
        createAnnotation: {
            value: function createAnnotation(annotation) {
                this.setState({
                    annotations: [].concat(_toConsumableArray(this.state.annotations), [annotation])
                });
            },
            writable: true,
            configurable: true
        },
        componentDidMount: {
            value: function componentDidMount() {
                var _this = this;
                axios.get("/api/file" + this.props.location.search + "&token=" + sessionStorage.getItem("userToken")).then(function (data) {
                    console.log(data.data.data);
                    if (data.data.data.client === "false" || sessionStorage.getItem("clientName") !== null) {
                        if (sessionStorage.getItem("clientName") !== null) {
                            _this.props.dispatch({ type: "CLIENT_NAME", clientName: sessionStorage.getItem("clientName") });
                        }
                    } else {
                        _this.setState({
                            enterName: true
                        });
                    }
                    _this.props.dispatch({ type: "SELECT_FILE", selected_file_link: data.data.data.fileURL });
                    _this.setState({
                        fileURL: data.data.data.fileURL
                    });

                    setTimeout((function () {
                        window.anno.makeAnnotatable(this.myImage);
                        this.annoHandler("onAnnotationCreated", this.createAnnotation);
                        window.anno.addPlugin("VanillaREST", {
                            prefix: "/api/",
                            urls: {
                                read: "/get-notes",
                                create: "/create-notes",
                                update: "/update-notes/:id",
                                destroy: "/delete-notes/:id" },
                            extraAnnotationData: { commenter: this.props.username }
                        });
                    }).bind(_this), 1000);
                })["catch"](function (err) {
                    console.log(err);
                });
            },
            writable: true,
            configurable: true
        },
        componentWillUnmount: {
            value: function componentWillUnmount() {
                window.anno.destroy();
            },
            writable: true,
            configurable: true
        },
        closeEnterName: {
            value: function closeEnterName() {
                this.setState({
                    enterName: false
                });
                console.log("s", this.props.username);
                this.componentDidMount();
                this.render();
            },
            writable: true,
            configurable: true
        },
        showShare: {
            value: function showShare(event) {
                var _this = this;
                event.preventDefault();

                this.setState({ showShare: true }, function () {
                    if (_this.shareInput) {
                        _this.shareInput.focus();
                        _this.shareInput.select();
                        document.execCommand("copy");
                    }
                    document.addEventListener("click", _this.closeShare);
                });

            },
            writable: true,
            configurable: true
        },
        closeShare: {
            value: function closeShare(event) {
                var _this = this;
                if (!this.sharePopup.contains(event.target)) {
                    this.setState({ showShare: false }, function () {
                        document.removeEventListener("click", _this.closeShare);
                    });
                }
            },
            writable: true,
            configurable: true
        },
        render: {
            value: function render() {
                var _this = this;
                console.log("Asd", this.props.location);
                return React.createElement(
                    React.Fragment,
                    null,
                    React.createElement(
                        NavLink,
                        { className: "title", to: "/home" },
                        "gather"
                    ),
                    React.createElement(
                        "div",
                        { className: "feedback" },
                        this.state.enterName ? React.createElement(EnterName, { closeEnterName: this.closeEnterName }) : null,
                        React.createElement(
                            "div",
                            { className: "share", onClick: this.showShare },
                            "SHARE",
                            this.state.showShare ? React.createElement(
                                React.Fragment,
                                null,
                                React.createElement(
                                    "div",
                                    { className: "share-popup", ref: function (element) {
                                            _this.sharePopup = element;
                                        } },
                                    React.createElement("input", { ref: function (element) {
                                            _this.shareInput = element;
                                        }, value: "www.gatherapp.io/file" + this.props.location.search, className: "share-link" })
                                ),
                                React.createElement(
                                    "div",
                                    { className: "share-confirmation" },
                                    "Copied to clipboard!"
                                )
                            ) : null
                        ),
                        React.createElement(
                            "div",
                            { className: "file-container" },
                            React.createElement(
                                "div",
                                { className: "file-img-container" },
                                React.createElement("img", {
                                    ref: function (r) {
                                        return _this.myImage = r;
                                    },
                                    className: "file-img",
                                    src: this.state.fileURL,
                                    alt: ""
                                })
                            )
                        )
                    )
                );
            },
            writable: true,
            configurable: true
        }
    });

    return FilePage;
})(Component);

var mapStateToProps = function (state) {
    return {
        selected_file_link: state.selected_file_link,
        username: state.username
    };
};
module.exports = connect(mapStateToProps)(FilePage);
// window.anno.makeAnnotatable(this.myImage);
// this.annoHandler("onAnnotationCreated", this.createAnnotation);

// window.anno.addPlugin('VanillaREST', {
//     'prefix': 'https://mongo-proj-ic8xgr.turbo360-vertex.com/api/',
//     'urls': {
//         read: '/get-notes',
//         create: '/create-notes',
//         update: '/update-notes/:id',
//         destroy: '/delete-notes/:id',
//     },
//     extraAnnotationData: { commenter: this.props.username }
// });

/* <span>{"gatherapp.io/file"+this.props.location.search}</span> */