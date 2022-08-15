const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce((previousValue, currentValue) => previousValue + currentValue);
console.log(totalBatteries);


// Create a new variable called `totalBatteries`, which holds the sum of all of
//   the battery amounts in the `batteryBatches` array. (Note that the
//   `batteryBatches` variable has been provided for you in `index.js`.) Naturally,
//   you should use `reduce()` for this!


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
