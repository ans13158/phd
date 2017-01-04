function select_subshed()  {
    subWaterShed = document.getElementById("subWaterShed").value ;
    if (subWaterShed == "Bacchouni")
        window.location = "groundpri_bachhouni.php"

    if (subWaterShed == "Chatpur")
        window.location = "groundpri_chatpur.php"
    
    if (subWaterShed == "Parasai")
        window.location = "groundpri_parasai.php"
} 