
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
<img src = "images/header.jpg" style="height: 257px;width:100%">


<h2>Water Suitability Criteria for Irrigation </h2>
<h3 style="text-align: center;">	

		Model : Ayers & Westcot (1985)
			<br>	
&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
 Watershed : <?php echo $param[6]; ?> &nbsp &nbsp&nbsp&nbsp
 	Sub-watershed : <?php echo $param[7] ; ?> </h3>
<div id ="disp" align="center">
	<table id ="dispTable">
		<tr>
	<th>Parameter Name</th>
	<th>Value</th>
	
		</tr>


<tr>
	
	<td> Electrical Conductivity (Salinity) (&#956S/cm) </td>
	<td> <?php echo $param[0] ;  ?> </td>

		</tr>

		<tr>
	
	<td> Total Dissolved Solids (Salinity) (mg/l) </td>
	<td> <?php echo $param[1] ;  ?> </td>

		</tr>

		<tr>
	
	<td> Sodium Absorption Ratio (Specific ion toxicity) (%) </td>
	<td> <?php echo $param[2] ;  ?> </td>

		</tr>

		

<tr>
	
	<td> Chloride (Specific ion toxicity) (me/l) </td>
	<td> <?php echo $param[3] ;  ?> </td>

		</tr>
<tr>
	
	<td> Boron(Specific ion toxicity) (mg/l) </td>
	<td> <?php echo $param[4] ;  ?> </td>

		</tr>

		<tr>
	
	<td> <strong> Suitability Class </strong> </td>
	<td> <strong> <?php echo $param[5] ;  ?> </strong>	 </td>
		</tr>

</table>
</div>

<script>	
window.onload = window.print() ;
</script>

</body>



