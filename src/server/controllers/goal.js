const Goal = require('../models/goal');

exports.postGoal = (req, res, next) => {
	console.log('in controller');
	const title = req.body.title;
	const userId = req.body.userId;
	const goal = new Goal(null, title, userId);
	goal.addGoal().then(() => {
		res.redirect('/')
	}).catch(err => console.log(err));
};