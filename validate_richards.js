// *** Main function *** //
var data = []
function findClassRichards()
{
var conductivity = document.getElementById('conductivity');
data[0] = conductivity.value
var sodium = document.getElementById('sodium');
data[1] = sodium.value
var clsrslt = document.getElementById('classResult');


var engClass =["Low","Medium","High","Very High"];

var maxClassNo=4;

clsrslt.value = "No Class Found";

for (i = maxClassNo; i > 0; i--) 
{
  if (compareConductivity(conductivity.value, i)||compareSodium(sodium.value, i))
      {
    clsrslt.value = engClass[i-1];
    data[2] = clsrslt.value
    break;
  }
}

 return false;  // to prevent page from refreshing
}



// *** Helper functions *** //


function compareConductivity(t, classNo)
{
  switch(classNo)
  {
    case 1: if (t >= 100 && t <250) return true; break;
    case 2: if (t >= 250 && t< 750) return true; break;
    case 3: if (t >= 750 && t< 2250) return true; break;
    case 4: if (t >= 2250 && t<5000) return true; break;
    
  }
  return false;
}

function compareSodium(t, classNo)
{
  switch(classNo)
  {
    case 1: if (t >= 0 && t<10) return true; break;
    case 2: if (t >= 10 && t< 18) return true; break;
    case 3: if (t >= 18 && t< 26) return true; break;
    case 4: if (t >= 26 ) return true; break;
    
  }
  return false;
}

function printData(model, shed,subshed)  {
  data[3] = model
  data[4] = shed
  data[5] = subshed
  var info = JSON.stringify(data)
  window.location.assign("printRichards.php?query=" + info )
} 