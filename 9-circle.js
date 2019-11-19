//9-Write a JavaScript program to calculate the area and perimeter of a circle.
//Note : Create two methods to calculate the area and perimeter.
//The radius of the circle will be supplied by the user.
function Cricle (r){
    this.r = r;
    this.Pi = Math.PI;
    this.perimeter =`Perimeter is : ${(2*this.Pi*this.r).toFixed(3)}`;
    this.area = `Area is : ${(this.Pi*Math.pow(this.r,2)).toFixed(3)}`;
}
let cir = new Cricle(3);
console.log(cir.area);
console.log(cir.perimeter);