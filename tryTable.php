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

<script src="sys_model_sesame2.js"></script>

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
	  <h2>Soil-Site Suitability criteria (Crop Requirements) for Sesame</h2>
	  <br />
	  <h2>Water Shed : GARKHUNDAR  Sub WaterShed  : UPPER REACH</h2> 
	  <br />
      
<br />


	<div id="dispTable" style:"line-spacing:10px">
		<div>
			<h2 align= "center"><strong>Topography</strong></h2>
		<span id = "le"style = "font-size:22px; padding-right: 5em ">Percentage Slope</span> 
		<span id = "le_data" style = "font-size:22px"></span>
		</div>
			<br>
			<h2 align= "center"><strong>Climate</strong></h2>
		<div>
		<span id = "rf" style = "font-size:22px;padding-right: 5em">Rainfall</span>
		<span id = "rf_data" style = "font-size:22px"> </span>
		</div>

		<div>
		<span id = "mt" style = "font-size:22px;padding-right: 5em">Mean Temperature</span>
		<span id = "mt_data" style = "font-size:22px"> </span>
		</div>

		<br>
			<h2 align= "center"><strong>Water Availability</strong></h2>

		<div>
		<span id = "l1" style = "font-size:22px;padding-right: 5em;position-left: -5px; padding-bottom:0px">Length Growing 
Period Early Variety  </span>
		<span id = "l1_data" style = "font-size:25px; "> </span>
		</div>
		<div>
		<span id = "rf" style = "font-size:22px;padding-right: 5em;padding-right: 0em;padding-bottom : 5px; padding-bottom:0px">Length Growing 
Period Medium Variety  </span>
<br>
		<span id = "rf_data" style = "font-size:22px"> </span>
		<span id = "rf" style = "font-size:22px;padding-right: 5em;padding-right: 0em;  padding-bottom:0px">Length Growing 
Period Late Variety  </span>
		<span id = "rf_data" style = "font-size:22px"> </span>
		</div>
<br>
			<h2 align= "center"><strong>Wetness</strong></h2>
		<div>
		<span id = "dr" style = "font-size:22px;padding-right: 5em; padding-bottom:0px">Drainage</span>
		<span id = "dr_data" style = "font-size:22px"> </span>
		</div>
		
			<br>
			<h2 align= "center"><strong>Physical Condition</strong></h2>

		<div>
		<span id = "tex" style = "font-size:22px;padding-right: 5em; padding-bottom:0px">Texture</span>
		<span id = "tex_data" style = "font-size:22px"> </span>
		</div>


		<div>
		<span id = "dep" style = "font-size:22px;padding-right: 5em; padding-bottom:0px">Depth</span>
		<span id = "dep_data" style = "font-size:22px"> </span>
		</div>


		<div>
		<span id = "caco3" style = "font-size:2px;padding-right: 5em; padding-bottom:0px">Caco3</span>
		<span id = "caco3_data" style = "font-size:25px"> </span>
		</div>
			
			<br>
			<h2 align= "center"><strong>Fertility</strong></h2>

		<div>
		<span id = "cec" style = "font-size:25px;padding-right: 5em; padding-bottom:0px">C.E.C</span>
		<span id = "cec_data" style = "font-size:25px"> </span>
		</div>


		<div>
		<span id = "base" style = "font-size:25px;padding-right: 5em; padding-bottom:0px">Base Saturation</span>
		<span id = "base_data" style = "font-size:25px"> </span>
		</div>


		<div>
		<span id = "org" style = "font-size:25px;padding-right: 5em; padding-bottom:0px">Organic Carbon</span>
		<span id = "org_data" style = "font-size:25px"> </span>
		</div>

		<div>
		<span id = "org" style = "font-size:25px;padding-right: 5em; padding-bottom:0px">pH</span>
		<span id = "org_data" style = "font-size:25px"> </span>
		</div>


			<br>
			<h2 align= "center"><strong>Fertility</strong></h2>


		<div>
		<span id = "ec" style = "font-size:25px;padding-right: 5em; padding-bottom:0px">E.C.</span>
		<span id = "ec_data" style = "font-size:25px"> </span>
		</div>

		<div>
		<span id = "na" style = "font-size:25px;padding-right: 5em; padding-bottom:0px">Na Concentraion</span>
		<span id = "na_data" style = "font-size:25px"> </span>
		</div>

	</div>

      
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
 No newline at end of file