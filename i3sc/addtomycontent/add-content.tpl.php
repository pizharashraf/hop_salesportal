<?php
  global $base_url;
  global $user;

  if(empty($user->uid)){
	drupal_set_message("You are not authorized to add content to any folders. To use these please login");
  drupal_goto($base_url);
}


drupal_add_css(drupal_get_path('module', 'addtomycontent') . '/css/jquery.treeview.css');
drupal_add_css(drupal_get_path('module', 'addtomycontent') . '/css/tree.css');
drupal_add_css(drupal_get_path('module', 'addtomycontent') . '/addcontent.css');
drupal_add_js(drupal_get_path('module', 'addtomycontent') . '/js/jquery-1.2.6.pack.js');
drupal_add_js(drupal_get_path('module', 'addtomycontent') . '/js/jquery.simple.tree.js');


//Folder deleting process
if(arg(1) == 'del') {
		$fol_id = arg(2);
		$node_nid = arg(3);
		//delete folder + corresponding data for a particular user
		
		db_query("DELETE FROM {aa_i3sc_folder_manager} where id='".$fol_id."' AND uid= '".$user->uid."' ");
		db_query("DELETE FROM {aa_i3sc_folder_content} where folder_id='".$fol_id."' AND uid= '".$user->uid."' ");
		drupal_set_message("Folder deleted successfully");
		
		$my_con_fid = db_result(db_query("SELECT id from {aa_i3sc_folder_manager} where folder_name='My Content' AND uid= '".$user->uid."' "));
		$rs_url = $base_url.'/add_to_my_content/'.$my_con_fid.'/'.$node_nid;
		//$rs_url = $base_url.'node/'.$node_nid;
  drupal_goto($rs_url);
}
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
		
		
		<?php
		
		  $rsCategories = db_query("SELECT * FROM {aa_i3sc_folder_manager} WHERE uid = '".$user->uid."' ORDER BY parent_folder ");
 
// create the empty array
$arrayCategories = array();
 
while($row = db_fetch_array($rsCategories)){ 
	$arrayCategories[$row['id']] = array("parent_id" => $row['parent_folder'], "name" => $row['folder_name']);	
}

?>


