<?php include_once("home.html");
if($_POST){

    echo '<script language="javascript">';
echo 'alert("message successfully sent")';
echo '</script>';
    
    mail("dhall87@gmail.com", "This is a test", "test test test");
}
?>