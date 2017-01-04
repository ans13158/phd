function select_subshed()  {
    subWaterShed = document.getElementById("subWaterShed").value ;
    if (subWaterShed == "Dhikouli")
        window.location = "grampri_dhikouli.php"

    if (subWaterShed == "Nayakhera")
        window.location = "grampri_nayakhera.php"
    
    if (subWaterShed == "Gomagor")
        window.location = "grampri_gomagor.php"
} 