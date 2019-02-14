"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _deepmerge = _interopRequireDefault(require("deepmerge"));

var _index = _interopRequireDefault(require("./index"));

var _default = function _default(customSettings) {
  var defaultSettings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _index.default;
  var settings = customSettings ? (0, _deepmerge.default)(defaultSettings, customSettings) : defaultSettings;
  return settings;
};

exports.default = _default;