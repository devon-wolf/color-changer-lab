import React, { Component } from 'react';
import ColoredSquare from '../components/display/ColoredSquare';

export default class ColorChanger extends Component {
	state = {
		color: '#FFFFFF'
	}

	randomColor = () => {
		const colorOptions = [
			'#320D6D',
			'#FFBFB7',
			'#FFD447',
			'#700353',
			'#4C1C00'
		];

		return colorOptions[Math.floor(Math.random() * colorOptions.length)];
	}

	changeColor = () => setInterval(() => {
		this.setState({ color: this.randomColor()});
	}, 1000);

	componentDidMount = () => {
		this.changeColor();
	}

	render () {
		return (
			<ColoredSquare color={this.state.color} />
		);
	}
}