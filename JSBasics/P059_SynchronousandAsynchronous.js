console.log("Task Started Here..!");
setTimeout(()=>{
    console.log("Taks required 9 Sec to execute");

},9000);
console.log("JS Program Ends:");


async function getAPITest()
{
   const  response=await fetch("https://www.google.com");
    console.log(response);
}
getAPITest();