let arr = [
    { name: "A", age: 14, gender: "M" },
    { name: "B", age: 34, gender: "M" },
    { name: "C", age: 24, gender: "F" },
    { name: "D", age: 44, gender: "F" },
    { name: "E", age: 44, gender: "M" },
    { name: "F", age: 28, gender: "F" },
    { name: "G", age: 36, gender: "M" },
    { name: "H", age: 47, gender: "F" },


];
let myarr = arr.filter(function check(att) {

    if (att.gender == 'F') {
        return true;
    }
    else return false;
}).map(function (n) {
    return n.age;
})

// let ansarr = myarr.map(function assign(give){
//     return give.age;
// })

console.log(myarr);