function select_subshed()  {
    subWaterShed = document.getElementById("subWaterShed").value ;
    if (subWaterShed == "Dhikouli")
        window.location = "groundpri_dhikouli.php"

    if (subWaterShed == "Nayakhera")
        window.location = "groundpri_nayakhera.php"
    
    if (subWaterShed == "Gomagor")
        window.location = "groundpri_gomagor.php"
} 