function select_shed()  {
    var shed = document.getElementById("waterShed").value ;
    if(shed == "Domagor")
        window.location = "wheatpri_domagor.php" ;
    if(shed == "Garkhundar")
        window.location = "wheatpri_garkhundar.php" ;
     if(shed == "Parasi_Sindh")
        window.location = "wheatpri_sindh.php" ;

}