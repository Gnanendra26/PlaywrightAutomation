/*console.log("**************************This is the example of using var keyword in javascript***************");
var name="Gnanendra";
var age=22;
var studentId=23;
function studentDetails()
 {
    var  studentBranch="CSE";
    var Semister=3;
    var student_CGPA=8.5;
    var student_Section="A";
    console.log("Student_Branch: "+studentBranch);
    if(Semister==3)
        {
            var student_CGPA=9.5;
            console.log("Student_Semister: "+Semister);
            console.log("Student_CGPA: "+student_CGPA);
        }
        else{
            console.log("This student is not the 3rd Semister");
        }


}
console.log("Student_Name:",name);
console.log("Student_Age: ",age);
console.log("Student_Id: ",studentId);
studentDetails(); */


console.log("**************************This is the example of using let keyword in javascript***************");


let name="Gnanendra";
let age=22;
let studentId=23;
let studentl_CGPA=0.5;

function studentDetails()
 {
    let  studentBranch="CSE";
    let Semister=3;
    // let studentl_CGPA=8.5;
    let student_Section="A";
    console.log("Student_Branch: "+studentBranch);
    if(Semister==3)
        {
            // let studentl_CGPA=11;
            console.log("Student_Semister: "+Semister);
            console.log("Student_CGPA: "+studentl_CGPA);
        }
        else{
            console.log("This student is not the 3rd Semister");
        }


}
console.log("Student_Name:",name);
console.log("Student_Age: ",age);
console.log("Student_Id: ",studentId);
studentDetails();