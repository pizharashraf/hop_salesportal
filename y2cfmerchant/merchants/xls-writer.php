<?php

function unilrn_Generate_excell_format($filename, $header, $data ){
	// HTTP headers
	ini_set('dislpay_error',0);
    error_reporting(0);

	require_once('excel_lib/Worksheet.php');
	require_once('excel_lib/Workbook.php');

	$filename = $filename.".xls";
	
	ob_clean();
	 
	header("Content-type: application/vnd.ms-excel");//generating header section.
	header("Content-Disposition: attachment; filename=".$filename );
	header("Expires: 0");
	header("Cache-Control: must-revalidate, post-check=0,pre-check=0");
	header("Pragma: public");
	// Creating a workbook
	$workbook = new Workbook("-");
	
	$new_worksheet =& $workbook->add_worksheet();
	
	
	// Format for the headings
	$formatot =& $workbook->add_format();//setting al the background color and the attributes for the excel file.
	$formatot->set_size(10);
	$formatot->set_align('left');
	//$formatot->set_color('red');
	$formatot->set_fg_color('White');
	$formatot->set_bg_color('White');
	
	$formatot->set_pattern();
	
	$formatot->set_border(1);
	//$formatot->set_bold();

	// Set Colum
	$total_column = count($header);
	for($i=0; $i < $total_column; $i++)
	{
		$arg3= (strlen($header[$i]) + 10);
		$new_worksheet->set_column($i, $i, $arg3 );
	}

	// create header
	for($i=0; $i < $total_column; $i++)
	{
		$new_worksheet->write_string(0, $i, $header[$i], $formatot);
	}
		
	// create content
		
	$row_no=1;
	foreach($data as $dataset)
	{
		$colum_no = 0	;
		foreach($dataset as $colum_data)
		{
			$new_worksheet->write($row_no, $colum_no, $colum_data, $formatot);
			$colum_no++;
		}
		$row_no++;
	}

	$workbook->close();
	exit;
	return $workbook;
}