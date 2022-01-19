function add(a,b){
     console.log('The sum is:'+(a+b));
}
function sub(a,b){
    console.log("The sub is:"+(a-b))
}
function mul(a,b){
    console.log("the mul is:"+(a*b))
}
function div(a,b){
    console.log("the div is"+(a/b))
}

module.exports={
    addition:add,
    substract:sub,
    multiply:mul,
    division:div
}