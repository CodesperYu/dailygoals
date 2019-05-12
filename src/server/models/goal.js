const db = require('../utils/db');
const path = require('path');

module.exports = class Goal {
	constructor(id, goalName, userId) {
		this.id = id;
		this.goalName = goalName;
		this.completed = 0;
		this.userId = userId;
		this.date = new Date();
	}

	addGoal() {
		console.log('im here');
		let date = this.date.toISOString().slice(0, 10)
		console.log(date);
		console.log(this.goalName, this.completed, date, this.userId);
		return db.execute('INSERT INTO goals (GoalName, Completed, Date, User_ID) VALUES (?, ?, ?, ?)',
		[this.goalName, this.completed, date, this.userId]);
	}
}