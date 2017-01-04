// some global variable to use in rest of the script

var u_var = '0';
var u2_var = '0';
var um1_var = '0';
var ul1_var = '0';
var ud_var = '0';
var us_var = '0';
var udep_var = '0';
var uc_var = '0';
var uc2_var = '0';
var ub_var = '0';
var uo_var = '0';
var up_var = '0';
var ue_var = '0';
var un_var = '0';






function wheatLimitTopo(perSlope)
  {
    this.perSlope=perSlope;
        
    wheatLimitTopo.prototype.interPolate=function()
    {
      
      if(this.perSlope>0 && this.perSlope<2)
      {
        this.valInter=100-(2.5)*this.perSlope;
        this.disp(this.valInter);
      }

      else if(this.perSlope>2 && this.perSlope<8)
      {
        this.valInter=98.3-(1.67)*(this.perSlope);
        this.disp(this.valInter);
      }

        else if(this.perSlope>8 && this.perSlope<12)
      {
        this.valInter=135-6.25*(this.perSlope);
        this.disp(this.valInter);
      }
      else if(this.perSlope>12 && this.perSlope<16)
      {
        this.valInter=120-5*(this.perSlope);
        this.disp(this.valInter);
      }
      else if(this.perSlope>16)
      {
        this.valInter=61.33 - 1.33*(this.perSlope);
        this.disp(this.valInter);
      }
      
  }

  wheatLimitTopo.prototype.disp=function()
  {
    if(this.valInter>=95 && this.valInter<=100)
      this.suitable="S1";

    else if(this.valInter>=85 && this.valInter<95)
       this.suitable="S2";

    else if(this.valInter>=60 && this.valInter<85)
       this.suitable="S3";

    else if(this.valInter>=45 && this.valInter<60)
          this.suitable="S3";

    else if(this.valInter<45)
      this.suitable="N";
    
     u_var=this.valInter;  
     
    this.out="Interpolated Value : " + this.valInter + " " + "Suitability class by Sys Model: " + this.suitable;
    document.getElementById("land").innerHTML=this.out;
   }
  }

function wheatLimitrain1(rain1)
  {
    this.rain1=rain1;
   
    wheatLimitrain1.prototype.interPolate=function()
    {
      
      if(this.rain1<=700 && this.rain1>450)
      {
        this.valInter=86+ 0.02*(this.rain1);
        this.disp(this.valInter);
      }

      else if(this.rain1<=450 && this.rain1>350)
      {
        this.valInter=50 + 0.1*(this.rain1);
        this.disp(this.valInter);
      }

        else if(this.rain1<=350&& this.rain1>250)
      {
        this.valInter=0.25*(this.rain1) - 2.5;
        this.disp(this.valInter);
      }
      else if(this.rain1<=250 && this.rain1>200)
      {
        this.valInter=0.4*(this.rain1) - 40;
        this.disp(this.valInter);
      }
      
      else if(this.rain1<=200)
      {
        this.valInter=25-0.08*(this.rain1) ;
        this.disp(this.valInter);
      }
        
     else if(this.rain1>=700 && this.rain1<=1000)
      {
        this.valInter=111.67 - 0.017*(this.rain1);
        this.disp(this.valInter);
      }

      else if(this.rain1>1000 && this.rain1<=1250)
      {
        this.valInter=135 - 0.04*(this.rain1);
        this.disp(this.valInter);
      }

        else if(this.rain1<=1500&& this.rain1>1250)
      {
        this.valInter=210 - 0.1*(this.rain1);
        this.disp(this.valInter);
      }
      else if(this.rain1<=1750 && this.rain1>1500)
      {
        this.valInter=180 -0.08*(this.rain1) ;
        this.disp(this.valInter);
      }
      
      else if(this.rain>1750)
      {
        this.valInter=25-0.008*(this.rain1);
         this.disp(this.valInter);
       }

      
  }

  
  wheatLimitrain1.prototype.disp=function()
  { 
    if(this.valInter>=95 && this.valInter<=100)
      this.suitable="S1";

    else if(this.valInter>=85 && this.valInter<95)
       this.suitable="S2";

    else if(this.valInter>=60 && this.valInter<85)
       this.suitable="S3";

    else if(this.valInter>=45 && this.valInter<60)
          this.suitable="S3";
     else if(this.valInter<45)
         this.suitable="S3";   

   u2_var=this.valInter;
    
    this.out="Interpolated Value : " + this.valInter + " " + "Suitability class by Sys Model: " + this.suitable;
    
   }
  }

