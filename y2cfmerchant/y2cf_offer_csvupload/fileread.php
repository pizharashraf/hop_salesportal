<?php
/*
 * mrlemonade ~
 */

function getFilesFromDir($dir) {
	/* Set the file permissions */

	/*
	 $path = $dir;
	 $dh = opendir($path);
	 while ($temp = readdir($dh)) {
	 if ($temp!='.' && $temp!='..' && $temp!='.htaccess') chmod($temp, 0777);
	 }
	 */




	$files = array();
	if ($handle = opendir($dir)) {
		while (false !== ($file = readdir($handle))) {
			if ($file != "." && $file != "..") {
				if(is_dir($dir.'/'.$file)) {
					$dir2 = $dir.'/'.$file;
					$files[] = getFilesFromDir($dir2);
				}
				else {
					$files[] = $dir.'/'.$file;
				}
			}
		}
		closedir($handle);
	}

	return array_flat($files);
}

function array_flat($array) {

	foreach($array as $a) {
		if(is_array($a)) {
			$tmp = array_merge($tmp, array_flat($a));
		}
		else {
			$tmp[] = $a;
		}
	}

	return $tmp;
}





?>
