"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _deepmerge = _interopRequireDefault(require("deepmerge"));

var _theme = _interopRequireDefault(require("../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(customTheme) {
  return customTheme ? (0, _deepmerge["default"])(_theme["default"], customTheme) : _theme["default"];
};

exports["default"] = _default;