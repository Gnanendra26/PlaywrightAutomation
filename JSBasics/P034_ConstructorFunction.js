/*
Def: Constructor function a special function used to create and initialized the object.
*/
function Employee(id,name,phone)
{
    this.id=id;
    this.name=name;
    this.phone=phone;

    //method
    this.showdetails=function(id,name,phone)
    {
        console.log("Id is:",this.id);
         console.log("\nName is:",this.name);
          console.log("\nContact Number:",this.phone);
    }

}
let emp=new Employee(34,"Gari",8333020094);
emp.showdetails();
