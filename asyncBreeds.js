/* eslint-disable func-names, no-console */
// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function (breed, cbRunsAfterDataAcquired) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    if (error) {
      cbRunsAfterDataAcquired(undefined);
    } else cbRunsAfterDataAcquired(data);
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};
// const printOutBreed = (bread) => {
//   console.log('Return Value: ', bread); // => will NOT print out details, instead we will see undefined!
//   // console.log('yoo!!!, ', bread)
// }

// // we try to get the return value
// breedDetailsFromFile('Bombay', printOutBreed);
module.exports = breedDetailsFromFile;