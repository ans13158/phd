  <?php

	$param = json_decode( $_GET['query'] ) ;

?>
<head>
	<style type="text/css">
	@media all  {
		* {
		padding :0px;
	}
	body {
	
	
	font: 13px Tahoma, Verdana, Arial, Helvetica, sans-serif;
	color: #333333;
}
table, th, td {
    border: 2px solid black;
}

		table {
	
    border-collapse: collapse;
    width : 100%;
    
}

th,td  {
    padding-top:1px;
    padding-right: 4px;
    padding-bottom: 4px;

}
th{
    text-align:center;
}
td  {
	padding-left:55px;
}

}
	</style>

</head>

<body>
<img src = "images/header.jpg" style="height: 180px;width:100%">


<h2>Soil-Site Suitability criteria (Crop Requirements) </h2>
<h3 style="text-align: center;">	Crop : <?php echo $param[20] ; ?>

 &nbsp &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp

		Model : Manrique & Uehara
			<br>	

&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
 Watershed : <?php echo $param[18]; ?> &nbsp &nbsp&nbsp&nbsp
 	Sub-watershed : <?php echo $param[19] ; ?> </h3>
<div id ="disp" align="center">
	<table id ="dispTable">
		<tr>
	<th>Parameter Name</th>
	<th>Interpolated Value</th>
	<th>Suitability Class</th>
		</tr>

	<th colspan="3" style="border:'2px solid black'">Topography</th>

		<tr>	
	<td>Land Erodibility/ Slope Class</td>
	<td> <?php echo $param[0] ;  ?> </td>
	<td> <?php echo $param[1] ;  ?> </td>

		</tr>
	
	<th colspan="3">Water Availability</th>
	
		<tr>	
	<td>Soil Texture Surface</td>
	<td> <?php echo $param[2] ;  ?> </td>
	<td> <?php echo $param[3] ;  ?> </td>

		</tr>
		<th colspan="3">Oxygen Availability</th>
	<tr>	
	<td>Drainage</td>
	<td> <?php echo $param[4] ;  ?> </td>
	<td> <?php echo $param[5] ;  ?> </td>

		</tr>
		<tr>	
	<td>Water Logging</td>
	<td> <?php echo $param[6] ;  ?> </td>
	<td> <?php echo $param[7] ;  ?> </td>

		</tr>
	
	<th colspan="3">Root Development</th>	
		<tr>
		<td>Root Depth (cm)</td>
		<td>  <?php echo $param[8] ; ?>  </td>	
		<td> <?php echo $param[9] ;  ?> </td>

		</tr>		
	
	<th colspan="3">Nutrient Availability</th>
		<tr>
			<td>C.E.C of subsoil for clay(me/100g)</td>
			<td>  <?php echo $param[10] ;   ?>   </td>
			<td> <?php echo $param[11] ;  ?> </td>

		</tr>	

		
		<tr>
		<td>Base Saturation</td>
		<td>  <?php echo $param[12] ; ?>  </td>
		<td> <?php echo $param[13] ;  ?> </td>

		</tr>

		<tr>
		<td>CaCo<sub>3</sub></td>
		<td>  <?php echo $param[14]; ?> </td>
	<td> <?php echo $param[15] ;  ?> </td>
		</tr>

		

	
		<tr>
		<td> <strong>LUI-fa</strong> </td>
		<td>  <?php echo $param[16];  ?>  </td>
	<td> <?php echo $param[17] ;  ?> </td>

		</tr>

	</table>
	</div>
</body>

<script>	
window.onload = window.print() ;
</script>
</html>
<?
?>