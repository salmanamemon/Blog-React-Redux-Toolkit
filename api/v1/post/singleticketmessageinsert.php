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

	// Grab JSON object from Form
	$data = json_decode(file_get_contents('php://input'), true);
	// Grab Your Value from Json object
	$dataMsg=json_encode($data['msgObj']['message']);

	// Replace quotes form the data
	$message=str_replace('"',"",$dataMsg);
	// Grab Your Value from Json object
	$dataSender=json_encode($data['msgObj']['sender']);
	// Replace quotes form the data
	$sender=str_replace('"',"",$dataSender);

	if($message === ''){
		echo json_encode(array("status" => "error", "message" => 'Message field cannot be empty'));
	}
	else{
		$sqlU = "INSERT INTO ticketconversations
		SET 
		message=:message, 
		sender=:sender,
		ticketRef=:ticketRef";
		$queryU = $conn->prepare($sqlU);
		$queryU->bindParam(':message', $message);
		$queryU->bindParam(':sender', $sender);
		$queryU->bindParam(':ticketRef', $tId);
		if($queryU->execute())
		{
			echo json_encode(array("status" => "success", "message" => 'Message added Successfully'));
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