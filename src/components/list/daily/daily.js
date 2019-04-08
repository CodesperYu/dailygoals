import React, { Component } from 'react';
import DailyTask from './dailytask';
import AddTask from './addtask';
import './daily.scss';

export default class Daily extends Component {
	constructor() {
		super();
		this.state = {
			tasks: [],
		}
	}

	addTask(task) {
		let updatedTaskList = this.state.tasks.concat(task);
		this.setState({
			tasks: updatedTaskList
		})
	};

	removeTask(taskId) {
		let newTaskList = this.state.tasks.filter(task => {
			console.log(task.id, taskId);
			return task.id.toString() !== taskId
		});
		this.setState({
			tasks: newTaskList
		})
	}

	render() {
		return (
			<div className='list' id='list--1'>
				<div className='list__header'>
					<div className='list__title'>Daily Tasks</div>
				</div>
				<AddTask addTask={this.addTask.bind(this)}/>
				<div className='list__alltask'>
					{
						this.state.tasks.map((task, i) => {
							return <DailyTask 
							removeTask={this.removeTask.bind(this)} 
							task={task.title} 
							key={task.id} 
							id={task.id}/>
						})
					}
				</div>
			 </div>
		)
	};
}