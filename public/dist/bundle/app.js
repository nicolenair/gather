/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([41,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(76);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(14)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(85);

__webpack_require__(87);

__webpack_require__(88);

var _io = __webpack_require__(18);

var _reactRouterDom = __webpack_require__(12);

var _EnterName = __webpack_require__(90);

var _EnterName2 = _interopRequireDefault(_EnterName);

var _reactRedux = __webpack_require__(9);

var _axios = __webpack_require__(16);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//  import "./annotorious"


// import "./OpenLayers"


var FilePage = function (_Component) {
    _inherits(FilePage, _Component);

    function FilePage() {
        _classCallCheck(this, FilePage);

        var _this = _possibleConstructorReturn(this, (FilePage.__proto__ || Object.getPrototypeOf(FilePage)).call(this));

        _this.state = {
            annotations: [],
            fileURL: "",
            enterName: false,
            showShare: false
        };
        _this.annoHandler = _this.annoHandler.bind(_this);
        _this.createAnnotation = _this.createAnnotation.bind(_this);
        _this.closeEnterName = _this.closeEnterName.bind(_this);

        _this.showShare = _this.showShare.bind(_this);
        _this.closeShare = _this.closeShare.bind(_this);

        return _this;
    }

    _createClass(FilePage, [{
        key: 'annoHandler',
        value: function annoHandler(handler, fn) {
            window.anno.addHandler(handler, fn);
        }
    }, {
        key: 'createAnnotation',
        value: function createAnnotation(annotation) {
            this.setState({
                annotations: [].concat(_toConsumableArray(this.state.annotations), [annotation])
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            _axios2.default.get('/api/file' + this.props.location.search + "&token=" + sessionStorage.getItem("userToken")).then(function (data) {
                console.log(data.data.data);
                if (data.data.data.client === "false" || sessionStorage.getItem('clientName') !== null) {
                    if (sessionStorage.getItem('clientName') !== null) {
                        _this2.props.dispatch({ type: "CLIENT_NAME", clientName: sessionStorage.getItem('clientName') });
                    }
                } else {
                    _this2.setState({
                        enterName: true
                    });
                }
                _this2.props.dispatch({ type: "SELECT_FILE", selected_file_link: data.data.data.fileURL });
                _this2.setState({
                    fileURL: data.data.data.fileURL
                });

                setTimeout(function () {

                    window.anno.makeAnnotatable(this.myImage);
                    this.annoHandler("onAnnotationCreated", this.createAnnotation);
                    window.anno.addPlugin('VanillaREST', {
                        'prefix': '/api/',
                        'urls': {
                            read: '/get-notes',
                            create: '/create-notes',
                            update: '/update-notes/:id',
                            destroy: '/delete-notes/:id'
                        },
                        extraAnnotationData: { commenter: this.props.username }
                    });
                }.bind(_this2), 1000);
            }).catch(function (err) {
                console.log(err);
            });

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
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            window.anno.destroy();
        }
    }, {
        key: 'closeEnterName',
        value: function closeEnterName() {
            this.setState({
                enterName: false
            });
            console.log("s", this.props.username);
            this.componentDidMount();
            this.render();
        }
    }, {
        key: 'showShare',
        value: function showShare(event) {
            var _this3 = this;

            event.preventDefault();

            this.setState({ showShare: true }, function () {
                if (_this3.shareInput) {
                    _this3.shareInput.focus();
                    _this3.shareInput.select();
                    document.execCommand('copy');
                }
                document.addEventListener('click', _this3.closeShare);
            });
        }
    }, {
        key: 'closeShare',
        value: function closeShare(event) {
            var _this4 = this;

            if (!this.sharePopup.contains(event.target)) {
                this.setState({ showShare: false }, function () {
                    document.removeEventListener('click', _this4.closeShare);
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            console.log("Asd", this.props.location);
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(
                    _reactRouterDom.NavLink,
                    { className: 'title', to: '/home' },
                    'gather'
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'feedback' },
                    this.state.enterName ? _react2.default.createElement(_EnterName2.default, { closeEnterName: this.closeEnterName }) : null,
                    _react2.default.createElement(
                        'div',
                        { className: 'share', onClick: this.showShare },
                        'SHARE',
                        this.state.showShare ? _react2.default.createElement(
                            _react2.default.Fragment,
                            null,
                            _react2.default.createElement(
                                'div',
                                { className: 'share-popup', ref: function ref(element) {
                                        _this5.sharePopup = element;
                                    } },
                                _react2.default.createElement('input', { ref: function ref(element) {
                                        _this5.shareInput = element;
                                    }, value: "www.gatherapp.io/file" + this.props.location.search, className: 'share-link' })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'share-confirmation' },
                                'Copied to clipboard!'
                            )
                        ) : null
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'file-container' },
                        _react2.default.createElement(
                            'div',
                            { className: 'file-img-container' },
                            _react2.default.createElement('img', {
                                ref: function ref(r) {
                                    return _this5.myImage = r;
                                },
                                className: 'file-img',
                                src: this.state.fileURL,
                                alt: ''
                            })
                        )
                    )
                )
            );
        }
    }]);

    return FilePage;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        selected_file_link: state.selected_file_link,
        username: state.username
    };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps)(FilePage);

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(21);

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(46);

var _App = __webpack_require__(48);

var _App2 = _interopRequireDefault(_App);

var _FilePage = __webpack_require__(38);

var _FilePage2 = _interopRequireDefault(_FilePage);

var _reactRouterDom = __webpack_require__(12);

var _redux = __webpack_require__(23);

var _reactRedux = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
    username: "",
    profile_pic: "",
    data: {},
    projects: [],
    selected_project: "",
    selected_project_name: "",
    files: [],
    upload_info: {}
};
function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case "LOAD_PROJECTS":
            return {
                data: action.data,
                projects: action.data.projects,
                username: action.data.userName,
                profile_pic: action.data.profilepic
            };
        case "SELECT_PROJECT":
            return _extends({}, state, {
                selected_project: action.selected_project,
                selected_project_name: action.selected_project_name
            });
        case "SELECT_FILE":
            return _extends({}, state, {
                // selected_file: action.selected_file,
                selected_file_link: action.selected_file_link
            });
        case "LOAD_FILES":
            return _extends({}, state, {
                files: action.files,
                upload_info: action.upload_info
            });
        case "CLIENT_NAME":
            return _extends({}, state, {
                username: action.clientName
            });
        default:
            return state;
    }
}
var store = (0, _redux.createStore)(reducer);

_reactDom2.default.render(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(_App2.default, null)
    )
), document.getElementById('root'));

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(47);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(14)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}\n", ""]);


/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(9);

__webpack_require__(53);

var _axios = __webpack_require__(16);

var _axios2 = _interopRequireDefault(_axios);

var _ProjectDash = __webpack_require__(72);

var _ProjectDash2 = _interopRequireDefault(_ProjectDash);

var _Sidebar = __webpack_require__(79);

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _ProjectPage = __webpack_require__(81);

var _ProjectPage2 = _interopRequireDefault(_ProjectPage);

var _FilePage = __webpack_require__(38);

var _FilePage2 = _interopRequireDefault(_FilePage);

var _LogIn = __webpack_require__(91);

var _LogIn2 = _interopRequireDefault(_LogIn);

var _reactRouter = __webpack_require__(10);

var _reactRouterDom = __webpack_require__(12);

var _fa = __webpack_require__(15);

