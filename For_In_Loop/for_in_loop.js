//allows us to loops through the properties of object
//syntax for(variable in object){code to be executed}

let arr=['Java','C','C++','JavaScript','MySQL'];
for(items in arr){
    console.log(items) // 0 1 2 3 4
}

const details={
    name:"vaishnav",
    age:23
}
for(items in details){
    console.log(items) // name age
}

for(items in "vaishnav"){
    console.log(items) //0 1 2 3 4 5 6 7
}
//by for in loop we achieve enumerating i.e, looking out the properties of objects