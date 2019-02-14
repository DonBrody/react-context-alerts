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
  paddingTop: 16,
  paddingBottom: 16
};
var textSpacing = {
  paddingTop: 1,
  paddingBottom: 1
};

var Body = function Body(_ref) {
  var header = _ref.header,
      message = _ref.message,
      style = _ref.style;
  return _react.default.createElement("div", {
    style: (0, _extends2.default)({}, defaultStyle, style)
  }, header && _react.default.createElement("div", {
    style: textSpacing
  }, header), message && _react.default.createElement("div", {
    style: textSpacing
  }, message));
};

Body.propTypes = {
  header: _propTypes.PropTypes.element,
  message: _propTypes.PropTypes.element,
  style: _propTypes.PropTypes.object
};
Body.defaultProps = {
  header: null,
  message: null,
  style: {}
};
var _default = Body;
exports.default = _default;