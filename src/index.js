
// const fs = require("node:fs");    // - this syntax did not work
const fs = require("node:fs");
const fsPromises = require('node:fs/promises');



console.log("Promise output:" + doesFileExistPromise("./pokemonStats.json"));
console.log("Sync output:" + doesFileExistSync("./pokemonStats.json"));

(async () => {
    let asyncResult = await doesFileExistAsync("./pokemonStats.json");
    console.log("Async output:" + asyncResult.size);
})();


async function doesFileExistAsync(targetPath){
    return await fsPromises.stat(targetPath);
    // let result = false;
    // result = await fsPromises.stat(targetPath);
    // return result;
}

function doesFileExistPromise(targetPath){
    let result = false;

    return new Promise((resolve, reject) => {
        fsPromises.stat(targetPath).then(statData => {
            if (statData.size || statData.birthtimeMs) {
                result = true;
                console.log(result);
                resolve(result);
            } else {
                resolve(result);
            }
        }).catch(error => {
            reject(error);
        })

    });


    // fs.exists(targetPath, (existsResult) => {
    //     result = existsResult;
    // });
    // return result;
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