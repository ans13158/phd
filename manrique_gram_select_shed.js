function select_shed()  {
    var shed = document.getElementById("waterShed").value ;
    if(shed == "Domagor")
        window.location = "manrique_gram_domagor.php" ;
    if(shed == "Garkhundar")
        window.location = "manrique_gram_garkhundar.php" ;
     if(shed == "Parasi_Sindh")
        window.location = "manrique_gram_parasai.php" ;

}
