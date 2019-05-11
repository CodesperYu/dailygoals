import React, { Component } from 'react';
import Fill from './fill';
import './progressbar.scss'

export default class Bar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			completion: '0.00%'
		}
	}

	componentDidMount() {
		this.updateCompletion();
	}

	componentDidUpdate() {
		if (this.hasCompletionChange()) { this.updateCompletion() }
	}

	hasCompletionChange() {
		return this.state.completion !== this.getPercentageCompletion();
	}

	getPercentageCompletion() {
		let percentage = 0;
		if (!this.isGoalEmpty()) { percentage = (this.props.completedGoals / (this.props.incompleteGoals + this.props.completedGoals) * 100) }
		return percentage.toFixed(2) + '%';
	}
 
	updateCompletion() {
		let percentage = this.getPercentageCompletion();
		this.setState({
			completion: percentage
		})
	}

	isGoalEmpty() {
		return this.props.completedGoals === 0 && this.props.incompleteGoals === 0
	}
	
	render() {
		return (
			<div className='progress-bar--container'> 
				<div className='progress-bar--percentage'> {this.state.completion} </div>
				<div className='progress-bar'>
					<Fill completion = { this.state.completion }/>
				</div>
			</div>
		)
	}

}