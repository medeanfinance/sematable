'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// update to prop-types package for react 16 prep


var propTypes = {
  sortKey: _propTypes2.default.string.isRequired,
  name: _propTypes2.default.node.isRequired,
  handleClick: _propTypes2.default.func.isRequired,
  sorted: _propTypes2.default.string,
  title: _propTypes2.default.string
};

var SortableHeader = function (_Component) {
  _inherits(SortableHeader, _Component);

  function SortableHeader() {
    _classCallCheck(this, SortableHeader);

    return _possibleConstructorReturn(this, (SortableHeader.__proto__ || Object.getPrototypeOf(SortableHeader)).apply(this, arguments));
  }

  _createClass(SortableHeader, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          sortKey = _props.sortKey,
          name = _props.name,
          sorted = _props.sorted,
          title = _props.title,
          handleClick = _props.handleClick;

      return _react2.default.createElement(
        'th',
        {
          'data-key': sortKey,
          'data-toggle': title ? 'tooltip' : '',
          style: {
            cursor: 'pointer'
          },
          title: title,
          onClick: function onClick() {
            return handleClick(sortKey);
          }
        },
        _react2.default.createElement(
          'span',
          { style: { marginRight: '5px' } },
          name
        ),
        sorted === 'asc' && _react2.default.createElement('i', { className: 'fa fa-long-arrow-up' }),
        sorted === 'desc' && _react2.default.createElement('i', { className: 'fa fa-long-arrow-down' }),
        sorted === null && _react2.default.createElement('i', {
          className: 'fa fa-arrows-v',
          style: { color: '#ccc' }
        })
      );
    }
  }]);

  return SortableHeader;
}(_react.Component);

SortableHeader.propTypes = propTypes;
exports.default = SortableHeader;