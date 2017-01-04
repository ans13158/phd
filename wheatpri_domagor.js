function select_subshed()  {
    subWaterShed = document.getElementById("subWaterShed").value ;
    if (subWaterShed == "Dhikouli")
        window.location = "wheatpri_dhikouli.php"

    if (subWaterShed == "Nayakhera")
        window.location = "wheatpri_nayakhera.php"
    
    if (subWaterShed == "Gomagor")
        window.location = "wheatpri_gomagor.php"
} 