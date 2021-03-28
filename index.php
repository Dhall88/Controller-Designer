<?php 



include_once("home.html");

require './vendor/autoload.php';

if($_POST){

    echo $_POST;

    $FILE = fopen("test.dxf", "a");
    $CAD_FIRST_HALF = fopen("first-half.dxf", "r");
    $CAD_SECOND_HALF = fopen("second-half.dxf", "r");
    $buttons = $_POST['buttons'];




while ($BUFFER = fgets($CAD_FIRST_HALF,4096)) {
    // write line to newdata.txt
    fputs($FILE,$BUFFER);
    } 

    fputs($FILE, "\n");


    for ($x = 0; $x < count($buttons); $x++) {

    fputs($FILE,"CIRCLE
  5
4$x
330
2020E
100
AcDbEntity
  8
0
100
AcDbCircle
 10
".$buttons[$x]['x']."
 20
".$buttons[$x]['y']."
 30
0.0
 40
".$buttons[$x]['radius']."
  0
MTEXT
  5
40$x
330
202FE
100
AcDbEntity
  8
0
100
AcDbMText
 10
".($buttons[$x]['x']-($buttons[$x]['radius']*.8))."
 20
".($buttons[$x]['y']+($buttons[$x]['radius']*.5))."
 30
0.0
 40
1.0
 41
0.0
 46
0.0
 71
     1
 72
     1
  1
\H3;".$buttons[$x]['id']."\P".$buttons[$x]['x'].",".$buttons[$x]['x']."
  7
textstyle15
 73
     1
 44
1.0
  0
");
    }

    while ($BUFFER = fgets($CAD_SECOND_HALF,4096)) {
        // write line to newdata.txt
        fputs($FILE,$BUFFER);
        } 


fclose($FILE);

    $name=$_POST['name'];
    $contactEmail=$_POST['email'];

    echo "IN PHP";


    print_r($_POST);
    $email = new \SendGrid\Mail\Mail();
    $email->setFrom(getenv("SENDER_EMAIL"), "$name");
    $email->setSubject("New Axis Pro configuration");
    $email->addTo(getenv("TEST_EMAIL"), "Jessie");
    $email->addContent(
        "text/plain", 'test'
    );

    $file_encoded = base64_encode(file_get_contents('test.dxf'));
$email->addAttachment(
   $file_encoded,
   "application/dxf",
   "test.dxf",
   "attachment"
);

    $email->addContent(
        "text/html", "Name: $name  <br>
        Contact Email: $contactEmail <br>
        Testing new CAD feature"
    );
    $sendgrid = new \SendGrid(getenv("SENDGRID_API_KEY"));
    try {
        $response = $sendgrid->send($email);
        print $response->statusCode() . "\n";
        print_r($response->headers());
        print $response->body() . "\n";
    } catch (Exception $e) {
        echo 'Caught exception: ',  $e->getMessage(), "\n";
    }

    $FILE = fopen("test.dxf", "w");
    fputs($FILE,"");
    fclose($FILE);

}
?>