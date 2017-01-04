
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

		Model : <?php echo $param[35] ; ?>
			<br>	
&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
 WaterShed : <?php echo $param[7]; ?> &nbsp &nbsp&nbsp&nbsp
 	Sub-WaterShed : <?php echo $param[8] ; ?> </h3>
<div id ="disp" align="center">
	<table id ="dispTable">
		<tr>
	<th>Parameter Name</th>
	<th>Value</th>
	
		</tr>


<tr>
	
	<td> Electrical Conductivity </td>
	<td> <?php echo $param[0] ;  ?> </td>

		</tr>


</table>
</div>
</body>



