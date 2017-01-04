function select_subshed()  {
    sub_watershed = document.getElementById("sub-watershed").value ;
    if (sub_watershed == "Lower Reach")
        window.location = "grampri_lower.php"

    if (sub_watershed == "Middle Range")
        window.location = "grampri_middle.php"
    
    if (sub_watershed == "Upper Range")
        window.location = "grampri_upper.php"
} 