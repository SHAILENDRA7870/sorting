/*
var speed=1000;

var delay_time=100;//(10000/(Math.floor(array_size/10)*speed));
var c_delay=0;


function div_update(cont,height,color)
{
    window.setTimeout(function(){
        cont.style=" margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
    },c_delay+=delay_time);
}

*/



function bubble(){



for(var i=0;i<array_len-1;i++)
{
	for(var j=0;j<array_len-i-1;j++)
	{


		div_update(divs[j],div_sizes[j],"yellow");  

		if(div_sizes[j]>div_sizes[j+1])
		{

			div_update(divs[j],div_sizes[j],"red");
			div_update(divs[j+1],div_sizes[j+1],"red");


			var temp=div_sizes[j];
			div_sizes[j]=div_sizes[j+1];
			div_sizes[j+1]=temp;


			div_update(divs[j],div_sizes[j],"red");
			div_update(divs[j+1],div_sizes[j+1],"red");

		}
		div_update(divs[j],div_sizes[j],"blue");	
	}
	div_update(divs[j],div_sizes[j],"green");

}
div_update(divs[0],div_sizes[0],"green");


}
