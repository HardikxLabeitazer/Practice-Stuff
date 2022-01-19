

//console.log("Open calculator")
//cp.execSync("calc")

//console.log("open vscode")
//cp.execSync('code')
//cp.execSync("start firefox https://www.pepcoding.com/resources/online-java-foundation")
//cp.execSync("start MicrosoftEdge")

//let output = cp.execSync('node test.js')
//console.log("output " + output)

const fs = require("fs")
//console.log(cp.arch())
//console.log(cp.platform())
const path = require("path")
let content = fs.readFileSync('f1.txt')
//console.log("this is F1 data:"+content)

//fs.writeFileSync('f1.txt','This data will be written on F1');
//fs.writeFileSync('f3.txt','This data will be written on f3');
//console.log('Data written')

//s.readFileSync('f3.txt')
//fs.appendFileSync('f3.txt',"I have corrected my mistake")
//fs.readFileSync('f3.txt')

//fs.unlinkSync('f3.txt')
//console.log("f3 deleted")
//fs.mkdirSync("mydirec")
//console.log("Created")
////fs.rmdirSync("mydirec")
//console.log("Deleted")
//fs.mkdirSync("mydir")
//let doesexist  = fs.existsSync("mydir")
//console.log(doesexist)

////let statsofdirec = fs.lstatSync('mydir')
//console.log(statsofdirec)

//console.log('isFile?',statsofdirec.isFile())
//console.log('isDirectory?',fs.statsofdirec.isDirectory())

/////let folderpath = 'C:\Users\hardi\Documents\FJP3DEV\BASICS\.dist\Node\mydir'
//let foldercontent = fs.readdirSync("directory Content"+folderpath)
//console.log()
let folderpath = 'C:\\Users\\hardi\\Documents\\FJP3DEV\\BASICS\\.dist'
let foldercontent = fs.readdirSync(folderpath)
console.log("Folder content"+ foldercontent)

//src file destination
//for node js first create the path then we are needed to send the content to destination file
let srcfilepath = 'C:\\Users\\hardi\\Documents\\FJP3DEV\\BASICS\\.dist\\Node\\f1.txt'
let destinationpath = 'C:\\Users\\hardi\\Documents\\FJP3DEV\\BASICS\\.dist\\Node\\mydir2'

let tobecopiedfilepath = path.basename(srcfilepath) //name
console.log(tobecopiedfilepath)

let destpath = path.join(destinationpath,tobecopiedfilepath) //old path + f1.txt

console.log(destpath)

fs.copyFileSync(srcfilepath,destpath) //send file content from source folder to destination folder
console.log("File copied")

let ext = path.extname('C:\Users\hardi\Documents\FJP3DEV\BASICS\.dist\Node\f1.txt')
console.log(ext)

let basename = path.basename('C:\Users\hardi\Documents\FJP3DEV\BASICS\.dist\Node\f1.txt')
console.log("Basename->"+basename)

console.log(__dirname)