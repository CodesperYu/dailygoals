const mysql = require('mysql2');
const secrets = require('../private');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'dailygoals',
  password: secrets.password
})

// let getTasks = db.execute('SELECT * FROM tasks').then((results) => {
//   console.log(results[0].id);
// }).catch(err => {
//   console.log(err);
// });

module.exports = pool.promise();