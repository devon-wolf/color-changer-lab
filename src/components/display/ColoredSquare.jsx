import React from 'react';
import PropTypes from 'prop-types';

import style from './square.css';

const ColoredSquare = ({ color }) => (
	<div className={style.square} style={{ background: color }}></div>
);

ColoredSquare.propTypes = {
	color: PropTypes.string.isRequired
};

export default ColoredSquare;