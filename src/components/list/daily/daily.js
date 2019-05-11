import React, { Component } from 'react';
import DailyGoal from './dailygoal';
import AddGoal from './addgoal';
import './daily.scss';

export default class Daily extends Component {
	constructor(props) {
		super(props);
		this.state = {
			goals: [],
		}
	}

	render() {
		return (
			<div className='list' id='list--1'>
				<div className='list__header'>
					<div className='list__title'>Daily Goals</div>
				</div>
				<AddGoal addGoal={this.props.addGoal}/>
				<div className='list__allgoal'>
					{
						this.props.goals.map((goal, i) => {
							return <DailyGoal 
								removeGoal = { this.props.removeGoal }
								completeGoal = { this.props.completeGoal }
								goal = { goal.title } 
								key = { goal.id } 
								id = { goal.id } 
							/>
						})
					}
				</div>
			 </div>
		)
	};
}