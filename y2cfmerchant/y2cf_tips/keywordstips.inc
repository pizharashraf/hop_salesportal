<?php
function y2cf_tips_keywords(){
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

	/*
	 $poi_places = $database_name.'.poi_places';
	 $place_tips = $database_name.'.place_tips';
	 $tag_msisdn = $database_name.'.tag_msisdn';
	 $tips_keywords = $database_name.'.tips_keywords';
	 */

	$group_id = arg(2);
	$add_keywords_url = $base_url.'/node/add/tips-manage-keywords';
	$gototips_url = $base_url.'/y2cf/tips/groups';

	//<img src="http://124.153.106.166/tips/sites/all/modules/y2cfmerchant/y2cf_tips/back.png" alt="go to home" title="go to home" />

	$output .= '<ul class="sf-menu">
			<li class="current">
				<a href="'.$add_keywords_url.'">ADD Keyword</a>
			</li>
			<li>
				<a href="'.$gototips_url.'">go to home</a>
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
	array('data' => 'S.No', 'field' => 'id'),
	array('data' => 'Offer Name', 'field' => 'offer_name'),
	array('data' => 'Is Offer', 'field' => 'is_offer'),
	array('data' => 'Keywords', 'field' => 'keyword'),
	array('data' => 'Operator Name', 'field' => 'operator_name'),
	array('data' => 'SMS 1', 'field' => 'sms1'),
	array('data' => 'SMS 2', 'field' => 'sms2'),
	array('data' => 'SMS 3', 'field' => 'sms3'),
	array('data' => 'SMS 4', 'field' => 'sms4'),
	array('data' => 'SMS 5', 'field' => 'sms5'),
	array('data' => 'SMS 6', 'field' => 'sms6'),
	array('data' => 'Created date', 'field' => 'created','sort' => 'desc'),
	array('data' => 'Actions'),
	);




	$data = array();

	db_set_active('tips');
	//$sql_offer = "SELECT poi.* FROM {$tips_keywords} as poi where poi.is_delete=0 ";
	$sql_offer = "SELECT poi.* FROM {$tips_keywords} as poi where 1=1 ";



	//Total Count
	//$sql_tipscount .= "SELECT count(id) as tipscount FROM {$tips_keywords} where is_delete=0 ";
	$sql_tipscount .= "SELECT count(id) as tipscount FROM {$tips_keywords}  ";

	$rs_tips = db_fetch_array(db_query($sql_tipscount));


	$res_offer = pager_query($sql_offer . tablesort_sql($header), $limit = 50);
	$serial_number = get_list_serial_number();
	while ($row = db_fetch_array($res_offer)) {
		$edit_url = $base_url.'/node/'.$row['nid'].'/edit?y2cf/keywordstips';
		$act_delete_url = $base_url.'/y2cf/keyworddelete/'.$row['nid'];
		$delete_url = l('Delete', $act_delete_url);
		$detail_url = $base_url.'/node/'.$row['nid'];
		//Category  1 Tips  2  Suggestion 3 Recommandation   4 Others

		//Tips Req
		$is_offer = ($row['is_offer'] == 1) ? 'Yes' : "No";
		$data[] = array(
		$serial_number++,
		$row['offer_name'],
		$is_offer,
		$row['keyword'],
		$row['operator_name'],
			'<span class="qtip-link">
            <div class="qtip-tooltip">'.$row['sms1'].'</div>
            '.substr($row['sms1'], 0, 15).'
          </span>',

			  '<span class="qtip-link">
            <div class="qtip-tooltip">'.$row['sms2'].'</div>
            '.substr($row['sms2'], 0, 15).'
          </span>',

			  '<span class="qtip-link">
            <div class="qtip-tooltip">'.$row['sms3'].'</div>
            '.substr($row['sms3'], 0, 15).'
          </span>',

			  '<span class="qtip-link">
            <div class="qtip-tooltip">'.$row['sms4'].'</div>
            '.substr($row['sms4'], 0, 15).'
          </span>',

			  '<span class="qtip-link">
            <div class="qtip-tooltip">'.$row['sms5'].'</div>
            '.substr($row['sms5'], 0, 15).'
          </span>',
			  '<span class="qtip-link">
            <div class="qtip-tooltip">'.$row['sms6'].'</div>
            '.substr($row['sms6'], 0, 15).'
          </span>',

		date("m-d-Y", $row['created']),
		$delete_url.'&nbsp;&nbsp;&nbsp;'.l('Edit', $edit_url).'&nbsp;&nbsp;&nbsp;'.l('Detail', $detail_url),
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