console.log("My name is "+name) //My name is undefined
var name="vaishnav"
console.log("My name is "+name) //My name is vaishnav

function fun(){
    console.log("My name is "+name) //My name is undefined
    var name="ajay";
    console.log("My name is "+name) //My name is ajay
}
fun()