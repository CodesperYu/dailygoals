const db = require('./utils/db');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/getTasks', (req, res) => db.execute('SELECT * FROM Tasks WHERE User_ID = 1').then((results) => {
  res.send(results[0])
}).catch(err => {
  console.log(err);
}));

app.post('/postTasks', (req, res) => db.execute(
  'INSERT INTO Tasks (Task_ID, TaskName, Completed, Date, User_ID VALUES (?, ?, ?, ?, ?',
  // [this.]
  ).then((results) => {
  res.send(results[0])
}).catch(err => {
  console.log(err);
}));



app.listen(port, () => console.log(`Listening on port ${port}`));