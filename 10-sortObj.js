//10. Write a JavaScript program to sort an array of JavaScript objects.
var library = [ 
    {
        title:  'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }];
    function sortObj(arr){
        let result = JSON.stringify(arr);
        arr.sort((a,b)=> a.libraryID - b.libraryID)
        result = "Before: "+ result +', \n After : '+ JSON.stringify(arr);
        return result;
    }
    console.log(sortObj(library));
