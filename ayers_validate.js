// *** Main function *** //

function findClass()
{
var conductivity = document.getElementById('conductivity');
var sodium = document.getElementById('sodium');

var clsrslt = document.getElementById('classResult');


var engClass =["Excellent","Good","Permissible","Doubtful", "Unsuitable"];

var maxClassNo=5;

clsrslt.value = "No Class Found";

for (i = maxClassNo; i > 0; i--) 
{
  if (compareConductivity(conductivity.value, i)||compareSodium(sodium.value, i))
      {
    clsrslt.value = engClass[i-1];
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
