function select_shed()  {
    var shed = document.getElementById("watershed").value ;
    if(shed == "Domagor")
        window.location = "sys_wheat_domagor.php" ;
    if(shed == "Garhkundar")
        window.location = "sys_wheat_garkhundar.php" ;
     if(shed == "Parasai_Sindh")
        window.location = "sys_wheat_sindh.php" ;

}