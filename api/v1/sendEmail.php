<?php
    // Import PHPMailer classes into the global namespace
    // These must be at the top of your script, not inside a function

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    // Load Composer's autoloader
    require 'vendor/autoload.php';

    // Instantiation and passing `true` enables exceptions
    $mail = new PHPMailer(true);

    
	if ($_POST) {

        $email = $_POST['email'];
        
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
                        <body style='background:#92c040;padding:0;margin:0;'>
                            <div style='width:600px;background:#92c040; margin:0 auto;margin-top:30px;'>
                                <table width='600' style='background:#92c040; cellspacing='0' cellpadding='0'>
                                    <tr>
                                        <td>
                                            <table>
                                                <tr>
                                                    <td width='600' style='background-color: #fff;padding: 10px 10px;'>
                                                        <div style='text-align:center;background-color: #fff;padding: 10px;border-bottom:.5px solid #4D3E42'>
                                                            <a target='_blank' style='display:block; width:300px;margin:0 auto;' href='https://cryptobearwatchclub.io/'> 
                                                                <img style='width:130px!important;' src='https://cryptobearwatchclub.io/assets/images/Logo%201.png' alt=''>
                                                            </a>
                                                        </div>
                                                        <div>
                                                        
                                                            <h3 style='font-family: Tahoma, Geneva, sans-serif;color:#2f2e2e;text-align:center;font-weight:normal;margin-top:40px;font-size:16px;line-height:24px;padding:0 10px;'>
                                                                Hello,</b><br><br>Customer's Email: ".$email."  
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
        $mail->setFrom('memon.salman.0011@gmail.com', 'CryptoBear Watch Club - Best NFT Watches Marketplace');
        $mail->addAddress('memon.salman.0011@gmail.com');     // Add a recipient
        //$mail->addReplyTo('memon.salman.0011@gmail.com', 'Salman');

        // Content
        $mail->isHTML(true);                                  // Set email format to HTML
        $mail->Subject = 'New Email From CryptoBear Watch Club';
        $mail->Body    = $mailbody;

        if (!$mail->send()) {
            echo json_encode(array("msg" => '<i>Opss something went wrong!</i>'));
            //echo 'Message could not be sent.';
            //echo 'Mailer Error: ' . $mail->ErrorInfo;
        } else {
            echo json_encode(array("msg" => '<i style="color:#92C040">Message Sent Successfully</i>'));
        }
	}
	else
	{
		//echo "error";
	}