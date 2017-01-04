function findClass()
{
var soild = document.getElementById('lcc_soil_depth');
var drain = document.getElementById('lcc_drainage');
var surtex = document.getElementById('lcc_sur_tex');
var slpcls = document.getElementById('lcc_slope_class');
var erscls = document.getElementById('lcc_Erosion_class');
var salinity = document.getElementById('lcc_salinity');
var rain = document.getElementById('lcc_rainfall');
var clsrslt = document.getElementById('classResult');

if(!((surtex.value == "g" || surtex.value == "gt" || surtex.value == "st" || surtex.value == "ch") || slpcls.value == "H" || erscls.value == "Very Very Severe"))
{
	if (soild.value == "Very Deep" && drain.value == "Well Drained" && (surtex.value == "sicl" || surtex.value == "cl" || surtex.value == "sl" || surtex.value == "sil" || surtex.value == "scl" || surtex.value == "fsl") && slpcls.value == "A" && erscls.value == "Slight" && salinity.value == "Slight" && (rain.value >= 100 && rain.value <= 200))
{
	clsrslt.value = "Class I";
}
else if((soild.value == "Deep" || soild.value == "Very Deep") && (drain.value == "Well Drained" || drain.value == "Moderately Drained") && (surtex.value == "sicl" || surtex.value == "cl" || surtex.value == "sl" || surtex.value == "sil" || surtex.value == "scl" || surtex.value == "fsl" || surtex.value == "") && (slpcls.value == "A" || slpcls.value == "B") && (erscls.value == "Slight" || erscls.value == "Nil") && (salinity.value == "Slight" || salinity.value == "Moderate") && ((rain.value >= 100 && rain.value <= 200) || rain.value == 0 || rain.value == ""))
	{
		clsrslt.value = "Class II";
	}
	else if((soild.value == "Moderately Deep" || soild.value == "Imperfectly Deep" || soild.value == "Deep") && (drain.value == "Well Drained" || drain.value == "Moderately Drained" || drain.value == "Imperfectly Drained") && (surtex.value == "sicl" || surtex.value == "cl" || surtex.value == "sl" || surtex.value == "sil" || surtex.value == "scl" || surtex.value == "fsl" || surtex.value == "sc" || surtex.value == "sic" || surtex.value == "c" || surtex.value == "ls" || surtex.value == "hc" || surtex.value == "") && (slpcls.value == "A" || slpcls.vlue == "B" || slpcls.value == "C" || slpcls.value == "D") && (erscls.value == "Slight" || erscls.value == "Moderate" || erscls.value == "Nil") && (salinity.value == "Slight" || salinity.value == "Moderate" || salinity.value == "Strong") && (rain.value >= 50 && rain.value <= 200))
	{
		clsrslt.value == "Class III";
	}
}
else
clsrslt.value == "Class VIII";
}