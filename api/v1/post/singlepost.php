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
	foreach ( $results as $row ) {
		$data1 = array('id' => $row['id'], 'title' => $row['title'], 'text' => $row['text'], 'status' => $row['status'], 'image' => $row['image']);
	}

	
	$catId = $results[0]['catId'];
	// Get Category Details
	$queryCat = $conn->query("select * from categories WHERE id='$catId'");
	$queryCat->execute();
	$resultCat = $queryCat->fetchAll();
	foreach ( $resultCat as $row ) {
		$dataCat[] = array('id' => $row['id'], 'catName' => $row['catName'], 'catColor' => $row['catColor']);
	}
	if($resultCat){
		$jsonCat = ['category' => $dataCat];
	}

	$authorId = $results[0]['authorId'];
	// Get Author Details
	$queryAuthor = $conn->query("select * from members WHERE id='$authorId'");
	$queryAuthor->execute();
	$resultAuthor = $queryAuthor->fetchAll();
	foreach ( $resultAuthor as $row ) {
		$dataAuthor[] = array('id' => $row['id'], 'name' => $row['name']);
	}
	if($resultAuthor){
		$jsonAuthor = ['author' => $dataAuthor];
	}

	// Get Post Comments Details
	$queryComm = $conn->query("select * from postcomments WHERE postRef='$tId'");
	$queryComm->execute();
	$resultComm = $queryComm->fetchAll();
	foreach ( $resultComm as $row ) {
		$data2[] = array('id' => $row['id'], 'comment' => $row['comment'], 'sender' => $row['sender'], 'postRef' => $row['postRef'], 'comtAt' => $row['comtAt']);
	}
	if($resultComm){
		$jsonComt = ['comments' => $data2];
		$fullOutput = array_merge($data1, $jsonComt, $jsonCat, $jsonAuthor); 
		echo json_encode($fullOutput);
	}
	else{
		echo json_encode($data1);
	}
	
} catch (Exception $e) {
    echo 'Caught exception: ',  $e->getMessage(), "\n";
}


?>