import React, { Component } from 'react'
import CompletedTask from './completedtask'

export default class Completed extends Component {
	constructor() {
		super()
		this.state = {
			completedTasks: [
				{
					title:'shopping',
					id:'0'
				},
				{
					title:'improving life',
					id:'1'
				},
			]
		}
	}

	addCompletedTask(task) {
		let updatedTask = [...this.state.completedTask, task];
		this.setState({
			completedTask: updatedTask
		})
	}

	handleUndo(task) {

	}

	removeTask(taskId) {
		let newTaskList = this.state.completedTasks.filter(task => {
			console.log(task.id, taskId);
			return task.id.toString() !== taskId
		});
		this.setState({
			completedTasks: newTaskList
		})
	}
	
	render() {
		return (
			<div className='list' id='list--2'>
				<div className='list__header'>
					<div className='list__title'>Completed Tasks</div>
				</div>
				<div className='list__alltask'>
					{
						this.state.completedTasks.length ? 
						this.state.completedTasks.map((task) => {
							return <CompletedTask
							removeTask={this.removeTask.bind(this)} 
							task={task.title} 
							key={task.id} 
							id={task.id}/>
						}) : 			
						<div className="list__task" style={{visibility: 'hidden'}}>
						</div>
					}
				</div>
		 	</div>
		)
	}
}