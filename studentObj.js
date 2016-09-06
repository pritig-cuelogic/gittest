class Student {
  constructor(fname, lname) {
   this.fname = fname;
   this.lname = lname;
  }

}

var s1 = new Student("priti","Gupta");
var s2 = new Student("neha","Gupta");
var s3 = new Student("kirti","Gupta");
var s4 = new Student("peeei","jain");
//console.log(s3);

Student.prototype.getname = function() {
			console.log("test");
};

s3.getname();

console.log(s4);
