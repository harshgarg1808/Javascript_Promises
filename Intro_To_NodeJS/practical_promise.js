const { url } = require("inspector");

function download(url){
    return new Promise(function (resolve, reject){
        console.log("Start Downloading")
        if (!url.startsWith("http")){
            reject(new Error("Downloading Failed : Url does not start with http."))
        }else{
            setTimeout(function(){
                let filename = url.split("/").pop()
                console.log("Downloading Completed")
                resolve(filename);
            },3000)
        }
    })
}

function resize(filename){
    return new Promise(function (resolve,reject){
        console.log("Resizing the file " + filename )
        if (!filename.endsWith(".png")){
            reject(new Error("File is not png"))
        }else{
            setTimeout(function(){
                
                let resizedFile = filename.split(".")[0] + "-resized.png"
                console.log("The File is resized as: " + resizedFile)
                resolve(resizedFile);
            },3000)
        }
    })
}

function upload(resizedFile){
    return new Promise(function (resolve,reject){
        console.log("Uploading Begins")
        setTimeout(()=>{
                let uploadedURL = "http.//imgur.com/" + resizedFile
                resolve(uploadedURL)
        },3000)
    })
}


download("http.//cb.lk/logo.png")
    .then( resize )      

    .then( upload )
    
    .then((uploadedURL)=>{
        console.log("The file is uploaded at " + uploadedURL)
    })
    
    .catch((err)=>{
        console.log(err)
    })