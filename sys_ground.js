  
// some global variable to use in rest of the script

var u_var = '0';
var u2_var = '0';
var um1_var = '0';
var ul1_var = '0';
var uw_var = "0"
var ud_var = '0';
var us_var = '0';
var udep_var = '0';
var uc_var = '0';
var uc2_var = '0';
var ub_var = '0';
var uo_var = '0';
var up_var = '0';
var ue_var = '0 ';
var un_var = '0';

var data =[] ;
 

 //function for reducing Interpolated values to 2 digits after decimal without rounding off
 
 function floorFigure(figure, decimals){
    if (!decimals) decimals = 4;
    var d = Math.pow(10,decimals);
    return (parseInt(figure*d)/d).toFixed(decimals);
};


function wheatLimitTopo(perSlope){
    
    this.perSlope=perSlope;
        
    wheatLimitTopo.prototype.interPolate=function(){
      
        
        if(this.perSlope>=0 && this.perSlope<2){
        
            this.valInter = 100 - ( 2.5 * this.perSlope );
            this.disp(this.valInter);
        }

        else if( this.perSlope>=2 && this.perSlope<4 ){
            
            this.valInter=105 - (5 * this.perSlope);
            this.disp(this.valInter);
        }

        else if(this.perSlope>=4 && this.perSlope<8)
      {
        this.valInter=110-6.25*(this.perSlope);
        this.disp(this.valInter);
      }
      else if(this.perSlope>=8 && this.perSlope<16)
      {
        this.valInter=75-1.875*(this.perSlope);
        this.disp(this.valInter);
      }
      else if(this.perSlope>16)
      {
        this.valInter=44.99 ;
        this.disp(this.valInter);
      }

      u_var = this.valInter.toFixed(2);
      data[0] = u_var ;
      
  }

  wheatLimitTopo.prototype.disp=function()
  {
   if(this.valInter>85 && this.valInter <=100)
          this.suitable="S1";
        
    else if(this.valInter>=60 && this.valInter<=85)
       this.suitable="S2";

    else if(this.valInter>=45 && this.valInter<60)
       this.suitable="S3";

    else if(this.valInter<45)
          this.suitable="N";
        data[1] = this.suitable ;
        this.out="Interpolated Value : " + this.valInter + " " + "Suitability class by Sys Model: " + this.suitable;
    document.getElementById("land").innerHTML=this.out;
    document.getElementById("ps_data").innerHTML=this.valInter.toFixed(2);;
    document.getElementById("ps_suit").innerHTML=this.suitable;


   }
  }

