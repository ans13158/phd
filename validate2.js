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
clsrslt.innerHTML="Please Input Some Values";
if(soild.value == "Very Deep" && drain.value == "Well Drained" && (surtex.value == "sicl" || surtex.value == "cl" || surtex.value == "l" || surtex.value == "sl" || surtex.value == "sil" || surtex.value == "scl" || surtex.value == "fsl") && slpcls.value == "A" && erscls.value == "Very Slight" && salinity.value == "Slight" && (rain.value >= 100 && rain.value <= 200) && (slope.value >=0 && slope.value <=1))
{
	clsrslt.value = "Class I"
}
if(soild.value == "Deep")
{
	if((drain.value == "Well Drained" || drain.value == "Moderately Drained") && (surtex.value == "sicl" || surtex.value == "cl" || surtex.value == "l" || surtex.value == "sl" || surtex.value == "sil" || surtex.value == "scl" || surtex.value == "fsl" || surtex.value == "Nil") && (slpcls.value == "A" || slpcls.value == "B") && (erscls.value == "Very Slight" || erscls.value == "Slight") && (salinity.value == "Slight" || salinity.value == "Moderate") && ((rain.value >= 100 && rain.value <= 200) || rain.value == 0 || rain.value == null || rain.value == "") && (slope.value >=0 && slope.value <=5))
	{
		clsrslt.value = "Class II";
	}
}
if(drain.value == "Moderately Drained")
{
	if((soild.value == "Very Deep" || soild.value == "Deep") && (surtex.value == "sicl" || surtex.value == "cl" || surtex.value == "l" || surtex.value == "sl" || surtex.value == "sil" || surtex.value == "scl" || surtex.value == "fsl" || surtex.value == "Nil") && (slpcls.value == "A" || slpcls.value == "B") && (erscls.value == "Very Slight" || erscls.value == "Slight") && (salinity.value == "Slight" || salinity.value == "Moderate") && ((rain.value >= 100 && rain.value <= 200) || rain.value == 0 || rain.value == null || rain.value == "") && (slope.value >=0 && slope.value <=5))
	{
		clsrslt.value = "Class II";
	}
}
if(surtex.value == "sicl" || surtex.value == "cl" || surtex.value == "l" || surtex.value == "sl" || surtex.value == "sil" || surtex.value == "scl" || surtex.value == "fsl" || surtex.value == "Nil")
{
	if((soild.value == "Very Deep" || soild.value == "Deep") && (drain.value == "Well Drained" || drain.value == "Moderately Drained") && (slpcls.value == "A" || slpcls.value == "B") && (erscls.value == "Very Slight" || erscls.value == "Slight") && (salinity.value == "Slight" || salinity.value == "Moderate") && ((rain.value >= 100 && rain.value <= 200) || rain.value == 0 || rain.value == null || rain.value == "") && (slope.value >=0 && slope.value <=5))
	{
		clsrslt.value = "Class II";
	}
}
if(slpcls.value == "B")
{
	if((soild.value == "Very Deep" || soild.value == "Deep") && (drain.value == "Well Drained" || drain.value == "Moderately Drained") && (surtex.value == "sicl" || surtex.value == "cl" || surtex.value == "l" || surtex.value == "sl" || surtex.value == "sil" || surtex.value == "scl" || surtex.value == "fsl" || surtex.value == "Nil") && (erscls.value == "Very Slight" || erscls.value == "Slight") && (salinity.value == "Slight" || salinity.value == "Moderate") && ((rain.value >= 100 && rain.value <= 200) || rain.value == 0 || rain.value == null || rain.value == "") && (slope.value >=0 && slope.value <=5))
	{
		clsrslt.value = "Class II";
	}
}
if(erscls.value == "Slight")
{
	if((soild.value == "Very Deep" || soild.value == "Deep") && (drain.value == "Well Drained" || drain.value == "Moderately Drained") && (surtex.value == "sicl" || surtex.value == "cl" || surtex.value == "l" || surtex.value == "sl" || surtex.value == "sil" || surtex.value == "scl" || surtex.value == "fsl" || surtex.value == "Nil") && (slpcls.value == "A" || slpcls.vlue == "B") && (salinity.value == "Slight" || salinity.value == "Moderate") && ((rain.value >= 100 && rain.value <= 200) || rain.value == 0 || rain.value == null || rain.value == "") && (slope.value >=0 && slope.value <=5))
	{
		clsrslt.value = "Class II";
	}
}
if(salinity.value == "Moderate")
{
	if((soild.value == "Very Deep" || soild.value == "Deep") && (drain.value == "Well Drained" || drain.value == "Moderately Drained") && (surtex.value == "sicl" || surtex.value == "cl" || surtex.value == "l" || surtex.value == "sl" || surtex.value == "sil" || surtex.value == "scl" || surtex.value == "fsl" || surtex.value == "Nil") && (slpcls.value == "A" || slpcls.vlue == "B") && (erscls.value == "Very Slight" || erscls.value == "Slight") && ((rain.value >= 100 && rain.value <= 200) || rain.value == 0 || rain.value == null || rain.value == "") && (slope.value >=0 && slope.value <=5))
	{
		clsrslt.value = "Class II";
	}
}
if(rain.value == "" || rain.value == 0 || rain.value == null)
{
	if((soild.value == "Very Deep" || soild.value == "Deep") && (drain.value == "Well Drained" || drain.value == "Moderately Drained") && (surtex.value == "sicl" || surtex.value == "cl" || surtex.value == "l" || surtex.value == "sl" || surtex.value == "sil" || surtex.value == "scl" || surtex.value == "fsl" || surtex.value == "Nil") && (slpcls.value == "A" || slpcls.vlue == "B") && (erscls.value == "Very Slight" || erscls.value == "Slight") && (salinity.value == "Slight" || salinity.value == "Moderate") && (slope.value >=0 && slope.value <=5))
	{
		clsrslt.value = "Class II";
	}
}
if(slope.value >=0 && slope.value <=5)
{
	if((soild.value == "Very Deep" || soild.value == "Deep") && (drain.value == "Well Drained" || drain.value == "Moderately Drained") && (surtex.value == "sicl" || surtex.value == "cl" || surtex.value == "l" || surtex.value == "sl" || surtex.value == "sil" || surtex.value == "scl" || surtex.value == "fsl" || surtex.value == "Nil") && (slpcls.value == "A" || slpcls.vlue == "B") && (erscls.value == "Very Slight" || erscls.value == "Slight") && (salinity.value == "Slight" || salinity.value == "Moderate") && ((rain.value >= 100 && rain.value <= 200) || rain.value == 0 || rain.value == null || rain.value == ""))
	{
		clsrslt.value = "Class II";
	}
}
if(soild.value == "Moderately Deep")
{
 	if((drain.value == "Well Drained" || drain.value == "Moderately Drained" || drain.value == "Imperfectly Drained") && (surtex.value == "sicl" || surtex.value == "cl" || surtex.value == "l" || surtex.value == "sl" || surtex.value == "sil" || surtex.value == "scl" || surtex.value == "fsl" || surtex.value == "Nil" || surtex.value == "sc" || surtex.value == "sic" || surtex.value == "c" || surtex.value == "ls" || surtex.value == "hc") && (slpcls.value == "A" || slpcls.value == "B" || slpcls.value == "C" || slpcls.value == "D") && (erscls.value == "Very Slight" || erscls.value == "Slight" || erscls.value == "Moderate") && (salinity.value == "Slight" || salinity.value == "Moderate" || salinity.value == "Strong") && (rain.value >=50 && rain.value <=100) && (slope.value >=5 && slope.value <=10))
	{
		clsrslt.value == "Class III";
	}
}
if (drain.value == "Imperfectly Drained")
{
	if((soild.value == "Very Deep" || soild.value == "Moderately Deep" || soild.value == "Very Deep") && (surtex.value == "sicl" || surtex.value == "cl" || surtex.value == "l" || surtex.value == "sl" || surtex.value == "sil" || surtex.value == "scl" || surtex.value == "fsl" || surtex.value == "Nil" || surtex.value == "sc" || surtex.value == "sic" || surtex.value == "c" || surtex.value == "ls" || surtex.value == "hc") && (slpcls.value == "A" || slpcls.vlue == "B" || slpcls.value == "C" || slpcls.value == "D") && (erscls.value == "Very Slight" || erscls.value == "Slight" || erscls.value == "Moderate") && (salinity.value == "Slight" || salinity.value == "Moderate" || salinity.value == "Strong") && (rain.value >= 50 && rain.value <= 100) && (slope.value >= 5 && slope.value <= 10))
	{
		clsrslt.value = "Class III";
	}
}
if (surtex.value == "sc" || surtex.value == "sic" || surtex.value == "c" || surtex.value == "ls" || surtex.value == "hc")
{
	if((drain.value == "Well Drained" || drain.value =="Moderately Drained" || drain.value == "Imperfectly Drained") && (soild.value == "Very Deep" || soild.value == "Moderately Deep" || soild.value == "Very Deep") && (slpcls.value == "A" || slpcls.vlue == "B" || slpcls.value == "C" || slpcls.value == "D") && (erscls.value == "Very Slight" || erscls.value == "Slight" || erscls.value == "Moderate") && (salinity.value == "Slight" || salinity.value == "Moderate" || salinity.value == "Strong") && (rain.value >= 50 && rain.value <= 100) && (slope.value >= 5 && slope.value <= 10))
	{
		clsrslt.value = "Class III";
	}
}

}