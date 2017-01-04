//variables for further use
var up_var="0";
var ur_var="0";
var um_var="0";
var ul1_var="0";
var ul2_var="0";
var udr_var="0";
var ut_var="0";
var udep_var="0";
var uca_var="0";
var ubase_var="0";
var uorg_var="0";
var uph_var="0";
var uec_var="0";
var una_var="0";

function topo()  {
     perSlope=document.getElementById("per_slope").value;

var xmlhttp = new XMLHttpRequest() ;
    var url = "json/lc_groundnut/sys_lc_ground_topo.js" ;

    xmlhttp.onreadystatechange = function()  {
      console.log("onreadystatechange called");
        if(this.readyState == 4 && this.status == 200)  {
            var arr = JSON.parse(this.responseText) ;
            interPolateTOPO(arr) ;
        }
    };
    xmlhttp.open("GET", url,true) ;
    xmlhttp.send() ;

}
    function interPolateTOPO(arr)
    {
    var x = perSlope ;
   
      for(var i = 0; i < arr.length; i=i+2)  {
        var flag = 0; 
        var upper = arr[i].upper;
        var lower = arr[i].lower;

        if(x >= upper && x <= lower)  {
            flag = i ;
            break ;
        }
     }
 
    var upper = arr[flag].upper;
    var lower = arr[flag].lower;

    var val1 = arr[flag+1].value1 ;
    var val2 = arr[flag+1].value2 ;

     valInter =  ( (val1 - val2) / (upper - lower) ) * (x - upper) + val1 ;
     dispTopo(valInter) ;

    }

  function dispTopo(valInter) {
   if(valInter>=85  && valInter <= 100)
          suitable="S1";

        else if(valInter>=60 && valInter<85)
            suitable="S2";

        else if(this.valInter>=45 && valInter<60)
           suitable="S3";

        else if(valInter<45)
              suitable="N";    up_var = valInter;
    out="Interpolated Value : " + valInter +" " + "Suitability class by sys  Model: " + suitable;
    document.getElementById("land").innerHTML=out;
   }
  
function rain()  {
     rain1=document.getElementById("rainfall").value;
      var xmlhttp = new XMLHttpRequest() ;
      var url = "json/lc_groundnut/sys_lc_ground_rain.js" ;

    xmlhttp.onreadystatechange = function()  {
      console.log("onreadystatechange called");
        if(this.readyState == 4 && this.status == 200)  {
              
            var arr = JSON.parse(this.responseText) ;
            interPolateRAIN(arr) ;
        }
    };
    xmlhttp.open("GET", url,true) ;
    xmlhttp.send() ;

}
    function interPolateRAIN(arr)
    {
    var x = rain1 ;
   
      for(var i = 0; i < arr.length; i=i+2)  {
          var flag = 0; 
          var upper = arr[i].upper;
          var lower = arr[i].lower;

          if(x >= upper && x <= lower)  {
              flag = i ;
              break ;
          }
 }
 
    var upper = arr[flag].upper;
    var lower = arr[flag].lower;

    var val1 = arr[flag+1].value1 ;
    var val2 = arr[flag+1].value2 ;

     valInter =  ( (val1 - val2) / (upper - lower) ) * (x - upper) + val1 ;
     dispRAIN(valInter) ;
  }

function dispRAIN(valInter) {
   if(valInter>=85  && valInter <= 100)
          suitable="S1";

        else if(valInter>=60 && valInter<85)
            suitable="S2";

        else if(this.valInter>=45 && valInter<60)
           suitable="S3";

        else if(valInter<45)
              suitable="N";    ur_var = valInter;
    out1="Interpolated Value : " + valInter +" " + "Suitability class by sys  Model: " + suitable;
    //document.getElementById("mean").innerHTML=out;
   }

  
