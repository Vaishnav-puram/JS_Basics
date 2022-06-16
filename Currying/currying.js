//transform function of 'n' arguments into 'n' functions with one or fewer arguments
function fun1(a){
    return function fun2(b){
        return a+b;
    }
}
console.log(fun1(3)(4))  //7
//--------------------------------------------------------------------------
function multiply(a,b){
    return a*b;
}

function currying(fn){
    return function fun1(a){
        return function fun2(b){
            return fn(a,b)
        }
    }
}
var result=currying(multiply)
console.log(result(4)(3))