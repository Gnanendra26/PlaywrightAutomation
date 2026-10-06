/*2.Class Level Object cretation and operations.
- Constroctor method: It is a special type of mothod which is used to create the object using new keyword.
- In JS only one constructor will allowed.
- Create constroctor function with the name of the class using constroctor key word.
- Constroctoe get called at the time of object creation. It is used to initialize the object properties.
- class==>constructor==>new student() ==> object created.
This key word: it referes current class instances.
*/

class StudentData
{  //Global variable
    sid;
   sname;
   address;
   phone;
   email;
   constructor(id,name,location,contactnumber,gmail)
   {
    this.sid=id;
    this.sname=name;
    this.address=location;
    this.phone=contactnumber;
    this.email=gmail;
   }
   getDetails()  //method
   {
    console.log("Student data is:");
    console.log("Student Id:",+this.sid,"\nStudent Name:",this.sname,"\nStudent Address:",this.address,"\nStudent Phone:",this.phone,"\nStudent Email:",this.email);

   }

}
const student1 = new StudentData('022', 'John Doe', '123 Main St', '555-1234', 'john.doe@email.com'); // Object creation by using new keyword. It will call the constructor method and initialize the object properties.
student1.getDetails();
console.log("This is student details:\n",student1);

console.log("--------------------------LoginPage-----------------");


class loginPage
{
    username;
    password;
    loginButton;
    forgotPassword;

    constructor(username,password)
{
    this.username=username;
    this.password=password;
    this.loginButton="Login";
    this.forgotPassword="Forgot Password";

}
doLogin()
{
    console.log("Login page details:\n");
    console.log("Username:",this.username,"\nPassword:",this.password)
}
}
const login1 = new loginPage('Gnanesh', '123456'); // Object creation
console.log(login1);
login1.doLogin();