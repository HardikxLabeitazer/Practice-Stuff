
let str1 = "I am a pepcoder";
let partofString = str1.split('a');
console.log(partofString);

///let newarr = partofString.join('T');
//console.log(newarr);


let namearr = ['Hardik Verma','Sameer Rai','Jaspreet Singh'];

let firstname = namearr.map(function firstn(name){
    let FN = name.split(" ");
    return FN[0];
})

let lastname = namearr.map(function lastn(name){
    let LN = name.split(" ");
    return LN[1];
})

console.log(firstname);
console.log(lastname);


const transactions = [1000,3000,4000,2000,-898,3800,-4500];
const inrToUs = 74;

let arrmoney = transactions.map(function trans(amt){
    return amt*inrToUs;
})

console.log(arrmoney);