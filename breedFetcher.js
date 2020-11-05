const request = require('request');
const fs  = require('fs');
const { argv } = require('process');

const breedFinder = (breedName) => {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (err, response, body) => {
    
  if(err){
    return console.log(err)
  }

  if(body === "[]"){
        return console.log("Hey! Thats not a cat! NO! BAD USER!")
      }
    const data = JSON.parse(body);

    console.log(data[0].description)
  })
}

let args = process.argv.slice(2)
let breedName = args[0]

breedFinder(breedName)