function wheatLimitrain1(rain1)
  {
    
    this.rain1=rain1;
   
    wheatLimitrain1.prototype.interPolate=function()
    {
      
      if(this.rain1<=700 && this.rain1>500)
      {
        this.valInter=82.5+ 0.025*(this.rain1);
        this.disp(this.valInter);
      }

      else if(this.rain1<=500 && this.rain1>400)
      {
        this.valInter=45 + 0.1*(this.rain1);
        this.disp(this.valInter);
      }

        else if(this.rain1<=400&& this.rain1>300)
      {
        this.valInter=0.25*(this.rain1) - 15;
        this.disp(this.valInter);
      }
      else if(this.rain1<=300 && this.rain1>200)
      {
        this.valInter=0.15*(this.rain1) +15;
        this.disp(this.valInter);
      }
      
      else if(this.rain1<=200)
      {
        this.valInter= 44.99 ;
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

        else if(this.rain1<1600&& this.rain1>=1100)
      {
        this.valInter=140 - 0.05*(this.rain1);
        this.disp(this.valInter);
      }
      else if(this.rain1<1900 && this.rain1>=1600)
      {
        this.valInter=140 -0.05*(this.rain1) ;
        this.disp(this.valInter);
      }
      
      else if(this.rain>=1900)
      {
        this.valInter= 44.99;
         this.disp(this.valInter);
       }

       u2_var = this.valInter.toFixed(2);
       data[2] = u2_var ;
  }

  
  wheatLimitrain1.prototype.disp=function()
  { 
    if(this.valInter>85 && this.valInter <=100)
          this.suitable="S1";
        
    else if(this.valInter>=60 && this.valInter<=85)
       this.suitable="S2";

    else if(this.valInter>=45 && this.valInter<60)
       this.suitable="S3";

    else if(this.valInter<45)
          this.suitable="N";

    data[3] = this.suitable ;  
    this.out="Interpolated Value : " + this.valInter + " " + "Suitability class by Sys Model: " + this.suitable;
    document.getElementById("rf_data").innerHTML=this.valInter.toFixed(2);;
    document.getElementById("rf_suit").innerHTML=this.suitable;
    
   }
  }

function wheatLimitMean1(temp1)
  {

    this.temp1=temp1;

    wheatLimitMean1.prototype.interPolate=function()
    {
            
      if(this.temp1<=24 && this.temp1>22)
      {
        //alert("her1")

        this.valInter=2.5*(this.temp1) + 40; 
        this.disp(this.valInter);

      }

      else if(this.temp1>18 && this.temp1<=22)
      {
        //alert("her2")

        this.valInter= 2.5*(this.temp1) - 40;
        this.disp(this.valInter);
      }

        else if(this.temp1>=22 && this.temp1<24)
      {
      //  alert("her3")

        this.valInter=360-12.5*(this.temp1);
        this.disp(this.valInter);
      }
      else if(this.temp1<=14 && this.temp1>10)
      {
        //alert("her4")

        this.valInter=7.5 + 3.75*(this.temp1);
        this.disp(this.valInter);
      }
      
      else if(this.temp1<=10 )
      {
        //alert("her5")

        this.valInter= 44.99;
      this.disp(this.valInter);
      }

       else if(this.temp1>=24 && this.temp1<26)
      
{     
        //alert("her6")

        this.valInter=160 - 2.5*(this.temp1);
        this.disp(this.valInter);
      }

      else if(this.temp1>=26 && this.temp1<30)
      {
        //alert("her7")
        this.valInter=160 - 2.5*(this.temp1);
        this.disp(this.valInter);
      }

        else if(this.temp1>=30 && this.temp1 < 34 )
      { // alert("her8")
      
        this.valInter= -6.25*(this.temp1) + 272.5;
        this.disp(this.valInter);
      }

      else if(this.temp1>=34 )
      {  //alert("her9")
      
        this.valInter= -2.5*(this.temp1) + 145;
        this.disp(this.valInter);
      }
      
       um1_var = this.valInter.toFixed(2);
       data[4] = um1_var ;
  }

  
  wheatLimitMean1.prototype.disp=function()
  {
    if(this.valInter>85 && this.valInter <=100)
          this.suitable="S1";
        
    else if(this.valInter>=60 && this.valInter<=85)
       this.suitable="S2";

    else if(this.valInter>=45 && this.valInter<60)
       this.suitable="S3";

    else if(this.valInter<45)
          this.suitable="N";
    this.out="Interpolated Value : " + this.valInter + " " + "Suitability class by Sys Model: " + this.suitable;
    data[5] = this.suitable ;
    document.getElementById("mt_data").innerHTML=this.valInter.toFixed(2);
    document.getElementById("mt_suit").innerHTML=this.suitable;

   }
  }

function wheatLimitlength1(length1)
  {
    this.length1=length1;
   
    wheatLimitlength1.prototype.interPolate=function()
    {
      
      if(this.length1<=140 && this.length1>=120)
      {
        this.valInter=0.25*(this.length1) + 65;
        this.disp(this.valInter);
      }

      else if(this.length1<120 && this.length1>=110)
      {
        this.valInter=  1*(this.length1) - 35;
        this.disp(this.valInter);
      }

        else if(this.length1<110&& this.length1>=100)
      {
        this.valInter= 2.5*(this.length1) - 190;
        this.disp(this.valInter);
      }
      else if(this.length1>=90 && this.length1<100)
      {
        this.valInter=1.5*this.length1 - 90;
        this.disp(this.valInter);
      }
       
     ul1_var = this.valInter.toFixed(2);
     data[6] = ul1_var ;
 }
      wheatLimitlength1.prototype.disp=function()
  {
    if(this.valInter>85 && this.valInter <=100)
          this.suitable="S1";
        
    else if(this.valInter>=60 && this.valInter<=85)
       this.suitable="S2";

    else if(this.valInter>=45 && this.valInter<60)
       this.suitable="S3";

    else if(this.valInter<45)
          this.suitable="N";

    this.out="Interpolated Value : " + this.valInter + " " + "Suitability class by Sys Model: " + this.suitable;
  data[7] = this.suitable ;
    document.getElementById("mean4").innerHTML=user2.out + "<br>" + userMean1.out +"<br>"+ this.out;
    document.getElementById("l1_data").innerHTML=this.valInter.toFixed(2);
    document.getElementById("l1_suit").innerHTML=this.suitable;

     }
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
    if(this.valInter>85 && this.valInter <=100)
          this.suitable="S1";
        
    else if(this.valInter>=60 && this.valInter<=85)
       this.suitable="S2";

    else if(this.valInter>=45 && this.valInter<60)
       this.suitable="S3";

    else if(this.valInter<45)
          this.suitable="N";
    data[9] =this.suitable;    
    this.out="Interpolated Value : " + this.valInter + " " + "Suitability class by Sys Model: " + this.suitable;
    document.getElementById("water").innerHTML=this.out;
    document.getElementById("w1_data").innerHTML=this.valInter.toFixed(2);
    document.getElementById("w1_suit").innerHTML=this.suitable;

     }
  }
