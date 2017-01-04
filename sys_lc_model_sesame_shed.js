 function select_shed()  {
    var shed = document.getElementById("waterShed").value ;
    if(shed == "Domagor")
        window.location = "sys_lc_sesame_domagor.php" ;
    if(shed == "Garkhundar")
        window.location = "sys_lc_sesame_garkhundar.php" ;
     if(shed == "Parasai_Sindh")
        window.location = "sys_lc_sesame_sindh.php" ;

}