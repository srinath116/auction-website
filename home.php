<html>
    <head>
    <title>DMPL 2K18 AUCTION</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link type="text/css" rel="stylesheet" href="style.css">
        <script src="client.js" type="text/javascript"></script>
        <style type="text/css">
        button
        {
            margin-left: 6px;
          padding: 10px 60px;
          border: 1px solid #fff;
          border-radius: 100px;
          font-weight: 500;
          box-shadow: 0 6px 5px 0 rgba(0, 0, 0, 0.5);
          background: linear-gradient(125deg, #0b81a3, #12182c);
          color: #fff;
          cursor: pointer;
          transition: .3s ease-in-out;
          outline: red;
          font-size: 13px;
          margin-bottom: 8px;
        }
        </style>
    </head>
    <body onload="begin()">
        <div class="hdr1">
            <div class="logo"><img src="logo/dmpl.jpg" width="50%" height="100%"></div>
            <div class="logodiv">DMPL 2K18</div>
        </div>
        <div class="hdr2">AUCTION&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</div>
        <div class="hdr3">
            <ul>
            <li class="menu" id="rules" onclick="alert('Yet to be updated!')">RULES</li>
            <li class="menu" onclick="squad()">SQUAD</li>
            <li class="menu" onclick="logout()">LOGOUT</li>
            </ul>
        </div>
        <div class="main">
            <div class="col_left">
                <div class="col_left_view">
                    <div class="left_view_head"></div>
                    <ul class="ul_main">
                    <li class="li_left_child" onclick="auction_live(1)">
                        <span class="span_team_head" id="otname1"></span>
                        <span class="span_team_tail" id="otbal1"></span>
                    </li>
                    <li class="li_left_child" onclick="auction_live(2)">
                        <span class="span_team_head" id="otname2"></span>
                        <span class="span_team_tail" id="otbal2"></span>
                    </li>
                        <li class="li_left_child" onclick="auction_live(3)">
                        <span class="span_team_head" id="otname3"></span>
                        <span class="span_team_tail" id="otbal3"></span>
                    </li>
                        <li class="li_left_child" onclick="auction_live(4)">
                        <span class="span_team_head" id="otname4"></span>
                        <span class="span_team_tail" id="otbal4"></span>
                    </li>
                        <li class="li_left_child" onclick="auction_live(5)">
                        <span class="span_team_head" id="otname5"></span>
                        <span class="span_team_tail" id="otbal5"></span>
                    </li>
		              <li class="li_left_child" onclick="auction_live(6)">
                        <span class="span_team_head" id="otname6"></span>
                        <span class="span_team_tail" id="otbal6"></span>
                    </li>
                    <li class="li_left_child" onclick="auction_live(7)">
                        <span class="span_team_head" id="otname7"></span>
                        <span class="span_team_tail" id="otbal7"></span>
                    </li>
                        <li class="li_left_child" onclick="auction_live(8)">
                       <span class="span_team_head" id="otname8"></span>
                        <span class="span_team_tail" id="otbal8"></span>
                    </li>
                        <li class="li_left_child" onclick="auction_live(9)">
                        <span class="span_team_head" id="otname9"></span>
                        <span class="span_team_tail" id="otbal9"></span>
                    </li>
                        <li class="li_left_child" onclick="auction_live(10)">
                        <span class="span_team_head" id="otname10"></span>
                        <span class="span_team_tail" id="otbal10"></span>
                    </li>
                        <li class="li_left_child" onclick="auction_live(11)">
                        <span class="span_team_head" id="otname11"></span>
                        <span class="span_team_tail" id="otbal11"></span>
                    </li>
                    </ul>
                </div>
            </div>

            <div id="light" class="white_content">
                <!-- <div class="pop_head"><b><a onclick="back()" href="#">&#9747</a></b></div> -->
		<div class="pop_team_name" id="pop"></div>
		<table id="popteam">
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>ROLE</th>
                                <th>SET</th>
                                <th>PRICE</th>
                            </tr>
                        </table>
            </div>
	    
            <div id="fade" class="black_overlay" onclick="back()"></div>
            <div id="light1" class="white_content">
                <!-- <div class="pop_head"><b><a onclick="back()" href="#">&#9747</a></b></div> -->
           <!--  <div class="pop_team_name" id="pop1"></div> -->
            <table id="popteam1" style="margin-top: 2%">
                    <button id="A" onclick="disp(this.id)">SET A</button>
                    <button id="B" onclick="disp(this.id) ">SET B</button>
                    <button id="C" onclick="disp(this.id) ">SET C</button>
                    <button id="D" onclick="disp(this.id) ">SET D</button>
                    <button id="E" onclick="disp(this.id) ">SET E</button>
                
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>ROLE</th>
                                <th>SET</th>
                                
                            </tr>
                        </table>
            </div>
        
            <div id="fade1" class="black_overlay" onclick="back1()"></div>

            <div class="col_mid">
                <div class="col_mid_top_view">
                    <div class="col_mid_top_view_head">
                        <b>CURRENT BID</b>
                    </div>
                    <div class="col_mid_top_view_image">
                        <img src="images/1.jpg" class="pic_update" id="auction_player">
                    </div>
                    <div class="col_mid_top_view_stat">
                        <div class="stat_update">
                            <div class="stat_odd">&#171 NAME &#187</div>
                            <div class="stat_even" id="bid_name"></div>                         
                            <div class="stat_odd">&#171 DMPL ID &#187</div>
                            <div class="stat_even" id="bid_id"></div>                                                        
                            <div class="stat_odd">&#171 ROLE &#187</div>
                            <div class="stat_even" id="bid_role"></div>                                                        
                            <div class="stat_odd">&#171 SET &#187</div>
                            <div class="stat_even" id="bid_set"></div>                                                       
                            <div class="stat_odd">&#171 BASE PRICE &#187</div>
                            <div class="stat_even" id="bid_price"></div>
                        </div>
                    </div>
                </div>
                <div class="col_mid_bot_view">
		
		<div><marquee class="marquee">This service is currently unavailable</marquee></div>
		<div class="col_mid_top_view_head">
                       <!--  <b>Akhil,Koushik,Dileep</b> -->
                    </div>		
		</div>
            </div>
            <div class="col_right">
                <div class="col_right_view">
                    <div class="col_right_logo">
                    <img src="" id="tlogo"width="100%" height="100%">
                    </div>
                    <div class="col_right_name" id="tname"></div>
                    <div class="col_right_money">
                        <div class="col_right_money_rem" id="bal"></span></div>
                    </div>
                    <div class="col_right_team_head">
                        <div class="heading_team">&#9733PLAYERS&#9733</div>
                        <div class="sets" id="aset">SET-A:</div>
                        <div class="sets" id="bset">SET-B:</div>
                        <div class="sets" id="cset">SET-C:</div>
                        <div class="sets" id="dset">SET-D:</div>
                        <div class="sets" id="eset">SET-E:</div>
                    </div>
                    <div class="col_right_team">
                        <table id="myteam">
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>ROLE</th>
                                <th>SET</th>
                                <th>PRICE</th>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
       <!--  <div class="footy">&copy 2K17 LAZY GROUPS</div> -->
    </body>
</html>
