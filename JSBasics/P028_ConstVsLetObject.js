//let: redeclaration is not allowed in the same scope.reassignment is allowed.
//const: Immutable,redeclartion and reassigment not allowed.

 //Object

 let user=
 {
    name:"Gnanesh",
    age:25,
    DOB:"1999-01-01",
    colour:"Blue"
 }
 console.log("User Details:\n",user);
 //insert the new property in the object.
user.phone=8333020094;
user.Gender="Male";
user.id=2322;
console.log("all objects in user object:\n",user);
user.name="Gnanendra"; //  update the name 
delete user.DOB;
console.log("Name updated and DOB Deleted:\n",user);
let obj=Object.entries(user);
console.log(obj);

//user={branch:"CSE"};
//console.log("user object after reassigning:\n",user); // user object is reassigned with new value.
/*Const Object : We can perform the all operations
    insertion
    deletion
    modification
    const objecct always make reference immutable. 
    const make always referece immutable in heap memory but not the value of the object.
  */
const user1=
{
    id:"0923222",
    name:"Gnanesh",
    profile:"QA",
    Org:"Capgemini",
    DOJ:"2022-01-01"
}

//insert the new property in the object.
user1.phone=8333020094;
user1.Deparment="Automation";
user1.salary="1L";
console.log("Add the new property in the object:\n",user1);
//Update/modify the values in the object.
user1.name="Kumari21F";
user1.Deparment="Manual";
console.log("Update the values in the object:\n",user1);
//delete the property in the object.
delete user1.salary;
delete user1.DOJ;
console.log("Deleted Salary,DOB:\n",user1);

