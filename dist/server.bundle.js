/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MOVE_WITHIN_LANE = exports.CREATE_NOTES = exports.EDIT_NOTE = exports.DELETE_NOTE = exports.UPDATE_NOTE = exports.CREATE_NOTE = undefined;
exports.createNote = createNote;
exports.createNoteRequest = createNoteRequest;
exports.updateNote = updateNote;
exports.updateNoteRequest = updateNoteRequest;
exports.deleteNote = deleteNote;
exports.deleteNoteRequest = deleteNoteRequest;
exports.editNote = editNote;
exports.createNotes = createNotes;
exports.moveWithinLane = moveWithinLane;

var _apiCaller = __webpack_require__(10);

var _apiCaller2 = _interopRequireDefault(_apiCaller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export Constants
var CREATE_NOTE = exports.CREATE_NOTE = 'CREATE_NOTE';
var UPDATE_NOTE = exports.UPDATE_NOTE = 'UPDATE_NOTE';
var DELETE_NOTE = exports.DELETE_NOTE = 'DELETE_NOTE';
var EDIT_NOTE = exports.EDIT_NOTE = 'EDIT_NOTE';
var CREATE_NOTES = exports.CREATE_NOTES = 'CREATE_NOTES';
var MOVE_WITHIN_LANE = exports.MOVE_WITHIN_LANE = 'MOVE_WITHIN_LANE';

// Export Actions
function createNote(note, laneId) {
  return {
    type: CREATE_NOTE,
    laneId: laneId,
    note: note
  };
}

function createNoteRequest(note, laneId) {
  return function (dispatch) {
    return (0, _apiCaller2.default)('notes', 'post', { note: note, laneId: laneId }).then(function (noteResp) {
      dispatch(createNote(noteResp, laneId));
    });
  };
}

function updateNote(note) {
  return {
    type: UPDATE_NOTE,
    note: note
  };
}

function updateNoteRequest(note) {
  return function (dispatch) {
    return (0, _apiCaller2.default)('notes/' + note.id, 'put', { task: note.task }).then(function () {
      dispatch(updateNote(note));
    });
  };
}

function deleteNote(noteId, laneId) {
  return {
    type: DELETE_NOTE,
    noteId: noteId,
    laneId: laneId
  };
}

function deleteNoteRequest(noteId, laneId) {
  return function (dispatch) {
    return (0, _apiCaller2.default)('notes/' + noteId, 'delete').then(function () {
      dispatch(deleteNote(noteId, laneId));
    });
  };
}

function editNote(noteId) {
  return {
    type: EDIT_NOTE,
    noteId: noteId
  };
}

function createNotes(notesData) {
  return {
    type: CREATE_NOTES,
    notes: notesData
  };
}

function moveWithinLane(laneId, targetId, sourceId) {
  return {
    type: MOVE_WITHIN_LANE,
    laneId: laneId,
    targetId: targetId,
    sourceId: sourceId
  };
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.REMOVE_FROM_LANE = exports.PUSH_TO_LANE = exports.MOVE_BETWEEN_LANES = exports.CREATE_LANES = exports.EDIT_LANE = exports.DELETE_LANE = exports.UPDATE_LANE = exports.CREATE_LANE = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.createLane = createLane;
exports.createLaneRequest = createLaneRequest;
exports.updateLane = updateLane;
exports.updateLaneRequest = updateLaneRequest;
exports.deleteLane = deleteLane;
exports.deleteLaneRequest = deleteLaneRequest;
exports.editLane = editLane;
exports.createLanes = createLanes;
exports.fetchLanes = fetchLanes;
exports.moveBetweenLanes = moveBetweenLanes;
exports.removeFromLane = removeFromLane;
exports.pushToLane = pushToLane;
exports.changeLanesRequest = changeLanesRequest;

var _apiCaller = __webpack_require__(10);

var _apiCaller2 = _interopRequireDefault(_apiCaller);

var _schema = __webpack_require__(34);

var _normalizr = __webpack_require__(12);

var _NoteActions = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export Constants
var CREATE_LANE = exports.CREATE_LANE = 'CREATE_LANE';
var UPDATE_LANE = exports.UPDATE_LANE = 'UPDATE_LANE';
var DELETE_LANE = exports.DELETE_LANE = 'DELETE_LANE';
var EDIT_LANE = exports.EDIT_LANE = 'EDIT_LANE';
var CREATE_LANES = exports.CREATE_LANES = 'CREATE_LANES';
var MOVE_BETWEEN_LANES = exports.MOVE_BETWEEN_LANES = 'MOVE_BETWEEN_LANES';
var PUSH_TO_LANE = exports.PUSH_TO_LANE = 'PUSH_TO_LANE';
var REMOVE_FROM_LANE = exports.REMOVE_FROM_LANE = 'REMOVE_FROM_LANE';

// Export Actions
function createLane(lane) {
  return {
    type: CREATE_LANE,
    lane: _extends({
      notes: []
    }, lane)
  };
}

function createLaneRequest(lane) {
  return function (dispatch) {
    return (0, _apiCaller2.default)('lanes', 'post', lane).then(function (res) {
      dispatch(createLane(res));
    });
  };
}

function updateLane(lane) {
  return {
    type: UPDATE_LANE,
    lane: lane
  };
}

function updateLaneRequest(lane) {
  return function (dispatch) {
    return (0, _apiCaller2.default)('lanes/' + lane.id, 'put', { name: lane.name, editing: lane.editing }).then(function () {
      dispatch(updateLane(lane));
    });
  };
}

function deleteLane(laneId) {
  return {
    type: DELETE_LANE,
    laneId: laneId
  };
}

function deleteLaneRequest(laneId) {
  return function (dispatch) {
    return (0, _apiCaller2.default)('lanes/' + laneId, 'delete').then(function () {
      dispatch(deleteLane(laneId));
    });
  };
}

function editLane(laneId) {
  return {
    type: EDIT_LANE,
    laneId: laneId
  };
}

function createLanes(lanesData) {
  return {
    type: CREATE_LANES,
    lanes: lanesData
  };
}

function fetchLanes() {
  return function (dispatch) {
    return (0, _apiCaller2.default)('lanes').then(function (res) {
      var normalized = (0, _normalizr.normalize)(res.lanes, _schema.lanes);
      var _normalized$entities = normalized.entities,
          normalizedLanes = _normalized$entities.lanes,
          notes = _normalized$entities.notes;


      dispatch(createLanes(normalizedLanes));
      dispatch((0, _NoteActions.createNotes)(notes));
    });
  };
}

function moveBetweenLanes(targetLaneId, noteId, sourceLaneId) {
  return {
    type: MOVE_BETWEEN_LANES,
    targetLaneId: targetLaneId,
    noteId: noteId,
    sourceLaneId: sourceLaneId
  };
}

function removeFromLane(sourceLaneId, noteId) {
  return {
    type: REMOVE_FROM_LANE,
    sourceLaneId: sourceLaneId,
    noteId: noteId
  };
}

function pushToLane(targetLaneId, noteId) {
  return {
    type: PUSH_TO_LANE,
    targetLaneId: targetLaneId,
    noteId: noteId
  };
}

function changeLanesRequest(sourceLaneId, targetLaneId, noteId, newTask) {
  return function (dispatch) {
    return (0, _apiCaller2.default)('notes/' + noteId, 'delete').then(function () {
      (0, _apiCaller2.default)('notes', 'post', { note: { id: noteId, task: newTask }, laneId: targetLaneId });
    }).then(function () {
      dispatch(removeFromLane(sourceLaneId, noteId));
      dispatch(pushToLane(targetLaneId, noteId));
    });
  };
}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-dnd");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.API_URL = undefined;
exports.default = callApi;

var _isomorphicFetch = __webpack_require__(33);

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _config = __webpack_require__(11);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var API_URL = exports.API_URL = typeof window === 'undefined' || process.env.NODE_ENV === 'test' ? process.env.BASE_URL || 'http://localhost:' + (process.env.PORT || _config2.default.port) + '/api' : '/api';

function callApi(endpoint) {
  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'get';
  var body = arguments[2];

  return (0, _isomorphicFetch2.default)(API_URL + '/' + endpoint, {
    headers: { 'content-type': 'application/json' },
    method: method,
    body: JSON.stringify(body)
  }).then(function (response) {
    return response.json().then(function (json) {
      return { json: json, response: response };
    });
  }).then(function (_ref) {
    var json = _ref.json,
        response = _ref.response;

    if (!response.ok) {
      return Promise.reject(json);
    }

    return json;
  }).then(function (response) {
    return response;
  }, function (error) {
    return error;
  });
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/mern-starter',
  // mongoURL: process.env.MONGO_URL || 'mongodb://andrzej:admin1234@ds145194.mlab.com:45194/kanban',
  port: process.env.PORT || 8000
};

exports.default = config;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("normalizr");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("lodash/omit");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reduxDevtools = __webpack_require__(36);

var _reduxDevtoolsLogMonitor = __webpack_require__(37);

var _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);

var _reduxDevtoolsDockMonitor = __webpack_require__(38);

var _reduxDevtoolsDockMonitor2 = _interopRequireDefault(_reduxDevtoolsDockMonitor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reduxDevtools.createDevTools)(_jsx(_reduxDevtoolsDockMonitor2.default, {
  toggleVisibilityKey: 'ctrl-h',
  changePositionKey: 'ctrl-w'
}, void 0, _jsx(_reduxDevtoolsLogMonitor2.default, {})));

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _LaneActions = __webpack_require__(7);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(2);

var _Lanes = __webpack_require__(44);

var _Lanes2 = _interopRequireDefault(_Lanes);

var _Kanban = {
  "Kanban": "_1FmdyPedQAzhoVfONc_Gef",
  "AddLane": "_3Wq4ohk_qymrJsWCEfqG4f"
};

var _Kanban2 = _interopRequireDefault(_Kanban);

var _reactDnd = __webpack_require__(8);

var _reactDndHtml5Backend = __webpack_require__(50);

var _reactDndHtml5Backend2 = _interopRequireDefault(_reactDndHtml5Backend);

var _redux = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Kanban = function Kanban(props) {
  return _jsx('div', {
    className: _Kanban2.default.Kanban
  }, void 0, _jsx('button', {
    className: _Kanban2.default.AddLane,
    onClick: function onClick() {
      return props.createLane({
        name: 'New lane'
      });
    }
  }, void 0, 'Add lane'), _jsx(_Lanes2.default, {
    className: 'KanbanLanes',
    lanes: props.lanes
  }));
};

Kanban.need = [function () {
  return (0, _LaneActions.fetchLanes)();
}];

var mapStateToProps = function mapStateToProps(state) {
  return {
    lanes: Object.values(state.lanes)
  };
};

var mapDispatchToProps = {
  createLane: _LaneActions.createLaneRequest,
  fetchLanes: _LaneActions.fetchLanes
};

exports.default = (0, _redux.compose)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _reactDnd.DragDropContext)(_reactDndHtml5Backend2.default))(Kanban);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    NOTE: 'note'
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Edit = {
    "Delete": "hyUc5QuplBEu2kRMWNWmr",
    "NoteTitle": "_2VRqxEqf4PLJeoFLwg9V_r",
    "DeleteNote": "ouK3YRC88XO67H-FOQnZj",
    "NoteWrapper": "_1dgxyzIBfNCjyBrYXR5oRP"
};

