<?php
 
// Importing DBConfig.php file.
include 'DBConfig.php';
 
// Connecting to MySQL Database.
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 
 // Getting the received JSON into $json variable.
 $json = file_get_contents('php://input');
 
 // decoding the received JSON and store into $obj variable.
 $obj = json_decode($json,true);

// Populate Student name from JSON $obj array and store into $S_Name.
$book_ser = $obj['book_ser'];

// Populate Student Class from JSON $obj array and store into $S_Class.
$book_car = $obj['book_car'];

// Populate Student Phone Number from JSON $obj array and store into $S_Phone_Number.
$book_start = $obj['book_start'];

// Populate Student Phone Number from JSON $obj array and store into $S_Phone_Number.
$book_end = $obj['book_end'];

// Populate Email from JSON $obj array and store into $S_Email.
$price = $obj['price'];

// Populate Email from JSON $obj array and store into $S_Email.
$stat = $obj['stat'];

// Populate Email from JSON $obj array and store into $S_Email.
$star = $obj['star'];

// Populate Email from JSON $obj array and store into $S_Email.
$cus_id = $obj['cus_id'];

 // Populate Email from JSON $obj array and store into $S_Email.
 $book_date = $obj['book_date'];
 
 // Creating SQL query and insert the record into MySQL database table.
 $Sql_Query = "UPDATE booked SET book_ser = '$book_ser', book_car = '$book_car', book_start = '$book_start', book_end = '$book_end', price = '$price', stat = '$stat', star = '$star', cus_id = '$cus_id', book_date = '$book_date'  WHERE book_id = $book_id";
 
 if(mysqli_query($con,$Sql_Query)){
 
 // If the record inserted successfully then show the message.
$MSG = 'Record Successfully Inserted Into MySQL Database.' ;
 
// Converting the message into JSON format.
$json = json_encode($MSG);
 
// Echo the message.
 echo $json ;
 
 }
 else{
 
 echo 'Try Again';
 
 }
 mysqli_close($con);
?>