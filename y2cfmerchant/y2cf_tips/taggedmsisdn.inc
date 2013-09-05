<?php
function y2cf_tagged_msisdn(){
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
	$add_keywords_url = $base_url.'/node/add/tips-taggedmsisdn';
	$gototips_url = $base_url.'/y2cf/tips/groups';
	$output .= '<ul class="sf-menu">
			<li class="current">
				<a href="'.$add_keywords_url.'">ADD Tagged Msisdn</a>
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
	array('data' => 'S.No', 'field' => 'id'),
	array('data' => 'Name', 'field' => 'name'),
	array('data' => 'Msisdn', 'field' => 'msisdn'),
	array('data' => 'Latitude', 'field' => 'lat'),
	array('data' => 'Longitude', 'field' => 'lon'),
	array('data' => 'No. of days', 'field' => 'no_of_days'),
	array('data' => 'Created date', 'field' => 'created_dttm','sort' => 'desc'),
	array('data' => 'Actions'),
	);




	$data = array();

	db_set_active('tips');
	$sql_offer = "SELECT * FROM {$tag_msisdn}  ";



	//Total Count
	$sql_tipscount .= "SELECT count(id) as tipscount FROM {$tag_msisdn} ";

	$rs_tips = db_fetch_array(db_query($sql_tipscount));


	$res_offer = pager_query($sql_offer . tablesort_sql($header), $limit = 50);
	$serial_number = get_list_serial_number();
	while ($row = db_fetch_array($res_offer)) {
		$edit_url = $base_url.'/node/'.$row['nid'].'/edit?y2cf/keywordstips';
		$act_delete_url = $base_url.'/y2cf/tagmsisdndelete/'.$row['nid'];
		$delete_url = l('Delete', $act_delete_url);
		$detail_url = $base_url.'/node/'.$row['nid'];
		//Category  1 Tips  2  Suggestion 3 Recommandation   4 Others

		//Tips Req
		$is_offer = ($row['is_offer'] == 1) ? 'Yes' : "No";
		$data[] = array(
		$serial_number++,
		$row['name'],
		$row['msisdn'],
		$row['lat'],
		$row['lon'],
		$row['no_of_days'],
		$row['created_dttm'],
		$delete_url.'&nbsp;&nbsp;&nbsp;'.l('Edit', $edit_url).'&nbsp;&nbsp;&nbsp;'.l('Detail', $detail_url),
		);
	}

	db_set_active('default');
	//$total_mer_outlets = get_merchant_outlet_count_query($merchant_id);
	//$add_mer_outlet = $base_url.'/node/add/merchant-outlet/'.$merchant_id;

	$output .= theme('table', $header, $data);
	$output .= theme('pager');
	$output .= get_custom_pager_request($rs_tips['tipscount']);
	return $output;
}