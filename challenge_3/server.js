const path = require('path');
const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');


app.listen(8080, () => console.log('Listening on port 8080!'));
app.use(express.static('public'));

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:62930');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	next();
});

// Request Handlers
app.post('/', (req, res) => {
	console.log(req.method, req.path);
	console.log(req.body);
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

	var string = `INSERT INTO userInfo (name, email, password, line_1, line_2, city, state, zip, phone, credit_card, exp_date, cvv, billing_zip) 
	VALUES ("${req.body['name']}", "${req.body['email']}", "${req.body['password']}", "${req.body['line-1']}", "${req.body['line-2']}", "${req.body['city']}", "${req.body['state']}", "${req.body['zip']}", "${req.body['phone']}", "${req.body['credit']}", "${req.body['exp']}", "${req.body['cvv']}", "${req.body['billing-zip']}")`;

	connection.query(string, function (err, rows, fields) {
		if (err) {
			console.log(err);
		} else {
			connection.query('SELECT * FROM userInfo ORDER BY id DESC LIMIT 1', function (err, rows, fields) {
				if (err) {
					console.log(err);
				} else {
					res.send(rows[0]);
				}
			});
		}
	});

	// connection.end();
	// res.send();
});

