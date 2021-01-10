// const { promises } = require("fs");

function someAsyncTask(callback){
   console.log("Start");
   setTimeout(function () {           
        console.log("Hello");
        callback();
   },3000) 
}

let someTaskPromise = function () {
    return new Promise(function (resolve,reject) {
        someAsyncTask(resolve);
    })
}

someTaskPromise()
.then(function() {
    console.log("End");
})
    