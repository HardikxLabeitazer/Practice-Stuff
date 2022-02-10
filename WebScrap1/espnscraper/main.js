const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";

const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
let iplpath = path.join(__dirname,"IPL");
dirCreator(iplpath);

const allmatchobj = require('./allmatch');
request(url,cb);

function cb(err,response,html){
    if(err){
        console.error(err);
    }
    else{
        extractLink(html);
    }
}

function extractLink(html){
    let $ = cheerio.load(html);
    let anchorElem  = $('a[data-hover="View All Results"]')


    let link = anchorElem.attr("href");
    
    let fulllink = "https://www.espncricinfo.com"+ link;
    console.log(fulllink);


    allmatchobj.getAllMatch(fulllink);
}




function getdetails(html){
    let $ = cheerio.load(html);
     let description = $(".header-info .description")
     let destring = description.text().split(',');
     console.log(destring);
}

function dirCreator(filepath){
    if(fs.existsSync(filepath)==false){
        fs.mkdirSync(filepath);
    }
}