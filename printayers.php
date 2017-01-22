
		<?php

	$param = json_decode( $_GET['query'] ) ;
	//echo "hii" . $param[12] ;

?>
<html>
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
<img src = "images/header.jpg" style="height: 177px;width:100%">


<h2>Water Suitability Criteria for Irrigation </h2>
<h3 style="text-align: center;">	

		
&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
 Watershed : <?php echo $param[21]; ?> &nbsp &nbsp&nbsp&nbsp
 	Sub-watershed : <?php echo $param[22] ; ?> </h3>
<div id ="disp" align="center">
	<table id ="dispTable">
		<tr>
	<th>Parameter Name</th>
	<th>Value</th>
	<th>Suitability</th>
	
		</tr>

		<tr>
			<th colspan="3">According to Richards(1954)</th>
		</tr>

<tr>
	
	<td> Electrical Conductivity (Salinity) (dS/cm) </td>
	<td> <?php echo $param[0] ;  ?> </td>
	<td><?php echo $param[1]; ?></td>
		</tr>

		<tr>
	
	<td> Sodium Absorption Ratio (-) </td>
	<td> <?php echo $param[2] ;  ?> </td>
	<td><?php echo $param[3]; ?></td>

		</tr>



		<tr>
			<th colspan="3">According to Wilcox(1955)</th>
		</tr>

		<tr>
	
	<td> Electrical Conductivity (Salinity) (dS/cm) </td>
	<td> <?php echo $param[5] ;  ?> </td>
	<td><?php echo $param[6]; ?></td>

		</tr>

		

<tr>
	
	<td> Sodium Absorption Ratio (-) </td>
	<td> <?php echo $param[7] ;  ?> </td>
	<td><?php echo $param[8]; ?></td>

		</tr>

		

		<tr>
			<th colspan="3">According to Ayers & Westcot(1985)</th>
		</tr>
<tr>
	
	<td> Electrical Conductivity (Salinity) (dS/cm) </td>
	<td> <?php echo $param[10] ;  ?> </td>
	<td><?php echo $param[11]; ?></td>

		</tr>

	<tr>
	
	<td> Total Dissolved Solids (Salinity) (mg/l) </td>
	<td> <?php echo $param[12] ;  ?> </td>
	<td><?php echo $param[13]; ?></td>

		</tr>

		<tr>
	
	<td> Sodium Absorption Ratio (-) </td>
	<td> <?php echo $param[14] ;  ?> </td>
	<td><?php echo $param[15]; ?></td>

		</tr>

		<tr>
	
	<td> Chloride (Specific ion toxicity) (me/l) </td>
	<td> <?php echo $param[16] ;  ?> </td>
	<td><?php echo $param[17]; ?></td>

		</tr>

		<tr>
	
	<td> Boron (Specific ion toxicity) (me/l)  </td>
	<td> <?php echo $param[18] ;  ?> </td>
	<td><?php echo $param[19]; ?></td>

		</tr>

		

</table>
</div>

<script>	
window.onload = window.print() ;
</script>

</body>