function wheatLimitMean1(temp1)
  {

    this.temp1=temp1;

    wheatLimitMean1.prototype.interPolate=function()
    {
            
      if(this.temp1>=18 && this.temp1<=20)
      {

        this.valInter=145 -2.5*(this.temp1);
        this.disp(this.valInter);

      }

      else if(this.temp1>20 && this.temp1<=23)
      {
        this.valInter=161.67 - 3.3*(this.temp1);
        this.disp(this.valInter);
      }

        else if(this.temp1<=25 && this.temp1>23)
      {
        this.valInter=372.5-12.5*(this.temp1);
        this.disp(this.valInter);
      }
      else if(this.temp1<=30 && this.temp1>25)
      {
        this.valInter=160 - 4*(this.temp1);
        this.disp(this.valInter);
      }
      
      else if(this.temp1>30 )
      {
        this.valInter= 30-0.5 *(this.temp1);
      this.disp(this.valInter);
      }
      
       else if(this.temp1<=18 && this.temp1>=15)
      {
        this.valInter=45.05 + 3.3*(this.temp1);
        this.disp(this.valInter);
      }

      else if(this.temp1>=12 && this.temp1<15)
      {
        this.valInter=45+3.33*(this.temp1);
        this.disp(this.valInter);
      }

        else if(this.temp1>=10 && this.temp1<12)
      {
        this.valInter= 12.5*(this.temp1) - 65;
        this.disp(this.valInter);
      }
      else if(this.temp1>=8 && this.temp1<10)
      {
        this.valInter=10*(this.temp1) - 40;
        this.disp(this.valInter);
      }
    else if(this.temp1<8)
      {
        this.valInter=10 + (this.temp1);
        this.disp(this.valInter);
      }
      
  }

  
  wheatLimitMean1.prototype.disp=function()
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
      
    
    um1_var=this.valInter;
    this.out="Interpolated Value : " + this.valInter + " " + "Suitability class by Sys Model: " + this.suitable;
    
    document.getElementById("mean4").innerHTML=user2.out + "<br>" + this.out;
   }
  }

function wheatLimitlength1(length1)
  {
    this.length1=length1;
   
    wheatLimitlength1.prototype.interPolate=function()
    {
      
      if(this.length1<180 && this.length1>=150)
      {
        this.valInter=102.5 - 0.017*(this.length1);
        this.disp(this.valInter);
      }

      else if(this.length1<150 && this.length1>=120)
      {
        this.valInter= 134.6- 0.33*(this.length1);
        this.disp(this.valInter);
      }

        else if(this.length1<120&& this.length1>=100)
      {
        this.valInter=160- 1.25*(this.length1);
        this.disp(this.valInter);
      }
      else if(this.length1>=80 && this.length1<100)
      {
        this.valInter=140 - this.length1;
        this.disp(this.valInter);
      }
       else if(this.length1<80)
      {
        this.valInter=0.47*(this.length1)-7.69;
        this.disp(this.valInter);
      }
      else if(this.length1>=180 && this.length1<=210)
      {
        this.valInter=154.4 - 0.33*(this.length1);
        this.disp(this.valInter);
      }

      else if(this.length1>210 && this.length1<=235)
      {
        this.valInter=435.7- 1.67*(this.length1);
        this.disp(this.valInter);
      }

        else if(this.length1<=250)
      {
        this.valInter=85 - ((this.length1-1250)/10);
        this.disp(this.valInter);
      }
 }
      wheatLimitlength1.prototype.disp=function()
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
    
       
       ul1_var=this.valInter;
    this.out="Interpolated Value : " + this.valInter + " " + "Suitability class by Sys Model: " + this.suitable;
    document.getElementById("len2").innerHTML=this.out;
     }
  }

