"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

var _styles = require("@material-ui/core/styles");

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

var styles = {
  componentWrapper: {
    width: '100%',
    marginBottom: 15,
    display: 'block'
  },
  textWrapper: {
    padding: 5,
    marginLeft: 60,
    wordWrap: 'break-word'
  }
};

var Alert =
/*#__PURE__*/
function (_Component) {
  _inherits(Alert, _Component);

  function Alert(props) {
    var _this;

    _classCallCheck(this, Alert);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Alert).call(this, props));
    _this.state = {
      timedOut: false,
      collapse: false,
      timeoutFunction: null
    };
    _this.onClose = _this.onClose.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.clearCurrentTimeout = _this.clearCurrentTimeout.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onSlideExited = _this.onSlideExited.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onCollapsed = _this.onCollapsed.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.wrapperStyles = _this.wrapperStyles.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.textStyles = _this.textStyles.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Alert, [{
    key: "componentDidMount",
    value: function () {
      function componentDidMount() {
        var _this2 = this;

        var timeoutFunction = setTimeout(function () {
          _this2.onClose();
        }, this.props.timeout);
        this.setState({
          timeoutFunction: timeoutFunction
        });
      }

      return componentDidMount;
    }()
  }, {
    key: "onClose",
    value: function () {
      function onClose() {
        this.clearCurrentTimeout();
        this.setState({
          timedOut: true,
          timeoutFunction: null
        });
      }

      return onClose;
    }()
  }, {
    key: "clearCurrentTimeout",
    value: function () {
      function clearCurrentTimeout() {
        if (this.state.timeoutFunction) {
          clearTimeout(this.state.timeoutFunction);
        }
      }

      return clearCurrentTimeout;
    }()
  }, {
    key: "onSlideExited",
    value: function () {
      function onSlideExited() {
        this.setState({
          collapse: true
        });
      }

      return onSlideExited;
    }()
  }, {
    key: "onCollapsed",
    value: function () {
      function onCollapsed() {
        this.props.onClose();
      }

      return onCollapsed;
    }()
  }, {
    key: "wrapperStyles",
    value: function () {
      function wrapperStyles() {
        var palette = this.props.theme.palette;

        switch (this.props.type) {
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
      }

      return wrapperStyles;
    }()
  }, {
    key: "textStyles",
    value: function () {
      function textStyles() {
        var palette = this.props.theme.palette;

        switch (this.props.type) {
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
      }

      return textStyles;
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
            theme = _this$props.theme;
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
          elevation: 10
        }, _react["default"].createElement(_IndicatorIcon["default"], {
          type: type,
          theme: theme
        }), _react["default"].createElement("div", {
          className: classes.textWrapper,
          style: this.textStyles()
        }, header && _react["default"].createElement(_core.Typography, {
          component: "h5",
          variant: "h6",
          color: "inherit"
        }, header), _react["default"].createElement(_core.Typography, {
          component: "p",
          variant: "body1",
          color: "inherit"
        }, message)))));
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
  timeout: _propTypes.PropTypes.number,
  theme: _propTypes.PropTypes.object.isRequired
} : {};
Alert.defaultProps = {
  onClose: function () {
    function onClose() {}

    return onClose;
  }(),
  header: null,
  message: '',
  type: 'success',
  timeout: 3000
};

var _default = (0, _styles.withStyles)(styles)(Alert);

exports["default"] = _default;