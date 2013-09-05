<?php
//ASSIGN VARIABLES TO USER INFO
function writeToLogFile($msg) {
	$today = date("Y_m_d"); 
	$logfile = $today."_log_airtel.txt"; 
	$dir = 'logs';
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

function writeToLogFileWithResp($msg) {
	$today = date("Y_m_d"); 
	$logfile = $today."_log_airtel_with_resp.txt"; 
	$dir = 'logs';
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
$htmssdn = $_SERVER["HTTP_X_MSISDN"];
$source = $_GET["source"];
$key = $_GET["key"];
if(!$source)
	$source='promo';
	if(!$htmssdn && $source && $source=='ALD' && $_GET["msisdn"])
	$htmssdn = $_GET["msisdn"]; 
	$time = date("M j G:i:s Y"); 
	$ip = getenv('REMOTE_ADDR');
	$userAgent = getenv('HTTP_USER_AGENT');
	$referrer = getenv('HTTP_REFERER');
	$query = getenv('QUERY_STRING');
	//CALL OUR LOG FUNCTION
	$msg = "IP:" . $ip . ",msisdn:" . $htmssdn . ",TIME:" . $time . ",REFERRER:" . $referrer . ",SEARCHSTRING:" . $query . ",USERAGENT:" . $userAgent;
	if(!$key)
		writeToLogFile($msg);
	//if(!$htmssdn)
	//        $htmssdn=$_GET["msisdn"];
	/*if($htmssdn)
	{
		$data = file_get_contents("http://10.210.10.4:8080/location-service/location?mobile_number=".$htmssdn."&telco=airtel&channel=m.hoppr.com");
		//echo $data;
	}*/
/*if($htmssdn && !$key)
{
	//writeToLogFile($msg);
	$m = base64_encode($htmssdn);
	$t = base64_encode('airtel');
	//header("Location:http://m.hoppr.com/?m=$m&t=$t&s=$userAgent&r=$referrer&key=$source");
	header("Location:http://m.hoppr.com/?m=$m&t=$t&key=$source");
	return;
}*/
if($key)
	$source = $key;
	//if( $htmssdn == '919717931477' || $htmssdn == '918130508119' || $htmssdn == '918800493704' )
	//{
if($htmssdn)
{
	//echo $htmssdn;
	$url = 'http://10.210.1.4:8080/receptionist/wap';
	$body = 'mobile_number='.$htmssdn.'&telco=airtel&text='.$source.':ferns%20n%20petals&source=wap&place_id=50f65b0dbbcee325d3000002&place_name=ferns%20n%20petals';
	//$body = 'mobile_number='.$htmssdn.'&telco=airtel&text='.$source.':Archies&source=wap&place_id=506c01ed047efcfede7f31a2&place_name=Archies';
	$c = curl_init ($url);
	curl_setopt ($c, CURLOPT_POST, true);
	curl_setopt ($c, CURLOPT_POSTFIELDS, $body);
	curl_setopt ($c, CURLOPT_RETURNTRANSFER, true);
	$data = curl_exec ($c);
	//if($data === false)
	//	$data = curl_exec ($c);
	curl_close ($c);
	//writeToLogFileWithResp($msg . ",RESPONSE:". $data);
	//echo $data;
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
          <td valign="middle" class="brand_text" >check your SMS inbox for the reward!</td>
        </tr>
      </table>
    </div>
    <div class="content"> <span class="title">what next?</span><br>
      with hoppr Check into places you visit, and discover special Offers that you'll love<br>
      <span class="sub_title">click a button to discover more</span> 
    </div>
    <div class="mainbtn">
    <div class="smsbtnblue">
     <a href="tel:*566*5%23">
      <span>Dial *566*5#</span> <br />
      click to dial toll free
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
