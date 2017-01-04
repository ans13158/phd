<?php
session_start();
if(isset($_SESSION['username'])){
	session_destroy();
	}
$url ="index.php ? message=You have successfully logged out!";
?>
<html>
<head>
<script type="text/javascript">
window.location.href="index.php"
</script>
<noscript>
<meta http-equiv="refresh" content="0" url="index.php"/>
</noscript> 
<?php
exit;
?>