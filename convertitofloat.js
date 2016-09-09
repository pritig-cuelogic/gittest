
var num = 5;
Number.prototype.float = function(){ 
			return this.toFixed(2);
			}


Number.prototype.int = function(){ 
			return parseInt(this) ;
			}

console.log(num.float());
console.log(num);
var num2 = 90.897;

console.log(num2.int());
console.log(num2.float());
console.log(num2);


