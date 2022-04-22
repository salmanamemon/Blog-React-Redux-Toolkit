<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include("config.php");
try{
	$fullName = trim($_POST['fullName']);
	$email = trim($_POST['email']);
	$password = trim($_POST['password']);
	$sqlU = 'INSERT INTO signup
	SET 
	fullName=:fullName, 
	email=:email,
	password=:password';
	$queryU = $conn->prepare($sqlU);
	$queryU->bindParam(':fullName', $fullName);
	$queryU->bindParam(':email', $email);
	$queryU->bindParam(':password', $password);
	if($queryU->execute())
	{
		echo json_encode(array("message" => 'Signup is Successfull'));
	}
	else
	{
		echo json_encode(array("message" => 'Something Went Wrong'));
	}
	
} catch (Exception $e) {
    echo 'Caught exception: ',  $e->getMessage(), "\n";
}


?>