 //variables for further use
var up_var="0";
var ur_var="0";
var um_var="0";
var ul1_var="0";
var uw_var="0";
var udr_var="0";
var ut_var="0";
var udep_var="0";
var uca_var="0";
var ucec_var="0";
var ubase_var="0";
var uorg_var="0";
var uph_var="0";
var uec_var="0";
var una_var="0";
var out = "" ;

function topo()  {
     perSlope=document.getElementById("per_slope").value;

var xmlhttp = new XMLHttpRequest() ;
    var url = "json/lc_gram/sys_lc_gram_topo_bachhouni.js" ;

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
              suitable="N";
    up_var = valInter;
    out="Interpolated Value : " + valInter +" " + "Suitability class by sys  Model: " + suitable;
    document.getElementById("land").innerHTML=out;
     document.getElementById("ps_data").innerHTML=this.valInter.toFixed(2);
    document.getElementById("ps_suit").innerHTML=this.suitable;

   }
  
function rain()  {
     rain1=document.getElementById("rainfall").value;
      var xmlhttp = new XMLHttpRequest() ;
      var url = "json/lc_gram/sys_lc_gram_rain.js" ;

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
              suitable="N";
    ur_var = valInter;
    out1="Interpolated Value : " + valInter +" " + "Suitability class by sys  Model: " + suitable;
    //document.getElementById("mean").innerHTML=out;
     document.getElementById("rf_data").innerHTML=this.valInter.toFixed(2);
    document.getElementById("rf_suit").innerHTML=this.suitable;

   }

  
function temp()  {  
   temp1=document.getElementById("temp").value;
  var xmlhttp = new XMLHttpRequest() ;
    var url = "json/lc_gram/sys_lc_gram_temp.js" ;

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
              suitable="N";
    um_var = valInter;
    out2="Interpolated Value : " + valInter +" " + "Suitability class by sys  Model: " + suitable;
     document.getElementById("mt_data").innerHTML=this.valInter.toFixed(2);
    document.getElementById("mt_suit").innerHTML=this.suitable;

   }


function lengthShort()  {  
    

   length1=document.getElementById("length_growing_short").value;
    

  var xmlhttp = new XMLHttpRequest() ;
    var url = "json/lc_gram/sys_lc_gram_length.js" ;
    
    xmlhttp.onreadystatechange = function()  {
      //console.log("onreadystatechange called");
        if(this.readyState == 4 && this.status == 200)  {
          
            var arr = JSON.parse(this.responseText) ;
            interPolateLengthShort(arr) ;
        }
    };
    xmlhttp.open("GET", url,true) ;
    xmlhttp.send() ;
}
    function interPolateLengthShort(arr)
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
     dispLengthShort(valInter) ;
}

  function dispLengthShort(valInter) {
        if(valInter>=85  && valInter <= 100)
          suitable="S1";

        else if(valInter>=60 && valInter<85)
            suitable="S2";

        else if(this.valInter>=45 && valInter<60)
           suitable="S3";

        else if(valInter<45)
              suitable="N";
         ul1_var = valInter;
        out = "Interpolated Value : " + valInter +" " +  "Suitability class by sys  Model: " + suitable;
      document.getElementById("mean").innerHTML=out1 + "<br>" +out2+ "<br>" + out;
       document.getElementById("l1_data").innerHTML=this.valInter.toFixed(2);
    document.getElementById("l1_suit").innerHTML=this.suitable;


     }

