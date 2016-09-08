function returnObj(a,b)
{
  if(a.search(b) != -1) {
	var s = {
  'count': (a.split(b).length-1),
  'lastIndex': a.lastIndexOf(b)
  }
 return s;
}
else 
{
  return -1;
}
}

var k = returnObj('ram goes ram went ram', 'ki');
console.log(k);

