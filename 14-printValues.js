//14. Write a JavaScript function to retrieve all the values of an object's properties.
let obj = {red: "#FF0000", green: "#00FF00", white: "#FFFFFF"};
function allValues(obj){
    let result = []
    for (const value in obj){
        result.push(obj[value]);
    }
    return result
}
console.log(allValues(obj));