console.log(typeof({})) // object
console.log(typeof([])) // object
console.log(typeof(function() {})) //function because we can add properties to function just like object


function demo(){
    console.log("demo");
}
demo.newProperty="so ,by this function is also an object"
console.log(demo.newProperty)
console.log(demo) 


let arr=[1,2,3,4,5]
console.log(typeof(arr)) //object 
//isArray() determines whether an object is an array or not
console.log(Array.isArray(arr)) //true

let arr1={
    0:1,
    1:2,
    2:3,
    3:4,
    4:5
}
console.log(typeof(arr1)) //object 
console.log(Array.isArray(arr1)) // false  