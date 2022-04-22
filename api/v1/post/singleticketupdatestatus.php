<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include("../config.php");
try{
	
	//GET ID from API URL
	$tId = $_GET['id'];
	$status = 'closed';
	
	$sqlU = "UPDATE tickets SET status='$status' WHERE id='$tId'";
	$queryU = $conn->prepare($sqlU);
	if($queryU->execute())
	{
		echo json_encode(array("status" => "success", "message" => 'Ticket successfully closed'));
	}
	else
	{
		echo json_encode(array("status" => "error", "message" => 'Something Went Wrong'));
	}
	
} catch (Exception $e) {
    echo 'Caught exception: ',  $e->getMessage(), "\n";
}


?>