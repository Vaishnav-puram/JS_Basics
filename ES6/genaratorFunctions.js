//Generator functions are declared with the function* keyword 
//They can be stopped midway and then continue from where they had stopped.

function* demo(){
    yield 2;
    yield 3;
}
console.log(demo()) //Object [Generator] {}
let ans=demo();
console.log(ans.next()); //{ value: 2, done: false }
console.log(ans.next()); //{ value: 3, done: false }
console.log(ans.next()); //{ value: undefined, done: true }
// As one can see the next method returns an object consisting of a value and done properties. Value property represents the yielded value. Done property tells us whether the function code is finished or not. (Returns true if finished).

//generator fun in iterators

function* example(){
    let count=0;
    for(let i=0;i<3;i++){
        yield i;
        count++;
    }
    console.log(count); //3
}
let res=example();
console.log(res.next()); //{ value: 0, done: false }
console.log(res.next()); //{ value: 1, done: false }
console.log(res.next()); //{ value: 2, done: false }
console.log(res.next()); //{ value: undefined, done: true }