var _Edit2 = _interopRequireDefault(_Edit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Edit = function (_Component) {
    _inherits(Edit, _Component);

    function Edit() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Edit);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Edit.__proto__ || Object.getPrototypeOf(Edit)).call.apply(_ref, [this].concat(args))), _this), _this.checkEnter = function (e) {
            if (e.key === 'Enter') {
                _this.finishEdit(e);
            }
        }, _this.finishEdit = function (e) {
            var value = e.target.value;

            _this.props.onUpdate(value);
        }, _this.renderDelete = function () {
            return _jsx('span', {
                className: _Edit2.default.Delete,
                onClick: _this.props.onDelete
            }, void 0, 'x');
        }, _this.renderValue = function () {
            var _this$props = _this.props,
                value = _this$props.value,
                onDelete = _this$props.onDelete,
                onValueClick = _this$props.onValueClick;


            return _jsx('div', {
                className: _Edit2.default.NoteWrapper
            }, void 0, _jsx('span', {
                className: _Edit2.default.NoteTitle,
                onClick: onValueClick
            }, void 0, value), _jsx('div', {
                className: _Edit2.default.DeleteNote
            }, void 0, onDelete ? _this.renderDelete() : null));
        }, _this.renderEdit = function () {
            return _jsx('input', {
                type: 'text',
                autoFocus: true,
                defaultValue: _this.props.value,
                onBlur: _this.finishEdit,
                onKeyPress: _this.checkEnter
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Edit, [{
        key: 'render',
        value: function render() {

            return _jsx('div', {
                className: this.props.className
            }, void 0, this.props.editing ? this.renderEdit() : this.renderValue());
        }
    }]);

    return Edit;
}(_react.Component);

exports.default = Edit;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(6);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
_mongoose2.default.plugin(function (schema) {
  schema.options.usePushEach = true;
});

var laneSchema = new Schema({
  name: { type: 'String', required: true },
  notes: [{ type: Schema.ObjectId, ref: 'Note', required: true, default: [] }],
  id: { type: 'String', required: true, unique: true }
});

function populateNotes(next) {
  this.populate('notes');
  next();
}

laneSchema.pre('find', populateNotes);
laneSchema.pre('findOne', populateNotes);

exports.default = _mongoose2.default.model('Lane', laneSchema);

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _express = __webpack_require__(5);

var _express2 = _interopRequireDefault(_express);

var _compression = __webpack_require__(24);

var _compression2 = _interopRequireDefault(_compression);

var _mongoose = __webpack_require__(6);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bodyParser = __webpack_require__(25);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _path = __webpack_require__(26);

var _path2 = _interopRequireDefault(_path);

var _IntlWrapper = __webpack_require__(27);

var _IntlWrapper2 = _interopRequireDefault(_IntlWrapper);

var _store = __webpack_require__(28);

var _reactRedux = __webpack_require__(2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(39);

var _reactRouter = __webpack_require__(15);

var _reactHelmet = __webpack_require__(16);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _routes = __webpack_require__(40);

var _routes2 = _interopRequireDefault(_routes);

var _fetchData = __webpack_require__(51);

var _lane = __webpack_require__(53);

var _lane2 = _interopRequireDefault(_lane);

var _note = __webpack_require__(55);

var _note2 = _interopRequireDefault(_note);

var _config = __webpack_require__(11);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Initialize the Express App
var app = new _express2.default();

// Set Development modes checks
var isDevMode = process.env.NODE_ENV === 'development' || false;
var isProdMode = process.env.NODE_ENV === 'production' || false;

// Run Webpack dev server in development mode
if (isDevMode) {
  // Webpack Requirements
  // eslint-disable-next-line global-require
  var webpack = __webpack_require__(22);
  // eslint-disable-next-line global-require
  var config = __webpack_require__(58);
  // eslint-disable-next-line global-require
  var webpackDevMiddleware = __webpack_require__(62);
  // eslint-disable-next-line global-require
  var webpackHotMiddleware = __webpack_require__(63);
  var compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    watchOptions: {
      poll: 1000
    }
  }));
  app.use(webpackHotMiddleware(compiler));
}

