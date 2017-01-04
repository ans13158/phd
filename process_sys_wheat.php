<?php 
include("connection.php");
$per_slope=$_POST['per_slope'];
$rain=$_POST['rainfall'];
$temp_mean=$_POST['temp'];
$length_growing_season=$_POST['length_growing'];
$drain=$_POST['drain'];
$texture=$_POST['texture'];
$depth=$_POST['depth'];
$caco3=$_POST['caco3'];
$cec=$_POST['cec'];
$base_sat=$_POST['base_saturation'];
$org_carbon=$_POST['organic_carbon'];
$ph=$_POST['ph'];
$ec=$_POST['ec_dsm'];
$na_conc=$_POST['na_conc'];

$sql="insert into sys_model_wheat values('$per_slope','$rain','$temp_mean','$length_growing_season','$drain','$texture','$depth','$caco3','$cec','$base_sat','$org_carbon','$ph','$ec','$na_conc')";
$rs=mysql_query($sql,$conn) or die("Data Base entry not done.".mysql_error());
?>