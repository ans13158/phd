 function select_shed()  {
    var shed = document.getElementById("waterShed").value ;
    if(shed == "Domagor")
        window.location = "groundpri_domagor.php" ;
    if(shed == "Garkhundar")
        window.location = "groundpri_garkhundar.php" ;
     if(shed == "Parasi_Sindh")
        window.location = "groundpri_sindh.php" ;

}