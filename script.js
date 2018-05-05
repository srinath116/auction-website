var prevent=0;

function decode(str){

	var key=1;

	var status;
	//if(prevent==0){
		//prevent=1;
		if(document.getElementById("una").checked)
			status=document.getElementById("una").value;	
		if(document.getElementById("uns").checked)
			status=document.getElementById("uns").value;
	
		//var str=0;
		if (window.XMLHttpRequest) {
			// code for IE7+, Firefox, Chrome, Opera, Safari
			var xmlhttp=new XMLHttpRequest();
		} else {  
			// code for IE6, IE5
			var xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		var url="random.php";
		//var vars="set="+"A";
		//xmlhttp.open("POST",url,true);
		xmlhttp.open("GET","random.php?set="+str+"&key="+key+"&status="+status,true);
		xmlhttp.send(null);
		//xmlhttp.setRequestHeader("Contet-type","application/x-www-form-urlencoded");
		xmlhttp.onreadystatechange=function() {
			if (xmlhttp.readyState==4 && xmlhttp.status==200) 
			{
				// alert("got responseText");
				var return_data=xmlhttp.responseText;
				 var text=return_data;
				// alert("got text"+text);
				var obj=JSON.parse(text);
				var array = obj.id;
				//alert(array);
				var len=array.length;	
				var rand=Math.floor(Math.random() * (len));
				var pick = array[rand];
				// alert(pick);
				image(pick,status);
			}
	
		}
	//}else{
	//	alert("no cheating..");
	//}
}


function image(pick,status){
	var key=2;
	var str=pick;
	
	var status1=status;
	document.getElementById("i2").src="images/"+pick+".jpg";
	if (window.XMLHttpRequest) {
		var xmlhttp=new XMLHttpRequest();
	} else {  
		var xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	var url="random.php";
	xmlhttp.open("GET","random.php?id="+str+"&key="+key+"&status="+status1,true);
	xmlhttp.send(null);
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState==4 && xmlhttp.status==200) 
		{
			var return_data=xmlhttp.responseText;
			var text=return_data;
			var obj=JSON.parse(text);
			document.getElementById("pna").value=obj.pname;
			document.getElementById("r").value=obj.role;
			document.getElementById("did").value=str;

		}

	}
}



function sold(){
	prevent=0;
	var r;
	//alert("hi");
	r=confirm("click OK to perform SOLD..");
	if(r==true){
		var key=3;
		var tname=document.getElementById("team_id").value;
		var pid=document.getElementById("did").value;
		var sp=document.getElementById("price1").value;
		
		if (window.XMLHttpRequest) {
			var xmlhttp=new XMLHttpRequest();
		} else {  
			var xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		var url="random.php";
		xmlhttp.open("GET","random.php?pid="+pid+"&key="+key+"&tname="+tname+"&sp="+sp,true);
		xmlhttp.send(null);
		xmlhttp.onreadystatechange=function() {
			//alert("alert0");
			if (xmlhttp.readyState==4 && xmlhttp.status==200) 
			{
				var return_data=xmlhttp.responseText;
				var text=return_data;
				var obj=JSON.parse(text);
				var tid=obj.teamid;
				var bal=obj.bal;
				//alert(bal);
				document.getElementById("b"+tid).value=bal;
				refresh();
			}
	
		}
	}
	
}


function unsold(){
	prevent=0;
	var r;
	r=confirm("click OK to perform UNSOLD..");
	if(r==true){
		var key=4;
		var pid=document.getElementById("did").value;
		
		if (window.XMLHttpRequest) {
			var xmlhttp=new XMLHttpRequest();
		} else {  
			var xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		var url="random.php";
		xmlhttp.open("GET","random.php?pid="+pid+"&key="+key,true);
		xmlhttp.send(null);
		xmlhttp.onreadystatechange=function() {
			//alert("alert0");
			if (xmlhttp.readyState==4 && xmlhttp.status==200) 
			{
				var return_data=xmlhttp.responseText;
				refresh();
			}
	
		}
	}

}

function refresh(){
	document.getElementById("i2").src="images/1.jpg";
	document.getElementById("pna").value="";
	document.getElementById("r").value="";
	document.getElementById("did").value="";
	document.getElementById("price1").value="";
	document.getElementById("team_id").value="";

}


function begin() {
	var key=5;
	var i;
	if (window.XMLHttpRequest) {
		var xmlhttp=new XMLHttpRequest();
	} else {  
		var xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	var url="random.php";
	xmlhttp.open("GET","random.php?key="+key,true);
	xmlhttp.send(null);
	xmlhttp.onreadystatechange=function() {
		//alert("alert0");
		if (xmlhttp.readyState==4 && xmlhttp.status==200) 
		{
			var return_data=xmlhttp.responseText;
			var text=return_data;
			var obj=JSON.parse(text);
			//var name=obj.tname;
			//var balance=obj.bal;
			for(i=0;i<12;i++){
				//alert((i+1).toString());
				document.getElementById("b"+(i+1).toString()).value = obj[i].bal;
			}
		}

	}

}






