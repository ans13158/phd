// *** Main function *** //
var data = []

function findClass()
{
var conductivity = document.getElementById('conductivity');

//data[0] = "Electrical Conductivity (Salinity) (μS/cm)"
data[0] = conductivity.value

var dissolvedSolid = document.getElementById('dissolvedSolid');
//data[2] = "Total Dissolved Solids (Salinity) (mg/l)"
data[1] = dissolvedSolid.value 

var sodium = document.getElementById('sodium');
//data[4] = "Sodium Absorption Ratio (Specific ion toxicity) (%)"
data[2] = sodium.value

var chloride = document.getElementById('chloride');
//data[6] = "Chloride (Specific ion toxicity) (me/l)"
data[3] = chloride.value

var boron = document.getElementById('boron');
//data[8] = "Boron(Specific ion toxicity) (mg/l)"
data[4] = boron.value

var clsrslt = document.getElementById('classResult');
//data[10] = "Suitability Class"

var engClass =["Excellent","Slight to Moderate","Unsuitable"]
var maxClassNo=3;

clsrslt.value = "No Class Found";

for (i = maxClassNo; i > 0; i--) 
{
  if (compareConductivity(conductivity.value, i)||compareSodium(sodium.value, i)
    ||comparedissolvedSolid(dissolvedSolid.value,i) || 
    compareChloride(chloride.value, i) || compareBoron(boron.value,i))
      {
    clsrslt.value = engClass[i-1];
    data[5] = clsrslt.value

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
    case 1: if ( t <0.7) return true; break;
    case 2: if (t >= 0.7 && t< 3.0) return true; break;
    case 3: if (t >= 3) return true; break;
    
    
  }
  return false;
}

function compareSodium(t, classNo)
{
  switch(classNo)
  {
    case 1: if (t<450) return true; break;
    case 2: if (t >= 450 && t< 2000) return true; break;
    case 3: if (t >= 2000 ) return true; break;
    
    
  }
  return false;
}

function comparedissolvedSolid(t, classNo)
{
  switch(classNo)
  {
    case 1: if (t<3) return true; break;
    case 2: if (t >= 3 && t< 9) return true; break;
    case 3: if (t >= 9 ) return true; break;
    
  }
  return false;
}

function compareChloride(t, classNo)
{
  switch(classNo)
  {
    case 1: if (t<4) return true; break;
    case 2: if (t >= 4 && t< 10) return true; break;
    case 3: if (t >= 10 ) return true; break;
    
  }
  return false;
}

function compareBoron(t, classNo)
{
  switch(classNo)
  {
    case 1: if (t<0.7) return true; break;
    case 2: if (t >= 0.7 && t< 3) return true; break;
    case 3: if (t >= 3) return true; break;
    
  }
  return false;
}


function printData( shed,subshed)  {
  
  data[6] = shed
  data[7] = subshed
  var info = JSON.stringify(data)
  window.location.assign("printayers.php?query=" + info )
}