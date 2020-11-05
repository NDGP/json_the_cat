const request = require('request');
const fs  = require('fs');
const { argv } = require('process');



const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (err, response, body) => {

    if  (err) {
      callback(err.message, null);
      return; 
    }
    if  (body === "[]") {
      callback("Hey! Thats not a cat! NO! BAD USER!", null);
      return;
    }
    const data = JSON.parse(body);
    callback(null, data[0].description);
    return;
  });
};



  
module.exports = fetchBreedDescription;

