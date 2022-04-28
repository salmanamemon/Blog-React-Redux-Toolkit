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
	

	$sql = "SELECT * FROM posts WHERE p_id='$tId'";
	$query = $conn->prepare($sql);
    $query->execute();
	$results = $query->fetchAll();
	$status = $results[0]['status'];
	if($status === 'unpublished'){
		$sqlU = "UPDATE posts SET status='published' WHERE p_id='$tId'";
		$queryU = $conn->prepare($sqlU);
		if($queryU->execute())
		{
			echo json_encode(array("status" => "success", "message" => 'Post successfully published'));
		}
	}
	else{
		$sqlUn = "UPDATE posts SET status='unpublished' WHERE p_id='$tId'";
		$queryUn = $conn->prepare($sqlUn);
		if($queryUn->execute())
		{
			echo json_encode(array("status" => "success", "message" => 'Post successfully Unpublished'));
		}
	}

	
	
} catch (Exception $e) {
    echo 'Caught exception: ',  $e->getMessage(), "\n";
}


?>