var _io = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      authorized: false
    };
    _this.login = _this.login.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: "login",
    value: function login() {
      this.componentDidMount();
      this.props.history.push("/project-dashboard");
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      _axios2.default.get("/api/dashboard?token=" + sessionStorage.getItem("userToken")).then(function (data) {
        if (!data.data.confirmation) {
          _this2.props.dispatch({ type: "LOAD_PROJECTS", data: data.data.data });
        }
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: "checkToken",
    value: function checkToken() {
      _axios2.default.get("/api/validate-token?token=" + sessionStorage.getItem("userToken")).then(function (data) {
        if (!(data.data.confirmation == "success")) {
          sessionStorage.clear();
          window.location.reload();
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      // var link = <Switch><Route exact path="/login" component={() => { return <LogIn login={this.login}/>}}/><Route exact path="/home" render={() => {window.location.href="Home.mustache"}}/><Route path="/" component={() => { return <Redirect to="/home"/>}}/></Switch>
      var link = _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        _react2.default.createElement(_reactRouterDom.Route, {
          exact: true,
          path: "/login",
          component: function component() {
            return _react2.default.createElement(_LogIn2.default, { login: _this3.login });
          }
        }),
        _react2.default.createElement(_reactRouterDom.Route, {
          path: "/",
          component: function component() {
            return _react2.default.createElement(
              _react2.default.Fragment,
              null,
              _react2.default.createElement(_reactRouterDom.Redirect, { to: "/home" }),
              window.location.reload()
            );
          }
        })
      );

      // <Switch>
      // {/* <Route exact path="/login" component={() => { return <LogIn login={this.login}/>}}/> */}
      // {/* <Route exact path="/home" render={() => {window.location.href="Home.html"}}/> */}
      // <Route exact path="/home" component={()=>{ return (<Home login={this.login}/>)}}/>
      // <Route path="/" component={() => { return <Redirect to="/home"/>}}/>
      // </Switch>

      // <React.Fragment><Redirect to='/login' /><LogIn login={this.login}/> </React.Fragment>

      if (sessionStorage.getItem("userToken") !== null) {
        {
          this.checkToken();
        }
        link = _react2.default.createElement(_reactRouterDom.Route, {
          path: "/",
          component: function component() {
            return _react2.default.createElement(
              _react2.default.Fragment,
              null,
              _react2.default.createElement(_Sidebar2.default, null),
              _react2.default.createElement(
                "div",
                { className: "main" },
                _react2.default.createElement(
                  _reactRouterDom.Switch,
                  null,
                  _react2.default.createElement(_reactRouterDom.Route, {
                    exact: true,
                    path: "/project-dashboard",
                    component: function component() {
                      return _react2.default.createElement(_ProjectDash2.default, { getData: _this3.componentDidMount });
                    }
                  }),
                  _this3.props.projects.map(function (project) {
                    return _react2.default.createElement(_reactRouterDom.Route, {
                      path: "/project/" + project._id,
                      key: project._id,
                      component: function component() {
                        return _react2.default.createElement(_ProjectPage2.default, {
                          id: project._id,
                          name: project.projectName
                        });
                      }
                    });
                  }),
                  _react2.default.createElement(_reactRouterDom.Route, { path: "/file", component: _FilePage2.default })
                )
              )
            );
          }
        });
      }

      return (
        // <BrowserRouter>
        _react2.default.createElement(
          _reactRouterDom.Switch,
          null,
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: "/file", component: _FilePage2.default }),
          link
        )

        // </BrowserRouter>

      );
    }
  }]);

  return App;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    data: state.data,
    projects: state.projects,
    selected_project: state.selected_project
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)((0, _reactRouter.withRouter)(App));

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(54);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(14)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// Module
exports.push([module.i, "body{\n  background: #F8F9FB;\n  font-family: Poppins;\n  color: black;\n  letter-spacing: 0.01em;\n}\na {\n  color:inherit;\n  text-decoration: none;\n }\n a:hover{\n  text-decoration: none;\n  color: initial\n }\n\n button, input{\n   background-color: inherit;\n   outline: none;\n   border: none;\n }\n button{\n  cursor: pointer;\n\n }\n button:active{\n  outline:none;\n }\n button:focus, input[type=\"button\"]:focus {\n  outline: none;\n}\n\n/* The sidebar menu */\n.sidebar {\n  height: 100vh; /* Full-height: remove this if you want \"auto\" height */\n  width: 250px; /* Set the width of the sidebar */\n  position: fixed; /* Fixed Sidebar (stay in place on scroll) */\n  z-index: 10; /* Stay on top */\n  top: 0; /* Stay at the top */\n  left: 0;\n  background-color: #FFFFFF; /* Black */\n  overflow-x: hidden; /* Disable horizontal scroll */\n  text-align: center;\n\n  float: left;\n  overflow: hidden;\n  display: flex; \n  flex-direction: column;  \n}\n\n.sidebar-title{\n  margin-top: 3.4vh;\n  font-weight: bold;\n  font-size: 35px;\n  display: inline-block;\n}\n\n.sidebar-search {\n  margin: 25px 0;\n}\n.sidebar-search-input {\n  width: 70%;\n  font-size: 10px;\n  padding: 9px 5px 7px 5px;\n  border-radius: 0 5px 5px 0;\n  border: 1px solid rgb(0, 0, 0);\n  border-left: none;\n  outline: none;\n}\n.sidebar-search-input:focus{\n  color: #777777;\n}\n.sidebar-search-input::-webkit-input-placeholder {\n  color: #AAA;\n  transform:translate3d(0,-0.5px,0)\n}\n.sidebar-search-btn{\n  border: 1px solid rgb(0, 0, 0);\n  border-right: none;\n  border-radius: 5px 0 0 5px;\n  color: #777777;\n  cursor: pointer;\n  font-size: 10px;\n  padding: 9px 5px 7px 15px;\n}\n.sidebar-search-btn:focus {\n  outline:0;\n}\n\n\n.sidebar-nav-heading{\n  display: flex;\n  width: 100%;\n  text-align: left;\n  justify-content: space-between;\n  vertical-align: middle;\n}\n\n.sidebar-nav-heading-title{\n  flex-grow: 9;\n  text-align: left;\n  font-size: 15px;\n  font-weight: bold;\n  background-color: transparent;\n  display: inline-block;\n  cursor: pointer;\n  padding: 15px 0 15px 30px;\n}\n.heading-active{\n  background-color: #F8F9FB;\n}\n\n.sidebar-nav-heading-btn{\n  font-size: 18px;\n  float:right;\n  background-color: transparent;\n  outline: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 5px 15px 5px 15px;\n  margin-right: 10px;\n}\n.sidebar-nav-heading-btn:focus {\n  outline:0;\n}\n\n.sidebar-nav{\n  flex-grow: 1;\n  overflow-y: scroll;\n}\n\n\n.sidebar-nav-project{\n  font-size: 13px;\n  font-weight: normal;\n  background-color:transparent;\n  padding: 15px 0 15px 20px;\n  cursor: pointer;\n  text-align: left;\n  display: flex;\n  border-left: 10px solid transparent;\n}\n.sidebar-nav-project span{\n  max-width:100%;\n  max-height: 100%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.sidebar-nav-project:hover{\n  background-color: rgba(248, 249, 251, 0.9)\n}\n\n.sidebar-nav .project-active{\n  border-left: 10px solid #FF9999;\n  background-color: #F8F9FB;\n}\n\n\n/* Style page content */\n.main {\n  margin-left: 250px; /* Same as the width of the sidebar */\n  padding-left: 0px;\n  padding-right: 0px;\n  height: 100vh;\n}\n\n\n/* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */\n@media screen and (max-height: 450px) {\n  .sidenav {padding-top: 15px;}\n  .sidenav a {font-size: 18px;}\n}\n\n", ""]);


/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(9);

__webpack_require__(73);

var _ProjectModule = __webpack_require__(75);

var _ProjectModule2 = _interopRequireDefault(_ProjectModule);

var _io = __webpack_require__(18);

var _fa = __webpack_require__(15);

var _CreateProject = __webpack_require__(78);

var _CreateProject2 = _interopRequireDefault(_CreateProject);

