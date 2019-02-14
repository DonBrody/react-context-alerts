"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var defaultStyle = {
  display: 'flex',
  alignItems: 'center',
  minWidth: '100%',
  minHeight: '100%',
  wordWrap: 'break-word'
};

var BodyWrapper = function BodyWrapper(_ref) {
  var child = _ref.child,
      style = _ref.style;
  return _react.default.createElement("div", {
    style: (0, _extends2.default)({}, defaultStyle, style)
  }, child);
};

BodyWrapper.propTypes = {
  child: _propTypes.PropTypes.element,
  style: _propTypes.PropTypes.object
};
BodyWrapper.defaultProps = {
  child: null,
  style: {}
};
var _default = BodyWrapper;
exports.default = _default;