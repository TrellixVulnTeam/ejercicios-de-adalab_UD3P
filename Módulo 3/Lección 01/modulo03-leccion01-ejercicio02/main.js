"use strict";

class Square {
  constructor(side) {
    this.side = side;
  }

  perimeter() {
    console.log(4 * this.side);
  }

  area() {
    console.log(Math.pow(this.side, 2));
  }
}

const one = new Square(1);
const three = new Square(3);
const seven = new Square(7);

one.perimeter();
one.area();
three.perimeter();
three.area();
seven.perimeter();
seven.area();