// React And Redux Setup


// Import required modules

// import dummyData from './dummyData';


// Set native promises as mongoose promise
_mongoose2.default.Promise = global.Promise;

// MongoDB Connection
if (process.env.NODE_ENV !== 'test') {
  _mongoose2.default.connect(_config2.default.mongoURL, function (error) {
    if (error) {
      console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
      throw error;
    }

    // feed some dummy data in DB.
    // dummyData();
  });
}

// Apply body Parser and server public assets and routes
app.use((0, _compression2.default)());
app.use(_bodyParser2.default.json({ limit: '20mb' }));
app.use(_bodyParser2.default.urlencoded({ limit: '20mb', extended: false }));
app.use(_express2.default.static(_path2.default.resolve(__dirname, '../dist/client')));
// app.use('/api', posts);
app.use('/api', _lane2.default);
app.use('/api', _note2.default);

// Render Initial HTML
var renderFullPage = function renderFullPage(html, initialState) {
  var head = _reactHelmet2.default.rewind();

  // Import Manifests
  var assetsManifest = process.env.webpackAssets && JSON.parse(process.env.webpackAssets);
  var chunkManifest = process.env.webpackChunkAssets && JSON.parse(process.env.webpackChunkAssets);

  return '\n    <!doctype html>\n    <html>\n      <head>\n        ' + head.base.toString() + '\n        ' + head.title.toString() + '\n        ' + head.meta.toString() + '\n        ' + head.link.toString() + '\n        ' + head.script.toString() + '\n\n        ' + (isProdMode ? '<link rel=\'stylesheet\' href=\'' + assetsManifest['/app.css'] + '\' />' : '') + '\n        <link href=\'https://fonts.googleapis.com/css?family=Lato:400,300,700\' rel=\'stylesheet\' type=\'text/css\'/>\n      </head>\n      <body>\n        <div id="root">' + (process.env.NODE_ENV === 'production' ? html : '<div>' + html + '</div>') + '</div>\n        <script>\n          window.__INITIAL_STATE__ = ' + JSON.stringify(initialState) + ';\n          ' + (isProdMode ? '//<![CDATA[\n          window.webpackManifest = ' + JSON.stringify(chunkManifest) + ';\n          //]]>' : '') + '\n        </script>\n        <script src=\'' + (isProdMode ? assetsManifest['/vendor.js'] : '/vendor.js') + '\'></script>\n        <script src=\'' + (isProdMode ? assetsManifest['/app.js'] : '/app.js') + '\'></script>\n      </body>\n    </html>\n  ';
};

