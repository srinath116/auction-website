
var global_count=0;

function cookie_index(){
	var array=document.cookie.split("=");
	//alert(array);
	var name=array[1];
	if(document.cookie.length!=0){
		window.location="home.php";
	}

}
function disp(x) {

		var key=6;
		var t=x;
	if (window.XMLHttpRequest) {
		var xmlhttp=new XMLHttpRequest();
	} else {  
		var xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	var url="client.php";
	xmlhttp.open("GET","client.php?set="+x+"&key="+key,true);
	xmlhttp.send(null);
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState==4 && xmlhttp.status==200) 
		{
			var return_data=xmlhttp.responseText;
			var text=return_data;
			var obj=JSON.parse(text);
			
			var tcount=Object.keys(obj).length;
			 // var tcount=15;
			alert("Remaining Players in SET "+x+" is : "+tcount);
			// alert(tcount);
			var table = document.getElementById("popteam1");
			var i=0;
			var j=0;
	 		var tabcount = table.rows.length;
	 		// alert(tcount);
			
			for(j=1;j<tabcount;j++)
			{
				table.deleteRow(1);
					
			}
			for(i=0;i<tcount;i++){
	    			var row = table.insertRow(1);
	    			var cell1 = row.insertCell(0);
	    			var cell2 = row.insertCell(1);
	    			var cell3 = row.insertCell(2);
	   				var cell4 = row.insertCell(3);
	    			
	    			cell1.innerHTML = obj[i].pid;
	    			cell2.innerHTML = obj[i].pname;
	    			cell3.innerHTML = obj[i].role;
	    			cell4.innerHTML = obj[i].set;
	    			
			}
			// document.getElementById("pop1").innerHTML=tname;	 
		}

	}

}
	
function squad(argument) {
	document.getElementById('light1').style.display='block';
	document.getElementById('fade1').style.display='block';

	// var tname=document.getElementById("otname"+str).innerHTML;

	
}

function auction_live(str){

	var key=2;
	document.getElementById('light').style.display='block';
	document.getElementById('fade').style.display='block';

	var tname=document.getElementById("otname"+str).innerHTML;
	//alert(tname);
	if (window.XMLHttpRequest) {
		var xmlhttp=new XMLHttpRequest();
	} else {  
		var xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	var url="client.php";
	xmlhttp.open("GET","client.php?tname="+tname+"&key="+key,true);
	xmlhttp.send(null);
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState==4 && xmlhttp.status==200) 
		{
			var return_data=xmlhttp.responseText;
			var text=return_data;
			var obj=JSON.parse(text);
			var bal=obj[0].bal;
			var seta=obj[1].count;
			var setb=obj[2].count;
			var setc=obj[3].count;
			var setd=obj[4].count;
			var sete=obj[5].count;
			var tcount=parseInt(seta)+parseInt(setb)+parseInt(setc)+parseInt(setd)+parseInt(sete);
			
			
			var table = document.getElementById("popteam");
			var i=0;
			var j=0;
	 		var tabcount = table.rows.length;
			
			for(j=1;j<tabcount;j++)
			{
				table.deleteRow(1);
					
			}
			for(i=0;i<tcount;i++){
	    			var row = table.insertRow(1);
	    			var cell1 = row.insertCell(0);
	    			var cell2 = row.insertCell(1);
	    			var cell3 = row.insertCell(2);
	   			    var cell4 = row.insertCell(3);
	    			var cell5 = row.insertCell(4);
	    			cell1.innerHTML = obj[5+(tcount-i)].pid;
	    			cell2.innerHTML = obj[5+(tcount-i)].pname;
	    			cell3.innerHTML = obj[5+(tcount-i)].role;
	    			cell4.innerHTML = obj[5+(tcount-i)].set;
	    			cell5.innerHTML = obj[5+(tcount-i)].sp;
			}
			document.getElementById("pop").innerHTML=tname;	 
		}

	}

}



function nav_popup(){
	document.getElementById('light').style.display='block';
	document.getElementById('fade').style.display='block';

	//var table = document.getElementById("popteam");
	//table.deleteRow(0);

}

