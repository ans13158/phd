
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
<img src = "images/header.jpg" style="height: 180px;width:100%">



<h2>Land Irrigability Classification </h2>
<h3 style="text-align: center;">	

		Model : Land Irrigability Classification
			<br>	
&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
 Watershed : <?php echo $param[5]; ?> &nbsp &nbsp&nbsp&nbsp
 	Sub-watershed : <?php echo $param[6] ; ?> </h3>
<div id ="disp" align="center">
	<table id ="dispTable">
		<tr>
	<th>Parameter Name</th>
	<th>Value</th>
	
		</tr>


<tr>
	
	<td> Soil Irrigability Class </td>
	<td> <?php echo $param[0] ;  ?> </td>

		</tr>

		<tr>
	
	<td> Slope Class</td>
	<td> <?php echo $param[1] ;  ?> </td>

		</tr>

		<tr>
	
	<td>  Ground Water Depth Class  </td>
	<td>  <?php echo $param[2] ;  ?>  </td>

		</tr>

		<tr>
	
	<td>  Drainage  </td>
	<td>  <?php echo $param[3] ;  ?>  </td>

		</tr>

		<tr>
	
	<td> <strong> Land Irrigability Class </strong> </td>
	<td> <strong> <?php echo $param[4] ;  ?> </strong> </td>

		</tr>

		
</table>
</div>

<script>	
window.onload = window.print() ;
</script>

</body>



