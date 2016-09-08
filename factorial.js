function calFact(n)
{
  
   if(n ==1){ 
   return 1;
  }
else {
  
return(n*calFact(n-1));
}

}

console.log(calFact(3));
