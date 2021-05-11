import React, { Component } from 'react';
import ColoredSquare from '../components/display/ColoredSquare';

export default class ColorChanger extends Component {
	state = {
		color: '#FFFFFF',
		meme: ''
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
		const newColor = this.randomColor();
		
		if (newColor !== this.state.color) this.setState({ color: newColor, meme: '' });
		
		else this.setState({
			color: '#FFFFFF',
			meme: 'https://i.dailymail.co.uk/i/pix/2016/03/18/15/324D202500000578-3498922-image-a-33_1458315465874.jpg'
		});
	}, 1000);

	componentDidMount = () => {
		this.changeColor();
	}

	render () {
		return (
			
				<ColoredSquare
					color={this.state.color}
					meme={this.state.meme}
				/>
			
		);
	}
}