function wheatLimitDrain(drainage)
  {
    this.drainage=drainage;
    wheatLimitDrain.prototype.findDrain=function()
    {
        if(this.drainage=="Imperfect")
      {
       this.suitable="S1";
         this.valInter=100;
        }

        else if(this.drainage=="Moderate")
        {
          this.suitable="S1";
          this.valInter=95;
        }

        else if(this.drainage=="Good")
        {
          this.suitable="S2";
          this.valInter=85;
        }
        else if(this.drainage=="Poor Aeric")
        {
          this.suitable="S3";
          this.valInter=60;
        }
        else if(this.drainage=="Very Poor")
        {
          this.suitable="S3"
          this.valInter=39.999;
        }
    
      
      ud_var=this.valInter;
        this.out="Interpolated Value : " + this.valInter + " " + "Suitability class by Sys Model: " + this.suitable;
    document.getElementById("drained").innerHTML=this.out;
     }
  }

function wheatLimitSoil(soilText)
   {
    this.soilText=soilText;
    var waterAvail=0;
    this.waterAvail=waterAvail;
    wheatLimitSoil.prototype.findSoil=function()
     {
      this.soiling(this.soilText);
     } 
      wheatLimitSoil.prototype.soiling=function()
     {
      
       if(this.soilText=="si"||this.soilText=="sil"||this.soilText=="cl"||this.soilText=="sicl"||this.soilText=="sic")
           this.waterAvail=1;
       if(this.soilText=="sc"||this.soilText=="l")
           this.waterAvail=2;
       if(this.soilText=="scl")
           this.waterAvail=3;
      if(this.soilText=="sl"||this.soilText=="l"||this.soilText=="sf")
        this.waterAvail="4";
       if(this.soilText=="lsc"||this.soilText=="s")
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
          this.valInter=39.999;
          this.suitable="N";
        }
    
    
       
           us_var=this.valInter;
       this.out="Interpolated Value : " + this.valInter + " "  +"Suitability class by Sys Model: " + this.suitable;
       
   }
    
 }

function wheatLimitDepth(depth)
  {
    this.depth=depth;
   
    wheatLimitDepth.prototype.interPolate=function()
    {
      
      if(this.depth>=65 && this.depth<=100)
      {
        this.valInter=109.28 - 0.14*(this.depth);
        this.disp(this.valInter);
      }

      else if(this.depth>=50 && this.depth<65)
      {
        this.valInter=128.3 - 0.67*(this.depth);
        this.disp(this.valInter);
      }

        else if(this.depth>=25 && this.depth<50)
      {
        this.valInter=110 - 0.67*(this.depth);
        this.disp(this.valInter);
      }
      else if(this.depth>=15 && this.depth>25)
        {
          this.valInter=75-2*(this.depth);
          this.disp(this.valInter);
        }

        else if(this.depth>0 && this.depth<15)
        {
          this.valInter=40-0.33*(this.depth);
          this.disp(this.valInter)
        }
  }
  wheatLimitDepth.prototype.disp=function()
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

        udep_var=this.valInter;
    this.out= "Interpolated Value : " + this.valInter + " " + "Suitability class by Sys Model: " + this.suitable;
    
    

   }
  }

