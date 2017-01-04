var data = []
 data[0] = "Parasai-Sindh"

function select_subshed()  {
    subWaterShed = document.getElementById("subWaterShed").value ;
    if (subWaterShed == "Parasai")
       data[1] = "Parasai"

    if (subWaterShed == "Bachhouni")
       data[1] = "Bachhouni"
    
    if (subWaterShed == "Chatpur")
  		data[1] = "Chhatpur"

  		var info = JSON.stringify(data)
    window.location.assign("manriqueWheat.php?query="+info) ;      
} 