function wheatLimitDrain(drainage)
  {
    this.drainage=drainage;
    wheatLimitDrain.prototype.findDrain=function()
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
          this.suitable="S3"
          this.valInter=44.99;
        }
         ud_var = this.valInter.toFixed(2);
         data[10] = ud_var;
         data[11] = this.suitable;
        this.out="Interpolated Value : " + this.valInter + " " + "Suitability class by Sys Model: " + this.suitable;
    document.getElementById("drained").innerHTML=this.out;
    document.getElementById("dr_data").innerHTML=this.valInter.toFixed(2);;
    document.getElementById("dr_suit").innerHTML=this.suitable;

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
      
       if(this.soilText=="l"||this.soilText=="scl"||this.soilText=="sl")
           this.waterAvail=1;
       if(this.soilText=="sicl"||this.soilText=="sil"||this.soilText=="co"||this.soilText=="si"||this.soilText=="sc"||this.soilText=="cl")
           this.waterAvail=2;
       if(this.soilText=="C<60"||this.soilText=="s"||this.soilText=="lfs"||this.soilText=="ls"||this.soilText=="sics")
           this.waterAvail=3;
      if(this.soilText=="C>60"||this.soilText=="fs"||this.soilText=="s"||this.soilText=="lcs")
        this.waterAvail="4";
       if(this.soilText=="cm"||this.soilText=="sicm")
         this.waterAvail=5;
      if(this.waterAvail==1)
         {
          this.suitable="S1";
          this.valInter=100;
        }
      else if(this.waterAvail==2)
       {
        this.suitable="S1";
        this.valInter=75;
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
          this.valInter= 44.99;
          this.suitable="N";
        }
        us_var = this.valInter.toFixed(2);
        data[12] = us_var ;
        data[13] = this.suitable ;
       this.out="Interpolated Value : " + this.valInter + " "  +"Suitability class by Sys Model: " + this.suitable;
    document.getElementById("tex_data").innerHTML=this.valInter.toFixed(2);;
    document.getElementById("tex_suit").innerHTML=this.suitable;

       
   }
    
 }

