var data = []
data[0] = "Garhkundar-Dabar"

function select_subshed()  {
    subWaterShed = document.getElementById("waterShed").value ;
    if (subWaterShed == "Lower")
    	data[1] = "Lower Reach"

    if (subWaterShed == "Middle")
       data[1] = "Middle Reach"
    
    if (subWaterShed == "Upper")
        data[1] = "Upper Reach"

    var info = JSON.stringify(data)
    window.location.assign("sysLcSesame.php?query="+ info) ;
    
} 