var data = []
var ul_var="0";
var ut_var="0";
var ud_var="0";
var ulog_var="0";
var ur_var="0";
var ucec_var="0";
var ubase_var="0";
var uca_var="0";




function sesameManriUheraLand(landErod)
   {
     this.landErod=landErod;
     sesameManriUheraLand.prototype.findLand=function()
       {
        this.Erode(this.landErod);
     }
     sesameManriUheraLand.prototype.Erode=function()
     {
        
      if(this.landErod>= 0 && this.landErod<2)
      {
       this.diagnoseCrit="Good";
         this.a=100;
        }

        else if(this.landErod>=2 && this.landErod<4)
        {
          this.diagnoseCrit="fair";
          this.a=75;
        }

        else if(this.landErod>=4 && this.landErod<8)
        {
          this.diagnoseCrit="poor";
          this.a=50;
        }
        else if(this.landErod>=8 && this.landErod<16)
        {
          this.diagnoseCrit="unsuitable";
          this.a=25;
        }
        ul_var=this.a;
        this.out= "   text is :" + this.diagnoseCrit + " " +"value is : " + this.a +   "<br>";
        data[0] = ul_var
        data[1] = this.diagnoseCrit
        document.getElementById("Land").innerHTML=this.out;
        document.getElementById("le_data").innerHTML=this.a;
        document.getElementById("le_suit").innerHTML=this.diagnoseCrit;

     }
  }

function sesameManriUheraSoil(soilText)
   {
    this.soilText=soilText;

    var waterAvail=0;
    this.waterAvail=waterAvail;
    sesameManriUheraSoil.prototype.findSoil=function()
     {
      this.soil(this.soilText);
     } 
      sesameManriUheraSoil.prototype.soil=function()
     {
      
       if(this.soilText=="scl"||this.soilText=="l"||this.soilText=="sil"||this.soilText=="cl"||this.soilText=="sl")
           this.waterAvail=1;
       if(this.soilText=="sicl"||this.soilText=="sc"||this.soilText=="c")
           this.waterAvail=2;
       if(this.soilText=="ls"||this.soilText=="c(s-s)")
           this.waterAvail=3;
      if(this.soilText=="s")
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
       this.out=  "text is : " + this.diagnoseCrit+ " " +   "  " + "value is: " + this.b +     "<br>";
        data[2]= ut_var
        data[3] = this.diagnoseCrit
        document.getElementById("Soil").innerHTML=this.out;
        document.getElementById("st_data").innerHTML=this.b;
        document.getElementById("st_suit").innerHTML=this.diagnoseCrit;

   }
 }

  function sesameManriUheraDrain(drainage)
   {
     this.drainage=drainage;
     sesameManriUheraDrain.prototype.findD=function()
       {
        this.drained(this.drainage);
     }
     sesameManriUheraDrain.prototype.drained=function()
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
        else if(this.drainage=="Very poor "||this.drainage=="Excessively Drained")
        {
          this.diagnoseCrit="unsuitable";
          this.c=25;
        }
        ud_var=this.c;
        this.out=  "   text is :" + this.diagnoseCrit + " " + "value is : " + this.c +  "<br>";
        data[4] = ud_var
        data[5]= this.diagnoseCrit
        document.getElementById("dr_data").innerHTML=this.c;
        document.getElementById("dr_suit").innerHTML=this.diagnoseCrit;


     }
  }


function sesameManriUheraWater(waterLog)
   {
     this.waterLog=waterLog;
     sesameManriUheraWater.prototype.findW=function()
       {
        this.logging(this.waterLog);
     }
     sesameManriUheraWater.prototype.logging=function()
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
        this.out=  "   text is :" + this.diagnoseCrit + " " + "value is : " + this.d +  "<br>";
        data[6]= ulog_var
        data[7] = this.diagnoseCrit
        document.getElementById("water").innerHTML=user.out + "<br>" + this.out;
        document.getElementById("wl_data").innerHTML=this.d;
        document.getElementById("wl_suit").innerHTML=this.diagnoseCrit;

     }
  }
  

function sesameManriUheraRoot(rootDepth)
{
  this.rootDepth=rootDepth;
    
    sesameManriUheraRoot.prototype.findRoot=function()
     {
      this.root(this.rootDepth);
     }
     
      sesameManriUheraRoot.prototype.root=function()
    {
      
      if(this.rootDepth>=75)
      {
        this.diagnoseCrit="Good";
        this.e=100;
        }
        else if(this.rootDepth<75 && this.rootDepth>=50)
      {
        this.diagnoseCrit="Fair";
        this.e=75;
        }   
        else if(this.rootDepth<50 && this.rootDepth>=25)
      {
        this.diagnoseCrit="Poor";
        this.e=50;
        }
        else if(this.rootDepth<25)
      {
        this.diagnoseCrit="Unsuitable";
        this.e=25;
        }
        ur_var=this.e;
      this.out= "text is : " +this.diagnoseCrit + " " + "value is: " + this.e  +"<br>";
        data[8] =ur_var
        data[9] = this.diagnoseCrit
      document.getElementById("root").innerHTML=this.out;
     document.getElementById("rd_data").innerHTML=this.e;
        document.getElementById("rd_suit").innerHTML=this.diagnoseCrit;

    }
}

