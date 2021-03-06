//variables for further use
var up_var="0";
var ur_var="0";
var um_var="0";
var ul1_var="0";
var uw_var = "0" ;
var ul2_var="0";
var ul3_var="0";
var udr_var="0";
var ut_var="0";
var udep_var="0";
var uca_var="0";
var ugy_var="0";
var ucec_var="0";
var ubase_var="0";
var uorg_var="0";
var uph_var="0";
var uec_var="0";
var una_var="0";

var data=[] ;


 //function for reducing Interpolated values to 2 digits after decimal without rounding off
 
 function floorFigure(figure, decimals){
    if (!decimals) decimals = 4;
    var d = Math.pow(10,decimals);
    return (parseInt(figure*d)/d).toFixed(decimals);
};


function topo()  {
     perSlope=document.getElementById("per_slope").value;

var xmlhttp = new XMLHttpRequest() ;
    var url = "json/sys_sesame/sys_sesame_topo.js" ;

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

     if(valInter < 45)  {
      valInter = 44.99
     }

     dispTopo(valInter) ;

    }

  function dispTopo(valInter) {
    if(valInter>95 && valInter<=100)
      suitable="S1";

    else if(valInter>85 && valInter<=95)
       suitable="S1";

    else if(valInter<=85 && valInter>60)
       suitable="S2";
 
 else if(valInter<=60 && valInter>45)
       suitable="S3";

    else if(this.valInter<=45)
        suitable="N";

    up_var = valInter.toFixed(2);
    data[0] = up_var;
    data[1] = suitable ;
    out="Interpolated Value : " + valInter.toFixed(2) +" " + "Suitability class by sys  Model: " + suitable;
    document.getElementById("land").innerHTML=out;
    document.getElementById("ps_data").innerHTML=this.valInter.toFixed(2);
    document.getElementById("ps_suit").innerHTML=this.suitable;

   }
  
function rain()  {
     rain1=document.getElementById("rainfall").value;
      var xmlhttp = new XMLHttpRequest() ;
      var url = "json/sys_sesame/sys_sesame_rain.js" ;

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

          if(x <= upper && x >= lower)  {
              flag = i ;
              break ;
          }
 }
 
    var upper = arr[flag].upper;
    var lower = arr[flag].lower;
 


    var val1 = arr[flag+1].value1 ;
    var val2 = arr[flag+1].value2 ;

     valInter =  ( (val1 - val2) / (upper - lower) ) * (x - upper) + val1 ;
     
     if(valInter < 45)  {
      valInter = 44.99
     }

     dispRAIN(valInter) ;
  }


function dispRAIN(valInter) {
   if(valInter>95 && valInter<=100)
      suitable="S1";

    else if(valInter>85 && valInter<=95)
       suitable="S1";

    else if(valInter<=85 && valInter>60)
       suitable="S2";
 
 else if(valInter<=60 && valInter>45)
       suitable="S3";

    else if(this.valInter<=45)
        suitable="N";

    ur_var = valInter.toFixed(2);
    data[2] = ur_var;
    data[3] = suitable ;

    out1="Interpolated Value : " + valInter.toFixed(2) +" " + "Suitability class by sys  Model: " + suitable;
     document.getElementById("rf_data").innerHTML=this.valInter.toFixed(2);
    document.getElementById("rf_suit").innerHTML=this.suitable;

    //document.getElementById("mean").innerHTML=out;
   }

  
function temp()  {  
   temp1=document.getElementById("temp").value;
  var xmlhttp = new XMLHttpRequest() ;
    var url = "json/sys_sesame/sys_sesame_temp.js" ;

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
    
     if(valInter < 45)  {
      valInter = 44.99
     }


     dispTEMP(valInter) ;
}


function dispTEMP(valInter) {
    if(valInter>95 && valInter<=100)
      suitable="S1";

    else if(valInter>85 && valInter<=95)
       suitable="S1";

    else if(valInter<=85 && valInter>60)
       suitable="S2";
 
 else if(valInter<=60 && valInter>45)
       suitable="S3";

    else if(this.valInter<=45)
        suitable="N";

    um_var = valInter.toFixed(2);
    data[4] = um_var;
    data[5] = suitable ;

    out2="Interpolated Value : " + valInter.toFixed(2) +" " + "Suitability class by sys  Model: " + suitable;
    document.getElementById("mt_data").innerHTML=this.valInter.toFixed(2);
    document.getElementById("mt_suit").innerHTML=this.suitable;

   }


