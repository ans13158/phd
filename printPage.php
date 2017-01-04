<?

	$param = json_decode( $_GET['query'] ) ;

?>


<html>

<head>
	<style type="text/css">
		table  {
			border : 2px solid black;
			border-collapse:  border-collapse ;
			

		}
		th,td {
			border : 1px solid black;
			border-collapse:  border-collapse ;
		}
	</style>
</head>

<body>

	<table id ="disp" style ="border:2px solid black ;">
		<tr>
	<th>Param Name</th>
	<th>Param Value</th>
		</tr>

		<tr>	
	<td>Percentage Slope</td>
	<td> <?php echo $param[0] ;  ?> </td>	
		</tr>
	
		<tr>	
	<td>Rainfall</td>
	<td> <?php echo $param[1] ;  ?> </td>	
		</tr>
			
	</table>
</body>

</html>
<?
?>