function temp()  {  
   temp1=document.getElementById("temp").value;
  var xmlhttp = new XMLHttpRequest() ;
    var url = "json/lc_groundnut/sys_lc_ground_temp.js" ;

    xmlhttp.onreadystatechange = function()  {
      console.log("onreadystatechange called");
        if(this.readyState == 4 && this.status == 200)  {
          
            var arr = JSON.parse(this.responseText) ;
            interPolateTEMP(arr) ;
        }
    };
    xmlhttp.open("GET", url,true) ;
    xmlhttp.send() ;
}
    function interPolateTEMP(arr)
    {
          var x = temp1 ;
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
     dispTEMP(valInter) ;
}


function dispTEMP(valInter) {
   if(valInter>=85  && valInter <= 100)
          suitable="S1";

        else if(valInter>=60 && valInter<85)
            suitable="S2";

        else if(this.valInter>=45 && valInter<60)
           suitable="S3";

        else if(valInter<45)
              suitable="N";    um_var = valInter;
    out="Interpolated Value : " + valInter +" " + "Suitability class by sys  Model: " + suitable;
    document.getElementById("mean").innerHTML=out1 + "<br>" +out;
   }


function lengthEarly()  {  
    

   length1=document.getElementById("length_growing_bunch").value;
    

  var xmlhttp = new XMLHttpRequest() ;
    var url = "json/lc_groundnut/sys_lc_ground_length1.js" ;
    
    xmlhttp.onreadystatechange = function()  {
      //console.log("onreadystatechange called");
        if(this.readyState == 4 && this.status == 200)  {
          
            var arr = JSON.parse(this.responseText) ;
            interPolateLength1(arr) ;
        }
    };
    xmlhttp.open("GET", url,true) ;
    xmlhttp.send() ;
}
    function interPolateLength1(arr)
    {
          var x = length1 ;
          for(var i = 0; i < arr.length; i=i+2)  {
              var flag = 0; 
              var upper = arr[i].upper;
              var lower = arr[i].lower;

              if( (x >= upper && x < lower) || (x <= upper && x > lower) )  {
                  flag = i ;
                  break ;
              }
     }
     
        var upper = arr[flag].upper;
        var lower = arr[flag].lower;

        var val1 = arr[flag+1].value1 ;
      var val2 = arr[flag+1].value2 ;

     valInter =  ( (val1 - val2) / (upper - lower) ) * (x - upper) + val1 ;
     dispLength1(valInter) ;
}

  function dispLength1(valInter) {
       if(valInter>=85  && valInter <= 100)
          suitable="S1";

        else if(valInter>=60 && valInter<85)
            suitable="S2";

        else if(this.valInter>=45 && valInter<60)
           suitable="S3";

        else if(valInter<45)
              suitable="N";;

        ul1_var = valInter;
        out1="Interpolated Value : " + valInter +" " +  "Suitability class by sys  Model: " + suitable;
        
     }
  
 function lengthMedium()  {  
   length2=document.getElementById("length_growing_spreading").value;
  var xmlhttp = new XMLHttpRequest() ;
    var url = "json/lc_groundnut/sys_lc_ground_length2.js" ;

    xmlhttp.onreadystatechange = function()  {
      //console.log("onreadystatechange called");
        if(this.readyState == 4 && this.status == 200)  {
          
            var arr = JSON.parse(this.responseText) ;
            interPolateLength2(arr) ;
        }
    };
    xmlhttp.open("GET", url,true) ;
    xmlhttp.send() ;
}
    function interPolateLength2(arr)
    {
          var x = length2 ;
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
     dispLength2(valInter) ;
}

 
  
  function dispLength2(valInter) {
   if(valInter>=85  && valInter <= 100)
          suitable="S1";

        else if(valInter>=60 && valInter<85)
            suitable="S2";

        else if(this.valInter>=45 && valInter<60)
           suitable="S3";

        else if(valInter<45)
              suitable="N";;

     ul2_var=valInter;
    out2="Interpolated Value : " + valInter + " " +  "Suitability class by sys  Model: " + suitable;
    document.getElementById("len").innerHTML=out1 +"<br>" + out2; 
    
   }
  

 

