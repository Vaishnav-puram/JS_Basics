//In es5
function sum(a,b,c){
    console.log(a+b+c)
}
//sum(1,2,3) //6
var arr=[1,2,3]
sum.apply(null,arr) //6

//In es6 with the help of spreadOperator we can replace apply method
function sum1(a,b,c){
    console.log(a+b+c)
}
var arr1=[1,2,3]
console.log(...arr1) //1 2 3
sum(...arr1) //6

// with the help of spreadOperator we can replace concatenate operator
let a=[1,2,3]
let b=[4,5,6] 
// console.log(a=a.concat(b)) //[ 1, 2, 3, 4, 5, 6 ]
console.log([...a,...b]) ///[ 1, 2, 3, 4, 5, 6 ]

// with the help of spreadOperator we can replace copy method
let arrc1=[1,2,3]
let arrc2=arrc1
console.log(arrc2) //[ 1, 2, 3 ]
arrc2.push(4,5,6)
console.log(arrc2) //[ 1, 2, 3, 4, 5, 6 ]
console.log(arrc1) //[ 1, 2, 3, 4, 5, 6 ]

let arrc3=[1,2,3]
let arrc4=[...arrc3]
console.log(arrc4) //[ 1, 2, 3 ]
arrc4.push(4,5,6)
console.log(arrc4) //[ 1, 2, 3, 4, 5, 6 ]
console.log(arrc3) //[ 1, 2, 3 ]
