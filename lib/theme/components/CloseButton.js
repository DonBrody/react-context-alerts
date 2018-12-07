"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultStyle = {
  position: 'absolute',
  top: 1,
  right: 1
};

var CloseButton = function CloseButton(_ref) {
  var icon = _ref.icon,
      onClick = _ref.onClick,
      style = _ref.style,
      classes = _ref.classes;
  return _react["default"].createElement(_core.IconButton, {
    style: _objectSpread({}, defaultStyle, style),
    onClick: onClick,
    color: "inherit"
  }, icon);
};

CloseButton.propTypes = process.env.NODE_ENV !== "production" ? {
  icon: _propTypes.PropTypes.element,
  onClick: _propTypes.PropTypes.func,
  style: _propTypes.PropTypes.object
} : {};
CloseButton.defaultProps = {
  icon: null,
  onClick: function () {
    function onClick() {}

    return onClick;
  }(),
  style: {}
};
var _default = CloseButton;
exports["default"] = _default;