function wheatLimitCal(calCarboante)
  {
    this.calCarboante=calCarboante;
   
    wheatLimitCal.prototype.interPolate=function()
    {
      
      if(this.calCarboante>0 && this.calCarboante<10)
      {
        this.valInter=100 - 0.5*(this.calCarboante);
        this.disp(this.valInter);
      }

      else if(this.calCarboante>=10 && this.calCarboante<25)
      {
        this.valInter=161.6 - 6.66*(this.calCarboante);
        this.disp(this.valInter);
      }

        else if(this.calCarboante>=25 && this.calCarboante<30)
      {
        this.valInter=205 - 5*(this.calCarboante);
        this.disp(this.valInter);
      }
      else if(this.calCarboante>=30 && this.calCarboante<35)
        {
          this.valInter=180-4*(this.calCarboante);
          this.disp(this.valInter);
        }

        else if(this.calCarboante>=35)
        {
          this.valInter=180-4*(this.calCarboante);
          this.disp(this.valInter);
        }
  }
  wheatLimitCal.prototype.disp=function()
  {
    if(this.valInter>=95 && this.valInter<=100)
          this.suitable="S1";
        
    else if(this.valInter>=85 && this.valInter<95)
       this.suitable="S1";
    else if(this.valInter>=60 && this.valInter<45)
       this.suitable="S2";

    else if(this.valInter>=45 && this.valInter<60)
          this.suitable="S3";
     
     else if(this.valInter<45)
          this.suitable="N";

        uc_var=this.valInter;
     this.out="Interpolated Value : " + this.valInter + " " +  "Suitability class by Sys Model: " + this.suitable;
    document.getElementById("calc").innerHTML=Soil1.out + "<br>" +deep1.out+ "<br>" + this.out;
   
    

   }
  }

  function wheatLimitCec(cec)
  {
    this.cec=cec;
   
    wheatLimitCec.prototype.interPolate=function()
    {
      
      if(this.cec>=20)
      {
        this.valInter=124-1.25*(this.cec);
        this.disp(this.valInter);
      }

      else if(this.cec<20 && this.cec>=16)
      {
        this.valInter=135 - 2.5*(this.cec);
        this.disp(this.valInter);
      }

      else if(this.cec>=10 && this.cec<16)
      {
        this.valInter=147.5 - 6.25*(this.cec);
        this.disp(this.valInter);
      }

        else if(this.cec>=8 && this.cec<10)
      {
        this.valInter=140 - 10*(this.cec);
        this.disp(this.valInter);
      }
      else if(this.cec>0 && this.cec<8)
        {
          this.valInter=180-4*(this.cec);
          this.disp(this.valInter);
        }
  }
  wheatLimitCec.prototype.disp=function()
  {
    if(this.valInter>=95 && this.valInter<=100)
          this.suitable="S1";
        
    else if(this.valInter>=85 && this.valInter<95)
       this.suitable="S1";

    else if(this8valInter>=60 && this.valInter<85)
       this.suitable="S2";

    else if(this.valInter>=45 && this.valInter<60)
          this.suitable="S3";

  else if(this.valInter<45)
     this.suitable="N";
    
    
    uc2_var=this.valInter;
    this.out="Interpolated Value : " + this.valInter + " " + "Suitability class by Sys Model: " + this.suitable;
   
   }
  }

  function wheatLimitBase(baseSaturate)
  {
    this.baseSaturate=baseSaturate;
   
    wheatLimitBase.prototype.interPolate=function()
    {
      
      if(this.baseSaturate>=80)
      {
        this.valInter=120-0.25*(this.baseSaturate);
        this.disp(this.valInter);
      }

     else if(this.baseSaturate>=50 && baseSaturate<80)
      {
        this.valInter=261.5 - 3.33*(this.baseSaturate);
        this.disp(this.valInter);
      }

      else if(this.baseSaturate>=35 && this.baseSaturate<50)
      {
        this.valInter=143.3 - 1.67*(this.baseSaturate);
        this.disp(this.valInter);
      }

        else if(this.baseSaturate>=20 && this.baseSaturate<35)
      {
        this.valInter=86.6 - 1.33*(this.baseSaturate);
        this.disp(this.valInter);
      }

      else if(this.baseSaturate<20)
      {
        this.valInter=100-4*(this.baseSaturate);
        this.disp(this.valInter);
      }
      
  }
  wheatLimitBase.prototype.disp=function()
  {
    if(this.valInter>=95 && this.valInter<=100)
          this.suitable="S1";
        
    else if(this.valInter>=85 && this.valInter<95)
       this.suitable="S2";

    else if(this.valInter>=60 && this.valInter<85)
       this.suitable="S2";

    else if(this.valInter>=45 && this.valInter<60)
          this.suitable="S3";
  
    else if(this.valInter<45)
           this.suitable="N";
 
      ub_var=this.valInter;
    this.out="Interpolated Value : " + this.valInter + " " + "Suitability class by Sys Model: " + this.suitable;
   
   }
  }

