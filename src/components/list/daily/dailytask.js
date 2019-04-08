import React, { Component } from 'react';

export default class DailyTask extends Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}

	handleComplete() {
		
	}

	handleRemove(e) {
		let taskId = e.target.attributes.taskid.value;
		this.props.removeTask(taskId)
	}

	render() {
		console.log(this.props.id);
		return (
			<div className="list__task">
				<div className='list__task__name'>{this.props.task}</div>
				<div className='list__task__options'>
					<span value={this.props.id} className='list__task__complete'>&#10004;</span>
					<span onClick={this.handleRemove.bind(this)} taskid={this.props.id} className='list__task__remove'>&#10006;</span>
				</div>
			</div>
		);
	}
}