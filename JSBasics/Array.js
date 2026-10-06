//1.Arrya Literala most used one array.
/*
Syntax:
let array = [element1, element2, element3, ...];
*/
console.log("*******Below is the example of Array literal method********");
let array=[100,101,102,103,104,104,105,106,107,108,109,110];
console.log(array);
console.log(typeof array);
console.log(array[3]);

/*
2.Array Constructor
Syntax:
let array = new Array(element1, element2, element3, ...);
note: if we pass single number in elemts its consider as lenth of the array
*/



/*
3.Array.of()
Syntax:
let array = Array.of(element1, element2, element3, ...);
*/
console.log("=========Below is the example of Array.of() method ==========");
let array1=Array.of(100,101,"Gnani",'B',9.9,true); // Multiple types of data can be stored in array.
console.log("Total length of array is:  " +array1.length);
console.log("All elements in the array: "+array1);
console.log("Typeof the arrays:         "+typeof array1);
console.log("Element at index 3:      "+array1[3]);
array1[3]="Bangalore";
console.log("Element at index 3 after modification: "+array1[3]);

