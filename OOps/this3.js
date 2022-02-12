  'use strict'
//  console.log(this)

// function test(){
//     console.log(this)
// }
// test();


let obj =
    {
        name:"hardik",
    
    
        help:"Help me",
    
    
        f:function(){
            console.log(this);
        }
    }


obj.f();

// let obj ={
//         name:"hardik",
    
    
//         help:"Help me",
    
    
//         f:function f(){
//            function g(){
//                 console.log(this);
//            }
//            g();
//         }
//     }


// obj.f();