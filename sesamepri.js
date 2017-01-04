function calcpri() {
  var exp=document.getElementById("actual").value;
     print((exp/6)*100);
 }
 
 function print(a) {
 details=new User(a,'');   
   details.dispClass(); 
  }

function calcPlace() {
   
    var reg= document.getElementById("place").value;
  
    detail2= new area(reg);
    detail2.disp();
    }

    function area(reg) {
      this.reg=reg;

      
        
      area.prototype.disp=function()
       {
        
        this.out1="The region is :" + this.reg;


       }
    }
  
  
  
  
  function User(optYield,suitClass)
 {
   this.optYield=optYield;
      this.suitClass=suitClass;  
  User.prototype.assign=function()
   {
    if(this.optYield>80) 
	   this.suitClass="S1";
	 else if(this.optYield>40 && this.optYield<80)
        this.suitClass="S2";
      else if(this.optYield>20 && this.optYield<40)
         this.suitClass="S3";
     else 
          this.suitClass="N";
    }
  
  User.prototype.dispClass=function()
  {
   this.assign(this.optYield);
      this.out=detail2.out1 + "<br>" +" The Productivity Rating Index  is: " + this.optYield + "<br>"
       +" The Suitability Class is: " + this.suitClass  ;
       document.getElementById("result").innerHTML=this.out;

   }
  }