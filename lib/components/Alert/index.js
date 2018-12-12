"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _settings = require("../../settings");

var _types = _interopRequireDefault(require("../../utils/types"));

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
      collapse: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClose", function () {
      clearTimeout(_this.timeoutFunction);

      _this.setState({
        timedOut: true,
        timeoutFunction: null
      });
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
      var _this$props = _this.props,
          type = _this$props.type,
          theme = _this$props.theme;
      return {
        background: theme[type].body.background
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "bodyWrapperStyles", function () {
      var _this$props2 = _this.props,
          type = _this$props2.type,
          theme = _this$props2.theme;
      return {
        background: theme[type].body.background,
        color: theme[type].body.color
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "bodyContentStyles", function () {
      var settings = _this.props.settings;
      var paddingLeft = _this.showAdornment(settings) ? 0 : 16;
      return {
        paddingLeft: paddingLeft
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "headerStyles", function () {
      var _this$props3 = _this.props,
          type = _this$props3.type,
          theme = _this$props3.theme;
      return {
        color: theme[type].body.headerColor
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "messageStyles", function () {
      var _this$props4 = _this.props,
          type = _this$props4.type,
          theme = _this$props4.theme;
      return {
        color: theme[type].body.messageColor
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "bodyContent", function (header, message) {
      var _this$props5 = _this.props,
          type = _this$props5.type,
          theme = _this$props5.theme;
      var content = theme[type].body.content;
      return content(theme[type].body.header(header, _this.headerStyles()), theme[type].body.message(message, _this.messageStyles()), _this.bodyContentStyles());
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "bodyWrapper", function (header, message) {
      var _this$props6 = _this.props,
          type = _this$props6.type,
          theme = _this$props6.theme;
      var wrapper = theme[type].body.wrapper;
      return wrapper(_this.bodyContent(header, message), _this.bodyWrapperStyles());
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "adornmentStyles", function () {
      var _this$props7 = _this.props,
          type = _this$props7.type,
          theme = _this$props7.theme,
          settings = _this$props7.settings;
      var styles = {
        background: theme[type].adornment.background,
        color: theme[type].adornment.color
      };

      if (_this.showProgress(settings)) {
        styles.borderBottomLeftRadius = 0;
      }

      return styles;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "adornmentWrapper", function () {
      var _this$props8 = _this.props,
          type = _this$props8.type,
          theme = _this$props8.theme;
      var wrapper = theme[type].adornment.wrapper;
      return wrapper(theme[type].adornment.icon, _this.adornmentStyles());
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "actionStyles", function () {
      var _this$props9 = _this.props,
          type = _this$props9.type,
          theme = _this$props9.theme;
      return {
        background: theme[type].action.background,
        color: theme[type].action.color,
        fontWeight: theme[type].action.fontWeight
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "actionWrapper", function (settings) {
      var _this$props10 = _this.props,
          type = _this$props10.type,
          theme = _this$props10.theme;
      var wrapper = theme[type].action.wrapper;
      var text = Alert.settingValue(_settings.keys.actionText, type, settings);
      var onClick = Alert.settingValue(_settings.keys.actionClickListener, type, settings);
      return wrapper(theme[type].action.button(text, onClick), _this.actionStyles());
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closeStyles", function () {
      var _this$props11 = _this.props,
          type = _this$props11.type,
          theme = _this$props11.theme;
      return {
        background: theme[type].close.background,
        color: theme[type].close.color
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closeWrapper", function (onClick) {
      var _this$props12 = _this.props,
          type = _this$props12.type,
          theme = _this$props12.theme;
      var wrapper = theme[type].close.wrapper;
      var icon = theme[type].close.icon;
      return wrapper(theme[type].close.button(icon, onClick), _this.closeStyles());
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "progressWrapper", function (settings) {
      var _this$props13 = _this.props,
          type = _this$props13.type,
          theme = _this$props13.theme;
      var wrapper = theme[type].progress.wrapper;
      var timeout = Alert.settingValue(_settings.keys.timeout, type, settings);
      return wrapper(theme[type].progress.containerColor, theme[type].progress.bar(theme[type].progress.barColor, timeout));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "mouseEventType", function (settings) {
      var type = _this.props.type;
      var enableClickAwayListener = Alert.settingValue(_settings.keys.enableClickAwayListener, type, settings);
      return enableClickAwayListener ? 'onMouseUp' : false;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "touchEventType", function (settings) {
      var type = _this.props.type;
      var enableClickAwayListener = Alert.settingValue(_settings.keys.enableClickAwayListener, type, settings);
      return enableClickAwayListener ? 'onTouchEnd' : false;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClickAway", function () {
      _this.onClose();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "bodyColumns", function (settings) {
      var bodyCols = 6;

      if (!_this.adornmentColumns(settings)) {
        bodyCols += 2;
      }

      if (!_this.actionButtonColumns(settings)) {
        bodyCols += 3;
      }

      if (!_this.closeButtonColumns(settings)) {
        bodyCols += 1;
      }

      return bodyCols;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "adornmentColumns", function (settings) {
      return _this.showAdornment(settings) ? 2 : false;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "actionButtonColumns", function (settings) {
      return _this.showAction(settings) ? 3 : false;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closeButtonColumns", function (settings) {
      return _this.showClose(settings) ? 1 : false;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "showAdornment", function (settings) {
      var type = _this.props.type;
      return Alert.settingValue(_settings.keys.showAdornment, type, settings);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "showAction", function (settings) {
      var type = _this.props.type;
      return Alert.settingValue(_settings.keys.showActionButton, type, settings) && Alert.settingValue(_settings.keys.actionText, type, settings) && Alert.settingValue(_settings.keys.actionClickListener, type, settings);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "showClose", function (settings) {
      var type = _this.props.type;
      return Alert.settingValue(_settings.keys.showCloseButton, type, settings);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "showProgress", function (settings) {
      var type = _this.props.type;
      return Alert.settingValue(_settings.keys.showProgressBar, type, settings);
    });

    return _this;
  }

  _createClass(Alert, [{
    key: "componentDidMount",
    value: function () {
      function componentDidMount() {
        var _this2 = this;

        var _this$props14 = this.props,
            type = _this$props14.type,
            settings = _this$props14.settings;
        var timeout = Alert.settingValue(_settings.keys.timeout, type, settings);

        if (timeout) {
          this.timeoutFunction = setTimeout(function () {
            _this2.onClose();
          }, timeout);
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
        var _this$props15 = this.props,
            classes = _this$props15.classes,
            header = _this$props15.header,
            message = _this$props15.message,
            settings = _this$props15.settings;
        return _react["default"].createElement(_core.ClickAwayListener, {
          mouseEvent: this.mouseEventType(settings),
          touchEvent: this.touchEventType(settings),
          onClickAway: this.onClickAway
        }, _react["default"].createElement(_core.Collapse, {
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
        }, _react["default"].createElement(_core.Grid, {
          container: true,
          spacing: 0
        }, _react["default"].createElement(_core.Grid, {
          item: true,
          xs: this.adornmentColumns(settings)
        }, this.showAdornment(settings) && this.adornmentWrapper()), _react["default"].createElement(_core.Grid, {
          item: true,
          xs: this.bodyColumns(settings)
        }, // always show body
        this.bodyWrapper(header, message)), _react["default"].createElement(_core.Grid, {
          item: true,
          xs: this.actionButtonColumns(settings)
        }, this.showAction(settings) && this.actionWrapper(settings)), _react["default"].createElement(_core.Grid, {
          item: true,
          xs: this.closeButtonColumns(settings)
        }, this.showClose(settings) && this.closeWrapper(this.onClose))), this.showProgress(settings) && this.progressWrapper(settings)))));
      }

      return render;
    }()
  }]);

  return Alert;
}(_react.Component);

_defineProperty(Alert, "determineValue", function (globalValue, typeValue) {
  return typeValue || typeValue === false ? typeValue : globalValue;
});

_defineProperty(Alert, "settingValue", function (key, type, settings) {
  return Alert.determineValue(settings[key], settings[type][key]);
});

;
Alert.propTypes = process.env.NODE_ENV !== "production" ? {
  id: _propTypes.PropTypes.number.isRequired,
  onClose: _propTypes.PropTypes.func,
  header: _propTypes.PropTypes.string,
  message: _propTypes.PropTypes.string,
  type: _propTypes.PropTypes.oneOf([_types["default"].info, _types["default"].success, _types["default"].warning, _types["default"].error]),
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
  type: _types["default"].info
};

var _default = (0, _styles.withStyles)(styles)(Alert);

exports["default"] = _default;