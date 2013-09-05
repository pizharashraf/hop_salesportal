<?php
  global $base_url;
  global $user;

  if(empty($user->uid)){
	drupal_set_message("You are not authorized teacher to add content to any folders. To use these please login");
  drupal_goto($base_url);
}



 $path_theme = $base_url.'/'.path_to_theme();
 $folder_image = $path_theme.'/images/file.gif';
 $dashboard_url = $base_url.'/user/'.$user->uid.'/dashboard';
/******************		Updation for manage folder database		*/
$user_folder  = db_result(db_query("SELECT id from {aa_i3sc_folder_manager} WHERE folder_name = 'My Content' AND uid = '".$user->uid."' " ));
if(empty($user_folder)) {
  db_query("INSERT INTO {aa_i3sc_folder_manager} (`folder_name` ,`parent_folder` ,`uid` ,`status`) VALUES ('My Content', '0', '".$user->uid."', '1')");

}

//delete folders
$serial_id = arg(5);
$folder_id = arg(3);
if(arg(4) == 'delete') {
  db_query("UPDATE `aa_i3sc_folder_content` SET `deleted` = '1' WHERE `id` = '".$folder_id."' AND uid = '".$user->uid."' ");
  $main_url = $base_url.'/user/'.$user->uid.'/dashboard/'.$folder_id;
  drupal_goto($main_url);
}

 //Here when user landing to dashboard...some updation required .....if folder name "My Content" in database for particular user....no action needed.....otherwise a entry to the database


drupal_add_css(drupal_get_path('module', 'addtomycontent') . '/css/jquery.treeview.css');
drupal_add_css(drupal_get_path('module', 'addtomycontent') . '/css/tree.css');
drupal_add_css(drupal_get_path('module', 'addtomycontent') . '/addcontent.css');
drupal_add_js(drupal_get_path('module', 'addtomycontent') . '/js/jquery-1.2.6.pack.js');
drupal_add_js(drupal_get_path('module', 'addtomycontent') . '/js/jquery.simple.tree.js');


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
   		<div class="innercontent-row">
        	<div class="bcrum"><a href="#">Home</a>  <span class="aerro">&raquo;</span> My Content</div>
            
        </div> 
        <div class="profile-content">
       	  <div class="profile-row">
          	
          	<ul class="mysubtab">
				<li><a href="<?php print $dashboard_url; ?>"  ><span>My Content</span></a></li>
				<li><a href="<?php print $add_teacher_contents_url; ?>" class="active"><span>Upload Your File</span></a></li>
             </ul>
            
          <div class="mycont_container">
           
            <div class="mycont-box"><!--
              <form method="get" action="">
            	<label>View :</label>
            	<select name="">
            	  <option value="">All Content</option>
                </select>
              </form>-->
            </div>
          	
               <div  class="mycont_content">
<!--               <div class="profile_subhead">&nbsp;</div> -->
               <div class="mycont_drow">
               		<div  id="left-pane">
               		
               		
               		
                    <div class="" id="left-pane-content">
                    
<?php

  $rsCategories = db_query("SELECT * FROM {aa_i3sc_folder_manager} WHERE uid = '".$user->uid."' ORDER BY parent_folder ");
   // create the empty array
  $arrayCategories = array();
  while($row = db_fetch_array($rsCategories)){ 
	  $arrayCategories[$row['id']] = array("parent_id" => $row['parent_folder'], "name" => $row['folder_name']);	
  }
$folder_id = arg(3);
$folder_arr = get_all_add_to_my_contents_within_folder($folder_id);
?>

			<ul class="simpleTree">
						<li id="0" class="root"><?php createTreeForTeachers($arrayCategories, 0) ?></li>
		</ul>
		
	</div>         
 </div>
        		
        		
        		
        		
                <div  id="right-pane">
          		<div id="right-pane-content">
          		      
 <?php print drupal_get_form('teacher_add_file_content_form');?>

								</div>      
       				</div>
       			</div>
          </div>
        </div>
      </div>
    </div>
  </div>    
</div>


