
const fs = require("fs");

console.log("Before");


// fs.readFile("./Hello.txt",function(err,data){

//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("File Data :"+data);
//     }
// });


let promise = fs.promises.readFile("Test.txt");

promise.then(function(data){
    console.log("File Data"+data)
});

promise.catch(function(err){
    console.log(err);
})
console.log("After");