var _reactGoogleLogin = __webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProjectDash = function (_Component) {
  _inherits(ProjectDash, _Component);

  function ProjectDash(props) {
    _classCallCheck(this, ProjectDash);

    var _this = _possibleConstructorReturn(this, (ProjectDash.__proto__ || Object.getPrototypeOf(ProjectDash)).call(this, props));

    _this.state = {
      addProject: false,
      filter: "All",
      showProfileMenu: false
    };
    _this.addProject = _this.addProject.bind(_this);
    _this.componentDidMount = _this.componentDidMount.bind(_this);
    _this.handleClickAll = _this.handleClickAll.bind(_this);
    _this.handleClickCurrent = _this.handleClickCurrent.bind(_this);
    _this.handleClickCompleted = _this.handleClickCompleted.bind(_this);

    _this.showProfileMenu = _this.showProfileMenu.bind(_this);
    _this.closeProfileMenu = _this.closeProfileMenu.bind(_this);
    return _this;
  }

  _createClass(ProjectDash, [{
    key: "handleClickAll",
    value: function handleClickAll() {
      this.setState({
        filter: "All"
      });
    }
  }, {
    key: "handleClickCurrent",
    value: function handleClickCurrent() {
      this.setState({
        filter: "Current"
      });
    }
  }, {
    key: "handleClickCompleted",
    value: function handleClickCompleted() {
      this.setState({
        filter: "Completed"
      });
    }
  }, {
    key: "addProject",
    value: function addProject() {
      this.setState({
        addProject: !this.state.addProject
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.dispatch({ type: "SELECT_PROJECT", selected_project: "" });
      // this.props.getData();
    }
  }, {
    key: "showProfileMenu",
    value: function showProfileMenu(event) {
      var _this2 = this;

      event.preventDefault();

      this.setState({ showProfileMenu: true }, function () {
        document.addEventListener("click", _this2.closeProfileMenu);
      });
    }
  }, {
    key: "closeProfileMenu",
    value: function closeProfileMenu(event) {
      var _this3 = this;

      // if (!this.dropdownProfileMenu.contains(event.target)) {
      this.setState({ showProfileMenu: false }, function () {
        document.removeEventListener("click", _this3.closeProfileMenu);
      });
      //}
    }
  }, {
    key: "logout",
    value: function logout() {
      sessionStorage.clear();
      window.location.reload();
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var projectModules = this.props.projects.sort(function (a, b) {
        a = new Date(a.lastEdited);
        b = new Date(b.lastEdited);
        return a > b ? -1 : a < b ? 1 : 0;
      }).map(function (project) {
        return _react2.default.createElement(_ProjectModule2.default, { key: project._id, id: project._id, project: project });
      });

      return _react2.default.createElement(
        "div",
        { className: "projects" },
        _react2.default.createElement(
          "nav",
          { className: "navbar" },
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              "a",
              {
                className: "navbar-filter underline-from-center",
                onClick: this.handleClickAll
              },
              "All"
            ),
            _react2.default.createElement(
              "a",
              {
                className: "navbar-filter underline-from-center",
                onClick: this.handleClickCurrent
              },
              "Current"
            ),
            _react2.default.createElement(
              "a",
              {
                className: "navbar-filter underline-from-center",
                onClick: this.handleClickCompleted
              },
              "Completed"
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "navbar-sort" },
            "Sort by ",
            _react2.default.createElement(
              "strong",
              null,
              "due date"
            ),
            " ",
            _react2.default.createElement(_fa.FaAngleDown, null)
          ),
          _react2.default.createElement(
            "div",
            { className: "profile", onClick: this.showProfileMenu },
            this.props.username,
            _react2.default.createElement("img", { className: "profile-pic", src: this.props.profile_pic, alt: "" }),
            this.state.showProfileMenu ? _react2.default.createElement(
              "div",
              {
                className: "profile-menu",
                ref: function ref(element) {
                  _this4.dropdownProfileMenu = element;
                }
              },
              _react2.default.createElement(
                "button",
                null,
                " Profile "
              ),
              _react2.default.createElement(_reactGoogleLogin.GoogleLogout, {
                clientId: "250039694980-rj02nk2mdr9iru0ohgfin3dsm78plt1o.apps.googleusercontent.com",
                render: function render(renderProps) {
                  return _react2.default.createElement(
                    "button",
                    {
                      onClick: renderProps.onClick,
                      disabled: renderProps.disabled
                    },
                    "Log Out"
                  );
                },
                buttonText: "Logout",
                onLogoutSuccess: this.logout
              })
            ) : null
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "project-all", href: "/add-project" },
          _react2.default.createElement(
            "div",
            { onClick: this.addProject, className: "project-add" },
            "Add a new project",
            _react2.default.createElement(
              "div",
              { className: "project-add-btn" },
              _react2.default.createElement(_io.IoIosAddCircleOutline, null)
            )
          ),
          projectModules
        ),
        this.state.addProject ? _react2.default.createElement(_CreateProject2.default, { closeAddProject: this.addProject }) : null
      );
    }
  }]);

  return ProjectDash;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    username: state.username,
    projects: state.projects,
    profile_pic: state.profile_pic
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps)(ProjectDash);

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(74);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(14)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// Module
exports.push([module.i, ".projects{\n  padding-left: 3%;\n  padding-right: 5%;\n  width:100%\n}\n\n.navbar{\n  width: 100%;\n  padding: 20px 0 10px 0;\n  margin: 0;\n\n  position: sticky;\n  top: 0 ;\n  background-color: #F8F9FB;\n  z-index: 1;\n}\n  \n.navbar-filter {\n  margin: 0 40px;\n  font-weight: 500;\n  font-size: 16px;\n  cursor: pointer;\n}\n\n/* NavBar  \n.navbar {\n  width: 100%;\n  top: 0 ;\n  padding: 50px 0 20px 0;\n  position: -webkit-sticky;\n  position: sticky;\n  text-align: left;\n  display: inline-block;\n  background-color: #F8F9FB;\n\n  vertical-align: middle;\n}\n.navbar ul{\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n  vertical-align: middle;\n  display:inline-block;\n  width: 100%\n}\n.navbar li{\n  border: 1px dotted black; /* Just to illustrate height \n  vertical-align: middle;\n}\n.navbar-filters{\n  display: inline-block;\n}\n.navbar-filter{\n  font-size: 16px;\n  font-weight: 500;\n  float: left;\n  margin: 0 30px;\n}\n.profile{\n  float: right;\n  top: -10px;\n}\n.profile-pic{\n  vertical-align: middle;\n}\n/*\n.nav-link,\n.profile {\n  color: #000000;\n  cursor: pointer;\n  font-family: Poppins;\n  font-weight: 500;\n}\n\n.nav-link {\n  margin: 0 25px;\n  font-size: 16px;\n}\n.nav-link:hover{\n  color: #000000;\n}\n.nav-link:hover + .underline{\n  display:block;\n}\n\n\n/* Hover underline animation */\n.navbar .underline-from-center {\n  position: relative;\n}\n.navbar .underline-from-center::after {\n  content: \"\";\n  position: absolute;\n  top: calc(100% - 0.001rem);\n  border-bottom: 0.125rem solid #000000;\n  left: 50%;\n  right: 50%;\n}\n.navbar .underline-from-center:hover::after {\n  left: 0;\n  right: 0;\n}\n/**/ \n\n.navbar-sort{\n  font-size: 12px;\n  background-color: white;\n  border-radius: 10px;\n  padding: 4px 8px 4px 13px;\n  cursor: pointer;\n  float: right;\n  \n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);\n\n}\n\n\n.profile{\n  font-size: 16px;\n  font-weight: 500;\n  cursor: pointer;\n  position: relative;\n}\n\n.profile-pic{\n  height: 45px;\n  margin-left: 20px;\n  border-radius: 50%;\n}\n\n.profile-menu{\n  position: absolute;\nz-index: 100;\nbackground-color: white;\nright: 10px;\n\nmargin-top: 10px;\n}\n.profile-menu button{\n  display:block;\n  padding: 5px 10px ;\n  width: 100px;\n  text-align: left;\n  font-size: 14px;\n}\n.profile-menu button:hover{\nbackground-color: rgb(220, 220, 220);\n}\n\n.project-all {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: left;\n  padding-left: 1%;\n\n  user-select: none;          /* Likely future */   \n}\n\n.project-all:after {\n  content: '';\n  max-height: 1px;\n  width: 776px\n}\n\n.project-add{\n  width: 260px;\n  height: 260px;\n  overflow: hidden;\n  border-radius: 20px;\n  border: 5px dashed black;\n\n  display: block;\n  padding: 35px 0 0 35px;\n  margin: 30px 20px 25px 30px;\n  cursor: pointer;\n\n  font-weight: bold;\n  font-size: 27px;\n  letter-spacing: 0.02em;\n\n  position: relative;\n}\n\n.project-add-btn {\n  font-size: 50px;\n\n  right: 25px;\n  bottom: 5px;\n  position: absolute;\n}\n\n.popup-create-prjt{\n  position: fixed;\n  top: 0;\n  left: 250px;\n  right: 0;\n  bottom: 0;\n  z-index: 8;\n  background-color: rgba(0,0,0, 0.5);\n\n}\n\n.create-prjt {\n  position:absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin:auto;\n  z-index: 9;\n\n  background-color: white;\n  width: 468px;\n  height: 310px;\n  border-radius: 30px;\n  text-align: center;\n  display: inline-block;\n  padding: 46px 75px 0 70px;\n}\n\n.create-prjt h2 {\n  font-weight: bold;\n  font-size: 30px;\n  line-height: 36px;\n}\n\n.create-prjt form{\n  text-align: left;\n  font-size: 15px;\n  margin-top: 20px;\n}\n.create-prjt label {\n  width: 100%;\n}\n.create-prjt input {\n  width: 100%;\n  margin: 8px 0 20px 0;\n  font-size: 13px;\n  padding: 5px 5px 6px 15px;\n  border: 1px solid #E5E5E5;\n  box-sizing: border-box;\n  border-radius: 10px;\n  outline: none;\n}\ninput[type=\"submit\"].create-prjt-submit {\n  font-size: 13px !important;\n  color: white;\n  width: 250px;\n  background-color: #FC6B6B;\n  border-radius: 30px;\n  cursor: pointer;\n  float: center;\n  margin: auto;\n  display: block;\n}\n#close-CreateProject{\n  position: fixed;\n  top: 0;\n  left: 250px;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  background-color: rgba(0,0,0, 0.5);\n  display: fixed;\n}", ""]);


/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(37);

var _reactRedux = __webpack_require__(9);

var _reactRouterDom = __webpack_require__(12);

