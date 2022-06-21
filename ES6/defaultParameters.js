//it allows named parameters to be initialized with default values if no value or undefined is passed

function mul(a,b){
    console.log(b) //undefined
    console.log(a*b) //NaN since only one parameter is passed
}
mul(4) 

function mul1(a,b){
    b=(typeof(b)!=='undefined')?b:2
    console.log(a*b) //8
}
mul1(4)

//Now in ES6
function mult(a,b=2){ //default parameter
    console.log(a*b) //8
}
mult(4) 

//or by using fat arrow functions
const mult1=(a,b=2)=>{
    console.log(a*b) ///8
}
mult1(4)

const mult2=(a,b=2,c=4)=>{
    console.log(a*b*c) ///32
}
mult2(4)
