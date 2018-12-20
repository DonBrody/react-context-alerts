"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _propTypes = require("prop-types");

var _AlertsProvider = require("../../context/AlertsProvider");

var _ = require("../..");

var _types = _interopRequireDefault(require("../../utils/types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function () { function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); } return _getPrototypeOf; }(); return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function () { function _setPrototypeOf(o, p) { o.__proto__ = p; return o; } return _setPrototypeOf; }(); return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Alert =
/*#__PURE__*/
function (_Component) {
  _inherits(Alert, _Component);

  function Alert() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Alert);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Alert)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "extractInstanceSettingsFromProps", function () {
      var type = _this.props.type;

      var instanceSettings = _defineProperty({}, type, {});

      if (_this.props.timeout !== undefined) {
        instanceSettings.timeout = _this.props.timeout;
        instanceSettings[type].timeout = _this.props.timeout;
      }

      if (_this.props.showAdornment !== undefined) {
        instanceSettings.showAdornment = _this.props.showAdornment;
        instanceSettings[type].showAdornment = _this.props.showAdornment;
      }

      if (_this.props.showActionButton !== undefined) {
        instanceSettings.showActionButton = _this.props.showActionButton;
        instanceSettings[type].showActionButton = _this.props.showActionButton;
      }

      if (_this.props.showCloseButton !== undefined) {
        instanceSettings.showCloseButton = _this.props.showCloseButton;
        instanceSettings[type].showCloseButton = _this.props.showCloseButton;
      }

      if (_this.props.showProgressBar !== undefined) {
        instanceSettings.showProgressBar = _this.props.showProgressBar;
        instanceSettings[type].showProgressBar = _this.props.showProgressBar;
      }

      if (_this.props.enableClickAwayListener !== undefined) {
        instanceSettings.enableClickAwayListener = _this.props.enableClickAwayListener;
        instanceSettings[type].enableClickAwayListener = _this.props.enableClickAwayListener;
      }

      if (_this.props.actionText !== undefined) {
        instanceSettings.actionText = _this.props.actionText;
        instanceSettings[type].actionText = _this.props.actionText;
      }

      if (_this.props.actionClickListener !== undefined) {
        instanceSettings.actionClickListener = _this.props.actionClickListener;
        instanceSettings[type].actionClickListener = _this.props.actionClickListener;
      }

      return instanceSettings;
    });

    return _this;
  }

  _createClass(Alert, [{
    key: "componentDidUpdate",
    value: function () {
      function componentDidUpdate(prevProps) {
        var _this$context = this.context,
            info = _this$context.info,
            success = _this$context.success,
            warning = _this$context.warning,
            error = _this$context.error;
        var _this$props = this.props,
            open = _this$props.open,
            onClose = _this$props.onClose,
            type = _this$props.type,
            header = _this$props.header,
            message = _this$props.message;
        var settings = (0, _.createRcaSettings)(this.extractInstanceSettingsFromProps(), this.context.globalSettings());

        if (open && !prevProps.open) {
          switch (type) {
            case _types["default"].info:
              info(header, message, onClose, settings);
              break;

            case _types["default"].success:
              success(header, message, onClose, settings);
              break;

            case _types["default"].warning:
              warning(header, message, onClose, settings);
              break;

            case _types["default"].error:
              error(header, message, onClose, settings);
              break;

            default:
              info(header, message, onClose, settings);
          }
        }
      }

      return componentDidUpdate;
    }()
  }, {
    key: "render",
    value: function () {
      function render() {
        return null;
      }

      return render;
    }()
  }]);

  return Alert;
}(_react.Component);

;
Alert.contextType = _AlertsProvider.AlertsContext;
Alert.propTypes = process.env.NODE_ENV !== "production" ? {
  open: _propTypes.PropTypes.bool,
  onClose: _propTypes.PropTypes.func,
  type: _propTypes.PropTypes.oneOf([_types["default"].info, _types["default"].success, _types["default"].warning, _types["default"].error]),
  header: _propTypes.PropTypes.string,
  message: _propTypes.PropTypes.string,
  timeout: _propTypes.PropTypes.number,
  showAdornment: _propTypes.PropTypes.bool,
  showActionButton: _propTypes.PropTypes.bool,
  showCloseButton: _propTypes.PropTypes.bool,
  showProgressBar: _propTypes.PropTypes.bool,
  enableClickAwayListener: _propTypes.PropTypes.bool,
  actionText: _propTypes.PropTypes.string,
  actionClickListener: _propTypes.PropTypes.func
} : {};
Alert.defaultProps = {
  open: false,
  onClose: function () {
    function onClose() {}

    return onClose;
  }(),
  type: _types["default"].info,
  header: null,
  message: null,
  timeout: undefined,
  showAdornment: undefined,
  showActionButton: undefined,
  showCloseButton: undefined,
  showProgressBar: undefined,
  enableClickAwayListener: undefined,
  actionText: undefined,
  actionClickListener: undefined
};
var _default = Alert;
exports["default"] = _default;