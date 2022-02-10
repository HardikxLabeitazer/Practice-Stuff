const fs = require('fs');
const xlsx = require("xlsx")
let buffer = fs.readFileSync('./example.json');

let data = JSON.parse(buffer);
console.log(data);


data.push({

    "name": "Thor",
    "last Name": "Odinson",
    "isAvenger": true,
    "friends": ["Steve", "Tony", "Bruce"],
    "age": 400,
    "address": {
        "planet": "asgard",

    }


});

console.log(data);


let stringData = JSON.stringify(data);

//console.log(stringData);

fs.writeFileSync("example.json", stringData);

console.log("JSON file updated");

function excelWriter(filename,sheetname,jsondata){
let newWB  = xlsx.utils.book_new();
//Creating a new workbook
let newWS = xlsx.utils.json_to_sheet(jsondata);
//Json is converted to sheet format(rows and cols)
xlsx.utils.book_append_sheet(newWB,newWS,sheetname);
xlsx.writeFile(newWB,filename);
}


function excelreader(filename,sheetname){
let wb = xlsx.readFile(filename);
let excelData = wb.Sheets[sheetname];
let ans = xlsx.utils.sheet_to_json(excelData);
console.log(ans);
}