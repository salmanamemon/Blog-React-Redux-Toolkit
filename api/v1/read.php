<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
include("config.php");
try{
	$sql = 'SELECT * FROM posts';
	$query = $conn->prepare($sql);
    $query->execute();
	$results = $query->fetchAll();
    $json_array = array();
	foreach ($results as $row) {
		$json_array[] = $row;
	}
    echo json_encode($json_array);
	
} catch (Exception $e) {
    echo 'Caught exception: ',  $e->getMessage(), "\n";
}


?>