function select_subshed()  {
    subWaterShed = document.getElementById("subWaterShed").value ;
    if (subWaterShed == "Lower Reach")
        window.location = "grampri_lower.php"

    if (subWaterShed == "Middle Range")
        window.location = "grampri_middle.php"
    
    if (subWaterShed == "Upper Range")
        window.location = "grampri_upper.php"
} 