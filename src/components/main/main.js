import React, { Component } from 'react'; 
import './main.scss'

export default class Main extends Component {
	render() {
		return (
			<div className='container'>
			  <div className='container__list'>
					<div className='list' id='list--1'>
						<div className='list__header'>
							<div className='list__title'>Daily Tasks</div>
						</div>
						<input className='list__input' placeholder='add task'></input>
						<button type='submit' className='list__input__submit'>+</button>
						<div className='list__task'>task</div>
						<div className='list__task'>task</div>
						<div className='list__task'>task</div>
						<div className='list__task'>task</div>
					</div>
					<div className='list' id='list--2'>					
						<div className='list__title'>Title Here</div>
						<div className='list__task'>task</div>
						<div className='list__task'>task</div>
						<div className='list__task'>task</div>
						<div className='list__task'>task</div>
					</div>
					<div className='list' id='list--3'>					
						<div className='list__title'>Title Here</div>
						<div className='list__task'>task</div>
						<div className='list__task'>task</div>
						<div className='list__task'>task</div>
						<div className='list__task'>task</div>
					</div>
					<div className='list' id='list--4'>					
						<div className='list__title'>Title Here</div>
						<div className='list__task'>task</div>
						<div className='list__task'>task</div>
						<div className='list__task'>task</div>
						<div className='list__task'>task</div>
					</div>
					<div className='list' id='list--5'>					
						<div className='list__title'>Title Here</div>
						<div className='list__task'>task</div>
						<div className='list__task'>task</div>
						<div className='list__task'>task</div>
						<div className='list__task'>task</div>
					</div>
				</div>
			</div>
		)
	}
};