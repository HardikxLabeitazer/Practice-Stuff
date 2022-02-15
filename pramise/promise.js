const fs = require("fs");

console.log("Before");

// fs.readFile("temp.txt",function(err,data){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Data:"+data);
//     }
// })

let promise = fs.promises.readFile("temp.txt");
console.log(promise);


promise.then(function(data){console.log("Data"+data)});

promise.catch(function(err){
    console.log(err);
})

console.log("After");