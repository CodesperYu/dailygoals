import React, { Component } from 'react'
import CompletedGoal from './completedgoal'

export default class Completed extends Component {

	removeGoal(goalId) {
		console.log(goalId);
	}
	
	render() {
		return (
			<div className='list' id='list--2'>
				<div className='list__header'>
					<div className='list__title'>Completed Goals</div>
				</div>
				<div className='list__allgoal'>
					{
						this.props.completedGoals.length ? 
						this.props.completedGoals.map((goal) => {
							return <CompletedGoal
							removeGoal = { this.props.removeCompletedGoal } 
							goal = { goal.title }  
							key = { goal.id } 
							id = { goal.id }/>
						}) : 			
						<div className = "list__goal" style= {{ visibility: 'hidden' }}>
						</div>
					}
				</div>
		 	</div>
		)
	}
}