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

var AddHoop = function (_React$Component) {
    _inherits(AddHoop, _React$Component);

    function AddHoop() {
        _classCallCheck(this, AddHoop);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AddHoop).apply(this, arguments));
    }

    _createClass(AddHoop, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'site-wrap' },
                _react2.default.createElement(
                    'div',
                    { className: 'addhoop' },
                    _react2.default.createElement(_MapView2.default, null),
                    _react2.default.createElement(
                        'div',
                        { className: 'content' },
                        _react2.default.createElement(
                            'h3',
                            null,
                            'Double tap on the map to add a hoop'
                        ),
                        _react2.default.createElement(
                            'form',
                            null,
                            _react2.default.createElement(
                                'label',
                                null,
                                'Hoop name: '
                            ),
                            _react2.default.createElement('input', { type: 'text', name: 'hname' }),
                            _react2.default.createElement('br', null),
                            _react2.default.createElement(
                                'label',
                                null,
                                'Hoop description: '
                            ),
                            _react2.default.createElement('textarea', { rows: '6', cols: '20' }),
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
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'submit' },
                        _react2.default.createElement(
                            'button',
                            null,
                            'Cancel'
                        ),
                        _react2.default.createElement(
                            'button',
                            { style: { backgroundColor: '#ff6b00' } },
                            'Save'
                        )
                    )
                )
            );
        }
    }]);

    return AddHoop;
}(_react2.default.Component);

module.exports = AddHoop;