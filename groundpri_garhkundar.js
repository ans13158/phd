 function select_subshed()  {
    sub_waterShed = document.getElementById("sub_watershed").value ;
    if (sub_waterShed == "Lower Reach")
        window.location = "groundpri_lower.php"

    if (sub_waterShed == "Middle Range")
        window.location = "groundpri_middle.php"
    
    if (sub_waterShed == "Upper Range")
        window.location = "groundpri_upper.php"
} 