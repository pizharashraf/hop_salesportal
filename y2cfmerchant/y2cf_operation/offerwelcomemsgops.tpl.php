<?php
global $base_url;
$merchant_id = arg(2);
$mer_explo = explode(",", $merchant_id);



?>
<table width="70%" border="0" align="center">
	<tr>
		<td><strong>Thank you</strong>,<br />
		<?php foreach($mer_explo as $key=>$value) {
			$merchant_detail = node_load($value); ?> Offer for merchant "<strong>
			<?php print $merchant_detail->title; ?> </strong>" added
		successfully! The merchant ID is <?php print $value; ?><br>
		<?php $merchantoffer_redirect_url = $base_url.'/node/add/merchant-outlet/'.$value; ?>
		<a href="<?php print $merchantoffer_redirect_url; ?>">Click here to
		add outlet for the merchant "<strong> <?php print $merchant_detail->title; ?>
		</strong>" </a><br />
		<?php } ?></td>
	</tr>
</table>