function wheatLimitWater(water)
  {
    this.water=water;
   
    wheatLimitWater.prototype.interPolate=function()
    {
      
      if(this.water>75)
      {
        this.valInter=100;
        this.disp(this.valInter);
      }

      else if(this.water<=75 && this.water>=50)
      {
        this.valInter= 115- 0.4*(this.water);
        this.disp(this.valInter);
      }

        else if(this.water<50&& this.water>=30)
      {
        this.valInter=122.5- 1.25*(this.water);
        this.disp(this.valInter);
      }
      else if(this.water>=15 && this.water<30)
      {
        this.valInter=75 - this.water;
        this.disp(this.valInter);
      }
       else if(this.water<15 && this.water>= 0)
      {
        this.valInter= -3*(this.water) + 45 ;
        this.disp(this.valInter);
      }
      
     uw_var = this.valInter.toFixed(2);
 }
      wheatLimitWater.prototype.disp=function()
  {
    if(this.valInter>=75)
          this.suitable="S1";
        
    else if(this.valInter>=50 && this.valInter<75)
       this.suitable="S2";

    else if(this.valInter>=25 && this.valInter<=50)
       this.suitable="S3";

    else if(this.valInter<25)
          this.suitable="N";
    this.out="Interpolated Value : " + this.valInter + " " + "Suitability class by Sys Model: " + this.suitable;
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
        if(this.drainage=="Good")
      {
       this.suitable="S1";
         this.valInter=100;
        }

        else if(this.drainage=="Moderate")
        {
          this.suitable="S1";
          this.valInter=95;
        }

        else if(this.drainage=="Imperfect")
        {
          this.suitable="S2";
          this.valInter=85;
        }
        else if(this.drainage=="Poor and Aeric")
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
      
       if(this.soilText=="sil"||this.soilText=="cl")
           this.waterAvail=1;
       if(this.soilText=="sicl"||this.soilText=="l"||this.soilText=="scl"||this.soilText=="sc")
           this.waterAvail=2;
         if(this.soilText=="cs"||this.soilText=="sl"||this.soilText=="sics")
          this.waterAvail=3;
       if(this.soilText=="ls"||this.soilText=="fs"||this.soilText=="co"||this.soilText=="sicm")
           this.waterAvail=4;
      if(this.soilText=="cm"||this.soilt=="cs")
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
        document.getElementById("tex_data").innerHTML=this.valInter.toFixed(2);
    document.getElementById("tex_suit").innerHTML=this.suitable;
  
   }  
 }

 function depth()  {  
   deep1=document.getElementById("depth").value;
  var xmlhttp = new XMLHttpRequest() ;
    var url = "json/lc_gram/sys_lc_gram_depth.js" ;

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
              suitable="N";
            
     udep_var=valInter;
     out2 = "Interpolated Value : " + valInter + " "+ "Suitability class by sys  Model: " + suitable;
     document.getElementById("dep_data").innerHTML=this.valInter.toFixed(2);
    document.getElementById("dep_suit").innerHTML=this.suitable;

   
  }

 function caco3()  {  
   calCarbonate=document.getElementById("caco3").value;
  var xmlhttp = new XMLHttpRequest() ;
    var url = "json/lc_gram/sys_lc_gram_caco3.js" ;

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
          var x = calCarbonate ;
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
              suitable="N";

    uca_var=valInter;
    out3= "Interpolated Value : " + valInter +" " + "Suitability class by sys  Model: " + suitable;
    
    document.getElementById("gyp").innerHTML=out1+ "<br>" + out2 +"<br>" + out3 ;
     document.getElementById("caco3_data").innerHTML=this.valInter.toFixed(2);
    document.getElementById("caco3_suit").innerHTML=this.suitable;

   }
  

function callCec()  {  
   cec=document.getElementById("cec").value;
  var xmlhttp = new XMLHttpRequest() ;
    var url = "json/lc_gram/sys_lc_gram_cec.js" ;

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
              suitable="N";
    ucec_var=valInter;
    out1="Interpolated Value : " + valInter + " " + "Suitability class by Sys Model: " + suitable;
     document.getElementById("cec_data").innerHTML=this.valInter.toFixed(2);
    document.getElementById("cec_suit").innerHTML=this.suitable;

   }

function base()  {  
   baseSaturate=document.getElementById("base_saturation").value;
  var xmlhttp = new XMLHttpRequest() ;
    var url = "json/lc_gram/sys_lc_gram_base.js" ;

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
              suitable="N";    ubase_var=valInter;
    out2="Interpolated Value : " + valInter +" " + "Suitability class by sys  Model: " + suitable;
     document.getElementById("base_data").innerHTML=this.valInter.toFixed(2);
    document.getElementById("base_suit").innerHTML=this.suitable;

   }
  

