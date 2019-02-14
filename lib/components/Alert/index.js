"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = require("react");

var _propTypes = require("prop-types");

var _AlertsProvider = require("../../context/AlertsProvider");

var _ = require("../..");

var _types = _interopRequireDefault(require("../../utils/types"));

var Alert =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Alert, _Component);

  function Alert() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Alert);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Alert)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {};

    _this.extractInstanceSettingsFromProps = function () {
      var type = _this.props.type;
      var instanceSettings = (0, _defineProperty2.default)({}, type, {});

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
    };

    return _this;
  }

  (0, _createClass2.default)(Alert, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
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
          case _types.default.info:
            info(header, message, onClose, settings);
            break;

          case _types.default.success:
            success(header, message, onClose, settings);
            break;

          case _types.default.warning:
            warning(header, message, onClose, settings);
            break;

          case _types.default.error:
            error(header, message, onClose, settings);
            break;

          default:
            info(header, message, onClose, settings);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);
  return Alert;
}(_react.Component);

;
Alert.contextType = _AlertsProvider.AlertsContext;
Alert.propTypes = {
  open: _propTypes.PropTypes.bool,
  onClose: _propTypes.PropTypes.func,
  type: _propTypes.PropTypes.oneOf([_types.default.info, _types.default.success, _types.default.warning, _types.default.error]),
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
};
Alert.defaultProps = {
  open: false,
  onClose: function onClose() {},
  type: _types.default.info,
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
exports.default = _default;