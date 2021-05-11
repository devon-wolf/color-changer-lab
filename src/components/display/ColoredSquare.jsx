import React from 'react';
import PropTypes from 'prop-types';

import style from './square.css';

const ColoredSquare = ({ color, meme }) => (
	<div className={style.square} style={{ backgroundColor: color, backgroundImage: `url(${meme})`}}></div>
);

ColoredSquare.propTypes = {
	color: PropTypes.string.isRequired,
	meme: PropTypes.string
};

export default ColoredSquare;