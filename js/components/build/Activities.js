'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Activities = function (_React$Component) {
    _inherits(Activities, _React$Component);

    function Activities() {
        _classCallCheck(this, Activities);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Activities).apply(this, arguments));
    }

    _createClass(Activities, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'site-wrap' },
                _react2.default.createElement(
                    'div',
                    { className: 'activities' },
                    _react2.default.createElement(
                        'ul',
                        null,
                        _react2.default.createElement(Activity, null),
                        _react2.default.createElement(Activity, null),
                        _react2.default.createElement(Activity, null),
                        _react2.default.createElement(Activity, null),
                        _react2.default.createElement(Activity, null),
                        _react2.default.createElement(Activity, null)
                    )
                )
            );
        }
    }]);

    return Activities;
}(_react2.default.Component);

var Activity = function (_React$Component2) {
    _inherits(Activity, _React$Component2);

    function Activity() {
        _classCallCheck(this, Activity);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Activity).apply(this, arguments));
    }

    _createClass(Activity, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'userprofile' },
                    _react2.default.createElement(
                        'span',
                        { className: 'left' },
                        _react2.default.createElement('img', { src: 'images/zac.jpg' })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'userfeeds' },
                    _react2.default.createElement(
                        'p',
                        null,
                        'Activity data'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'userstory' },
                    _react2.default.createElement(
                        'span',
                        { className: 'right' },
                        _react2.default.createElement('img', { src: 'images/dummy06.jpg' })
                    )
                )
            );
        }
    }]);

    return Activity;
}(_react2.default.Component);

module.exports = Activities;