function sesameSysDrain(drainage)
  {
    this.drainage=drainage;
    sesameSysDrain.prototype.findDrain=function()
    {
        if(this.drainage=="Well Drained")
      {
       this.suitable="S1";
         this.valInter=100;
        }

        else if(this.drainage=="Moderately Well  Drained")
        {
          this.suitable="S1";
          this.valInter=95;
        }

        else if(this.drainage=="Imperfectly Drained")
        {
          this.suitable="S2";
          this.valInter=85;
        }
        else if(this.drainage=="Poorly Drained")
        {
          this.suitable="S3";
          this.valInter=60;
        }
        else if(this.drainage=="Excessively Poor Drained")
        {
          this.suitable="N"
          this.valInter=45;
        }
        udr_var=this.valInter;
        this.out="Value is: " + this.valInter + " " + "Suitability class by sys  Model: " + this.suitable;
    document.getElementById("drained").innerHTML=this.out;
     }
  }

    function sesameSysSoil(soilText)
   {
    this.soilText=soilText;
    var waterAvail=0;
    this.waterAvail=waterAvail;
    sesameSysSoil.prototype.findSoil=function()
     {
      this.soiling(this.soilText);
     } 
      sesameSysSoil.prototype.soiling=function()
     {
      
       if(this.soilText=="l"||this.soilText=="scl"||this.soilText=="sl")
           this.waterAvail=1;
       if(this.soilText=="sicl"||this.soilText=="sil"||this.soilText=="co"||this.soilText=="si"||this.soilText=="sc"
            ||this.soilText=="cl")
           this.waterAvail=2;
         if(this.soilText=="lfs"||this.soilText=="ls"||this.soilText=="sicl")
          this.waterAvail=3;
       if(this.soilText=="C>60"||this.soilText=="fs"||this.soilText=="s"||this.soilText=="lcs")
           this.waterAvail=4;
      if(this.soilText=="sicm"||this.soilText=="cm")
        this.waterAvail=5;

      if(this.waterAvail==1)
         {
          this.suitable="S1";
          this.valInter=100;
        }
      else if(this.waterAvail==2)
       {
        this.suitable="S2";
        this.valInter=95;
       }
       else if(this.waterAvail==3)
       {
        this.suitable="S3";
        this.valInter=85;
       }
       else if(this.waterAvail==4)
       {
        this.suitable="N";
        this.valInter=60;
       }
       else if(this.waterAvail==5)
       {
        this.suitable="N";
        this.valInter=45;
       }
       ut_var=this.valInter;
       out1="Value is: " + this.valInter +" " + "Suitability class by sys  Model: " + this.suitable;
         
   }  
 }

 function depth()  {  
   deep1=document.getElementById("depth").value;
  var xmlhttp = new XMLHttpRequest() ;
    var url = "json/lc_groundnut/sys_lc_ground_depth.js" ;

    xmlhttp.onreadystatechange = function()  {
     // console.log("onreadystatechange called");
        if(this.readyState == 4 && this.status == 200)  {
          
            var arr = JSON.parse(this.responseText) ;
            interPolateDEpth(arr) ;
        }
    };
    xmlhttp.open("GET", url,true) ;
    xmlhttp.send() ;
}
    function interPolateDEpth(arr)
    {
          var x = deep1 ;
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
     dispDepth(valInter) ;
}

 

  
  function dispDepth(valInter)  {
   if(valInter>=85  && valInter <= 100)
          suitable="S1";

        else if(valInter>=60 && valInter<85)
            suitable="S2";

        else if(this.valInter>=45 && valInter<60)
           suitable="S3";

        else if(valInter<45)
              suitable="N";;

     udep_var=valInter;
     out2="Interpolated Value : " + valInter + " "+ "Suitability class by sys  Model: " + suitable;
    
   
  }

 function caco3()  {  
   calcarbonate=document.getElementById("caco3").value;
  var xmlhttp = new XMLHttpRequest() ;
    var url = "json/lc_groundnut/sys_lc_ground_caco3.js" ;

    xmlhttp.onreadystatechange = function()  {
     // console.log("onreadystatechange called");
        if(this.readyState == 4 && this.status == 200)  {
          
            var arr = JSON.parse(this.responseText) ;
            interPolateCaco3(arr) ;
        }
    };
    xmlhttp.open("GET", url,true) ;
    xmlhttp.send() ;
}
    function interPolateCaco3(arr)
    {
          var x = calcarbonate ;
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
     dispCaco3(valInter) ;
}

 

  
  function dispCaco3(valInter)  {
   if(valInter>=85  && valInter <= 100)
          suitable="S1";

        else if(valInter>=60 && valInter<85)
            suitable="S2";

        else if(this.valInter>=45 && valInter<60)
           suitable="S3";

        else if(valInter<45)
              suitable="N";;

    uca_var=valInter;
    out3="Interpolated Value : " + valInter +" " + "Suitability class by sys  Model: " + suitable;
    
    document.getElementById("gyp").innerHTML=out1+ "<br>" + out2 +"<br>" +out3 ;
   }
  

