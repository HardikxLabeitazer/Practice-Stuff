
//const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/mumbai-indians-vs-chennai-super-kings-1st-match-1216492/full-scorecard";

const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const xlsx = require("xlsx");
const path = require('path');

function processscorecard(url) {
    request(url, cb);
}


function cb(err, response, html) {
    if (err) {
        console.error(err);
    }
    else {
        getdetails(html);
    }
}






function getdetails(html) {
    let $ = cheerio.load(html);
    let description = $(".header-info .description")
    let destring = description.text().split(',');

    let venue = destring[1].trim();
    let date = destring[2].trim();

    let result = $(".match-info.match-info-MATCH.match-info-MATCH-half-width .status-text").text();
    console.log(venue);
    console.log(date);
    console.log(result);
    console.log("-------------------------------------------------");
    let innings = $('.card.content-block.match-scorecard-table>.Collapsible');

    let htmlString = '';

    for (let i = 0; i < innings.length; i++) {
        htmlString += $(innings[i]).html();

        let teamName = $(innings[i]).find('h5').text();
        teamName = teamName.split('INNINGS')[0].trim();

        let opponentIdx = (i == 0) ? 1 : 0;
        let opponentName = $(innings[opponentIdx]).find('h5').text();
        opponentName = opponentName.split("INNINGS")[0].trim();
        // console.log(teamName);
        // console.log(opponentName);

        let cinning = $(innings[i]);

        let allrows = cinning.find('.table.batsman tbody tr');

        for (let j = 0; j < allrows.length; j++) {
            let allcols = $(allrows[j]).find('td');
            let isworthy = $(allcols[0]).hasClass('batsman-cell');
            if (isworthy == true) {
                let playername = $(allcols[0]).text().trim();
                let runs = $(allcols[2]).text().trim();
                let balls = $(allcols[3]).text().trim();
                let fours = $(allcols[5]).text().trim();
                let sixes = $(allcols[6]).text().trim();
                let STR = $(allcols[7]).text().trim();
                console.log(`${playername} | ${runs} | ${balls} | ${fours} | ${sixes} | ${STR} `);
                //console.log(playername+"    |   "+runs+"    |   "+balls+"   |   "+fours+"   |   "+sixes+"   |   "+STR);

                processPlayer(teamName, opponentName, playername, runs, balls, fours, sixes, STR, venue, date, result);
            }


        }


    }



}
function processPlayer(teamName, opponentName, playername, runs, balls, fours, sixes, STR, venue, date, result) {

    let teampath = path.join(__dirname, "IPL", teamName);
    dirCreator(teampath);

    let filepath = path.join(teampath,playername+'.xlsx');

    let content = excelreader(filepath,playername); // []


    let playerobj ={
        playername,
        teamName,
        opponentName,
        runs,
        balls,
        fours,
        sixes,
        STR,
        venue,
        date,
        result
    };

    content.push(playerobj);

    excelWriter(filepath,playername,content);


}
function dirCreator(filepath) {
    if (fs.existsSync(filepath) == false) {
        fs.mkdirSync(filepath);
    }
}

function excelWriter(filename, sheetname, jsondata) {
    let newWB = xlsx.utils.book_new();
    //Creating a new workbook
    let newWS = xlsx.utils.json_to_sheet(jsondata);
    //Json is converted to sheet format(rows and cols)
    xlsx.utils.book_append_sheet(newWB, newWS, sheetname);
    xlsx.writeFile(newWB, filename);
}


function excelreader(filename, sheetname) {
    if(fs.existsSync(filename)==false){
        return [];
    }
    let wb = xlsx.readFile(filename);
    let excelData = wb.Sheets[sheetname];
    let ans = xlsx.utils.sheet_to_json(excelData);
    return ans;
}

module.exports = {
    ps: processscorecard,
};

