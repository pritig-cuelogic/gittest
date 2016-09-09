var obj = {
   'fname':'priti',
   "lname": 'gupta'
	};

var o1 = Object.assign({}, obj);

console.log(o1);

var obj2 = {

	'fname': 'neha',
	'age': 23,
	'sex': 'female'
	};
var o2 = Object.assign({}, obj2,obj);

console.log(o2);
