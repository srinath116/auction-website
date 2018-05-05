<?php

	define('hostname','localhost');
	define('user','root');
	define('password','');
	define('databasename','dmpl_2k18');
	
	
	
	
	$connect=mysqli_connect(hostname,user,password,databasename);
	
	$key=$_GET["key"];
	
	
	
	
	// 
	
	if($key=="1"){	
		$set=$_GET["set"];
		$status=$_GET["status"];
		$query="SELECT player_id FROM player_credentials WHERE status='$status' AND set_name='$set'";
		
		$res = mysqli_query($connect,$query);
		
		$auction = array();
		while($row = mysqli_fetch_array ($res)){
			array_push($auction,"$row[0]");	
		}
		echo json_encode(array("id"=>$auction));
	}

	if($key=="2"){
		$status=$_GET["status"];
		$id=$_GET["id"];
		

		$query0="SELECT player_name,role,set_name FROM player_credentials WHERE status='$status' AND player_id='$id'";
		
		$res0 = mysqli_query($connect,$query0);
		$auction = array();
		$row = mysqli_fetch_array ($res0);	
		$auction=array('pname'=>"$row[0]",'role'=>"$row[1]");		
		
		$temp1=$row['player_name'];
		$temp2=$row['role'];
		$temp3=$row['set_name'];
		$query1="SELECT base_price FROM base_price WHERE set_name='$temp3'";
		$res1 = mysqli_query($connect,$query1);
		$row1 = mysqli_fetch_array ($res1);
		$temp4=$row1['base_price'];
		$query2="UPDATE current_bid SET player_id='$id', player_name='$temp1', role='$temp2', set_name='$temp3', base_price='$temp4'";
		$res2 = mysqli_query($connect,$query2);
		$query3="UPDATE current_bid SET count=count+1";
		$res3 = mysqli_query($connect,$query3);
		echo json_encode($auction);
	
	}


	if($key=="3"){
		$tname=$_GET["tname"];
		$sp=$_GET["sp"];
		$pid=$_GET["pid"];

	

		$query1="SELECT team_id FROM login_credentials WHERE team_name='$tname'";
		$res1=mysqli_query($connect,$query1);
		$resf1=mysqli_fetch_array($res1);

		
		$query2="UPDATE player_credentials SET team_id='$resf1[0]', sold_price='$sp',status='2' WHERE player_id='$pid'";
		$res2=mysqli_query($connect,$query2);

		$query3="UPDATE avail_bal SET avail_bal=avail_bal-'$sp' WHERE team_id='$resf1[0]'";
		$res3=mysqli_query($connect,$query3);
		
		$query4="SELECT avail_bal FROM avail_bal WHERE team_id='$resf1[0]'";
		$res4=mysqli_query($connect,$query4);
		$auction = array();
			$row = mysqli_fetch_array ($res4);
			$auction=array('teamid'=>"$resf1[0]",'bal'=>"$row[0]");			
		$query5="UPDATE current_bid SET count=count+1";
		$res5 = mysqli_query($connect,$query5);

		echo json_encode($auction);		

	}

	if($key=="4"){
		$pid=$_GET["pid"];
		

		$query="UPDATE player_credentials SET status='1' WHERE player_id='$pid'";
		$res=mysqli_query($connect,$query);
		$query5="UPDATE current_bid SET count=count+1";
		$res5 = mysqli_query($connect,$query5);


	}

	if($key=="5"){

		$query="SELECT l.team_name, a.avail_bal FROM login_credentials AS l JOIN avail_bal AS a ON l.team_id=a.team_id";
		$res = mysqli_query($connect,$query);
		$auction = array();
		
		while($row = mysqli_fetch_array($res)){		
			$auction[]=array('tname'=>$row["team_name"],'bal'=>$row["avail_bal"]);
				
		}
		echo json_encode($auction);
	}

	mysqli_close($connect);
?>







