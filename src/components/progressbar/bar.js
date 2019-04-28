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
		if (this.hasCompletionChange()) {
			console.log('there is a change');
			this.updateCompletion();
		}
	}

	hasCompletionChange() {
		console.log(this.state.completion, this.getPercentageCompletion());
		return this.state.completion !== this.getPercentageCompletion();
	}

	getPercentageCompletion() {
		let percentage = 0;
		// console.log(this.props);
		// console.log(!this.isTaskEmpty());
		if (!this.isTaskEmpty()) {
			percentage = (this.props.completedTasks / (this.props.incompleteTasks + this.props.completedTasks) * 100); 
		}
		// console.log(this.props.completedTasks / (this.props.incompleteTasks + this.props.completedTasks))
		// console.log('get percentage ', percentage);
		return percentage.toFixed(2) + '%';
	}
 
	updateCompletion() {
		let percentage = this.getPercentageCompletion();
		console.log('percentage ', percentage);
		this.setState({
			completion: percentage
		})
	}

	isTaskEmpty() {
		return this.props.completedTasks === 0 && this.props.incompleteTasks === 0
	}
	
	render() {
		console.log(this.props.incompleteTasks);
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