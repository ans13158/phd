<?php
require_once 'connection.php';
$uname=$_REQUEST['uname'];
$passw=$_REQUEST['upass'];
$query="SELECT * FROM user WHERE user='$uname' AND password='$upass'";
$rs=mysql_query($query);
if(mysql_num_rows($rs) >0)
	{
					$row = mysql_fetch_array($rs);
					session_start();
					
					 $_SESSION['name'] =  $row[full_name];
					 $_SESSION['username'] = $uname;
	                    
				header('Location: admin.php ? msg=login Successful');
		
				
	}
else
	{
		header('Location: index.php ? error=Incorrect User Name or Password!');
		$_GLOBALS['error']="Incorrect User Name or Password";
	}
?>