function callCec()  {  
   cec=document.getElementById("cec").value;
  var xmlhttp = new XMLHttpRequest() ;
    var url = "json/lc_groundnut/sys_lc_ground_cec.js" ;

    xmlhttp.onreadystatechange = function()  {
     // console.log("onreadystatechange called");
        if(this.readyState == 4 && this.status == 200)  {
          
            var arr = JSON.parse(this.responseText) ;
            interPolateCec(arr) ;
        }
    };
    xmlhttp.open("GET", url,true) ;
    xmlhttp.send() ;
}
    function interPolateCec(arr)
    {
          var x = cec ;
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
     dispCec(valInter) ;
}

  function dispCec(valInter)  {
   if(valInter>=85  && valInter <= 100)
          suitable="S1";

        else if(valInter>=60 && valInter<85)
            suitable="S2";

        else if(this.valInter>=45 && valInter<60)
           suitable="S3";

        else if(valInter<45)
              suitable="N";;

    ucec_var=valInter;
    out1="Interpolated Value : " + valInter + " " + "Suitability class by Sys Model: " + suitable;
    
   }

function base()  {  
   baseSaturate=document.getElementById("base_saturation").value;
  var xmlhttp = new XMLHttpRequest() ;
    var url = "json/lc_groundnut/sys_lc_ground_base.js" ;

    xmlhttp.onreadystatechange = function()  {
     // console.log("onreadystatechange called");
        if(this.readyState == 4 && this.status == 200)  {
          
            var arr = JSON.parse(this.responseText) ;
            interPolateBase(arr) ;
        }
    };
    xmlhttp.open("GET", url,true) ;
    xmlhttp.send() ;
}
    function interPolateBase(arr)
    {
          var x = baseSaturate ;
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
     dispBase(valInter) ;
}
  
  function dispBase(valInter)  {
   if(valInter>=85  && valInter <= 100)
          suitable="S1";

        else if(valInter>=60 && valInter<85)
            suitable="S2";

        else if(this.valInter>=45 && valInter<60)
           suitable="S3";

        else if(valInter<45)
              suitable="N";;
    ubase_var=valInter;
    out2 = "Interpolated Value : " + valInter +" " + "Suitability class by sys  Model: " + suitable;
    
   }
  

