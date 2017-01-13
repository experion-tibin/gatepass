//$.material.init();

var httpObj1=new XMLHttpRequest();
		// console.log(httpObj1);
view();
function save(){

	var jsobject={name:"",email:"",password:"",company:"",building:""};
	

		jsobject.name=document.getElementById('name').value;
		jsobject.email=document.getElementById('email').value;
		jsobject.password=document.getElementById('password').value;
		jsobject.company=document.getElementById('company').value;
		jsobject.building=document.getElementById('building').value;
		
		
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
		
		httpObj1.open('POST','http://127.0.0.1:8088/adduser',true);
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
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
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