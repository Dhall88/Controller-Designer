<?php include_once("home.html");
if($_POST){
    echo "<script type='text/javascript'>alert('SUCESS IN PHP');</script>";

//send email
    mail("dhall87@gmail.com", "This is a test", "test test test");
}
?>