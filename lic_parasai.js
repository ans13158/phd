data = []
data[0] = "Parasai-Sindh"

function select_subshed()  {
    subWaterShed = document.getElementById("subWaterShed").value ;
    if (subWaterShed == "Bacchouni")
        data[1] = "Bachhouni"

    if (subWaterShed == "Chatpur")
        data[1] = "Chhatpur"
    
    if (subWaterShed == "Parasai")
        data[1] = "Parasai"

    var info = JSON.stringify(data) ;
  window.location.assign("licCalc.php?query="+ info) ;
} 