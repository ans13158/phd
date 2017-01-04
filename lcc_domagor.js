
function select_subshed()  {
	data = []
data[0] = "Domagor-Pahuj"


    subWaterShed = document.getElementById("subWaterShed").value ;
    if (subWaterShed == "Dhikouli")
		data[1] = "Dhikouli"        
    if (subWaterShed == "Nayakhera")
    	data[1] = "Nayakhera" ;
    if (subWaterShed == "Gomagor")
        data[1] = "Domagor"

  var info = JSON.stringify(data) ;
  window.location.assign("lccCalc.php?query="+ info) ;

} 