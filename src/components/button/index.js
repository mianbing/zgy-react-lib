import React from 'react';
import PropTypes from 'prop-types';
import './index.less';

const Button = ({ text }) => <button className="btn">{text || '这是一个组件按钮'}</button>

Button.propTypes = {
    text: PropTypes.oneOfType(
        [PropTypes.string, PropTypes.number]
    )
};

export default Button;