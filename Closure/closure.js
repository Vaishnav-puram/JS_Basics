//allows functions to store values of variables for further reference
//i.e., inner functions can have access to outer function variables as well as global variables
function fun1(){
    var x=20;
    return function fun2(){
        return x;
    }
}
console.log(fun1()()) //20

//scope chaining is possible if function does'nt see variables in it it goes to it's parent function to check the variable

//--------------------------------------------------------------------------------------
let fun2=(a)=>{
    let b=10;
    let fun3=()=>{
        let sum=a+b;
        console.log(`sum is:${sum}`) //sum is 30
    }
    fun3();
}
fun2(20)

//------------------------------------------------------------------------------------------
const fun4=(a)=>{
    let b=10;
    const fun5=()=>{
        let sum=a+b;
        console.log(`sum is:${sum}`) //sum is 50
    }
    return fun5();
}
let res=fun4(40);
