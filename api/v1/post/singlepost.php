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
	$query = $conn->query("select * from posts where p_id='$tId' LIMIT 1");
	$query->execute();
	$results = $query->fetchAll();
	foreach ( $results as $row ) {
		$data1 = array('p_id' => $row['p_id'], 'title' => $row['title'], 'text' => $row['text'], 'status' => $row['status'], 'image' => $row['image'], 'addedAt' => $row['addedAt']);
	}

	
	$catId = $results[0]['catId'];
	// Get Category Details
	$queryCat = $conn->query("select * from categories WHERE c_id='$catId'");
	$queryCat->execute();
	$resultCat = $queryCat->fetchAll();
	foreach ( $resultCat as $row ) {
		$dataCat[] = array('c_id' => $row['c_id'], 'catName' => $row['catName'], 'catColor' => $row['catColor']);
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
	if($resultComm){
		foreach ( $resultComm as $row ) {
			$data2[] = array('com_id' => $row['com_id'], 'comment' => $row['comment'], 'sender' => $row['sender'], 'postRef' => $row['postRef'], 'comtAt' => $row['comtAt']);
		}
		$jsonComt = ['comments' => $data2];
		$fullOutput = array_merge($data1, $jsonComt, $jsonCat, $jsonAuthor); 
		echo json_encode($fullOutput);
	}
	else{
		//$jsonComt = ['comments' => $data2];
		$fullOutput = array_merge($data1, $jsonCat, $jsonAuthor); 
		echo json_encode($fullOutput);
	}
	
} catch (Exception $e) {
    echo 'Caught exception: ',  $e->getMessage(), "\n";
}


?>