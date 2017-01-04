function select_subshed()  {
    subWaterShed = document.getElementById("subWaterShed").value ;
    if (subWaterShed == "Bacchouni")
        window.location = "parasai_sindh/bacchouni/lcc.php"

    if (subWaterShed == "Chatpur")
        window.location = "parasai_sindh/chatpur/lcc.php"
    
    if (subWaterShed == "Parasai")
        window.location = "parasai_sindh/parasai/lcc.php"
} 