"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.keys = void 0;
var defaultSettings = {
  timeout: 5000,
  showAdornment: true,
  showActionButton: false,
  showCloseButton: false,
  showProgressBar: false,
  enableClickAwayListener: false,
  actionText: null,
  actionClickListener: null,
  info: {
    /* Info alert overrides */
  },
  success: {
    /* Success alert overrides */
  },
  warning: {
    /* Warning alert overrides */
  },
  error: {
    /* Error alert overrides */
  }
};
var keysObj = {};
Object.keys(defaultSettings).forEach(function (key) {
  keysObj[key] = key;
});
var keys = Object.freeze(keysObj);
exports.keys = keys;
var _default = defaultSettings;
exports.default = _default;