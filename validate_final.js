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

if (soild.value=="Very Deep" && drain.value=="Well Drained" && slpcls.value=="A" && erscls.value=="Slight" && salinity.value=="Slight" && (rain.value >= 100 && rain.value <= 200) && (surtex.value == "sicl" || surtex.value == "cl" || surtex.value == "l" || surtex.value == "sl" || surtex.value == "sil" || surtex.value == "scl" || surtex.value == "fsl"))
{
clsrslt.value = "Class I";
}
else if(soild.value == "Deep" && ((surtex.value == "sicl" || surtex.value == "cl" || surtex.value == "l" || surtex.value == "sl" || surtex.value == "sil" || surtex.value == "scl" || surtex.value == "fsl") && (drain.value == "Well Drained" || drain.value == "Moderately Drained") && (slpcls.value == "A" || slpcls.value == "B") && (erscls.value == "Slight" ||erscls.value == "Nil") && (salinity.value == "Slight" || salinity.value == "Moderate") && ((rain.value >=100 && rain.value <=200) || rain.value == 0)))
{
	clsrslt.value == "Class II";
}
else
clsrslt.value="No Class";
}