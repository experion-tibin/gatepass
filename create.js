//$.material.init();
var httpObj1=new XMLHttpRequest();
		console.log(httpObj1);

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
    console.log(elementId+"1");
  	cell2.appendChild(input2);
  	//input2.style.width="90%";
  	input2.setAttribute("id",elementId+"2");
  	console.log(elementId+"2");
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