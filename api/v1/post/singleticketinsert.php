<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include("../config.php");
try{
	
	//Initialize variable
	$status = 'pending';

	// Grab JSON object from Form
	$data = json_decode(file_get_contents('php://input'), true);
	// Grab Your Value from Json object
	$dataSub=json_encode($data['frmData']['subject']);
	// Replace quotes form the data
	$subject=str_replace('"',"",$dataSub);
	// Grab Your Value from Json object
	$dataDetail=json_encode($data['frmData']['detail']);
	// Replace quotes form the data
	$detail=str_replace('"',"",$dataDetail);
	// Grab Your Value from Json object
	$dataDate=json_encode($data['frmData']['issueDate']);
	// Replace quotes form the data
	$openAt=str_replace('"',"",$dataDate);
	// Grab Your Value from Json object
	$dataEmail=json_encode($data['frmData']['email']);
	// Replace quotes form the data
	$email=str_replace('"',"",$dataEmail);

	if($subject === '' || $detail === '' || $openAt === '' || $email === '' ){
		echo json_encode(array("status" => "error", "message" => 'Some fields are empty'));
	}
	else{
	
		$sqlU = "INSERT INTO tickets
		SET 
		subject=:subject, 
		status=:status,
		sender=:sender,
		detail=:detail,
		openAt=:openAt";

		$queryU = $conn->prepare($sqlU);
		$queryU->bindParam(':subject', $subject);
		$queryU->bindParam(':status', $status);
		$queryU->bindParam(':sender', $email);
		$queryU->bindParam(':detail', $detail);
		$queryU->bindParam(':openAt', $openAt);
		if($queryU->execute())
		{
			echo json_encode(array("status" => "success", "message" => 'Ticket added Successfully'));
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