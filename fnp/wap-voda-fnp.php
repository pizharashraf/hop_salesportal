<!DOCTYPE html>
<?php
 function writeToLogFile($msg) {
     $today = date("Y_m_d"); 
     $logfile = $today."_log_voda.txt"; 
     $dir = '../logs';
     $saveLocation=$dir . '/' . $logfile;
     if  (!$handle = @fopen($saveLocation, "a")) {
          exit;
     }
     else {
          if (@fwrite($handle,"$msg\r\n") === FALSE) {
               exit;
          }
   
          @fclose($handle);
     }
}
 
?>
<?php 
		$htmssdn = $_SERVER["HTTP_X_MSISDN"];
		$source = $_GET["source"];
 		$key = $_GET["key"];
                if(!$source)
                        $source='promo';

		$time = date("M j G:i:s Y"); 
		$ip = getenv('REMOTE_ADDR');
		$userAgent = getenv('HTTP_USER_AGENT');
		$referrer = getenv('HTTP_REFERER');
		$query = getenv('QUERY_STRING');
		//CALL OUR LOG FUNCTION
		$msg = "IP:" . $ip . ",msisdn:" . $htmssdn . ",TIME:" . $time . ",REFERRER:" . $referrer . ",SEARCHSTRING:" . $query . ",USERAGENT:" . $userAgent;
		if(!$key)
         writeToLogFile($msg);
		
                if($key)
                        $source = $key;
		

                $htmssdn = $_SERVER["HTTP_X_MSISDN"];
if(!$htmssdn)
        $htmssdn = $_GET["msisdn"];
        			
if($htmssdn)
{
        
        $url = 'http://10.210.1.4:8080/receptionist/wap';
        
        $body = 'mobile_number='.$htmssdn.'&telco=tata&text='.$source.':ferns%20n%20petals&source=wap&place_id=50f65b0dbbcee325d3000002&place_name=ferns%20n%20petals';
        $c = curl_init ($url);
        curl_setopt ($c, CURLOPT_POST, true);
        curl_setopt ($c, CURLOPT_POSTFIELDS, $body);
        curl_setopt ($c, CURLOPT_RETURNTRANSFER, true);
        $data = curl_exec ($c);
        
        curl_close ($c);
        
}


		
        ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<title>hoppr - never a dull moment</title>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
<style>
body {
	margin: 0px;
	padding: 0px;
	font-size: 15px;
	line-height: 18px;
	color: #333333;
	background-color: #ffffff;
	font-family: Arial, Helvetica, sans-serif;
}
.container {
	margin-left: auto;
	margin-right: auto;
	max-width: 497px;
	width: 100%
}
.mainImg {
	max-width: 495px;
	max-height: auto;
	width: 100%;
	border: solid 1px #ccc;
}
.white_box {
	background: #fff;
	border: #d9e0e6 1px solid;
}
.logo {
	background-color: #305c8c;
}
.logo img {
	padding: 6px 6px 3px 8px;
	height: 30px;
}
.footer {
	background-color: #305c8c;
	text-align: center;
	padding: 6px 0px;
	color: #FFF;
}
.brand {
	margin:5px;
	border-radius: 4px;
	border: solid 1px #CCCCCC;
	color: #0e237e;
	font-size: 20px;
	line-height: 25px;
	font-family: Arial, Helvetica, sans-serif
}
.brand_text {
	background: #f0ede8;
	color: #305c8c;
	font-weight: 600;
	padding: 10px 10px;
}
.brand img {
	height: 50px;
	width: auto;
	padding: 5px;
	vertical-align: middle
}
.content {
	text-align: center;
	color: #282828;
	font-size: 15px;
	line-height: 25px;
	padding: 8px 20px;
	background-color: #f8f5ef;
}
.content .title {
	font-size: 20px;
	font-weight: 600;
	line-height: 28px;
}
.content .sub_title {
	font-style: italic;
	font-weight: bold;
	line-height: 26px;
}
.smsbtnyellow {
	color: #fff;
	display: block;
	text-align: center;
	margin: 15px;
	padding: 5px;
	text-decoration: none;
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
	border-radius: 5px;
	border: solid 1px #cc7447;
	background: #cc7447;
	background-image: -moz-linear-gradient(top, #d58752, #cc7447);
	background-image: -webkit-gradient(linear, center top, center bottom, from(#d58752), to(#cc7447));
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#d58752', endColorstr='#cc7447');
	-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#d58752', endColorstr='#cc7447')";
	background-image: linear-gradient(top, #d58752, #cc7447);
}
.smsbtnblue {
	color: #fff;
	display: block;
	text-align: center;
	margin:15px;
	padding:5px;
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
	border-radius: 5px;
	border: solid 1px #235ba7;
	background: #235ba7;
	background-image: -moz-linear-gradient(top, #3e7ecf, #235ba7);
	background-image: -webkit-gradient(linear, center top, center bottom, from(#3e7ecf), to(#235ba7));
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#3e7ecf', endColorstr='#235ba7');
	-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#3e7ecf', endColorstr='#235ba7')";
	background-image: linear-gradient(top, #3e7ecf, #235ba7);
}
.smsbtnblue a, .smsbtnyellow a{
	display:block;
	text-decoration: none;
	color:#FFF;	
	width:100%
}
.mainbtn span {
	font-size: 20px;
	line-height: 30px;
}
</style>
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-32016609-1']);
  _gaq.push(['_setDomainName', 'hoppr.com']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
</head>
<body>
<div class="container">
  <div class="logo"> <img src="img/logo_new.png" alt="" /> </div>
  <div class="white_box">
    <div class="brand">
      <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <tr>
          <td align="center" valign="middle"><img src="img/fnplogotata.jpg" alt="" /></td>
          <td valign="middle" class="brand_text" >check your SMS inbox for your coupon code reward!</td>
        </tr>
      </table>
    </div>
    <div class="content"> 
      with hoppr you can Check In to places & discover Special<br /> Offers that you'll love.<br>
      <span class="sub_title">click the button to discover more</span> 
    </div>
    <div class="mainbtn">
    <div class="smsbtnblue">
     <a href="sms:56660?body=fnp">
      <span>SMS Rewards to 56660 </span> <br />
      (toll-free)
      </a> 
      </div>
      <!--<div class="smsbtnyellow">
      <a href="http://hoppr.in/mhop">
      <span>m.hoppr.com</span> <br />
      click to visit our mobile website
      </a> 
      </div>-->
    </div>
    <br />
  </div>
  <div class="footer"> tnc@hoppr.com/tnc </div>
</div>
</body>
</html>
