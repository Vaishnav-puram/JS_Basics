let num=7.66
console.log(Math.sign(num)) //1 means positive sign
console.log(Math.trunc(num)) //7

let num1=-5.66
console.log(Math.sign(num1)) //-1 means negative sign
console.log(Math.trunc(num1)) //-5

let num2=0
console.log(Math.sign(num2)) //0 neither positive nor negative
console.log(Math.trunc(num2)) //0

let num3=-0
console.log(Math.sign(num3)) //-0
console.log(Math.trunc(num3)) //-0

let num4=NaN
console.log(Math.sign(num4)) //NaN
console.log(Math.trunc(num4)) //NaN

let num5="vaishnav"
console.log(Math.sign(num5)) //NaN
console.log(Math.trunc(num5)) //NaN
