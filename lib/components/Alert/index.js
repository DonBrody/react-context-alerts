"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

var _styles = require("@material-ui/core/styles");

var _icons = require("@material-ui/icons");

var _core = require("@material-ui/core");

var _IndicatorIcon = _interopRequireDefault(require("./IndicatorIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

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

var styles = {
  componentWrapper: {
    width: '100%',
    marginBottom: 15,
    display: 'block'
  },
  textWrapper: {
    padding: 10,
    marginLeft: 60,
    marginRight: 10,
    wordWrap: 'break-word'
  },
  closeButton: {
    position: 'absolute',
    top: 3,
    right: 3
  },
  closeIcon: {
    width: 15,
    height: 15
  }
};

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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      timedOut: false,
      collapse: false,
      timeoutFunction: null
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClose", function () {
      _this.clearCurrentTimeout();

      _this.setState({
        timedOut: true,
        timeoutFunction: null
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "clearCurrentTimeout", function () {
      if (_this.state.timeoutFunction) {
        clearTimeout(_this.state.timeoutFunction);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSlideExited", function () {
      _this.setState({
        collapse: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onCollapsed", function () {
      _this.props.onClose();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "wrapperStyles", function () {
      var palette = _this.props.theme.palette;

      switch (_this.props.type) {
        case 'info':
          return {
            background: palette.info.background
          };

        case 'success':
          return {
            background: palette.success.background
          };

        case 'warning':
          return {
            background: palette.warning.background
          };

        case 'error':
          return {
            background: palette.error.background
          };

        default:
          return {
            background: palette.info.background
          };
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "textStyles", function () {
      var palette = _this.props.theme.palette;

      switch (_this.props.type) {
        case 'info':
          return {
            color: palette.info.color
          };

        case 'success':
          return {
            color: palette.success.color
          };

        case 'warning':
          return {
            color: palette.warning.color
          };

        case 'error':
          return {
            color: palette.error.color
          };

        default:
          return {
            color: palette.info.color
          };
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "headerStyles", function () {
      return _this.props.settings.showCloseButton ? {
        marginRight: 10
      } : {};
    });

    return _this;
  }

  _createClass(Alert, [{
    key: "componentDidMount",
    value: function () {
      function componentDidMount() {
        var _this2 = this;

        var timeout = this.props.settings.timeout;

        if (timeout) {
          var timeoutFunction = setTimeout(function () {
            _this2.onClose();
          }, timeout);
          this.setState({
            timeoutFunction: timeoutFunction
          });
        }
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function () {
      function render() {
        var _this$state = this.state,
            timedOut = _this$state.timedOut,
            collapse = _this$state.collapse;
        var _this$props = this.props,
            classes = _this$props.classes,
            header = _this$props.header,
            message = _this$props.message,
            type = _this$props.type,
            theme = _this$props.theme,
            settings = _this$props.settings;
        return _react["default"].createElement(_core.Collapse, {
          "in": !collapse,
          onExited: this.onCollapsed,
          unmountOnExit: true
        }, _react["default"].createElement(_core.Slide, {
          direction: 'left',
          "in": !timedOut,
          onExited: this.onSlideExited
        }, _react["default"].createElement(_core.Paper, {
          className: classes.componentWrapper,
          style: this.wrapperStyles(),
          elevation: 4
        }, _react["default"].createElement(_IndicatorIcon["default"], {
          type: type,
          theme: theme
        }), _react["default"].createElement("div", {
          className: classes.textWrapper,
          style: this.textStyles()
        }, header && header.length > 0 && _react["default"].createElement(_core.Typography, {
          style: this.headerStyles(),
          component: "h5",
          variant: "h6",
          color: "inherit"
        }, header), _react["default"].createElement(_core.Typography, {
          component: "p",
          variant: "body1",
          color: "inherit"
        }, message)), settings.showCloseButton && _react["default"].createElement(_core.IconButton, {
          className: classes.closeButton,
          onClick: this.onClose
        }, _react["default"].createElement(_icons.Close, {
          className: classes.closeIcon
        })))));
      }

      return render;
    }()
  }]);

  return Alert;
}(_react.Component);

;
Alert.propTypes = process.env.NODE_ENV !== "production" ? {
  id: _propTypes.PropTypes.number.isRequired,
  onClose: _propTypes.PropTypes.func,
  header: _propTypes.PropTypes.string,
  message: _propTypes.PropTypes.string,
  type: _propTypes.PropTypes.oneOf(['info', 'success', 'warning', 'error']).isRequired,
  theme: _propTypes.PropTypes.object.isRequired,
  settings: _propTypes.PropTypes.object.isRequired
} : {};
Alert.defaultProps = {
  onClose: function () {
    function onClose() {}

    return onClose;
  }(),
  header: null,
  message: '',
  type: 'success'
};

var _default = (0, _styles.withStyles)(styles)(Alert);

exports["default"] = _default;