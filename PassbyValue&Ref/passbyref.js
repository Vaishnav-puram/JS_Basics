//In non-primitive data types pass by reference happens meaning sharing og memory takes place while assigning to another object
let obj={
    name:"vaishnav",
    age:23
}
let obj1=obj;
console.log(obj.name) //vaishnav
console.log(obj1.name) //vaishnav
obj1.name="Puram Vaishnav";
console.log(obj.name) //Puram Vaishnav
console.log(obj1.name) //Puram Vaishnav
