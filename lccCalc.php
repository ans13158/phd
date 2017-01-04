 <?php 
/*session_start();
if($_SESSION['username']=="admin")
{}
else 
{
header("Location:index.php?error=Session Expired!");
exit;
}*/

	$param = json_decode( $_GET['query'] ) ;

?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>ALWS-KBSDSS</title>
<meta name="keywords" content="" />
<meta name="description" content="" />
<link href="styles.css" rel="stylesheet" type="text/css" media="screen" />
<link href="jQueryAssets/jquery.ui.core.min.css" rel="stylesheet" type="text/css" />
<link href="jQueryAssets/jquery.ui.theme.min.css" rel="stylesheet" type="text/css" />
<script src="jQueryAssets/jquery-1.8.3.min.js" type="text/javascript"></script>
<script type="text/javascript" src="js/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="js/jquery.leanModal.min.js"></script>

<script type="text/javascript" src="validate.js"></script>

<link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css" />
<link type="text/css" rel="stylesheet" href="css/style.css" />
<link href="style.css" rel="stylesheet" type="text/css" />
<link type="text/css" rel="stylesheet" href="stylebuttons.css">
<style>
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

</head>
<body>
 
<div id="content">
<!-- header begins -->
<div id="header">
	<div id="logo">
		<h1>&nbsp;</h1>
	</div>
	 <div id="menu">
		<ul>
			<li><a href="admin.php"  title="">Home</a></li>
			<li><a href="#" title="">Blog</a></li>
			<li><a href="Gallery" title="">Gallery</a></li>
			<li><a href="about.php" title="">About</a></li>
			<li><a href="logout.php" title="">Logout</a></li>
		</ul>
	</div>
</div>	
<!-- header ends -->
<!-- content begins -->
 <div id="main">
	<div id="right">
	  <h2>Land Capability Classification</h2>
	  <br />
	  <h3 style="text-align: center;">	<strong>
 Watershed : <?php echo $param[0]; ?> &nbsp &nbsp&nbsp&nbsp
 	Sub-watershed : <?php echo $param[1] ; ?> </h3></strong><br><br>
      <div>
	  <form id="form1" method="post" action="">
	    <table width="759" border="0" cellpadding="5" cellspacing="10">
	    <tr>
	        <td style="font-size: 18px">Surface Texture:</td>
	        <td><select name="lcc_sur_tex" required="required" id="lcc_sur_tex">
	          <option value="Select">Select</option>
	          <option value="sicl">sicl</option>
	          <option value="cl">cl</option>
	          <option value="l">l</option>
	          <option value="sl">sl</option>
	          <option value="scl">scl</option>
	          <option value="sil">sil</option>
	          <option value="fsl">fsl</option>
	          <option value="sc">sc</option>
	          <option value="sic">sic</option>
	          <option value="c">c</option>
	          <option value="ls">ls</option>
	          <option value="hc">hc</option>
	          <option value="cs">cs</option>
	          <option value="g">g</option>
	          <option value="gt">gt</option>
	          <option value="st">st</option>
	          <option value="ch">ch</option>
	          <option value="Nil">Nil</option>
            </select></td>
          </tr>

	      <tr>
	        <td style="font-size: 18px">Soil Depth Class :</td>
	        <td>
            <input name="lcc_soil_depth" type="text" required="required" id="lcc_soil_depth" size="25" onchange="findClass()" /> (Enter 0 for Nil values)
            </td>
          </tr>

	      <tr>
	        <td style="font-size: 18px">Drainage:</td>
	        <td><select name="lcc_drainage" required="required" id="lcc_drainage">
	          <option value="Select">Select</option>
	          <option value="Well Drained">Well Drained</option>
	          <option value="Moderately Drained">Moderately Drained</option>
	          <option value="Imperfectly Drained">Imperfectly Drained</option>
	          <option value="Poorly Drained">Poorly Drained</option>
	          <option value="Very Poorly Drained">Very Poorly Drained</option>
	          <option value="Excessive">Excessive</option>
	          <option value="Nil">Nil</option>
            </select></td>
          </tr>
	      
	      <tr>
	        <td style="font-size: 18px">Slope Class:</td>
	        <td><input name="lcc_slope_class" type="text" required="required" id="lcc_slope_class" size="25" onchange="findClass()" />
	        </td>
          </tr>
	      <tr>
	        <td style="font-size: 18px">Erosion Class:</td>
	        <td><select name="lcc_Erosion_class" required="required" id="lcc_Erosion_class">
<option value="Select">Select</option>
<option value="Slight">Slight</option>
<option value="Moderate">Moderate</option>
<option value="Severe">Severe</option>
<option value="Very Severe">Very Severe</option>
<option value="Very Very Severe">Very Very Severe</option>
<option value="Nil">Nil</option>
            </select></td>
          </tr>
	      <tr>
	        <td style="font-size: 18px">Salinity Class:</td>
	        <td><select name="lcc_salinity" required="required" id="lcc_salinity">
	          <option value="Select">Select</option>
	          <option value="Slight">Slight</option>
	          <option value="Moderate">Moderate</option>
	          <option value="Strong">Strong</option>
	          <option value="Very Strong">Very Strong</option>
	          <option value="Severe">Severe</option>
	          <option value="Nil">Nil</option>
            </select></td>
          </tr>
	      <tr>
	        <td style="font-size: 18px">Rainfall (cm):</td>
	        <td>
            <input name="lcc_rainfall" type="text" required="required" id="lcc_rainfall" size="25" onchange="findClass()" /> 
            (Enter 0 for Nil values)</td>
          </tr>
	      <tr>
	        <td style="font-size: 18px">Land Capability Class:</td>
	        <td><input type="text" id="classResult" onclick="alert('This Text Field may not be edited.')" readonly wrap="off"></td>
          </tr>
	      <tr>
          <td>&nbsp;</td>
          
        </tr>
           </table>

        <table width="684" height="10" border="0">
  <tr>
    <td width="368" style="text-align: center"><input type="submit" name="submit" id="bigbutton" value="Submit" /></td>
  <td width="368" style="text-align: center"><input type="button" id="bigbutton" value = "Print Result" onclick="printData('<?php echo $param[0] ;?>', '<?php echo $param[1] ;?>')" ></td>
  </tr>
  </table>
      </form>
      </div>
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
</script>

</body>
</html>