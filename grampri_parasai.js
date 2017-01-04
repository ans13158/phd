function select_subshed()  {
    subWaterShed = document.getElementById("subWaterShed").value ;
    if (subWaterShed == "Bacchouni")
        window.location = "grampri_bachhouni.php"

    if (subWaterShed == "Chatpur")
        window.location = "grampri_chatpur.php"
    
    if (subWaterShed == "Parasai")
        window.location = "grampri_parasai.php"
} 