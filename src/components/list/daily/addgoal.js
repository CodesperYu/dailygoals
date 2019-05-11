import React, { Component } from 'react';

export default class AddGoal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input: '',		
			count: 0,
		};
	}

	generateId() {
		let count = this.state.count;
		this.setState({
			count: count + 1
		});
		return count;
	}

	handleChange(e) {
		let input = e.target.value;
		this.setState({
			input: input
		});
	};

	handleClick(e) {
		e.preventDefault();
		let id = this.generateId();
		let goal = {
			title: this.state.input,
			id: id
		}
		this.props.addGoal(goal);
		this.setState({
			input: '',
		})
	}

	render() {
		return (
			<form className='list__input'>
				<input className='list__input__add-goal' value={this.state.input} placeholder='add goal' onChange={this.handleChange.bind(this)}></input>
				<button type='submit' className='list__input__submit' onClick={this.handleClick.bind(this)}>+</button>
			</form>
		)
	}
};