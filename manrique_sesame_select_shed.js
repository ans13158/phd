function select_shed()  {
    var shed = document.getElementById("waterShed").value ;
    if(shed == "Domagor")
        window.location = "manrique_sesame_domagor.php" ;
    if(shed == "Garkhundar")
        window.location = "manrique_sesame_garkhundar.php" ;
     if(shed == "Parasi_Sindh")
        window.location = "manrique_sesame_sindh.php" ;

}
