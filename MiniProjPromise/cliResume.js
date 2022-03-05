const { createPromptModule } = require("inquirer");
const inquirer = require("inquirer");
const cp = require('child_process');

inquirer.prompt([
    {
        type:'list',
        name:'selection',
        choices:['About','Skills','Academics','Projects']
    }
])
.then(function(ans){
    if(ans.selection=='About'){
        console.log("This is About section");
    }
    else if(ans.selection=='Skills'){
        console.log("Java,JavaScript,HTML,CSS,ML,DL,Solidity,C++,C#");
    }
    else if(ans.selection=="Academics"){
        console.log("This is Academics Section");
    }
    else if(ans.selection=="Projects"){
        cp.execSync("start chrome https://github.com/HardikxLabeitazer")
    }
});