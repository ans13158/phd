 <?php
  $param = json_decode($_GET['query']) ;

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
<link rel="stylesheet" href="http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css" />
<link type="text/css" rel="stylesheet" href="css/style.css" />
<link href="style.css" rel="stylesheet" type="text/css" />
<link type="text/css" rel="stylesheet" href="stylebuttons.css">
 

</style>
<script src="manrique_uhera_gram.js">

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
    <h2>Land quality for gram (Manrique and Uhera)</h2>
    <br />
    <h2> Watershed : <?php echo $param[0] ; ?>
          Sub-watershed : <?php echo $param[1] ; ?>  </h2>
    
    <br />
      
<br />

<form name="form1" id="form1" method="post" action="#">
<ul id="tabs">
<li><a href="#" name="#tab1">Topography</a></li>
<li><a href="#" name="#tab2">Water Availability</a></li>
<li><a href="#" name="#tab3">Oxygen Availability</a></li>
<li><a href="#" name="#tab4">Root Development</a></li>
<li><a href="#" name="#tab5">Nutrient availability</a></li>
<li><a href="#" name="#tab6">Display</a></li>

</ul>
<div id="content1">
<div id="tab1">
<table width="648" border="0">
  <tr>
    <td>Land erodibility/slope class</td>
    <td><input  type="text" name="land_erodibility" required="required" id="land_erodibility" onblur="calcLand()" /></td>
  </tr>
</table>
<br><div id="Land" style="font-size:150%"></div>
<h2>&nbsp;</h2>
</div>
<div id="tab2">
  <table width="681" border="0">
    <tr>
    <td width="298">Soil texture surface</td>
    <td width="373"><select name="drain2" id="texture" onblur="calcSoil()">
      <option value="Select">Select</option>
      <option value="l">l</option>
      <option value="sil">sil</option>
      <option value="cl">cl</option>
      <option value="scl">scl</option>
      <option value="sic">sic</option>
      <option value="silc">silc</option>
      <option value="c">c</option>
      <option value="sl">sl</option>
    </select></td>
  </tr>
  
</table>
<br><div id="Soil" style="font-size:150%"></div>
<p>&nbsp;</p>
</div>
<div id="tab3">
  <table width="680" height="35" border="0">
   <tr>
    <td>Drainage</td>
    <td><select name="drain" id="drain" onblur="calcDrain()">

      <option value="Select">Select</option>
      <option value="Good">Good</option>
      <option value="Moderate">Moderate</option>
      <option value="Imperfect">Imperfect</option>
      <option value="Very Poor, Excessively Drained">Very Poor, Excessively Drained</option>
    </select></td>
  </tr>

    <tr>
    <td width="375">Water logging</td>
    <td width="295"><select name="drain3" id="log" onblur="calcWater()">
      <option value="Select">Select</option>
      <option value="None">None</option>
      <option value="Slight">Slight</option>
      <option value="Moderate">Moderate</option>
      <option value="High">High</option>
    </select></td>
  </tr>
  </table>
  <br><div id="water" style="font-size:150%"></div>
<p>&nbsp;</p>
</div>
<div id="tab4">
<table width="688" height="42" border="0">
  
     <tr>
    <td>Root depth (cm)</td>
    <td><input name="root_depth" type="text" required="required" id="root_depth" onblur="calcRoot()" /></td>
  </tr>
  
  
</table> 
<br><div id="root" style="font-size:150%"></div>
<h2>&nbsp;</h2>
</div>
<div id="tab5">
<table width="692" height="84" border="0">
  <tr>
    <td>C.E.C. of subsoil for clay (me/100g)(11)</td>
    <td><input name="cec_subsoil" type="text" required="required" id="cec_subsoil"onblur="calccec()" /></td>
  </tr>
  <tr>
    <td width="190">Base Saturation</td>
    <td width="492"><input name="base_saturation" type="text" required="required" id="base_saturation" onblur="calcbase()"/></td>
  </tr>
  <tr>
    <td>CaCO3 equivalent (%)</td>
    <td><input name="caco3_equivalent" type="text" required="required" id="caco3" onblur="calccarbo()" /></td>
  </tr>
  <tr>
    <td><button type="button" onclick="calclui()">Calculate LUI-FA</button></td>
  </tr>
