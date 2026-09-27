console.log("********This is the Anonymous function example in javascript******");
const fruit = "apple";
let exfunction = function()         //No function name is given to the function, so it is called Anonymous function. 
{
let number=37;
let number2=200;
let name="Gnanendra";
const fruit = "Orrange";
console.log("Functions block Fruit:",fruit);

if(number%2==0)
{
    console.log("Number is Even");
} else{
    console.log("Number is Odd");
}
if(number2%2==0)
    {
    let number3=number2/2;
    console.log("Number2 is Even and Number3 is: ",number3);
}
}
exfunction();   //End of the function calling. fun assigned to variable exfunction and then called using the variable name.

console.log("Outside function Fruit:",fruit);


console.log("********This is the Arrow function example in javascript******");

// const arrowFunction = (name,id) =>
// {
// console.log("This is arrow function");

// }
// arrowFunction("John", 123);

function multiply(a,b)
{
    return a*b;
}

let multiplyByTwo = multiply(2,2);  
let multiplyByThree = multiply(2,3);  
let multiplyByFour = multiply(2,4); 
console.log(multiplyByTwo, multiplyByThree, multiplyByFour);

console.log("********This is the login function******");
function loginUser(name, id)
{
    console.log("User Name: ",name);
    console.log("User Id: ",id);
}
loginUser("Gnanendra", 123);

console.log("********This is the searchPage function******");
function searchPage(Origin, destination, date)
{
    console.log("Origin: ",Origin);
    console.log("Destination: ",destination);
    console.log("Date: ",date);
}
searchPage("Bangalore", "Chennai", "2026-10-15");
