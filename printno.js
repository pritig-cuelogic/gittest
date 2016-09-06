function checkFor() {
       var res ='1,';
	for (var i=2; i<=100; i++ )
	{
		res = res+i + ' ,';	
	}
      return res;
}

function checkWhile() {
	var res ='1,';
	var i=2;
	while (i<=100)  {
		res = res+i + ' ,';
	i++;	
	}
	return res;
}

function doWhilecheck() {
	var res ='1,';
	var i=2;
	do 
	{
	 res = res+i + ' ,';
	i++; 
	}while(i<=100);
	return res;
}

console.log(checkFor());

console.log(checkWhile());

console.log(doWhilecheck());
