const express = require('express');
const path = require('path');
const mysql = require('mysql');

const app = express();

app.set('json spaces', 2);

// Query
const SELECT_ALL_PLANTS_QUERY = 'SELECT * FROM plants';

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'pvz-client/build')));

const db_config = {
	host: 'us-cdbr-iron-east-02.cleardb.net',
	user: 'b526e9f9ac39f8',
	password: 'a0863242',
	database: 'heroku_a7eb5ba779cdac1'
};

var connection;

handleDisconnect = () => {
	connection = mysql.createConnection(db_config);

	connection.connect((err) => {
		if (err) {
			console.log('error when connecting to db: ', err);
			setTimeout(handleDisconnect, 2000);
		}
	});

	connection.on('error', (err) => {
		console.log('db error', err);
		if (err.code === 'PROTOCOL_CONNECTION_LOST') {
			handleDisconnect();
		} else {
			throw err;
		}
	});
};

handleDisconnect();

// create a connection to clearDB
// const connection = mysql.createConnection({
// 	host: 'us-cdbr-iron-east-02.cleardb.net',
// 	user: 'b526e9f9ac39f8',
// 	password: 'a0863242',
// 	database: 'heroku_a7eb5ba779cdac1'
// })

// connect
// connection.connect((err) => {
// 	if (err) {
// 		return err
// 	}
// })

// Route to main page
// app.get('/', (req, res) => {
// 	res.send('Go to /products to see products');
// });

// Route to products, respond with some JSON
app.get('/products', (req, res) => {
	connection.query(SELECT_ALL_PLANTS_QUERY, (err, results) => {
		if (err) {
			return res.send(err);
		} else {
			return res.json({
				data: results
			});
			console.log(`Got all plants`);
		}
	});
});

// The "catchall" handler
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/pvz/build/index.html'));
});

// listen on port 5000
const port = process.env.PORT || 5000;
app.listen(port);
console.log(`PvZ listening on ${port}`);
