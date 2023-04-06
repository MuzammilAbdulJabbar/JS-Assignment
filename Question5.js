// 5. Write a JavaScript program which computes the average marks of the following students Then, this average is used to determine the corresponding grade. The grades are computed as follows :
// Range Grade
// <60 F
// <70 D
// <80 C
// <90 B
// <100 A


let obtainMarks = prompt("Enter Your Marks");
let totalMarks = 100;
let avg = obtainMarks/totalMarks * 100;
if(avg < 60){
    console.log("The corresponding grade for the subject is : F");
}else if(avg <= 70){
    console.log("The corresponding grade for the subject is : D");
}else if(avg <= 80){
    console.log("The corresponding grade for the subject is : C");
}else if(avg <= 90){
    console.log("The corresponding grade for the subject is : B");
}else if(avg <= 100){
    console.log("The corresponding grade for the subject is : A");
}else{
    console.log("An error occurred.Can't be able to display the grade.Because the obtaining marks entered by you is greater than your total marks.Which does not make sense");

}
