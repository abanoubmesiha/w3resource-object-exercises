//2. Write a JavaScript program to delete the rollno property from the following object.
//Also print the object before or after deleting the property. Go to the editor
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };
    function delProp(obj,prop){
        let result = JSON.stringify(obj);
        delete obj[prop];
        result = result +','+ JSON.stringify(obj);
        return result;
    }
console.log(delProp(student,'rollno'));
/*
Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
*/