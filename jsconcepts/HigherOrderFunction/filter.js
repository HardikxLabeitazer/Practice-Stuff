let numarr = [2,3,5,7,9,12,19,14,18,21,22];

let evenarr = numarr.filter(function(n){
    if((n%2==0)){
        return true;
    }
    else{
        return false;
    }
});
console.log(evenarr);



const transactions = [10000,5000,4000,-898,3000,-4500,700];
let profitarr = transactions.filter(function profit(n){
    if(n>0){
        return true;
    }
    else{
        return false;
    }
});
console.log(profitarr);