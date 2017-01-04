  //global variables
var up_var="0";
var ur_var="0";
var um_var="0";
var ul1_var="0";
var ul2_var="0";
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









function groundSysTopo(perSlope)
  {
    this.perSlope=perSlope;
   
    groundSysTopo.prototype.interPolate=function()
    {
      
      if(this.perSlope>0 && this.perSlope<2)
      {
        this.valInter=100-(2.5)*this.perSlope;
        this.disp(this.valInter);
      }

      else if(this.perSlope>2 && this.perSlope<4)
      {
        this.valInter=105- 5*(this.perSlope);
        this.disp(this.valInter);
      }

        else if(this.perSlope>4 && this.perSlope<8)
      {
        this.valInter=110-6.25*(this.perSlope);
        this.disp(this.valInter);
      }
      else if(this.perSlope>8 && this.perSlope<16)
      {
        this.valInter=75-1.875*(this.perSlope);
        this.disp(this.valInter);
      }
      else if(this.perSlope>16 )
      {
        this.valInter=-11.25*(this.perSlope) + 225;
        this.disp(this.valInter);
      }
      
  }

  groundSysTopo.prototype.disp=function()
  {
    if(this.valInter>=95 && this.valInter <=100)
      this.suitable="S1";

    else if(this.valInter>=85 && this.valInter<95)
       this.suitable="S1";

    else if(this.valInter>=60 && this.valInter<85)
       this.suitable="S2";

    else if(this.valInter<60 && this.valInter>= 45)
          this.suitable="s3";

        else
          this.suitable = "N"
 
    up_var=this.valInter;
    this.out="Value after Interpolation is: " + this.valInter + "  " + "Suitability class by sys  Model: " + this.suitable;
    document.getElementById("land").innerHTML=this.out;
    document.getElementById("ps_data").innerHTML=this.valInter;
    document.getElementById("ps_suit").innerHTML=this.suitable;

   }
  }

function groundLimitrain1(rain1)
  {
    this.rain1=rain1;
   
    groundLimitrain1.prototype.interPolate=function()
    {
      
      if(this.rain1<700 && this.rain1>=500)
      {
        this.valInter=82.5+ 0.025*(this.rain1);
        this.disp(this.valInter);
      }

      else if(this.rain1<500 && this.rain1>=400)
      {
        this.valInter=85 + 0.02*(this.rain1);
        this.disp(this.valInter);
      }

        else if(this.rain1<400&& this.rain1>=300)
      {
        this.valInter=0.25*(this.rain1) - 15;
        this.disp(this.valInter);
      }
      else if(this.rain1<300 && this.rain1>=200)
      {
        this.valInter=0.15*(this.rain1) - 75;
        this.disp(this.valInter);
      }
      
      else if(this.rain1<200)
      {
        this.valInter= - 45+0.45*(this.rain1) ;
        this.disp(this.valInter);
      }
        
     else if(this.rain1>=700 && this.rain1<900)
      {
        this.valInter=117.5 - 0.025*(this.rain1);
        this.disp(this.valInter);
      }

      else if(this.rain1>=900 && this.rain1<1100)
      {
        this.valInter=140 - 0.05*(this.rain1);
        this.disp(this.valInter);
      }

        else if(this.rain1<1100&& this.rain1>=1600)
      {
        this.valInter=140 - 0.05*(this.rain1);
        this.disp(this.valInter);
      }
      else if(this.rain1<=1600 && this.rain1>1900)
      {
        this.valInter=180 -0.08*(this.rain1) ;
        this.disp(this.valInter);
      }
      
      else if(this.rain>=1900)
      {
        this.valInter=187.5-0.075*(this.rain1);
         this.disp(this.valInter);
       }

      
  }

  
  groundLimitrain1.prototype.disp=function()
  { 
    if(this.valInter>=95 && this.valInter<=100)
      this.suitable="S1";

    else if(this.valInter>=85 && this.valInter<95)
       this.suitable="S1";

    else if(this.valInter>=60 && this.valInter<85)
       this.suitable="S2";

    else if(this.valInter>=45 && this.valInter<60)
          this.suitable="S3";
     else if(this.valInter<45)
         this.suitable="N";   
    
    ur_var=this.valInter;
    this.out="Interpolated Value : " + this.valInter + " " + "Suitability class by Limiting Condition Model: " + this.suitable;
    document.getElementById("rf_data").innerHTML=this.valInter;
    document.getElementById("rf_suit").innerHTML=this.suitable;

   }
  }

function groundLimitMean1(temp1)
  {

    this.temp1=temp1;

    groundLimitMean1.prototype.interPolate=function()
    {
            
      if(this.temp1>=22 && this.temp1<24)
      {

        this.valInter=40 +2.5*(this.temp1);
        this.disp(this.valInter);

      }

      else if(this.temp1>=18 && this.temp1<22)
      {
        this.valInter= - 40 + 2.5*(this.temp1);
        this.disp(this.valInter);
      }

        else if(this.temp1<24 && this.temp1>=22)
      {
        this.valInter= - 90 + 12.5*(this.temp1);
        this.disp(this.valInter);
      }
      else if(this.temp1<14 && this.temp1>=10)
      {
        this.valInter= 7.5 + 3.75*(this.temp1);
        this.disp(this.valInter);
      }
      
      else if(this.temp1<10 )
      {
        this.valInter= 45 - 4.5 *(this.temp1);
      this.disp(this.valInter);
      }
      
       else if(this.temp1>=24 && this.temp1<26)
      {
        this.valInter= 160 - 2.5*(this.temp1);
        this.disp(this.valInter);
      }

      else if(this.temp1>=26 && this.temp1<30)
      {
        this.valInter=160 - 2.5*(this.temp1);
        this.disp(this.valInter);
      }

        else if(this.temp1>=30 && this.temp1<34)
      {
        this.valInter= - 6.25*(this.temp1) + 272.5;
        this.disp(this.valInter);
      }
      else if(this.temp1>34)
      {
        this.valInter= - 1.5*(this.temp1) + 111;
        this.disp(this.valInter);
      }
    else if(this.temp1==0)
      {
        this.valInter=10;
        this.disp(this.valInter);
      }
      
  }

  
  groundLimitMean1.prototype.disp=function()
  {
    if(this.valInter>=95 && this.valInter<=100)
      this.suitable="S1";

    else if(this.valInter>=85 && this.valInter<95)
       this.suitable="S1";

    else if(this.valInter>=60 && this.valInter<85)
       this.suitable="S2";

    else if(this.valInter>=45 &&  this.valInter<60)
          this.suitable="S3";
 
     else if(this.valInter<45)
        this.suitable="N";


     um_var=this.valInter;
    this.out="Interpolated Value : " + this.valInter + " " + "Suitability class by Limiting Condition Model: " + this.suitable;
    
    document.getElementById("mean4").innerHTML=user3.out + "<br>" + this.out;
    document.getElementById("mt_data").innerHTML=this.valInter;
    document.getElementById("mt_suit").innerHTML=this.suitable;

   }
  }


function groundSyslength1(length1)
  {
    this.length1=length1;
   
    groundSyslength1.prototype.interPolate=function()
    {
      if(this.length1>=100 && this.length1< 125)
      {
        this.valInter=120- 0.2*(this.length1);
        this.disp(this.valInter);
      }
      

      else if(this.length1<100&&this.length1>=90)
      {
        this.valInter=185 -(this.length1);
        this.disp(this.valInter);
      }

        else if(this.length1<90&& this.length1>=80)
      {
        this.valInter=285-2.5*(this.length1);
        this.disp(this.valInter);
      }
      else if(this.length1<90 && this.length1>75)
      {
        this.valInter=135 - (this.length1);
        this.disp(this.valInter);
      }
      else if(this.length1==""||this.length1==0)
      {
        this.valInter=10;
        this.disp(this.valInter);
      }
 }
      groundSyslength1.prototype.disp=function()
  {
    if(this.valInter>=95 && this.valInter <=100)
      this.suitable="S1";

    else if(this.valInter>=85 && this.valInter<95)
       this.suitable="S1";

    else if(this.valInter>=60 && this.valInter<85)
       this.suitable="S2";

    else if(this.valInter<60 && this.valInter>= 45)
          this.suitable="s3";

        else
          this.suitable = "N"
 

   ul1_var=this.valInter;
    this.out="Value after Interpolation is: " + this.valInter +" "+   "Suitability class by sys  Model: " + this.suitable;
    document.getElementById("l1_data").innerHTML=this.valInter;
    document.getElementById("l1_suit").innerHTML=this.suitable;

     }
  }

  
function groundSyslength2(length2)
  {
    this.length2=length2;
   
    groundSyslength2.prototype.interPolate=function()
    {
      
      if(this.length2>=120 && this.length2<135)
      {
        this.valInter=105.217- 0.043*((this.length2));
        this.disp(this.valInter);
      }

      else if(this.length2>=110 && this.length2<120)
       {
        this.valInter=205 - 1*(this.length2);
        this.disp(this.valInter);
      }

      else if(this.length2>=100 && this.length2<110)
      {
        this.valInter=335-2.5*(this.length2);
        this.disp(this.valInter);
     }
     else if(this.length2>90&& this.length2<105)
     {
      this.valInter=210-1.67*(this.length2);
      this.disp(this.valInter);
     }
     else if(this.length2==""||this.length2==0)
     {
      this.valInter=10;
      this.disp(this.valInter);
     }
      }

  
  groundSyslength2.prototype.disp=function()
  {
    if(this.valInter>=95 && this.valInter <=100)
      this.suitable="S1";

    else if(this.valInter>=85 && this.valInter<95)
       this.suitable="S1";

    else if(this.valInter>=60 && this.valInter<85)
       this.suitable="S2";

    else if(this.valInter<60 && this.valInter>= 45)
          this.suitable="s3";

        else
          this.suitable = "N"
 

   ul2_var=this.valInter;
    this.out="Value after Interpolation is: " + this.valInter + " " +  "Suitability class by sys  Model: " + this.suitable;
    document.getElementById("len").innerHTML=waterAvail.out + "<br>" +this.out;
    document.getElementById("l2_data").innerHTML=this.valInter;
    document.getElementById("l2_suit").innerHTML=this.suitable;

   }
  }

  function groundSysDrain(drainage)
  {
    this.drainage=drainage;
    groundSysDrain.prototype.findDrain=function()
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
        this.out="Value is: " + this.valInter +" " +  "Suitability class by sys  Model: " + this.suitable;
    document.getElementById("drain").innerHTML=this.out;
    document.getElementById("dr_data").innerHTML=this.valInter;
    document.getElementById("dr_suit").innerHTML=this.suitable;

     }
  }

  function groundSysSoil(soilText)
   {
    this.soilText=soilText;
    var waterAvail=0;
    this.waterAvail=waterAvail;
    groundSysSoil.prototype.findSoil=function()
     {
      this.soiling(this.soilText);
     } 
      groundSysSoil.prototype.soiling=function()
     {
      
       if(this.soilText=="scl"||this.soilText=="l"||this.soilText=="sl")
           this.waterAvail=1;
       if(this.soilText=="sicl"||this.soilText=="sil"||this.soilText=="co"||this.soilText=="si"||this.soilText=="sc")
           this.waterAvail=2;
         if(this.soilText=="cl"||this.soilText=="c"||this.soilText=="s"||this.soilText=="lfs"||this.soilText=="ls")
          this.waterAvail=3;
       if(this.soilText=="C"||this.soilText=="fs"||this.soilText=="lcs"||this.soilText=="s")
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
        this.suitable="S1";
        this.valInter=95;
       }
       else if(this.waterAvail==3)
       {
        this.suitable="S2";
        this.valInter=85;
       }
       else if(this.waterAvail==4)
       {
        this.suitable="S3";
        this.valInter=60;

       }

       else if(this.waterAvail==5)
       {
        this.suitable="N";
        this.valInter=45;
       }
       ut_var=this.valInter;
       this.out="Value is: " + this.valInter + " "+ "Suitability class by sys  Model: " + this.suitable;
    document.getElementById("tex_data").innerHTML=this.valInter;
    document.getElementById("tex_suit").innerHTML=this.suitable;

   }  
 }

function groundSysDepth(depth)
  {
    this.depth=depth;
   
    groundSysDepth.prototype.interPolate=function()
    {
      
      if(this.depth>=75)
      {
        this.valInter=115 - 0.2*((this.depth ));
        this.disp(this.valInter);
      }

      else if(this.depth>=50 && this.depth<75)
      {
        this.valInter=115-0.4*(this.depth);
        this.disp(this.valInter);
      }

        else if(this.depth>=35 && this.depth<50)
      {
        this.valInter=143.33 - 1.667*(this.depth);
        this.disp(this.valInter);
      }
      else if(this.depth>=25 && this.depth<35)
        {
          this.valInter=97.5-1.5*(this.depth);
          this.disp(this.valInter);
        }
        else if(this.depth<25)
        {
          this.valInter=45-1.8*(this.depth);
          this.disp(this.valInter); 
        }
  }
  groundSysDepth.prototype.disp=function()
  {
    if(this.valInter>=95 && this.valInter <=100)
      this.suitable="S1";

    else if(this.valInter>=85 && this.valInter<95)
       this.suitable="S1";

    else if(this.valInter>=60 && this.valInter<85)
       this.suitable="S2";

    else if(this.valInter<60 && this.valInter>= 45)
          this.suitable="s3";

        else
          this.suitable = "N"
 
    udep_var=this.valInter;
    this.out="Value after Interpolation is: " + this.valInter +" "+ "Suitability class by sys  Model: " + this.suitable;
    document.getElementById("dep_data").innerHTML=this.valInter;
    document.getElementById("dep_suit").innerHTML=this.suitable;

       }
  }
function wheatLimitCal(calCarboante)
  {
    this.calCarboante=calCarboante;
   
    wheatLimitCal.prototype.interPolate=function()
    {
      
      if(this.calCarboante>=0 && this.calCarboante<12)
      {
        this.valInter=100 - 0.417*(this.calCarboante);
        this.disp(this.valInter);
      }

      else if(this.calCarboante>=12 && this.calCarboante<25)
      {
        this.valInter=105 - 0.769*(this.calCarboante);
        this.disp(this.valInter);
      }

        else if(this.calCarboante>=25 && this.calCarboante<35)
      {
        this.valInter=147.5 - 2.5*(this.calCarboante);
        this.disp(this.valInter);
      }
      else if(this.calCarboante>=35 && this.calCarboante<50)
        {
          this.valInter=95-(this.calCarboante);
          this.disp(this.valInter);
        }

        else if(this.calCarboante>=50)
        {
          this.valInter=90-0.9*(this.calCarboante);
          this.disp(this.valInter);
        }
  }
  wheatLimitCal.prototype.disp=function()
  { valInter =
    if(this.valInter>=95 && this.valInter <=100)
      this.suitable="S1";

    else if(this.valInter>=85 && this.valInter<95)
       this.suitable="S1";

    else if(this.valInter>=60 && this.valInter<85)
       this.suitable="S2";

    else if(this.valInter<60 && this.valInter>= 45)
          this.suitable="s3";

        else
          this.suitable = "N"
 
  uca_var=59.223;
     this.out="Interpolated Value : " + 59.223 + " " +  "Suitability class by Sys Model: " + this.suitable;
    document.getElementById("gyp").innerHTML=Soil1.out+ "<br>" + deep1.out +"<br>" + +this.out;
    document.getElementById("caco3_data").innerHTML=this.valInter;
    document.getElementById("caco3_suit").innerHTML=this.suitable;


   }
  }


function groundSysGyp(gypsum)
{
  this.gypsum=gypsum;
  groundSysGyp.prototype.interPolate=function()
  {
    if(this.gypsum>0 && this.gypsum<2)
    {
      this.valInter=100-2.5*(this.gypsum);
      this.disp(this.valInter);
    }
    else if(this.gypsum>2 && this.gypsum<4)
    {
      this.valInter=105-5*((this.gypsum));
      this.disp(this.valInter);
    }
    else if(this.gypsum>4 && this.gypsum<10)
    {
      this.valInter=102.07-4.17*((this.gypsum));
      this.disp(this.valInter);
    }
    else if(this.gypsum>10 &&this.gypsum<20)
    {
      this.valInter=75-1.5*(this.gypsum);
      this.disp(this.valInter);
    }
    else if(this.gypsum>15)
    {
      this.valInter=60-(this.gypsum);
      this.disp(this.valInter);
    }

  }
    groundSysGyp.prototype.disp=function()
  {
    if(this.valInter>=95 && this.valInter <=100)
      this.suitable="S1";

    else if(this.valInter>=85 && this.valInter<95)
       this.suitable="S1";

    else if(this.valInter>=60 && this.valInter<85)
       this.suitable="S2";

    else if(this.valInter<60 && this.valInter>= 45)
          this.suitable="s3";

        else
          this.suitable = "N"
 

 ugy_var=this.valInter;
    this.out="Value after Interpolation is: " + this.valInter + "  " + "Suitability class by sys  Model: " + this.suitable;

   }
  }

function wheatLimitCec(cec)
  {
    this.cec=cec;
   
    wheatLimitCec.prototype.interPolate=function()
    {
      
      if(this.cec>16)
      {
        this.valInter=108.33 - 0.833*(this.cec);
        this.disp(this.valInter);
      }

      else if(this.cec<20 && this.cec>=16)
      {
        this.valInter=195 - 6.25*(this.cec);
        this.disp(this.valInter);
      }

      else if(this.cec>=20 && this.cec<22)
      {
        this.valInter=335 - 12.5*(this.cec);
        this.disp(this.valInter);
      }

        else if(this.cec<=22)
      {
        this.valInter=101.25- 1.875*(this.cec);
        this.disp(this.valInter);
      }
      
      else if(this.cec==0||this.cec=="")
      {
        this.valInter=10;
        this.disp(this.valInter);
      }
  }
  wheatLimitCec.prototype.disp=function()
  {
    if(this.valInter>=95 && this.valInter <=100)
      this.suitable="S1";

    else if(this.valInter>=85 && this.valInter<95)
       this.suitable="S1";

    else if(this.valInter>=60 && this.valInter<85)
       this.suitable="S2";

    else if(this.valInter<60 && this.valInter>= 45)
          this.suitable="s3";

        else
          this.suitable = "N"
 
   ucec_var=this.valInter;
    this.out="Interpolated Value : " + this.valInter + " " + "Suitability class by Sys Model: " + this.suitable;
   document.getElementById("cec_data").innerHTML=this.valInter;
    document.getElementById("cec_suit").innerHTML=this.suitable;

   }
  }


function groundSysBase(baseSaturate)
  {
    this.baseSaturate=baseSaturate;
   
    groundSysBase.prototype.interPolate=function()
    {
     
     if(this.baseSaturate>=50)
     {
        this.valInter=90+0.1*((this.baseSaturate));
        this.disp(this.valInter);
      }

      else if(this.baseSaturate>=40 && this.baseSaturate<50)
      {
        this.valInter=45 + ((this.baseSaturate));
        this.disp(this.valInter);
      }

        else if(this.baseSaturate>=35 && this.baseSaturate<40)
      {
        this.valInter=285+5*((this.baseSaturate));
        this.disp(this.valInter);
      }

      else if(this.baseSaturate<35)
      {
        this.valInter = 45+0.428*((this.baseSaturate));
        this.disp(this.valInter);
      }
            
  }

  groundSysBase.prototype.disp=function()
  {
 if(this.valInter>=95 && this.valInter <=100)
      this.suitable="S1";

    else if(this.valInter>=85 && this.valInter<95)
       this.suitable="S1";

    else if(this.valInter>=60 && this.valInter<85)
       this.suitable="S2";

    else if(this.valInter<60 && this.valInter>= 45)
          this.suitable="s3";

        else
          this.suitable = "N"
 
      ubase_var=this.valInter;
    this.out="Value after Interpolation is: " + this.valInter + " " + "Suitability class by sys  Model: " + this.suitable;
    document.getElementById("base_data").innerHTML=this.valInter;
    document.getElementById("base_suit").innerHTML=this.suitable;

   }
  }

  function groundSysOrganic(organicCarb)
  {
    this.organicCarb=organicCarb;
   
    groundSysOrganic.prototype.interPolate=function()
    {
      
      if(this.organicCarb>=2.0)
      {
        this.valInter= -13.33+16.67*(this.organicCarb);
        this.disp(this.valInter);
      }

      else if(this.organicCarb<2 && this.organicCarb>=1.2)
      {
        this.valInter= -35 + 20*((this.organicCarb));
        this.disp(this.valInter);
      }

        else if(this.organicCarb<1.2 && this.organicCarb>=0.8)
      {
        this.valInter=10+62.5*(this.organicCarb);
        this.disp(this.valInter);
      }
      else if(this.organicCarb<0.8)
        {
          this.valInter= 30 + 18.75*(this.organicCarb);
          this.disp(this.valInter);
        }
       else if(this.organicCarb==""||this.organicCarb==0)
       {
        this.valInter=10;
        this.disp(this.valInter);
       } 
  }
  groundSysOrganic.prototype.disp=function()
  {
    if(this.valInter>=95 && this.valInter <=100)
      this.suitable="S1";

    else if(this.valInter>=85 && this.valInter<95)
       this.suitable="S1";

    else if(this.valInter>=60 && this.valInter<85)
       this.suitable="S2";

    else if(this.valInter<60 && this.valInter>= 45)
          this.suitable="s3";

        else
          this.suitable = "N"
 
    uorg_var=this.valInter;
    this.out="Value after Interpolation is: " + this.valInter + " " + "Suitability class by sys  Model: " + this.suitable;
   document.getElementById("org_data").innerHTML=this.valInter;
    document.getElementById("org_suit").innerHTML=this.suitable;

   }
  }


 function groundSyspH1(pH1)
  {
    this.pH1=pH1;
   
    groundSyspH1.prototype.interPolate=function()
    {
      
      if(this.pH1<6.8 && this.pH1>=6.5)
      {
        this.valInter=16.67 + 13.33*((this.pH1));
        this.disp(this.valInter);
      }

      else if(this.pH1<6.5 && this.pH1>=6.0)
      {
        this.valInter= - 35+20*(this.pH1-6.5);
        this.disp(this.valInter);
      }

        else if(this.pH1<6.0&& this.pH1>=5.6)
      {
        this.valInter=62.5*(this.pH1-6.0) + 85;
        this.disp(this.valInter);
      }
      else if(this.pH1<5.6 && this.pH1>=5.4)
      {
        this.valInter=75*(this.pH1-5.6) + 60;
        this.disp(this.valInter);
      }
      else if(this.pH1<5.4)
      {
        this.valInter=  8.33*((this.pH1));
        this.disp(this.valInter);
      }
      
   else if(this.pH1>=6.8 && this.pH1<7.0)
    {
      this.valInter=100-25*(this.pH1-6.8);
      this.disp(this.valInter);
    }
    else if(this.pH1>=7.0 && this.pH1<7.5)
    {

      this.valInter=95-20*((this.pH1-7.0));
      this.disp(this.valInter);
    }
    else if(this.pH1>=7.5 && this.pH1<8.0)
    {
      this.valInter=85-50*((this.pH1-7.5));
      this.disp(this.valInter);
    }
    else if(this.pH1>=8.0 && this.pH1<8.2)
    {
      this.valInter=60-5*(this.pH1-8);
      this.disp(this.valInter);
    }
    else if(this.pH1>=8.2)
    {
      this.valInter=142.1-11.8*(this.pH1-8.2);
      this.disp(this.valInter);   
    }
  }
  groundSyspH1.prototype.disp=function()
  {
    if(this.valInter>=95 && this.valInter <=100)
      this.suitable="S1";

    else if(this.valInter>=85 && this.valInter<95)
       this.suitable="S1";

    else if(this.valInter>=60 && this.valInter<85)
       this.suitable="S2";

    else if(this.valInter<60 && this.valInter>= 45)
          this.suitable="s3";

        else
          this.suitable = "N"
 

   uph_var=this.valInter;
    this.out="Value after Interpolation is: " + this.valInter + " " + "Suitability class by sys  Model: " + this.suitable;
    document.getElementById("pH1").innerHTML=cec1.out + "<br>" + base1.out+ "<br>" +car1.out +"<br>" + this.out;
    document.getElementById("ph_data").innerHTML=this.valInter;
    document.getElementById("ph_suit").innerHTML=this.suitable;

  }
  }

    function groundSysEC(ec)
{
  this.ec=ec;
  groundSysEC.prototype.interPolate=function()
  {
    if(this.ec>=0 && this.ec<2)
    {
      this.valInter=12.5-2.5*(this.ec);
      this.disp(this.valInter);
    }
    else if(this.ec>=2 && this.ec<4)
    {
      this.valInter=105-5*(this.ec);
      this.disp(this.valInter);
    }
    else if(this.ec>4 && this.ec<6)
    {
      this.valInter=110-12.5*(this.ec);
      this.disp(this.valInter);
    }
    else if(this.ec>=6 &&this.ec<8)
    {
      this.valInter=105-7.5*(this.ec);
      this.disp(this.valInter);
    }
    else if(this.ec>=8)
    {
      this.valInter=225-22.5*(this.ec);
      this.disp(this.valInter);
    }

  }
    groundSysEC.prototype.disp=function()
  {
  if(this.valInter>=95 && this.valInter <=100)
      this.suitable="S1";

    else if(this.valInter>=85 && this.valInter<95)
       this.suitable="S1";

    else if(this.valInter>=60 && this.valInter<85)
       this.suitable="S2";

    else if(this.valInter<60 && this.valInter>= 45)
          this.suitable="s3";

        else
          this.suitable = "N"
 
    
    uec_var=this.valInter;
    this.out="Value after Interpolation is: " + this.valInter + "  " + "Suitability class by sys  Model: " + this.suitable;
   document.getElementById("ec_data").innerHTML=this.valInter;
    document.getElementById("ec_suit").innerHTML=this.suitable;

   }
  }

