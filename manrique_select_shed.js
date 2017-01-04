function select_shed()  {
    var shed = document.getElementById("waterShed").value ;
    if(shed == "Domagor")
        window.location = "manrique_domagor.php" ;
    if(shed == "Garkhundar")
        window.location = "manrique_garkhundar.php" ;
     if(shed == "Parasi_Sindh")
        window.location = "manrique_sindh.php" ;

}
