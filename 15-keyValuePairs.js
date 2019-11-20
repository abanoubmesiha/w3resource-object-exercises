//15. Write a JavaScript function to convert an object into a list of `[key, value]` pairs
let obj = {red: "#FF0000", green: "#00FF00", white: "#FFFFFF"};
function keyValuePairs(obj){
    let result = [];
    for (const prop in obj){
        result.push(new Array(prop,obj[prop]));
    }
    return result
}
console.log(keyValuePairs(obj))