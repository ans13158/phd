<?php
require_once 'connection.php';

$full_name=$_POST['full_name'];

$email=$_POST['email'];

$uid=$_POST['user_id'];

$pass=$_POST['password'];

$success=false;

     $query="INSERT INTO user VALUES('$uid','$pass')";
   
      $conn->query(  $query );
        or die(mysqli_error());

       header('Location: index.php?message=User Successfully Created');
?>