function sesameManriUheraCec(cec)
   {
     this.cec=cec;
     sesameManriUheraCec.prototype.findc=function()
       {
        this.subcec(this.cec);
     }
     sesameManriUheraCec.prototype.subcec=function()
     {
        
      if(this.cec>24)
      {
       this.diagnoseCrit="Good";
         this.f=100;
        }

        else if(this.cec<24 && this.cec>=16)
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
          this.cec="unsuitable";
          this.f=25;
        }
        ucec_var=this.f;
        this.out=   "   text is :" + this.diagnoseCrit + " " + "value is : " + this.f + "<br>";
         data[10] = ucec_var
         data[11] = this.diagnoseCrit
         document.getElementById("cec_data").innerHTML=this.f;
        document.getElementById("cec_suit").innerHTML=this.diagnoseCrit;


     }
 }

    function sesameManriUheraBase(baseSaturate)
   {
     this.baseSaturate=baseSaturate;
     sesameManriUheraBase.prototype.findb=function()
       {
        this.base(this.baseSaturate);
     }
    sesameManriUheraBase.prototype.base=function()
     {
        
      if(this.baseSaturate>=50)
      {
       this.diagnoseCrit="Good";
         this.g=100;
        }

        else if(this.baseSaturate<50 && this.baseSaturate>=40)
        {
          this.diagnoseCrit="fair";
          this.g=75;
        }

        else if(this.baseSaturate<50 && this.baseSaturate>=35)
        {
          this.diagnoseCrit="poor";
          this.g=50;
        }
        else if(this.baseSaturate<35)
        {
          this.diagnoseCrit="unsuitable";
          this.g=25;
        }
        ubase_var=this.g;
        this.out="   text is :" + this.diagnoseCrit + " " + "value is : " + this.g +    "<br>";
         data[12] =ubase_var
         data[13] = this.diagnoseCrit
         document.getElementById("base_data").innerHTML=this.g;
        document.getElementById("base_suit").innerHTML=this.diagnoseCrit;


     }
 }

function sesameManriUheraCal(calCarbonate)
   {
     this.calCarbonate=calCarbonate;
     sesameManriUheraCal.prototype.findcal=function()
       {
        this.calcium(this.calCarbonate);
     }
     sesameManriUheraCal.prototype.calcium=function()
     {
        
      if(this.calCarbonate>=0 && calCarbonate<12)
      {
       this.diagnoseCrit="Good";
         this.h=100;
        }

        else if(this.calCarbonate>=12 && this.calCarbonate<25)
        {
          this.diagnoseCrit="fair";
          this.h=75;
        }

        else if(this.calCarbonate>=25 && this.calCarbonate<35)
        {
          this.diagnoseCrit="poor";
          this.h=50;
        }
        else if(this.calCarbonate>=35)
        {
          this.diagnoseCrit="unsuitable";
          this.h=25;
        }
        uca_var=this.h;
        this.out= "   text is :" + this.diagnoseCrit + " " + "value is : " + this.h +   "<br>";
        data[14] = uca_var
        data[15]= this.diagnoseCrit
        document.getElementById("calcium").innerHTML=detail.out + "<br>" + detail2.out + "<br>" +this.out;
         document.getElementById("caco3_data").innerHTML=this.h;
        document.getElementById("caco3_suit").innerHTML=this.diagnoseCrit;

     }
 }

function calcLand()
   {
     var landErode=document.getElementById("land_erodibility").value; 
     user=new sesameManriUheraLand(landErode);
     user.findLand();
    }

   function calcSoil()
  {
    var soilTexture=document.getElementById("texture").value;
    
     user=new sesameManriUheraSoil(soilTexture);
     user.findSoil();

  }  

  function calcDrain()
   {
     var drainage=document.getElementById("drain").value; 
     user=new sesameManriUheraDrain(drainage);
     user.findD();
    }

    function calcWater()
    {
      var waterLog=document.getElementById("log").value; 
     user2=new sesameManriUheraWater(waterLog);
     user2.findW();
         }
  
   function calcRoot()
{
  var rootDepth=document.getElementById("root_depth").value;
  user3=new sesameManriUheraRoot(rootDepth);
  user3.findRoot();
}

function calccec()
     {

       var cec=document.getElementById("cec_subsoil").value;
       detail=new sesameManriUheraCec(cec);
       detail.findc();

  }

   function calcbase()
     {

       var baseSaturate=document.getElementById("base_saturation").value;
       detail2=new sesameManriUheraBase(baseSaturate);
       detail2.findb();

  }
  
   function calccarbo()
     {

       var calCarbonate=document.getElementById("caco3").value;
       detail3=new sesameManriUheraCal(calCarbonate);
       detail3.findcal();

  }

 function calclui()
  {
      lui_fa= ul_var * ( (ut_var)/100) * ( (ud_var)/100)
      * ( (ulog_var)/100) 
     *( (ur_var)/100) * ( (ucec_var)/100)
      *  (ubase_var/100) * ( (uca_var)/100) ;
   
     data[16]= lui_fa
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
      this.out=  "Suitability Class is: " + this.order + " " + " Class is:" + this.rating + " " +  "LUI-FA VALUE : " + lui_fa;
      document.getElementById("finals").innerHTML=this.out;
       document.getElementById("lui_data").innerHTML=this.lui_fa.toFixed(2);
        document.getElementById("lui_suit").innerHTML=this.order + "   " + this.rating;

    }
  } 


function printData(shed, subshed)  {
  data[18] = shed ;
  data[19] = subshed ;
  data[20] = "Sesame" ;
  

  var info = JSON.stringify(data) ;
  window.location.assign("printManrique.php?query="+ info) ;
}