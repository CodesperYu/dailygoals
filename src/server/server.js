const goalRoutes = require('./routes/goals');

const db = require('./utils/db');
const Goal = require('./models/goal');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




// Routes
app.post('/goal/postGoals', (req, res, next) => {
	console.log('in controller');
	const title = req.body.title;
	const userId = req.body.userId;
	const goal = new Goal(null, title, userId);
	goal.addGoal().then(() => {
		res.redirect('/')
	}).catch(err => console.log(err));
});
// app.post('/', goalRoutes);
app.get('/getGoals', (req, res) => db.execute('SELECT * FROM goals WHERE User_ID = 1').then((results) => {
  res.send(results[0])
}).catch(err => {
  console.log(err);
}));



app.listen(port, () => console.log(`Listening on port ${port}`));