function wheatLimitDepth(depth)
  {
    this.depth=depth;
   
    wheatLimitDepth.prototype.interPolate=function()
    {
      
      if(this.depth>=75 && this.depth<=100)
      {
        this.valInter= 80 + 0.2*(this.depth);
        this.disp(this.valInter);
      }

      else if(this.depth>=50 && this.depth<75)
      {
        this.valInter= 65 +  0.4*(this.depth);
        this.disp(this.valInter);
      }

        else if(this.depth>=35 && this.depth<50)
      {
        this.valInter= 1.66666666667 +(5/3)*(this.depth);
        this.disp(this.valInter);
      }
      else if(this.depth>=25 && this.depth<35)
        {
          this.valInter=7.5 + 1.5*(this.depth);
          this.disp(this.valInter);
        }

        else if(this.depth<25)
        {
          this.valInter= 44.99 ;
          this.disp(this.valInter)
        }

  }
  wheatLimitDepth.prototype.disp=function()
  {
   if(this.valInter>85 && this.valInter <=100)
          this.suitable="S1";
        
    else if(this.valInter>=60 && this.valInter<=85)
       this.suitable="S2";

    else if(this.valInter>=45 && this.valInter<60)
       this.suitable="S3";

    else if(this.valInter<45)
          this.suitable="N";

       udep_var = this.valInter.toFixed(2); 
       data[14] = udep_var;
       data[15] = this.suitable ; 
        this.out= "Interpolated Value : " + this.valInter + " " + "Suitability class by Sys Model: " + this.suitable;
      document.getElementById("dep_data").innerHTML=this.valInter.toFixed(2);;
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
        this.valInter=104.231- 0.769*(this.calCarboante);
        this.disp(this.valInter);
      }

        else if(this.calCarboante>=25 && this.calCarboante<35)
      {
        this.valInter=147.5 - 2.5*(this.calCarboante);
        this.disp(this.valInter);
      }
      else if(this.calCarboante>=35 && this.calCarboante<50)
        {
          this.valInter= 95 - (this.calCarboante);
          this.disp(this.valInter);
        }

        else if(this.calCarboante>=50)
        {
          this.valInter= 44.99;
          this.disp(this.valInter);
        }
         uc_var = this.valInter.toFixed(2);
         data[16] = uc_var ;
  }
  wheatLimitCal.prototype.disp=function()
  {
if(this.valInter>85 && this.valInter <=100)
          this.suitable="S1";
        
    else if(this.valInter>=60 && this.valInter<=85)
       this.suitable="S2";

    else if(this.valInter>=45 && this.valInter<60)
       this.suitable="S3";

    else if(this.valInter<45)
          this.suitable="N";

     this.out="Interpolated Value : " + this.valInter + " " +  "Suitability class by Sys Model: " + this.suitable;
    document.getElementById("calc").innerHTML=Soil1.out + "<br>" +deep1.out+ "<br>" + this.out;
    document.getElementById("caco3_data").innerHTML=this.valInter.toFixed(2);
    document.getElementById("caco3_suit").innerHTML=this.suitable
    data[17] = this.suitable ;

   }
  }

  function wheatLimitCec(cec)
  {
    this.cec=cec;
   
    wheatLimitCec.prototype.interPolate=function()
    {
      
      if(this.cec<=16)
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

        else if(this.cec>=22)
      {
        this.valInter=101.25 - 1.875*(this.cec);
        this.disp(this.valInter);
      }
     
         uc2_var = this.valInter.toFixed(2);
         data[18] = uc2_var ;
  }
  wheatLimitCec.prototype.disp=function()
  {
   if(this.valInter>85 && this.valInter <=100)
          this.suitable="S1";
        
    else if(this.valInter>=60 && this.valInter<=85)
       this.suitable="S2";

    else if(this.valInter>=45 && this.valInter<60)
       this.suitable="S3";

    else if(this.valInter<45)
          this.suitable="N";
        data[19] = this.suitable ;
    this.out="Interpolated Value : " + this.valInter + " " + "Suitability class by Sys Model: " + this.suitable;
    document.getElementById("cec_data").innerHTML=this.valInter.toFixed(2);;
    document.getElementById("cec_suit").innerHTML=this.suitable;

   
   }
  }

  function wheatLimitBase(baseSaturate)
  {
    this.baseSaturate=baseSaturate;
   
    wheatLimitBase.prototype.interPolate=function()
    {
      
      if(this.baseSaturate>=50)
      {
        this.valInter=90 + 0.1*(this.baseSaturate);
        this.disp(this.valInter);
      }

     else if(this.baseSaturate<=50 && baseSaturate>40)
      {
        this.valInter=45 + 1*(this.baseSaturate);
        this.disp(this.valInter);
      }

      else if(this.baseSaturate>35 && this.baseSaturate<=40)
      {
        this.valInter= 5*(this.baseSaturate) - 115;
        this.disp(this.valInter);
      }

        else if(this.baseSaturate<=35)
      {
        this.valInter=45 + 0.428*(this.baseSaturate);
        this.disp(this.valInter);
      }

      
       ub_var = this.valInter.toFixed(2);
       data[20] = ub_var;
  }
  wheatLimitBase.prototype.disp=function()
  {
   if(this.valInter>85 && this.valInter <=100)
          this.suitable="S1";
        
    else if(this.valInter>=60 && this.valInter<=85)
       this.suitable="S2";

    else if(this.valInter>=45 && this.valInter<60)
       this.suitable="S3";

    else if(this.valInter<45)
          this.suitable="N";

    data[21] = this.suitable ;    
   this.out="Interpolated Value : " + this.valInter + " " + "Suitability class by Sys Model: " + this.suitable;
    document.getElementById("base_data").innerHTML=this.valInter.toFixed(2);;
    document.getElementById("base_suit").innerHTML=this.suitable;
   
   }
  }

