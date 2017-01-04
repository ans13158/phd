<?php

require_once 'login.php';

$db_server = mysql_connect ( $db_host, $db_user, $db_pass ) ;
if ( !$db_server ) 
{	
	die("unable to connect" . mysql_error() ) ;
}

mysql_select_db( $db_database ) 
 
 or die ( "unable to connect " . mysql_error () ) ;

 $query = " SELECT * FROM user " ;
 $result = mysql_query ( $query );

 if( !$result )
  die( " database access failed " . mysql_error() );

$rows = mysql_num_rows( $result );

for ( $j=0; $j<$rows ; $j++ )
{
	echo 'id : ' .  mysql_result( $result, $j, 'id' );

	echo ' username ' . mysql_result( $result, $j , 'user' );

	echo  ' password' . mysql_result( $result, $j, 'password' );


}

?>

