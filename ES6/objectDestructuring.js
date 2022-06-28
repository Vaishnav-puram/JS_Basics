// //by this it is possible to unpack values from arrays or properties from objects into distinct variables
// let obj={
//     name:"vaishnav",
//     age:23,
//     city:"hyderabad"
// }
// console.log(`Name is ${obj.name} age is ${obj.age} lives in ${obj.city}`) //Name is vaishnav age is 23 lives in hyderabad

// //with objectdestructuring
// let {name,age,city}=obj //order is important to match with properties of object
// console.log(`Name is ${name} age is ${age} lives in ${city}`) ///Name is vaishnav age is 23 lives in hyderabad
// //or 
// // let name,age,city;
// // ({name,age,city}=obj)

// //second property of object destructuring 
// let{name:myname,age:myage,city:mycity}=obj;
// console.log(`Name is ${myname} age is ${myage} lives in ${mycity}`) //Name is vaishnav age is 23 lives in hyderabad


let obj1={
    Name:"vaishnav",
    Age:23,
    City:"hyderabad",
    fav:{
        one:"cars",
        two:"movies"
    }
}
let{Name,Age,City,fav}=obj1;
console.log(`Name is ${Name} age is ${Age} lives in ${City} and interests ${fav.one} ${fav.two}`) //Name is vaishnav age is 23 lives in hyderabad and interests cars movies
