//$.material.init();
<<<<<<< HEAD
var visitorcount = 0;
var httpObj1 = new XMLHttpRequest();

userid = localStorage.getItem('userid');
token = localStorage.getItem('token');
usertype = localStorage.getItem('usertype');
username = localStorage.getItem('username');
var auth = {
    token: token,
    userid: userid,
    usertype: usertype
};
if (typeof userid == 'undefined' || userid == null || usertype == 1) {
    console.log(userid);
    window.location = "l.html";
} else {
    console.log(userid);
    console.log(token);
    //window.location="l.html";
}


function save() {
    if (!validateu()) {
        document.getElementById('result').innerHTML = "unable to proceed";
        return false;
    }
    var jsobject = {
        date: "",
        time: "",
        purpose: "",
        visitors: []
    };
    var table = document.getElementById("vtable");


    jsobject.date = document.getElementById('date').value;
    jsobject.time = document.getElementById('time').value;
    console.log(jsobject.time);
    jsobject.purpose = document.getElementById('purpose').value;
    jsobject.uid = userid;
    jsobject.usertype = usertype;
    jsobject.token = token;

    //	console.log(jsobject.items[0]);
    for (var i = 1; row = table.rows[i]; i++) {
        row = table.rows[i];
        var visitor = {
            name: "",
            mobile: "",
            idtype: "",
            identity: "",
            email: "",
            vehicleid: ""
        };
        var arr = [];
        for (var j = 0; col = row.cells[j]; j++) {

            arr[j] = col.firstChild.value;
            if (j < 6) {
                if (!(col.firstChild.value)) {
                    bootbox.alert("no values");
                    document.getElementById('result').innerHTML = "un";
                    console.log(col);
                    col.firstChild.focus();
                    return false;
                }
            }
        }

        if (!visitorvalidate(arr)) {
            document.getElementById("result").innerHTML = "at row" + i;
            return false;
        }
        visitor.name = arr[0];
        visitor.mobile = arr[1];
        visitor.email = arr[2];
        visitor.idtype = arr[3];
        visitor.identity = arr[4];
        visitor.vehicleid = arr[5];
        //namevalidate(arr[0]);
        jsobject.visitors.push(visitor);


    }
    console.log(jsobject);

    httpObj1.onreadystatechange = function() {
        console.log(this.readyState);
        document.getElementById("result").innerHTML = this.status;
        if (this.readyState == '4' && this.status == '200') {
            var result = this.responseText;
            console.log(result);
            result = JSON.parse(result);
            if (result.status == 200)

            {

                console.log("created gdid");
                document.getElementById("result").innerHTML = result.message;

                //window.location="user.html";
            } else {
                //		console.log(result.message);
                document.getElementById("result").innerHTML = result.message;
            }
        }
    }

    httpObj1.open('POST', 'http://192.168.1.234:8088/api/gatepass', true);
    httpObj1.setRequestHeader('content-type', 'application/json');
    httpObj1.setRequestHeader("Authorization", JSON.stringify(auth));
    httpObj1.send(JSON.stringify(jsobject));
    document.getElementById("userform").reset();
}

