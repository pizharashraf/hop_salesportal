<?php
global $base_url;
$outlet_id = arg(2);
$outlet_explo = explode(",", $outlet_id);
$merchant_nid = db_result(db_query("select field_hopper_merchant_olt_nid from {content_type_merchant_outlet} where nid = '".$outlet_explo[0]."' "));

$add_outlet_url = $base_url.'/node/add/merchant-outlet/'.$merchant_nid;
$merchangt_name = db_result(db_query("select title from {node} where nid = '".$merchant_nid."' "));


?>
<table width="70%" border="0" align="center">
	<tr>
		<td><strong>Thank you</strong>, Outlet Added for merchant "<strong><?php print $merchangt_name; ?></strong>"
		<br />
		<br />
		<?php foreach($outlet_explo as $key=>$value) {
			$outlet_detail = node_load($value); ?> Outlet "<strong> <?php print $outlet_detail->title; ?>
		</strong>" added successfully! <br />
		<?php } ?> <br />
		<a href="<?php print $add_outlet_url; ?>">Click here to add more
		outlet </a></td>
	</tr>
</table>
