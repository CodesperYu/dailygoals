import React, { Component } from 'react'; 
import Daily from '../list/daily/daily';
import Completed from '../list/completed/completed';
import ProgressBar from '../progressbar/bar'
import './main.scss'

export default class Main extends Component {
	constructor() {
		super()
		this.state = {
			username: null,
			goals: [],
			completedGoals: [],
		}
	}

	componentDidMount() {
    this.getGoals()
      .then(res => {
				let goals = res.map((goal) => {
					console.log(goal);
					return {
						title: goal.GoalName,
						id: goal.Goal_ID
					}
				});
				console.log(goals);
        this.setState({ goals: goals })
      })
      .catch(err => console.log(err)
    );
	}
	
	getGoals = async () => {
		console.log('hello');
		const response = await fetch('/getGoals');
		console.log(response);
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  handleSubmit = async e => {
  };

	addGoal(goal) {
		let updatedGoalList = this.state.goals.concat(goal);
		this.setState({
			goals: updatedGoalList
		})
		console.log(this.state.goals);
	};

	removeGoal(goalId) {
		let updatedGoalList = this.state.goals.filter(goal => {
			return goal.id.toString() !== goalId
		});
		this.setState({
			goals: updatedGoalList
		})
	}

	completeGoal(goalId) {
		let completedGoal = null;
		let updatedGoalList = this.state.goals.filter(goal => {
			if (goal.id.toString() === goalId) {
				completedGoal = goal;
			}
			return goal.id.toString() !== goalId
		});

		let updatedCompletedGoalList = [...this.state.completedGoals, completedGoal];

		this.setState({
			goals: updatedGoalList,
			completedGoals: updatedCompletedGoalList
		});
	}

	removeCompletedGoal(goalId) {
		let updatedCompletedGoalList = this.state.completedGoals.filter(goal => {
			return goal.id.toString() !== goalId
		});
		this.setState({
			completedGoals: updatedCompletedGoalList,
		})
	}

	render() {
		return (
			<div className='container'>
		  	<h3>Welcome { this.state.username } </h3>
				<ProgressBar 
					incompleteGoals = { this.state.goals.length || 0 } 
					completedGoals = { this.state.completedGoals.length || 0 }
				/>
				<div className='container__list'>
					<Daily 
						goals = { this.state.goals }
						addGoal = { this.addGoal.bind(this) }
						removeGoal = { this.removeGoal.bind(this) }
						completeGoal = { this.completeGoal.bind(this) }
					/>
					<Completed 
						completedGoals = { this.state.completedGoals }
						removeCompletedGoal = { this.removeCompletedGoal.bind(this) }
					/>
				</div>
			</div>
		)
	}
};