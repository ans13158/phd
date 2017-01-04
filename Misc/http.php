<?php


if ( isset( $_SERVER ['PHP_AUTH_USER'] )
    && isset( $_SERVER [ 'PHP_AUTH_PW'] ) )

{

	echo "welcome " . $_SERVER[ 'PHP_AUTH_PW'] . 
	      $_SERVER[ 'PHP_AUTH_USER' ] ;

}

else 
 
 {
   header ('WWW_Authenticate : Basic realm =  
   " Restricted section " ' );

   header( 'HTTP/1.0.401 Unathuorised');
   
   die( "enter username and password " ) ;
 
 }
  ?>