function back(){
    
    document.getElementById('light').style.display='none';
    document.getElementById('fade').style.display='none';
}
function back1(){
    
    document.getElementById('light1').style.display='none';
    document.getElementById('fade1').style.display='none';
}
function nav(){    
    document.getElementById('nav_light').style.display='block';
    document.getElementById('nav_fade').style.display='block';
}

function nav_back(){
    document.getElementById('nav_light').style.display='none';
    document.getElementById('nav_fade').style.display='none';
}

function login() {
	var key=1;
	var name=document.getElementById("uname").value;
	var pass=document.getElementById("password").value;
	//alert("in login()");
	if (window.XMLHttpRequest) {
		var xmlhttp=new XMLHttpRequest();
	} else {  
		var xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	var url="client.php";
	xmlhttp.open("GET","client.php?uname="+name+"&pass="+pass+"&key="+key,true);
	xmlhttp.send(null);
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState==4 && xmlhttp.status==200) 
		{
			//alert("got response");
			var return_data=xmlhttp.responseText;
			var text=return_data;
			//alert("text - "+text);
			var obj=JSON.parse(text);
			var tname2=obj[0].tname;
			//alert("tname is"+tname2);
			
			if(tname2!=null){
				document.cookie="username="+tname2; 
				window.location="home.php";
				
			}else{
				alert("username or password is wrong!!");
				window.location="index.html";
			}
		}

	}

}




function begin(){
	
	var array1=document.cookie.split("=");
	//console.log(cookie);
	var tname=array1[1];
	//alert("cookie value - "+tname);
	if(tname==null)
		var len=0;
	if(len!=0){	
		col_right(tname);
		col_left(tname);
		col_middle(tname);
	}else{
		alert("please login to continue");
		window.location="index.html";
	}

}



function col_middle(){
	
	var key=5;
	if (window.XMLHttpRequest) {
		var xmlhttp=new XMLHttpRequest();
	} else {  
		var xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	var url="client.php";
	xmlhttp.open("GET","client.php?key="+key,true);
	xmlhttp.send(null);
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState==4 && xmlhttp.status==200) 
		{
			var return_data=xmlhttp.responseText;
			var text=return_data;
			var obj=JSON.parse(text);
			document.getElementById("auction_player").src="images/"+obj[0].pid+".jpg";
			
			//setTimeout(500);

			document.getElementById("bid_id").innerHTML = obj[0].pid;
			document.getElementById("bid_name").innerHTML = obj[0].pname;
			document.getElementById("bid_role").innerHTML = obj[0].role;
			document.getElementById("bid_set").innerHTML = obj[0].setn;
			document.getElementById("bid_price").innerHTML = obj[0].bp;
			
		}

	}	
}


