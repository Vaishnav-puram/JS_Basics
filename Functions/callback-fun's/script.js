const a=()=>{
    return "hello";
}
const b=(sayname,name)=>{
    // document.write(sayname()+" "+name);
    console.log(sayname()+" "+name)
}
b(a,"vaishnav");

//...................................................

function x(u,v){
    return u+v;
}
function y(anything){
    console.log(anything(2,3));
}
y(x);

//....................................................

function w(u,v){
    return u+v;
}
function j(anything,k,h){
    console.log(anything(k,h)+" "+"this is callback!!");
}
j(w,2,3);

//.....................................................

const perone=(friend,callback)=>{
    console.log(`hey i'm busy right now ,I am talking to ${friend}`)
    callback();
}
const pertwo=()=>{
    console.log("hello I called you!!!");
}
perone("vaishnav",pertwo);