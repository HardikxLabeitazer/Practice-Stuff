console.log(this);

function test(){
    console.log(this);
}


// obj =
//     {
//         name:"hardik",
    
    
//         help:"Help me",
    
    
//         f:function(){
//             console.log(this);
//         }
//     }


// obj.f();


obj =
    {
        name:"hardik",
    
    
        help:"Help me",
    
    
        f:function(){
           function g(){
                console.log(this);
           }
           g();
        }
    }


obj.f();