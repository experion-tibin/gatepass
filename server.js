// var bmd = require('bootstrap-material-design');
// var bs = require('bootstrap');

var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var cors = require('cors');
var router= express.Router();
var gateroute= require('./gaterouter.js');
var conn=mysql.createConnection({host:"localhost",user:"root",password:"tibin",database:"gatepass"});
var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('/',gateroute);





var server = app.listen(8088,function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("Listening at %s on port %s", host, port);
});