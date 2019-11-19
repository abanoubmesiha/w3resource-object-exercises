//5. Write a JavaScript program to get the volume of a Cylinder with 
//four decimal places using object classes. Go to the editor
function Cylinder(r,h) {
    this.r=r;
    this.h=h;
    this.Pi=Math.PI;
    this.Volume= function(r,h){
        return (Math.PI*Math.pow(this.r,2)*this.h).toFixed(4);
}
}
let cylin = new Cylinder(10,5.5);
console.log(cylin.Volume());