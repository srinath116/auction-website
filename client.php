<?php

	define('hostname','localhost');
	define('user','root');
	define('password','');
	define('databasename','dmpl_2k18');
	
	$connect=mysqli_connect(hostname,user,password,databasename);
	if ( !$connect ) {
		die("Connection failed : " . mysql_error());
	}
	
	
	
	
	
	
	$key=$_GET["key"];
	


	if($key==1){
		$name=$_GET["uname"];
		$pass=$_GET["pass"];
		$query="SELECT team_name FROM login_credentials WHERE team_name='$name' AND password='$pass'";
		$res = mysqli_query($connect,$query);
		$auction = array();
	
		$row = mysqli_fetch_array($res);		
		$auction[]=array('tname'=>$row["team_name"]);
		echo json_encode($auction);
	}
		
	if($key==2){
		$tname=$_GET["tname"];
		$query="SELECT avail_bal FROM avail_bal AS a, login_credentials AS l WHERE a.team_id=l.team_id AND l.team_name='$tname'";
		$query0="SELECT COUNT(player_id) AS players FROM player_credentials AS p,login_credentials AS l WHERE l.team_name='$tname' AND l.team_id=p.team_id AND set_name='A'";
		$query1="SELECT COUNT(player_id) AS players FROM player_credentials AS p,login_credentials AS l WHERE l.team_name='$tname' AND l.team_id=p.team_id AND set_name='B'";
		$query2="SELECT COUNT(player_id) AS players FROM player_credentials AS p,login_credentials AS l WHERE l.team_name='$tname' AND l.team_id=p.team_id AND set_name='C'";
		$query3="SELECT COUNT(player_id) AS players FROM player_credentials AS p,login_credentials AS l WHERE l.team_name='$tname' AND l.team_id=p.team_id AND set_name='D'";
		$query4="SELECT COUNT(player_id) AS players FROM player_credentials AS p,login_credentials AS l WHERE l.team_name='$tname' AND l.team_id=p.team_id AND set_name='E'";

		$query5="SELECT player_id,player_name,role,set_name,sold_price FROM player_credentials AS p,login_credentials AS l WHERE p.team_id=l.team_id AND l.team_name='$tname'";

		$res  = mysqli_query($connect,$query);
		$res0 = mysqli_query($connect,$query0);
		$res1 = mysqli_query($connect,$query1);
		$res2 = mysqli_query($connect,$query2);
		$res3 = mysqli_query($connect,$query3);
		$res4 = mysqli_query($connect,$query4);
		$res5 = mysqli_query($connect,$query5);
		
		$row = mysqli_fetch_array($res);
		$row0 = mysqli_fetch_array($res0);
		$row1 = mysqli_fetch_array($res1);
		$row2 = mysqli_fetch_array($res2);
		$row3 = mysqli_fetch_array($res3);
		$row4 = mysqli_fetch_array($res4);
		
		$auction[]=array('bal'=>$row["avail_bal"]);		
		$auction[]=array('count'=>$row0["players"]);
		$auction[]=array('count'=>$row1["players"]);
		$auction[]=array('count'=>$row2["players"]);
		$auction[]=array('count'=>$row3["players"]);
		$auction[]=array('count'=>$row4["players"]);
		
		while($row5 = mysqli_fetch_array($res5)){
			$auction[]=array('pid'=>$row5["player_id"],'pname'=>$row5["player_name"],'role'=>$row5["role"],'set'=>$row5["set_name"],'sp'=>$row5["sold_price"]);
		}
		
		echo json_encode($auction);		
	}

	if($key==3){
		$tname=$_GET["tname"];
		$query="SELECT l.team_name,a.avail_bal FROM login_credentials AS l,avail_bal AS a WHERE a.team_id=l.team_id";
		$res = mysqli_query($connect,$query);
		$auction = array();

		while($row = mysqli_fetch_array($res)){
			
			if($tname!=$row["team_name"])		
				$auction[]=array('tname'=>$row["team_name"],'bal'=>$row["avail_bal"]);
			
		}
		echo json_encode($auction);
		
	}

	if($key==4){
		$query="SELECT count FROM current_bid";
		$res = mysqli_query($connect,$query);
		$auction = array();
	
		$row = mysqli_fetch_array($res);		
		$auction[]=array('dbcount'=>$row["count"]);
		echo json_encode($auction);
	}

	if($key==5){
		$query="SELECT player_id, player_name, role, set_name,base_price FROM current_bid";
		$res = mysqli_query($connect,$query);
		$row = mysqli_fetch_array($res);

		$auction[]=array('pid'=>$row["player_id"],'pname'=>$row["player_name"],'role'=>$row["role"],'setn'=>$row["set_name"],'bp'=>$row["base_price"]);

		echo json_encode($auction);
	}

	if ($key==6) {
		$set=$_GET["set"];
		$query="SELECT player_id, player_name, role, set_name FROM player_credentials where set_name='$set' AND status=0";
		$res = mysqli_query($connect,$query);
		// $row = mysqli_fetch_array($res);
		while($row = mysqli_fetch_array($res)){
		$auction[]=array('pid'=>$row["player_id"],'pname'=>$row["player_name"],'role'=>$row["role"],'set'=>$row["set_name"]);
		}
					
			echo json_encode($auction);

		
	}
?>





