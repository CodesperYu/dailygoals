import React, { Component } from 'react';
import DailyTask from './dailytask';
import AddTask from './addtask';
import './daily.scss';

export default class Daily extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: [],
		}
	}

	render() {
		return (
			<div className='list' id='list--1'>
				<div className='list__header'>
					<div className='list__title'>Daily Tasks</div>
				</div>
				<AddTask addTask={this.props.addTask}/>
				<div className='list__alltask'>
					{
						this.props.tasks.map((task, i) => {
							return <DailyTask 
								removeTask = { this.props.removeTask }
								completeTask = { this.props.completeTask }
								task = { task.title } 
								key = { task.id } 
								id = { task.id } 
							/>
						})
					}
				</div>
			 </div>
		)
	};
}