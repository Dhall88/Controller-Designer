<?php 

$FILE = fopen("test.dxf", "a");
$CAD_FIRST_HALF = fopen("first-half.dxf", "r");
$CAD_SECOND_HALF = fopen("second-half.dxf", "r");



while ($BUFFER = fgets($CAD_FIRST_HALF,4096)) {
    // write line to newdata.txt
    fputs($FILE,$BUFFER);
    } 

    fputs($FILE, "\n");

    while ($BUFFER = fgets($CAD_SECOND_HALF,4096)) {
        // write line to newdata.txt
        fputs($FILE,$BUFFER);
        } 

// print(fgets($FILE));

// fputs($FILE,$FILE2);

fclose($FILE)

// include_once("home.html");

// require './vendor/autoload.php';

// if($_POST){

//     $digitalJoy=$_POST['digitalJoy'];
//     $analogJoy1=$_POST['analogJoy1'];
//     $analogJoy2=$_POST['analogJoy2'];
//     $rt=$_POST['rt'];
//     $rb=$_POST['rb'];
//     $r3=$_POST['r3'];
//     $lt=$_POST['lt'];
//     $lb=$_POST['lb'];
//     $l3=$_POST['l3'];
//     $x=$_POST['x'];
//     $y=$_POST['y'];
//     $a=$_POST['b'];
//     $b=$_POST['b'];
//     $psXbox=$_POST['psXbox'];
//     $menu=$_POST['menu'];
//     $view=$_POST['view'];
//     $name=$_POST['name'];
//     $contactEmail=$_POST['email'];

    // echo "IN PHP";


//     print_r($_POST);
//     $email = new \SendGrid\Mail\Mail();
//     $email->setFrom(getenv("SENDER_EMAIL"), "$name");
//     $email->setSubject("New Axis Pro configuration");
//     $email->addTo(getenv("RECIEVER_EMAIL"), "Jessie");
//     $email->addContent(
//         "text/plain", 'test'
//     );
//     $email->addContent(
//         "text/html", "Name: $name  <br>
//         Contact Email: $contactEmail <br>
//         Digital Joystick: x=$digitalJoy[0] y=$digitalJoy[1] <br>
//         Analog Joystick 1: x=$analogJoy1[0] y=$analogJoy1[1] <br>
//         Analog Joystick 2: x=$analogJoy2[0] y=$analogJoy2[1] <br>
//         RT: x=$rt[0] y=$rt[1] <br>
//         RB: x=$rb[0] y=$rb[1] <br>
//         R3: x=$r3[0] y=$r3[1] <br>
//         LT: x=$lt[0] y=$lt[1] <br>
//         LB: x=$lb[0] y=$lb[1] <br>
//         L3: x=$l3[0] y=$l3[1] <br>
//         Square/X: x=$x[0] y=$x[1] <br>
//         Triangle/Y: x=$y[0] y=$y[1] <br>
//         X/A: x=$a[0] y=$a[1] <br>
//         Cricle/B: x=$b[0] y=$b[1] <br>
//         ps/xbox: x=$psXbox[0] y=$psXbox[1] <br>
//         menu: x=$menu[0] y=$menu[1] <br>
//         view: x=$view[0] y=$view[1] <br>"
//     );
//     $sendgrid = new \SendGrid(getenv("SENDGRID_API_KEY"));
//     try {
//         $response = $sendgrid->send($email);
//         print $response->statusCode() . "\n";
//         print_r($response->headers());
//         print $response->body() . "\n";
//     } catch (Exception $e) {
//         echo 'Caught exception: ',  $e->getMessage(), "\n";
//     }
// }
?>