let bins = {
  waste: 0,
  recycling: 0,
  compost: 0,
}





const smartGarbage = function (trash, bins) {
  // Your code in here ...
  if (trash === 'waste') {
    bins.waste += 1
  } else if (trash === 'recycling') {
    bins.recycling += 1
  } else if (trash === 'compost') {
    bins.compost += 1
  }
  return bins
}



console.log(smartGarbage('recycling', bins));

bins

// each item is waste recycling or compost, imput string and number
// update matching property in object 'bins'


// Our function will receive two arguments:

// The first argument, trash, is a string that will tell our function what type of item is being submitted.

// The second argument, bins, is an object containing three properties(waste, recycling, and compost), which hold some numerical value.Our function must increase the correct value in the bins object, and then return the newly updated object.

// The smartGarbage function should return the object:
smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });
{
  waste: 4,
    recycling: 3,
      compost: 5
}