var renderError = function renderError(err) {
  var softTab = '&#32;&#32;&#32;&#32;';
  var errTrace = isProdMode ? ':<br><br><pre style="color:red">' + softTab + err.stack.replace(/\n/g, '<br>' + softTab) + '</pre>' : '';
  return renderFullPage('Server Error' + errTrace, {});
};

// Server Side Rendering based on routes matched by React-router.
app.use(function (req, res, next) {
  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirectLocation, renderProps) {
    if (err) {
      return res.status(500).end(renderError(err));
    }

    if (redirectLocation) {
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    }

    if (!renderProps) {
      return next();
    }

    var store = (0, _store.configureStore)();

    return (0, _fetchData.fetchComponentData)(store, renderProps.components, renderProps.params).then(function () {
      var initialView = (0, _server.renderToString)(_jsx(_reactRedux.Provider, {
        store: store
      }, void 0, _jsx(_IntlWrapper2.default, {}, void 0, _react2.default.createElement(_reactRouter.RouterContext, renderProps))));
      var finalState = store.getState();

      res.set('Content-Type', 'text/html').status(200).end(renderFullPage(initialView, finalState));
    }).catch(function (error) {
      return next(error);
    });
  });
});

// start app
app.listen(_config2.default.port, function (error) {
  if (!error) {
    console.log('MERN is running on port: ' + _config2.default.port + '! Build something amazing!'); // eslint-disable-line
  }
});

exports.default = app;
/* WEBPACK VAR INJECTION */}.call(exports, "server"))

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IntlWrapper = IntlWrapper;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactIntl = __webpack_require__(9);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function IntlWrapper(props) {
  return _react2.default.createElement(
    _reactIntl.IntlProvider,
    props.intl,
    props.children
  );
}

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    intl: store.intl
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(IntlWrapper);

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configureStore = configureStore;

var _redux = __webpack_require__(3);

var _reduxThunk = __webpack_require__(29);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(30);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DevTools = void 0; /**
                        * Main store function
                        */

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  DevTools = __webpack_require__(14).default;
}

function configureStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // Middleware and store enhancers
  var enhancers = [(0, _redux.applyMiddleware)(_reduxThunk2.default)];

  if (process.env.CLIENT && process.env.NODE_ENV === 'development') {
    // Enable DevTools only when rendering on client and during development.
    enhancers.push(window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument());
  }

  var store = (0, _redux.createStore)(_reducers2.default, initialState, _redux.compose.apply(undefined, enhancers));

  // For hot reloading reducers
  if (false) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', function () {
      var nextReducer = require('./reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(3);

var _IntlReducer = __webpack_require__(31);

var _IntlReducer2 = _interopRequireDefault(_IntlReducer);

var _LaneReducer = __webpack_require__(32);

var _LaneReducer2 = _interopRequireDefault(_LaneReducer);

var _NoteReducer = __webpack_require__(35);

var _NoteReducer2 = _interopRequireDefault(_NoteReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Combine all reducers into one root reducer
/**
 * Root Reducer
 */
exports.default = (0, _redux.combineReducers)({
  // app,
  lanes: _LaneReducer2.default,
  notes: _NoteReducer2.default,
  intl: _IntlReducer2.default
});

// Import Reducers
// import app from './modules/App/AppReducer';

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var initLocale = global.navigator && global.navigator.language || 'en';

var initialState = {
  locale: initLocale
};

var IntlReducer = function IntlReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {

    default:
      return state;
  }
};

exports.default = IntlReducer;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = lanes;

var _LaneActions = __webpack_require__(7);

var _NoteActions = __webpack_require__(4);

var _omit = __webpack_require__(13);

var _omit2 = _interopRequireDefault(_omit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = {};

function moveNotes(array, sourceNoteId, targetNoteId) {
  var sourceIndex = array.indexOf(sourceNoteId);
  var targetIndex = array.indexOf(targetNoteId);
  var arrayCopy = [].concat(_toConsumableArray(array));

  arrayCopy.splice(targetIndex, 0, arrayCopy.splice(sourceIndex, 1)[0]);
  return arrayCopy;
}

function lanes() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {

    case _LaneActions.CREATE_LANE:
    case _LaneActions.UPDATE_LANE:
      return _extends({}, state, _defineProperty({}, action.lane.id, action.lane));

    case _LaneActions.EDIT_LANE:
      {
        var lane = _extends({}, state[action.laneId], { editing: true });
        return _extends({}, state, _defineProperty({}, action.laneId, lane));
      }

    case _LaneActions.CREATE_LANES:
      return _extends({}, action.lanes);

    case _NoteActions.DELETE_NOTE:
      {
        var newLane = _extends({}, state[action.laneId]);
        newLane.notes = newLane.notes.filter(function (noteId) {
          return noteId !== action.noteId;
        });
        return _extends({}, state, _defineProperty({}, action.laneId, newLane));
      }

    case _NoteActions.CREATE_NOTE:
      {
        var _newLane = _extends({}, state[action.laneId]);
        _newLane.notes = _newLane.notes.concat(action.note.id);
        return _extends({}, state, _defineProperty({}, action.laneId, _newLane));
      }

    case _LaneActions.DELETE_LANE:
      return (0, _omit2.default)(state, action.laneId);

    case _NoteActions.MOVE_WITHIN_LANE:
      {
        var _newLane2 = _extends({}, state[action.laneId]);
        _newLane2.notes = moveNotes(_newLane2.notes, action.sourceId, action.targetId);
        return _extends({}, state, _defineProperty({}, action.laneId, _newLane2));
      }

    case _LaneActions.MOVE_BETWEEN_LANES:
      {
        var _extends7;

        var targetLane = _extends({}, state[action.targetLaneId]);
        targetLane.notes = [].concat(_toConsumableArray(targetLane.notes), [action.noteId]);
        var sourceLane = _extends({}, state[action.sourceLaneId]);
        sourceLane.notes = sourceLane.notes.filter(function (noteId) {
          return noteId !== action.noteId;
        });
        return _extends({}, state, (_extends7 = {}, _defineProperty(_extends7, action.targetLaneId, targetLane), _defineProperty(_extends7, action.sourceLaneId, sourceLane), _extends7));
      }

    case _LaneActions.REMOVE_FROM_LANE:
      {
        var _sourceLane = _extends({}, state[action.sourceLaneId]);
        _sourceLane.notes = _sourceLane.notes.filter(function (noteId) {
          return noteId !== action.noteId;
        });
        return _extends({}, state, _defineProperty({}, action.sourceLaneId, _sourceLane));
      }

    case _LaneActions.PUSH_TO_LANE:
      {
        var _targetLane = _extends({}, state[action.targetLaneId]);
        _targetLane.notes = [].concat(_toConsumableArray(_targetLane.notes), [action.noteId]);
        return _extends({}, state, _defineProperty({}, action.targetLaneId, _targetLane));
      }

    default:
      return state;
  }
}

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lanes = undefined;

var _normalizr = __webpack_require__(12);

var note = new _normalizr.schema.Entity('notes');

var lane = new _normalizr.schema.Entity('lanes', {
  notes: [note]
});

var lanes = exports.lanes = [lane];

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = notes;

var _NoteActions = __webpack_require__(4);

var _omit = __webpack_require__(13);

var _omit2 = _interopRequireDefault(_omit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {};

function notes() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {

    case _NoteActions.CREATE_NOTE:
    case _NoteActions.UPDATE_NOTE:
      return _extends({}, state, _defineProperty({}, action.note.id, action.note));

    case _NoteActions.EDIT_NOTE:
      var note = _extends({}, state[action.noteId], { editing: true });
      return _extends({}, state, _defineProperty({}, action.noteId, note));

    case _NoteActions.DELETE_NOTE:
      return (0, _omit2.default)(state, action.noteId);

    case _NoteActions.CREATE_NOTES:
      return _extends({}, action.notes);

    default:
      return state;
  }
}

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-log-monitor");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-dock-monitor");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }(); /* eslint-disable global-require */


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(15);

