function selection(){
	
	

	for(var i=0;i<array_len-1;i++){

		index_min=i;
		div_update(divs[i],div_sizes[i],"red");

		for(var j=i+1;j<array_len;j++){
			
			div_update(divs[j],div_sizes[j],"yellow");
			if(div_sizes[j]<div_sizes[index_min])
			{
				if(index_min!=i)
				{
					div_update(divs[index_min],div_sizes[index_min],"blue");
				}
				index_min=j;
				div_update(divs[index_min],div_sizes[index_min],"red");
				
			}
			else
			{
				div_update(divs[j],div_sizes[j],"blue");
			}
		}

		if(index_min!=i)
		{
			var temp=div_sizes[index_min];
			div_sizes[index_min]=div_sizes[i];
			div_sizes[i]=temp;

			div_update(divs[index_min],div_sizes[index_min],"red");
			div_update(divs[i],div_sizes[i],"red");
			div_update(divs[index_min],div_sizes[index_min],"blue");
		}
		div_update(divs[i],div_sizes[i],"green");
	}
	div_update(divs[i],div_sizes[i],"green");

	c_delay=0;

}