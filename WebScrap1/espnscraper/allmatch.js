

const request = require('request');
const cheerio = require('cheerio');
const scoreCardArr=require("./scorecard")

function getAllMatchLink(url){
    request(url,function(error,reponse,html){
        if(error){
            console.log(error);
        }
        else{
            extractAllLink(html);
        }
    })
}



function extractAllLink(html){
    let $ = cheerio.load(html);
    let anchEl = $('a[data-hover="Scorecard"]')
    for(let i = 0;i<anchEl.length;i++){
        let lk = $(anchEl[i]).attr("href");
        let fulllink = "https://www.espncricinfo.com"+ lk;
       // console.log(fulllink);
        scoreCardArr.ps(fulllink);
       
      
    }
    
}

module.exports = {
    getAllMatch : getAllMatchLink
};