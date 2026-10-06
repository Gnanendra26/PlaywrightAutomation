/*
freeze():Prevents the modification of existing property attributes and values, and prevents the addition of new properties to an object.
//const object makes reference immutable.

seal():Prevents the modification of existing property attributes and values, and prevents the addition of new properties to an object.
*/
 let players=
 {
    playerName:"Virat",
    playerAge:35,
    playerDOB:"1988-01-01",
    playerCountry:"India",
    playerRole:"Batsman"

 }
 players=Object.freeze(players); //freeze the object cont modify, cont edit and add delete the properties in the object. 
console.log("Player Details:\n",players);
players.playerName="Rohit"; //  update the name
console.log(players); // TypeError: 
//Adding new property in the object. 
// Deleting the property in the object.
// It wont allow us to perform these operations in the object.
//Change reference of the object.

 players={playerName:"Rohit",playerAge:35,playerDOB:"1988-01-01",playerCountry:"India",playerRole:"Batsman"}; // It will allow us to change the reference of the object.
console.log(players); // It will print the new object.
players.phone=890752;
console.log(players); // bCZ of the let we change the reference of the object. It will print the new object with new property.
// if we use conts it wont allow us to change the reference of the object. It will throw an error.

//If Object as const then we cont change the reference and objects operations are not allowed.

//Seal(): Helps to modify exisgting properties values.But cont insert new property. key cont change i think.
let obj=Object.seal(players); 

players.playerDOB="2000-01-01"; 
console.log(obj);



