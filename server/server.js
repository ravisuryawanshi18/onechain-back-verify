var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/onechainverifier";


var database;

MongoClient.connect(url, function(err, db) {
	  if (err) {
		 throw err; 
	  } 
	  console.log("Database created!");
	  database = db;
	  var server = app.listen(8081, function () {
	   var host = server.address().address
	   var port = server.address().port
	   
	   console.log("Example app listening at http://%s:%s", host, port)
	  });
	  
	app.use(express.static('public'));
	app.get('/index.htm', function (req, res) {
	   res.sendFile( __dirname + "/" + "index.html" );
	});
	
});






