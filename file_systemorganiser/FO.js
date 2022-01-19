//let input = process.argv[2];
//let input = process.argv;
//let input = process.argv.slice[2];
//console.log(input)
const fs = require("fs");
const path = require("path");
let inputArr = process.argv.slice(2);
let command = inputArr[0];

let types={
    media:['mp4','mkv','mp3'],
    archives:["zip","7z","rar","tar","gz","ar","iso","xz"],
    documents:[
        "docx","doc","pdf","xlsx","xls","odt","ods","odp","odg","odf","txt","ps","tex"
    ],
    app :["app","dmg","pkg","deb","lnk"],
};
switch(command){

    case 'tree':
        console.log("Tree implemented");
        break;
    case 'organize':
        organizeFn(inputArr[1]);
        break;
    case 'help':
        console.log("Help Implemented");
        break;

    default:
        console.log("PLEASE ENTER A VALID COMMAND");
        break;


}

//function organizeFn(dirpath){
 //   console.log(dirpath);
//}



function organizeFn(dirpath){
    let destpath;
    if(dirpath==undefined){
        console.log("please enter a valid directory path");
        return;
    }
    else{

        let doesExist = fs.existsSync(dirpath);
        //console.log(doesExist);

        if(doesExist==true){
            destpath = path.join(dirpath ,"organized_files");

            if(fs.existsSync(destpath)==false){
                fs.mkdirSync(destpath);
            }
            else{
                console.log("This folder already Exists");
            }
        }
        else{
            console.log("Please enter a valid path");
        }
        //organizeHelper(dirpath,destpath);
    }
  organizeHelper(dirpath,destpath);
    
}

function organizeHelper(src,dest){
    let childNames = fs.readdirSync(src);
    //console.log(childNames);
    for(let i = 0;i<childNames.length;i++){
        let childAddress = path.join(src,childNames[i]);
        let isFile = fs.lstatSync(childAddress).isFile();
        console.log(childAddress + " "+ isFile);

        if(isFile==true){
            leftfileCategory = getCategory(childNames[i]);
            console.log(childNames[i] + " belong to " +leftfileCategory);
            sendFiles(childAddress,dest,leftfileCategory);
        }


    }
}

function getCategory(name){
    let ext = path.extname(name);
   
    ext = ext.slice(1);
    for (let type in types){
        let cTypeArr =  types[type];
       // console.log(cTypeArr);

       for(let i = 0;i<cTypeArr.length;i++){
           if(ext==cTypeArr[i]){
                return type;
           }
       }
    }

    return 'others';
}

function sendFiles(srcFilePath,dest,filecategory){
    let catpath = path.join(dest,filecategory);

    if(fs.existsSync(catpath)==false){
        fs.mkdirSync(catpath);
    }

    let filename = path.basename(srcFilePath);
    let destfilepath = path.join(catpath,filename);

    fs.copyFileSync(srcFilePath,destfilepath);
    fs.unlink(srcFilePath);
    console.log(filename + " is copied to "+filecategory );
    
}