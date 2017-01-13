var express = require('express')
var router = express.Router();
var bodyParser = require('body-parser');
var mysql = require('mysql');
var cors = require('cors');
var conn=mysql.createConnection({host:"localhost",user:"root",password:"tibin",database:"gatepass"});

	// define the home page route
	router.route('/login')
		.post(function (req, res) {


		  	var id=req.body.eid;
			var pass=req.body.password;
			//console.log(req);

			conn.query('select uid,password from user_login where uid="'+id+'"',function(err,rows){
			var data=JSON.stringify(rows);
			console.log(data);
			var json=JSON.parse(data);
			
			var js={"status":"","message":""};
			if(json.length )
			{
			if(id==json[0].uid && pass==json[0].password)
			{
				console.log("hii");
				js.status='200';
				js.message="success";
				res.send(js);
			}
			else{
					js.status='403';
				js.message="failed";
				res.send(js);
			}
			}
			else
			{
				js.status='403';
				js.message="failed";
				res.send(js);
			}	

		});

	});

	router.route('/create')	
		.post(function (req, res) {
			var data=req.body;
		 	console.log(data,typeof data);
			var date=data.date;
			console.log(date);
			var mydate = new Date(date);
			console.log(typeof mydate);
			console.log(mydate);
		    mydate= mydate.toISOString().split('T')[0];
		    console.log(mydate);

			var time=data.time;
			var purpose=data.purpose;
			var visitors=data.visitors;
			res.send("ss");
			//console.log(req);

			var gatepass  = {date: date, time: time ,purpose: purpose };
			var query = conn.query('INSERT INTO gatepass_details SET ?', gatepass, function(err, result) {
		  // Neat! 
			  if(result)
			  {
			  	
			  	console.log(result);
					

			  }
			  else{
			  	var js={"status":"","message":""};
			  	console.log("hii");
					js.status='200';
					js.message="failed";
					res.send(js);
			  }
			});
			console.log(query.sql);
			for(i=0;i<visitors.length;i++)
			{
				var visitor  = {name: visitors[i].name,mobile: visitors[i].mobile,idtype: visitors[i].idtype,identity: visitors[i].identity  };
				var query = conn.query('INSERT INTO visitor SET ?', visitor, function(err, result)
				 {
				  // Neat! 
				  if(result)
				  {
				  	
				  	console.log(result);
						

				  }
				  else{
				  	// var js={"status":"","message":""};
				  	console.log("db err");
						// js.status='200';
						// js.message="failed";
						// res.send(js);
				  }
			});
				console.log(query.sql);
			}

	});
	
	router.route('/viewuser')
		.get(function(req, res){
			var id=497;
			console.log(id);
			conn.query('select * from gatepass g,visitor v,gatepass_details gd where g.gateid=gd.gdid and g.visitorid=v.vid ',function(err,rows){
			var data=JSON.stringify(rows);
			var json=JSON.parse(data);
			var js={"status":"","message":"","data":{}};
			
				console.log("fetched");
				js.status='200';
				js.message='fetched';
				js.data=json;
				res.send(js);
				//console.log(json[0].assetid);	
		});
	});

	router.route('/adduser')	
		.post(function (req, res) {
			var data=req.body;
		 	console.log(data,typeof data);
			var name=data.name;
			var email=data.email;
			var password=data.password;
			var company=data.company;
			var building=data.building;
			res.send("ss");
			//console.log(req);

			var user  = {name: name, email: email ,password: password };
			var query = conn.query('INSERT INTO user_login SET ?', user, function(err, result) {
		  // Neat! 
			  if(result)
			  {
			  	
			  	console.log(result);
					

			  }
			  else{
			  	var js={"status":"","message":""};
			  	console.log("hii");
					js.status='200';
					js.message="failed";
					res.send(js);
			  }
			});
			console.log(query.sql);
			
	});

module.exports = router;