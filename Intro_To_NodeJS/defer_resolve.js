function downloadPromise(){
    return new Promise(function (resolve,reject){
        console.log("Start")
        setTimeout(function (){
            console.log("Downloaded.")
            resolve();
        },3000)
    })
}

downloadPromise()
    .then(function(){
        setTimeout(function(){
            console.log("End.")
        },2000)
    })