

const transactions = [1000,3000,4000,2000,-898,3800,-4500];

let ans = transactions.filter(function(transactions){
    return transactions>0;
}).reduce(function(sum,value){
    return sum+value;
},0)

console.log(ans);


const transactions = [1000,3000,4000,2000,-898,3800,-4500];

let ans2 = transactions.filter(function(transactions){                  ////REDUCE RIGHT REVERSES THE ORDER OF ITERATION
    return transactions>0;
}).reduceright(function(sum,value){
    return sum+value;
},0)

console.log(ans2);