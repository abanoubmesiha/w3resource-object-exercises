//6. Write a Bubble Sort algorithm in JavaScript. Go to the editor
//Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
var arr1 = [6,4,0, 3,-2,1];
function sortArr(arr){
    return arr.sort((a,b)=> {
        if (a<b){return -1}
        else if (a>b){return +1}
        else if (a==b){return 0}
    });
}
console.log(sortArr(arr1));
/*
Sample Data: [6,4,0, 3,-2,1]
Expected Output : [-2, 0, 1, 3, 4, 6]
*/