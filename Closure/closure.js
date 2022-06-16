//allows functions to store values of variables for further reference
function fun1(){
    var x=20;
    return function fun2(){
        return x;
    }
}
console.log(fun1()())

//scope chaining is possible if function does'nt see variables in it it goes to it's parent function to check the variable

