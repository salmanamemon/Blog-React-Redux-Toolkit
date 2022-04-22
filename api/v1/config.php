<?php   
$host = "localhost";  
$username = "root";  
$password = "";  
$database = "crm_ticket_system";  
$message = "";
$error_username = "";
$error_password = "";
$port = "";
try  
{	
	
	$conn = new PDO("mysql:host=$host; dbname=$database", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
    //echo "Connected successfully";
} 
catch(PDOException $error)  
{  
	echo "Connection failed: " . $message = $error->getMessage();  
} 


?>