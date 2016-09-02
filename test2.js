// Write a program that uses at least three ways to create an object variable,array variable

var a1 = [3,4,5,6];

var a2 = new Array (5);

var a3 = new Array ("test","priti");

a2[0]  = 1;
a2[1]  = 1;
a2[2]  = 1;
a2[3]  = 4;

console.log(a1.toString());

console.log(a2.length);

// ways of creating object 

//---------------------------------------------------------------------------------------------------
var ob1 =  new Object();

ob1.fname = "priti";
ob1.lname = "gupta";

console.log(ob1.fname);

//-----------------------------------------------------------------------------------------------------------

function human (fname , lname) {
this.fname = fname;
this.lname = lname;

}

var h1 = new human ("neetu", "gupta");
console.log(h1.fname);

// ---------------------------------------------------------------------------------------------------------------

var humanother = {
fname : "neha",
lname : "arora" };

console.log(humanother.fname);

//----------------------------------------------------------------------------------------------------------------------
