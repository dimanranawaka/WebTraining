// hoisting
var x = 50;
console.log(x);
if(true){
    x=60;
    console.log(x);
}
console.log(x);