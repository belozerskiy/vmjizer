/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _layout = __webpack_require__(1);

	var _layout2 = _interopRequireDefault(_layout);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var App = React.createClass({
	    displayName: "App",
	    render: function render() {
	        return React.createElement(_layout2.default, null);
	    }
	});

	ReactDOM.render(React.createElement(App, null), document.getElementById("app"));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _sidemenu = __webpack_require__(2);

	var _sidemenu2 = _interopRequireDefault(_sidemenu);

	var _dashboard = __webpack_require__(3);

	var _dashboard2 = _interopRequireDefault(_dashboard);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Created by Dark on 13.08.2016.
	 */

	var Layout = React.createClass({
	    displayName: 'Layout',
	    render: function render() {
	        return React.createElement(
	            'div',
	            { className: 'layout' },
	            React.createElement(_sidemenu2.default, null),
	            React.createElement(_dashboard2.default, null)
	        );
	    }
	});

	exports.default = Layout;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Created by Dark on 13.08.2016.
	 */

	var SideMenu = React.createClass({
	    displayName: "SideMenu",
	    render: function render() {
	        return React.createElement(
	            "div",
	            { className: "side-menu" },
	            React.createElement(
	                "ul",
	                null,
	                React.createElement(
	                    "li",
	                    null,
	                    React.createElement(
	                        "a",
	                        { href: "#home" },
	                        React.createElement("i", { className: "fa fa-home", "aria-hidden": "true" })
	                    )
	                ),
	                React.createElement(
	                    "li",
	                    null,
	                    React.createElement(
	                        "a",
	                        { href: "#home" },
	                        React.createElement("i", { className: "fa fa-user", "aria-hidden": "true" })
	                    )
	                ),
	                React.createElement(
	                    "li",
	                    null,
	                    React.createElement(
	                        "a",
	                        { href: "#home" },
	                        React.createElement("i", { className: "fa fa-tasks", "aria-hidden": "true" })
	                    )
	                ),
	                React.createElement(
	                    "li",
	                    null,
	                    React.createElement(
	                        "a",
	                        { href: "#home" },
	                        React.createElement("i", { className: "fa fa-cog", "aria-hidden": "true" })
	                    )
	                )
	            )
	        );
	    }
	});

	exports.default = SideMenu;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _widgets = __webpack_require__(4);

	var _widgets2 = _interopRequireDefault(_widgets);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var data = [{
	    title: "Resources"
	}, {
	    title: "Workbench"
	}]; /**
	     * Created by Dark on 13.08.2016.
	     */

	var Dashboard = React.createClass({
	    displayName: "Dashboard",
	    render: function render() {
	        return React.createElement(
	            "div",
	            { className: "dashboard" },
	            React.createElement(
	                "div",
	                { className: "header" },
	                React.createElement(
	                    "p",
	                    { className: "title" },
	                    "Dashboard"
	                )
	            ),
	            React.createElement(_widgets2.default, { data: data })
	        );
	    }
	});

	exports.default = Dashboard;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Created by Dark on 13.08.2016.
	 */

	var Widgets = React.createClass({
	    displayName: "Widgets",
	    render: function render() {
	        var data = this.props.data;

	        var widgetTemp = data.map(function (item) {
	            return React.createElement(
	                "div",
	                { className: "widget" },
	                React.createElement(
	                    "div",
	                    { className: "header" },
	                    React.createElement(
	                        "p",
	                        { className: "title" },
	                        item.title
	                    )
	                )
	            );
	        });

	        return React.createElement(
	            "div",
	            { className: "widgets" },
	            widgetTemp
	        );
	    }
	});

	exports.default = Widgets;

/***/ }
/******/ ]);