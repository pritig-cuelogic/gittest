function arthmaticOp (a, b ) {

  console.log(arguments.length);
  if(arguments.length <2) {
     return "please give atleast 2 variable";
 }
  
   else {
	for(var i=0; i<arguments.length; i++) {
		if(isNaN(arguments[i])) {
			return "please enter numb. ";
		}
	}
  }
  if(arguments[1] < arguments[0]) {
    
    return a + b;
    
    }

  else if(arguments[1] > arguments[0]) {
    
    return a - b;
    
    }

  else if(arguments[1] == arguments[0]) {
    
    return a * b;
    
    }
 /* else if(opr == "/" ) {
    
    return a / b;
    
    } */
  else {
   return "please specify d operation.";

  }
}

console.log(arthmaticOp (45,9,6,7,8));
