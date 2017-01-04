function calcpri() {
  var exp=document.getElementById("actual").value;
     print((exp/60)*100);
 }
 
 function print(a) {
 details=new User(a,'');   
   details.dispClass(); 
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
      this.out=" The Productivity Rating Index  is: " + this.optYield + "<br>"
       +" The Suitability Class is: " + this.suitClass  ;
       document.getElementById("result").innerHTML=this.out;

   }
  }