</table>
<br><div id="calcium" style="font-size:150%"></div>
<br><br><div id="finals" style="font-size:150%"></div>
<h2>&nbsp;</h2>
</div>
<div id="tab5">
<table width="692" height="84" border="0">
   <tr>
    <td>C.E.C. of subsoil for clay (me/100g)(11)</td>
    <td><input name="cec_subsoil" type="text" required="required" id="cec_subsoil"onblur="calccec()" /></td>
  </tr>
  <tr>
    <td width="190">Base Saturation</td>
    <td width="492"><input name="base_saturation" type="text" required="required" id="base_saturation" onblur="calcbase()" /></td>
  </tr>
  <tr>
    <td>CaCO3 equivalent (%)</td>
    <td><input name="caco3_equivalent" type="text" required="required" id="caco3" onblur="calccarbo()" /></td>
  </tr>
  <tr>
    <td><button type="button" onclick="calclui()">Calculate LUI-FA</button></td>
  </tr>
</table>

<br><div id="cal02" style="font-size:150%"></div>
<br><br><div id="finals" style="font-size:150%"></div>
<h2>&nbsp;</h2>
</div>

<div id="tab6">
 
  <div id="dispTable" style:"line-spacing:10px">
    <div>
      <h2 align= "center"><strong>Topography</strong></h2>
    <span id = "le"style = "font-size:22px; padding-right: 15em ">Land Erodibility</span> 
    <span id = "le_data" style = "font-size:22px; padding-right: 3em "></span>
    <span id = "le_suit" style = "font-size:22px; "> </span>

    </div>
      <br>
      <h2 align= "center"><strong>Water Avalaibility</strong></h2>
    <div>
    <span id = "st" style = "font-size:22px;padding-right: 18em">Soil Texture</span>
    <span id = "st_data" style = "font-size:22px; padding-right: 3em "> </span>
    <span id = "st_suit" style = "font-size:22px;  "> </span>

    </div>
      <h2 align= "center"><strong>Oxygen Avalaibility</strong></h2>

    <div>
    <span id = "dr" style = "font-size:22px;padding-right: 18em">Drainage</span>
    <span id = "dr_data" style = "font-size:22px; padding-right: 3em "> </span>
    <span id = "dr_suit" style = "font-size:22px"> </span>
    <br>
      <span id = "wl" style = "font-size:22px;padding-right: 16em">Water Logging</span>
    <span id = "wl_data" style = "font-size:22px; padding-right: 3em "> </span>
    <span id = "wl_suit" style = "font-size:22px"> </span>
    </div>

    <br>
      <h2 align= "center"><strong>Root Development</strong></h2>

    <div>
    <span id = "rd" style = "font-size:22px;padding-right: 18em;position-left: -5px; padding-bottom:0px">Root Depth  </span>
    <span id = "rd_data" style = "font-size:25px; padding-right: 3em ; "> </span>
    <span id = "rd_suit" style = "font-size:22px;"> </span>

<br>
      <h2 align= "center"><strong>Nutrient Avalaibility</strong></h2>

     <div>
    <span id = "cec" style = "font-size:25px;padding-right: 18em; padding-bottom:0px">C.E.C</span>
    <span id = "cec_data" style = "font-size:25px; padding-right: 3em "> </span>
    <span id = "cec_suit" style = "font-size:22px"> </span>

    </div>


    <div>
    <span id = "base" style = "font-size:25px;padding-right: 13em; padding-bottom:0px">Base Saturation</span>
    <span id = "base_data" style = "font-size:25px; padding-right: 3em "> </span>
    <span id = "base_suit" style = "font-size:22px"> </span>

    </div>


    <div>
    <span id = "caco3" style = "font-size:25px;padding-right: 13em; padding-bottom:0px">Caco3 Equivalent</span>
    <span id = "caco3_data" style = "font-size:25px; padding-right: 3em "> </span>
    <span id = "caco3_suit" style = "font-size:22px"> </span>

    </div>
     
     <span id = "LuI " style = "font-size:22px;padding-right: 19em;"> <strong>LUI-fa</strong></span>
     <span id = "lui_data" style = "font-size:25px; padding-right: 1em "> </span>
    <span id = "lui_suit" style = "font-size:22px"> </span>


    </div>
</div>
<table width="684" height="10" border="0">
  <tr>
    <td width="297"><input type="submit" name="submit" id="bigbutton" value="Submit" /></td>
    <td width="387"><input type="reset" name="reset" id="bigbutton" value="Reset" /></td>
  <td width="387"><input type="button" id="bigbutton" value = "Print Result"
   onclick="printData('<?php echo $param[0] ;?>', '<?php echo $param[1] ;?>')" /></td>
  </tr>
</table>
</div>
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