function findClass()
{
var soild = document.getElementById('lcc_soil_depth').value;
var drain = document.getElementById('lcc_drainage').value;
var surtex = document.getElementById('lcc_sur_tex').value;
var slpcls = document.getElementById('lcc_slope_class').value;
var erscls = document.getElementById('lcc_Erosion_class').value;
var salinity = document.getElementById('lcc_salinity').value;
var rain = document.getElementById('lcc_rainfall').value;
var clsrslt = document.getElementById('classResult');

if (soild=="Very Deep" && drain=="Well Drained" && slpcls=="A" && erscls=="Slight" && salinity=="Slight" && (rain>=100 && rain<=200) && (surtex=="sicl" || surtex=="cl" || surtex=="l" || surtex=="sl" || surtex=="sil" || surtex=="scl" || surtex=="fsl"))
{
	clsrslt="Class I";
}
else
clsrslt="No Class";
}