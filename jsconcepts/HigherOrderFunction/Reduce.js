let arr = [2,3,4,5,6];

// let sum1 = arr.reduce(function(sum,value){
//         let updatedsum = sum + value;      //reduce function always returns a single value instead of an array
//         return updatedsum;
// },0)
let multi = arr.reduce(function(mul,value){
    let updatedprod = mul * value;
    return updatedprod;
})
console.log(multi);