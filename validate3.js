function findClass()
{
var soild = document.getElementById('lcc_soil_depth');
var drain = document.getElementById('lcc_drainage');
var surtex = document.getElementById('lcc_sur_tex');
var slpcls = document.getElementById('lcc_slope_class');
var erscls = document.getElementById('lcc_Erosion_class');
var salinity = document.getElementById('lcc_salinity');
var rain = document.getElementById('lcc_rainfall');
var slope = document.getElementById('lcc_slope');
var clsrslt = document.getElementById('classResult');

if(soild.value == "Very Deep" && drain.value == "Well Drained" && (surtex.value == "sicl" || surtex.value == "cl" || surtex.value == "l" || surtex.value == "sl" || surtex.value == "sil" || surtex.value == "scl" || surtex.value == "fsl") && slpcls.value == "A" && erscls.value == "Very Slight" && salinity.value == "Slight" && (rain.value >= 100 && rain.value <= 200) && (slope.value >=0 && slope.value <=1))
{
	clsrslt.value = "Class I"
}
else if(soild.value == "Deep")
{
	if((drain.value == "Well Drained" || drain.value == "Moderately Drained") && (surtex.value == "sicl" || surtex.value == "cl" || surtex.value == "l" || surtex.value == "sl" || surtex.value == "sil" || surtex.value == "scl" || surtex.value == "fsl" || surtex.value == "Nil") && (slpcls.value == "A" || slpcls.value == "B") && (erscls.value == "Very Slight" || erscls.value == "Slight") && (salinity.value == "Slight" || salinity.value == "Moderate") && ((rain.value >= 100 && rain.value <= 200) || rain.value == 0 || rain.value == null || rain.value == "") && (slope.value >=0 && slope.value <=5))
	{
		clsrslt.value = "Class II";
	}
	else
	{
		clsrslt.value ="No Class Can Be Defined 1";
	}
}

else if(soild.value == "Moderately Deep")
{
 	if((drain.value == "Well Drained" || drain.value == "Moderately Drained" || drain.value == "Imperfectly Drained") && (surtex.value == "sicl" || surtex.value == "cl" || surtex.value == "l" || surtex.value == "sl" || surtex.value == "sil" || surtex.value == "scl" || surtex.value == "fsl" || surtex.value == "Nil" || surtex.value == "sc" || surtex.value == "sic" || surtex.value == "c" || surtex.value == "ls" || surtex.value == "hc") && (slpcls.value == "A" || slpcls.value == "B" || slpcls.value == "C" || slpcls.value == "D") && (erscls.value == "Very Slight" || erscls.value == "Slight" || erscls.value == "Moderate") && (salinity.value == "Slight" || salinity.value == "Moderate" || salinity.value == "Strong") && (rain.value >=50 && rain.value <=100) && (slope.value >=5 && slope.value <=10))
	{
		clsrslt.value == "Class III";
	}
	else
	{
		clsrslt.value ="No Class Can Be Defined 9";
	}
}

else 
clsrslt.value == "No Class";

}