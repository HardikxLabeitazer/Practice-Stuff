const { resolve } = require("path/posix");

// function placeOrder(drink){
//   return new Promise(function(resolve,reject){
//       if(drink==='coffee'){
//           resolve('Order For Coffee');
//       }
//       else{
//           reject("Order Cannot be placed");
//       }
//   })
// }

// function processOrder(order){
//     return new Promise(function(resolve){
//         console.log("Order is being processed");
//         resolve(`${order} Served`);
//     })
// }

// placeOrder('coffee').then(function(demand){
//     console.log(demand);
//     let orderisprocessed = processOrder(demand);
//     return orderisprocessed;
// }).then(function(orderserved){
//     console.log(orderserved);
// }).catch(function(err){
//     console.log(err);
// })



function placemyorder(drink){
    return new Promise(function(resolve,reject){
        if(drink ==='coffee'){

            resolve("Order for coffee");
        }
        else{
            reject("We don't serve that");
        }
    })
}


function processmyorder(item){
    return new Promise(function(resolve){
        console.log("Processing the Order.........");
        resolve(`${item} Served`);
    })
}


// placemyorder('coffee').then(function(item){
//     console.log(item);
//     let getmyorder = processmyorder(item);
//     return getmyorder;
// }).then(function(myorder){
//     console.log(myorder);
// }).catch(function(err){
//     console.log(err);
// })



async function serveOrder(){
    let orderplaced = await placemyorder('coffee');
    console.log(orderplaced);

    let processedorder = await processmyorder(orderplaced);
    console.log(processedorder);
}
serveOrder();