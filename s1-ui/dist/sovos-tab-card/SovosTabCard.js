"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _Tab = _interopRequireDefault(require("@material-ui/core/Tab"));

var _styles = require("@material-ui/core/styles");

var _sovosTabs = _interopRequireDefault(require("../sovos-tabs"));

var _SovosTabContent = _interopRequireDefault(require("../sovos-tab-content/SovosTabContent"));

var _reactHelpers = require("../utils/reactHelpers");

var _sovosColors = require("../themes/sovos-colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  root: {
    background: 'white',
    borderBottom: "solid 1px ".concat(_sovosColors.grayLight)
  },
  tabTextColorPrimary: {
    color: _sovosColors.textColor,
    '&.selected': {
      color: _sovosColors.textColor
    }
  }
};

var SovosTabCard =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(SovosTabCard, _React$PureComponent);

  function SovosTabCard() {
    var _this;

    _classCallCheck(this, SovosTabCard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SovosTabCard).call(this));

    _defineProperty(_assertThisInitialized(_this), "handleTabClick", function (event, value) {
      _this.setState({
        selectedTab: value
      });
    });

    _this.state = {
      selectedTab: 0
    };
    return _this;
  }

  _createClass(SovosTabCard, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          classes = _this$props.classes,
          children = _this$props.children,
          className = _this$props.className,
          style = _this$props.style;
      var tabChildren = (0, _reactHelpers.findChildrenByType)(children, _SovosTabContent.default);
      var tabContent = [];
      var tabs = [];

      if (tabChildren.length) {
        tabChildren.forEach(function (t, index) {
          var props = t.props.TabProps || {};
          var label = props.label;
          tabContent.push(_react.default.cloneElement(t, {
            key: label || index,
            selected: index === _this2.state.selectedTab
          }));
          tabs.push(_react.default.createElement(_Tab.default, {
            label: label,
            value: index,
            key: label || index
          }));
        });
      }

      return _react.default.createElement(_Paper.default, {
        className: (0, _classnames.default)('sovosTabCard', className),
        style: style
      }, _react.default.createElement(_sovosTabs.default, {
        classes: {
          root: classes.root,
          tabTextColorPrimary: classes.tabTextColorPrimary
        },
        value: this.state.selectedTab,
        onChange: this.handleTabClick
      }, tabs), tabContent);
    }
  }]);

  return SovosTabCard;
}(_react.default.PureComponent);

_defineProperty(SovosTabCard, "defaultProps", {
  className: undefined,
  style: undefined
});

_defineProperty(SovosTabCard, "displayName", 'TabCard');

SovosTabCard.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Each child represents the content of 1 tab.
   */
  children: _propTypes.default.node.isRequired,

  /**
   * @ignore
   */
  classes: _propTypes.default.object.isRequired,
  className: _propTypes.default.string,
  style: _propTypes.default.object
} : {};

var _default = (0, _styles.withStyles)(styles)(SovosTabCard);

exports.default = _default;