function col_right(tname) {
	document.getElementById("tlogo").src="logo/"+tname+".jpg";
	document.getElementById("tname").innerHTML=tname;
	
	var key=2;

	if (window.XMLHttpRequest) {
		var xmlhttp=new XMLHttpRequest();
	} else {  
		var xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	var url="client.php";
	xmlhttp.open("GET","client.php?tname="+tname+"&key="+key,true);
	xmlhttp.send(null);
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState==4 && xmlhttp.status==200) 
		{
			var return_data=xmlhttp.responseText;
			var text=return_data;
			var obj=JSON.parse(text);
			var bal=obj[0].bal;
			var seta=obj[1].count;
			var setb=obj[2].count;
			var setc=obj[3].count;
			var setd=obj[4].count;
			var sete=obj[5].count;
			var tcount=parseInt(seta)+parseInt(setb)+parseInt(setc)+parseInt(setd)+parseInt(sete);
			
			//****************store tname into cookie
			document.getElementById("bal").innerHTML="BAL:&nbsp"+bal;
			document.getElementById("aset").innerHTML="SET-A:&nbsp&nbsp&nbsp"+seta;
			document.getElementById("bset").innerHTML="SET-B:&nbsp&nbsp&nbsp"+setb;
			document.getElementById("cset").innerHTML="SET-C:&nbsp&nbsp&nbsp"+setc;
			document.getElementById("dset").innerHTML="SET-D:&nbsp&nbsp&nbsp"+setd;
			document.getElementById("eset").innerHTML="SET-E:&nbsp&nbsp&nbsp"+sete;
		    	
			//table
			var table = document.getElementById("myteam");
			var i=0;
			var j=0;
	 		var tabcount = table.rows.length;
//alert(tabcount);			
			for(j=1;j<tabcount;j++)
			{
				table.deleteRow(1);
					
			}
			for(i=0;i<tcount;i++){
				//var row = table.deleteRow(1);
				//alert("tab");
	    			var row = table.insertRow(1);
	    			var cell1 = row.insertCell(0);
	    			var cell2 = row.insertCell(1);
	    			var cell3 = row.insertCell(2);
	   				var cell4 = row.insertCell(3);
	    			var cell5 = row.insertCell(4);
	    			cell1.innerHTML = obj[5+(tcount-i)].pid;
	    			cell2.innerHTML = obj[5+(tcount-i)].pname;
	    			cell3.innerHTML = obj[5+(tcount-i)].role;
	    			cell4.innerHTML = obj[5+(tcount-i)].set;
	    			cell5.innerHTML = obj[5+(tcount-i)].sp;
			}	 
		}

	}

}


function col_left(tname){
	var key=3;

	if (window.XMLHttpRequest) {
		var xmlhttp=new XMLHttpRequest();
	} else {  
		var xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	var url="client.php";
	xmlhttp.open("GET","client.php?key="+key+"&tname="+tname,true);
	xmlhttp.send(null);
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState==4 && xmlhttp.status==200) 
		{
			var return_data=xmlhttp.responseText;
			var text=return_data;
			var obj=JSON.parse(text);
			//alert("got team names");
			for(var i=0;i<11;i++){
				document.getElementById("otname"+(i+1)).innerHTML = obj[i].tname;
				document.getElementById("otbal"+(i+1)).innerHTML = obj[i].bal;
			}
			
		}

	}	
	
}




/*function deletet(){
for(var i=0;i<10;i++){
	
			var table = document.getElementById("myteam");
	    		var row = table.deleteRow(1);
}}*/

window.setInterval(function(){
	
	var count;
	var key=4;
	if (window.XMLHttpRequest) {
		var xmlhttp=new XMLHttpRequest();
	} else {  
		var xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	var url="client.php";
	xmlhttp.open("GET","client.php?key="+key,true);
	xmlhttp.send(null);
	
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState==4 && xmlhttp.status==200) 
		{
			var return_data=xmlhttp.responseText;
			var text=return_data;
			var obj=JSON.parse(text);
			count=obj[0].dbcount;
			if(global_count!=count)	{
				display();
				if(document.cookie.length!=0){
					begin();
				}
				//alert(count+"and "+global_count);
				global_count=count;
			}
		}
	}
	
 
}, 2000);

function logout(){
	name=document.getElementById("tname").innerHTML
	document.cookie = "username="+name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	window.location="index.html";
}


function display(){
	
	var key=5;
	if (window.XMLHttpRequest) {
		var xmlhttp=new XMLHttpRequest();
	} else {  
		var xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	var url="client.php";
	xmlhttp.open("GET","client.php?key="+key,true);
	xmlhttp.send(null);
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState==4 && xmlhttp.status==200) 
		{
			var return_data=xmlhttp.responseText;
			var text=return_data;
			var obj=JSON.parse(text);
			document.getElementById("auction_player").src="images/"+obj[0].pid+".jpg";
			
			//setTimeout(500);
			// alert(obj[0].pname);
			document.getElementById("did_id").innerHTML = obj[0].pid;
			document.getElementById("did_name").innerHTML = obj[0].pname;
			document.getElementById("did_role").innerHTML = obj[0].role;
			document.getElementById("did_set").innerHTML = obj[0].setn;
			document.getElementById("did_price").innerHTML = obj[0].bp;
			
		}

	}	
}

