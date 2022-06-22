//it is an improved way to handle fun parameters
//allows us to represent an indefinite no.of arguments as an array
//Any number of arguments will be converted into an array using the rest parameter.

//in es5
function sum(a,b,c,d,e,f,g,h,i){
    console.log(a+b+c+d+e+f+g+h+i) ///45
}
sum(1,2,3,4,5,6,7,8,9)

//in es6
function sum1(...anyName){
    console.log(anyName) //[1,2,3,4,5,6,7,8,9]
    console.log(...anyName) //1 2 3 4 5 6 7 8 9
    let total=0;
    for(items of anyName){ //for of loop
        total+=items
    }
    console.log(total) //45
}
sum1(1,2,3,4,5,6,7,8,9)

function names(a,b,...c){  // Note: Rest parameter should always be used at the last parameter of a function
    console.log(`${a} ${b}`) //vaishnav vishal
    console.log(c) //[ 'ajay', 'vijay', 'avnish', 'arun', 'rahul' ]
    console.log(c[0]) //ajay
    console.log(c.length) //5
    console.log(c.indexOf('arun')) //3
    
}
names("vaishnav","vishal","ajay","vijay","avnish","arun","rahul")