function lengthEarly()  {  
    

   length1=document.getElementById("length_growing_early").value;
    

  var xmlhttp = new XMLHttpRequest() ;
    var url = "json/sys_sesame/sys_sesame_length1.js" ;
    
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

              if( (x <= upper && x > lower) )  {
                  flag = i ;
                  break ;
              }
     }
     
        var upper = arr[flag].upper;
        var lower = arr[flag].lower;

        var val1 = arr[flag+1].value1 ;
      var val2 = arr[flag+1].value2 ;

     valInter =  ( (val1 - val2) / (upper - lower) ) * (x - upper) + val1 ;
    
     if(valInter < 45)  {
      valInter = 44.99
     }


     dispLength1(valInter) ;
}

  function dispLength1(valInter) {
      if(valInter>95 && valInter<=100)
      suitable="S1";

    else if(valInter>85 && valInter<=95)
       suitable="S1";

    else if(valInter<=85 && valInter>60)
       suitable="S2";
 
 else if(valInter<=60 && valInter>45)
       suitable="S3";

    else if(this.valInter<=45)
        suitable="N";
        
        ul1_var = valInter.toFixed(2);
        data[6] = ul1_var;
        data[7] = suitable ;
        out="Interpolated Value : " + valInter.toFixed(2) +" " +  "Suitability class by sys  Model: " + suitable;
    document.getElementById("mean").innerHTML=out1 + "<br>" +out2 + "<br>"+ out;

        document.getElementById("l1_data").innerHTML=this.valInter.toFixed(2);
    document.getElementById("l1_suit").innerHTML=this.suitable;

     }