var _App = __webpack_require__(41);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// require.ensure polyfill for node
if (false) {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

/* Workaround for async react routes to work with react-hot-reloader till
  https://github.com/reactjs/react-router/issues/2182 and
  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
 */
if (process.env.NODE_ENV !== 'production') {
  // Require async routes only in development for react-hot-reloader to work.
  __webpack_require__(17);
}

// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
exports.default = _jsx(_reactRouter.Route, {
  path: '/',
  component: _App2.default
}, void 0, _jsx(_reactRouter.IndexRoute, {
  getComponent: function getComponent(nextState, cb) {
    new Promise(function(resolve) { resolve(); }).then((function (require) {
      cb(null, __webpack_require__(17).default);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }
}));

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = undefined;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(2);

var _App = {
  "container": "_4uEyKcd5WHob5qPzotT7"
};

var _App2 = _interopRequireDefault(_App);

var _reactHelmet = __webpack_require__(16);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _DevTools = __webpack_require__(14);

var _DevTools2 = _interopRequireDefault(_DevTools);

var _Header = __webpack_require__(42);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(43);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Import Style


// Import Components


// let DevTools;
// if (process.env.NODE_ENV === 'development') {
//   // eslint-disable-next-line global-require
//   DevTools = require('./components/DevTools').default;
// }

var _ref = _jsx(_DevTools2.default, {});

var _ref2 = _jsx(_Header2.default, {});

var _ref3 = _jsx(_Footer2.default, {});

var App = exports.App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = { isMounted: false };
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ isMounted: true }); // eslint-disable-line
    }
  }, {
    key: 'render',
    value: function render() {
      return _jsx('div', {}, void 0, this.state.isMounted && !window.devToolsExtension && process.env.NODE_ENV === 'development' && _ref, _jsx('div', {}, void 0, _jsx(_reactHelmet2.default, {
        title: 'Kanban MERN',
        titleTemplate: '%s - Kanban',
        meta: [{ charset: 'utf-8' }, {
          'http-equiv': 'X-UA-Compatible',
          content: 'IE=edge'
        }, {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        }]
      }), _ref2, _jsx('div', {
        className: _App2.default.container
      }, void 0, this.props.children), _ref3));
    }
  }]);

  return App;
}(_react.Component);

