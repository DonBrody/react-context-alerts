"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _deepmerge = _interopRequireDefault(require("deepmerge"));

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(customTheme) {
  var defaultTheme = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _index["default"];
  return customTheme ? (0, _deepmerge["default"])(defaultTheme, customTheme) : defaultTheme;
};

exports["default"] = _default;