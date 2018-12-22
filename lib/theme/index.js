"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _icons = require("@material-ui/icons");

var _Header = _interopRequireDefault(require("./components/Header"));

var _Message = _interopRequireDefault(require("./components/Message"));

var _Body = _interopRequireDefault(require("./components/Body"));

var _BodyWrapper = _interopRequireDefault(require("./components/BodyWrapper"));

var _AdornmentWrapper = _interopRequireDefault(require("./components/AdornmentWrapper"));

var _ActionWrapper = _interopRequireDefault(require("./components/ActionWrapper"));

var _ActionButton = _interopRequireDefault(require("./components/ActionButton"));

var _CloseWrapper = _interopRequireDefault(require("./components/CloseWrapper"));

var _CloseButton = _interopRequireDefault(require("./components/CloseButton"));

var _ProgressBar = _interopRequireDefault(require("./components/ProgressBar"));

var _ProgressWrapper = _interopRequireDefault(require("./components/ProgressWrapper"));

var _colors = _interopRequireDefault(require("../utils/colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var createHeader = function createHeader(text) {
  var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _react["default"].createElement(_Header["default"], {
    text: text,
    style: style
  });
};

var createMessage = function createMessage(text) {
  var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _react["default"].createElement(_Message["default"], {
    text: text,
    style: style
  });
};

var createBodyContent = function createBodyContent(header, message) {
  var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return _react["default"].createElement(_Body["default"], {
    header: header,
    message: message,
    style: style
  });
};

var createBodyWrapper = function createBodyWrapper(child) {
  var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _react["default"].createElement(_BodyWrapper["default"], {
    child: child,
    style: style
  });
};

var createAdornmentWrapper = function createAdornmentWrapper(child) {
  var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _react["default"].createElement(_AdornmentWrapper["default"], {
    child: child,
    style: style
  });
};

var createActionWrapper = function createActionWrapper(child) {
  var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _react["default"].createElement(_ActionWrapper["default"], {
    child: child,
    style: style
  });
};

var createActionButton = function createActionButton(text, onClick) {
  var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return _react["default"].createElement(_ActionButton["default"], {
    text: text,
    onClick: onClick,
    style: style
  });
};

var createCloseWrapper = function createCloseWrapper(child) {
  var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return _react["default"].createElement(_CloseWrapper["default"], {
    child: child,
    style: style
  });
};

var createCloseButton = function createCloseButton(icon, onClick) {
  var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return _react["default"].createElement(_CloseButton["default"], {
    icon: icon,
    onClick: onClick,
    style: style
  });
};

var createProgressBar = function createProgressBar(progressColor, timeout) {
  var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return _react["default"].createElement(_ProgressBar["default"], {
    progressColor: progressColor,
    timeout: timeout,
    style: style
  });
};

var createProgressWrapper = function createProgressWrapper(containerColor, child) {
  var style = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return _react["default"].createElement(_ProgressWrapper["default"], {
    containerColor: containerColor,
    child: child,
    style: style
  });
};

var baseElements = {
  body: {
    wrapper: createBodyWrapper,
    content: createBodyContent,
    header: createHeader,
    message: createMessage
  },
  adornment: {
    wrapper: createAdornmentWrapper
  },
  action: {
    wrapper: createActionWrapper,
    button: createActionButton
  },
  close: {
    wrapper: createCloseWrapper,
    button: createCloseButton,
    icon: _react["default"].createElement(_icons.Close, {
      style: {
        width: 15,
        height: 15
      }
    })
  },
  progress: {
    wrapper: createProgressWrapper,
    bar: createProgressBar
  }
};
var closePalette = {
  background: _colors["default"].body.background,
  color: _colors["default"].body.color
};
var _default = {
  info: {
    body: _objectSpread({
      background: _colors["default"].body.background,
      color: _colors["default"].body.color,
      headerColor: null,
      messageColor: null
    }, baseElements.body),
    adornment: _objectSpread({
      background: _colors["default"].info.primary,
      color: _colors["default"].adornment.color,
      icon: _react["default"].createElement(_icons.Info, null)
    }, baseElements.adornment),
    action: _objectSpread({
      background: _colors["default"].body.background,
      color: _colors["default"].info.primary
    }, baseElements.action),
    close: _objectSpread({}, closePalette, baseElements.close),
    progress: _objectSpread({
      containerColor: _colors["default"].info.light,
      barColor: _colors["default"].info.primary
    }, baseElements.progress)
  },
  success: {
    body: _objectSpread({
      background: _colors["default"].body.background,
      color: _colors["default"].body.color,
      headerColor: null,
      messageColor: null
    }, baseElements.body),
    adornment: _objectSpread({
      background: _colors["default"].success.primary,
      color: _colors["default"].adornment.color,
      icon: _react["default"].createElement(_icons.CheckCircle, null)
    }, baseElements.adornment),
    action: _objectSpread({
      background: _colors["default"].body.background,
      color: _colors["default"].success.primary
    }, baseElements.action),
    close: _objectSpread({}, closePalette, baseElements.close),
    progress: _objectSpread({
      containerColor: _colors["default"].success.light,
      barColor: _colors["default"].success.primary
    }, baseElements.progress)
  },
  warning: {
    body: _objectSpread({
      background: _colors["default"].body.background,
      color: _colors["default"].body.color,
      headerColor: null,
      messageColor: null
    }, baseElements.body),
    adornment: _objectSpread({
      background: _colors["default"].warning.primary,
      color: _colors["default"].adornment.color,
      icon: _react["default"].createElement(_icons.Warning, null)
    }, baseElements.adornment),
    action: _objectSpread({
      background: _colors["default"].body.background,
      color: _colors["default"].warning.primary
    }, baseElements.action),
    close: _objectSpread({}, closePalette, baseElements.close),
    progress: _objectSpread({
      containerColor: _colors["default"].warning.light,
      barColor: _colors["default"].warning.primary
    }, baseElements.progress)
  },
  error: {
    body: _objectSpread({
      background: _colors["default"].body.background,
      color: _colors["default"].body.color,
      headerColor: null,
      messageColor: null
    }, baseElements.body),
    adornment: _objectSpread({
      background: _colors["default"].error.primary,
      color: _colors["default"].adornment.color,
      icon: _react["default"].createElement(_icons.Error, null)
    }, baseElements.adornment),
    action: _objectSpread({
      background: _colors["default"].body.background,
      color: _colors["default"].error.primary,
      fontWeight: 'bold'
    }, baseElements.action),
    close: _objectSpread({}, closePalette, baseElements.close),
    progress: _objectSpread({
      containerColor: _colors["default"].error.light,
      barColor: _colors["default"].error.primary
    }, baseElements.progress)
  }
};
exports["default"] = _default;