function wheatLimitWater(water)
  {
    this.water=water;
   
    wheatLimitWater.prototype.interPolate=function()
    {
      
      if(this.water>75 && this.water < 100)
      {
        this.valInter= 80+ 0.2* this.water;
        this.disp(this.valInter);
      }

      else if(this.water<=75 && this.water>=50)
      {
        this.valInter= 65 +  0.4*(this.water);
        this.disp(this.valInter);
      }

        else if(this.water<50&& this.water>=30)
      {
        this.valInter=22.5 + 1.25*(this.water);
        this.disp(this.valInter);
      }
      else if(this.water>=15 && this.water<30)
      {
        this.valInter=30 + 1*(this.water);
        this.disp(this.valInter);
      }
       else if(this.water<15 && this.water>= 0)
      {
        this.valInter= 44.99  ;
        this.disp(this.valInter);
      }
      
      
     uw_var = this.valInter.toFixed(2);
     data[8] = uw_var ;
 }
      wheatLimitWater.prototype.disp=function()
  {
    if(this.valInter<=100 && this.valInter > 95)
          this.suitable="S1";
    
    if(this.valInter<=95 && this.valInter > 85)
          this.suitable="S1";
        
    else if(this.valInter<=85 && this.valInter>60)
       this.suitable="S2";

    else if(this.valInter<=60 && this.valInter>45)
       this.suitable="S3";

    else if(this.valInter<= 45)
          this.suitable="N";

        data[9] = this.suitable ;
    this.out="Interpolated Value : " + this.valInter.toFixed(2) + " " + "Suitability class by Sys Model: " + this.suitable;
    document.getElementById("water").innerHTML=this.out;
    document.getElementById("w1_data").innerHTML=this.valInter.toFixed(2);
    document.getElementById("w1_suit").innerHTML=this.suitable;

     }
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

        else if(this.drainage=="Moderately Well Drained")
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
        else if(this.drainage=="Excessively Poorly Drained")
        {
          this.suitable="N"
          this.valInter=44.99;
        }
        udr_var=this.valInter.toFixed(2);
        data[10] = udr_var;
    data[11] = suitable ;

        this.out="Value is: " + this.valInter.toFixed(2) + " " + "Suitability class by sys  Model: " + this.suitable;
    document.getElementById("drained").innerHTML=this.out;
    document.getElementById("dr_data").innerHTML=this.valInter.toFixed(2);
    document.getElementById("dr_suit").innerHTML=this.suitable;

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
      
       if(this.soilText=="l"||this.soilText=="scl"||this.soilText=="sl"||this.soilText=="sicl"||this.soilText=="cl")
           this.waterAvail=1;
       if(this.soilText=="sics"||this.soilText=="sil"||this.soilText=="sc")
           this.waterAvail=2;
         if(this.soilText=="cs"||this.soilText=="co"||this.soilText=="ls")
          this.waterAvail=3;
       if(this.soilText=="C>60"||this.soilText=="s")
           this.waterAvail=4;
      if(this.soilText=="sicm"||this.soilText=="cm"||this.soilt=="cs")
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
        this.valInter=44.99;
       }
       ut_var=this.valInter.toFixed(2);
       data[12] = ut_var;
    data[13] = suitable ;

       out1="Value is: " + this.valInter.toFixed(2) +" " + "Suitability class by sys  Model: " + this.suitable;
       document.getElementById("tex_data").innerHTML=this.valInter.toFixed(2);
    document.getElementById("tex_suit").innerHTML=this.suitable;

         
   }  
 }

 function depth()  {  
   deep1=document.getElementById("depth").value;
  var xmlhttp = new XMLHttpRequest() ;
    var url = "json/sys_sesame/sys_sesame_depth.js" ;

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

              if( (x <= upper && x >= lower) )  {
                  flag = i ;
                  break ;
              }
     }
     
        var upper = arr[flag].upper;
        var lower = arr[flag].lower;

        var val1 = arr[flag+1].value1 ;
      var val2 = arr[flag+1].value2 ;

     valInter =  ( (val1 - val2) / (upper - lower) ) * (x - upper) + val1 ;
     
     if(valInter < 45)  {
      valInter = 44.99
     }


     dispDepth(valInter) ;
}


 

  
  function dispDepth(valInter)  {
   if(valInter>95 && valInter<=100)
      suitable="S1";

    else if(valInter>85 && valInter<=95)
       suitable="S1";

    else if(valInter<=85 && valInter>60)
       suitable="S2";
 
 else if(valInter<=60 && valInter>45)
       suitable="S3";

    else if(this.valInter<=45)
        suitable="N";
     udep_var=valInter.toFixed(2);
     data[14] = udep_var ;
     data[15] = suitable ;
     out2="Interpolated Value : " + valInter.toFixed(2) + " "+ "Suitability class by sys  Model: " + suitable;
    document.getElementById("dep_data").innerHTML=this.valInter.toFixed(2);
    document.getElementById("dep_suit").innerHTML=this.suitable;

   
  }

 function caco3()  {  
   calcarbonate=document.getElementById("caco3").value;
  var xmlhttp = new XMLHttpRequest() ;
    var url = "json/sys_sesame/sys_sesame_caco3.js" ;

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
    
     if(valInter < 45)  {
      valInter = 44.99
     }


     dispCaco3(valInter) ;
}

 

  
  function dispCaco3(valInter)  {
   if(valInter>95 && valInter<=100)
      suitable="S1";

    else if(valInter>85 && valInter<=95)
       suitable="S1";

    else if(valInter<=85 && valInter>60)
       suitable="S2";
 
 else if(valInter<=60 && valInter>45)
       suitable="S3";

    else if(this.valInter<=45)
        suitable="N";

    uca_var=valInter.toFixed(2);
    data[16] = uca_var ;
    data[17] = suitable ;
    out3="Interpolated Value : " + valInter.toFixed(2) +" " + "Suitability class by sys  Model: " + suitable;
    
    document.getElementById("gyp").innerHTML=out1+ "<br>" + out2 +"<br>" +out3 ;
    document.getElementById("caco3_data").innerHTML=this.valInter.toFixed(2);
    document.getElementById("caco3_suit").innerHTML=this.suitable;

   }
  

function callCec()  {  
   cec=document.getElementById("cec").value;
  var xmlhttp = new XMLHttpRequest() ;
    var url = "json/sys_sesame/sys_sesame_cec.js" ;

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
     
     if(valInter < 45)  {
      valInter = 44.99
     }


     dispCec(valInter) ;
}

  function dispCec(valInter)  {
    if(valInter>95 && valInter<=100)
      suitable="S1";

    else if(valInter>85 && valInter<=95)
       suitable="S1";

    else if(valInter<=85 && valInter>60)
       suitable="S2";
 
 else if(valInter<=60 && valInter>45)
       suitable="S3";

    else if(this.valInter<=45)
        suitable="N";

    ucec_var=valInter.toFixed(2);
    data[18] = ucec_var ;
    data[19] = suitable ;
    out1="Interpolated Value : " + valInter.toFixed(2) + " " + "Suitability class by Sys Model: " + suitable;
    document.getElementById("cec_data").innerHTML=this.valInter.toFixed(2);
    document.getElementById("cec_suit").innerHTML=this.suitable;

    
   }

