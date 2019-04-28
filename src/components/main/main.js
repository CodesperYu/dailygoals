import React, { Component } from 'react'; 
import Daily from '../list/daily/daily';
import Completed from '../list/completed/completed';
import ProgressBar from '../progressbar/bar'
import './main.scss'

export default class Main extends Component {
	constructor() {
		super()
		this.state = {
			tasks: [],
			completedTasks: [],
		}
	}

	addTask(task) {
		let updatedTaskList = this.state.tasks.concat(task);
		this.setState({
			tasks: updatedTaskList
		})
	};

	removeTask(taskId) {
		let updatedtaskList = this.state.tasks.filter(task => {
			return task.id.toString() !== taskId
		});
		this.setState({
			tasks: updatedtaskList
		})
	}

	completeTask(taskId) {
		let completedTask = null;
		let updatedTaskList = this.state.tasks.filter(task => {
			if (task.id.toString() === taskId) {
				completedTask = task;
			}
			return task.id.toString() !== taskId
		});

		let updatedCompletedTaskList = [...this.state.completedTasks, completedTask];

		this.setState({
			tasks: updatedTaskList,
			completedTasks: updatedCompletedTaskList
		});
	}

	removeCompletedTask(taskId) {
		let updatedCompletedTaskList = this.state.completedTasks.filter(task => {
			return task.id.toString() !== taskId
		});
		this.setState({
			completedTasks: updatedCompletedTaskList,
		})
	}

	render() {
		return (
			<div className='container'>
				<ProgressBar 
					incompleteTasks = { this.state.tasks.length || 0 } 
					completedTasks = { this.state.completedTasks.length || 0 }
				/>
				<div className='container__list'>
					<Daily 
						tasks = { this.state.tasks }
						addTask = { this.addTask.bind(this) }
						removeTask = { this.removeTask.bind(this) }
						completeTask = { this.completeTask.bind(this) }
					/>
					<Completed 
						completedTasks = { this.state.completedTasks }
						removeCompletedTask = { this.removeCompletedTask.bind(this) }
					/>
				</div>
			</div>
		)
	}
};