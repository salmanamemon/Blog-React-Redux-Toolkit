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
	
	// Grab JSON object from Form
	$data = json_decode(file_get_contents('php://input'), true);
	// Grab Your Value from Json object
	$dataName=json_encode($data['name']);
	$dataPhone=json_encode($data['phone']);
	$dataMessage=json_encode($data['message']);
	$dataEmail=json_encode($data['email']);

	// Replace quotes form the data
	$name=str_replace('"',"",$dataName);
	$phone=str_replace('"',"",$dataPhone);
	$message=str_replace('"',"",$dataMessage);
	$email=str_replace('"',"",$dataEmail);

	if($name === '' || $phone === '' || $message === '' || $email === ''){
		echo json_encode(array("status" => "error", "message" => 'Some fields are empty'));
	}
	else{
			
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
															<h1 style='color:#17a2b8';font-family:'Arial', sans-serif;font-size:20px;font-weight:bolder;>Contact by Customer</h1>
															<h3 style='font-family: Tahoma, Geneva, sans-serif;color:#2f2e2e;text-align:center;font-weight:normal;margin-top:40px;font-size:16px;line-height:24px;padding:0 10px;'>
																Hello,</b><br><br>Customer's Name: ".$name."  
																<br><br>
																Phone: ".$phone."
																<br><br>
																Message: ".$message."
																<br><br>
																Email: 	".$email."  <br>
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
		$mail->Subject = 'New Email From My Blog Site';
		$mail->Body    = $mailbody;

		if (!$mail->send()) {
			echo json_encode(array("status" => "error", "message" => 'Something went wrong!'));
			//echo 'Message could not be sent.';
			//echo 'Mailer Error: ' . $mail->ErrorInfo;
		} else {
			echo json_encode(array("status" => "success", "message" => 'Your email is succefully sent. We will contact you shortly.'));
		}
	}

	
} catch (Exception $e) {
    echo 'Caught exception: ',  $e->getMessage(), "\n";
}


?>