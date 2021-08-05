"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DonutConsumer = exports.DonutCursorProvider = exports.CursorStore = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDeviceDetect = require("react-device-detect");

var _defaultConfig = require("./defaultConfig");

var _cursor = require("./cursor");

var _globalStyles = require("./globalStyles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CursorStore = /*#__PURE__*/(0, _react.createContext)();
exports.CursorStore = CursorStore;

var DonutReducer = function DonutReducer(state, action) {
  switch (action.type) {
    case 'base':
      return _objectSpread(_objectSpread({}, state), {}, {
        state: action.type,
        activeClass: ''
      });

    case 'hover':
      return _objectSpread(_objectSpread({}, state), {}, {
        state: action.type,
        activeClass: action["class"]
      });

    default:
      break;
  }
};

var DonutCursorProvider = function DonutCursorProvider(_ref) {
  var children = _ref.children,
      base = _ref.base,
      hover = _ref.hover,
      classArr = _ref.classArr;

  var _useReducer = (0, _react.useReducer)(DonutReducer, {
    classNamesArr: Object.keys(classArr),
    classConfigArr: classArr,
    state: 'base',
    activeClass: ''
  }),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  base = _objectSpread(_objectSpread({}, _defaultConfig.defaultConfig.base), base);
  hover = _objectSpread(_objectSpread({}, _defaultConfig.defaultConfig.hover), hover);
  var cursor = _reactDeviceDetect.isMobile ? null : /*#__PURE__*/_react["default"].createElement(_cursor.Cursor, {
    base: base,
    hover: hover
  });
  return /*#__PURE__*/_react["default"].createElement(_globalStyles.CursorWrapper, null, /*#__PURE__*/_react["default"].createElement(_globalStyles.GlobalStyle, null), /*#__PURE__*/_react["default"].createElement(CursorStore.Provider, {
    value: {
      state: state,
      dispatch: dispatch
    },
    initialState: state
  }, children, cursor));
};

exports.DonutCursorProvider = DonutCursorProvider;

var DonutConsumer = function DonutConsumer(_ref2) {
  var children = _ref2.children;

  var InsertDonutsIntoChildren = function InsertDonutsIntoChildren(children, state, dispatch) {
    return _react["default"].Children.map(children, function (child) {
      if ( /*#__PURE__*/_react["default"].isValidElement(child)) {
        return /*#__PURE__*/_react["default"].cloneElement(child, DonutElementProps(child, state), !!child.props && !!child.props.children ? InsertDonutsIntoChildren(child.props.children, state, dispatch) : child.props.children);
      }

      return child;
    });
  };

  var DonutElementProps = function DonutElementProps(child, state) {
    if (!!child.props && !!child.props.className && child.props.className.indexOf('donut-hover') >= 0) {
      var userDefinedClass = '';
      var classNames = child.props.className.split(' ');
      classNames.forEach(function (ele, i) {
        if (state.state.classNamesArr.includes(ele)) {
          userDefinedClass = ele;
          return;
        }
      });
      return _objectSpread(_objectSpread({}, child.props), {}, {
        onMouseEnter: function onMouseEnter() {
          state.dispatch({
            type: 'hover',
            "class": userDefinedClass
          });
        },
        onMouseLeave: function onMouseLeave() {
          state.dispatch({
            type: 'base'
          });
        }
      });
    } else {
      return child.props;
    }
  };

  return /*#__PURE__*/_react["default"].createElement(CursorStore.Consumer, null, function (state, dispatch) {
    {
      return _reactDeviceDetect.isBrowser ? InsertDonutsIntoChildren(children, state, dispatch) : children;
    }
  });
};

exports.DonutConsumer = DonutConsumer;