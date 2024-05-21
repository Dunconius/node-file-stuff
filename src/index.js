
// const fs = require("node:fs");    // - this syntax did not work
const fs = require('fs');

console.log("Promise output:" + doesFileExist("../pokemonStats.json"));
console.log("Sync output:" + doesFileExistSync("./pokemonStats.json"));

function doesFileExist(targetPath){
    let result = false;

    fs.exists(targetPath, (existsResult) => {
        result = existsResult;
    });

    return result;
}

function doesFileExistSync(targetPath){
    let result = false;

    if (fs.existsSync(targetPath)){
        result = true;
    } else {
        result = false;
    }

    // TODO: find file logic goes here
    // Takes time as well - promises or async/await

    return result;
}



function createJsonFile(targetPath, data){
    // wishilist - already existis
}



function loadDataFromFile(targetPath){
    return data = null;
    // TODO: load data from file
    // Reading data takes time
    // promises or async/wait

}



function saveDataToFile(targetPath, data){
    // TODO - write data to JSON file
}