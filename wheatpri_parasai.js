function select_subshed()  {
    subWaterShed = document.getElementById("subWaterShed").value ;
    if (subWaterShed == "Bacchouni")
        window.location = "wheatpri_bachhouni.php"

    if (subWaterShed == "Chatpur")
        window.location = "wheatpri_chatpur.php"
    
    if (subWaterShed == "Parasai")
        window.location = "wheatpri_parasai.php"
} 