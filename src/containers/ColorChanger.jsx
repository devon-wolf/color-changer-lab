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

		const newColor = colorOptions[Math.floor(Math.random() * colorOptions.length)];
		
		if (newColor !== this.state.color) return newColor;
		else return 'url("https://i.dailymail.co.uk/i/pix/2016/03/18/15/324D202500000578-3498922-image-a-33_1458315465874.jpg")'; 
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