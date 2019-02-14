"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _core = require("@material-ui/core");

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
  return _react.default.createElement(_core.IconButton, {
    style: (0, _extends2.default)({}, defaultStyle, style),
    onClick: onClick,
    color: "inherit"
  }, icon);
};

CloseButton.propTypes = {
  icon: _propTypes.PropTypes.element,
  onClick: _propTypes.PropTypes.func,
  style: _propTypes.PropTypes.object
};
CloseButton.defaultProps = {
  icon: null,
  onClick: function onClick() {},
  style: {}
};
var _default = CloseButton;
exports.default = _default;