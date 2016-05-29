'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Profile = function (_React$Component) {
    _inherits(Profile, _React$Component);

    function Profile() {
        _classCallCheck(this, Profile);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Profile).apply(this, arguments));
    }

    _createClass(Profile, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'site-wrap' },
                _react2.default.createElement(
                    'div',
                    { className: 'profile' },
                    _react2.default.createElement(
                        'div',
                        { className: 'picture' },
                        _react2.default.createElement('img', { src: 'images/zac.jpg' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'info' },
                        _react2.default.createElement(
                            'h3',
                            null,
                            'Zac Ong'
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            '24, Male'
                        ),
                        _react2.default.createElement(
                            'button',
                            null,
                            'Edit Profile'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'myhoops' },
                        _react2.default.createElement(
                            'div',
                            { className: 'filter' },
                            _react2.default.createElement(
                                'p',
                                { style: { color: '#ff6b00' } },
                                'My hoops'
                            ),
                            _react2.default.createElement(
                                'p',
                                null,
                                'Other hoops'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'gallery' },
                            _react2.default.createElement('img', { src: 'images/dummy01.jpg' }),
                            _react2.default.createElement('img', { src: 'images/dummy02.jpg' }),
                            _react2.default.createElement('img', { src: 'images/dummy03.jpg' }),
                            _react2.default.createElement('img', { src: 'images/dummy04.jpg' }),
                            _react2.default.createElement('img', { src: 'images/dummy05.jpg' }),
                            _react2.default.createElement('img', { src: 'images/dummy06.jpg' }),
                            _react2.default.createElement('img', { src: 'images/dummy07.jpg' }),
                            _react2.default.createElement('img', { src: 'images/dummy08.jpg' }),
                            _react2.default.createElement('img', { src: 'images/dummy09.jpg' })
                        )
                    )
                )
            );
        }
    }]);

    return Profile;
}(_react2.default.Component);

module.exports = Profile;