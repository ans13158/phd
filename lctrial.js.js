
function topo()  {
     perSlope=document.getElementById("perSlope").value;
  //perSlope = 2 ;
  var url = "json/sys_sesame/sys_sesame_topo.js" ;
  var x = openJson(url) ;

    up_var = interPolateTOPO(perSlope) ;
    suitable = dispTopo(valInter) ;

    }

  
    out="Interpolated Value : " + valInter +" " + "Suitability class by sys  Model: " + suitable;
    document.getElementById("land").innerHTML=out + " " + x;
   }