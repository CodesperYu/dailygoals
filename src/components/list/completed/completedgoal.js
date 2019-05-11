import React, { Component } from 'react';

export default class CompletedGoal extends Component {

	handleRemove(e) {
		let goalId = e.target.attributes.goalid.value;
		this.props.removeTask(goalId);
	}
	
	render(props) {
		return (
			<div className="list__goal">
				<div className='list__goal__name'>{this.props.goal}</div>
				<div className='list__goal__options'>
					<span value={this.props.id} className='list__goal__undo'>undo</span>
					<span onClick={this.handleRemove.bind(this)} goalid={this.props.id} className='list__task__remove'>&#10006;</span>
				</div>
			</div>
		);
	}
}