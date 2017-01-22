 // *** Main function *** //
var data= []
function findClassWilcox()
{
var conductivity = document.getElementById('conductivity');
data[0] = conductivity.value
var sodium = document.getElementById('sodium');
data[1] = sodium.value
var clsrslt = document.getElementById('classResult');


var engClass =["Excellent","Good","Permissible","Doubtful", "Unsuitable"];

var maxClassNo=5;

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
    case 1: if ( t <250) return true; break;
    case 2: if (t >= 250 && t< 750) return true; break;
    case 3: if (t >= 750 && t< 2000) return true; break;
    case 4: if (t >= 2000 && t<3000) return true; break;
    case 5: if (t >= 3000) return true; break;
    
  }
  return false;
}

function compareSodium(t, classNo)
{
  switch(classNo)
  {
    case 1: if (t<20) return true; break;
    case 2: if (t >= 20 && t< 40) return true; break;
    case 3: if (t >= 40 && t< 60) return true; break;
    case 4: if (t >= 60 && t < 80) return true; break;
    case 5: if (t >= 80) return true; break;
    
  }
  return false;
}


function printData(model, shed,subshed)  {
  data[3] = model
  data[4] = shed
  data[5] = subshed
  var info = JSON.stringify(data)
  window.location.assign("printWilcox.php?query=" + info )
} 