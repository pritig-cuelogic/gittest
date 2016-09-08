function arrayconvert()
{
       var s = []; 
var s2 = [];
var s3 = [];
	var arr = ['00','01','11','10','11','00'];
	for(var i=0; i<arr.length; i++) {
		var s1 = arr[i].split('');
             s2.push( s1[0]); 
		s3.push( s1[1]); 
           } 
    s.push(s2);
s.push(s3);
  return s;
}

var ob =arrayconvert();

console.log(ob[0][2]);
