// create object with atributes 'time' and 'speed'
// value for 'speed' passed in from arg - to do
// create array 'cars'
let cars = [];

const carPassing = function (cars, speed) {
  // adds speed to new entry in object 'cars'
  // add the time in the function using Date.now()
  // take time and speed then push it to 'cars'
  // Your code in here ...
  let testObj = {
    time: Date.now(),
    speed: speed,
  };
  cars.push(testObj);
  return (cars)
}

carPassing(cars, 23)
carPassing(cars, 86)
console.log(cars);

