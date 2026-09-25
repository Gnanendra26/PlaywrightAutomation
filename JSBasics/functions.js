function test()    // Declaration of function and its name is test
{
console.log("This is functions block to write the statements"); // Printing the statement inside the function block
}
test(); // Calling the function test to execute the statements inside the function block
console.log(typeof test);


//Anonymus function

let anonymousFunction = function()    // Declaration of function and its name is anonymousFunction variable is used to store the function
{
    console.log("This is anonymousFunction block to write the statements"); // Printing the statement inside the function block
}
anonymousFunction();   // Call the anonymousFunction functions by using the variable name to execute the statements inside the function block.
console.log(typeof anonymousFunction);

//Arrow function

let arrowfn = () => {
    console.log("This is arrow functions");
}
arrowfn();
console.log(typeof arrowfn);