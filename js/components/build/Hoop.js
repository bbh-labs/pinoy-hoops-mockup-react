'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hoop = function (_React$Component) {
    _inherits(Hoop, _React$Component);

    function Hoop() {
        _classCallCheck(this, Hoop);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Hoop).apply(this, arguments));
    }

    _createClass(Hoop, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'site-wrap' },
                _react2.default.createElement(
                    'div',
                    { className: 'hoopstory' },
                    _react2.default.createElement(
                        'div',
                        { className: 'heroimage' },
                        _react2.default.createElement('img', { src: 'images/dummy08.jpg' }),
                        _react2.default.createElement(
                            'h2',
                            null,
                            'La Concordia'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'hoop-info' },
                        _react2.default.createElement(
                            'div',
                            { className: 'userprofile' },
                            _react2.default.createElement('img', { src: 'images/zac.jpg' }),
                            _react2.default.createElement(
                                'h6',
                                null,
                                'Zac Ong'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'icons' },
                            _react2.default.createElement('img', { src: 'images/icon_share.png' })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'description' },
                            _react2.default.createElement(
                                'p',
                                null,
                                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec enim dolor, facilisis id interdum id, gravida eget lacus. Nam congue urna massa, sit amet rutrum ipsum pellentesque eu. Praesent et '
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'filter' },
                        _react2.default.createElement(
                            'p',
                            { style: { color: '#ff6b00' } },
                            'Most Recent'
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            'Most Liked'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'hoop-gallery' },
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('img', { src: 'images/icon_plus.png' })
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { to: '/story' },
                                _react2.default.createElement('img', { src: 'images/dummy02.jpg' })
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('img', { src: 'images/dummy03.jpg' })
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('img', { src: 'images/dummy04.jpg' })
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('img', { src: 'images/dummy05.jpg' })
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('img', { src: 'images/dummy06.jpg' })
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('img', { src: 'images/dummy07.jpg' })
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('img', { src: 'images/dummy08.jpg' })
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('img', { src: 'images/dummy09.jpg' })
                        )
                    )
                )
            );
        }
    }]);

    return Hoop;
}(_react2.default.Component);

module.exports = Hoop;