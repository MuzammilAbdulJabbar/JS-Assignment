let num1 = +prompt("Enter First Number");
let num2 = +prompt("Enter Second Number");
if(num1>num2 ){
    console.log(`The larger number is ${num1}`);
}else if( num1<num2){
    console.log(`The larger number is ${num2}`);    
}else{
    console.log("Both Numbers are same or equal");
}