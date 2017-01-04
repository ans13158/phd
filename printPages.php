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
<h3 style="text-align: center;">	Crop : <?php echo $param[34] ; ?>

 &nbsp &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp

		Model : <?php echo $param[35] ; ?>
			<br>	

&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
 Watershed : <?php echo $param[32]; ?> &nbsp &nbsp&nbsp&nbsp
 	Sub-watershed : <?php echo $param[33] ; ?> </h3>
<div id ="disp" align="center">
	<table id ="dispTable">
		<tr>
	<th>Parameter Name</th>
	<th>Interpolated Value</th>
	<th>Suitability Class</th>
		</tr>

	<th colspan="3" style="border:'2px solid black'">Topography</th>

		<tr>	
	<td>Percentage Slope</td>
	<td> <?php echo $param[0] ;  ?> </td>
	<td> <?php echo $param[1] ;  ?> </td>

		</tr>
	
	<th colspan="3">Climate</th>
	
		<tr>	
	<td>Rainfall</td>
	<td> <?php echo $param[2] ;  ?> </td>
	<td> <?php echo $param[3] ;  ?> </td>

		</tr>
	<tr>	
	<td>Mean Temperature</td>
	<td> <?php echo $param[4] ;  ?> </td>
	<td> <?php echo $param[5] ;  ?> </td>

		</tr>
		<tr>	
	<td>Length of Growing Season</td>
	<td> <?php echo $param[6] ;  ?> </td>
	<td> <?php echo $param[7] ;  ?> </td>

		</tr>
	
	<th colspan="3">Water Availability</th>	
		<tr>
		<td>AWHC in mm upto rooting depth</td>
		<td>  <?php echo $param[8] ; ?>  </td>	
		<td> <?php echo $param[9] ;  ?> </td>

		</tr>		
	
	<th colspan="3">Wetness</th>
		<tr>
			<td>Drainage</td>
			<td>  <?php echo $param[10] ;   ?>   </td>
			<td> <?php echo $param[11] ;  ?> </td>

		</tr>	

	<th colspan="3">Physical Conditions</th>	
		<tr>
		<td>Texture</td>
		<td>  <?php echo $param[12] ; ?>  </td>
		<td> <?php echo $param[13] ;  ?> </td>

		</tr>

		<tr>
		<td>Depth</td>
		<td>  <?php echo $param[14]; ?> </td>
	<td> <?php echo $param[15] ;  ?> </td>
		</tr>

		<tr>
		<td>CaCO3</td>
		<td>  <?php echo $param[16] ; ?> </td>
	<td> <?php echo $param[17] ;  ?> </td>

		</tr>

	<th colspan="3">Fertility</th>
		<tr>
		<td> C.E.C. </td>
		<td>  <?php echo $param[18];  ?>  </td>
	<td> <?php echo $param[19] ;  ?> </td>

		</tr>

		<tr>
		<td> Base Saturation </td>
		<td> <?php echo $param[20];   ?>  </td>
	<td> <?php echo $param[21] ;  ?> </td>

		</tr>

		<tr>
		<td> Oraganic Carbon</td>
		<td> <?php echo $param[22] ;  ?>  </td>	
	<td> <?php echo $param[23] ;  ?> </td>

		</tr>

		<tr>
		<td>pH</td>
		<td> <?php echo $param[24] ; ?> </td>
	<td> <?php echo $param[25] ;  ?> </td>

		</tr>

	<th colspan="3">Fertility</th>	
		<tr>
		<td>E.C.</td>
		<td>  <?php echo $param[26] ;  ?> </td>	
	<td> <?php echo $param[27] ;  ?> </td>

		</tr>

		<tr>
		<td>Na Concentration</td>
		<td> <?php echo $param[28] ;  ?> </td>
	<td> <?php echo $param[29] ;  ?> </td>

		</tr>

	<th colspan="3">LRI Value</th>
		<tr>
		<td> <strong> LRI </strong> </td>
		<td> <strong> <?php echo $param[30]; ?> </strong>  </td>
	<td> <strong> <?php echo $param[31] ;  ?> </strong> </td>

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