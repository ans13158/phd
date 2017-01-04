// *** Main function *** //
 var data = []
function findClass()
{
var surtex = document.getElementById('sic_sur_tex');
data[0] = surtex.value

var soild = document.getElementById('sic_soild');
data[1] = soild.value

var soilpcls = document.getElementById('sic_soil_p_class');
data[2] = soilpcls.value

var avail_warer_hold = document.getElementById('sic_avail_water_hold');
data[3] = avail_warer_hold.value

var stoncls = document.getElementById('sic_ston_class');
data[4] = stoncls.value

var grvlcls = document.getElementById('sic_gravel_class');
data[5] = grvlcls.value

var salinity = document.getElementById('sic_salinity_class');
data[6] = salinity.value

var extent_saline = document.getElementById('sic_extent_saline');
data[7] = extent_saline.value

var sodicity = document.getElementById('sic_sodicity_class');
data[8] = sodicity.value

var clsrslt = document.getElementById('classResult');

var stonType = ["None","Slight","Moderate","Strong","Nil"];
var gravelType = ["None","Slight","Moderate","High","Very High"];
var salinityType = ["Slight","Moderate","Strong","Very Strong","Severe"];
var extentType = ["None","Limited","Moderately Extensive","Extensive","Nil"];
var sodicityType = ["Slight","Moderate","Strong","Severe","Nil"]; 

var engClass =["A","B","C","D","E"];

var maxClassNo=5;

clsrslt.value = "No Class Found";

for (i = maxClassNo; i > 0; i--) 
{
  if (compareTexture(surtex.value, i)                  		 ||
      compareDepth(soild.value, i)                     		 ||
      comparePermeability(soilpcls.value, i)           		 ||
      compareWaterh(avail_warer_hold.value, i)         		 ||
      compareNormal(stoncls.value, stonType[i-1])      		 ||
      compareNormal(grvlcls.value, gravelType[i-1])    		 ||
	  compareNormal(salinity.value, salinityType[i-1]) 		 ||
	  compareNormal(extent_saline.value, extentType[i-1])    ||
      compareNormal(sodicity.value, sodicityType[i-1]))
  {
    clsrslt.value = "Class "+engClass[i-1];
    data[9] = clsrslt.value
    break;
  }
}

 return false;  // to prevent page from refreshing
}



// *** Helper functions *** //


function compareNormal(a,b)
{
  aUp= a.toUpperCase();
  bUp= b.toUpperCase();
  if ( aUp != 'NIL' && aUp == bUp) return true;
   else return false;
}


function compareTexture(t, classNo)
{
  switch(classNo)
  {
    case 1: if (t == 'csl' || t == 'sl' || t == 'fsl' || t == 'vfsl' || t == 'l' || t == 'si' || t == 'sil' || t== 'scl' || t== 'cl' || t== 'sicl') return true; break;
    case 2: if (t == 'ls' || t == 'les' || t == 'lfs' || t== 'sic') return true; break;
    case 3: if (t == 'c' || t == 'fs' || t == 'vfs') return true; break;
    case 4: if (t == 's') return true; break;
    case 5: if (t == 'cs');
  }
  return false;
}

function compareDepth(d, classNo)
{
  switch(classNo)
  {
    case 1: if (d > 90) return true; break;
    case 2: if (d >= 45 && d< 90) return true; break;
    case 3: if (d >= 22.5 && d< 45) return true; break;
    case 4: if (d >= 7.5 && d<22.5) return true; break;
    case 5: if (d < 7.5);
  }
  return false;
}

function comparePermeability(p, classNo)
{
  switch(classNo)
  {
    case 1: if (p == 'Moderately Slow' || p =='Moderate') return true; break;
    case 2: if (p == 'Moderately Rapid Slow') return true; break;
    case 3: if (p == 'Very Slow' || p == 'Rapid') return true; break;
    case 4: if (p == 'Very Rapid') return true; break;
    case 5: break;
  }
  return false;
}

function compareWaterh(w, classNo)
{
  switch(classNo)
  {
    case 1: if (w > 12) return true; break;
    case 2: if (w >= 9 && w < 12) return true; break;
    case 3: if (w >= 6 && w <9) return true; break;
    case 4: if (w >= 2 && w <6) return true; break;
    case 5: if (w < 2) return true; break;
  }
  return false;
}

function printData(shed,subshed)  {
  data[10] = shed
  data[11] = subshed
  var info = JSON.stringify(data)
  window.location.assign("printSic.php?query=" + info )
} 