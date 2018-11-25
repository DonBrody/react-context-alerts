"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.AlertsConsumer = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

var _styles = require("@material-ui/core/styles");

var _Alert = _interopRequireDefault(require("../components/Alert"));

var _theme = _interopRequireDefault(require("../theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function () { function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); } return _getPrototypeOf; }(); return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function () { function _setPrototypeOf(o, p) { o.__proto__ = p; return o; } return _setPrototypeOf; }(); return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  alertWrapper: {
    width: '80%',
    maxWidth: 450,
    position: 'fixed',
    top: 75,
    right: 16,
    zIndex: 100000
  }
};
var muiTheme = (0, _styles.createMuiTheme)({
  typography: {
    useNextVariants: true
  }
});
var DEFAULT_STATE = {
  alerts: []
};

var AlertsContext = _react["default"].createContext(DEFAULT_STATE);

var AlertsConsumer = AlertsContext.Consumer;
exports.AlertsConsumer = AlertsConsumer;
var count = 0;

var AlertsProvider =
/*#__PURE__*/
function (_Component) {
  _inherits(AlertsProvider, _Component);

  function AlertsProvider() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AlertsProvider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AlertsProvider)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", DEFAULT_STATE);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "createAlertObject", function (type, header, message) {
      return {
        id: count++,
        type: type,
        header: header,
        message: message
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onAlertClose", function (alert) {
      _this.setState({
        alerts: _this.state.alerts.filter(function (current) {
          return alert !== current;
        })
      });
    });

    return _this;
  }

  _createClass(AlertsProvider, [{
    key: "render",
    value: function () {
      function render() {
        var _this2 = this;

        var _this$props = this.props,
            classes = _this$props.classes,
            theme = _this$props.theme;
        return _react["default"].createElement(AlertsContext.Provider, {
          value: {
            state: this.state,
            info: function () {
              function info(header, message) {
                var info = _this2.createAlertObject('info', header, message);

                _this2.setState({
                  alerts: _toConsumableArray(_this2.state.alerts).concat([info])
                });
              }

              return info;
            }(),
            success: function () {
              function success(header, message) {
                var success = _this2.createAlertObject('success', header, message);

                _this2.setState({
                  alerts: _toConsumableArray(_this2.state.alerts).concat([success])
                });
              }

              return success;
            }(),
            warning: function () {
              function warning(header, message) {
                var warning = _this2.createAlertObject('warning', header, message);

                _this2.setState({
                  alerts: _toConsumableArray(_this2.state.alerts).concat([warning])
                });
              }

              return warning;
            }(),
            error: function () {
              function error(header, message) {
                var error = _this2.createAlertObject('error', header, message);

                _this2.setState({
                  alerts: _toConsumableArray(_this2.state.alerts).concat([error])
                });
              }

              return error;
            }()
          }
        }, this.props.children, _react["default"].createElement(_styles.MuiThemeProvider, {
          theme: muiTheme
        }, _react["default"].createElement("aside", {
          className: classes.alertWrapper
        }, this.state.alerts.map(function (alert) {
          return _react["default"].createElement(_Alert["default"], {
            key: alert.id,
            id: alert.id,
            header: alert.header,
            message: alert.message,
            type: alert.type,
            onClose: function () {
              function onClose() {
                return _this2.onAlertClose(alert);
              }

              return onClose;
            }(),
            theme: theme
          });
        }))));
      }

      return render;
    }()
  }]);

  return AlertsProvider;
}(_react.Component);

;
AlertsProvider.propTypes = process.env.NODE_ENV !== "production" ? {
  theme: _propTypes.PropTypes.object
} : {};
AlertsProvider.defaultProps = {
  theme: _theme["default"]
};

var _default = (0, _styles.withStyles)(styles)(AlertsProvider);

exports["default"] = _default;