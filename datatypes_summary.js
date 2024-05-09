// PRimitive(call by value)

// 7 type: String,Number, Boolean ,Null ,undefined ,symbol(make value unique or make component unique),BigInt

//Dynamic or static typed?
//Ans = Dynamic type is pretty simple to assign values to the variables.
 //You don’t need to care about the type of the variable because the type for each variable will be set dynamically during code execution.
 // But on other side this feature is source of possible errors.
//in js language is not define.



const score = 100
const scoreValue = 100.3


const isLoggedIn=false
const outsideTemp = null
let userEmail;

const id = Symbol('123')// unique datatype
const anotherId = Symbol('123')//unique 

console.log(id === anotherId);

///const bigNumber = 323428524985249n




// Non-Primitive(Reference)or(simply memory allocate kiya ja skta hai)

//Array, objects , Functions


const heros = ["shaktiman","naagraj","daoga"]

//in this let myobj contain object  name and age

let myObj = {
    name:"hitesh",
    age:22,
}


const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);
console.log(typeof scoreValue);