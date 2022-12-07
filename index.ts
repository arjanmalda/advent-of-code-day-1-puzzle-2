const fs = require('fs');

fs.readFile('puzzle-input.txt', 'utf8', function (error, data) {
  if (error) return error;

  const dataWithoutLineBreaks = data.split(/\n/);
  const arrayOfSums = [];
  const maxSums = [];
  let temporaryArray = [];

  for (let index = 0; index < dataWithoutLineBreaks.length; index++) {
    if (dataWithoutLineBreaks[index].length > 1) {
      temporaryArray.push(parseInt(dataWithoutLineBreaks[index]));
    }

    if (dataWithoutLineBreaks[index].length < 1) {
      const temporaryArraySum = temporaryArray.reduce(
        (partialSum, a) => partialSum + a,
        0
      );
      arrayOfSums.push(temporaryArraySum);
      temporaryArray = [];
    }
  }
  findLargest3(arrayOfSums);
});

function findLargest3(sumArray) {
  const sortedSumArray = sumArray.sort((a, b) => (a < b ? 1 : a > b ? -1 : 0));
  const sumOfLargest3 = sortedSumArray.slice(0, 3).reduce((a, b) => a + b, 0);

return sumOfLargest3;
}
