let obj={
    name:"vaishnav",
    age:21
}
let obj1={
    name:"ajay",
    age:22
}
let obj2={
    name:"avesh",
    getname:function getname(){
        return this.name
    }
}
function show(message){
    return message+" "+this.name+"  age is:"+this.age
}
//call  --call() method allows an object to use the method (function) of another object.
console.log(show.call(obj,"hello"))
console.log(show.call(obj1,"hello"))
var getname=obj2.getname()
let obj3={name:"rahul",getname,age:24}
console.log(show.call(obj3,"hello"))

//apply --similar to call but here passing arguments will be in []
console.log(show.apply(obj,["hello"]))
console.log(show.apply(obj1,["hello"]))


//bind
let obj4={
    details:function student(rollno,id){
        return this.name+","+rollno+","+id;
    }
}
var student1={name:"vaishnav"}
var result=obj4.details.bind(student1,14,2421)
console.log(result())