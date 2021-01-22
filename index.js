

var array_s = document.getElementById("a_size");
var speed=document.getElementById("myRangespeed");
var output=document.getElementById("demo");
var arr_speed=document.getElementById("demo1");
var sort1=document.getElementById("start");
var sort2=document.getElementById("selection");
var sort3=document.getElementById("insertion");
var sort4=document.getElementById("mergesort");
var sort5=document.getElementById("quicksort");




arr_speed.innerHTML=speed.value;
speed.oninput=function(){
	arr_speed.innerHTML=this.value;
}




output.innerHTML=array_s.value;

array_s.oninput=function(){
output.innerHTML=this.value;
}

var array_len=array_s.value;

var array_gen=document.getElementById("a_genrate");

var cont=document.getElementById("array_container");
cont.style="flex-direction:row";
var div_sizes=[];
var divs=[];
var margin_size;

array_gen.addEventListener("click",genratearray);
array_s.addEventListener("input",updatearray);


function genratearray(){

	cont.innerHTML="";

	for(var i=0;i<array_len;i++){
		div_sizes[i]=Math.floor(Math.random()*(array_s.max-array_s.min))+10;
		divs[i]=document.createElement("div");
		cont.appendChild(divs[i]);
		margin_size=0.1;
		divs[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_len-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
	}


}


window.onload=updatearray();
function updatearray(){
	array_len=array_s.value;
	genratearray();
}





sort1.addEventListener("click",sortfunction);
sort2.addEventListener("click",selections);
sort3.addEventListener("click",insertions);
sort4.addEventListener("click",merge1);
sort5.addEventListener("click",quicks);


function sortfunction(){

bubble();

}

function selections(){
	selection();
}


function insertions(){
	insertion();
}

function merge1(){
	//merge.style="background-color:blue";
	Merge_fun();
}
function quicks(){
	quick();
}










var speed=1000;

var delay_time=(10000/(Math.floor(array_len/10)*speed));


var c_delay=0;


function div_update(cont,height,color)
{
    window.setTimeout(function(){
        cont.style=" margin:0% " + margin_size + "%; width:" + (100/array_len-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
    },c_delay+=delay_time);
}
