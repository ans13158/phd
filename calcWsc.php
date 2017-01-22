<?php 
session_start();
if($_SESSION['username']=="admin")
{}
else 
{
header("Location:index.php?error=Session Expired!");
exit;


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
      <h2>Water Suitability Criteria for Irrigation</h2>

    <br />
    <h3 style="text-align: center;">  <strong>
 Watershed : <?php echo $param[0]; ?> &nbsp &nbsp&nbsp&nbsp
  Sub-watershed : <?php echo $param[1] ; ?> </h3></strong><br><br>  
      <div>

      <h2> According to  Richards(1954)</h2>

    <form id="form1" method="post" action="">
      <table width="659" border="0" cellpadding="5" cellspacing="10">
        <tr>
          <td style="font-size: 16px">Electrical Conductivity(Salinity) (dS/cm):</td>
          <td><input name="conductivity" type="text" required="required" id="conductivity" size="15" /></td>
          <td><span id="classResultElectricRichards" style="font-size: 16px;font-weight: bold"></span></td>
          </tr>
        <tr>
          <td style="font-size: 16px">Sodium Absorption Ratio (Specific ion toxicity) (-) </td>
          <td><input name="sodium" type="text" required="required" id="sodium" size="15" onblur="findClassRichards();"/></td>
          <td><span id="classResultSodiumRichards" style="font-size: 16px;font-weight: bold"></span></td>
          </tr>
       <tr>
          
          <td>&nbsp;</td>
          

           </table>

           <h2>According to Wilcox(1955)</h2>
           <form id="form2" method="post" action="">
      <table width="659" border="0" cellpadding="5" cellspacing="10">
        <tr>
          <td style="font-size: 16px">Electrical Conductivity(Salinity) (dS/cm):</td>
          <td><input name="conductivity" type="text" required="required" id="conductivityWilcox" size="15" /></td>
          <td><span id="classResultElectricWilcox" style="font-size: 16px;font-weight: bold"></span></td>
          </tr>
        <tr>
          <td style="font-size: 16px">Sodium Absorption Ratio (Specific ion toxicity) (-)</td>
          <td><input name="sodium" type="text" required="required" id="sodiumWilcox" size="15" onblur="findClassWilcox();"/></td>
          <td><span id="classResultSodiumWilcox" style="font-size: 16px;font-weight: bold"></span></td>
          </tr>
       
        <tr>
          <td>&nbsp;</td>
          

           </table>

<h2>According to Ayers and Westcot(1985)</h2>
    <form id="form3" method="post" action="">
      <table width="659" border="0" cellpadding="5" cellspacing="10">
        <tr>
          <td style="font-size: 16px">Electrical Conductivity(Salinity) (dS/m):</td>
          <td><input name="conductivity" type="text" required="required" id="conductivityAyers" size="15" /></td>
          <td><span id="classResultElectricAyers" style="font-size: 16px;font-weight: bold"></span></td>
          </tr>

          <tr>
          <td style="font-size: 16px">Total Dissolved Solids (Salinity) (mg/l):</td>
          <td><input name="dissolvedSolid" type="text" required="required" id="dissolvedSolid" size="15" /></td>
          <td><span id="classResultTotalAyers" style="font-size: 16px;font-weight: bold"></span></td>
          </tr>

          <tr>
          <td style="font-size: 16px">Sodium Absorption Ratio (Specific ion toxicity) (-):</td>
          <td><input name="sodiumAyers" type="text" required="required" id="sodiumAyers" size="15" /></td>
          <td><span id="classResultSodiumAyers" style="font-size: 16px;font-weight: bold"></span></td>
          </tr>

          <tr>
          <td style="font-size: 16px">Chloride (Specific ion toxicity) (me/l) :</td>
          <td><input name="chloride" type="text" required="required" id="chloride" size="15" /></td>
          <td><span id="classResultChlorideAyers" style="font-size: 16px;font-weight: bold"></span></td>
          </tr>
        <tr>
          <td style="font-size: 16px"> Boron(Specific ion toxicity) (me/l)</td>
          <td><input name="boron" type="text" required="required" id="boron" size="15" onblur="findClassAyers();"/></td>
          <td><span id="classResultBoronAyers" style="font-size: 16px;font-weight: bold"></span></td>
          </tr>
       
          <td>&nbsp;</td>
         
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
<script type="text/javascript">
  // *** Main function *** //
var data = []
function findClassRichards()
{
var conductivity = document.getElementById('conductivity');
var clsrslt1Richards = document.getElementById('classResultElectricRichards');

data[0] = conductivity.value

var sodium = document.getElementById('sodium');
data[2] = sodium.value
var clsrslt2Richards = document.getElementById('classResultSodiumRichards');




var engClass =["Low","Medium","High","Very High"];

var maxClassNo=4;



for (i = maxClassNo; i > 0; i--) 
{
  if (compareConductivity(conductivity.value, i) )
      {    
    clsrslt1Richards.innerHTML = engClass[i-1];
    data[1] = engClass[i-1];
    break;
  }
}

for (i = maxClassNo; i > 0; i--) 
{
  if (compareSodium(sodium.value, i) )
      {    
    clsrslt2Richards.innerHTML = engClass[i-1];
    data[3] = engClass[i-1];
    break;
  }
}



 return false;  // to prevent page from refreshing
}



// *** Helper functions *** //


function compareConductivity(t, classNo)
{
  switch(classNo)
  {
    case 1: if (t >= 100 && t <250) return true; break;
    case 2: if (t >= 250 && t< 750) return true; break;
    case 3: if (t >= 750 && t< 2250) return true; break;
    case 4: if (t >= 2250 && t<5000) return true; break;
    
  }
  return false;
}

function compareSodium(t, classNo)
{
  switch(classNo)
  {
    case 1: if (t >= 0 && t<10) return true; break;
    case 2: if (t >= 10 && t< 18) return true; break;
    case 3: if (t >= 18 && t< 26) return true; break;
    case 4: if (t >= 26 ) return true; break;
    
  }
  return false;
}



function findClassWilcox()
{
var conductivityWilcox = document.getElementById('conductivityWilcox');
var clsrslt1Wilcox = document.getElementById('classResultElectricWilcox');
data[5] = conductivityWilcox.value
var sodium = document.getElementById('sodiumWilcox');
data[7] = sodium.value
var clsrslt2Wilcox = document.getElementById('classResultSodiumWilcox');

var clsrslt2 = document.getElementById('classResult2');


var engClass =["Excellent","Good","Permissible","Doubtful", "Unsuitable"];

var maxClassNo=5;



for (i = maxClassNo; i > 0; i--) 
{
  if (compareConductivityWilcox(conductivityWilcox.value, i) )
      {    
    clsrslt1Wilcox.innerHTML = engClass[i-1];
    data[6] = engClass[i-1];
    break;
  }
}


for (i = maxClassNo; i > 0; i--) 
{ 
  if (compareSodiumWilcox(sodium.value, i) )
      {    
    clsrslt2Wilcox.innerHTML = engClass[i-1];
    data[8]  =engClass[i-1];
    break;
  }
}




 return false;  // to prevent page from refreshing
}



// *** Helper functions *** //


function compareConductivityWilcox(t, classNo)
{
  switch(classNo)
  {
    case 1: if ( t <250) return true; break;
    case 2: if (t >= 250 && t< 750) return true; break;
    case 3: if (t >= 750 && t< 2000) return true; break;
    case 4: if (t >= 2000 && t<3000) return true; break;
    case 5: if (t >= 3000) return true; break;
    
  }
  return false;
}

function compareSodiumWilcox(t, classNo)
{
  switch(classNo)
  {
    case 1: if (t<20) return true; break;
    case 2: if (t >= 20 && t< 40) return true; break;
    case 3: if (t >= 40 && t< 60) return true; break;
    case 4: if (t >= 60 && t < 80) return true; break;
    case 5: if (t >= 80) return true; break;
    
  }
  return false;
}



  // *** Main function *** //


function findClassAyers()
{
var conductivityAyers = document.getElementById('conductivityAyers');
clsrslt1Ayers = document.getElementById('classResultElectricAyers')
//data[0] = "Electrical Conductivity (Salinity) (μS/cm)"
data[10] = conductivityAyers.value

var dissolvedSolid = document.getElementById('dissolvedSolid');
//data[2] = "Total Dissolved Solids (Salinity) (mg/l)"
clsrslt2Ayers = document.getElementById('classResultTotalAyers')

data[12] = dissolvedSolid.value 

var sodiumAyers = document.getElementById('sodiumAyers');
clsrslt3Ayers = document.getElementById('classResultSodiumAyers')

//data[4] = "Sodium Absorption Ratio (Specific ion toxicity) (%)"
data[14] = sodiumAyers.value

var chloride = document.getElementById('chloride');
clsrslt4Ayers = document.getElementById('classResultChlorideAyers')

//data[6] = "Chloride (Specific ion toxicity) (me/l)"
data[16] = chloride.value

var boron = document.getElementById('boron');
clsrslt5Ayers = document.getElementById('classResultBoronAyers')

//data[8] = "Boron(Specific ion toxicity) (mg/l)"
data[18] = boron.value


//data[10] = "Suitability Class"

var engClass =["Excellent","Slight to Moderate","Unsuitable"]
var maxClassNo=3;



for (i = maxClassNo; i > 0; i--) 
{ 
  if (compareConductivityAyers(conductivityAyers.value, i) )
      {    
    clsrslt1Ayers.innerHTML = engClass[i-1];
    data[11] = engClass[i-1];
    break;
  }
}

for (i = maxClassNo; i > 0; i--) 
{ 
  if (compareSodiumAyers(sodiumAyers.value, i) )
      {    
    clsrslt3Ayers.innerHTML = engClass[i-1];
    data[13] = engClass[i-1];
    break;
  }
}

for (i = maxClassNo; i > 0; i--) 
{ 
  if (comparedissolvedSolid(dissolvedSolid.value, i) )
      {    
    clsrslt2Ayers.innerHTML = engClass[i-1];
    data[15] = engClass[i-1];
    break;
  }
}

for (i = maxClassNo; i > 0; i--) 
{ 
  if (compareChloride(chloride.value, i) )
      {    
    clsrslt4Ayers.innerHTML = engClass[i-1];
    data[17] = engClass[i-1];
    break;
  }
}

for (i = maxClassNo; i > 0; i--) 
{ 
  if (compareBoron(boron.value, i) )
      {    
    clsrslt5Ayers.innerHTML = engClass[i-1];
    data[19] = engClass[i-1];
    break;
  }
}



 return false;  // to prevent page from refreshing
}



// *** Helper functions *** //


function compareConductivityAyers(t, classNo)
{
  switch(classNo)
  {
    case 1: if ( t <0.7) return true; break;
    case 2: if (t >= 0.7 && t< 3.0) return true; break;
    case 3: if (t >= 3) return true; break;
    
    
  }
  return false;
}

function comparedissolvedSolid(t, classNo)
{
  switch(classNo)
  {
    case 1: if (t<450) return true; break;
    case 2: if (t >= 450 && t< 2000) return true; break;
    case 3: if (t >= 2000 ) return true; break;
    
    
  }
  return false;
}

function compareSodiumAyers(t, classNo)
{
  switch(classNo)
  {
    case 1: if (t<3) return true; break;
    case 2: if (t >= 3 && t< 9) return true; break;
    case 3: if (t >= 9 ) return true; break;
    
  }
  return false;
}

function compareChloride(t, classNo)
{
  switch(classNo)
  {
    case 1: if (t<4) return true; break;
    case 2: if (t >= 4 && t< 10) return true; break;
    case 3: if (t >= 10 ) return true; break;
    
  }
  return false;
}

function compareBoron(t, classNo)
{
  switch(classNo)
  {
    case 1: if (t<0.7) return true; break;
    case 2: if (t >= 0.7 && t< 3) return true; break;
    case 3: if (t >= 3) return true; break;
    
  }
  return false;
}


function printData( shed,subshed)  {
  
  data[21] = shed
  data[22] = subshed
  var info = JSON.stringify(data)
  window.location.assign("printayers.php?query=" + info )
}
</script>
</body>
</html>