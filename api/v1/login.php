<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include("config.php");
try{
	// echo "Success";
	$data = json_decode(file_get_contents('php://input'), true);
	$dataemail=json_encode($data['email']);
	$email=str_replace('"',"",$dataemail);
	$datapassword=json_encode($data['password']);
	$password=str_replace('"',"",$datapassword);
	//$email = "memon.salman@gmail.com";
	//$password = "12345678";
	
	if(isset($email,$password) && !empty($email) && !empty($password)){
		$sql = "SELECT * FROM members WHERE email='$email'";
		$query = $conn->prepare( $sql );
		$query->execute();
		$results = $query->fetchAll( PDO::FETCH_ASSOC );
		if($results){
			$sql = "SELECT * FROM members WHERE email='$email' AND password='$password'";
			$query = $conn->prepare( $sql );
			$query->execute();
			$resultsP = $query->fetchAll( PDO::FETCH_ASSOC );
			if($resultsP){
				$auth = $resultsP[0]['auth'];
				$id = $resultsP[0]['id'];
				session_start();
				echo json_encode(array("status" => "success", "message" => "sign in success", "token" => $auth));
				
			}
			else{
				echo json_encode(array("message" => 'Password is incorrect', "status" => "error" ));
			}
		}
		else{
			echo json_encode(array("message" => 'We do not know this email', "status" => "error" ));
		}
	}
	else{
		echo json_encode(array("message" => 'Enter an email and password', "status" => "error"));
	}
	
} catch (Exception $e) {
    echo 'Caught exception: ',  $e->getMessage(), "\n";
}

?>