"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _styles = require("@material-ui/core/styles");

var _icons = require("@material-ui/icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var styles = {
  wrapper: {
    display: 'flex',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    bottom: 0,
    left: 0,
    width: 50,
    textAlign: 'center'
  },
  icon: {
    width: 30,
    height: 30
  }
};

var IndicatorIcon = function IndicatorIcon(props) {
  var palette = props.theme.palette;
  var info = palette.info.adornment;
  var success = palette.success.adornment;
  var warning = palette.warning.adornment;
  var error = palette.error.adornment;
  var icon;
  var styles;

  switch (props.type) {
    case 'info':
      styles = {
        background: info.background,
        color: info.color
      };
      icon = _react["default"].createElement(_icons.Info, {
        className: props.classes.icon
      });
      break;

    case 'success':
      styles = {
        background: success.background,
        color: success.color
      };
      icon = _react["default"].createElement(_icons.CheckCircle, {
        className: props.classes.icon
      });
      break;

    case 'warning':
      styles = {
        background: warning.background,
        color: warning.color
      };
      icon = _react["default"].createElement(_icons.Warning, {
        className: props.classes.icon
      });
      break;

    case 'error':
      styles = {
        background: error.background,
        color: error.color
      };
      icon = _react["default"].createElement(_icons.Error, {
        className: props.classes.icon
      });
      break;

    default:
      styles = {
        background: info.background,
        color: info.color
      };
      icon = null;
  }

  return _react["default"].createElement("div", {
    style: styles,
    className: props.classes.wrapper
  }, icon);
};

IndicatorIcon.propTypes = process.env.NODE_ENV !== "production" ? {
  type: _propTypes.PropTypes.oneOf(['info', 'success', 'warning', 'error']).isRequired,
  theme: _propTypes.PropTypes.object.isRequired
} : {};

var _default = (0, _styles.withStyles)(styles)(IndicatorIcon);

exports["default"] = _default;