"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _Column = _interopRequireWildcard(require("./Column"));

var _ColumnHeaderRow = _interopRequireDefault(require("./ColumnHeaderRow"));

var _ColumnRow = _interopRequireDefault(require("./ColumnRow"));

var _ActionCell = _interopRequireDefault(require("./ActionCell"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = {
  cell: {
    minWidth: 24,
    width: 24,
    height: 24
  },
  column: {
    flexGrow: 0,
    flexShrink: 0
  }
};

var ActionColumn =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ActionColumn, _PureComponent);

  function ActionColumn() {
    _classCallCheck(this, ActionColumn);

    return _possibleConstructorReturn(this, _getPrototypeOf(ActionColumn).apply(this, arguments));
  }

  _createClass(ActionColumn, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          data = _this$props.data,
          displayHeader = _this$props.displayHeader,
          hoveredIndex = _this$props.hoveredIndex,
          toggleHover = _this$props.toggleHover,
          rowsClickable = _this$props.rowsClickable,
          classes = _this$props.classes,
          props = _objectWithoutProperties(_this$props, ["data", "displayHeader", "hoveredIndex", "toggleHover", "rowsClickable", "classes"]);

      return _react.default.createElement(_Column.default, _extends({
        classes: {
          root: classes.column
        }
      }, props), displayHeader && _react.default.createElement(_ColumnHeaderRow.default, null, _react.default.createElement("div", {
        className: classes.cell
      })), data.map(function (dataRow, rowIndex) {
        var isHovered = hoveredIndex === rowIndex;
        return _react.default.createElement(_ColumnRow.default, {
          key: "actionRow-".concat(dataRow.id || rowIndex),
          toggleHover: toggleHover,
          dataRow: dataRow,
          isHovered: isHovered,
          rowIndex: rowIndex,
          isClickable: rowsClickable
        }, _react.default.createElement(_ActionCell.default, {
          actions: dataRow.actions,
          isHovered: isHovered,
          className: classes.cell
        }));
      }));
    }
  }]);

  return ActionColumn;
}(_react.PureComponent);

_defineProperty(ActionColumn, "defaultProps", {
  rowsClickable: false
});

ActionColumn.propTypes = process.env.NODE_ENV !== "production" ? _objectSpread({}, _Column.columnProps, {
  rowsClickable: _propTypes.default.bool,
  classes: _propTypes.default.object.isRequired
}) : {};

var _default = (0, _styles.withStyles)(styles)(ActionColumn);

exports.default = _default;