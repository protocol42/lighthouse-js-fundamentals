
// for loop
{
  const chorus = "Let's dance!";
  for (let repeat = 0; repeat < 10; repeat++) {
    console.log(chorus);
  }
  console.log("Until the sun comes up!");
}


// loopy lighthouse
// fizz buzz varient
{
  for (let nums = 100; nums <= 200; nums++) {
    if (nums % 3 === 0 && nums % 4 === 0) {
      console.log('LoopyLighthouse');
    } else if (nums % 3 === 0) {
      console.log('Loopy');
    } else if (nums % 4 === 0) {
      console.log('Lighthouse');
    } else {
      console.log(nums);
    };
  };
}



// for. .in loop
// adds each array item to 'total'
{
  const amounts = [61.00, 52.25, 112.99, 5.00];

  let total = 0;
  for (let i = 0; i < amounts.length; i++) {
    total += amounts[i];
  }
  console.log('Order total is: ', total);
}




