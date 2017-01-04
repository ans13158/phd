// *** Main function *** //
var data = []
function findClass()
{
var surtex   = document.getElementById('lcc_sur_tex');
data[0] = surtex.value
var soild    = document.getElementById('lcc_soil_depth');
data[1] = soild.value
var drain    = document.getElementById('lcc_drainage');
data[2] = drain.value

var slpcls   = document.getElementById('lcc_slope_class');
data[3] = slpcls.value
var erscls   = document.getElementById('lcc_Erosion_class');
data[4] = erscls.value
var salinity = document.getElementById('lcc_salinity');
data[5] = salinity.value
var rain     = document.getElementById('lcc_rainfall');
data[6] = rain.value
var clsrslt  = document.getElementById('classResult');

var depthType    = ["Very Deep","Deep","Moderately Deep","Shallow","Very Shallow","Rocky Surface","Nil","Nil"];
var drainageType = ["Well Drained","Moderately Drained","Imperfectly Drained","Poorly Drained","Very Poorly Drained","Nil","Excessive","Nil"];
var erosionType  = ["Slight","Nil","Moderate","Severe","Nil","Very Severe","Nil","Very Very Severe"];
var salinityType = ["Slight","Moderate","Strong","Very Strong","Severe","Nil","Nil","Nil"];

var romanClass =["I","II","III","IV","V","VI","VII","VIII"];

var maxClassNo=8;

clsrslt.value = "No Class";

for (i = maxClassNo; i > 0; i--) 
{
  if (compareDepth(soild.value, i)       ||
      compareNormal(drain.value, drainageType[i-1])    ||
      compareTexture(surtex.value, i)                  ||
      compareSlope(slpcls.value, i)                    ||
      compareNormal(erscls.value, erosionType[i-1])    ||
      compareNormal(salinity.value, salinityType[i-1]) ||
      compareRainfall(rain.value, i))
  {
    clsrslt.value = "Class "+romanClass[i-1];
    data[7] = clsrslt.value
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
    case 1: if (t == 'sicl' || t == 'cl' || t == 'l' || t == 'sl' || t == 'sil' || t == 'scl' || t == 'fsl') return true; break;
    case 2: break;
    case 3: if (t == 'sc' || t == 'sic' || t == 'c' || t == 'ls' || t == 'hc') return true; break;
    case 4: if (t == 'cs') return true; break;
    case 5: break;
    case 6: break;
    case 7: if (t == 'g' || t == 'gt') return true; break;
    case 8: if (t == 'st' || t == 'ch') return true; break;
  }
  return false;
}


function compareSlope(s, classNo)
{
  switch(classNo)
  {
    case 1: if (s >= 0 && s < 1) return true; break;
    case 2: if (s >= 1 && s < 5 ) return true; break;
    case 3: if (s >= 5 && s < 10) return true; break;
    case 4: if (s >= 10 && s < 15) return true; break;
    case 5: if (s >= 15 && s < 25) return true; break;
    case 6: if (s >= 25 && s < 35) return true; break;
    case 7: if (s >= 35 && s < 50) return true; break;
    case 8: if (s >=50) return true; break;
  }
  return false;
}

function compareRainfall(r, classNo)
{
  switch(classNo)
  {
    case 1: if (r >= 100 && r <= 200) return true; break;
    case 2: break;
    case 3: if (r >= 50 && r < 100) return true; break;
    case 4: if (r >= 25 && r < 50) return true; break;
    case 5: if (r >   0 && r < 25) return true; break;
    case 6: break;
    case 7: break;
    case 8: break;
  }
  return false;  

}


function compareDepth(d, classNo)
{
  switch(classNo)
  {
    case 1: if (d >= 90 ) return true; break;
    case 2: if (d >= 45 && d < 90) return true; break;
    case 3: if (d >= 22.5 && d < 45) return true; break;
    case 4: if (d >= 7.7 && d < 22.5) return true; break;
    case 5: if (d <= 7.5) return true; break;
    case 6: break;
    case 7: break;
    case 8: break;
  }
  return false;  

}

function printData(shed,subshed)  {
  data[8] = shed
  data[9] = subshed
  var info = JSON.stringify(data)
  window.location.assign("printLcc.php?query=" + info )
} 