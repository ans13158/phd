var arr  ;
function jsonOpen(url,y,z)  {
    var xmlhttp = new XMLHttpRequest() ;
    alert("here") ;
    xmlhttp.onreadystatechange = function()  {
        if(this.readyState == 4 && this.status == 200)  {
        
        arr = JSON.parse(this.responseText) ;
        //return arr ;
        interpolate(arr,y,z) ;
        
        }
    };

     xmlhttp.open("GET", url, true ) ;
        xmlhttp.send() ;
}


function interpolate(arr, y,z)  {
    var x = y ;
   alert(x);
      for(var i = 0; i < arr.length; i=i+2)  {
        var flag = 0; 
        var upper = arr[i].upper;
        var lower = arr[i].lower;

              if( (x >= upper && x <= lower) || (x <= upper && x >= lower) )  {
       
            flag = i ;
            break ;
        }
     }
 
    var upper = arr[flag].upper;
    var lower = arr[flag].lower;

    var val1 = arr[flag+1].value1 ;
    var val2 = arr[flag+1].value2 ;

     valInter =  ( (val1 - val2) / (upper - lower) ) * (x - upper) + val1 ;
     dispTopo(valInter,z) ;

    

}

function dispTopo(valInter,divId)  {
    //alert("disp") ;
    divId.innerHTML = valInter ;
}


function topo() {
   // alert("topo") ;
    perSlope = document.getElementById("perSlope").value ;
    divId = document.getElementById("disp") ;
    url = "sys_lc_gram_topo.js" ;
    jsonOpen(url, perSlope,divId) ;

}


function rain()  {
    rain1 = document.getElementById("rain1").value ;
    divId = document.getElementById("rainDisp") ;

    url = "sys_lc_gram_rain.js" ;
    jsonOpen(url,rain1,divId) ;
    
}