var _fa = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProjectModule = function (_Component) {
    _inherits(ProjectModule, _Component);

    function ProjectModule(props) {
        _classCallCheck(this, ProjectModule);

        var _this = _possibleConstructorReturn(this, (ProjectModule.__proto__ || Object.getPrototypeOf(ProjectModule)).call(this, props));

        _this.state = {
            title: _this.props.project.projectName,
            img: _this.props.project.projectpic,
            editDate: _this.props.project.lastEdited,
            status: _this.props.project.status
        };
        _this.handleClick = _this.handleClick.bind(_this);

        return _this;
    }

    _createClass(ProjectModule, [{
        key: 'handleClick',
        value: function handleClick() {
            this.props.dispatch({ type: "SELECT_PROJECT", selected_project: this.props.id, selected_project_name: this.props.project.projectName });
        }
    }, {
        key: 'render',
        value: function render() {

            var crntDate = new Date();
            var editDate = new Date(this.state.editDate);

            var diffTime = Math.abs(crntDate.getTime() - editDate.getTime());
            var diffMin = Math.floor(diffTime / (1000 * 60));
            var diffHour = Math.floor(diffTime / (1000 * 60 * 60));
            var diffDay = Math.floor(diffTime / (1000 * 60 * 60 * 24));
            function monthDiff(d1, d2) {
                var months;
                months = (d2.getFullYear() - d1.getFullYear()) * 12;
                months -= d1.getMonth();
                months += d2.getMonth();
                return months <= 0 ? 0 : months;
            }
            var diffMonth = monthDiff(editDate, crntDate);
            var diffYear = crntDate.getFullYear() - editDate.getFullYear();

            var lastEdited = "";
            if (diffMin < 1) {
                lastEdited = "Edited less than a minute ago";
            } else if (diffMin === 1) {
                lastEdited = "Edited 1 minute ago";
            } else if (diffHour < 1) {
                lastEdited = "Edited " + diffMin + " minutes ago";
            } else if (diffHour === 1) {
                lastEdited = "Edited 1 hour ago";
            } else if (diffDay < 1) {
                lastEdited = "Edited " + diffHour + " hours ago";
            } else if (diffDay === 1) {
                lastEdited = "Edited 1 day ago";
            } else if (diffDay < 30) {
                lastEdited = "Edited " + diffDay + " days ago";
            } else if (diffMonth === 1) {
                lastEdited = "Edited 1 month ago";
            } else if (diffMonth < 12) {
                lastEdited = "Edited " + diffMonth + " months ago";
            } else if (diffYear === 1) {
                lastEdited = "Edited 1 year ago";
            } else {
                lastEdited = "Edited " + diffYear + " years ago";
            }

            return _react2.default.createElement(
                _reactRouterDom.NavLink,
                { className: 'module-margin', to: "/project/" + this.props.id, onClick: this.handleClick },
                _react2.default.createElement(
                    'div',
                    { className: 'module' },
                    _react2.default.createElement('img', { className: 'module-img', src: this.state.img, alt: '' }),
                    _react2.default.createElement(
                        'div',
                        { className: 'module-desc' },
                        _react2.default.createElement(
                            'h4',
                            null,
                            this.state.title
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            lastEdited
                        )
                    ),
                    _react2.default.createElement(
                        'span',
                        null,
                        _react2.default.createElement(
                            'button',
                            { className: 'module-options-btn' },
                            _react2.default.createElement(_fa.FaEllipsisV, { style: { fontSize: "22px" } })
                        )
                    )
                )
            );
        }
    }]);

    return ProjectModule;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        selected_project: state.selected_project
    };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps)(ProjectModule);

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// Module
exports.push([module.i, ".module{\n    background-color: white;\n    min-width: 260px;\n    max-width: 260px;\n    min-height: 260px;\n    max-height: 260px;\n    overflow: hidden;\n    border-radius: 20px;\n    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);\n    border: none;\n    display: inline-block;\n    cursor: pointer;\n  }\n\n  .module-margin{\n    margin: 30px 25px 30px 25px;\n\n  }\n  \n  .module:hover{\n    background-color: rgba(255, 255, 255, 0.1);\n  }\n  \n  .module-img{\n      width: 100%;\n      height: 180px;\n  }\n  \n  .module-desc{\n    width: 80%;\n    padding-left: 20px;\n    padding-top: 15px;\n    display: inline-block;\n    vertical-align: middle;\n  \n  }\n  .module h4{\n    font-weight: bold;\n    font-size: 22px;\n    margin-bottom: 5px;\n    height: 27px;\n\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n  }\n  .module p{\n    font-weight: 300;\n    font-size: 12px;\n  }\n  .module-options-btn{\n    cursor: pointer;\n    display: inline-block;\n    vertical-align: middle;\n  }\n\n\n\n\n  ", ""]);


/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(10);

var _axios = __webpack_require__(16);

var _axios2 = _interopRequireDefault(_axios);

var _reactRedux = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CreateProject = function (_Component) {
    _inherits(CreateProject, _Component);

    function CreateProject(props) {
        _classCallCheck(this, CreateProject);

        var _this = _possibleConstructorReturn(this, (CreateProject.__proto__ || Object.getPrototypeOf(CreateProject)).call(this, props));

        _this.state = {
            projectName: " "
        };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);

        return _this;
    }

    _createClass(CreateProject, [{
        key: 'handleChange',
        value: function handleChange(e) {
            this.setState(_defineProperty({}, e.target.name, e.target.value));
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            var _this2 = this;

            e.preventDefault();
            var data = {
                projectName: this.state.projectName
            };
            _axios2.default.post("/api/project-create?token=" + sessionStorage.getItem('userToken'), data).then(function (data) {
                _this2.props.history.push('/project/' + data.data.data._id);
                window.location.reload();
            }).catch(function (error) {
                console.log(error);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'popup-create-prjt' },
                _react2.default.createElement(
                    'div',
                    { className: 'create-prjt' },
                    _react2.default.createElement(
                        'h2',
                        null,
                        'Give your project a name'
                    ),
                    _react2.default.createElement(
                        'form',
                        { onSubmit: this.handleSubmit },
                        _react2.default.createElement(
                            'label',
                            null,
                            'Project Title',
                            _react2.default.createElement('br', null),
                            _react2.default.createElement('input', { type: 'text', name: 'projectName', value: this.state.projectName, onChange: this.handleChange })
                        ),
                        _react2.default.createElement('input', { className: 'create-prjt-submit', type: 'submit', value: 'Create New Project' })
                    )
                ),
                _react2.default.createElement('div', { onClick: this.props.closeAddProject, id: 'close-CreateProject' })
            );
        }
    }]);

    return CreateProject;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        username: state.username
    };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps)((0, _reactRouter.withRouter)(CreateProject));

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(12);

var _reactRedux = __webpack_require__(9);

var _SidebarProject = __webpack_require__(80);

var _SidebarProject2 = _interopRequireDefault(_SidebarProject);

var _fa = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Sidebar = function (_Component) {
    _inherits(Sidebar, _Component);

    function Sidebar(props) {
        _classCallCheck(this, Sidebar);

        var _this = _possibleConstructorReturn(this, (Sidebar.__proto__ || Object.getPrototypeOf(Sidebar)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(Sidebar, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var projectHeadingActive = "";
            if (this.props.selected_project === "" | typeof this.props.selected_project === 'undefined') {
                projectHeadingActive = "heading-active";
            }
            return _react2.default.createElement(
                "div",
                { className: "sidebar" },
                _react2.default.createElement(
                    _reactRouterDom.NavLink,
                    { className: "sidebar-title", to: "/project-dashboard" },
                    _react2.default.createElement(
                        "span",
                        null,
                        "gather"
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: "sidebar-search" },
                    _react2.default.createElement(
                        "button",
                        { type: "submit", className: "sidebar-search-btn" },
                        _react2.default.createElement(_fa.FaSearch, null)
                    ),
                    _react2.default.createElement("input", { type: "text", className: "sidebar-search-input", placeholder: "Search for a project or file" })
                ),
                _react2.default.createElement(
                    "div",
                    { className: "sidebar-nav-heading " + projectHeadingActive },
                    _react2.default.createElement(
                        _reactRouterDom.NavLink,
                        { className: "sidebar-nav-heading-title", to: "/project-dashboard" },
                        _react2.default.createElement(
                            "span",
                            null,
                            "Projects"
                        )
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: "sidebar-nav" },
                    this.props.projects.sort(function (a, b) {
                        a = new Date(a.lastEdited);
                        b = new Date(b.lastEdited);
                        return a > b ? -1 : a < b ? 1 : 0;
                    }).map(function (project) {
                        if (_this2.props.selected_project === project._id) {
                            return _react2.default.createElement(_SidebarProject2.default, { key: project._id, id: project._id, name: project.projectName, active: "true" });
                        } else {
                            return _react2.default.createElement(_SidebarProject2.default, { key: project._id, id: project._id, name: project.projectName, active: "false" });
                        }
                    })
                )
            );
        }
    }]);

    return Sidebar;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        selected_project: state.selected_project,
        projects: state.projects
    };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps)(Sidebar);

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(12);

var _reactRedux = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SidebarProject = function (_Component) {
    _inherits(SidebarProject, _Component);

    function SidebarProject(props) {
        _classCallCheck(this, SidebarProject);

        var _this = _possibleConstructorReturn(this, (SidebarProject.__proto__ || Object.getPrototypeOf(SidebarProject)).call(this, props));

        _this.state = {
            name: _this.props.name
        };
        _this.handleClick = _this.handleClick.bind(_this);

        return _this;
    }

    _createClass(SidebarProject, [{
        key: "handleClick",
        value: function handleClick() {
            this.props.dispatch({ type: "SELECT_PROJECT", selected_project: this.props.id, selected_project_name: this.props.name });
        }
    }, {
        key: "render",
        value: function render() {
            if (this.props.active === "true") {
                return _react2.default.createElement(
                    _reactRouterDom.NavLink,
                    { className: "sidebar-nav-project project-active", onClick: this.handleClick, to: "/project/" + this.props.id },
                    _react2.default.createElement(
                        "span",
                        null,
                        this.state.name
                    )
                );
            } else {
                return _react2.default.createElement(
                    _reactRouterDom.NavLink,
                    { className: "sidebar-nav-project", onClick: this.handleClick, to: "/project/" + this.props.id },
                    _react2.default.createElement(
                        "span",
                        null,
                        this.state.name
                    )
                );
            }
        }
    }]);

    return SidebarProject;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        selected_project: state.selected_project
    };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps)(SidebarProject);

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(16);

var _axios2 = _interopRequireDefault(_axios);

var _reactRedux = __webpack_require__(9);

var _reactRouter = __webpack_require__(10);

var _FileModule = __webpack_require__(82);

var _FileModule2 = _interopRequireDefault(_FileModule);

__webpack_require__(83);

var _reactRouterDom = __webpack_require__(12);

var _fa = __webpack_require__(15);

var _io = __webpack_require__(18);