function base()  {  
   baseSaturate=document.getElementById("base_saturation").value;
  var xmlhttp = new XMLHttpRequest() ;
    var url = "json/sys_sesame/sys_sesame_base.js" ;

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
              if(  (x <= upper && x >= lower) )  {
                  flag = i ;
                  break ;
              }
     }
     
        var upper = arr[flag].upper;
        var lower = arr[flag].lower;

        var val1 = arr[flag+1].value1 ;
      var val2 = arr[flag+1].value2 ;

     valInter =  ( (val1 - val2) / (upper - lower) ) * (x - upper) + val1 ;
     
     if(valInter < 45)  {
      valInter = 44.99
     }


     dispBase(valInter) ;
}
  
  function dispBase(valInter)  {
    if(valInter>95 && valInter<=100)
      suitable="S1";

    else if(valInter>85 && valInter<=95)
       suitable="S1";

    else if(valInter<=85 && valInter>60)
       suitable="S2";
 
 else if(valInter<=60 && valInter>45)
       suitable="S3";

    else if(this.valInter<=45)
        suitable="N";

    ubase_var=valInter.toFixed(2);
    data[20] = ubase_var ;
    data[21] = suitable ;
    out2="Interpolated Value : " + valInter.toFixed(2) +" " + "Suitability class by sys  Model: " + suitable;
    document.getElementById("base_data").innerHTML=this.valInter.toFixed(2);
    document.getElementById("base_suit").innerHTML=this.suitable;

   }
  

function organic()  {  
   organicCarb=document.getElementById("organic_carbon").value;
  var xmlhttp = new XMLHttpRequest() ;
    var url = "json/sys_sesame/sys_sesame_organic.js" ;

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
              if(  (x <= upper && x >= lower) )  {
                  flag = i ;
                  break ;
              }
     }
     
        var upper = arr[flag].upper;
        var lower = arr[flag].lower;

        var val1 = arr[flag+1].value1 ;
      var val2 = arr[flag+1].value2 ;

     valInter =  ( (val1 - val2) / (upper - lower) ) * (x - upper) + val1 ;
    
     if(valInter < 45)  {
      valInter = 44.99
     }


     dispOrganic(valInter) ;
}
 
  function dispOrganic(valInter)  {
    if(valInter>95 && valInter<=100)
      suitable="S1";

    else if(valInter>85 && valInter<=95)
       suitable="S1";

    else if(valInter<=85 && valInter>60)
       suitable="S2";
 
 else if(valInter<=60 && valInter>45)
       suitable="S3";

    else if(this.valInter<=45)
        suitable="N";

    uorg_var=valInter.toFixed(2);
    data[22] = uorg_var;
    data[23] = suitable ;
    out3="Interpolated Value : " + valInter.toFixed(2) +  "Suitability class by sys  Model: " + suitable;  
    document.getElementById("org_data").innerHTML=this.valInter.toFixed(2);
    document.getElementById("org_suit").innerHTML=this.suitable;

  }


function pH()  {  
   ph=document.getElementById("ph").value;
  var xmlhttp = new XMLHttpRequest() ;
    var url = "json/sys_sesame/sys_sesame_ph.js" ;

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
         
     if(valInter < 45)  {
      valInter = 44.99
     }


     disppH(valInter) ;
}

 

  
  function disppH(valInter)  {
    if(valInter>95 && valInter<=100)
      suitable="S1";

    else if(valInter>85 && valInter<=95)
       suitable="S1";

    else if(valInter<=85 && valInter>60)
       suitable="S2";
 
 else if(valInter<=60 && valInter>45)
       suitable="S3";

    else if(this.valInter<=45)
        suitable="N";


     uph_var=valInter.toFixed(2) ;
     data[24] = uph_var ;
     data[25] = suitable ;
    out4="Interpolated Value : " + valInter.toFixed(2) +" " + "Suitability class by sys  Model: " + suitable;
    
    document.getElementById("pH1").innerHTML=out1 + "<br>" + out2 + "<br>" + out3 + "<br>" +out4;
  document.getElementById("ph_data").innerHTML=this.valInter.toFixed(2);
    document.getElementById("ph_suit").innerHTML=this.suitable;

  }

