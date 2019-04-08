import React, { Component } from 'react'; 
import Daily from '../list/daily/daily';
import Completed from '../list/completed/completed';
import './main.scss'

export default class Main extends Component {
	render() {
		return (
			<div className='container'>
				<div className='container__list'>
					<Daily />
					<Completed />
				</div>
			</div>
		)
	}
};