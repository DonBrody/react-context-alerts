"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AlertsConsumer = exports.AlertsContext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

var _styles = require("@material-ui/core/styles");

var _AlertController = _interopRequireDefault(require("../components/AlertController"));

var _theme = _interopRequireDefault(require("../theme"));

var _settings = _interopRequireDefault(require("../settings"));

var _createRcaSettings = _interopRequireDefault(require("../settings/createRcaSettings"));

var _createRcaTheme = _interopRequireDefault(require("../theme/createRcaTheme"));

var _types = _interopRequireDefault(require("../utils/types"));

var defaultStyles = {
  width: '80%',
  maxWidth: 450,
  minWidth: 320,
  position: 'fixed',
  top: 75,
  right: 16,
  zIndex: 100000
};
var muiTheme = (0, _styles.createMuiTheme)({
  typography: {
    useNextVariants: true
  }
});
var DEFAULT_STATE = {
  alerts: [],
  theme: _theme.default,
  settings: _settings.default
};

var AlertsContext = _react.default.createContext(DEFAULT_STATE);

exports.AlertsContext = AlertsContext;
var AlertsConsumer = AlertsContext.Consumer;
exports.AlertsConsumer = AlertsConsumer;
var count = 0;

var AlertsProvider =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(AlertsProvider, _Component);

  function AlertsProvider() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, AlertsProvider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(AlertsProvider)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = DEFAULT_STATE;

    _this.onThemePropsUpdated = function (prevTheme, theme) {
      if (theme !== prevTheme) {
        _this.setState({
          theme: _this.createCustomTheme(theme)
        });
      }
    };

    _this.onSettingsPropsUpdated = function (prevSettings, settings) {
      if (settings !== prevSettings) {
        _this.setState({
          settings: _this.createCustomSettings(settings)
        });
      }
    };

    _this.onAlertClose = function (alert) {
      _this.setState({
        alerts: _this.state.alerts.filter(function (current) {
          return alert !== current;
        })
      }, alert.callback);
    };

    _this.createAlertObject = function (type, header, message, callback, instanceSettings) {
      return {
        id: count++,
        type: type,
        header: header,
        message: message,
        callback: callback,
        settings: _this.createCustomSettings(instanceSettings)
      };
    };

    _this.createCustomTheme = function (overrides) {
      return (0, _createRcaTheme.default)(overrides, _this.state.theme);
    };

    _this.createCustomSettings = function (overrides) {
      return (0, _createRcaSettings.default)(overrides, _this.state.settings);
    };

    return _this;
  }

  (0, _createClass2.default)(AlertsProvider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.onThemePropsUpdated(null, this.props.theme);
      this.onSettingsPropsUpdated(null, this.props.settings);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      this.onThemePropsUpdated(prevProps.theme, this.props.theme);
      this.onSettingsPropsUpdated(prevProps.settings, this.props.settings);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var theme = this.state.theme;
      return _react.default.createElement(AlertsContext.Provider, {
        value: {
          info: function info(header, message) {
            var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var settings = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

            var info = _this2.createAlertObject(_types.default.info, header, message, callback, settings);

            _this2.setState({
              alerts: [].concat((0, _toConsumableArray2.default)(_this2.state.alerts), [info])
            });
          },
          success: function success(header, message) {
            var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var settings = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

            var success = _this2.createAlertObject(_types.default.success, header, message, callback, settings);

            _this2.setState({
              alerts: [].concat((0, _toConsumableArray2.default)(_this2.state.alerts), [success])
            });
          },
          warning: function warning(header, message) {
            var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var settings = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

            var warning = _this2.createAlertObject(_types.default.warning, header, message, callback, settings);

            _this2.setState({
              alerts: [].concat((0, _toConsumableArray2.default)(_this2.state.alerts), [warning])
            });
          },
          error: function error(header, message) {
            var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
            var settings = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

            var error = _this2.createAlertObject(_types.default.error, header, message, callback, settings);

            _this2.setState({
              alerts: [].concat((0, _toConsumableArray2.default)(_this2.state.alerts), [error])
            });
          },
          updateGlobalTheme: function updateGlobalTheme() {
            var theme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

            _this2.setState({
              theme: _this2.createCustomTheme(theme)
            }, function () {
              callback();
            });
          },
          updateGlobalSettings: function updateGlobalSettings() {
            var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

            _this2.setState({
              settings: _this2.createCustomSettings(settings)
            }, function () {
              callback();
            });
          },
          globalTheme: function globalTheme() {
            return _this2.state.theme;
          },
          globalSettings: function globalSettings() {
            return _this2.state.settings;
          }
        }
      }, this.props.children, _react.default.createElement(_styles.MuiThemeProvider, {
        theme: muiTheme
      }, _react.default.createElement("aside", {
        style: (0, _extends2.default)({}, defaultStyles, this.props.style)
      }, this.state.alerts.map(function (alert) {
        return _react.default.createElement(_AlertController.default, {
          key: alert.id,
          id: alert.id,
          header: alert.header,
          message: alert.message,
          type: alert.type,
          onClose: function onClose() {
            return _this2.onAlertClose(alert);
          },
          theme: theme,
          settings: alert.settings
        });
      }))));
    }
  }]);
  return AlertsProvider;
}(_react.Component);

;
AlertsProvider.propTypes = {
  theme: _propTypes.PropTypes.object,
  settings: _propTypes.PropTypes.object,
  style: _propTypes.PropTypes.object
};
AlertsProvider.defaultProps = {
  theme: _theme.default,
  settings: _settings.default,
  style: {}
};
var _default = AlertsProvider;
exports.default = _default;