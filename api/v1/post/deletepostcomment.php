<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include("../config.php");
try{
	
	//GET ID from API URL
	$com_id = $_GET['id'];

	$sql = "DELETE FROM postcomments WHERE com_id='$com_id'";
	$query = $conn->prepare($sql);
	$results = $query->execute();
	if($results){
		echo json_encode(array("status" => "success", "message" => 'Comment successfully removed', "id" => $com_id));
	}
	else{
		echo json_encode(array("status" => "success", "message" => 'Something went wrong'));
	}

} catch (Exception $e) {
    echo 'Caught exception: ',  $e->getMessage(), "\n";
}


?>