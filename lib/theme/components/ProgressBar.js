"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

var _colors = _interopRequireDefault(require("../../utils/colors"));

var defaultStyle = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0
};

var ProgressBar =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(ProgressBar, _Component);

  function ProgressBar() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, ProgressBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ProgressBar)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      progressWidth: 100
    };
    return _this;
  }

  (0, _createClass2.default)(ProgressBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        progressWidth: 0
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          progressColor = _this$props.progressColor,
          timeout = _this$props.timeout;
      return _react.default.createElement("div", {
        style: (0, _extends2.default)({}, defaultStyle, {
          width: "".concat(this.state.progressWidth, "%"),
          background: progressColor,
          transition: "width ".concat(timeout, "ms linear")
        })
      });
    }
  }]);
  return ProgressBar;
}(_react.Component);

;
ProgressBar.propTypes = {
  progressColor: _propTypes.PropTypes.string,
  timeout: _propTypes.PropTypes.number
};
ProgressBar.defaultProps = {
  progressColor: _colors.default.info.primary,
  timeout: 5000
};
var _default = ProgressBar;
exports.default = _default;