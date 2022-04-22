<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include("../config.php");
try{
	$tId = $_GET['id'];
	$query = $conn->query("select * from tickets where id='$tId' LIMIT 1");
	$query->execute();
	$results = $query->fetchAll();
	foreach ( $results as $row ) {
		$data1 = array('id' => $row['id'], 'subject' => $row['subject'], 'status' => $row['status'], 'openAt' => $row['openAt']);
	}
	$queryComm = $conn->query("select * from ticketconversations WHERE ticketRef='$tId'");
	$queryComm->execute();
	$resultComm = $queryComm->fetchAll();
	foreach ( $resultComm as $row ) {
		$data2[] = array('id' => $row['id'], 'message' => $row['message'], 'sender' => $row['sender'], 'ticketRef' => $row['ticketRef'], 'msgAt' => $row['msgAt']);
	}
	if($resultComm){
		$json = ['conversations' => $data2];
		$fullOutput = array_merge($data1, $json); 
		echo json_encode($fullOutput);
	}
	else{
		echo json_encode($data1);
	}
	
} catch (Exception $e) {
    echo 'Caught exception: ',  $e->getMessage(), "\n";
}


?>