var _reactGoogleLogin = __webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProjectPage = function (_Component) {
  _inherits(ProjectPage, _Component);

  function ProjectPage(props) {
    _classCallCheck(this, ProjectPage);

    var _this = _possibleConstructorReturn(this, (ProjectPage.__proto__ || Object.getPrototypeOf(ProjectPage)).call(this, props));

    _this.state = {
      uploading: false,
      showProfileMenu: false
    };
    _this.textInput = _react2.default.createRef();

    _this.componentDidMount = _this.componentDidMount.bind(_this);
    _this.handleChangeUpload = _this.handleChangeUpload.bind(_this);
    _this.handleSubmitUpload = _this.handleSubmitUpload.bind(_this);
    _this.uploadComplete = _this.uploadComplete.bind(_this);

    _this.showProfileMenu = _this.showProfileMenu.bind(_this);
    _this.closeProfileMenu = _this.closeProfileMenu.bind(_this);
    return _this;
  }

  _createClass(ProjectPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.props.dispatch({
        type: "SELECT_PROJECT",
        selected_project: this.props.id,
        selected_project_name: this.props.name
      });
      this.props.dispatch({ type: "LOAD_FILES", files: [] });

      _axios2.default.get("/api/project-pictures?projectId=" + this.props.selected_project + "&token=" + sessionStorage.getItem("userToken")).then(function (data) {
        _this2.props.dispatch({
          type: "LOAD_FILES",
          files: data.data.data._doc.projectDoc,
          upload_info: data.data.data
        });
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: "handleChangeUpload",
    value: function handleChangeUpload() {
      this.setState({
        uploading: true
      });
      this.form.dispatchEvent(new Event("submit"));
    }
  }, {
    key: "handleSubmitUpload",
    value: function handleSubmitUpload(e) {
      e.preventDefault();

      var data = new FormData(e.target);

      var xhr = new XMLHttpRequest();
      // xhr.upload.addEventListener("progress", this.uploadProgress, false);
      xhr.addEventListener("load", this.uploadComplete, false);
      xhr.addEventListener("error", this.uploadFailed, false);
      xhr.addEventListener("abort", this.uploadCanceled, false);

      xhr.open("POST", this.props.upload_info.url, true);
      xhr.send(data);
    }
  }, {
    key: "uploadComplete",
    value: function uploadComplete() {
      _axios2.default.get("/api/update-project-documents?key=" + this.props.upload_info.fields.key + "&projectId=" + this.props.selected_project + "&token=" + sessionStorage.getItem("userToken")).then(function (res) {
        return window.location.reload();
      });
    }
  }, {
    key: "uploadFailed",
    value: function uploadFailed() {}
  }, {
    key: "uploadCanceled",
    value: function uploadCanceled() {}
  }, {
    key: "showProfileMenu",
    value: function showProfileMenu(event) {
      var _this3 = this;

      event.preventDefault();

      this.setState({ showProfileMenu: true }, function () {
        document.addEventListener("click", _this3.closeProfileMenu);
      });
    }
  }, {
    key: "closeProfileMenu",
    value: function closeProfileMenu(event) {
      var _this4 = this;

      // if (!this.dropdownProfileMenu.contains(event.target)) {
      this.setState({ showProfileMenu: false }, function () {
        document.removeEventListener("click", _this4.closeProfileMenu);
      });
      // }
    }
  }, {
    key: "logout",
    value: function logout() {
      sessionStorage.clear();
      window.location.reload();
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var uploadForm = "";
      if (this.props.upload_info) {
        uploadForm = _react2.default.createElement(
          "form",
          { onSubmit: this.handleSubmitUpload, ref: function ref(r) {
              return _this5.form = r;
            } },
          _react2.default.createElement("input", {
            type: "hidden",
            name: "key",
            value: this.props.upload_info.fields.key
          }),
          _react2.default.createElement("input", {
            type: "hidden",
            name: "acl",
            value: this.props.upload_info.fields.acl
          }),
          _react2.default.createElement("input", {
            type: "hidden",
            name: "X-Amz-Credential",
            value: this.props.upload_info.fields["X-Amz-Credential"]
          }),
          _react2.default.createElement("input", {
            type: "hidden",
            name: "X-Amz-Algorithm",
            value: this.props.upload_info.fields["X-Amz-Algorithm"]
          }),
          _react2.default.createElement("input", {
            type: "hidden",
            name: "X-Amz-Date",
            value: this.props.upload_info.fields["X-Amz-Date"]
          }),
          _react2.default.createElement("input", {
            type: "hidden",
            name: "Policy",
            value: this.props.upload_info.fields.Policy
          }),
          _react2.default.createElement("input", {
            type: "hidden",
            name: "X-Amz-Signature",
            value: this.props.upload_info.fields["X-Amz-Signature"]
          }),
          _react2.default.createElement(
            "label",
            { className: "file-add" },
            "Add a new ",
            _react2.default.createElement("br", null),
            "file",
            _react2.default.createElement(
              "div",
              { className: "file-add-btn" },
              _react2.default.createElement(_io.IoIosAddCircleOutline, null)
            ),
            _react2.default.createElement("input", {
              className: "file-add-input",
              type: "file",
              name: "file",
              onChange: this.handleChangeUpload,
              required: true
            })
          ),
          _react2.default.createElement("br", null)
        );
      }

      var fileModules = "";
      if (this.props.files) {
        fileModules = this.props.files.sort(function (a, b) {
          a = new Date(a.lastEdited);
          b = new Date(b.lastEdited);
          return a > b ? -1 : a < b ? 1 : 0;
        }).map(function (file) {
          return _react2.default.createElement(_FileModule2.default, { key: file._id, id: file._id, file: file });
        });
      }

      var uploadScreen = "";
      if (this.state.uploading) {
        uploadScreen = _react2.default.createElement(
          "div",
          { className: "uploadScreen" },
          " Uploading..."
        );
      }

      return _react2.default.createElement(
        "div",
        { className: "files" },
        uploadScreen,
        _react2.default.createElement(
          "nav",
          { className: "navbar" },
          _react2.default.createElement(
            "div",
            { className: "history" },
            _react2.default.createElement(
              _reactRouterDom.NavLink,
              { to: "/project-dashboard" },
              "Projects"
            ),
            _react2.default.createElement(_fa.FaAngleRight, { style: { fontSize: "25px", margin: "0 6px" } }),
            this.props.selected_project_name
          ),
          _react2.default.createElement(
            "div",
            { className: "profile", onClick: this.showProfileMenu },
            this.props.username,
            _react2.default.createElement("img", { className: "profile-pic", src: this.props.profile_pic, alt: "" }),
            this.state.showProfileMenu ? _react2.default.createElement(
              "div",
              {
                className: "profile-menu",
                ref: function ref(element) {
                  _this5.dropdownProfileMenu = element;
                }
              },
              _react2.default.createElement(
                "button",
                null,
                " Profile "
              ),
              _react2.default.createElement(_reactGoogleLogin.GoogleLogout, {
                clientId: "250039694980-rj02nk2mdr9iru0ohgfin3dsm78plt1o.apps.googleusercontent.com",
                render: function render(renderProps) {
                  return _react2.default.createElement(
                    "button",
                    {
                      onClick: renderProps.onClick,
                      disabled: renderProps.disabled
                    },
                    "Log Out"
                  );
                },
                buttonText: "Logout",
                onLogoutSuccess: this.logout
              })
            ) : null
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "project-title" },
          this.props.selected_project_name
        ),
        _react2.default.createElement(
          "div",
          { className: "files-all" },
          _react2.default.createElement(
            "div",
            null,
            uploadForm
          ),
          fileModules
        )
      );
    }
  }]);

  return ProjectPage;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    selected_project: state.selected_project,
    username: state.username,
    selected_project_name: state.selected_project_name,
    files: state.files,
    profile_pic: state.profile_pic,
    upload_info: state.upload_info
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps)((0, _reactRouter.withRouter)(ProjectPage));

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(37);

var _reactRedux = __webpack_require__(9);

var _reactRouterDom = __webpack_require__(12);