function organic()  {  
   organicCarb=document.getElementById("organic_carbon").value;
  var xmlhttp = new XMLHttpRequest() ;
    var url = "json/lc_groundnut/sys_lc_ground_organic.js" ;

    xmlhttp.onreadystatechange = function()  {
     // console.log("onreadystatechange called");
        if(this.readyState == 4 && this.status == 200)  {
          
            var arr = JSON.parse(this.responseText) ;
            interPolateOrganic(arr) ;
        }
    };
    xmlhttp.open("GET", url,true) ;
    xmlhttp.send() ;
}
    function interPolateOrganic(arr)
    {
          var x = organicCarb ;
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
     dispOrganic(valInter) ;
}
 
  function dispOrganic(valInter)  {
   if(valInter>=85  && valInter <= 100)
          suitable="S1";

        else if(valInter>=60 && valInter<85)
            suitable="S2";

        else if(this.valInter>=45 && valInter<60)
           suitable="S3";

        else if(valInter<45)
              suitable="N";
    uorg_var=valInter;
    out3="Interpolated Value : " + valInter +  "Suitability class by sys  Model: " + suitable;  
  }


function pH()  {  
   ph=document.getElementById("ph").value;
  var xmlhttp = new XMLHttpRequest() ;
    var url = "json/lc_groundnut/sys_lc_ground_ph.js" ;

    xmlhttp.onreadystatechange = function()  {
     // console.log("onreadystatechange called");
        if(this.readyState == 4 && this.status == 200)  {
          
            var arr = JSON.parse(this.responseText) ;
            interPolatepH(arr) ;
        }
    };
    xmlhttp.open("GET", url,true) ;
    xmlhttp.send() ;
}
    function interPolatepH(arr)
    {
          var x = ph ;
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
     disppH(valInter) ;
}

 

  
  function disppH(valInter)  {
   if(valInter>=85  && valInter <= 100)
          suitable="S1";

        else if(valInter>=60 && valInter<85)
            suitable="S2";

        else if(this.valInter>=45 && valInter<60)
           suitable="S3";

        else if(valInter<45)
              suitable="N";;


     uph_var=valInter
    out4="Interpolated Value : " + valInter +" " + "Suitability class by sys  Model: " + suitable;
    
    document.getElementById("pH1").innerHTML=out1 + "<br>" + out2 + "<br>" + out3 + "<br>" +out4;
  
  }

function EC()  {  
   ec=document.getElementById("ec_dsm").value;
  var xmlhttp = new XMLHttpRequest() ;
    var url = "json/lc_groundnut/sys_lc_ground_EC.js" ;

    xmlhttp.onreadystatechange = function()  {
     // console.log("onreadystatechange called");
        if(this.readyState == 4 && this.status == 200)  {
          
            var arr = JSON.parse(this.responseText) ;
            interPolateEC(arr) ;
        }
    };
    xmlhttp.open("GET", url,true) ;
    xmlhttp.send() ;
}
    function interPolateEC(arr)
    {
          var x = ec ;
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
     dispEC(valInter) ;
}

 

  
  function dispEC(valInter)  {
   if(valInter>=85  && valInter <= 100)
          suitable="S1";

        else if(valInter>=60 && valInter<85)
            suitable="S2";

        else if(this.valInter>=45 && valInter<60)
           suitable="S3";

        else if(valInter<45)
              suitable="N";;


  uec_var=valInter;
    out1="Interpolated Value : " + valInter +" " + "Suitability class by sys  Model: " + suitable;
    
   }
  
function NA()  {  
   naConc=document.getElementById("na_conc").value;
  var xmlhttp = new XMLHttpRequest() ;
    var url = "json/lc_groundnut/sys_lc_ground_NA.js" ;

    xmlhttp.onreadystatechange = function()  {
     // console.log("onreadystatechange called");
        if(this.readyState == 4 && this.status == 200)  {
          
            var arr = JSON.parse(this.responseText) ;
            interPolateNA(arr) ;
        }
    };
    xmlhttp.open("GET", url,true) ;
    xmlhttp.send() ;
}
    function interPolateNA(arr)
    {
          var x = naConc ;
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
     dispNA(valInter) ;
}

 

  
  function dispNA(valInter)  {
   if(valInter>=85  && valInter <= 100)
          suitable="S1";

        else if(valInter>=60 && valInter<85)
            suitable="S2";

        else if(this.valInter>=45 && valInter<60)
           suitable="S3";

        else if(valInter<45)
              suitable="N";;

    una_var=valInter;
    out2="Interpolated Value : " + valInter +" " + "Suitability class by sys  Model: " + suitable;
    document.getElementById("na").innerHTML=out1 + "<br>"+out2;
   }
  


