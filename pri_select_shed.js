function select_shed()  {
    var shed = document.getElementById("waterShed").value ;
    if(shed == "Domagor")
        window.location = "pri_domagor.php" ;
    if(shed == "Garkhundar")
        window.location = "pri_garkhundar.php" ;
     if(shed == "Parasi_Sindh")
        window.location = "pri_parasai.php" ;

}