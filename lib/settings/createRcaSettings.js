"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _deepmerge = _interopRequireDefault(require("deepmerge"));

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(customSettings) {
  var defaultSettings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _index["default"];
  return customSettings ? (0, _deepmerge["default"])(defaultSettings, customSettings) : defaultSettings;
};

exports["default"] = _default;