'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _MapView = require('./MapView');

var _MapView2 = _interopRequireDefault(_MapView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Map = function (_React$Component) {
    _inherits(Map, _React$Component);

    function Map() {
        _classCallCheck(this, Map);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Map).apply(this, arguments));
    }

    _createClass(Map, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'site-wrap' },
                _react2.default.createElement(_MapView2.default, null),
                _react2.default.createElement(
                    'div',
                    { className: 'map-btn' },
                    _react2.default.createElement(
                        'div',
                        { className: 'bottom-left' },
                        _react2.default.createElement('img', { src: 'images/search.jpg' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'bottom-right' },
                        _react2.default.createElement('img', { src: 'images/location.jpg' })
                    )
                )
            );
        }
    }]);

    return Map;
}(_react2.default.Component);

module.exports = Map;