function calTopo()
{
  var perSlope=document.getElementById("per_slope").value;
    //alert("ds") ;
topo();
  //user=new sesameSysTopo(perSlope);
  //interPolateTOPO(arr);
}


function calrain1()
{
  var rain1=document.getElementById("rainfall").value;
    //alert("ds") ;
rain();
  //var rain1=document.getElementById("rainfall").value;

  //user2=new sesameSysrain1(rain1);
  //user2.i();
  //var rain = 
  //rain() ;
}
function calmean1()
{
  var temp1=document.getElementById("temp").value;
  temp() ;
  }


function callength1()
{
  var length1=document.getElementById("length_growing_bunch").value;
  lengthEarly() ;
  
}
function callength2()
{
  var length2=document.getElementById("length_growing_spreading").value;
  lengthMedium() ;
}

function callength3()
{
  var length3=document.getElementById("length_growing3").value;
  lengthLate();
}

function calcDrain()
   {
     var drainage=document.getElementById("drain").value; 
     wet=new sesameSysDrain(drainage);
     wet.findDrain();
    }

 function calcSoil()
  {
    var soilTexture=document.getElementById("texture").value;
     Soil1=new sesameSysSoil(soilTexture);
     Soil1.findSoil();
  }

function calcDepth()
{
  var deep1=document.getElementById("depth").value;
  depth() ;
}

function callcarbonate()
{
  var calCarbonate=document.getElementById("caco3").value;
  caco3() ;
}

/*function calcGyp()
   {
     var gypsum=document.getElementById("gypsum").value; 
     userGyp=new sesameSysGyp(gypsum);
     userGyp.interPolate();
    }
   */
function Cec()
   {
     var cec=document.getElementById("cec").value; 
     callCec() ;
     }

   function calBase()
{
  var baseSaturate=document.getElementById("base_saturation").value;
  base() ;
}

function calCarb()
{
  var organicCarb=document.getElementById("organic_carbon").value;
 organic() ;
}


function calpH1()
{
  var ph=document.getElementById("ph").value;
  pH();
}  

    function calcNA()
   {
     var naConc=document.getElementById("na_conc").value; 
     NA() ;
    } 
function calcec()
   {
     var ec=document.getElementById("ec_dsm").value; 
     EC();
  }

    function calLRI()
{
  //alert("here") ;
   lri=up_var * ( (ur_var)/100 ) * ( (um_var)/100 ) * ( (ul1_var)/100 ) * ( (ul2_var)/100 ) 
   *( ( udr_var)/100 ) * ( ( ut_var)/100 )* ( ( udep_var)/100 ) * ( ( uca_var)/100 ) 
   * ( (ucec_var)/100 ) * ( (ubase_var)/100 ) * ( (uorg_var)/100) 
   * ( (uph_var)/100 ) * ( (uec_var)/100 ) * ( (una_var)/100);
  
  lriRatingSys(lri);
}

function lriRatingSys()
{
  if(lri>=75)
  {
    intensity="Highly Suitable";
    Suitability="S1";
  }
  else if(lri>50 && lri<75)
  {
    intensity="Moderately Suitable";
    Suitability="S2";
  }

  else if(lri>25&& lri<50)
  {
    intensity="Marginally Suitable";
    Suitability="S3";
  }

  else if(lri<=25)
  {
    intensity="Conditionally Suitable";
    Suitability="N";
  }

   out= "LRI Value is: " + lri + " Suitability is : " + intensity + "<br>" + "  Rating by Sys Model is:" + Suitability;
   document.getElementById("result").innerHTML=out;
  
  
}