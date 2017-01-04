data = []
data[0] = "Garhkundar"

function select_subshed()  {
    subWaterShed = document.getElementById("subWaterShed").value ;
    if (subWaterShed == "Lower Reach")
    	data[1] = "Lower Reach"

    if (subWaterShed == "Middle Range")
        data[1] = "Middle Reach"
    
    if (subWaterShed == "Upper Range")
        data[1] = "Upper Reach"

    var info = JSON.stringify(data) ;
  window.location.assign("wilcoxCalc.php?query="+ info) ;
} 