//var in JS are function scoped
//let,const in JS are block scoped
//var,let reassigning is possible but not with const

var name="vaishnav"
console.log(name) //vaishnav

let name1="vaishnav"
console.log(name) //vaishnav

const name2="vaishnav"
console.log(name2) //vaishnav

//------------------------------------------------------------
var a="vaishnav"
a="avesh"
console.log(a) //avesh

let b="vaishnav"
b="vijay"
console.log(b) //vijay

// const c="vaishnav"
// c="ravi"
// console.log(c)  //type error 

//var as fucntion scoped
function xyz(abc){
    if(abc){
        var name="ravi"
    }
    console.log(name)

}
xyz(true)

//let,const as block scoped
// function xyzw(abc){
//     if(abc){
//         let name="ravi"
//         const age=23
//     }
//     console.log(name,age) //reference error

// }
// xyzw(true)

//------------------------------------------------------------------
var toss="head";
if(true){
    var toss="tail";
    console.log(toss) //tail
}
console.log(toss) //tail

let toss1="head";
if(true){
    let toss1="tail";
    console.log(toss1) //tail
}
console.log(toss1) //head

const toss2="head";
if(true){
    const toss2="tail";
    console.log(toss2) //tail
}
console.log(toss2) //head

