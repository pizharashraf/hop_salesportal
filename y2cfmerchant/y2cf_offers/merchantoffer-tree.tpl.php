<?php
global $base_url;
global $user;
print l('Merchant offers Hierarchy', $base_url.'/y2cf/offerhierarchy');
?>
<script type="text/javascript">
		var simpleTreeCollection;
		$(document).ready(function(){

			simpleTreeCollection = $('.simpleTree').simpleTree({
				autoclose: false,
				afterClick:function(node){
					//alert("text-"+$('span:first',node).text());
				},
				afterMove:function(){
					var serialStr = "";
					var order = "";
					//alert ($("ul.simpleTree li span").length)
					$("ul.simpleTree li span").each(function(){
						parentId = $(this).parent("li").parent("ul").parent("li").attr("id");
						if (parentId == undefined) parentId = "root";
						order = (($(this).parent("li").prevAll("li").size()+1))/2;
						if ( parentId != "root") serialStr += ""+parentId+":"+$(this).parent("li").attr("id")+":"+order+"|";
					});
					//$("#serializedList").html(serialStr);
					$.ajax({
					   type: "POST",
					   url: "saveData.php",
					   data: "serialized="+serialStr,
					   success: function(msg){
					   	 $("#serializedList").html(msg);
					   }
					 });

					return false;

				},
				docToFolderConvert: false,
				afterAjax:function()
				{
					//alert('Loaded');
				},
				animate:true
			});


		});
		</script>

<div id="dbcontent-body">
<div id="dbcontent-center">
<div class="innercontent-row"></div>
<div class="profile-content">
<div class="profile-row">
<div class="mycont_container">
<div class="mycont-box"></div>
<div class="mycont_content">
<div class="mycont_drow">
<div id="left-pane">
<div class="" id="left-pane-content"><?php
$all_user = db_query("select distinct rm_id from {users} where rm_id not in(0,1,66,'".$user->uid."') ");
$u_arr = array();
while($rs = db_fetch_array($all_user)){
	$u_arr[] = $rs;
}
foreach($u_arr as $result_num => $sub_array) {
	$new_array[$result_num] = $sub_array['rm_id'];
}
$users_uid = implode(",", $new_array);
$rs_rid  = get_user_role_id($user->uid);
if($rs_rid == 'y2cfmanager') {
	$sql_rsCategories .= "SELECT * FROM {users} WHERE uid !=0 ";
}
if($user->uid == '1') {
	$sql_rsCategories .= "SELECT * FROM {users} WHERE uid !=0 ";
}

if($rs_rid == 'reporting manager' || $rs_rid == 'salesmanager') {
	$u_arr = get_all_salesman_of_rm($user->uid);
	$new_array = array();
	foreach($u_arr as $result_num => $sub_array) {
		$new_array[$result_num] = $sub_array['uid'];
	}
	$users_uid = implode(",", $new_array);
	$all_sm_of_smngr = get_all_salesman_of_all_salesmanager($user->uid);
	if(!empty($all_sm_of_smngr)){
		$sql_rsCategories .= " SELECT * FROM {users} WHERE (uid in (".$users_uid.") OR uid in (".$all_sm_of_smngr.") OR uid='".$user->uid."') ";
	}else
	{
		$sql_rsCategories .= " SELECT * FROM {users} WHERE  (uid in (".$users_uid.") OR  uid='".$user->uid."') ";
	}
}
$sql_rsCategories .= "ORDER BY uid";
$rsCategories = db_query($sql_rsCategories);
$arrayCategories = array();

while($row = db_fetch_array($rsCategories)){
	$arrayCategories[$row['uid']] = array("parent_id" => $row['rm_id'], "name" => $row['name']);
}
?>

<ul class="simpleTree">
	<li id="0" class="root"><?php createMerchantOfferTree($arrayCategories, $user->uid) ?></li>
</ul>
</div>
</div>
<div id="right-pane">
<div id="right-pane-content"><?php $user_id = arg(2);
print y2cf_merchants_offers($user_id); ?></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

