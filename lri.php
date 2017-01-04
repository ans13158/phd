 <?php 
/*session_start();
if($_SESSION['username']=="admin")
{}
else 
{
header("Location:index.php?error=Session Expired!");
exit;
}*/
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>WEALWS-KBSDSS</title>
<meta name="keywords" content="" />
<meta name="description" content="" />
<link href="styles.css" rel="stylesheet" type="text/css" media="screen" />
<link href="jQueryAssets/jquery.ui.core.min.css" rel="stylesheet" type="text/css" />
<link href="jQueryAssets/jquery.ui.theme.min.css" rel="stylesheet" type="text/css" />
<script src="jQueryAssets/jquery-1.8.3.min.js" type="text/javascript"></script>
<script type="text/javascript" src="js/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="js/jquery.leanModal.min.js"></script>
<script src="jQueryAssets/jquery-ui-1.9.2.accordion.custom.min.js" type="text/javascript"></script>
<link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css" />
<link type="text/css" rel="stylesheet" href="css/style.css" />
<link href="style.css" rel="stylesheet" type="text/css" />
<style type="text/css">
a:link {
	text-decoration: none;
}
a:visited {
	text-decoration: none;
}
a:hover {
	text-decoration: none;
}
a:active {
	text-decoration: none;
}
</style>
<link href="jQueryAssets/jquery.ui.accordion.min.css" rel="stylesheet" type="text/css" />
</head>
<body>
 
<div id="content">
<!-- header begins -->
<div id="header">
	<div id="logo">
		<h1></h1>
	</div>
	 <div id="menu">
		<ul>
			<li><a href="admin.php"  title="">Home</a></li>
			<li><a href="#" title="">Blog</a></li>
			<li><a href="Gallery" title="">Gallery</a></li>
			<li><a href="about.php" title="">About</a></li>
			<li><a href="contact.php" title="">Contact</a></li>
		</ul>
	</div>
</div>	
<!-- header ends -->
<!-- content begins -->
 <div id="main">
	<div id="right">
	  <h2>Land Rating Index</h2>
	  <br />
	  <form id="form1" method="post" action="">
	    <div id="Accordion1">
	      <h3><a href="#">Wheat</a></h3>
	      <div>
	        <p><a href="sys_model_wheat_shed.php">Sys Model</a></p>
	        <p><a href="sys_lc_model_wheat_shed.php">Limiting Condition Model</a></p>
	        <p><a href="wheatpri_shed.php">Productivity Rating Index Model</a></p>
	        <p><a href="manrique_uhera_wheat_shed.php">Manrique and Uehara Model</a></p>
          </div>
	      <h3><a href="#">Gram</a></h3>
	      <div>
	        <p><a href="sys_model_gram_shed.php">Sys Model</a></p>
            <p><a href="sys_lc_model_gram_shed.php">Limiting Condition Model</a></p>
            <p><a href="grampri_shed.php">Productivity Rating Index Model</a></p>
            <p><a href="manrique_uhera_gram_shed.php">Manrique and Uehara Model</a></p>
          </div>
	      <h3><a href="#">Sesame</a></h3>
	      <div>
	        <p><a href="sys_model_sesame_shed.php">Sys Model</a></p>
            <p><a href="sys_lc_model_sesame_shed.php">Limiting Condition Model</a></p>
            <p><a href="sesamepri_shed.php">Productivity Rating Index Model</a></p>
            <p><a href="manrique_uhera_sesame_shed.php">Manrique and Uehara Model</a></p>
          </div>
          <h3><a href="#">Groundnut</a></h3>
	      <div>
	        <p><a href="sys_model_ground_shed.php">Sys Model</a></p>
            <p><a href="sys_lc_ground_shed.php">Limiting Condition Model</a></p>
            <p><a href="groundpri_shed.php">Productivity Rating Index Model</a></p>
            <p><a href="manrique_uhera_ground_shed.php">Manrique and Uehara Model</a></p>
          </div>
        </div>
	  </form>
	  <br />
      
