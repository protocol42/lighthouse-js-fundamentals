// functs return a number that corresponds to the area of the shape.
let calculateRectangleArea = function (length, width) {
  let rectArea = length * width;
  if (length < 0 || width < 0) {
    return console.log('undefined');
  } else {
    return rectArea;
  }
};

let calculateTriangleArea = function (base, height) {
  let triArea = base * height / 2;
  if (base < 0 || height < 0) {
    return console.log('undefined');
  } else {
    return triArea;
  }
};

let calculateCircleArea = function (radius) {
  let triArea = Math.PI * (radius * radius);
  if (radius < 0) {
    return console.log('undefined');
  } else {
    return triArea;
  }
};

let length = 5
let width = 2

let base = 5
let height = 2

let radius = 3

calculateRectangleArea(length, width)
calculateTriangleArea(base, height)
calculateCircleArea(radius)


console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined
