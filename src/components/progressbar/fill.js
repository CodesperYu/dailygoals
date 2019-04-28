import React, { Component } from 'react';

export default class Fill extends Component {
	render() {
		console.log(this.props.completion);
		return (
			<div className='progress-bar--fill' style={{ width: `${this.props.completion}` }}></div>
		)
	}
}