const student =
{
    sid: 101,
    sname: "John",
    subject:"JavaScript"
}
console.log("This is original object:\n",student);
let {sid,sname} = student;  // Destructuring the studetn key and values. fetch only 2 values from the student object.
console.log("Destructuring the student object:\n",sid,sname);

const student2={...student}; // copy student all properties to student2 object.
console.log("This is copied object from stud1 :\n",student2);

//Modify the student2 object properties.
student2.sname="Kumari";
student2.sid=102;
console.log("Modified object:\n\n",student2);
delete student2.subject;
console.log("Deleted subject:\n\n",student2);