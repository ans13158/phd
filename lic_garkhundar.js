var data = []
data[0] = "Garhkundar-Dabar"
function select_subshed()  {
    subwatershed = document.getElementById("sub-watershed").value ;
    if (subwatershed == "Lower Reach")
        data[1] = "Lower Reach"

    if (subwatershed == "Middle Range")
    	data[1] = "Middle Reach"
    
    if (subwatershed == "Upper Range")
		data[1] = "Upper Reach"	

  var info = JSON.stringify(data) ;
  window.location.assign("licCalc.php?query="+ info) ;
} 