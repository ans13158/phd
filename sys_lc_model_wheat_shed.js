 function select_shed()  {
    var shed = document.getElementById("watershed").value ;
    if(shed == "Domagor")
        window.location = "sys_lc_wheat_domagor.php" ;
    if(shed == "Garhkundar")
        window.location = "sys_lc_wheat_garhkundar.php" ;
     if(shed == "Parasai-Sindh")
        window.location = "sys_lc_wheat_sindh.php" ;

}