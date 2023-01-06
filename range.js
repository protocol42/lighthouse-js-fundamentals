
const range = function (start, end, step) {
  let numbers = [];
  if (typeof start !== 'number' || typeof end !== 'number' || typeof step !== 'number') {
    return (numbers)
  } else if (start > end) {
    return (numbers)
  } else if (step <= 0) {
    return (numbers)
  } else {
    for (let i = start; i <= end;) {
      numbers.push(i)
      i += step;
    }
    return numbers;
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 0));


// test inputes - using if else
// return an empty array[] if given incorrect parameters, :
// start, end, or step being undefined
// let start = 0;
// let end = 8;
// let step = 2;

// main script
// for loop
// let start = 0;
// let end = 10;
// let step = 2;


// conditionals

// start being greater than end
// step being 0, or negative



// statements