function groundSysNA(naConc)
{
  this.naConc=naConc;
  groundSysNA.prototype.interPolate=function()
  {
    if(this.naConc>=0 && this.naConc<8)
    {
      this.valInter=100-0.625*(this.naConc);
      this.disp(this.valInter);
    }
    else if(this.naConc>=8 && this.naConc<10)
    {
      this.valInter=135-5*((this.naConc));
      this.disp(this.valInter);
    }
    else if(this.naConc>=10 && this.naConc<15)
    {
      this.valInter=135-5*((this.naConc));
      this.disp(this.valInter);
    }
    else if(this.naConc>=15 &&this.naConc<20)
    {
      this.valInter=15-3*(this.naConc);
      this.disp(this.valInter);
    }
    else if(this.naConc>=20)
    {
      this.valInter=75-1.5*(this.naConc);
      this.disp(this.valInter);
    }

  }
    groundSysNA.prototype.disp=function()
  {
    if(this.valInter>=95 && this.valInter <=100)
      this.suitable="S1";

    else if(this.valInter>=85 && this.valInter<95)
       this.suitable="S1";

    else if(this.valInter>=60 && this.valInter<85)
       this.suitable="S2";

    else if(this.valInter<60 && this.valInter>= 45)
          this.suitable="s3";

        else
          this.suitable = "N"
 

 una_var=this.valInter;
    this.out="Value after Interpolation is: " + this.valInter + "  " + "Suitability class by sys  Model: " + this.suitable;
    document.getElementById("na").innerHTML=userEC.out+ "<br>" +this.out;
    document.getElementById("na_data").innerHTML=this.valInter;
    document.getElementById("na_suit").innerHTML=this.suitable;

   }
  }