var _fa = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FileModule = function (_Component) {
    _inherits(FileModule, _Component);

    function FileModule(props) {
        _classCallCheck(this, FileModule);

        var _this = _possibleConstructorReturn(this, (FileModule.__proto__ || Object.getPrototypeOf(FileModule)).call(this, props));

        _this.state = {
            title: _this.props.file.projectDocName,
            img: _this.props.file.projectDocLink,
            editDate: _this.props.file.lastEdited,
            id: _this.props.id
        };
        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }

    _createClass(FileModule, [{
        key: 'handleClick',
        value: function handleClick() {
            // this.props.dispatch({ type: "SELECT_FILE", selected_file: this.state.id, selected_file_link: this.state.img })
        }
    }, {
        key: 'render',
        value: function render() {

            var crntDate = new Date();
            var editDate = new Date(this.state.editDate);

            var diffTime = Math.abs(crntDate.getTime() - editDate.getTime());
            var diffMin = Math.floor(diffTime / (1000 * 60));
            var diffHour = Math.floor(diffTime / (1000 * 60 * 60));
            var diffDay = Math.floor(diffTime / (1000 * 60 * 60 * 24));
            function monthDiff(d1, d2) {
                var months;
                months = (d2.getFullYear() - d1.getFullYear()) * 12;
                months -= d1.getMonth();
                months += d2.getMonth();
                return months <= 0 ? 0 : months;
            }
            var diffMonth = monthDiff(editDate, crntDate);
            var diffYear = crntDate.getFullYear() - editDate.getFullYear();

            var lastEdited = "";
            if (diffMin < 1) {
                lastEdited = "Edited less than a minute ago";
            } else if (diffMin === 1) {
                lastEdited = "Edited 1 minute ago";
            } else if (diffHour < 1) {
                lastEdited = "Edited " + diffMin + " minutes ago";
            } else if (diffHour === 1) {
                lastEdited = "Edited 1 hour ago";
            } else if (diffDay < 1) {
                lastEdited = "Edited " + diffHour + " hours ago";
            } else if (diffDay === 1) {
                lastEdited = "Edited 1 day ago";
            } else if (diffDay < 30) {
                lastEdited = "Edited " + diffDay + " days ago";
            } else if (diffMonth === 1) {
                lastEdited = "Edited 1 month ago";
            } else if (diffMonth < 12) {
                lastEdited = "Edited " + diffMonth + " months ago";
            } else if (diffYear === 1) {
                lastEdited = "Edited 1 year ago";
            } else {
                lastEdited = "Edited " + diffYear + " years ago";
            }

            return _react2.default.createElement(
                _reactRouterDom.NavLink,
                { onClick: this.handleClick, className: 'module-margin', to: "/file?projectId=" + this.props.selected_project + "&fileURL=" + this.state.img },
                _react2.default.createElement(
                    'div',
                    { className: 'module' },
                    _react2.default.createElement('img', { className: 'module-img', src: this.state.img, alt: '' }),
                    _react2.default.createElement(
                        'div',
                        { className: 'module-desc' },
                        _react2.default.createElement(
                            'h4',
                            null,
                            this.state.title
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            lastEdited
                        )
                    ),
                    _react2.default.createElement(
                        'span',
                        null,
                        _react2.default.createElement(
                            'button',
                            { className: 'module-options' },
                            _react2.default.createElement(_fa.FaEllipsisV, { style: { fontSize: "22px" } })
                        )
                    )
                )
            );
        }
    }]);

    return FileModule;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        selected_project: state.selected_project
    };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps)(FileModule);

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(84);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(14)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// Module
exports.push([module.i, ".files{\n    width:100%\n  }\n.files nav{\n    padding-left: 6%;\n    padding-right: 5%;\n}\n.history{\n    align-items: center;\n    display: flex;\n    font-size: 18px;\n}\n.history a {\n    font-weight: 500;\n}\n\n.files-all{\n    padding-left: 6%;\n    padding-right: 5%;\n\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: left;\n  \n    user-select: none;\n}\n\n.files-all:after {\n  content: '';\n  max-height: 1px;\n  width: 776px\n}\n\n.project-title{\n    font-size: 30px;\n    font-weight: bold;\n    margin-top: 40px;\n    margin-bottom: 20px;\n    padding-left: 6%;\n    padding-right: 5%;\n\n}\n\n\n.file-add{\n  width: 260px;\n  height: 260px;\n  overflow: hidden;\n  border-radius: 20px;\n  border: 5px dashed black;\n\n  display: block;\n  padding: 35px 0 0 35px;\n  margin: 30px 20px 25px 30px;\n  cursor: pointer;\n\n  font-weight: bold;\n  font-size: 27px;\n  letter-spacing: 0.02em;\n\n  position: relative;\n  \n}\n\n.file-add-btn {\n  font-size: 50px;\n  right: 25px;\n  bottom: 5px;\n  position: absolute;\n}\n\n.file-add-input{\n  width: 100%;\n  height:100%;\n  cursor: pointer;\n  display: none;\n}\n\n\n.uploadScreen{\nposition:fixed;\nbackground-color: rgba(0, 0, 0, 0.7);\nheight: 100vh;\nwidth:calc(100vw - 250px);\nz-index: 10;\n\nfont-size: 35px;\ncolor: white;\nfont-weight:bold;\n\nline-height: 100vh;\n\ntext-align: center;\nvertical-align: middle;\n}", ""]);


