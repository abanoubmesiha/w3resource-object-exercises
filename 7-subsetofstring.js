//7. Write a JavaScript program which returns a subset of a string.
var str = 'dog';
function strSubset(str){
    let result = [];
    for (let i=0;i<str.length;i++){
        result.push(str[i])
        for (let x=i;x<str.length-1;x++){
            result.push(result[result.length-1]+str[x+1])
            }
    }
    
    return result.join(',');
}
console.log(strSubset(str));

/*
Sample Data: dog
Expected Output: ["d", "do", "dog", "o", "og", "g"]
*/