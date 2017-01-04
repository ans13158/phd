var data = []
data[0] = "Domagor-Pahuj"
function select_subshed()  {
    subWaterShed = document.getElementById("subWaterShed").value ;
    if (subWaterShed == "Dhikouli")
        data[1] = "Dhikouli"

    if (subWaterShed == "Nayakhera")
        data[1] = "Nayakhera"
    
    if (subWaterShed == "Domagor")
        data[1] = "Domagor"

    var info = JSON.stringify(data) ;
  window.location.assign("licCalc.php?query="+ info) ;
} 