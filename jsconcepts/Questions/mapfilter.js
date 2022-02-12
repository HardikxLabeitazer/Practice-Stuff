


let studentrecords = [
    { name :"Abhishek", id:123,marks:98},
    { name :"Udai", id:101,marks:90},
    { name :"Himanshu", id:200,marks:96},
    { name :"Mrinal", id:115,marks:75},
]


let ans = studentrecords.map(function(studentrecords){
    return studentrecords.name.toUpperCase();
});

console.log(ans);

let ans2 = studentrecords.filter(function(studentrecords){
    return studentrecords.marks>=50 && studentrecords.id>=120;
});

console.log(ans2);