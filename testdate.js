var d = new Date('Mon, 25 Dec 1995 13:30:00 GMT');
var n = d.getTime()/1000|0 ;
console.log(d.getMinutes()+": "+d.getSeconds());
console.log("unix time "+n);
var date = new Date(n*1000);
var hours = date.getUTCDate();

console.log("utc date "+hours+" "+date.getUTCMonth()+" , "+date.getUTCFullYear()+", "+date.getUTCHours()+" : "+date.getUTCMinutes());


