<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require 'vendor/autoload.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

include("config.php");
try{
	
	


	 /* GENERATE RANDOM CODE */
	 $tokenNew = md5(microtime());

	// Grab JSON object from Form
	$data = json_decode(file_get_contents('php://input'), true);
	// Grab Your Value from Json object
	$dataName=json_encode($data['name']);
	$dataPhone=json_encode($data['phone']);
	$dataCompany=json_encode($data['company']);
	$dataAddress=json_encode($data['address']);
	$dataPassword=json_encode($data['rpassword']);
	$dataEmail=json_encode($data['email']);

	// Replace quotes form the data
	$name=str_replace('"',"",$dataName);
	$phone=str_replace('"',"",$dataPhone);
	$company=str_replace('"',"",$dataCompany);
	$address=str_replace('"',"",$dataAddress);
	$password=str_replace('"',"",$dataPassword);
	$email=str_replace('"',"",$dataEmail);

	if($name === '' || $phone === '' || $company === '' || $address === '' || $password === '' || $email === ''){
		echo json_encode(array("status" => "error", "message" => 'Some fields are empty'));
	}
	else{
		
		$query = $conn->prepare( "SELECT `email` FROM `members` WHERE `email` = ?" );
		$query->bindValue( 1, $email );
		$query->execute();

		if( $query->rowCount() > 0 ) { # If rows are found for query
			echo json_encode(array("status" => 'error', "message" => "Email already exist" ));
		}
		else {
			//echo json_encode(array("status" => 'success', "message" => "Email is unique" ));
			
			
			$sqlU = "INSERT INTO members
			SET 
			name=:name, 
			phone=:phone,
			company=:company,
			address=:address,
			password=:password,
			email=:email,
			auth=:auth";

			$queryU = $conn->prepare($sqlU);
			$queryU->bindParam(':name', $name);
			$queryU->bindParam(':phone', $phone);
			$queryU->bindParam(':company', $company);
			$queryU->bindParam(':address', $address);
			$queryU->bindParam(':password', $password);
			$queryU->bindParam(':email', $email);
			$queryU->bindParam(':auth', $tokenNew);
			if($queryU->execute())
			{
				
				$mail->SMTPOptions = array(
					'ssl' => array(
					'verify_peer' => false,
					'verify_peer_name' => false,
					'allow_self_signed' => true
					)
				);
				//Server settings
				$mailbody = "<html>
								<head>
									<title></title>
								</head>
								<body style='background:#17a2b8;padding:0;margin:0;'>
									<div style='width:600px;background:#17a2b8; margin:0 auto;margin-top:30px;'>
										<table width='600' style='background:#17a2b8; cellspacing='0' cellpadding='0'>
											<tr>
												<td>
													<table>
														<tr>
															<td width='600' style='background-color: #fff;padding: 10px 10px;'>
																<div>
																	<h1 style='color:#17a2b8';font-family:'Arial', sans-serif;font-size:20px;font-weight:bolder;>Registration Success</h1>
																	<h3 style='font-family: Tahoma, Geneva, sans-serif;color:#2f2e2e;text-align:center;font-weight:normal;margin-top:40px;font-size:16px;line-height:24px;padding:0 10px;'>
																		Hello,</b><br><br>Members's Name: ".$name."  <br><br>
																		You are registered successfully please enter your choosen password which is mentioned below.
																		<br><br>
																		Email: 	".$email."  <br>
																		Password: ".$password."  
																	</h3>
																	
																</div>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</table>
									</div>
								</body>
							</html>";
				//$mail->SMTPDebug = 2;                      // Enable verbose debug output
				$mail->isSMTP();                                            // Send using SMTP
				//$mail->SMTPDebug = 2;                      // Enable verbose debug output
				$mail->Host = 'smtp.gmail.com';
				$mail->Port = 587;                               // Enable SMTP authentication
				$mail->SMTPAuth = true;
				//$mail->SMTPAutoTLS = false; 
				$mail->Username   = 'memon.salman.0011@gmail.com';                     // SMTP username
				$mail->Password   = 'Samm13570$';                              // SMTP password
				//$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
					
		
				//Recipients
				$mail->setFrom('memon.salman.0011@gmail.com', 'Crm Tciket System');
				$mail->addAddress('memon.salman.0011@gmail.com');     // Add a recipient
				//$mail->addReplyTo('memon.salman.0011@gmail.com', 'Salman');
		
				// Content
				$mail->isHTML(true);                                  // Set email format to HTML
				$mail->Subject = 'New Email From Crm Ticket System';
				$mail->Body    = $mailbody;
		
				if (!$mail->send()) {
					echo json_encode(array("status" => "error", "message" => 'Something went wrong!'));
					//echo 'Message could not be sent.';
					//echo 'Mailer Error: ' . $mail->ErrorInfo;
				} else {
					echo json_encode(array("status" => "success", "message" => 'Registration successfull! please check email to verify it is you'));
				}
			}
			else
			{
				echo json_encode(array("status" => "error", "message" => 'Something Went Wrong'));
			}
		}
	}

	
} catch (Exception $e) {
    echo 'Caught exception: ',  $e->getMessage(), "\n";
}


?>