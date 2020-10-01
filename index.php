<?php include_once("home.html");
    require './vendor/autoload.php'; // If you're using Composer (recommended)
if($_POST){

    // using SendGrid's PHP Library
// https://github.com/sendgrid/sendgrid-php
// Comment out the above line if not using Composer
// require("./sendgrid-php.php");
// If not using Composer, uncomment the above line

echo "IN PHP";
$email = new \SendGrid\Mail\Mail();
$email->setFrom("controllercoords@gmail.com", "Example User");
$email->setSubject("Sending with SendGrid is Fun");
$email->addTo("dhall87@gmail.com", "Example User");
$email->addContent(
    "text/plain", "and easy to do anywhere, even with PHP"
);
$email->addContent(
    "text/html", "<strong>and easy to do anywhere, even with PHP</strong>"
);
$sendgrid = new \SendGrid('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');
try {
    $response = $sendgrid->send($email);
    print $response->statusCode() . "\n";
    print_r($response->headers());
    print $response->body() . "\n";
} catch (Exception $e) {
    echo 'Caught exception: ',  $e->getMessage(), "\n";
}
}
?>