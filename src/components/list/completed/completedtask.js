import React, { Component } from 'react';

export default class CompletedTask extends Component {

	handleRemove(e) {
		let taskId = e.target.attributes.taskid.value;
		this.props.removeTask(taskId);
	}
	
	render(props) {
		return (
			<div className="list__task">
				<div className='list__task__name'>{this.props.task}</div>
				<div className='list__task__options'>
					<span value={this.props.id} className='list__task__undo'>undo</span>
					<span onClick={this.handleRemove.bind(this)} taskid={this.props.id} className='list__task__remove'>&#10006;</span>
				</div>
			</div>
		);
	}
}