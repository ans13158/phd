<?php 
session_start();
if(isset($_SESSION['username']))
{
	if($_SESSION['username']=="admin")
	{
	header("Location:admin.php");
	
	}
	else
	{
		header("Location:index.php");
		exit;
	}
}	
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="content-type" content="text/html; charset=utf-8" />
<title>ALWS-KBSDSS</title>
<meta name="keywords" content="" />
<meta name="description" content="" />
<link href="styles.css" rel="stylesheet" type="text/css" media="screen" />
<link href="jQueryAssets/jquery.ui.core.min.css" rel="stylesheet" type="text/css" />
<link href="jQueryAssets/jquery.ui.theme.min.css" rel="stylesheet" type="text/css" />
<script src="jQueryAssets/jquery-1.8.3.min.js" type="text/javascript"></script>
<script type="text/javascript" src="js/jquery-1.11.0.min.js"></script>
<script type="text/javascript" src="js/jquery.leanModal.min.js"></script>
<link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css" />
<link type="text/css" rel="stylesheet" href="css/style.css" />
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
			<li><a href="index.php"  title="">Home</a></li>
			<li></li>
			<li></li>
			<li><a href="#" title="">About</a></li>
			<li><a href="#" title="">Contact</a></li>
		</ul>
	</div>
</div>	
<!-- header ends -->
<!-- content begins -->
 <div id="main">
	<div id="right">
	<h2>Welcome To Our Website</h2><br />
	  <h4>Spatial Decision Support System (SDSS)</h4>
	  <span style="color: #099"><br />
	  </span>
	  <p>Spatial Decision Support System are the Decision Support Systems (DSSs) where the spatial properties of the data to be analysed play a major role in making decisions. Usually, These properties refer to the location of data on the Earth's surface and is generally called as the georeferenced one. This term refers to data about geographic phenomena associate with its location referenced to the earth.</p>
			<p><span style="color: #0066CC">These SDSSs are a class of computer systems that combine the technologies of Geographical Information System (GIS) to aid decision makers with problems that have spatial dimensions. Like any other DSS, a SDSS is designed to solve complex problems and the main focus is oriented towards decision maker. It further relies on graphical displays to convey information to the users, is adaptable to decision maker's style of problem solving and can be extended to include new capabilities as and when they are needed</span><br />
	  </p>
<p><br />	
	
<section class="popupBody">
<div class="user_register">
	  <form name="signupform" id="signupform" action="register.php" method="post">
					<label>Full Name<span style="color: #F00">*</span></label>
					<input name="full_name" id="full_name" type="text" required/>
					<br />

					<label>Email Address<span style="color: #F00">*</span></label>
					<input name="email" id="email" type="email" required/>
					<br />
                    <label>User ID<span style="color: #F00">*</span></label>
		<input name="user_id" id="user_id" type="text" required/>
					<br />

					<label>Password<span style="color: #F00">*</span></label>
					<input name="password" id="password" type="password" required/>
					<br />

				  <div class="checkbox">
						<input name="agree" id="agree" type="checkbox" required/>
					  <label for="send_updates">I agree <a href="#">terms and Conditions</a></label>
		</div>

					<div class="action_btns">
                    
					  <div class="one_half last"><input value="Register" name="signupsubmit" type="submit" class="btn btn_red"/></div>
					</div>
	  </form>
	</div>
	  </p>	
	</div>

  	<div id="left">	
		<h3>Login</h3>
		<div class="left_back">
			<form id="form1" method="post" action="loginVerify.php">
			  <table width="200" border="0" cellpadding="9" cellspacing="9">
			    <tr>
			      <td width="58">Name</td>
			      <td width="132">
                  <input name="uname" type="text" required id="uname" size="15"/></td>
		        </tr>
			    <tr>
			      <td>Password</td>
			      <td>
                  <input name="upass" type="password" required id="upass" size="15"/></td>
		        </tr>
			    <tr>
			      <td>&nbsp;</td>
			      <td><input name="submit" type="submit" id="submit" form="form1" value="Submit" /></td>
		        </tr>
			    <tr>
			      <td colspan="2"><?php   if(isset($_GET['error']))
        {
         echo "<div class=\"msg_done\">".$_GET['error']."</div>";
        }?>  <?php
      
        if(isset($_GET['message']))
        {
         echo "<div class=\"msg_done\">".$_GET['message']."</div>";
        }
      ?></td>
		        </tr>
			    <tr>
			      <td colspan="2">or Register <a href="#" id="register_form" class="btn">Sign up</a></td>
		        </tr>
		      </table>
	      </form>
        </div>
        </section>
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
  <div id="main2">
    <div id="left2"><br />
    </div>
    <!--content ends -->
    <!--footer begins -->
    <div style="clear: both"></div>
  </div>
  <div id="footer2">
    <p>Copyright &copy; 2014.<a href="http://www.gbpuat.ac.in">Irrigation and Drainage Engineering Department, College of Technology, G B Pant University of Agriculture &amp; Technology. Pantnagar</a></p>
    <p>Design by <a href="#" title="Free Web Templates">Pratap Kumar Mistry</a> ID:26277</p>
  </div>
  <p>&nbsp;</p>
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