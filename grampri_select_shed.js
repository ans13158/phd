 function select_shed()  {
    var shed = document.getElementById("waterShed").value ;
    if(shed == "Domagor")
        window.location = "grampri_domagor.php" ;
    if(shed == "Garkhundar")
        window.location = "grampri_garkhundar.php" ;
     if(shed == "Parasi_Sindh")
        window.location = "grampri_sindh.php" ;

}