class Rectangle{
    constructor(length, breadth){
        this.length = length;
        this.breadth= breadth;
    }
    calculateArea(){
        return this.length * this.breadth;
    }
}
var l=5;
var b=6;
console.log("length :"+ l);
console.log("breadth :"+ b)
console.log("Area of rectangle")
var a = new Rectangle(l,b);
console.log(a.calculateArea());