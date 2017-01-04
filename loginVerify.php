<?php
require_once 'connection.php';

$uname=$_POST['uname'];

$passw=$_POST['upass'];

$query="SELECT * FROM user WHERE username='$uname' AND password='$passw'";

$rs= $conn->query( $query );

if( $rs->num_rows )
	{               
		            
					
					while( $row = $rs->fetch_assoc() )
					{
					session_start();
					
					 $_SESSION['username'] =  $row[username];
					
	            	header("Location: admin.php?msg=login Successful");
		}
				
	}
else
	{
		header('Location: index.php?error=Incorrect User Name or Password!');
		$_GLOBALS['error']="Incorrect User Name or Password";
	}
?>


<!---http requester -->

