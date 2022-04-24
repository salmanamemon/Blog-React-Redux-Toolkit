<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include("../config.php");
try{
	$tId = $_GET['id'];
	// Get Single Post Details
	$query = $conn->query("select * from posts where id='$tId' LIMIT 1");
	$query->execute();
	$results = $query->fetchAll();
	$catId = $results[0]['catId'];

	// Get Related Posts
	$queryPost = $conn->query("select * from posts WHERE catId='$catId'");
	$queryPost->execute();
	$resultPost = $queryPost->fetchAll();
	foreach ( $resultPost as $row ) {
		$data[] = array('id' => $row['id'], 'title' => $row['title'], 'text' => $row['text'], 'status' => $row['status'], 'image' => $row['image'], 'addedAt' => $row['addedAt']);
	}
	if($resultPost){
		echo json_encode($data);
	}
	else{
		echo 'No data found';
	}
	
} catch (Exception $e) {
    echo 'Caught exception: ',  $e->getMessage(), "\n";
}


?>