// Retrieve data from store as props
function mapStateToProps(store) {
  return {
    intl: store.intl
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(App);

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

// Import Style


exports.Header = Header;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Header = {
  "header": "_2sEZYfHlvDy9uXqVIXG1aM",
  "site-title": "UfFn6muOcOBjkVI5_yltp",
  "selected": "_3IRlmCpgSZBcTGVIGHvgaI",
  "add-post-button": "CkTz6a2gQTJjwXIEAlTSk"
};

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _jsx('h2', {}, void 0, 'Kanban App');

function Header(props, context) {

  return _jsx('div', {
    className: _Header2.default.header
  }, void 0, _ref, context.router.isActive('/', true));
}

Header.contextTypes = {
  router: _propTypes2.default.object
};

exports.default = Header;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

// Import Style


// Import Images


exports.Footer = Footer;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactIntl = __webpack_require__(9);

var _Footer = {
  "footer": "_3vPEi87A1wyh1iLR3bsBGf"
};

var _Footer2 = _interopRequireDefault(_Footer);

var _headerBk = '/' + "bbaeb5f32b7042f0def39648a1d111b9.png";

var _headerBk2 = _interopRequireDefault(_headerBk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _jsx('p', {}, void 0, '\xA9 2018 \xB7 endriu17 \xB7 WebDevPlus');

var _ref2 = _jsx('p', {}, void 0, _jsx('a', {
  href: 'https://github.com/endriu17',
  target: '_Blank'
}, void 0, 'Github repo'));

function Footer() {
  return _jsx('div', {
    style: { background: '#FFF url(' + _headerBk2.default + ') center' },
    className: _Footer2.default.footer
  }, void 0, _ref, _ref2);
}

exports.default = Footer;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _LaneContainer = __webpack_require__(45);

var _LaneContainer2 = _interopRequireDefault(_LaneContainer);

var _Lane = {
  "Lanes": "_2Y_QqmVIzhrUuT-ID8Se9Z",
  "Lane": "_1JW-vKAtWvVJOVz7cX6EPn",
  "LaneAddNote": "_3EsnfbRDa_Wlg48n7rQerK",
  "LaneDelete": "_1wAsu7meu5_M-ffOmFSO3T",
  "LaneHeader": "_1dzPmngQC3X1-3RGF-78Re",
  "LaneName": "_2OV2AmMF1fqnPkaEaYnjIk",
  "NoteContent": "_2sxiKJ8tzEvfErxphELPkq"
};

var _Lane2 = _interopRequireDefault(_Lane);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Lanes = function Lanes(_ref) {
  var lanes = _ref.lanes;

  return _jsx('div', {
    className: _Lane2.default.Lanes
  }, void 0, lanes.map(function (lane) {
    return _jsx(_LaneContainer2.default, {
      lane: lane
    }, lane.id);
  }));
};

exports.default = Lanes;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(2);

var _Lane = __webpack_require__(46);

var _Lane2 = _interopRequireDefault(_Lane);

var _redux = __webpack_require__(3);

var _reactDnd = __webpack_require__(8);

var _itemTypes = __webpack_require__(18);

var _itemTypes2 = _interopRequireDefault(_itemTypes);

var _LaneActions = __webpack_require__(7);

var _NoteActions = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noteTarget = {
  drop: function drop(targetProps, monitor) {
    var sourceProps = monitor.getItem();
    var noteId = sourceProps.id,
        sourceLaneId = sourceProps.laneId,
        task = sourceProps.task;

    if (targetProps.lane.id !== sourceLaneId) {
      targetProps.changeLanesRequest(sourceLaneId, targetProps.lane.id, noteId, task);
    }
  }
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    laneNotes: ownProps.lane.notes.map(function (noteId) {
      return state.notes[noteId];
    })
  };
};

var mapDispatchToProps = {
  editLane: _LaneActions.editLane,
  deleteLane: _LaneActions.deleteLaneRequest,
  updateLane: _LaneActions.updateLaneRequest,
  addNote: _NoteActions.createNoteRequest,
  createLane: _LaneActions.createLaneRequest,
  moveBetweenLanes: _LaneActions.moveBetweenLanes,
  removeFromLane: _LaneActions.removeFromLane,
  pushToLane: _LaneActions.pushToLane,
  changeLanesRequest: _LaneActions.changeLanesRequest
};

exports.default = (0, _redux.compose)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps), (0, _reactDnd.DropTarget)(_itemTypes2.default.NOTE, noteTarget, function (dragConnect) {
  return {
    connectDropTarget: dragConnect.dropTarget()
  };
}))(_Lane2.default);

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _NoteContainer = __webpack_require__(47);

var _NoteContainer2 = _interopRequireDefault(_NoteContainer);

var _Edit = __webpack_require__(19);

var _Edit2 = _interopRequireDefault(_Edit);

var _Lane = {
  "Lanes": "_2Y_QqmVIzhrUuT-ID8Se9Z",
  "Lane": "_1JW-vKAtWvVJOVz7cX6EPn",
  "LaneAddNote": "_3EsnfbRDa_Wlg48n7rQerK",
  "LaneDelete": "_1wAsu7meu5_M-ffOmFSO3T",
  "LaneHeader": "_1dzPmngQC3X1-3RGF-78Re",
  "LaneName": "_2OV2AmMF1fqnPkaEaYnjIk",
  "NoteContent": "_2sxiKJ8tzEvfErxphELPkq"
};

var _Lane2 = _interopRequireDefault(_Lane);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Lane = function Lane(props) {
  var connectDropTarget = props.connectDropTarget,
      lane = props.lane,
      laneNotes = props.laneNotes,
      updateLane = props.updateLane,
      addNote = props.addNote,
      deleteLane = props.deleteLane,
      editLane = props.editLane;

  var laneId = lane.id;

  return connectDropTarget(_jsx('div', {
    className: _Lane2.default.Lane
  }, void 0, _jsx('div', {
    className: _Lane2.default.LaneHeader
  }, void 0, _jsx(_Edit2.default, {
    className: _Lane2.default.LaneName,
    editing: lane.editing,
    value: lane.name,
    onValueClick: function onValueClick() {
      return editLane(lane.id);
    },
    onUpdate: function onUpdate(name) {
      return updateLane(_extends({}, lane, { name: name, editing: false }));
    }
  }), _jsx('div', {
    className: _Lane2.default.LaneDelete
  }, void 0, _jsx('span', {
    onClick: function onClick() {
      return deleteLane(laneId);
    }
  }, void 0, 'x'))), _jsx('div', {
    className: _Lane2.default.LaneAddNote
  }, void 0, _jsx('button', {
    onClick: function onClick() {
      return addNote({ task: 'New note' }, laneId);
    }
  }, void 0, 'Add new note')), _jsx(_NoteContainer2.default, {
    className: _Lane2.default.NoteContent,
    notes: laneNotes,
    laneId: laneId
  })));
};

exports.default = Lane;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(2);

