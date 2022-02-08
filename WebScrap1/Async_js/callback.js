
// function printFirstName(firstName,cb){
//     console.log(firstName);
//     cb("Verma");
// }




// function printLastName(lastName){
//     console.log(lastName);
// }

// printFirstName('Hardik',printLastName);


//Synchronous
const fs = require('fs');



// console.log('before');

// let data = fs.readFileSync('f1.txt');
// console.log(" "+data);
// console.log('after');


// //Asynchronous

 console.log('before');

fs.readFile('f1.txt',cb);
fs.readFile('f2.txt',cb2);
function cb(err,data){
    if(err){
        console.log(err);
    }
    
    console.log(' '+data);
}
function cb2(err,data){
    if(err){
        console.log(err);
    }
    
    console.log(' '+data);
}


console.log('after');