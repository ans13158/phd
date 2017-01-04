 function select_subshed()  {
    subWaterShed = document.getElementById("subWaterShed").value ;
    if (subWaterShed == "Lower Reach")
        window.location = "manrique_uhera_wheat_lower.php"

    if (subWaterShed == "Middle Range")
        window.location = "manrique_uhera_wheat_middle.php"
    
    if (subWaterShed == "Upper Range")
        window.location = "manrique_uhera_wheat_upper.php"
} 