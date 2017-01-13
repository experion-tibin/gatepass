$.material.init();
function abcd(){
var httpObj=new	XMLHttpRequest();
httpObj.onreadystatechange=function()
{
	console.log(this.readyState);
	document.getElementById("result").innerHTML=this.status;
	if(this.readyState=='4' && this.status=='200')
	{
		var result=this.responseText;
		result=JSON.parse(result);
				if(result.status==200)
			
			{
				
				console.log("result.message");
				document.getElementById("result").innerHTML=result.message;

				//window.location="user.html";
			}
			else{
				console.log(result.message);
				document.getElementById("result").innerHTML=result.message;
			}
	}
}
httpObj.open('POST','http://127.0.0.1:8088/',true);
httpObj.setRequestHeader('content-type','application/x-www-form-urlencoded');
httpObj.send('eid='+document.getElementById('inputEmail').value+'&password='+document.getElementById('inputPassword').value);
}
