
var ul_var="0";
var ut_var="0";
var ud_var="0";
var ulog_var="0";
var ur_var="0";
var ucec_var="0";
var ubase_var="0";
var uca_var="0";

var data= []


function wheatManriUheraLand(landErod)
   {
     this.landErod=landErod;
     wheatManriUheraLand.prototype.findLand=function()
       {
        this.Erode(this.landErod);
     }
     wheatManriUheraLand.prototype.Erode=function()
     {
        
      if(this.landErod>=0 && this.landErod<1)
      {
       this.diagnoseCrit="Good";
         this.a=100;
        }

        else if(this.landErod>=1 && this.landErod<2)
        {
          this.diagnoseCrit="fair";
          this.a=75;
        }

        else if(this.landErod>=2 && this.landErod<6)
        {
          this.diagnoseCrit="poor";
          this.a=50;
        }
        else if(this.landErod>=6 && this.landErod<=20)
        {
          this.diagnoseCrit="unsuitable";
          this.a=25;
        }
        ul_var=this.a;
        this.out= "Text is : " + this.diagnoseCrit + " " + " Value is : " + this.a;
        data[0] = ul_var
        data[1] = this.diagnoseCrit
        document.getElementById("Land").innerHTML=this.out;
        document.getElementById("le_data").innerHTML=this.a;
        document.getElementById("le_suit").innerHTML=this.diagnoseCrit;

     }
  }

function wheatManriUheraSoil(soilText)
   {
    this.soilText=soilText;
    var waterAvail=0;
    this.waterAvail=waterAvail;
    wheatManriUheraSoil.prototype.findSoil=function()
     {
      this.soil(this.soilText);
     } 
      wheatManriUheraSoil.prototype.soil=function()
     {
      
       if(this.soilText=="si"||this.soilText=="silf"||this.soilText=="cl"||this.soilText=="sicl"||
            this.soilText=="l"||this.soilText=="sics")
           this.waterAvail=1;
       if(this.soilText=="sc"||this.soilText=="silc"||this.soilText=="scl"||this.soilText=="sl"
            ||this.soilText=="sl"||this.soilText=="sicl"||this.soilText=="ls")
           this.waterAvail=2;
       if(this.soilText=="lsf"||this.soilText=="lsc")
           this.waterAvail=3;
      if(this.soilText=="s"||this.soilText=="silm"||this.soilText=="cm")
        this.waterAvail="4";

      if(this.waterAvail==1)
         {
          this.diagnoseCrit="good";
          this.b=100;
        }
      else if(this.waterAvail==2)
       {
        this.diagnoseCrit="fair";
        this.b=75;
       }
       else if(this.waterAvail==3)
       {
        this.diagnoseCrit="poor";
        this.b=50;
       }
       else if(this.waterAvail==4)
       {
        this.diagnoseCrit="unsuitable";
        this.b=25;
       }
       else 
        { 
          this.diagnoseCrit="invalid input;"
       
       }
       ut_var=this.b;
       this.out=  " text is : " + this.diagnoseCrit + " " +  "value is: " + this.b +  "<br>";
       data[2]= ut_var
       data[3]= this.diagnoseCrit
       document.getElementById("Soil").innerHTML=this.out;
       document.getElementById("st_data").innerHTML=this.b;
        document.getElementById("st_suit").innerHTML=this.diagnoseCrit;
   }
    
      
     }

     function wheatManriUheraDrain(drainage)
   {
     this.drainage=drainage;
     wheatManriUheraDrain.prototype.findD=function()
       {
        this.drained(this.drainage);
     }
     wheatManriUheraDrain.prototype.drained=function()
     {
        
      if(this.drainage=="Good")
      {
       this.diagnoseCrit="Good";
         this.c=100;
        }

        else if(this.drainage=="Moderate")
        {
          this.diagnoseCrit="fair";
          this.c=75;
        }

        else if(this.drainage=="Imperfect")
        {
          this.diagnoseCrit="poor";
          this.c=50;
        }
        else if(this.drainage=="Very Poor,Excessively Drained")
        {
          this.diagnoseCrit="unsuitable";
          this.c=25;
        }
        this.out=  "   text is :" + this.diagnoseCrit + " " + "value is : " + this.c +  "<br>";
        ud_var=this.c;
        data[4] = ud_var
        data[5] = this.diagnoseCrit
        document.getElementById("dr_data").innerHTML=this.c;
        document.getElementById("dr_suit").innerHTML=this.diagnoseCrit;

     }
  }

