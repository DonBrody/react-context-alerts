"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _settings = require("../../settings");

var _types = _interopRequireDefault(require("../../utils/types"));

var styles = {
  componentWrapper: {
    width: '100%',
    marginBottom: 15,
    display: 'block'
  }
};

var AlertController =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(AlertController, _Component);

  function AlertController() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, AlertController);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(AlertController)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      timedOut: false,
      collapse: false
    };

    _this.onClose = function () {
      clearTimeout(_this.timeoutFunction);

      _this.setState({
        timedOut: true,
        timeoutFunction: null
      });
    };

    _this.onSlideExited = function () {
      _this.setState({
        collapse: true
      });
    };

    _this.onCollapsed = function () {
      _this.props.onClose();
    };

    _this.wrapperStyles = function () {
      var _this$props = _this.props,
          type = _this$props.type,
          theme = _this$props.theme;
      return {
        background: theme[type].body.background
      };
    };

    _this.bodyWrapperStyles = function () {
      var _this$props2 = _this.props,
          type = _this$props2.type,
          theme = _this$props2.theme,
          settings = _this$props2.settings;
      var styles = {
        background: theme[type].body.background,
        color: theme[type].body.color
      };

      if (!_this.showAdornment(settings)) {
        styles.borderTopLeftRadius = 4;
        styles.borderBottomLeftRadius = 4;
      }

      return styles;
    };

    _this.bodyContentStyles = function () {
      var settings = _this.props.settings;
      var paddingLeft = _this.showAdornment(settings) ? 0 : 16;
      var paddingRight = _this.showAction(settings) || _this.showClose(settings) ? 0 : 16;
      return {
        paddingLeft: paddingLeft,
        paddingRight: paddingRight
      };
    };

    _this.headerStyles = function () {
      var _this$props3 = _this.props,
          type = _this$props3.type,
          theme = _this$props3.theme;
      var specificColor = theme[type].body.headerColor;
      return specificColor ? {
        color: specificColor
      } : {};
    };

    _this.messageStyles = function () {
      var _this$props4 = _this.props,
          type = _this$props4.type,
          theme = _this$props4.theme;
      var specificColor = theme[type].body.messageColor;
      return specificColor ? {
        color: specificColor
      } : {};
    };

    _this.bodyContent = function (header, message) {
      var _this$props5 = _this.props,
          type = _this$props5.type,
          theme = _this$props5.theme;
      var content = theme[type].body.content;
      return content(theme[type].body.header(header, _this.headerStyles()), theme[type].body.message(message, _this.messageStyles()), _this.bodyContentStyles());
    };

    _this.bodyWrapper = function (header, message) {
      var _this$props6 = _this.props,
          type = _this$props6.type,
          theme = _this$props6.theme;
      var wrapper = theme[type].body.wrapper;
      return wrapper(_this.bodyContent(header, message), _this.bodyWrapperStyles());
    };

    _this.adornmentStyles = function () {
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
    };

    _this.adornmentWrapper = function () {
      var _this$props8 = _this.props,
          type = _this$props8.type,
          theme = _this$props8.theme;
      var wrapper = theme[type].adornment.wrapper;
      return wrapper(theme[type].adornment.icon, _this.adornmentStyles());
    };

    _this.actionStyles = function () {
      var _this$props9 = _this.props,
          type = _this$props9.type,
          theme = _this$props9.theme;
      return {
        background: theme[type].action.background,
        color: theme[type].action.color,
        fontWeight: theme[type].action.fontWeight
      };
    };

    _this.actionWrapper = function (settings) {
      var _this$props10 = _this.props,
          type = _this$props10.type,
          theme = _this$props10.theme;
      var wrapper = theme[type].action.wrapper;
      var text = AlertController.settingValue(_settings.keys.actionText, type, settings);
      var onClick = AlertController.settingValue(_settings.keys.actionClickListener, type, settings);
      return wrapper(theme[type].action.button(text, onClick), _this.actionStyles());
    };

    _this.closeStyles = function () {
      var _this$props11 = _this.props,
          type = _this$props11.type,
          theme = _this$props11.theme;
      return {
        background: theme[type].close.background,
        color: theme[type].close.color
      };
    };

    _this.closeWrapper = function (onClick) {
      var _this$props12 = _this.props,
          type = _this$props12.type,
          theme = _this$props12.theme;
      var wrapper = theme[type].close.wrapper;
      var icon = theme[type].close.icon;
      return wrapper(theme[type].close.button(icon, onClick), _this.closeStyles());
    };

    _this.progressWrapper = function (settings) {
      var _this$props13 = _this.props,
          type = _this$props13.type,
          theme = _this$props13.theme;
      var wrapper = theme[type].progress.wrapper;
      var timeout = AlertController.settingValue(_settings.keys.timeout, type, settings);
      return wrapper(theme[type].progress.containerColor, theme[type].progress.bar(theme[type].progress.barColor, timeout));
    };

    _this.mouseEventType = function (settings) {
      var type = _this.props.type;
      var enableClickAwayListener = AlertController.settingValue(_settings.keys.enableClickAwayListener, type, settings);
      return enableClickAwayListener ? 'onMouseUp' : false;
    };

    _this.touchEventType = function (settings) {
      var type = _this.props.type;
      var enableClickAwayListener = AlertController.settingValue(_settings.keys.enableClickAwayListener, type, settings);
      return enableClickAwayListener ? 'onTouchEnd' : false;
    };

    _this.onClickAway = function () {
      _this.onClose();
    };

    _this.bodyColumns = function (settings) {
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
    };

    _this.adornmentColumns = function (settings) {
      return _this.showAdornment(settings) ? 2 : false;
    };

    _this.actionButtonColumns = function (settings) {
      return _this.showAction(settings) ? 3 : false;
    };

    _this.closeButtonColumns = function (settings) {
      return _this.showClose(settings) ? 1 : false;
    };

    _this.showAdornment = function (settings) {
      var type = _this.props.type;
      return AlertController.settingValue(_settings.keys.showAdornment, type, settings);
    };

    _this.showAction = function (settings) {
      var type = _this.props.type;
      return AlertController.settingValue(_settings.keys.showActionButton, type, settings) && AlertController.settingValue(_settings.keys.actionText, type, settings) && AlertController.settingValue(_settings.keys.actionClickListener, type, settings);
    };

    _this.showClose = function (settings) {
      var type = _this.props.type;
      return AlertController.settingValue(_settings.keys.showCloseButton, type, settings);
    };

    _this.showProgress = function (settings) {
      var type = _this.props.type;
      return AlertController.settingValue(_settings.keys.showProgressBar, type, settings);
    };

    return _this;
  }

  (0, _createClass2.default)(AlertController, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props14 = this.props,
          type = _this$props14.type,
          settings = _this$props14.settings;
      var timeout = AlertController.settingValue(_settings.keys.timeout, type, settings);

      if (timeout) {
        this.timeoutFunction = setTimeout(function () {
          _this2.onClose();
        }, timeout);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          timedOut = _this$state.timedOut,
          collapse = _this$state.collapse;
      var _this$props15 = this.props,
          classes = _this$props15.classes,
          header = _this$props15.header,
          message = _this$props15.message,
          settings = _this$props15.settings;
      return _react.default.createElement(_core.ClickAwayListener, {
        mouseEvent: this.mouseEventType(settings),
        touchEvent: this.touchEventType(settings),
        onClickAway: this.onClickAway
      }, _react.default.createElement(_core.Collapse, {
        in: !collapse,
        onExited: this.onCollapsed,
        unmountOnExit: true
      }, _react.default.createElement(_core.Slide, {
        direction: 'left',
        in: !timedOut,
        onExited: this.onSlideExited
      }, _react.default.createElement(_core.Paper, {
        className: classes.componentWrapper,
        style: this.wrapperStyles(),
        elevation: 4
      }, _react.default.createElement(_core.Grid, {
        container: true,
        spacing: 0
      }, _react.default.createElement(_core.Grid, {
        item: true,
        xs: this.adornmentColumns(settings)
      }, this.showAdornment(settings) && this.adornmentWrapper()), _react.default.createElement(_core.Grid, {
        item: true,
        xs: this.bodyColumns(settings)
      }, // always show body
      this.bodyWrapper(header, message)), _react.default.createElement(_core.Grid, {
        item: true,
        xs: this.actionButtonColumns(settings)
      }, this.showAction(settings) && this.actionWrapper(settings)), _react.default.createElement(_core.Grid, {
        item: true,
        xs: this.closeButtonColumns(settings)
      }, this.showClose(settings) && this.closeWrapper(this.onClose))), this.showProgress(settings) && this.progressWrapper(settings)))));
    }
  }]);
  return AlertController;
}(_react.Component);

AlertController.determineValue = function (globalValue, typeValue) {
  var allowNull = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var validNull = allowNull && typeValue === null;
  return typeValue || typeValue === false || validNull ? typeValue : globalValue;
};

AlertController.settingValue = function (key, type, settings) {
  // This is ugly. Have to allow null values for timeout (signifies disabled)
  return AlertController.determineValue(settings[key], settings[type][key], key === _settings.keys.timeout);
};

;
AlertController.propTypes = {
  id: _propTypes.PropTypes.number.isRequired,
  onClose: _propTypes.PropTypes.func,
  header: _propTypes.PropTypes.string,
  message: _propTypes.PropTypes.string,
  type: _propTypes.PropTypes.oneOf([_types.default.info, _types.default.success, _types.default.warning, _types.default.error]),
  theme: _propTypes.PropTypes.object.isRequired,
  settings: _propTypes.PropTypes.object.isRequired
};
AlertController.defaultProps = {
  onClose: function onClose() {},
  header: null,
  message: '',
  type: _types.default.info
};

var _default = (0, _styles.withStyles)(styles)(AlertController);

exports.default = _default;