<br />
      
	</div>
  	<div id="left">	
		<h3>Menu</h3>
		<div class="left_back">
        <ul>
        <li>
          <table width="368" border="0" cellpadding="0" cellspacing="5" id="menu_table">
            <tr>
              <td height="23"><a href="admin.php">Home</a></td>
            </tr>
            <tr>
              <td height="23"><a href="lcc.php">Land Capability Classification</a></td>
            </tr>
            <tr>
              <td height="23"><a href="lic.php">Land Irrigability Classification</a></td>
            </tr>
            <tr>
              <td height="23"><a href="lri.php">Land Rating Index</a></td>
            </tr>
            <tr>
              <td height="23"><a href="sic.php">Soil Irrigability Classification</a></td>
            </tr>
            <tr>
              <td height="23"><a href="wsc.php">Water Suitability Criteria for Irrigation</a></td>
            </tr>
            <tr>
              <td height="23"><a href="ack.php">Acknowledgements</a></td>
            </tr>
            <tr>
              <td height="23"><a href="useful.php">Useful Links</a></td>
            </tr>
            <tr>
              <td height="23"><a href="logout.php">Logout</a></td>
            </tr>
          </table>
          <a href="#"></a></li>
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
        </ul>
        
        </div>
		<div class="bottom"></div>
			<br />
		
		
			<h3>about author</h3>
	  <div class="left_back">
			<table width="368" border="0" cellspacing="5" cellpadding="5" style="border: 2px solid #000066;" id="menu_table">
				    <tr>
				      <td colspan="2" bgcolor="#000066" style="font-size: 18px; color: #FFF;"><strong>Personal Details</strong></td>
			        </tr>
				    <tr>
				      <td width="106" style="font-size: 18px">Name:</td>
				      <td width="220" style="font-size: 18px"><strong>Pratap Kumar Mistry</strong></td>
			        </tr>
				    <tr>
				      <td style="font-size: 18px"> Id Number:</td>
				      <td style="font-size: 18px"><strong>26277</strong></td>
			        </tr>
				    <tr>
				      <td style="font-size: 18px">Department:</td>
				      <td style="font-size: 18px"><strong>Irrigation &amp; Drainage Engineering</strong></td>
			        </tr>
				    <tr>
				      <td colspan="2" bgcolor="#000066" style="font-size: 18px; color: #FFF;"><strong>Contact Details</strong></td>
			        </tr>
				    <tr>
				      <td style="font-size: 18px">E Mail Id:</td>
				      <td style="font-size: 18px">jjvvkkpp@gmail.com</td>
			        </tr>
				    <tr>
				      <td style="font-size: 18px">Mobile:</td>
				      <td style="font-size: 18px">+91-9456102648</td>
			        </tr>
	            </table>
	  </div>
			<div class="bottom"></div><br />

	</div>
<!--content ends -->
<!--footer begins -->
<div style="clear: both"></div>
  </div>

<div id="footer">
<p>Copyright &copy; 2014.<a href="http://www.gbpuat.ac.in">Irrigation and Drainage Engineering Department, College of Technology, G B Pant University of Agriculture &amp; Technology. Pantnagar</a></p> 
	<p>Design by <a href="#" title="Free Web Templates">Pratap Kumar Mistry</a> ID:26277</p>
	</div>
</div>
<!-- footer ends-->
<script type="text/javascript">
$("#modal_trigger").leanModal({top : 200, overlay : 0.6, closeButton: ".modal_close" });

	$(function(){
		// Calling Login Form
		$("#login_form").click(function(){
			$(".social_login").hide();
			$(".user_login").show();
			return false;
		});

		// Calling Register Form
		$("#register_form").click(function(){
			$(".social_login").hide();
			$(".user_register").show();
			$(".header_title").text('Register');
			return false;
		});

		// Going back to Social Forms
		$(".back_btn").click(function(){
			$(".user_login").hide();
			$(".user_register").hide();
			$(".social_login").show();
			$(".header_title").text('Login');
			return false;
		});

	})
$(function() {
	$( "#Accordion1" ).accordion(); 
});
</script>

</body>
</html>