function wheatManriUheraWater(waterLog)
   {
     this.waterLog=waterLog;
     wheatManriUheraWater.prototype.findW=function()
       {
        this.logging(this.waterLog);
     }
     wheatManriUheraWater.prototype.logging=function()
     {
        
      if(this.waterLog=="None")
      {
       this.diagnoseCrit="Good";
         this.d=100;
        }

        else if(this.waterLog=="Slight")
        {
          this.diagnoseCrit="fair";
          this.d=75;
        }

        else if(this.waterLog=="Moderate")
        {
          this.diagnoseCrit="poor";
          this.d=50;
        }
        else if(this.waterLog=="High")
        {
          this.diagnoseCrit="unsuitable";
          this.d=25;
        }
        ulog_var=this.d;
        this.out=   "   text is :" + this.diagnoseCrit + " "  + "value is : " + this.d + "<br>";
        data[6] =ulog_var
        data[7] = this.diagnoseCrit
        document.getElementById("water").innerHTML=user.out + this.out;
document.getElementById("wl_data").innerHTML=this.d;
        document.getElementById("wl_suit").innerHTML=this.diagnoseCrit;
     }
  }
  
function wheatManriUheraRoot(rootDepth)
{
  this.rootDepth=rootDepth;
    
    wheatManriUheraRoot.prototype.findRoot=function()
     {
      this.root(this.rootDepth);
     }
     
      wheatManriUheraRoot.prototype.root=function()
    {
      
      if(this.rootDepth>=65 && this.rootDepth <=100 )
      {
        this.diagnoseCrit="Good";
        this.e=100;
        }
        else if(this.rootDepth<=65 && this.rootDepth>50)
      {
        this.diagnoseCrit="Fair";
        this.e=75;
        }   
        else if(this.rootDepth<=50 && this.rootDepth>25)
      {
        this.diagnoseCrit="Poor";
        this.e=50;
        }
        else if(this.rootDepth<=25)
      {
        this.diagnoseCrit="Unsuitable";
        this.e=25;
        }
        ur_var=this.e;
      this.out= "text is : " +this.diagnoseCrit + " " + "value is: " + this.e  +"<br>";
      data[8] =ur_var
      data[9]= this.diagnoseCrit
      document.getElementById("root").innerHTML=this.out;
document.getElementById("rd_data").innerHTML=this.e;
        document.getElementById("rd_suit").innerHTML=this.diagnoseCrit;
    }
}

function wheatManriUheraCec(cec)
   {
     this.cec=cec;
     wheatManriUheraCec.prototype.findc=function()
       {
        this.subcec(this.cec);
     }
     wheatManriUheraCec.prototype.subcec=function()
     {
        
      if(this.cec>24)
      {
       this.diagnoseCrit="Good";
         this.f=100;
        }

        else if(this.cec<=24 && this.cec>16)
        {
          this.diagnoseCrit="fair";
          this.f=75;
        }

        else if(this.cec>=10 && this.cec<16)
        {
          this.diagnoseCrit="poor";
          this.f=50;
        }
        else if(this.cec<10)
        {
          this.diagnoseCrit="unsuitable";
          this.f=25;
        }
        ucec_var=this.f;
        this.out=   "text is :" + this.diagnoseCrit + " " + "value is : " + this.f + "<br>";
        data[10]= ucec_var
        data[11] = this.diagnoseCrit
        document.getElementById("cec_data").innerHTML=this.f;
        document.getElementById("cec_suit").innerHTML=this.diagnoseCrit;
        
     }
 }

    function wheatManriUheraBase(baseSaturate)
   {
     this.baseSaturate=baseSaturate;
     wheatManriUheraBase.prototype.findb=function()
       {
        this.base(this.baseSaturate);
     }
    wheatManriUheraBase.prototype.base=function()
     {
        
      if(this.baseSaturate>=50)
      {
       this.diagnoseCrit="Good";
         this.g=100;
        }

        else if(this.baseSaturate<50 && this.baseSaturate>=35)
        {
          this.diagnoseCrit="fair";
          this.g=75;
        }

        else if(this.baseSaturate<35 && this.baseSaturate>=20)
        {
          this.diagnoseCrit="poor";
          this.g=50;
        }
        else if(this.baseSaturate<20)
        {
          this.diagnoseCrit="unsuitable";
          this.g=25;
        }
        ubase_var=this.g;
        this.out="   text is :" + this.diagnoseCrit + " " + "value is : " + this.g +    "<br>";
        data[12] = ubase_var
        data[13] = this.diagnoseCrit
document.getElementById("base_data").innerHTML=this.g;
        document.getElementById("base_suit").innerHTML=this.diagnoseCrit
     }
 }

