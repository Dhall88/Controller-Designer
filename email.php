<?php

require_once("vendor/autoload.php");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// $sendAddress =  getenv('EMAIL');

$dotenv = \Dotenv\Dotenv::createImmutable(__DIR__)->load();

var_dump($_ENV['EMAIL']);

// echo getenv("USER");

$mail = new PHPMailer();
$mail->IsSMTP();
$mail->SMTPAuth = true;
$mail->SMTPSecure = "tls";
$mail->Host = "smtp.gmail.com";
$mail->Port = 587;
$mail->Username = $_ENV['EMAIL'];
$mail->Password = $_ENV['PASSWORD'];
$mail->setFrom($_ENV['EMAIL']);
$mail->AddAddress("Dhall87@gmail.com");
$mail->Subject = "trial";
$mail->Body = "<h1>hello, world!</h1>";

if ($mail->Send() == false)
{
    die($mail->ErrInfo);
}
else
{
    echo "It worked!\n";
}

// $developmentMode = true;
// $mail = new PHPMailer($developmentMode);

// try {
//     $mail->SMTPDebug = 2;
//     $mail->isSMTP();

//     if($developmentMod) {
//         $mail->SMTPOptions = [
//             'ssl'=> [
//                 'verify_peer' => false,
//                 'verify_peer_name' => false,
//                 'allow_self_signed' => true

//             ]            
//         ];
//     }


//     $mail->SMPTAuth = true;
//     $mail->SMTPSecure = 'tls';
//     $mail->Host= 'smtp.gmail.com';
//     $mail->Port = 587;
//     $mail->Username = 'controllercoords@gmail.com';
//     $mail->Password = 'DellDell5736';

//     $mail->setFrom('controllercoords@gmail.com', 'robot emailer');
//     $mail->addAddress('dhall87@gmail.com');

//     $mail->isHTML(true);
//     $mail->Subject='TESTING';
//     $mail->Body = 'testestesttestetsettting';

//     $mail->send();
//     $mail->ClearAllRecipients();
//     echo "mail sent!";

// } catch (Exception $e) {
//  echo "something went wrong" . $mail->ErrorInfo;
// }
// Settings

// $mail->IsSMTP();
// $mail->CharSet = 'UTF-8';

// $mail->Host       = "smtp.gmail.com"; // SMTP server example
// $mail->SMTPDebug  = 0;                     // enables SMTP debug information (for testing)
// $mail->SMTPAuth   = true;                  // enable SMTP authentication
// $mail->Port       = 465;                    // set the SMTP port for the GMAIL server
// $mail->Username   = "username"; // SMTP account username example
// $mail->Password   = "password";        // SMTP account password example

// // Content
// $mail->isHTML(true);                                  // Set email format to HTML
// $mail->Subject = 'Here is the subject';
// $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
// $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

// try {
//     $mail->send();
//     echo "Message has been sent successfully";
// } catch (Exception $e) {
//     echo "Mailer Error: " . $mail->ErrorInfo;
// }



?>


<!-- 
// //PHPMailer Object
// $mail = new PHPMailer(true); //Argument true in constructor enables exceptions

// //From email address and name
// $mail->From = "dhall87@gmail.com";
// $mail->FromName = "David";

// //To address and name
// $mail->addAddress("dhall87@gmail.com");

// // //Address to which recipient will reply
// // $mail->addReplyTo("reply@yourdomain.com", "Reply");

// // //CC and BCC
// // $mail->addCC("cc@example.com");
// // $mail->addBCC("bcc@example.com");

// //Send HTML or Plain Text email
// $mail->isHTML(true);

// $mail->Subject = "TEST";
// $mail->Body = "<i>TESTESTEST</i>";
// $mail->AltBody = "This is the plain text version of the email content";

// try {
//     $mail->send();
//     echo "Message has been sent successfully";
// } catch (Exception $e) {
//     echo "Mailer Error: " . $mail->ErrorInfo;
// }
// ?> -->