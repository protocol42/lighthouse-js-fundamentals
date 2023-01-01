// start
// for loop
{
  const chorus = "Let's dance!";
  for (let repeat = 0; repeat < 10; repeat++) {
    console.log(chorus);
  }
  console.log("Until the sun comes up!");
}
// end



// start
// for in loops - iterate over arrays
// similar to python for loops
{
  const amounts = [61.00, 52.25, 112.99, 5.00];

  // for loop
  // adds each array item to 'total'
  {
    let total = 0;

    for (let i = 0; i < amounts.length; i++) {
      total += amounts[i];
    }
    console.log('Order total is: ', total);
  }
  // for...in loop
  // adds each array item to 'total'
  // similar to python for loop
  let total = 0;

  for (let amount of amounts) {
    total += amount;
  }
  console.log('Order total is: ', total);
}
// end




// start


// end


























