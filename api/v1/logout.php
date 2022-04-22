<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include("config.php");
try{
    
	/* TAKE OUT AUTH TOKEN FROM HEADER */
	$headers = apache_request_headers();
	$token = $headers['Authorization'];

	/* USE HEADER TOKEN TO GET USER DETAILS */
	$sql = "SELECT * FROM members WHERE auth='$token' LIMIT 1";
	$query = $conn->prepare( $sql );
	$query->execute();
	$resultsP = $query->fetchAll( PDO::FETCH_ASSOC );

	if($resultsP){
        $id = $resultsP[0]['id'];

        /* GENERATE RANDOM CODE */
        $tokenNew = md5(microtime());

        $sqlUpdate = "UPDATE members SET  auth='$tokenNew' WHERE id='$id'";
        $queryUpdate = $conn->prepare( $sqlUpdate );
        $queryUpdate->execute();
        $resultUpdate = $queryUpdate->fetchAll( PDO::FETCH_ASSOC );
        if($resultUpdate){
            session_destroy();
            echo json_encode(array("message" => 'User logout Success!', "status" => "success" ));
        }
	}
	else{
		echo json_encode(array("message" => 'No User Found!', "status" => "error" ));
	}
		
	
} catch (Exception $e) {
    echo 'Caught exception: ',  $e->getMessage(), "\n";
}

?>