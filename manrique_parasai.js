function select_subshed()  {
    subWaterShed = document.getElementById("subWaterShed").value ;
    if (subWaterShed == "Parasai")
        window.location = "manrique_uhera_wheat_parasai.php"

    if (subWaterShed == "Bacchouni")
        window.location = "manrique_uhera_wheat_bachhouni.php"
    
    if (subWaterShed == "Chatpur")
        window.location = "manrique_uhera_wheat_chatpur.php"
} 