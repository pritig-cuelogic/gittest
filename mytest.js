var exp = {
"name": "User exp",
"msg": "provide right input"
};

function devideNumber(a,b){
  if(a>b){
  return a/b;
 }
 else{

  throw exp;
}

}

try{
console.log(devideNumber(3,89));

}
catch(e){
console.log(e);
}

// --------------------------------------------------------------------------------------------

function printNum(a){
console.log("test1"+a);
}

function Printnum(a){
console.log("test222"+a);
}

printNum(5);

var a = undefined;

console.log(typeof a);
