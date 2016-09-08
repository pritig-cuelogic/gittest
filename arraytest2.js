
function testArr() {
   tarr = [];
  for(var i=1; i<=100; i++) {
    tarr.push(i);
  }
  return tarr;

}

function printNo(arr1) {

 var len = arr1.length;
var i=0;
 function nestedFun() {

  if(i<len) {
  console.log("no is: "+arr1[i]);
  i++;
   nestedFun();
}

 }nestedFun();
  
}

 arr1 = testArr();

 printNo(arr1);
