//1. Write a JavaScript function to print all the methods in an JavaScript object.
function all_properties(obj){
    return Object.getOwnPropertyNames(obj.prototype)
}
console.log(all_properties(Array));
/*
Test Data :
console.log(all_properties(Array));
["length", "name", "arguments", "caller", "prototype", "isArray", "observe", "unobserve"]
*/