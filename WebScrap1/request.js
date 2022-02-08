const  Cheerio  = require('cheerio');
const request = require('request');

console.log("Before");


request('https://www.worldometers.info/coronavirus/', cb);

function cb(error,response,html){
    if(error){
        console.log(error);
    }
    else{
        handleHtml(html);
    }
}


function handleHtml(html){
    let selTool = Cheerio.load(html);
    let contentArr = selTool('.maincounter-number span');

    //console.log(contentArr);

    // for(let i = 0;i<contentArr.length;i++){
    //     let data = selTool(contentArr[i]);
    //     console.log(data);
    // }

    let totalcases = selTool(contentArr[0]).text();
    console.log("Total Cases:"+totalcases);

    let recovery = selTool(contentArr[2]).text();
    console.log("Total Recovery:"+recovery);

    let death = selTool(contentArr[1]).text();
    console.log("Total Deaths:"+death);
}


console.log("After");