<?php
require_once 'C:/wamp/www/misc/login.php';
$full_name=$_REQUEST['full_name'];
$email=$_REQUEST['email'];
$uid=$_REQUEST['user_id'];
$pass=$_REQUEST['password'];
$success=false;
     $query="INSERT INTO user VALUES('','$full_name','$email','$uid','$pass')";
   
        mysql_query($query)
        or die(mysql_error());
       header('Location: index.php?message=User Successfully Created');
?>