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
<link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css" />
<link type="text/css" rel="stylesheet" href="css/style.css" />
<link href="style.css" rel="stylesheet" type="text/css" />

<link type="text/css" rel="stylesheet" href="stylebuttons.css">


</style>
<script src="sys_model_gram.js">
</script>
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
			<li><a href="contact.php" title="">Contact</a></li>
		</ul>
	</div>
</div>	
<!-- header ends -->
<!-- content begins -->
 <div id="main">
	<div id="right">
	  <h2>Soil-Site Suitability criteria (Crop Requirements) for gram</h2>
	  <br />
	  
	  <br />
      
<br />

<form name="form1" id="form1" method="post" action="#">
<ul id="tabs">
<li><a href="#" name="#tab1">Topography</a></li>
<li><a href="#" name="#tab2">Climate</a></li>
<li><a href="#" name="#tab3">Water Availability</a></li>
<li><a href="#" name="#tab4">Wetness</a></li>
<li><a href="#" name="#tab5">Physical Condition</a></li>
<li><a href="#" name="#tab6">Nutrient Availability</a></li>
<li><a href="#" name="#tab7">Salinity and Alkalinity</a></li>
</ul>
<div id="content1">
<div id="tab1">
<table width="648" border="0">
  <tr>
    <td>Percentage Slope (%):</td>
    <td><input name="per_slope" type="text"  required="required" id="top" onblur="calTopo()" /></td>
  </tr>
</table>
<br><div id="land" style="font-size:150%"></div>
<h2>&nbsp;</h2>
</div>
<div id="tab2">
<h2>During Growing Season</h2>
<table width="681" border="0">
  <tr>
    <td width="298">Rainfall (mm)</td>
    <td width="373"><input name="rainfall" type="text" required="required" id="rainfall" onblur="calrain1()"/></td>
  </tr>
  <tr>
    <td>Mean Temperature during growing season (&deg;C):</td>
    <td><input name="temp" type="text" required="required" id="temp" onblur="calmean1()" /></td>
  </tr>
</table>
<br><div id="mean" style="font-size:150%"></div>
<p>&nbsp;</p>
</div>
<div id="tab3">
<h2>During Growing Period</h2>
<table width="680" height="35" border="0">
  <tr>
    <td width="375">Length of growing period for short duration variety (days):</td>
    <td width="295"><input name="length_growing_short" type="text" required="required" id="length_growing_short" onblur="callength1()" /></td>
  </tr>
  <tr>
    <td>Length of growing period for long duration veriety (days):</td>
    <td><input name="length_growing_short2" type="text" required="required" id="length_growing_short2" onblur="callength2()" /></td>
  </tr>
</table>
<br><div id="len" style="font-size:150%"></div>
<p>&nbsp;</p>
</div>
<div id="tab4">
<table width="688" height="42" border="0">
  <tr>
    <td>Drainage:</td>
    <td><select name="drain" id="drain" onblur="calcDrain()">
      <option value="Select">Select</option>
      <option value="Good">Good</option>
      <option value="Moderate">Moderate</option>
      <option value="Imperfect">Imperfect</option>
      <option value="Poor and Aeric">Poor and Aeric</option>
      <option value="Excessively Poor Drained">Excessively Poor Drained</option>
    </select></td>
  </tr>
</table>
<br><div id="drained" style="font-size:150%"></div>
<h2>&nbsp;</h2>
</div>
<div id="tab5">
<table width="692" height="84" border="0">
  <tr>
    <td width="190">Texture (Sand clay loamy):</td>
    <td width="492"><select name="texture" id="texture" onblur="calcSoil()">
      <option value="Select">Select</option>
      <option value="cl">cl</option>
      <option value="sil">sil</option>
      <option value="sicl">sicl</option>
      <option value="l">l</option>
      <option value="scl">sc l</option>
      <option value="sc">sc</option>
      <option value="cs">cs</option>
      <option value="sl">sl</option>
      <option value="sics">sics</option>
      <option value="ls">ls</option>
      <option value="fs">fs</option>
      <option value="co">co</option>
      <option value="sicm">sicm</option>
      <option value="cm">cm</option>
    </select></td>
  </tr>
  <tr>
    <td>Depth (cm):</td>
    <td><input name="depth" type="text" required="required" id="depth" onblur="calcDepth()"/></td>
  </tr>
  <tr>
    <td>CaCO<sub>3</sub>(%):</td>
    <td><input name="caco3" type="text" required="required" id="caco3" onblur="calccal()"/></td>
  </tr>
  