function add() {

    var table = document.getElementById("vtable");
    var length = table.rows.length;
    var row = table.insertRow(length);
    var elementId = "c" + length;
=======

var httpObj1=new XMLHttpRequest();
		// console.log(httpObj1);

function save(){

	var jsobject={date:"",time:"",purpose:"",visitors:[]};
	var table = document.getElementById("vtable");


		jsobject.date=document.getElementById('date').value;
		jsobject.time=document.getElementById('time').value;
		jsobject.purpose=document.getElementById('purpose').value;
		
		
	//	console.log(jsobject.items[0]);
		for ( var i = 1	; row = table.rows[i]; i++ ) {
  				row = table.rows[i];
  				 var visitor={names:"",mobile:"",idtype:"",identity:""};
  				 var arr=[];
  				for ( var j = 0; col = row.cells[j]; j++ ) {
  					
     				arr[j]=col.firstChild.value;
     				console.log(arr[j]);
  				}
		visitor.name=arr[0];
		visitor.mobile=arr[1];
		visitor.idtype=arr[2];
		visitor.identity=arr[3];
		jsobject.visitors.push(visitor);

		
		}
		console.log(jsobject);

httpObj1.onreadystatechange=function()
{
	console.log(this.readyState);
	document.getElementById("result").innerHTML=this.status;
	if(this.readyState=='4' && this.status=='200')
	{
		var result=this.responseText;
		console.log(result);
		// result=JSON.parse(result);
		// 		if(result.status==200)
			
		// 	{
				
		// 		console.log("result.message");
		// 		document.getElementById("result").innerHTML=result.message;

		// 		//window.location="user.html";
		// 	}
		// 	else{
		// 		console.log(result.message);
		// 		document.getElementById("result").innerHTML=result.message;
		// 	}
	}
}		
		
		httpObj1.open('POST','http://127.0.0.1:8088/create',true);
		httpObj1.setRequestHeader('content-type','application/json');
		httpObj1.send(JSON.stringify(jsobject));
// httpObj.setRequestHeader('content-type','application/x-www-form-urlencoded');
// httpObj.send('date='+document.getElementById('date').value+'&time='+document.getElementById('time').value+'&name='+document.getElementById('name').value+'&mobile='+document.getElementById('mobile').value+'&idtype='+document.getElementById('idtype').value+'&identity='+document.getElementById('identity').value+'&purpose='+document.getElementById('purpose').value);
// 
}

function add() {
    var table = document.getElementById("vtable");
    var length=table.rows.length;
    var row = table.insertRow(length);
    var elementId="c"+length;
>>>>>>> 8393e0b6667ccca051d2204d3553c1b7698c468d
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
<<<<<<< HEAD
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var input1 = document.createElement("input");
    var input2 = document.createElement("input");
    var input3 = document.createElement("input");
    var input4 = document.createElement("select");

    input4.innerHTML = "<option>aadhar</option><option>passport</option>";
    // var sel=document.getElementById("idtype");
    // var input3=sel.cloneNode(true);
    var input5 = document.createElement("input");
    var input6 = document.createElement("input");
    var input7 = document.createElement("a");

    input7.onclick = function() {
        visitorcount--;
        if (visitorcount < 1) {
            document.getElementById("result").innerHTML = "cannot delete";
            visitorcount++;
            return false;
        }

        //	this.parentNode.parentNode.removeChild(this);
        this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
    };
    cell1.appendChild(input1);
    //input1.style.width="90%";
    input1.setAttribute("id", elementId + "1");
    input1.setAttribute("class", "form-control vname");
    // console.log(elementId+"1");
    cell2.appendChild(input2);
    //input2.style.width="90%";
    input2.setAttribute("id", elementId + "2");
    input2.setAttribute("class", "form-control vmobile");
    // console.log(elementId+"2");
    cell3.appendChild(input3);
    //input3.style.width="90%";
    input3.setAttribute("id", elementId + "3");
    input3.setAttribute("class", "form-control vemail");
    cell4.appendChild(input4);
    //input4.style.width="90%";
    input4.setAttribute("id", elementId + "4");
    input4.setAttribute("class", "form-control ");
    cell5.appendChild(input5);
    input5.setAttribute("id", elementId + "5");
    input5.setAttribute("class", "form-control vid");
    cell6.appendChild(input6);
    input6.setAttribute("id", elementId + "6");
    input6.setAttribute("class", "form-control vvehicleid");
    cell7.appendChild(input7);
    input7.setAttribute("id", elementId + "7");
    input7.setAttribute("title", "remove");
    input7.setAttribute("data-toggle", "tooltip");
    input7.innerHTML = "<span style=\"color:red;\" class=\"glyphicon glyphicon-remove\"></span>";
    visitorcount++;
    view();




}


function toggle_visibility(id) {
    var e = document.getElementById(id);
    var viewall = document.getElementById('viewall');

    var create = document.getElementById('createnew');
    if (e == viewall) {

        e.style.display = 'block';
        create.style.display = 'none';
        view();
    } else {
        e.style.display = 'block';
        viewall.style.display = 'none';

    }
}

function view() {



    httpObj1.onreadystatechange = function() {
        document.getElementById("result").innerHTML = this.status;
        if (this.readyState == '4' && this.status == '200') {
            var result = this.responseText;
            result = JSON.parse(result);
            var test = result.data;
            console.log(test);

            if (result.status == 200)

            {

                console.log("result.message");

                addtable(result.data);
                document.getElementById("result").innerHTML = result.message;


            } else {
                // 		console.log(result.message);
                document.getElementById("result").innerHTML = result.message;
            }
        }
    }
    userid = localStorage.getItem('userid');

    console.log(auth);
    httpObj1.open('GET', 'http://192.168.1.234:8088/api/gatepass/' + userid, true);
    httpObj1.setRequestHeader("Authorization", JSON.stringify(auth));
    console.log(auth);
    httpObj1.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
    httpObj1.send();

    document.getElementById("display").innerHTML = username;
}

function addtable(arr) {


    console.log("eeeee");
    var table = document.getElementById("viewtable");
    var length = arr.length;

    content = "<div class='table-responsive'><table class='table table-hover' id='table1'><thead><tr><th>No.</th><th>GatepassID</th><th>Date</th><th>Time</th><th>Purpose</th><th>Name</th><th>Email</th><th>Idtype</th><th>Identity</th><th>VehicleID</th></tr></thead><tbody>";
    var i = 1;
    arr.forEach(function(element) {
        var mydate = new Date(element.date);
        mydate = mydate.toISOString().split('T')[0];
        element.date = mydate;
        var x = "'" + element.gdid + "'";
        //var gid=element.gid;

        content += "<tr><td>" + i + "</td><td>" + element.gdid + "</td><td>" + element.date + "</td><td>" + element.time + "</td><td>" + element.purpose + "</td><td>" + element.name + "</td><td>" + element.email + "</td><td>" + element.idtype + "</td><td>" + element.identity + "</td><td>" + element.vehicleid + "</td></tr>";
        i++;
    });
    content += "</tbody> </table> </div>";

    document.getElementById('view').innerHTML = content;
}


function startpage() {
    add();

}
$(function() {
    console.log("ready");
    $("#vtable").on("blur", ".vname", namevalidate);
    $("#vtable").on("blur", ".vemail", emailvalidate);
    $("#vtable").on("blur", ".vmobile", mobilevalidate);
    $("#vtable").on("blur", ".vid", idvalidate);
    $("#vtable").on("blur", ".vvehicleid", vehiclevalidate);
    $("#display").on("click", resetpass);
    $("#display2").on("click", resetpass2);
});
function resetpass(){
	document.getElementById('display2').style.display = 'block';

}
function resetpass2(){
	window.location="resetpass.html";

}
=======
    var input1=document.createElement("input");
    var input2=document.createElement("input");
    var input3=document.createElement("select");
    input3.innerHTML="<option>aadhar</option><option>passport</option>";
    // var sel=document.getElementById("idtype");
    // var input3=sel.cloneNode(true);
    var input4=document.createElement("input");
    var input5=document.createElement("button");
    input5.onclick=function(){

    //	this.parentNode.parentNode.removeChild(this);
    	this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
    };
    cell1.appendChild(input1);
    //input1.style.width="90%";
    input1.setAttribute("id",elementId+"1");
    // console.log(elementId+"1");
  	cell2.appendChild(input2);
  	//input2.style.width="90%";
  	input2.setAttribute("id",elementId+"2");
  	// console.log(elementId+"2");
  	cell3.appendChild(input3);
  	//input3.style.width="90%";
  	input3.setAttribute("id",elementId+"3");
  	cell4.appendChild(input4);
  	//input4.style.width="90%";
  	input4.setAttribute("id",elementId+"4");
  	cell5.appendChild(input5);
view();
}

