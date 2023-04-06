// Write a JavaScript program to construct the following pattern, using a nested for loop. 
// *
// **
// ***
// ****
// *****

let row = 4;
let output="";

for(let i=0;i<=row;i++){
    for(let j=0;j<=i;j++){
        output+="*";
    }
    output+="\n";
}
console.log(output);