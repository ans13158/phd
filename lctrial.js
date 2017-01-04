var up_var = "0"
var up_suitable = "0"
var ur_var = "0" 
var ur_suitable = "0"
var valInter
var suitable

function topo()  {
     perSlope=document.getElementById("perSlope").value;
  //perSlope = 2 ;
  var x = perSlope ;
  var url = "json/sys_sesame/sys_sesame_topo.js" ;
  openJson(url) ;

    up_var = valInter ;
    up_suitable = suitable ;
  
    out="Interpolated Value : " + valInter +" " + "Suitability class by sys  Model: " + suitable;
    document.getElementById("land").innerHTML=out + " " + x ;
   }


function rain1()  {
     rain=document.getElementById("rain").value;
  //perSlope = 2 ;
  var x = rain ;
  var url = "json/sys_sesame/sys_sesame_rain.js" ;
   openJson( url) ;

     ur_var = valInter ;
    ur_suitable = suitable ;
  
    out="Interpolated Value : " + valInter +" " + "Suitability class by sys  Model: " + suitable;
    document.getElementById("rain").innerHTML=out + " " + x ;
   }

   