function toggle_visibility(id) {
       var e = document.getElementById(id);
       var view = document.getElementById('viewall');
       
       var create= document.getElementById('createnew');
       if(e == view)
       {
       
          e.style.display = 'block';
          create.style.display='none';
       }
       else
       {
          e.style.display = 'block';
          view.style.display='none';
       }
      }

function view(){



		httpObj1.onreadystatechange=function()
		{
			document.getElementById("result").innerHTML=this.status;
			if(this.readyState=='4' && this.status=='200')
			{
				var result=this.responseText;
				result = JSON.parse(result);
				var test = result.data;
				console.log(test);
				var pdetails = _.groupBy(test,'gateid');
				//var pdetails = _.groupBy(test, function(b) { return b.gateid});
				// var pdetails = _.groupBy(result.data,function(b) { return b.gateid});
				var tes=pdetails[1];
				console.log(tes[0].gid);
				console.log(JSON.stringify(pdetails));
				// $.each(pdetails, function(index, value) {

		  //   		$.each(value, function(index, d) {
		  //   		console.log(d.gid);
				// });
				// }); 
				
				// var mergedList = _.map(result, function(item){
				// 	item.gateid;
		  //   		return _.extend(item, _.findWhere(result, { gateid: item.gateid }));
				// });


				//console.log(mergedList);
				 		if(result.status==200)
					
				 	{
						
					console.log("result.message");
					//addtable(result.data);
					addtable(result.data);
				 		document.getElementById("result").innerHTML=result.message;

				// 		//window.location="user.html";
					}
				// 	else{
				// 		console.log(result.message);
				// 		document.getElementById("result").innerHTML=result.message;
				// 	}
			}
		}		
				
				httpObj1.open('GET','http://127.0.0.1:8088/viewuser',true);
				httpObj1.setRequestHeader('content-type','application/json');
				httpObj1.send();
		// httpObj.setRequestHeader('content-type','application/x-www-form-urlencoded');
		// httpObj.send('date='+document.getElementById('date').value+'&time='+document.getElementById('time').value+'&name='+document.getElementById('name').value+'&mobile='+document.getElementById('mobile').value+'&idtype='+document.getElementById('idtype').value+'&identity='+document.getElementById('identity').value+'&purpose='+document.getElementById('purpose').value);
		// 
}      
function addtable(arr) {



    var table = document.getElementById("viewtable");
    var length=arr.length;
    
   content = "<div class='table-responsive'><table class='table table-hover' id='table1'><thead><tr><th>No.</th><th>ID</th><th>Date</th><th>Time</th><th>Purpose</th><th>Name</th><th>Email</th><th>Idtype</th><th>Identity</th><th>Vehicle</th></tr></thead><tbody>";
         var i = 1;
         arr.forEach(function(element) {
        // console.log(content);
                
              
              
            var x = "'"+element.gdid+"'";
            //var gid=element.gid;
                
             content += "<tr><td>" + i + "</td><td>" + element.gdid + "</td><td>" + element.date + "</td><td>" + element.time + "</td><td>" + element.purpose +"</td><td>"+element.name +"</td><td>"+element.email+"</td><td>"+element.idtype+"</td><td>"+element.identity+"</td><td>"+element.vehicleid+"</td></tr>";
            i++;
         });
         content += "</tbody> </table> </div>";
                    
                document.getElementById('view').innerHTML = content;
    }
// function deleteRow(x)

// {

//     //	this.parentNode.parentNode.removeChild(this);
//     	x.parentNode.parentNode.parentNode.removeChild(x.parentNode.parentNode);
//     };
>>>>>>> 8393e0b6667ccca051d2204d3553c1b7698c468d
