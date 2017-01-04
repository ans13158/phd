 function select_subshed()  {
    subWaterShed = document.getElementById("subWaterShed").value ;
    if (subWaterShed == "Lower Reach")
        window.location = "sesamepri_lower.php"

    if (subWaterShed == "Middle Range")
        window.location = "sesamepri_middle.php"
    
    if (subWaterShed == "Upper Range")
        window.location = "sesamepri_upper.php"
} 