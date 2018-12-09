"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _styles = require("@material-ui/core/styles");

var _colors = _interopRequireDefault(require("../../utils/colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  barContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
};
var defaultStyle = {
  position: 'relative',
  width: '100%',
  height: 4
};

var ProgressWrapper = function ProgressWrapper(_ref) {
  var containerColor = _ref.containerColor,
      child = _ref.child,
      style = _ref.style,
      classes = _ref.classes;
  return _react["default"].createElement("div", {
    style: _objectSpread({}, defaultStyle, style)
  }, _react["default"].createElement("div", {
    className: classes.barContainer,
    style: {
      background: containerColor
    }
  }), child);
};

ProgressWrapper.propTypes = process.env.NODE_ENV !== "production" ? {
  containerColor: _propTypes.PropTypes.string,
  child: _propTypes.PropTypes.element,
  style: _propTypes.PropTypes.object
} : {};
ProgressWrapper.defaultProps = {
  containerColor: _colors["default"].info.light,
  child: null,
  style: {}
};

var _default = (0, _styles.withStyles)(styles)(ProgressWrapper);

exports["default"] = _default;