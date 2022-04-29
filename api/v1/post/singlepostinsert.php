<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include("../config.php");
try{
	
	//Initialize variable
	$status = 'unpublished';

	// Grab JSON object from Form
	$data = json_decode(file_get_contents('php://input'), true);
	// Grab Your Value from Json object
	$dataTit=json_encode($data['frmData']['title']);
	// Replace quotes form the data
	$title=str_replace('"',"",$dataTit);
	// Grab Your Value from Json object
	$dataText=json_encode($data['frmData']['text']);
	// Replace quotes form the data
	$text=str_replace('"',"",$dataText);
	// Grab Your Value from Json object
	$dataAuthorId=json_encode($data['frmData']['authorid']);
	// Replace quotes form the data
	$authorId=str_replace('"',"",$dataAuthorId);
	// Grab Your Value from Json object
	$dataCatId=json_encode($data['frmData']['cat_id']);
	// Replace quotes form the data
	$catId=str_replace('"',"",$dataCatId);

	if($title === '' || $text === '' || $authorId === '' || $catId === '' ){
		echo json_encode(array("status" => "error", "message" => 'Some fields are empty'));
	}
	else{
	
		$sqlU = "INSERT INTO posts
		SET 
		title=:title, 
		text=:text,
		authorId=:authorId,
		catId=:catId,
		status=:status";

		$queryU = $conn->prepare($sqlU);
		$queryU->bindParam(':title', $title);
		$queryU->bindParam(':text', $text);
		$queryU->bindParam(':authorId', $authorId);
		$queryU->bindParam(':catId', $catId);
		$queryU->bindParam(':status', $status);
		if($queryU->execute())
		{
			echo json_encode(array("status" => "success", "message" => 'Post added Successfully'));
		}
		else
		{
			echo json_encode(array("status" => "error", "message" => 'Something Went Wrong'));
		}
	}

	
} catch (Exception $e) {
    echo 'Caught exception: ',  $e->getMessage(), "\n";
}


?>