function organic()  {  
   organicCarb=document.getElementById("organic_carbon").value;
  var xmlhttp = new XMLHttpRequest() ;
    var url = "json/lc_gram/sys_lc_gram_organic.js" ;

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
              if( (x >= upper && x < lower) || (x <= upper && x > lower) )  {
                  flag = i ;
                  break ;
              }
              else if(x == 1.2)  {
                valInter = 85 ;
                dispOrganic(valInter) ;
              }
              else if(x == 0.8)  {
                valInter = 60 ;
                dispOrganic(valInter) ;
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
     document.getElementById("org_data").innerHTML=this.valInter.toFixed(2);
    document.getElementById("org_suit").innerHTML=this.suitable;
 
  }


function pH()  {  
   ph=document.getElementById("ph").value;
  var xmlhttp = new XMLHttpRequest() ;
    var url = "json/lc_gram/sys_lc_gram_ph.js" ;

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
              suitable="N";

     uph_var=valInter
    out4="Interpolated Value : " + valInter +" " + "Suitability class by sys  Model: " + suitable;
    
    document.getElementById("pH1").innerHTML=out1 + "<br>" + out2 + "<br>" + out3 + "<br>" +out4;
     document.getElementById("ph_data").innerHTML=this.valInter.toFixed(2);
    document.getElementById("ph_suit").innerHTML=this.suitable;

  
  }

function EC()  {  
   ec=document.getElementById("ec_dsm").value;
  var xmlhttp = new XMLHttpRequest() ;
    var url = "json/lc_gram/sys_lc_gram_EC.js" ;

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
              suitable="N";

  uec_var=valInter;
    out1="Interpolated Value : " + valInter +" " + "Suitability class by sys  Model: " + suitable;
     document.getElementById("ec_data").innerHTML=this.valInter.toFixed(2);
    document.getElementById("ec_suit").innerHTML=this.suitable;

   }
  
function NA()  {  
   naConc=document.getElementById("na_conc").value;
  var xmlhttp = new XMLHttpRequest() ;
    var url = "json/lc_gram/sys_lc_gram_NA.js" ;

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
              suitable="N";
    una_var=valInter;
    out2="Interpolated Value : " + valInter +" " + "Suitability class by sys  Model: " + suitable;
    document.getElementById("na01").innerHTML=out1 + "<br>"+out2;
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
  var length1=document.getElementById("length_growing_short").value;
  lengthShort() ;
  
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

function calccal()
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
function calcec()
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
function calCec()
   {
     var ec=document.getElementById("ec_dsm").value; 
     EC();
  }

    function calLRI()
{
   lri = up_var * Math.pow( ( (ur_var)/100 ), 1/2) * Math.pow( ( (um_var)/100 ), 1/3)
    * Math.pow( ( (ul1_var)/100 ), 1/4 )  * Math.pow( ( (uw_var)/100 ), 1/5 ) * Math.pow( ( (udr_var)/100),1/6)
     * Math.pow( ( (ut_var)/100),1/7 )
     * Math.pow( ((udep_var)/100),1/8) * Math.pow( ( (uca_var)/100 ),1/9) * Math.pow( ( (ucec_var)/100),1/10 ) 
      * Math.pow( ( (ubase_var)/100 ),1/11) *Math.pow(( (uorg_var)/100),1/12) * Math.pow( ( (uph_var)/100 ), 1/13) 
      * Math.pow( ( (uec_var)/100 ),1/14) *   Math.pow( ( (una_var)/100),1/15);
    
  

    
   lriRatingSys(lri);

}

function lriRatingSys()
{
  if(lri>=95 && lri<100)
  {
    intensity="None";
    Suitability="S1";
  }
  else if(lri>=85 && lri<95)
  {
    intensity="Slight";
    Suitability="S1";
  }

  else if(lri>=60&& lri<85)
  {
    intensity="Moderate";
    Suitability="S2";
  }

  else if(lri>=45 && lri<60)
  {
    intensity="Severe";
    Suitability="S3";
  }
  else if(lri<45)
  {
    intensity="Very Severe";
    Suitability="N";
  }

    out= "LRI Value is: " + lri + " Suitability is : " + intensity + "<br>" + "  Rating by Sys Model is:" + Suitability;
   document.getElementById("result").innerHTML=out;
    document.getElementById("lri_data").innerHTML=this.lri.toFixed(2);
  document.getElementById("lri_suit").innerHTML=this.Suitability + "    " + this.intensity;
 
}