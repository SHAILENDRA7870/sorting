function insertion()
{
	for(var i=0;i<array_len;i++)
	{
		div_update(divs[i],div_sizes[i],"yellow");
		key=div_sizes[i];

		j=i-1;

		while(j>=0 && div_sizes[j]>key)
		{
			div_update(divs[j],div_sizes[j],"red");
			div_update(divs[j+1],div_sizes[j+1],"red");


			div_sizes[j+1]=div_sizes[j];

			div_update(divs[j],div_sizes[j],"red");
			div_update(divs[j+1],div_sizes[j+1],"red");

			div_update(divs[j],div_sizes[j],"blue");


			if(j==(i-1)){
				div_update(divs[j+1],div_sizes[j+1],"yellow");
			}
			else
			{
				div_update(divs[j],div_sizes[j],"blue");
			}

			j=j-1;
		}

		div_sizes[j+1]=key;

		for(var t=0;t<i;t++)
		{
			div_update(divs[t],div_sizes[t],"green");
		}

		div_update(divs[i],div_sizes[i],"green");
	}


c_delay=0;
}