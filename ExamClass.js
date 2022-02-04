'use strict'
class Rectangle {
	constructor(height, width) {
	  this.height = height;
	  this.width = width;
	}
	// Getter
	get area() {
	  return this.calcArea();
	}
	get concac() {
		return this.calcArea();
	}
	// Method
	calcArea() {
	  return { array:1 };
	}
  }
  
  const square = new Rectangle(10, 10);
  var data = square.concac;

  console.log(data.array); // 100
