"use strict";

exports.__esModule = true;
exports["default"] = exports.jsx = void 0;

var _core = require("@emotion/core");

var _css = _interopRequireDefault(require("@styled-system/css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var jsx = function jsx(type, props) {
  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  return _core.jsx.apply(undefined, [type, props ? _extends({}, props, {
    css: (0, _css["default"])(props.css)
  }) : null].concat(children));
};

exports.jsx = jsx;
var _default = jsx;
exports["default"] = _default;