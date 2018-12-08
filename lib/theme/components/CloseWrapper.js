"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultStyle = {
  position: 'relative',
  display: 'flex',
  minWidth: '100%',
  minHeight: '100%'
};

var CloseWrapper = function CloseWrapper(_ref) {
  var child = _ref.child,
      style = _ref.style;
  return _react["default"].createElement("div", {
    style: _objectSpread({}, defaultStyle, style)
  }, child);
};

CloseWrapper.propTypes = process.env.NODE_ENV !== "production" ? {
  child: _propTypes.PropTypes.element,
  style: _propTypes.PropTypes.object
} : {};
CloseWrapper.defaultProps = {
  child: null,
  style: {}
};
var _default = CloseWrapper;
exports["default"] = _default;