/*
CIT 281 Project 6
Sam Rutherford
*/

class Shape {
  constructor([...sides] = []) {
    this.sides = sides;
  }

  perimeter = () => this.sides.length > 0 ? this.sides.reduce((previousValue, currentValue) => previousValue + currentValue,0): 0;
}

//console.log(new Shape([5, 10]).perimeter());  // 15
//console.log(new Shape([1, 2, 3, 4, 5]).perimeter()); // 15
//console.log(new Shape().perimeter()); // 0

class Rectangle extends Shape {
  constructor(length = 0, width = 0){
    super([length,width,length,width]);
    this.length = length;
    this.width = width
  }
  area = () => this.length * this.width;
}

//console.log(new Rectangle(4, 4).perimeter());  // 16
//console.log(new Rectangle(4, 4).area());  // 16
//console.log(new Rectangle(5, 5).perimeter()); // 20
//console.log(new Rectangle(5, 5).area()); // 25
//console.log(new Rectangle().perimeter()); // 0
//console.log(new Rectangle().area()); // 0

class Triangle extends Shape {
  constructor(sideA = 0,sideB = 0,sideC = 0){
    super([sideA,sideB,sideC]);
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  area(){
    let temp = (this.sideA + this.sideB + this.sideC) / 2;
    return Math.sqrt(temp * (temp-this.sideA) * (temp-this.sideB) * (temp-this.sideC))
  }
}

//console.log(new Triangle(3, 4, 5).perimeter());  // 12
//console.log(new Triangle(3, 4, 5).area());  // 6
//console.log(new Triangle().perimeter()); // 0
//console.log(new Triangle().area()); // 0

// Array of sides arrays
const data = [ [3, 4], [5, 5], [3, 4, 5], [10], [] ];
let temp = null;
for (arr of data){
  temp = new Shape(arr);
  switch(temp.sides.length){
    case 3:
      temp = new Triangle(...temp.sides);
      console.log(`Triangle with sides of ${temp.sides.toString()} has a perimeter of ${temp.perimeter()} and an area of ${temp.area()}`);
      break;
    case 2:
      temp = new Rectangle(...temp.sides);
      console.log(`Rectangle with sides of ${temp.sides.toString()} has a perimeter of ${temp.perimeter()} and an area of ${temp.area()}`);
      break;
    case 1:
      console.log("Shapes with 1 side are not supported")
      break;
    case 0:
      console.log("Shapes with 0 side are not supported")
      break;
  }
}