function EC()  {  
   ec=document.getElementById("ec_dsm").value;
  var xmlhttp = new XMLHttpRequest() ;
    var url = "json/sys_sesame/sys_sesame_EC.js" ;

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
         
     if(valInter < 45)  {
      valInter = 44.99
     }


     dispEC(valInter) ;
}

 

  
  function dispEC(valInter)  {
   if(valInter>95 && valInter<=100)
      suitable="S1";

    else if(valInter>85 && valInter<=95)
       suitable="S1";

    else if(valInter<=85 && valInter>60)
       suitable="S2";
 
 else if(valInter<=60 && valInter>45)
       suitable="S3";

    else if(this.valInter<=45)
        suitable="N";


  uec_var=valInter.toFixed(2);
  data[26] = uec_var ;
  data[27] = suitable ;
    out1="Interpolated Value : " + valInter.toFixed(2) +" " + "Suitability class by sys  Model: " + suitable;
    document.getElementById("ec_data").innerHTML=this.valInter.toFixed(2);
    document.getElementById("ec_suit").innerHTML=this.suitable;

   }
  
function NA()  {  
   naConc=document.getElementById("na_conc").value;
  var xmlhttp = new XMLHttpRequest() ;
    var url = "json/sys_sesame/sys_sesame_NA.js" ;

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
         
     if(valInter < 45)  {
      valInter = 44.99
     }


     dispNA(valInter) ;
}

 

  
  function dispNA(valInter)  {
    if(valInter>95 && valInter<=100)
      suitable="S1";

    else if(valInter>85 && valInter<=95)
       suitable="S1";

    else if(valInter<=85 && valInter>60)
       suitable="S2";
 
 else if(valInter<=60 && valInter>45)
       suitable="S3";

    else if(this.valInter<=45)
        suitable="N";
    una_var=valInter.toFixed(2);
    data[28] = una_var ;
    data[29] = suitable ;
    out2="Interpolated Value : " + valInter.toFixed(2) +" " + "Suitability class by sys  Model: " + suitable;
    document.getElementById("na").innerHTML=out1 + "<br>"+out2;
    document.getElementById("na_data").innerHTML=this.valInter.toFixed(2);
    document.getElementById("na_suit").innerHTML=this.suitable;

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
  var length1=document.getElementById("length_growing_early").value;
  lengthEarly() ;
  
}

function calWater()
{
  var water=document.getElementById("water_available").value;

  waterHold=new wheatLimitWater(water);
  waterHold.interPolate();
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

    function calNA()
   {
     var naConc=document.getElementById("na_conc").value; 
     NA() ;
    } 
function callcec()
   {
     var ec=document.getElementById("ec_dsm").value; 
     EC();
  }

    function calLRI()
{
  //alert("here") ;
  
lri = up_var * (ur_var/100 ) * (um_var/100 )* (ul1_var/100 ) *(uw_var/100)
      *(udr_var/100)
     * (ut_var/100 ) * (udep_var/100)
      * (uca_var/100 ) *(ucec_var/100) * (ubase_var/100 )
      * (uorg_var/100 )*   (uph_var/100) * (uec_var/100 )
       * (una_var/100);

data[30] = floorFigure(lri) ;
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
data[31] = Suitability ;
   out= "LRI Value is: " + floorFigure(lri) + " Suitability is : " + intensity + "<br>" + "  Rating by Sys Model is:" + Suitability;
   document.getElementById("result").innerHTML=out;

    document.getElementById("lri_data").innerHTML=floorFigure(this.lri);
    document.getElementById("lri_suit").innerHTML=this.Suitability + "   " + this.intensity;
  
  
}

function printData(shed, subshed)  {
  data[32] = shed ;
  data[33] = subshed ;
  data[34] = "Sesame" ;
  data[35] = "LC Model" ;

  var info = JSON.stringify(data) ;
  window.location.assign("printPages.php?query="+ info) ;
}