function wheatLimitOrganic(organicCarb)
  {
    this.organicCarb=organicCarb;
   
    wheatLimitOrganic.prototype.interPolate=function()
    {
      
      if(this.organicCarb>=0.6 && this.organicCarb<=0.7)
      {
        this.valInter=130 - 50*(this.organicCarb);
        this.disp(this.valInter);
      }

      else if(this.organicCarb>=0.5 && this.organicCarb<0.6)
      {
        this.valInter=145 - 100*(this.organicCarb);
        this.disp(this.valInter);
      }

        else if(this.organicCarb>=0.4 && this.organicCarb<0.5)
      {
        this.valInter=150 - 250*(this.organicCarb);
        this.disp(this.valInter);
      }

      else if(this.organicCarb>=0.3 && organicCarb<0.4)
      {
        this.valInter=120 - 200*(this.organicCarb);
        this.disp(this.valInter);
      }
      
      else if(this.organicCarb<0.3)
      {
        this.valInter=120-200*(this.organicCarb);
        this.disp(this.valInter);
      }
  }
  wheatLimitOrganic.prototype.disp=function()
  {
    if(this.valInter>=95 && this.valInter<=100)
          this.suitable="S1";
        
    else if(this.valInter>=85 && this.valInter<95)
       this.suitable="S1";

    else if(this8valInter>=60 && this.valInter<85)
       this.suitable="S2";

    else if(this.valInter>=45 && this.valInter<60)
          this.suitable="S3";
       else if(this.valInter<45)
        this.suitable="N";

      uo_var=this.valInter;
    this.out="Interpolated Value : " + this.valInter +" \tSuitability class by Sys Model: " + this.suitable;
   
   }
  }

function wheatLimitpH1(pH1)
  {
    this.pH1=pH1;
   
    wheatLimitpH1.prototype.interPolate=function()
    {
      
      if(this.pH1<7.5 && this.pH1>=6.5)
      {
        this.valInter=132.5 -5.5*(this.pH1);
        this.disp(this.valInter);
      }

      else if(this.pH1<=8.5 && this.pH1>=7.6)
      {
        this.valInter=179.44 - 111.11*(this.pH1);
        this.disp(this.valInter);
      }

        else if(this.pH1>=8.6&& this.pH1<=9)
      {
        this.valInter=622.5-62.5*(this.pH1);
        this.disp(this.valInter);
      }
      else if(this.pH1<10 && this.pH1>=9)
      {
        this.valInter=240-20*(this.pH1);
        this.disp(this.valInter);
      }
      else if(this.perSlope>=10)
      {
        this.valInter=0.47*(this.pH1)-7.69;
        this.disp(this.valInter);
      }

    else if(this.pH1>=5.5 && this.pH1<=6.4)
      {
        this.valInter=220 - 27.78*(this.pH1);
        this.disp(this.valInter);
      }

      else if(this.pH1>=4.5 && this.pH1<=5.4)
      {
        this.valInter=160 - 22.22*(this.pH1);
        this.disp(this.valInter);
      }

        else if(this.pH1<=4.5)
      {
        this.valInter=85 - ((this.pH1-1250)/10);
        this.disp(this.valInter);
      }
          
  }

  


  wheatLimitpH1.prototype.disp=function()
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

    up_var=this.valInter;
    this.out="Interpolated Value : " + this.valInter + " " +  "Suitability class by Sys Model: " + this.suitable;
   
      
    document.getElementById("ph01").innerHTML=cec1.out + "<br>" + base1.out+ "<br>" + car1.out + "<br>"+this.out;
   }
  }

  function wheatLimitEC(ec)
  {
    this.ec=ec;
   
    wheatLimitEC.prototype.interPolate=function()
    {
      
      if(this.ec<4 && this.ec>0)
      {
        this.valInter=100 -1.25*(this.ec);
        this.disp(this.valInter);
      }

      else if(this.ec>=4 && this.ec<6)
      {
        this.valInter=115 - 5*(this.ec);
        this.disp(this.valInter);
      }

        else if(this.ec>=6&& this.ec<8)
      {
        this.valInter=160-12.5*(this.ec);
        this.disp(this.valInter);
      }
      else if(this.ec<10 && this.ec>=8)
      {
        this.valInter=140 - 10*(this.ec);
        this.disp(this.valInter);
      }
      else if(this.ec>=10)
      {
        this.valInter=80-4*(this.ec);
        this.disp(this.valInter);
      }
      
  }
  wheatLimitEC.prototype.disp=function()
  {
    if(this.valInter>=95 && this.valInter<=100)
      this.suitable="S1";

    else if(this.valInter>=85 && this.valInter<95)
       this.suitable="S1";

    else if(this8valInter>=60 && this.valInter<85)
       this.suitable="S2";

    else if(this.valInter>=45 && this.valInter<60)
          this.suitable="S3";
     else if(this.valInter<45)
      this.suitable="N";
   
       ue_var=this.valInter;
    this.out="Interpolated Value : " + this.valInter + " " +  "Suitability class by Sys Model: " + this.suitable;
    
   }
  }

  function wheatLimitNaconc(naConc)
  {
    this.naConc=naConc;
   
    wheatLimitNaconc.prototype.interPolate=function()
    {
      
      if(this.naConc>0 && this.naConc<=15)
      {
        this.valInter=100 - 0.33*(this.naConc);
        this.disp(this.valInter);
      }

      else if(this.naConc>15 && this.naConc<=20)
      {
        this.valInter=125 - 2*(this.naConc);
        this.disp(this.valInter);
      }

        else if(this.naConc>20&& this.naConc<=30)
      {
        this.valInter=140 - 2.5*(this.naConc);
        this.disp(this.valInter);
      }
      else if(this.naConc>30 && this.naConc<=40)
      {
        this.valInter=120-2*(this.naConc);
        this.disp(this.valInter);
      }
      
      else if(this.naConc>=40 )
      {
        this.valInter=80-(this.naConc);
        this.disp(this.valInter);
      }
      
  }

  
  wheatLimitNaconc.prototype.disp=function()
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
     
    
    un_var=this.valInter;
    this.out="Interpolated Value : " + this.valInter + " " + "Suitability class by Sys Model: " + this.suitable;
    document.getElementById("na01").innerHTML=userEC.out + "<br>" + this.out;
   }
  }



