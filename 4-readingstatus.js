//Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books. Go to the editor
var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];
    function readStatus(arr){
        var result = [];
    for ( let element of arr){
        let info = element.readingStatus ? `Already read "${element.title}" by "${element.author}"`:`You still need to read "${element.title}" by "${element.author}".`
        console.log(result.push(info))
    }
    return result.join(',\n')
}

console.log(readStatus(library));

/*
var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];
    result:
    Already read 'Bill Gates' by The Road Ahead.
Already read 'Steve Jobs' by Walter Isaacson.
You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins.
*/