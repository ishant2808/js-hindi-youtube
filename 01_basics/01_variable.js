const accountId = 144553
let accountEmail = "hites@google.com"
var accoutPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2

accountEmail = "ishant@google.com"
accoutPassword = "1234545"
accountCity = "Mirzapur"

console.log(accountId);


/*

Prefer not to use var because of issue in 
block scope and functional scope
*/


console.table([accountId,accountEmail,accoutPassword,accountCity,accountState])