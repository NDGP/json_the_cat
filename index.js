const fetchBreedDescription = require('./breedFetcher');

let args = process.argv.slice(2);
let breedName = args[0];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});

module.exports = fetchBreedDescription