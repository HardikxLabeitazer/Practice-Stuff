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


let newWB  = xlsx.utils.book_new();
//Creating a new workbook
let newWS = xlsx.utils.json_to_sheet(data);
//Json is converted to sheet format(rows and cols)
xlsx.utils.book_append_sheet(newWB,newWS,'Avengers');
xlsx.writeFile(newWB,'abc.xlsx');


let wb = xlsx.readFile('abc.xlsx');
let excelData = wb.Sheets['Avengers'];
let ans = xlsx.utils.sheet_to_json(excelData);
console.log(ans);