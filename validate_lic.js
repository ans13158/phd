// *** Main function *** //
var data = []
function findClass()
{
var irrcls = document.getElementById('lic_irr_class');
data[0] = irrcls.value

var slpcls = document.getElementById('lic_slpcls');
data[1] = slpcls.value

var grndcls = document.getElementById('lic_grndwtr_class');
data[2] = grndcls.value

var drain = document.getElementById('lic_drain');
data[3] = drain.value

var clsrslt = document.getElementById('classResult');

var soilType = ["A","B","C","D","N"];
var groundType = ["Moderately Deep","Moderately Shallow","Shallow","Very Shallow","Nil"];
var drainType = ["Well Drained","Moderately Draine","Imperfectly Drained","Poorly Drained","Excessive Very Poor"];


var romanClass =["I","II","III","IV","V"];

var maxClassNo=5;

clsrslt.value = "No Class Found";

for (i = maxClassNo; i > 0; i--) 
{
  if (compareNormal(irrcls.value, soilType[i-1])             ||
      compareSlope(slpcls.value, i)                     	 ||
      compareNormal(grndcls.value, groundType[i-1])          ||
      compareNormal(drain.value, drainType[i-1]))
  {
    clsrslt.value = "Class "+romanClass[i-1];
    data[4] = clsrslt.value
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


function compareSlope(s, classNo)
{
  switch(classNo)
  {
    case 1: if (s>=0 && s < 1) return true; break;
    case 2: if (s >= 1 && s < 5) return true; break;
    case 3: if (s >= 5 && s < 10) return true; break;
    case 4: if (s >= 10 && s <15) return true; break;
    case 5: if (s >= 15 && s <30) return true; break;;
  }
  return false;
}

function printData(shed,subshed)  {
  data[5] = shed
  data[6] = subshed
  var info = JSON.stringify(data)
  window.location.assign("printLic.php?query=" + info )
} 