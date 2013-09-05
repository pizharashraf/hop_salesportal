<?php
function y2cf_tips_bygroup(){
	global $base_url;
	//External database connection when on same server
	//$database_name = set_external_database_name();
	db_set_active('tips');

	global $poi_places;
	global $place_tips;
	global $tag_msisdn;
	global $tips_keywords;

	$poi_places = 'poi_places';
	$place_tips = 'place_tips';
	$tag_msisdn = 'tag_msisdn';
	$tips_keywords = 'tips_keywords';


	$group_id = arg(2);
	$add_tips_url = $base_url.'/node/add/tipsmanagement/'.$group_id;
	$gototips_url = $base_url.'/y2cf/tips/groups';
	$output .= '<ul class="sf-menu">
			<li class="current">
				<a href="'.$add_tips_url.'">ADD TIPS</a>
			</li>
			<li>
				<a href="'.$gototips_url.'">Go to home</a>
			</li>
			</ul><br />';

	/*
		<li>
		<a href="#">Tagged Msisdn</a>
		</li>
		*/

	global $user;
	global $base_url;
	$place_id = arg(2);
	$rs_rid  = get_user_role_id($user->uid);
	$per_page = set_per_page_counts();
	//'data' => 'To Time', 'field' => 'nn.created', 'sort' => 'desc'
	$header = array(
	array('data' => 'S.No', 'field' => 'id', 'sort' => 'desc'),
	array('data' => 'Place Name', 'field' => 'place_id'),
	array('data' => 'Offer Name', 'field' => 'offer_name'),
	array('data' => 'From Date', 'field' => 'from_date'),
	array('data' => 'To Date', 'field' => 'to_date'),
	array('data' => 'From Time', 'field' => 'from_time'),
	array('data' => 'To Time', 'field' => 'to_time'),
	array('data' => 'Days'),
	array('data' => 'Category', 'field' => 'category'),
	array('data' => 'Tips Req', 'field' => 'coupon_req'),
	array('data' => 'Message', 'field' => 'message'),
	array('data' => 'Sequence no.', 'field' => 'seq_id'),
	array('data' => 'Merchant SMS', 'field' => 'merchant_sms'),
	array('data' => 'Actions'),
	);


	if(isset($_POST['Search_val'])){
		$_SESSION['offer_name'] = $_POST['offer_name'];
		$_SESSION['from_date'] = $_POST['from_date'];
		$_SESSION['to_date'] = $_POST['to_date'];
	}

	if(isset($_POST['Search_reset']) && $_POST['Search_reset']=="View All"){
		unset($_SESSION['offer_name']);
		unset($_SESSION['from_date']);
		unset($_SESSION['to_date']);
	}

	$from_date = isset($_SESSION['from_date'])?$_SESSION['from_date']:"";
	$to_date = isset($_SESSION['to_date'])?$_SESSION['to_date']:"";
	$offer_name = isset($_SESSION['offer_name'])?$_SESSION['offer_name']:"";

	$data = array();
	$data[-1] = array(
				'sn'=> "<form name='tips_manager' method='post' action=''>",
				'place_name'=> "",
				'offer_name'=> "<input type='text' name='offer_name' size='10' class='ul_search10 form-text' value='".$offer_name."'>",

				'from_date'=> "",

				'to_date'=> "",

				'from_time'=> "",
				'to_time'=> "",
				'days'=> "",
				'category'=> "",
				'tips_req'=> "",
				'message'=> "",
				'sequence_no'=> "",
				'merchant_sms'=> "",
				'operations' =>"<input type='submit' name='Search_val' value='Filter' class='form-submit'>
					<input type='submit' name='Search_reset' value='View All' class='form-submit'></form>",
	);
	db_set_active('tips');
	//$sql_offer = "SELECT poi.* FROM {$place_tips} as poi where is_delete=0 and place_id = '".$place_id."' ";
	$sql_offer = "SELECT poi.* FROM {$place_tips} as poi where place_id = '".$place_id."' ";
	if(isset($_SESSION['offer_name']) && $_SESSION['offer_name']!= "" ) {
		$sql_offer .= " and poi.offer_name LIKE '".trim($_SESSION['offer_name'])."%' ";
	}
	/*


	'from_date'=> " <input size='10' id='assign-from' type='text' name='from_date' readonly='readonly' class='ul_search10 form-text' value='".$from_date."'>
	<script type='text/javascript'>
	jQuery(function() {
	jQuery('#assign-from').datepicker({
	changeMonth: true,
	changeYear: true,
	yearRange: '1950:2020',
	});
	});
	</script>",

	'to_date'=> " <input size='10' id='assign-from-to' type='text' name='to_date' readonly='readonly' class='ul_search10 form-text' value='".$to_date."'>
	<script type='text/javascript'>
	jQuery(function() {
	jQuery('#assign-from-to').datepicker({
	changeMonth: true,
	changeYear: true,
	yearRange: '1950:2020',
	});
	});
	</script>",



	if(isset($_SESSION['from_date']) && $_SESSION['from_date']!="") {
	$curdate_1 = explode("/", $_SESSION['from_date']);
	$entry_date = mktime(0,0,0,$curdate_1[0],$curdate_1[1],$curdate_1[2]);
	$sql_offer .= " and mktime(poi.from_date) >= '".$entry_date."' ";

	}
	if(isset($_SESSION['to_date']) && $_SESSION['to_date']!="") {
	$curdate_1 = explode("/", $_SESSION['to_date']);
	$entry_date = mktime(0,0,0,$curdate_1[0],$curdate_1[1],$curdate_1[2]);
	$sql_offer .= " and mktime(poi.to_date) <= '".$entry_date."' ";
	}
	*/

	//Total Count
	//$sql_tipscount .= "SELECT count(id) as tipscount FROM {$place_tips} as poi where place_id = '".$place_id."' and is_delete=0  ";
	$sql_tipscount .= "SELECT count(id) as tipscount FROM {$place_tips} as poi where place_id = '".$place_id."'   ";
	if(isset($_SESSION['offer_name']) && $_SESSION['offer_name']!= "" ) {
		$sql_tipscount .= " and poi.offer_name LIKE '".trim($_SESSION['offer_name'])."%' ";
	}
	$rs_tips = db_fetch_array(db_query($sql_tipscount));


	$res_offer = pager_query($sql_offer . tablesort_sql($header), $limit = 50);
	$serial_number = get_list_serial_number();




	while ($row = db_fetch_array($res_offer)) {
		$edit_url = $base_url.'/node/'.$row['nid'].'/edit?y2cf/tipsbygroup/'.$place_id;
		$act_delete_url = $base_url.'/y2cf/tipsdelete/'.$row['nid'];
		$delete_url = l('Delete', $act_delete_url);
		//Days manipulation
		$sun = ($row['sun'] == 1 || $row['sun'] == 2) ? 'SUN' : "-";
		$sunday = ($row['sun'] == 1 || $row['sun'] == 2) ? 'Sunday' : "-";

		$mon = ($row['mon'] == 1 || $row['mon'] == 3) ? 'M' : "-";
		$monday = ($row['mon'] == 1 || $row['mon'] == 3) ? 'Monday' : "-";

		$tue = ($row['tue'] == 1 || $row['tue'] == 4) ? 'TU' : "-";
		$tuesday = ($row['tue'] == 1 || $row['tue'] == 4) ? 'Tuesday' : "-";

		$wed = ($row['wed'] == 1 || $row['wed'] == 5) ? 'W' : "-";
		$wednesday = ($row['wed'] == 1 || $row['wed'] == 5) ? 'Wednesday' : "-";

		$thu = ($row['thu'] == 1 || $row['thu'] == 6) ? 'TH' : "-";
		$thurusday = ($row['thu'] == 1 || $row['thu'] == 6) ? 'Thurusday' : "-";

		$fri = ($row['fri'] == 1 || $row['fri'] == 7) ? 'F' : "-";
		$friday = ($row['fri'] == 1 || $row['fri'] == 7) ? 'Friday' : "-";

		$sat = ($row['sat'] == 1 || $row['sat'] == 8) ? 'SAT' : "-";
		$saturday = ($row['sat'] == 1 || $row['sat'] == 8) ? 'Saturday' : "-";

		$days = $mon.'-'.$tue.'-'.$wed.'-'.$thu.'-'.$fri.'-'.$sat.'-'.$sun;
		$all_days = $monday.'-'.$tuesday.'-'.$wednesday.'-'.$thurusday.'-'.$friday.'-'.$saturday.'-'.$sunday;



		//Category  1 Tips  2  Suggestion 3 Recommandation   4 Others

		if($row['catagory'] == 1) {
			$category  = 'Tips';
		}elseif($row['catagory'] == 2) {
			$category  = 'Suggestion';
		}elseif($row['catagory'] == 3) {
			$category  = 'Recommandation';
		}elseif($row['catagory'] == 4) {
			$category  = 'Others';
		}else {
			$category  = '--';
		}

		//Tips Req
		$tips_req = ($row['coupon_req'] == 1) ? 'Yes' : "No";



		//$place_name = db_result(db_query("SELECT name FROM {$poi_places} as poi where id = '".$place_id."' and is_delete=0 "));

		$place_name = db_result(db_query("SELECT name FROM {$poi_places} as poi where id = '".$place_id."'  "));

		$data[] = array(
		$serial_number++,
		$place_name,
		$row['offer_name'],
		$row['from_date'],
		$row['to_date'],
		$row['from_time'],
		$row['to_time'],
						'<span class="qtip-link">
						<div class="qtip-tooltip">'.$all_days.'</div>
						'.$days.'
					  </span>',
		$category,
		$tips_req,
						'<span class="qtip-link">
						<div class="qtip-tooltip">'.$row['message'].'</div>
						'.substr($row['message'], 0, 15).'
					  </span>',
		$row['seq_id'],
						'<span class="qtip-link">
						<div class="qtip-tooltip">'.$row['merchant_sms'].'</div>
						'.substr($row['merchant_sms'], 0, 15).'
					  </span>',
		$delete_url.'&nbsp;&nbsp;&nbsp;'.l('Edit', $edit_url) ,
		);
	}
	db_set_active('default');

	$total_mer_outlets = get_merchant_outlet_count_query($merchant_id);
	$add_mer_outlet = $base_url.'/node/add/merchant-outlet/'.$merchant_id;

	$output .= theme('table', $header, $data);
	$output .= theme('pager');
	$output .= get_custom_pager_request($rs_tips['tipscount']);
	return $output;
}