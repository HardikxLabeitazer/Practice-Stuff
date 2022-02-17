

let mypromise = new Promise(function(resolve,reject){

    const a = 'pepcoders';
    const b = 'pepcoders';

    if(a===b){
        resolve();
    }
    else{
        reject();
    }

});

mypromise.then(function(){
    console.log("Equal");
});

mypromise.catch(function(){
    console.log("Not Equal");
});