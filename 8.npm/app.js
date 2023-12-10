const validator = require("validator");

console.log(validator.isEmail("yoga@gmai.ia"));
console.log(validator.isMobilePhone("085934748494", "id-ID"));
console.log(validator.isMobilePhone("085934748494s"));
