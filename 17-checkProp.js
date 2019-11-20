//17. Write a JavaScript function to check if an object contains given property..
var obj = {red: "#FF0000", green: "#00FF00", white: "#FFFFFF"};
function checkProp(obj,prop) {
    return (!(obj[prop] == undefined))
}
console.log(checkProp(obj,'green'))