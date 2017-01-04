function select_subshed()  {
    subWaterShed = document.getElementById("subWaterShed").value ;
    if (subWaterShed == "Bacchouni")
        window.location = "sesamepri_bachhouni.php"

    if (subWaterShed == "Chatpur")
        window.location = "sesamepri_chatpur.php"
    
    if (subWaterShed == "Parasai")
        window.location = "sesamepri_parasai.php"
} 