'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Signup = function (_React$Component) {
    _inherits(Signup, _React$Component);

    function Signup() {
        _classCallCheck(this, Signup);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Signup).apply(this, arguments));
    }

    _createClass(Signup, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'site-wrap' },
                _react2.default.createElement(
                    'div',
                    { className: 'signup' },
                    _react2.default.createElement(
                        'div',
                        { className: 'logo' },
                        _react2.default.createElement(
                            _reactRouter.Link,
                            { to: '/' },
                            _react2.default.createElement('img', { src: 'images/logo_light.png' })
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            'The home of all things basketball'
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'signup-content' },
                        _react2.default.createElement(
                            'form',
                            null,
                            _react2.default.createElement(
                                'label',
                                null,
                                'First name: '
                            ),
                            _react2.default.createElement('input', { type: 'text', name: 'fname' }),
                            _react2.default.createElement('br', null),
                            _react2.default.createElement(
                                'label',
                                null,
                                'Last name: '
                            ),
                            _react2.default.createElement('input', { type: 'text', name: 'lname' }),
                            _react2.default.createElement('br', null),
                            _react2.default.createElement(
                                'label',
                                null,
                                'Email: '
                            ),
                            _react2.default.createElement('input', { type: 'text', name: 'email' }),
                            _react2.default.createElement('br', null),
                            _react2.default.createElement(
                                'label',
                                null,
                                'Age: '
                            ),
                            _react2.default.createElement('input', { type: 'text', name: 'age' }),
                            _react2.default.createElement('br', null),
                            _react2.default.createElement(
                                'label',
                                null,
                                'Gender: '
                            ),
                            _react2.default.createElement('input', { type: 'text', name: 'gender' }),
                            _react2.default.createElement('br', null),
                            _react2.default.createElement(
                                'label',
                                null,
                                'Upload picture: '
                            ),
                            _react2.default.createElement(
                                'button',
                                null,
                                'Select file'
                            ),
                            _react2.default.createElement('br', null)
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            'Already have an account? ',
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { to: '/login' },
                                _react2.default.createElement(
                                    'span',
                                    { style: { color: '#fff' } },
                                    'Login here'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Signup;
}(_react2.default.Component);

module.exports = Signup;