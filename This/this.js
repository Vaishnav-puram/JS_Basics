// JS this is a keyword refers to the object it belongs to
//It has different values based on where it is used
//Alone it refers to global object
//In regular function , it refers to global object
//In method it refers to the owner object
//this in a function ,in strict mode it is undefined

//this alone
console.log(this)  //{} global object

//this in regular function
function add(a,b){
    console.log(a+b) // 5
    console.log(this) //global object
}
add(2,3)

//this in method
const obj={
    name:"vaishnav",
    age:23,
    sum:function add(a,b){
        console.log(a+b) // 5
        console.log(this) // { name: 'vaishnav', age: 23, sum: [Function: add] }
        console.log(this.name) // vaishnav
    }
}
obj.sum(2,3)


//this in strict mode
"use strict"
function add(a,b){
    console.log(a+b) // 5
    console.log(this) // undefined
}
add(2,3)

//----------------------------------------------------
const obj1={
    name:"vaishnav",
    age:23,
    sum:function add(a,b){
        console.log(a+b) // 5
        console.log(this) // { name: 'vaishnav', age: 23, sum: [Function: add] }
        console.log(this.name) // vaishnav

        function print(){
            var name="ajay"
            console.log("name in print method is "+name) // name in print method is ajay
            console.log(this) // global object ,since this is in regular function expression even though it is in an object
        }
        print()
    }
}
obj1.sum(2,3)

