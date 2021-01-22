function Merge_fun(){

	merge_part(0,array_len-1);
	c_delay=0;
}


function merge_sort(start,mid,end){

	var p=start,q=mid+1;
	var arr=[];
	var k=0;

	for(var i=start;i<=end;i++){


		if(p>mid){
			arr[k++]=div_sizes[q++];
			div_update(divs[q-1],div_sizes[q-1],"red");
		}
		else if(q>end){
			arr[k++]=div_sizes[p++];
			div_update(divs[p-1],div_sizes[p-1],"red");
		}
		else if(div_sizes[p]<div_sizes[q])
		{
			arr[k++]=div_sizes[p++];
			div_update(divs[p-1],div_sizes[p-1],"red");	
		}
		else
		{
			arr[k++]=div_sizes[q++];
			div_update(divs[q-1],div_sizes[q-1],"red");
		}

	}

	for(var t=0;t<k;t++){
		div_sizes[start++]=arr[t];
		div_update(divs[start-1],div_sizes[start-1],"green");
	}

}

function merge_part(start,end)
{

	if(start<end){
		var mid=Math.floor((start+end)/2);
		div_update(divs[mid],div_sizes[mid],"yellow");

		merge_part(start,mid);
		merge_part(mid+1,end);

		merge_sort(start,mid,end);

	}
}