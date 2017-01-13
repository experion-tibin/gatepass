// var bmd = require('bootstrap-material-design');
// var bs = require('bootstrap');

var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var cors = require('cors');
var conn=mysql.createConnection({host:"localhost",user:"root",password:"tibin",database:"gatepass"});
var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.post('/',function(req, res){
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


app.post('/create',function(req, res){


	var data=req.body;
 	console.log(data,typeof data);
   // var purchase_title=data.purchase_title_p;

   // var assigned_to=data.assigned_to_p;
   // var related_project=data.related_project_p;
   // var priority=data.priority_p;
   // var item_category=data.item_category_p;  
   // var item=data.items;


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

	// var name=data.name;
	// var mobile=data.mobile;
	// var idtype=data.idtype;
	// var identity=data.identity;
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
		var query = conn.query('INSERT INTO visitor SET ?', visitor, function(err, result) {
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




// conn.query('INSERT INTO `gatepass_details`(`date`, `time`, `idtype`, `identity`) VALUES ('+date+','+time+','+idtype+','+identity  +')',function(err,rows){
// 	var data=JSON.stringify(rows);
// 	//console.log(data);
// 	var json=JSON.parse(data);
	
// 	var js={"status":"","message":""};

// 	if(rows.length>0)
// 	{
// 		console.log("hii");
// 		js.status='200';
// 		js.message="success";
// 		res.send(js);
// 	}
// 	else{
// 			js.status='403';
// 		js.message="failed";
// 		res.send(js);
// 	}

// });

	
});




app.get('/ss',function(req, res){
	var id=497;
	
 

	console.log(id);

conn.query('select * from assets',function(err,rows){
	var data=JSON.stringify(rows);
	var json=JSON.parse(data);
	var js={"status":"","message":""};
	
		console.log("fetched");
		js.status='200';
		js.message=json[0].assetid;
		res.send(js);
		console.log(json[0].assetid);
	

});

	
});

var server = app.listen(8088,function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("Listening at %s on port %s", host, port);
});