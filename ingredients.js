const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
};
// Write a for loop that prints out the contents of ingredients:
for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i])
};
// Write any loop (while or for) that prints out the contents of ingredients backwards:
// for loop - print array reversed
for (let i = ingredients.length; i >= 0; i--) {
  console.log(ingredients[i]);
};

// while loop - print array reversed
let t = ingredients.length;
while (t >= 0) {
  console.log(ingredients[t]);
  t--;
};




