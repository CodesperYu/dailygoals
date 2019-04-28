import React, { Component } from 'react';
import './progressbar.scss'

export default class Bar extends Component {
	constructor() {
		super()
		this.state = {

		}
	}
	
	render() {
		return (
			<div className='progress-bar--container'> 
				<div className='progress-bar--percentage'>0%</div>
				<div className='progress-bar'>
				</div>
			</div>
		)
	}

}