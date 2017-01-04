var data= []
data[0] = "Parasai-Sindh"

function select_subshed()  {
    subWaterShed = document.getElementById("waterShed").value ;
    if (subWaterShed == "Bachhouni")
       data[1] = "Bachhouni"

    if (subWaterShed == "Chatpur")
        data[1] = "Chhatpur"
    
    if (subWaterShed == "Parasai")
        data[1] = "Parasai"

    var info = JSON.stringify(data)
    window.location.assign("sysGround.php?query="+ info) ;
    
} 