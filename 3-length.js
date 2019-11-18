//3. Write a JavaScript program to get the length of an JavaScript object. Go to the editor
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };
function objLen(obj){
    return Object.keys(obj).length;
}
console.log(objLen(student));
/*
Sample object :
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
*/