// Write your code here.
function myFunction(x){
  
if(x.substring(0,2) === "py")
{
 return x;
}
else
{
 x = "py" + x;
  return x;
}
}
console.log(myFunction("python"));
console.log(myFunction("lovepreet"));
