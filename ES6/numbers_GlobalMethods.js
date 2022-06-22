//isFinite(),isNaN(),isInteger()

let a=5
console.log(isFinite(a)) //true

console.log(isFinite(Infinity)) //false

console.log(isFinite(NaN)) //false

console.log(isFinite("vaishnav")) //false

console.log(isFinite(-5)) //true

console.log(Number.isFinite(a)) //true

//Note:isFinite is in global method and also in Number method


console.log(isNaN(a)) //false

console.log(isNaN("vaishnav")) //true

console.log(Number.isNaN("vaishnav")) //false

console.log(isNaN(true)) //false

console.log(Number.isNaN(true))//false

console.log(isNaN(Infinity)) //false

console.log(isNaN(NaN)) //true

//Note:isNaN is in global method and also in Number method

console.log(Number.isInteger(5)) //true

console.log(Number.isInteger("vaishnav")) //false

console.log(Number.isInteger(true)) //false

console.log(Number.isInteger(Infinity)) //false

console.log(Number.isInteger(5.55)) //false