var _Notes = __webpack_require__(48);

var _Notes2 = _interopRequireDefault(_Notes);

var _NoteActions = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapDispatchToProps = {
  editNote: _NoteActions.editNote,
  updateNote: _NoteActions.updateNoteRequest,
  deleteNote: _NoteActions.deleteNoteRequest,
  moveWithinLane: _NoteActions.moveWithinLane
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(_Notes2.default);

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Note = __webpack_require__(49);

var _Note2 = _interopRequireDefault(_Note);

var _Edit = __webpack_require__(19);

var _Edit2 = _interopRequireDefault(_Edit);

var _Notes = {
  "Notes": "_2uIinw193D4CaZ5HMhLJYt"
};

var _Notes2 = _interopRequireDefault(_Notes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Notes = function Notes(_ref) {
  var notes = _ref.notes,
      laneId = _ref.laneId,
      editNote = _ref.editNote,
      updateNote = _ref.updateNote,
      deleteNote = _ref.deleteNote,
      moveWithinLane = _ref.moveWithinLane;

  return _jsx('ul', {
    className: _Notes2.default.Notes
  }, void 0, notes.map(function (note) {
    return _jsx(_Note2.default, {
      id: note.id,
      editing: note.editing,
      laneId: laneId,
      task: note.task,
      moveWithinLane: moveWithinLane,
      _id: note._id
    }, note.id, _jsx(_Edit2.default, {
      editing: note.editing,
      value: note.task,
      onValueClick: function onValueClick() {
        return editNote(note.id);
      },
      onUpdate: function onUpdate(task) {
        return updateNote(_extends({}, note, {
          task: task,
          editing: false
        }));
      },
      onDelete: function onDelete() {
        return deleteNote(note.id, laneId);
      }
    }));
  }));
};

exports.default = Notes;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Note = {
  "Note": "_3XGbwdSk8krKF2LR-EvyUD"
};

var _Note2 = _interopRequireDefault(_Note);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDnd = __webpack_require__(8);

var _redux = __webpack_require__(3);

var _itemTypes = __webpack_require__(18);

var _itemTypes2 = _interopRequireDefault(_itemTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Note = function (_React$Component) {
  _inherits(Note, _React$Component);

  function Note(props) {
    _classCallCheck(this, Note);

    var _this = _possibleConstructorReturn(this, (Note.__proto__ || Object.getPrototypeOf(Note)).call(this, props));

    _this.props = props;
    return _this;
  }

  _createClass(Note, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          connectDragSource = _props.connectDragSource,
          connectDropTarget = _props.connectDropTarget,
          isDragging = _props.isDragging,
          editing = _props.editing,
          task = _props.task,
          children = _props.children;

      // jeśli edytujemy to przepuszczamy komponent (uniemożliwiamy tym samym przeciąganie komponentu edytowanego)

      var dragSource = editing ? function (a) {
        return a;
      } : connectDragSource;

      return dragSource(connectDropTarget(_jsx('li', {
        className: _Note2.default.Note,
        style: {
          opacity: isDragging ? 0 : 1
        }
      }, void 0, children)));
    }
  }]);

  return Note;
}(_react2.default.Component);

var noteSource = {
  beginDrag: function beginDrag(props) {
    return {
      id: props.id,
      laneId: props.laneId,
      task: props.task
    };
  },
  isDragging: function isDragging(props, monitor) {
    return props.id === monitor.getItem().id;
  }
};

var noteTarget = {
  hover: function hover(targetProps, monitor) {
    var sourceProps = monitor.getItem();

    if (targetProps.id !== sourceProps.id && targetProps.laneId === sourceProps.laneId) {
      targetProps.moveWithinLane(targetProps.laneId, targetProps.id, sourceProps.id);
    }
  }
};

exports.default = (0, _redux.compose)((0, _reactDnd.DragSource)(_itemTypes2.default.NOTE, noteSource, function (connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}), (0, _reactDnd.DropTarget)(_itemTypes2.default.NOTE, noteTarget, function (connect) {
  return {
    connectDropTarget: connect.dropTarget()
  };
}))(Note);

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("react-dnd-html5-backend");

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchComponentData = fetchComponentData;

var _promiseUtils = __webpack_require__(52);

function fetchComponentData(store, components, params) {
  var needs = components.reduce(function (prev, current) {
    return (current.need || []).concat((current.WrappedComponent && current.WrappedComponent.need !== current.need ? current.WrappedComponent.need : []) || []).concat(prev);
  }, []);

  return (0, _promiseUtils.sequence)(needs, function (need) {
    return store.dispatch(need(params, store.getState()));
  });
} /*
  Utility function to fetch required data for component to render in server side.
  This was inspired from https://github.com/caljrimmer/isomorphic-redux-app/blob/73e6e7d43ccd41e2eb557a70be79cebc494ee54b/src/common/api/fetchComponentDataBeforeRender.js
  */

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequence = sequence;
/**
 * Throw an array to it and a function which can generate promises
 * and it will call them sequentially, one after another
 */
function sequence(items, consumer) {
  var results = [];
  var runner = function runner() {
    var item = items.shift();
    if (item) {
      return consumer(item).then(function (result) {
        results.push(result);
      }).then(runner);
    }

    return Promise.resolve(results);
  };

  return runner();
}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(5);

var _lane = __webpack_require__(54);

var LaneController = _interopRequireWildcard(_lane);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var router = new _express.Router();

// Get all Lanes
router.route('/lanes').get(LaneController.getLanes);

// Add a new Lane
router.route('/lanes').post(LaneController.addLane);

// Delete a lane by laneId
router.route('/lanes/:laneId').delete(LaneController.deleteLane);

// Edit a lane 
router.route('/lanes/:laneId').put(LaneController.editLane);

exports.default = router;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSomething = getSomething;
exports.addLane = addLane;
exports.deleteLane = deleteLane;
exports.editLane = editLane;
exports.getLanes = getLanes;