/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(86);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(14)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// Module
exports.push([module.i, ".title{\n  float: left;\n    font-weight: bold;\n  font-size: 40px;\n  margin: 40px 0 0 80px;\n  position: absolute\n}\n.feedback{\n  padding: 80px 150px 150px 80px;\n  width: 100%;\n  max-width: 100vw;\n  height: 100vh;\n  text-align: center;\n}\n\n\n.share{\n  font-size: 16px;\n  background-color: white;\n  border-radius: 15px;\n  padding: 5px 20px;\n  margin-bottom: 70px;\n  cursor: pointer;\n  font-weight: bold;\n\n  display: inline-block;\n  \n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);  \n\n  position: relative;\n\n  user-select: none; \n\n  text-align: center;\n\n  z-index: 1000;\n}\n\n.share-popup{\n  position: absolute;\n  z-index: 100;\n  background-color: white;\n  font-size: 16px;\n  border-radius: 15px;\n  padding: 5px 20px;\n  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);  \n\n  \n  top: 64px;\n  left: 50%;\n  transform:translate(-50%,-50%);\n}\n\n/* Arrow */\n.share-popup:before {\n\tbottom: 100%;\n\tleft: 50%;\n\tborder: solid transparent;\n\tcontent: \" \";\n\theight: 0;\n\twidth: 0;\n\tposition: absolute;\n  pointer-events: none;\n  z-index: 100;\n  \n}\n\n.share-popup:before {\n\tborder-color: rgba(240, 168, 168, 0);\n\tborder-bottom-color: white;\n\tborder-width: 12px;\n  margin-left: -12px;\n  \n}\n/* Arrow */\n\n.share-popup input{\n  width: 800px;\n  font-size: 14px;\n}\n\n.share-confirmation{\n  position: absolute;\n  top: -15px;\n  left: 50%;\n  transform:translate(-50%,-50%);\n  width: 300px;\n  font-size: 12px;\n  font-weight: normal;\n\n  -moz-animation: cssAnimation 0s ease-in 3s forwards;\n    /* Firefox */\n    -webkit-animation: cssAnimation 0s ease-in 3s forwards;\n    /* Safari and Chrome */\n    -o-animation: cssAnimation 0s ease-in 3s forwards;\n    /* Opera */\n    animation: cssAnimation 0s ease-in 3s forwards;\n    -webkit-animation-fill-mode: forwards;\n    animation-fill-mode: forwards;\n}\n@-webkit-keyframes cssAnimation {\n  to {\n      width:0;\n      height:0;\n      visibility:hidden;\n  }\n}\n@keyframes cssAnimation {\n  to {\n      width:0;\n      height:0;\n      overflow:hidden;\n  }\n}\n\n.file-container{\n  object-fit: contain;\nalign-items:center;\njustify-content:center;\n\n}\n.file-img-container{\n  object-fit: contain;\n}\n\n.file-img{\n    max-width: 100%;\n    max-height:100%;\n    object-fit: contain; \n}\n\n.annotorious-annotationlayer{\n  max-width: 100%;\n  max-height: 100%;\n  object-fit: contain; \n}\n\n.popup-enterName{\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 8;\n  background-color: rgba(0,0,0, 0.5);\n\n}\n\n.enterName {\n  position:absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin:auto;\n  z-index: 9;\n\n  background-color: white;\n  width: 468px;\n  height: 250px;\n  border-radius: 30px;\n  text-align: center;\n  display: inline-block;\n  padding: 46px 75px 0 70px;\n}\n\n.enterName h2 {\n  font-weight: bold;\n  font-size: 30px;\n  line-height: 36px;\n}\n\n.enterName form{\n  text-align: left;\n  font-size: 15px;\n  margin-top: 20px;\n}\n.enterName label {\n  width: 100%;\n}\n.enterName input {\n  width: 100%;\n  margin: 8px 0 20px 0;\n  font-size: 13px;\n  padding: 5px 5px 6px 15px;\n  border: 1px solid #E5E5E5;\n  box-sizing: border-box;\n  border-radius: 10px;\n  outline: none;\n}\ninput[type=\"submit\"].enterName-submit {\n  font-size: 13px !important;\n  color: white;\n  width: 250px;\n  background-color: #FC6B6B;\n  border-radius: 30px;\n  cursor: pointer;\n  float: center;\n  margin: auto;\n  display: block;\n}\n#close-CreateProject{\n  position: fixed;\n  top: 0;\n  left: 250px;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  background-color: rgba(0,0,0, 0.5);\n  display: fixed;\n}\n\n\n\n/** Annotorious **/\n\n.annotorious-opacity-fade {\n    -moz-transition-property: opacity;\n    -moz-transition-duration: 0.5s;\n    -moz-transition-delay: 0s;\n    -webkit-transition-property: opacity;\n    -webkit-transition-duration: 0.5s;\n    -webkit-transition-delay: 0s;\n    -o-transition-property: opacity;\n    -o-transition-duration: 0.5s;\n    -o-transition-delay: 0s;\n    transition-property: opacity;\n    transition-duration: 0.5s;\n    transition-delay: 0s;\n  }\n  \n  .annotorious-item-focus {\n    opacity:1.0;\n  }\n  \n  .annotorious-item-unfocus {\n    opacity:0.4;\n  }\n  \n  /** Hint/help popup **/\n  \n  .annotorious-hint-msg {\n    background-color:rgba(0,0,0,0.5);\n    margin:4px;\n    padding:8px 15px 8px 30px;\n    font-family: 'lucida grande',tahoma,verdana,arial,sans-serif;\n    line-height: normal;\n    font-size:12px;\n    color:#fff;\n    border-radius:4px;\n    -moz-border-radius:4px;\n    -webkit-border-radius:4px;\n    -khtml-border-radius:4px;\n  }\n  \n  .annotorious-hint-icon {\n    position:absolute;\n    top:6px;\n    left: 5px;\n    /* background:url('feather_icon.png'); */\n    background-repeat:no-repeat;\n    width:19px;\n    height:22px;\n    margin:2px 4px 0px 6px;\n  }\n  \n  /** Popup **/\n  \n  .annotorious-popup {\n    line-height:135%;\n    font-family:Arial, Verdana, Sans;\n    font-size:12px;\n    color:#000;\n    background-color:#fff;\n    border:1px solid #ccc;\n    padding:9px 8px;\n    word-wrap:break-word;\n    width:180px;\n    border-radius: 3px;\n    -moz-border-radius: 3px;\n    -webkit-border-radius: 3px;\n    -khtml-border-radius: 3px;\n    -moz-box-shadow:0px 5px 15px #111;  \n    -webkit-box-shadow:0px 5px 15px #111;  \n    box-shadow:0px 5px 15px #111;  \n  \n    -moz-transition-property: opacity;\n    -moz-transition-duration: 0.5s;\n    -moz-transition-delay: 0s;\n    -webkit-transition-property: opacity;\n    -webkit-transition-duration: 0.5s;\n    -webkit-transition-delay: 0s;\n    -o-transition-property: opacity;\n    -o-transition-duration: 0.5s;\n    -o-transition-delay: 0s;\n    transition-property: opacity;\n    transition-duration: 0.5s;\n    transition-delay: 0s;\n  }\n  \n  .annotorious-popup-empty {\n    color:#999;\n    font-style:italic;\n  }\n  \n  .annotorious-popup-buttons {\n    float:right;\n    margin:0px 0px 1px 10px;\n    height:16px;\n    \n    -moz-transition-property: opacity;\n    -moz-transition-duration: 1s;\n    -moz-transition-delay: 0s;\n    -webkit-transition-property: opacity;\n    -webkit-transition-duration: 1s;\n    -webkit-transition-delay: 0s;\n    -o-transition-property: opacity;\n    -o-transition-duration: 1s;\n    -o-transition-delay: 0s;\n    transition-property: opacity;\n    transition-duration: 1s;\n    transition-delay: 0s; \n  }\n  \n  .annotorious-popup-button {\n    font-size:10px;\n    text-decoration:none;\n    display:inline-block;\n    color:#000;\n    font-weight:bold;\n    margin-left:5px;\n    opacity:0.4;\n    \n    -moz-transition-property: opacity;\n    -moz-transition-duration: 0.5s;\n    -moz-transition-delay: 0s;\n    -webkit-transition-property: opacity;\n    -webkit-transition-duration: 0.5s;\n    -webkit-transition-delay: 0s;\n    -o-transition-property: opacity;\n    -o-transition-duration: 0.5s;\n    -o-transition-delay: 0s;\n    transition-property: opacity;\n    transition-duration: 0.5s;\n    transition-delay: 0s; \n  }\n  \n  .annotorious-popup-button:hover {\n    background-color:transparent;\n  }\n  \n  .annotorious-popup-button-active {\n    opacity:0.9;\n  }\n  \n  .annotorious-popup-button-edit {\n    /* background:url(pencil.png); */\n    width:16px;\n    height:16px;\n    text-indent:100px;\n    overflow:hidden;\n  }\n  \n  .annotorious-popup-button-delete {\n    /* background:url(delete.png); */\n    width:16px;\n    height:16px;\n    text-indent:100px;\n    overflow:hidden;\n    float:right;\n  }\n  \n  .annotorious-popup-field {\n    border-top:1px solid #ccc;\n    margin:6px 0px 0px 0px;\n    padding-top:2px;\n  }\n  \n  /** Editor **/\n  \n  .annotorious-editor {\n    line-height: normal;\n    padding:0px 0px 2px 0px;\n    background-color:#f2f2f2;\n    color:#000;\n    opacity:0.97;\n    border:1px solid #ccc;\n    border-radius: 3px;\n    -moz-border-radius: 3px;\n    -webkit-border-radius: 3px;\n    -khtml-border-radius: 3px;\n    -moz-box-shadow:0px 5px 15px #111;  \n    -webkit-box-shadow:0px 5px 15px #111;  \n    box-shadow:0px 5px 15px #111;  \n  }\n  \n  .annotorious-editor-text {\n    border-width:0px 0px 1px 0px;\n    border-style:solid;\n    border-color:#ccc;\n    line-height: normal;\n    background-color:#fff;\n    width:240px;\n    height:50px;\n    outline:none;\n    font-family:Verdana, Arial;\n    font-size:11px;\n    padding:4px;\n    margin:0px;  \n    color:#000;\n    text-shadow:none;\n    overflow-y:auto;\n    display:block;\n  }\n  \n  .annotorious-editor-button-container {\n    padding-top:2px;\n  }\n  \n  .annotorious-editor-button {\n    float:right;\n    line-height: normal;\n    display:inline-block;\n    text-align:center;\n    text-decoration:none;\n    font-family:Verdana, Arial;\n    font-size:10px;\t\n    border:1px solid #777;\n    color:#ddd;\n    padding:3px 8px;\n    margin:1px 2px 0px 1px;\n    cursor:pointer;\n    cursor:hand;\n    background:-webkit-gradient(linear, left top, left bottom, from(#888), to(#555));\n    background:-moz-linear-gradient(top,  #888,  #555);\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#888888', endColorstr='#555555');\n    -moz-border-radius:2px;\n    -webkit-border-radius:2px;\n    -khtml-border-radius:2px;\n    border-radius:2px;\n  }\n  \n  .annotorious-editor-button:hover {\n    background:#999;\n  }\n  \n  .annotorious-editor-field {\n    border-bottom:1px solid #ccc;\n    margin:0px;\n    background-color:#fff;\n    padding:3px;\n    font-family:Verdana, Arial;\n    font-size:12px;\t\n  }\n  \n  /** OpenLayers module **/\n  .annotorious-ol-boxmarker-outer {\n    border:1px solid #000;\n  }\n  \n  .annotorious-ol-boxmarker-inner {\n    border:1px solid #fff;\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    -ms-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n  \n  .annotorious-ol-hint {\n    line-height: normal;\n    font-family:Arial, Verdana, Sans;\n    font-size:16px;\n    color:#000;\n    background-color:#fff;\n    margin:0px;\n    padding:9px;\n    border-radius: 5px;\n    -moz-border-radius: 5px;\n    -webkit-border-radius: 5px;\n    -khtml-border-radius: 5px;\n  }\n  \n  .annotorious-ol-hint-secondary {\n    background-color:#fff000;\n  }\n  \n  canvas {\n    z-index: 2;\n  }\n  \n  canvas.hidden {\n    z-index: -1;\n    visibility: hidden;\n  }\n    \n  html.hasTouch .annotator-viewer li .annotator-controls, \n  html.hasTouch .annotator-viewer li .annotator-controls {\n    opacity: 1;\n  }", ""]);