</table>
<br><div id="gyp" style="font-size:150%"></div>
<h2>&nbsp;</h2>
</div>
<div id="tab6">
<table width="687" height="89" border="0">
  <tr>
    <td width="210">CEC of subsoil for Clay (me/100g):</td>
    <td width="467"><input name="cec" type="text" required="required" id="cec" onblur="calcec()"/></td>
  </tr>
  <tr>
    <td>Base Saturation (%):</td>
    <td><input name="base_saturation" type="text" required="required" id="base_saturation" onblur="calBase()"/></td>
  </tr>
  <tr>
    <td>Organic Carbon (%):</td>
    <td><input name="organic_carbon" type="text" required="required" id="organic_carbon" onblur="calCarb()" /></td>
  </tr>
  <tr>
    <td height="19">pH :</td>
    <td><input name="ph" type="text" required="required" id="ph" onblur="calpH1()"/></td>
  </tr>
</table>
<br><div id="pH1" style="font-size:150%"></div>
<h2>&nbsp;</h2>
</div>
<div id="tab7">
<table width="692" height="67" border="0">
  <tr>
    <td width="218">E.C. (dSm<sup>-1</sup> at 25&deg;C):</td>
    <td width="464"><input name="ec_dsm" type="text" required="required" id="ec_dsm" onblur="calCec()" /></td>
  </tr>
  <tr>
    <td>Na concentration (Sodicity in %):</td>
    <td><input name="textfield2" type="text" required="required" id="textfield2" onblur="calcNA()"/></td>
  </tr>
  <tr>
    <td> <button type="button" onclick="calLRI()">Calculate LRI</button></td>
  </tr>
</table>
<br><div id="na_conc" style="font-size:150%"></div>
<br><br><div id="result" style="font-size:150%"></div>
<h2>&nbsp;</h2>
</div>

<table width="694" height="37" border="0">
  <tr>
    <td width="297"><input type="submit" name="submit" id="bigbutton" value="Submit" /></td>
    <td width="387"><input type="reset" name="reset" id="bigbutton" value="Reset" /></td>
  </tr>
</table>
</div>
</form>










      
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
</script>
<script src="jquery-1.7.2.min.js"></script> 
<script>
    function resetTabs(){
        $("#content1 > div").hide(); //Hide all content
        $("#tabs a").attr("id",""); //Reset id's      
    }

    var myUrl = window.location.href; //get URL
    var myUrlTab = myUrl.substring(myUrl.indexOf("#")); // For localhost/tabs.html#tab2, myUrlTab = #tab2     
    var myUrlTabName = myUrlTab.substring(0,4); // For the above example, myUrlTabName = #tab

    (function(){
        $("#content1 > div").hide(); // Initially hide all content
        $("#tabs li:first a").attr("id","current"); // Activate first tab
        $("#content1 > div:first").fadeIn(); // Show first tab content
        
        $("#tabs a").on("click",function(e) {
            e.preventDefault();
            if ($(this).attr("id") == "current"){ //detection for current tab
             return       
            }
            else{             
            resetTabs();
            $(this).attr("id","current"); // Activate this
            $($(this).attr('name')).fadeIn(); // Show content for current tab
            }
        });

        for (i = 1; i <= $("#tabs li").length; i++) {
          if (myUrlTab == myUrlTabName + i) {
              resetTabs();
              $("a[name='"+myUrlTab+"']").attr("id","current"); // Activate url tab
              $(myUrlTab).fadeIn(); // Show url tab content        
          }
        }
    })()
  </script>
</body>
</html>