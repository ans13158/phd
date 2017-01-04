function select_shed()  {
    var shed = document.getElementById("waterShed").value ;
    if(shed == "Domagor")
        window.location = "lcc_domagor.php" ;
    if(shed == "Garkhundar")
        window.location = "lcc_garkhundar.php" ;
     if(shed == "Parasi_Sindh")
        window.location = "lcc_parasai.php" ;

}