/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _jquery = __webpack_require__(89);

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.annotorious.plugin.VanillaREST = function () {
    'use strict';

    function VanillaREST(options) {

        /** @private **/
        this._annotations = [];

        /** @private **/
        this._loadIndicators = [];

        this.options = {
            extraAnnotationData: {},
            loadFromSearch: false,
            prefix: '/store',
            urls: {
                create: '/annotation',
                read: '/annotations',
                update: '/annotation/:id',
                destroy: '/annotation/:id'
                // search: '/annotations/search'
            }
        };

        this.options = _jquery2.default.extend(this.options, options);
    };

    VanillaREST.prototype.initPlugin = function (anno) {
        var self = this;

        anno.addHandler('onAnnotationCreated', function (annotation) {
            self._create(annotation);

            // self._loadAnnotations(anno);

            // anno._addAnnotations(anno);


            // self.addAnnotation(annotation);
        });

        anno.addHandler('onAnnotationUpdated', function (annotation) {
            self._update(annotation);
            // self._loadAnnotations(anno);
        });

        anno.addHandler('onAnnotationRemoved', function (annotation) {
            self._delete(annotation);
            // self._loadAnnotations(anno);
        });
        self._loadAnnotations(anno);
    };

    VanillaREST.prototype.onInitAnnotator = function (annotator) {

        var spinner = this._newLoadIndicator();
        // console.log(this._loadIndicators)
        // console.log(annotator)
        annotator.element.appendChild(spinner);
        this._loadIndicators.push(spinner);
    };

    /**
     * @private
     */
    VanillaREST.prototype._loadAnnotations = function (anno) {
        // console.log(this)
        // console.log("loading")
        // console.log(this._annotations)

        var self = this;
        var url = '';
        if (this.options.loadFromSearch === false) {
            url = this._getActionUrl('read', null);
        } else {
            url = this._getActionUrl('search', null);
        }
        // console.log(this._annotations)
        // console.log(data)
        // console.log(this._getAnnotationData)
        // console.log(data)
        _jquery2.default.getJSON(url, function (data) {
            data = data["data"];
            console.log(data);

            try {

                _jquery2.default.each(data, function (index, data) {

                    var annotation = {};
                    if (typeof data['source'] != 'undefined' && typeof data['id'] != 'undefined') {

                        annotation = data['source'];
                        annotation.id = data['id'];
                    } else if (data !== null) {
                        annotation = data;
                    } else {
                        return;
                    }

                    // check for required properties
                    var reqProp = ['src', 'text', 'shapes', 'context'];
                    for (var rp in reqProp) {
                        if (reqProp.hasOwnProperty(rp) && !annotation.hasOwnProperty(reqProp[rp])) {
                            // return;
                        }
                    }
                    // console.log(self._annotations)

                    if (_jquery2.default.inArray(annotation._id, self._annotations) < 0) {
                        // console.log("detected new anno")
                        console.log(annotation._id);
                        self._annotations.push(annotation._id);
                        var myAnnotation = {
                            /** The URL of the image where the annotation should go **/
                            id: annotation["_id"],
                            src: annotation["src"],

                            /** The annotation text **/
                            text: annotation["text"],

                            /** The annotation shape **/
                            shapes: [{
                                /** The shape type **/
                                type: 'rect',

                                /** The shape geometry (relative coordinates) **/
                                geometry: { x: annotation["x"], y: annotation["y"], width: annotation["width"], height: annotation["height"] }
                            }],
                            commenter: annotation["commenter"]
                            // console.log(annotation.shapes)
                            // if (!annotation.shapes) {

                        };anno.addAnnotation(myAnnotation);
                        // console.log("adding annotation")
                        // console.log(myAnnotation)
                        // console.log(self._annotations)
                        // console.log("ok") //}
                        // console.log(anno)
                    }
                });
            } catch (e) {
                self.showNotification(e);
            }

            // Remove all load indicators
            _jquery2.default.each(self._loadIndicators, function (idx, spinner) {
                (0, _jquery2.default)(spinner).remove();
            });
        }).fail(function (jqXHR) {
            self._onResponseError(jqXHR, 'load');
        });
    };

    /**
     * @private
     */
    VanillaREST.prototype._create = function (annotation) {
        var self = this;
        _jquery2.default.post(this._getActionUrl('create', null), this._getAnnotationData(annotation), function (response) {
            // not storing numbers correctly
            console.log(this._getAnnotationData);
            console.log(annotation);
            annotation.id = response['id'];
        }).fail(function (jqXHR) {
            self._onResponseError(jqXHR, 'create');
        });
    };

    /**
     * @private
     */
    VanillaREST.prototype._update = function (annotation) {
        var self = this;
        console.log(this._getActionUrl('update', annotation.id));
        _jquery2.default.ajax({
            url: this._getActionUrl('update', annotation.id),
            type: 'PUT',
            data: this._getAnnotationData(annotation)
        }).fail(function (jqXHR) {
            self._onResponseError(jqXHR, 'update');
        });
    };

    /**
     * @private
     */
    VanillaREST.prototype._delete = function (annotation) {
        var self = this;
        // console.log(annotation)
        _jquery2.default.ajax({
            url: this._getActionUrl('destroy', annotation.id),
            type: 'DELETE'
        }).fail(function (jqXHR) {
            self._onResponseError(jqXHR, 'delete');
        });
    };

    /**
     * @private
     */
    VanillaREST.prototype._newLoadIndicator = function () {
        var outerDIV = document.createElement('div');
        outerDIV.className = 'annotorious-rest-plugin-load-outer';

        var innerDIV = document.createElement('div');
        innerDIV.className = 'annotorious-rest-plugin-load-inner';

        outerDIV.appendChild(innerDIV);
        return outerDIV;
    };

    /**
     * Get url for given action
     * @private
     * @param {string} action
     * @param {int} id
     * @returns {string} returns url for given action
     */
    VanillaREST.prototype._getActionUrl = function (action, id) {
        var url;
        url = this.options.prefix !== null ? this.options.prefix : '';
        url += this.options.urls[action];
        url = url.replace(/\/:id/, id !== null ? '/' + id : '');
        url = url.replace(/:id/, id !== null ? id : '');
        return url;
    };

    VanillaREST.prototype._getAnnotationData = function (annotation) {
        //console.log(annotation)
        var data;
        _jquery2.default.extend(annotation, this.options.extraAnnotationData);
        data = annotation;
        console.log(annotation);
        return data;
    };

    VanillaREST.prototype._onResponseError = function (jqXHR, action) {
        var message = "Sorry we could not " + action + " this annotation";
        if (action === 'search') {
            message = "Sorry we could not search the store for annotations";
        } else if (action === 'read') {
            message = "Sorry we could not " + action + " the annotations from the store";
        }
        switch (jqXHR.status) {
            case 401:
                message = "Sorry you are not allowed to " + action + " this annotation";
                break;
            case 404:
                message = "Sorry we could not connect to the annotations store";
                break;
            case 500:
                message = "Sorry something went wrong with the annotation store";
        }
        this.showNotification(message, 'error');
        return console.error("API request failed: '" + jqXHR.status + "'");
    };

    VanillaREST.prototype.showNotification = function (message, type) {
        // TODO prettier notification message
        // TODO fire event onShowNotification so that translator plugin can take care of translating the message first.
        window.alert(message);
        console.log(message);
    };

    return VanillaREST;
}(); /**
      * A basic plugin to store annotations on a REST-style HTTP/JSON endpoint.
      */

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(9);

var _axios = __webpack_require__(16);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EnterName = function (_Component) {
    _inherits(EnterName, _Component);

    function EnterName(props) {
        _classCallCheck(this, EnterName);

        var _this = _possibleConstructorReturn(this, (EnterName.__proto__ || Object.getPrototypeOf(EnterName)).call(this, props));

        _this.state = {
            clientName: ""
        };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);

        return _this;
    }

    _createClass(EnterName, [{
        key: 'handleChange',
        value: function handleChange(e) {
            this.setState(_defineProperty({}, e.target.name, e.target.value));
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            e.preventDefault();
            var data = JSON.stringify({
                clientName: this.state.clientName
            });
            this.props.dispatch({ type: "CLIENT_NAME", clientName: this.state.clientName });
            sessionStorage.setItem('clientName', this.state.clientName);
            this.props.closeEnterName();
            // axios.post("https://mongo-proj-ic8xgr.turbo360-vertex.com/api/project-create?token="+sessionStorage.getItem('userToken'), data)
            // .then(data => {
            //     this.props.history.push(('/project/' + data.data.data._id))
            //     window.location.reload();
            // })
            // .catch(error => {
            //     console.log(error)
            // })
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'popup-enterName' },
                _react2.default.createElement(
                    'div',
                    { className: 'enterName' },
                    _react2.default.createElement(
                        'h2',
                        null,
                        'Welcome to Gather'
                    ),
                    _react2.default.createElement(
                        'form',
                        { onSubmit: this.handleSubmit },
                        _react2.default.createElement(
                            'label',
                            null,
                            'What\'s your name?',
                            _react2.default.createElement('br', null),
                            _react2.default.createElement('input', { type: 'text', name: 'clientName', value: this.state.clientName, onChange: this.handleChange })
                        ),
                        _react2.default.createElement('input', { className: 'enterName-submit', type: 'submit', value: 'Submit' })
                    )
                )
            );
        }
    }]);

    return EnterName;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        username: state.username
    };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps)(EnterName);

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(92);

var _reactGoogleLogin = __webpack_require__(22);

var _reactGoogleLogin2 = _interopRequireDefault(_reactGoogleLogin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LogIn = function (_Component) {
  _inherits(LogIn, _Component);

  function LogIn() {
    _classCallCheck(this, LogIn);

    var _this = _possibleConstructorReturn(this, (LogIn.__proto__ || Object.getPrototypeOf(LogIn)).call(this));

    _this.responseGoogleSuccess = _this.responseGoogleSuccess.bind(_this);
    return _this;
  }

  _createClass(LogIn, [{
    key: "responseGoogleSuccess",
    value: function responseGoogleSuccess(res) {
      sessionStorage.setItem("userToken", res.tokenObj.id_token);
      this.props.login();
    }
  }, {
    key: "responseGoogleFail",
    value: function responseGoogleFail(res) {
      console.log(res);
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "login" },
        _react2.default.createElement(
          "div",
          { className: "login-content" },
          _react2.default.createElement(
            "div",
            { className: "login-content-fields" },
            _react2.default.createElement(
              "h3",
              null,
              "Try gather today."
            ),
            _react2.default.createElement(
              "p",
              null,
              "Get started by signing up with your Google account"
            ),
            _react2.default.createElement("br", null),
            _react2.default.createElement(_reactGoogleLogin2.default, {
              clientId: "250039694980-rj02nk2mdr9iru0ohgfin3dsm78plt1o.apps.googleusercontent.com",
              buttonText: "Login with Google",
              onSuccess: this.responseGoogleSuccess,
              onFailure: this.responseGoogleFail,
              cookiePolicy: "single_host_origin"
            })
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "login-display" },
          _react2.default.createElement("span", { className: "login-display-helper" }),
          _react2.default.createElement("img", {
            src: "https://www.gurgaongraphics.in/wp-content/uploads/2016/11/gurgaon-graphics-website-design-services.png",
            className: "login-display-img"
          })
        )
      );
    }
  }]);

  return LogIn;
}(_react.Component);

exports.default = LogIn;

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(93);

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(14)(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// Module
exports.push([module.i, ".login{\n    display:flex;\n}\n.login-content{    \n    height: 100vh;\n    width: 30%;\n\n    display: table;\n\n    padding: 0 40px;\n\n    align-items: center;\n    text-align: center;\n}\n.login-content-fields{\n    display: table-cell;\n    vertical-align: middle;\n}\n.login-content-fields h3{\n    font-weight: bold;\n    font-size: 36px;\n}\n\n.login-display{\n    display: inline-block;\n    position: relative;\n    vertical-align: middle;\n\n    width: 70%;\n    height:100vh;\n\n    background-color: white;\n    text-align: center\n}\n.login-display-helper{\n    display: inline-block;\n    height: 100%;\n    vertical-align: middle;\n}\n.login-display-img{\n    vertical-align: middle;\n\n    margin: auto;\n    height: 80%;\n}", ""]);


/***/ })

/******/ });
//# sourceMappingURL=app.map