function wheatLimitOrganic(organicCarb)
  {
    this.organicCarb=organicCarb;
   
    wheatLimitOrganic.prototype.interPolate=function()
    {
      
      if(this.organicCarb>=2.0 && this.organicCarb<=5)
      {
        this.valInter=91.66667 + 1.6667*(this.organicCarb);
        this.disp(this.valInter);
      }

      else if(this.organicCarb>1.2 && this.organicCarb<=2)
      {
        this.valInter=70 + 12.5*(this.organicCarb);
        this.disp(this.valInter);
      }

        else if(this.organicCarb>0.8 && this.organicCarb<=1.2)
      {
        this.valInter=10 + 62.5*(this.organicCarb);
        this.disp(this.valInter);
      }

      else if(this.organicCarb<=0.8)
      {
        this.valInter=45 + 18.75*(this.organicCarb);
        this.disp(this.valInter);
      }
      
     
       uo_var = this.valInter.toFixed(2);
       data[22] = uo_var;
  }
  wheatLimitOrganic.prototype.disp=function()
  {
 if(this.valInter>85 && this.valInter <=100)
          this.suitable="S1";
        
    else if(this.valInter>=60 && this.valInter<=85)
       this.suitable="S2";

    else if(this.valInter>=45 && this.valInter<60)
       this.suitable="S3";

    else if(this.valInter<45)
          this.suitable="N";
        data[23] = this.suitable;
    this.out="Interpolated Value : " + this.valInter +" \tSuitability class by Sys Model: " + this.suitable;
    document.getElementById("org_data").innerHTML=this.valInter.toFixed(2);;
    document.getElementById("org_suit").innerHTML=this.suitable;
   
   }
  }

