 function select_subshed()  {
    subWaterShed = document.getElementById("subWaterShed").value ;
    if (subWaterShed == "Lower Reach")
        window.location = "groundpri_lower.php"

    if (subWaterShed == "Middle Range")
        window.location = "groundpri_middle.php"
    
    if (subWaterShed == "Upper Range")
        window.location = "groundpri_upper.php"
} 