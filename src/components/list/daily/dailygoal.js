import React, { Component } from 'react';

export default class DailyGoal extends Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}

	handleComplete(e) {
		let goalId = e.target.attributes.goalid.value;
		this.props.completeGoal(goalId);
	}

	handleRemove(e) {
		let goalId = e.target.attributes.goalid.value;
		this.props.removeGoal(goalId)
	}

	render() {
		return (
			<div className = "list__goal">
				<div className = 'list__goal__name'>{this.props.goal}</div>
				<div className = 'list__goal__options'>
					<span 
						goalid = { this.props.id } 
						onClick = { this.handleComplete.bind(this) }
						className ='list__goal__complete'>&#10004;
					</span>
					<span 
						onClick = { this.handleRemove.bind(this) } 
						goalid = { this.props.id } 
						className = 'list__goal__remove'>&#10006;
					</span>
				</div>
			</div>
		);
	}
}