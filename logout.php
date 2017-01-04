<?php
session_start();
if(isset($_SESSION['username'])){
	session_destroy();
	}
$url = "index.php?message=You have successfully logged out!";
echo '<script type="text/javascript">';
echo 'window.location.href="'.$url.'";';
echo '</script>';
echo '<noscript>';
echo '<meta http-equiv="refresh" content="0;url='.$url.'" />';
echo '</noscript>'; exit;
?>