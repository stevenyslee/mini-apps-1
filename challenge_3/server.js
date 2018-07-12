const path = require('path');
const express = require('express');
const app = express();
const mysql = require('mysql');


app.listen(3000, () => console.log('Listening on port 3000!'));
app.use(express.static('public'));

// Request Handlers
app.post('/', (req, res) => {
	console.log(req.method, req.path);
	res.statusCode = 201;
	res.setHeader('content-type', 'application/json');

	// DB Connection
	var connection = mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : 'password',
		database : 'challenge_3'
	});

	connection.connect();

	connection.query('SELECT * FROM userInfo', function (err, rows, fields) {
		if (err) {
			console.log(err);
		} else {
			console.log(rows);
			res.send(rows[0]);
		}
	});

	connection.end();
	// res.send();
});