function wheatManriUheraCal(calCarbonate)
   {
     this.calCarbonate=calCarbonate;
     wheatManriUheraCal.prototype.findcal=function()
       {
        this.calcium(this.calCarbonate);
     }
     wheatManriUheraCal.prototype.calcium=function()
     {
        
      if(this.calCarbonate>=0 && calCarbonate<20)
      {
       this.diagnoseCrit="Good";
         this.h=100;
        }

        else if(this.calCarbonate>=20 && this.calCarbonate<30)
        {
          this.diagnoseCrit="fair";
          this.h=75;
        }

        else if(this.calCarbonate>=30 && this.calCarbonate<40)
        {
          this.diagnoseCrit="poor";
          this.h=50;
        }
        else if(this.calCarbonate>=40)
        {
          this.diagnoseCrit="unsuitable";
          this.h=25;
        }
        uca_var=this.h;
        this.out= "   text is :" + this.diagnoseCrit + " " + "value is : " + this.h +   "<br>";
        data[14]= uca_var
        data[15]=this.diagnoseCrit
        document.getElementById("cal02").innerHTML=detail.out + "<br>" + detail2.out + "<br>" +this.out;
        document.getElementById("caco3_data").innerHTML=this.h;
        document.getElementById("caco3_suit").innerHTML=this.diagnoseCrit
     }
 }
 function calcLand()
   {
  
     var landErode=document.getElementById("land_erodibility").value; 
     
     user=new wheatManriUheraLand(landErode);
     user.findLand();
    }

 function calcSoil()
  {
    var soilTexture=document.getElementById("texture").value;
     user=new wheatManriUheraSoil(soilTexture);
     user.findSoil();
  }           

   function calcDrain()
   {
     var drainage=document.getElementById("drain").value; 
     user=new wheatManriUheraDrain(drainage);
     user.findD();
    }

    function calcWater()
    {
      var waterLog=document.getElementById("log").value; 
     user2=new wheatManriUheraWater(waterLog);
     user2.findW();
         }

function calcRoot()
{
  var rootDepth=document.getElementById("root_depth").value;
  user3=new wheatManriUheraRoot(rootDepth);
  user3.findRoot();
} 
  
  function calccec()
     {

       var cec=document.getElementById("cec_subsoil").value;
       detail=new wheatManriUheraCec(cec);
       detail.findc();

  }

   function calcbase()
     {

       var baseSaturate=document.getElementById("base_saturation").value;
       detail2=new wheatManriUheraBase(baseSaturate);
       detail2.findb();

  }
  
   function calccarbo()
     {

       var calCarbonate=document.getElementById("caco3").value;
       detail3=new wheatManriUheraCal(calCarbonate);
       detail3.findcal();

  }
function calclui()
  {
      lui_fa= ul_var * ( (ut_var)/100)* ( (ud_var)/100)* ( (ulog_var)/100)*
     ( (ur_var)/100)* ( (ucec_var)/100)*  (ubase_var/100)* ( (uca_var)/100);
   
      data[16] =lui_fa
    ans=new frameWork(lui_fa);
    ans.assign();
  }

  function frameWork(lui_fa)
  {
    
    this.lui_fa=lui_fa;
    
    frameWork.prototype.assign=function()
    {
      if(this.lui_fa>=75)
      {
        this.rating="Good";
        this.order="S1";
        this.disp();
     }
     else if(this.lui_fa>=50&&this.lui_fa<75)
     {
      this.rating="Fair";
      this.order="S2";

       this.disp();
     }
     else if(this.lui_fa>25 && this.lui_fa<50)
     {
      this.rating="Poor";
      this.order="S3";
       this.disp();
     }
     else if(this.lui_fa<=25)
     {
      this.rating="unsuitable";
      this.order="N";
       this.disp();
     }
    
    }

    frameWork.prototype.disp=function()
     {
        
      data[17] = this.order + "  " + this.rating
      this.out=  "Suitability Class is: " + this.order + " " +" Class is:" + this.rating + " " + "LUI-FA VALUE : " + lui_fa;
      document.getElementById("finals").innerHTML=this.out;
      document.getElementById("lui_data").innerHTML=this.lui_fa.toFixed(2);
        document.getElementById("lui_suit").innerHTML=this.rating + "  "+ this.order ;
    }
  } 

function printData(shed, subshed)  {
  data[18] = shed ;
  data[19] = subshed ;
  data[20] = "Wheat" ;
  

  var info = JSON.stringify(data) ;
  window.location.assign("printManrique.php?query="+ info) ;
}