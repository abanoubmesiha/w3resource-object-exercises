//16. Write a JavaScript function to get a copy of the object where the keys have 
//become the values and the values the keys.
var obj = {red: "#FF0000", green: "#00FF00", white: "#FFFFFF"};
function reversedCopy(obj){
    let copy = {};
    for (const prop in obj){
        copy[obj[prop]] = prop
    }
    return copy;
}
console.log(reversedCopy(obj));