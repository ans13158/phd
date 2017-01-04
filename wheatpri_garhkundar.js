function select_subshed()  {
    subWaterShed = document.getElementById("subWaterShed").value ;
    if (subWaterShed == "Lower Reach")
        window.location = "wheatpri_lower.php"

    if (subWaterShed == "Middle Range")
        window.location = "wheatpri_middle.php"
    
    if (subWaterShed == "Upper Range")
        window.location = "wheatpri_upper.php"
} 