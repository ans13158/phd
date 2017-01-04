function select_subshed()  {
    subWaterShed = document.getElementById("subWaterShed").value ;
    if (subWaterShed == "Dhikouli")
        window.location = "sesamepri_dhikouli.php"

    if (subWaterShed == "Nayakhera")
        window.location = "sesamepri_nayakhera.php"
    
    if (subWaterShed == "Gomagor")
        window.location = "sesamepri_gomagor.php"
} 