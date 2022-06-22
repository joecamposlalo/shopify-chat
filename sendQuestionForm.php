<?php

$to      = 'do@solvedpuzzle.com';
$subject = 'Question from Shopify Chat';
$message = trim(filter_var($_POST['question'],FILTER_SANITIZE_STRING));
$name = trim(filter_var($_POST['first_name']." ".$_POST['last_name'].", ".$_POST['business'],FILTER_SANITIZE_STRING));
$from = filter_var($_POST['email'],FILTER_SANITIZE_EMAIL);

$headers = "From:$name<$from>". "\r\n";    
 echo mail($to, $subject, $message, $headers);
	


?>