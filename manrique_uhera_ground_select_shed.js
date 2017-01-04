function select_shed()  {
    var shed = document.getElementById("waterShed").value ;
    if(shed == "Domagor")
        window.location = "manrique_ground_domagor.php" ;
    if(shed == "Garkhundar")
        window.location = "manrique_ground_garkhundar.php" ;
     if(shed == "Parasi_Sindh")
        window.location = "manrique_ground_parasai.php" ;

}
