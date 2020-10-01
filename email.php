<?php

require 'vendor/autoload.php';

$from = new SendGrid\Email(null, getenv('SENDER_EMAIL'));
$subject = "Hello World from the SendGrid PHP Library!";
$to = new SendGrid\Email(null, getenv('RECIEVER_EMAIL'));
$content = new SendGrid\Content("text/plain", "Hello, Email!");
$mail = new SendGrid\Mail($from, $subject, $to, $content);

$apiKey = getenv('SENDGRID_API_KEY');
$sg = new \SendGrid($apiKey);

$response = $sg->client->mail()->send()->post($mail);
echo $response->statusCode();
echo $response->headers();
echo $response->body();


?>