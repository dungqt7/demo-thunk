"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _TreeListItem = _interopRequireWildcard(require("./components/TreeListItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SovosTreeList =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(SovosTreeList, _PureComponent);

  function SovosTreeList(props) {
    var _this;

    _classCallCheck(this, SovosTreeList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SovosTreeList).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "toggleExpand", function (id, item) {
      _this.setState(function (state) {
        var _this$props = _this.props,
            onItemExpanded = _this$props.onItemExpanded,
            onItemCollapsed = _this$props.onItemCollapsed;

        var expanded = _objectSpread({}, state.expanded);

        if (expanded[id]) {
          delete expanded[id];
          onItemCollapsed(item);
        } else {
          expanded[id] = true;
          onItemExpanded(item);
        }

        return {
          expanded: expanded
        };
      });
    });

    _this.state = {
      expanded: {}
    };
    return _this;
  }

  _createClass(SovosTreeList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          data = _this$props2.data,
          onItemClick = _this$props2.onItemClick,
          TreeListItemClasses = _this$props2.TreeListItemClasses,
          className = _this$props2.className,
          style = _this$props2.style;
      return _react.default.createElement("div", {
        className: (0, _classnames.default)('sovosTreelist', className),
        style: style
      }, data.map(function (ti) {
        return _react.default.createElement(_TreeListItem.default, {
          key: ti.id,
          item: ti,
          onClick: onItemClick,
          onExpand: _this2.toggleExpand,
          expandedItems: _this2.state.expanded,
          classes: TreeListItemClasses
        });
      }));
    }
  }]);

  return SovosTreeList;
}(_react.PureComponent);

_defineProperty(SovosTreeList, "defaultProps", {
  onItemExpanded: function onItemExpanded() {},
  onItemCollapsed: function onItemCollapsed() {},
  TreeListItemClasses: {},
  className: undefined,
  style: undefined
});

_defineProperty(SovosTreeList, "displayName", 'TreeList');

SovosTreeList.propTypes = process.env.NODE_ENV !== "production" ? {
  data: _propTypes.default.arrayOf(_TreeListItem.treeListItemPropTypes).isRequired,
  onItemClick: _propTypes.default.func.isRequired,
  onItemExpanded: _propTypes.default.func,
  onItemCollapsed: _propTypes.default.func,
  TreeListItemClasses: _propTypes.default.object,
  className: _propTypes.default.string,
  style: _propTypes.default.object
} : {};
var _default = SovosTreeList;
exports.default = _default;