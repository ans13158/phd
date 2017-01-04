var data = []
data[0] = "Domagor-Pahuj"

function select_subshed()  {
    subWaterShed = document.getElementById("waterShed").value ;
    if (subWaterShed == "Dhikouli")
    	data[1] = "Dhikouli"

    if (subWaterShed == "Nayakhera")
        data[1] = "Nayakhera"
    
    if (subWaterShed == "Gomagor")
        data[1] = "Domagor"

    var info = JSON.stringify(data) ;
    window.location.assign("sysGram.php?query="+ info) ;
} 