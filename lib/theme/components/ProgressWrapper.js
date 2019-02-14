"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _styles = require("@material-ui/core/styles");

var _colors = _interopRequireDefault(require("../../utils/colors"));

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
  return _react.default.createElement("div", {
    style: (0, _extends2.default)({}, defaultStyle, style)
  }, _react.default.createElement("div", {
    className: classes.barContainer,
    style: {
      background: containerColor
    }
  }), child);
};

ProgressWrapper.propTypes = {
  containerColor: _propTypes.PropTypes.string,
  child: _propTypes.PropTypes.element,
  style: _propTypes.PropTypes.object
};
ProgressWrapper.defaultProps = {
  containerColor: _colors.default.info.light,
  child: null,
  style: {}
};

var _default = (0, _styles.withStyles)(styles)(ProgressWrapper);

exports.default = _default;