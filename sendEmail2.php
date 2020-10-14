<?php
$username = $_POST["username2"];
$email = $_POST["email2"];
$phonenumber = $_POST["phonenumber2"];
$to      = 'nhaphotoanphat.info@gmail.com';

// Subject
$subject = 'Get data from Landing-Page';

// Message
// $message = "Họ và tên: $username;\n Email: $email;\n SĐT: $phonenumber";
$message = '<html><body>';
$message .= "<p>Họ và tên:".strip_tags($username)."</p>";
$message .= "<p>Email:".strip_tags($email)."</p>";
$message .= "<p>SĐT:".strip_tags($phonenumber)."</p>";
$message .= '</body></html>';

// To send HTML mail, the Content-type header must be set
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=UTF-8';

// Additional headers
$headers[] = 'To: Admin <nhaphotoanphat.info@gmail.com>';
$headers[] = 'From: Get data from Landing-Page <nhaphotoanphat.info@gmail.com>';
// $headers[] = 'Cc: birthdayarchive@example.com';
// $headers[] = 'Bcc: birthdaycheck@example.com';

// Mail it
mail($to, $subject, $message, implode("\r\n", $headers));
header('Location : index.html');
exit;
?>