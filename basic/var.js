const accountId = 131596
let accountEmail = "khushi@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
 
// accountId = 2 //not allowed



accountEmail = "kosal@gmail.com"
accountPassword = "54321"
accountCity = "Patna"

console.log(accountId);

/*
Prefer not to use var
because of issue in block & functional scope
*/

console.table([accountId, accountEmail, accountPassword, , accountState]);