var _lane = __webpack_require__(20);

var _lane2 = _interopRequireDefault(_lane);

var _uuid = __webpack_require__(21);

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getSomething(req, res) {
  return res.status(200).end();
}

function addLane(req, res) {
  if (!req.body.name) {
    res.status(403).end();
  }

  var newLane = new _lane2.default(req.body);

  newLane.id = (0, _uuid2.default)();
  newLane.save(function (err, saved) {
    if (err) {
      res.status(500).send(err);
    }
    res.json(saved);
  });
}

function deleteLane(req, res) {
  _lane2.default.findOne({ id: req.params.laneId }).exec(function (err, lane) {
    if (err) {
      res.status(500).send(err);
    }

    var notes = lane.notes;
    notes.forEach(function (note) {
      Note.findByIdAndRemove(note._id).exec(function () {});
    });
    lane.remove(function () {
      res.status(200).end();
    });
  });
}

function editLane(req, res) {
  _lane2.default.findOne({ id: req.params.laneId }).exec(function (err, lane) {
    if (err) {
      res.status(500).send(err);
    }
    lane.name = req.body.name;
    lane.save(function (err, saved) {
      if (err) {
        res.status(500).send(err);
      }
      res.json(saved);
    });
  });
}

function getLanes(req, res) {
  _lane2.default.find().exec(function (err, lanes) {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ lanes: lanes });
  });
}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(5);

var _note = __webpack_require__(56);

var NoteController = _interopRequireWildcard(_note);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var router = new _express.Router();

// Add a new Note
router.route('/notes').post(NoteController.addNote);

// Delete a note by noteId
router.route('/notes/:noteId').delete(NoteController.deleteNote);

// Edit a Note
router.route('/notes/:noteId').put(NoteController.editNote);

exports.default = router;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addNote = addNote;
exports.deleteNote = deleteNote;
exports.editNote = editNote;

var _lane = __webpack_require__(20);

var _lane2 = _interopRequireDefault(_lane);

var _note = __webpack_require__(57);

var _note2 = _interopRequireDefault(_note);

var _uuid = __webpack_require__(21);

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addNote(req, res) {
  var _req$body = req.body,
      note = _req$body.note,
      laneId = _req$body.laneId;


  if (!note || !note.task || !laneId) {
    res.status(400).end();
  }

  var newNote = new _note2.default({
    task: note.task
  });

  newNote.id = (0, _uuid2.default)();
  newNote.save(function (err, saved) {
    if (err) {
      res.status(500).send(err);
    }
    _lane2.default.findOne({ id: laneId }).then(function (lane) {
      lane.notes.push(saved);
      return lane.save();
    }).then(function () {
      res.json(saved);
    });
  });
}

function deleteNote(req, res) {
  _note2.default.findOne({ id: req.params.noteId }).exec(function (err, note) {
    var noteId = req.params.noteId;

    if (!note || !noteId || note === 'null') {
      res.status(400).end();
      return;
    }

    if (err) {
      res.status(500).send(err);
    }

    _lane2.default.findOne({ notes: note._id }).then(function (lane) {
      var updatedNotes = lane.notes.filter(function (note) {
        return note.id !== noteId;
      });
      lane.update({ notes: updatedNotes }, function (error) {
        if (error) {
          res.status(500).send(error);
        }
      });
    }).then(function () {
      note.remove();
    }).then(function () {
      res.status(200).end();
    });
  });
}

function editNote(req, res) {
  var noteId = req.params.noteId;
  var newTask = req.body.task;
  _note2.default.findOne({ id: noteId }).exec(function (err, note) {
    if (err) {
      res.status(500).send(err);
    }

    note.task = newTask;
    note.save(function (err, noteSaved) {
      if (err) {
        res.status(500).end();
      }
      res.json(noteSaved);
    }).catch(function (err) {
      console.log('err');
      console.log(err);
    });
  });
}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(6);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var noteSchema = new Schema({
  task: { type: 'String', required: true },
  id: { type: 'String', required: true, unique: true }
});

exports.default = _mongoose2.default.model('Note', noteSchema);

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var webpack = __webpack_require__(22);
var cssnext = __webpack_require__(59);
var postcssFocus = __webpack_require__(60);
var postcssReporter = __webpack_require__(61);

module.exports = {
  devtool: 'cheap-module-eval-source-map',

  entry: {
    app: ['eventsource-polyfill', 'webpack-hot-middleware/client', 'webpack/hot/only-dev-server', 'react-hot-loader/patch', './client/index.js'],
    vendor: ['react', 'react-dom']
  },

  output: {
    path: __dirname,
    filename: 'app.js',
    publicPath: 'http://0.0.0.0:8000/'
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['client', 'node_modules']
  },

  module: {
    rules: [{
      test: /\.s?css$/,
      exclude: /node_modules/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          localIdentName: '[name]__[local]__[hash:base64:5]',
          modules: true,
          importLoaders: 1,
          sourceMap: true
        }
      }, {
        loader: 'postcss-loader',
        options: {
          plugins: function plugins() {
            return [postcssFocus(), cssnext({
              browsers: ['last 2 versions', 'IE > 10']
            }), postcssReporter({
              clearMessages: true
            })];
          }
        }
      }]
    }, {
      test: /\.css$/,
      include: /node_modules/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.jsx*$/,
      exclude: [/node_modules/, /.+\.config.js/],
      use: 'babel-loader'
    }, {
      test: /\.(jpe?g|gif|png|svg)$/i,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }]
    }]
  },

  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: Infinity,
    filename: 'vendor.js'
  }), new webpack.DefinePlugin({
    'process.env': {
      CLIENT: JSON.stringify(true),
      'NODE_ENV': JSON.stringify('development')
    }
  })]
};
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("postcss-cssnext");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("postcss-focus");

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("postcss-reporter");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("webpack-hot-middleware");

/***/ })
/******/ ]);