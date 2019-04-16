import React, { Component } from 'react'
import CompletedTask from './completedtask'

export default class Completed extends Component {

	removeTask(taskId) {
		console.log(taskId);
	}
	
	render() {
		return (
			<div className='list' id='list--2'>
				<div className='list__header'>
					<div className='list__title'>Completed Tasks</div>
				</div>
				<div className='list__alltask'>
					{
						this.props.completedTasks.length ? 
						this.props.completedTasks.map((task) => {
							return <CompletedTask
							removeTask = { this.props.removeCompletedTask } 
							task = { task.title }  
							key = { task.id } 
							id = { task.id }/>
						}) : 			
						<div className = "list__task" style= {{ visibility: 'hidden' }}>
						</div>
					}
				</div>
		 	</div>
		)
	}
}