<div id="browse-content" class="add">
  <div id="browse-content-wrap">
    <h1 class="title">Choose a Save Location</h1>
    <div id="pane">
      <div style="height: 335px;" id="left-pane">
        <div class="" id="left-pane-content">
        
        
        
         	<ul class="simpleTree">
						<li id="0" class="root"><?php createTree($arrayCategories, 0) ?></li>
					</ul>
            
            
            
          </div>         
        </div>
        
       

        <?php 
    
        $content_id = arg(1);
        
        if(is_numeric($content_id)) {
        $node_nid = arg(2);
          $fc_url = $base_url.'/add_to_my_content/cnf/'.$content_id.'/'.$node_nid;
          $edf_url = $base_url.'/add_to_my_content/edf/'.$content_id.'/'.$node_nid;
          $del_url = $base_url.'/add_to_my_content/del/'.$content_id.'/'.$node_nid;
          
          $node_url = $base_url.'/node/'.$node_nid;
          
        }else if($content_id == 'cnf') {
        $new_content_id = arg(2);
        $node_nid = arg(3);
            $fc_url = $base_url.'/add_to_my_content/cnf/'.$new_content_id.'/'.$node_nid;
            $edf_url = $base_url.'/add_to_my_content/edf/'.$new_content_id.'/'.$node_nid;
            $del_url = $base_url.'/add_to_my_content/del/'.$new_content_id.'/'.$node_nid;
            $node_url = $base_url.'/node/'.$node_nid;
        } else if ($content_id == 'edf') {
        $new_content_id = arg(2);
        $node_nid = arg(3);
             $edf_url = $base_url.'/add_to_my_content/edf/'.$new_content_id.'/'.$node_nid;
          		$fc_url = $base_url.'/add_to_my_content/cnf/'.$new_content_id.'/'.$node_nid;
          		$del_url = $base_url.'/add_to_my_content/del/'.$new_content_id.'/'.$node_nid;
          		$node_url = $base_url.'/node/'.$node_nid;
        }
        

        
        
        if(is_numeric($content_id)) {  
        $con_folders = get_all_child_folders($content_id);
        $added_con_in_folder = get_all_add_to_my_contents_within_folder($content_id);
        $fol_name = get_only_one_folder_name($content_id);
           ?>
          <div style="height: 335px;" id="right-pane">
          <div id="right-pane-content">
            <ul class="folder-content">
            <?php 
            if(!empty($added_con_in_folder)) {
              print '<h3>Contents in folder&nbsp;"'.$fol_name.'"</h3>';          
            }else {
               print '<h3>No Contents in this folder</h3>';          
            }
            ?>
            
            <?php foreach($added_con_in_folder as $val) { ?>
              <li class="item-folder">
               <?php 
               $add_to_con_url = $base_url.'/add_to_my_content/'.$val['id']; 
               $con_node_url = $base_url.'/node/'.$val['nid']; 
               $con_title = get_node_data_using_nid($val['nid']);
               ?>
                <a href="<?php print $con_node_url ?>"><?php print $con_title ?></a>
                
                 

                 <div class="clear"></div>
              </li>
               <?php } ?>
               
               <?php print drupal_get_form('final_submission_form');?>
            </ul>
          </div>      
        </div>
        
          
        <?php } else if($content_id == 'cnf') {        
        $con_folders = get_all_child_folders($new_content_id);
        $added_con_in_folder = get_all_add_to_my_contents_within_folder($new_content_id);
        $fol_name = get_only_one_folder_name($new_content_id);
         ?> 
        
        <div style="height: 335px;" id="right-pane"><?php  print drupal_get_form('intermediate_content_form');  ?>
          <div id="right-pane-content">
            <ul class="folder-content">
           <?php 
            if(!empty($added_con_in_folder)) {
              print '<h3>Contents in folder&nbsp;"'.$fol_name.'"</h3>';          
            }else {
               print '<h3>No Contents in this folder</h3>';          
            }
            ?>
            <?php foreach($added_con_in_folder as $val) { ?>
              <li class="item-folder">
               <?php $add_to_con_url = $base_url.'/add_to_my_content/'.$val['id']; 
               $con_node_url = $base_url.'/node/'.$val['nid']; 
               $con_title = get_node_data_using_nid($val['nid']);
               ?>
                <a href="<?php print $con_node_url ?>"><?php print $con_title ?></a>
                 

                 <div class="clear"></div>
              </li>
               <?php } ?>
               
            <?php //print drupal_get_form('final_submission_form');?>
            </ul>
          </div>      
        </div>
        
        <?php }else if($content_id == 'edf') {    
        
        $con_folders = get_all_child_folders($new_content_id);
        $added_con_in_folder = get_all_add_to_my_contents_within_folder($new_content_id);       
        $fol_name = get_only_one_folder_name($new_content_id);
        ?>
        <div style="height: 335px;" id="right-pane"><?php  print drupal_get_form('intermediate_edit_content_form');  ?>
          <div id="right-pane-content">
            <ul class="folder-content">
            
            <?php 
            if(!empty($added_con_in_folder)) {
              print '<h3>Contents in folder&nbsp;"'.$fol_name.'"</h3>';          
            }else {
               print '<h3>No Contents in this folder</h3>';          
            }
            ?>
            
            
            <?php foreach($added_con_in_folder as $val) { ?>
              <li class="item-folder">
               <?php $add_to_con_url = $base_url.'/add_to_my_content/'.$val['id']; 
               $con_node_url = $base_url.'/node/'.$val['nid']; 
               $con_title = get_node_data_using_nid($val['nid']);
               ?>
                <a href="<?php print $con_node_url ?>"><?php print $con_title ?></a>
                 

                 <div class="clear"></div>
              </li>
               <?php } ?>
               
            <?php //print drupal_get_form('final_submission_form');?>
            </ul>
          </div>      
        </div>
        
        <?php } ?>
        
        
        
        
        
      <div class="clear"></div>
    </div>
  </div>
  <div id="add-folder"><a href="<?php print $fc_url ?>" class="de-btn blue-btn"><span>Create New Folder</span></a></div>
  <div id="add-folder"><a href="<?php print $edf_url ?>" class="de-btn blue-btn"><span>Edit Folder</span></a></div>
  <div id="add-folder"><a href="<?php print $del_url ?>" class="de-btn blue-btn" onclick="javascript: return confirm('Are you sure');this.value='Please Wait...'; this.disabled = true;"><span>Delete Folder</span></a></div>
  <div id="add-folder"><a href="<?php print $node_url ?>" class="de-btn blue-btn" onclick="javascript: return confirm('Are you sure');this.value='Please Wait...'; this.disabled = true;"><span>Close</span></a></div>


</div>
