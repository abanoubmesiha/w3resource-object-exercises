//1. Write a JavaScript program to list the properties of a JavaScript object.
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };

function obKeys(obj){
    return Object.keys(obj).join();
}
console.log(obKeys(student));
/*
Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
Sample Output: name,sclass,rollno
*/