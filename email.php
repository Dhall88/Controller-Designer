<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
// the message
$name= $_POST['name'];
$email= $_POST['email'];


// send email
mail($email,$name,'Thank You');
?>