"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _core = require("@material-ui/core");

var _styles = require("@material-ui/core/styles");

var defaultStyle = function defaultStyle(theme) {
  return {
    button: (0, _defineProperty2.default)({
      fontSize: '0.65em',
      fontWeight: 'bold'
    }, theme.breakpoints.up('sm'), {
      fontSize: '0.75em'
    })
  };
};

var ActionButton = function ActionButton(_ref) {
  var text = _ref.text,
      onClick = _ref.onClick,
      style = _ref.style,
      classes = _ref.classes;
  return _react.default.createElement(_core.Button, {
    className: classes.button,
    style: style,
    color: "inherit",
    onClick: onClick,
    variant: "text"
  }, text);
};

ActionButton.propTypes = {
  text: _propTypes.PropTypes.string,
  onClick: _propTypes.PropTypes.func,
  style: _propTypes.PropTypes.object
};
ActionButton.defaultProps = {
  text: '',
  onClick: function onClick() {},
  style: {}
};

var _default = (0, _styles.withStyles)(defaultStyle)(ActionButton);

exports.default = _default;