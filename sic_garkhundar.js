data = []
data[0] = "Garhkundar-Dabar"

function select_subshed()  {
    sub_watershed = document.getElementById("sub-watershed").value ;
    if (sub_watershed == "Lower Reach")
    	data[1] = "Lower Reach"

    if (sub_watershed == "Middle Range")
        data[1] = "Middle Reach"
    
    if (sub_watershed == "Upper Range")
        data[1] = "Upper Reach"

    var info = JSON.stringify(data) ;
  window.location.assign("sicCalc.php?query="+ info) ;
} 