function calTopo()
{
  var perSlope=document.getElementById("perSlope").value;
   
  user=new wheatLimitTopo(perSlope);
  user.interPolate();
}

function calrain1()
{
  var rain1=document.getElementById("rainfall").value;

  user2=new wheatLimitrain1(rain1);
  user2.interPolate();
}

function calmean1()
{
  var temp1=document.getElementById("temp").value;
   
  userMean1=new wheatLimitMean1(temp1);
  userMean1.interPolate();
}


function callength1()
{
  var length1=document.getElementById("length_growing").value;

  waterAvail=new wheatLimitlength1(length1);
  waterAvail.interPolate();
}

function calcDrain()
   {
     var drainage=document.getElementById("drain").value; 
     wet=new wheatLimitDrain(drainage);
     wet.findDrain();
    }

function calcSoil()
  {
    var soilTexture=document.getElementById("texture").value;
     Soil1=new wheatLimitSoil(soilTexture);
     Soil1.findSoil();

  }

     function calcDepth()
{
  var Depth=document.getElementById("depth").value;
  deep1=new wheatLimitDepth(Depth);
  deep1.interPolate();
}

function calccal()
{
  var calCarboante=document.getElementById("caco3").value;
  cal1=new wheatLimitCal(calCarboante);
  cal1.interPolate();
}  
 function calCec()
{
  var cec=document.getElementById("cec").value;
  cec1=new wheatLimitCec(cec);
  cec1.interPolate();
}

function calBase()
{
  var baseSaturate=document.getElementById("base_saturation").value;
  base1=new wheatLimitBase(baseSaturate);
  base1.interPolate();
}

 function calCarb()
{
  var organicCarb=document.getElementById("organic_carbon").value;
  car1=new wheatLimitOrganic(organicCarb);
  car1.interPolate();
}   
function calpH1()
{
  var pH1=document.getElementById("ph").value;

  userpH1=new wheatLimitpH1(pH1);
  userpH1.interPolate();
}

function calec()
{
  var ec=document.getElementById("ec_dsm").value;

  userEC=new wheatLimitEC(ec);
  userEC.interPolate();
}

function calnaConc()
{
  var naConc=document.getElementById("na_conc").value;

  userNA=new wheatLimitNaconc(naConc);
  userNA.interPolate();
}


function calLRI()
{
   
   lri = u_var * ( (u2_var)/100 ) * ( (um1_var)/100 ) * ( (ul1_var)/100 ) * ( (ud_var)/100) * ( (us_var)/100 ) * ((udep_var)/100) * ( (uc_var)/100 )*( (uc2_var)/100 ) * ( (ub_var)/100 ) *     ( (uo_var)/100 ) * ( (up_var)/100 ) * ( (ue_var)/100 ) *   ( (un_var)/100);
    
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
 
}