function wheatLimitpH1(pH1)
  {
    this.pH1=pH1;
   
    wheatLimitpH1.prototype.interPolate=function()
    {
      
      if(this.pH1<=6.8 && this.pH1>6.5)
      {
        this.valInter=13.33 - 16.67*(this.pH1);
        this.disp(this.valInter);
      }

      else if(this.pH1<=6.5 && this.pH1>6.0)
      {
        this.valInter= 20*(this.pH1) - 35;
        this.disp(this.valInter);
      }

        else if(this.pH1>=6.0&& this.pH1<5.6)
      {
        this.valInter=62.5*(this.pH1) - 290;
        this.disp(this.valInter);
      }
      else if(this.pH1<=5.6 && this.pH1>5.4)
      {
        this.valInter=20*(this.pH1) - 35;
        this.disp(this.valInter);
      }
      else if(this.pH1<=5.4)
      {
        this.valInter= 44.99;
        this.disp(this.valInter);
      }

    else if(this.pH1>=6.8 && this.pH1<7.0)
      {
        this.valInter=270 - 2.5*(this.pH1);
        this.disp(this.valInter);
      }

      else if(this.pH1>=7.0 && this.pH1<7.5)
      {
        this.valInter=235 - 20*(this.pH1);
        this.disp(this.valInter);
      }

        else if(this.pH1>=7.5 && this.pH1<8.0)
      {
        this.valInter=460 - 50*(this.pH1);
        this.disp(this.valInter);
      }
       else if(this.pH1>=8.0 && this.pH1<8.2)
      {
        this.valInter=660 - 75*(this.pH1);
        this.disp(this.valInter);
      }
           else if(this.pH1>=8.2 )
      {
        this.valInter=44.99;
        this.disp(this.valInter);
      }
          
          
           up_var = this.valInter.toFixed(2);
           data[24] = up_var;
  }

  


  wheatLimitpH1.prototype.disp=function()
  {
if(this.valInter>85 && this.valInter <=100)
          this.suitable="S1";
        
    else if(this.valInter>=60 && this.valInter<=85)
       this.suitable="S2";

    else if(this.valInter>=45 && this.valInter<60)
       this.suitable="S3";

    else if(this.valInter<45)
          this.suitable="N";
    data[25] = this.suitable;    
    this.out="Interpolated Value : " + this.valInter + " " +  "Suitability class by Sys Model: " + this.suitable;
    document.getElementById("ph01").innerHTML=cec1.out + "<br>" + base1.out+ "<br>" + car1.out + "<br>"+this.out;
    document.getElementById("ph_data").innerHTML=this.valInter.toFixed(2);;
    document.getElementById("ph_suit").innerHTML=this.suitable;
  
   }
  }

  function wheatLimitEC(ec)
  {
    this.ec=ec;
   
    wheatLimitEC.prototype.interPolate=function()
    {
      
      if(this.ec<2&& this.ec>=0)
      {
        this.valInter=100 - 2.5*(this.ec);
        this.disp(this.valInter);
      }

      else if(this.ec>=2 && this.ec<4)
      {
        this.valInter=105 - 5*(this.ec);
        this.disp(this.valInter);
      }

        else if(this.ec>=4&& this.ec<6)
      {
        this.valInter=110-12.5*(this.ec);
        this.disp(this.valInter);
      }
      else if(this.ec<8 && this.ec>=6)
      {
        this.valInter=105 - 7.5*(this.ec);
        this.disp(this.valInter);
      }
      else if(this.ec>=8)
      {
        this.valInter=44.99;
        this.disp(this.valInter);
      }
      ue_var = this.valInter.toFixed(2);
      data[26] = ue_var;
  }
  wheatLimitEC.prototype.disp=function()
  {
if(this.valInter>85 && this.valInter <=100)
          this.suitable="S1";
        
    else if(this.valInter>=60 && this.valInter<=85)
       this.suitable="S2";

    else if(this.valInter>=45 && this.valInter<60)
       this.suitable="S3";

    else if(this.valInter<45)
          this.suitable="N";
data[27] = this.suitable;
   this.out="Interpolated Value : " + this.valInter + " " +  "Suitability class by Sys Model: " + this.suitable;
    document.getElementById("ec_data").innerHTML=this.valInter.toFixed(2);;
    document.getElementById("ec_suit").innerHTML=this.suitable;
    
   }
  }

  function wheatLimitNaconc(naConc)
  {
    this.naConc=naConc;
   
    wheatLimitNaconc.prototype.interPolate=function()
    {
      
      if(this.naConc>=0 && this.naConc<8)
      {
        this.valInter=100 - 0.625*(this.naConc);
        this.disp(this.valInter);
      }

      else if(this.naConc>=8 && this.naConc<10)
      {
        this.valInter=135 - 5*(this.naConc);
        this.disp(this.valInter);
      }

        else if(this.naConc>=10&& this.naConc<15)
      {
        this.valInter=135 - 5*(this.naConc);
        this.disp(this.valInter);
      }
      else if(this.naConc>=15 && this.naConc<20)
      {
        this.valInter=105-3*(this.naConc);
        this.disp(this.valInter);
      }
      
      else if(this.naConc>=20 && this.naConc <=25 )
      {
        this.valInter= 44.99;
        this.disp(this.valInter);
      }
       un_var = this.valInter.toFixed(2);
       data[28] = un_var ;
  }

  
  wheatLimitNaconc.prototype.disp=function()
  {
  if(this.valInter>85 && this.valInter <=100)
          this.suitable="S1";
        
    else if(this.valInter>=60 && this.valInter<=85)
       this.suitable="S2";

    else if(this.valInter>=45 && this.valInter<60)
       this.suitable="S3";

    else if(this.valInter<45)
          this.suitable="N";
        
        data[29] = this.suitable ;
    this.out="Interpolated Value : " + this.valInter + " " + "Suitability class by Sys Model: " + this.suitable;
    document.getElementById("na01").innerHTML=userEC.out + "<br>" + this.out;
    document.getElementById("na_data").innerHTML=this.valInter.toFixed(2);;
    document.getElementById("na_suit").innerHTML=this.suitable;

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



function calWater()
{
  var water=document.getElementById("water_available").value;

  waterHold=new wheatLimitWater(water);
  waterHold.interPolate();
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
   
   lri = u_var *  (u2_var/100) * (um1_var/100) * (ul1_var/100)* (uw_var/100)* (ud_var/100)* (us_var/100) * (udep_var/100)
   *  (uc_var/100)*  (uc2_var/100)*(ub_var/100 ) *(uo_var/100)*  (up_var/100) 
  * (ue_var/100 )*(un_var/100);
   
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
  else if(lri>=50 && lri<75)
  {
    intensity="Moderately Suitable";
    Suitability="S2";
  }

  else if(lri>=25&& lri<50)
  {
    intensity="Marginally Suitable";
    Suitability="S3";
  }

  else if(lri<25)
  {
    intensity="Conditionally Suitable";
    Suitability="N";
  }
 // window.location.assign("tryTable.html")
 data[31] = Suitability ;
   out= "LRI Value is: " + lri + " Suitability is : " + intensity + "<br>" + "  Rating by Sys Model is:" + Suitability;
  document.getElementById("result").innerHTML=out;
  document.getElementById("lri_data").innerHTML=floorFigure(this.lri);
  document.getElementById("lri_suit").innerHTML=this.Suitability + "    " + this.intensity;

 
}

function printData(shed, subshed)  {
  data[32] = shed ;
  data[33] = subshed ;
  data[34] = "Groundnut" ;
  data[35] = "Sys Model" ;

  var info = JSON.stringify(data) ;
  window.location.assign("printPages.php?query="+ info) ;
}