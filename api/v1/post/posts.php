<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include("../config.php");
try{
	//$sql = 'SELECT * FROM posts';
	$sql = 'SELECT *
	FROM posts p
	JOIN categories pc ON p.catId=pc.c_id
	JOIN members pa ON p.authorId=pa.id';

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