function calTopo()
{
  var perSlope=document.getElementById("per_slope").value;

  user=new groundSysTopo(perSlope);
  user.interPolate();
}



function calrain1()
{
  var rain1=document.getElementById("rainfall").value;

  user3=new groundLimitrain1(rain1);
  user3.interPolate();
}

function calmean1()
{
  var temp1=document.getElementById("temp").value;

  userMean1=new groundLimitMean1(temp1);
  userMean1.interPolate();
}


function callength1()
{
  var length1=document.getElementById("length_growing_bunch").value;

  waterAvail=new groundSyslength1(length1);
  waterAvail.interPolate();
}
function callength2()
{
  var length2=document.getElementById("length_growing_spreading").value;

  waterAvail2=new groundSyslength2(length2);
  waterAvail2.interPolate();
}

function calcDrain()
   {
     var drainage=document.getElementById("drained").value; 
     wet=new groundSysDrain(drainage);
     wet.findDrain();
    }
function calcSoil()
  {
    var soilTexture=document.getElementById("texture").value;
     Soil1=new groundSysSoil(soilTexture);
     Soil1.findSoil();
   }
function calcDepth()
{
  var Depth=document.getElementById("depth").value;
  deep1=new groundSysDepth(Depth);
  deep1.interPolate();
}
function calccal()
{
  var calCarboante=document.getElementById("caco3").value;
  cal1=new wheatLimitCal(calCarboante);
  cal1.interPolate();
}

function calcGyp()
   {
     var gypsum=document.getElementById("gypsum").value; 
     userGyp=new groundSysGyp(gypsum);
     userGyp.interPolate();
    }   

function calCec()
{
  var cec=document.getElementById("cec_subsoil").value;
  cec1=new wheatLimitCec(cec);
  cec1.interPolate();
}

    function calBase()
{
  var baseSaturate=document.getElementById("base_saturation").value;
  base1=new groundSysBase(baseSaturate);
  base1.interPolate();
}
function calCarb()
{
  var organicCarb=document.getElementById("organic_carbon").value;
  car1=new groundSysOrganic(organicCarb);
  car1.interPolate();
}

function calpH1()
{
  var pH1=document.getElementById("ph").value;

  userpH1=new groundSyspH1(pH1);
  userpH1.interPolate();
}  


function calcec()
   {
     var ec=document.getElementById("ec_dsm").value; 
     userEC=new groundSysEC(ec);
     userEC.interPolate();
    }

    function calcNA()
   {
     var naConc=document.getElementById("na_conc").value; 
     userNA=new groundSysNA(naConc);
     userNA.interPolate();
    }
    
function calLRI()
{
   lri=up_var * ( (ur_var)/100 ) * ( (um_var)/100 ) * ( (ul1_var)/100 ) * ( (ul2_var)/100 )
   *( ( udr_var)/100 ) * ( ( ut_var)/100 )* ( ( udep_var)/100 ) * ( ( uca_var)/100 ) 
   * ( ( ugy_var)/100 ) * ( (ucec_var)/100 ) * ( (ubase_var)/100 ) * ( (uorg_var)/100) 
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
  document.getElementById("lri_data").innerHTML=this.lri;
    document.getElementById("lri_suit").innerHTML=this.suitable + "    "+this.Suitability;

  
  
}