"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultStyle = function defaultStyle(theme) {
  return {
    typography: _defineProperty({
      fontSize: '1.1em'
    }, theme.breakpoints.up('sm'), {
      fontSize: '1.25em'
    })
  };
};

var Header = function Header(_ref) {
  var style = _ref.style,
      text = _ref.text,
      classes = _ref.classes;
  return _react["default"].createElement(_core.Typography, {
    className: classes.typography,
    style: style,
    component: "h5",
    variant: "h6",
    color: "inherit"
  }, text);
};

Header.propTypes = process.env.NODE_ENV !== "production" ? {
  text: _propTypes.PropTypes.string,
  style: _propTypes.PropTypes.object
} : {};
Header.defaultProps = {
  text: null,
  style: {}
};

var _default = (0, _styles.withStyles)(defaultStyle)(Header);

exports["default"] = _default;