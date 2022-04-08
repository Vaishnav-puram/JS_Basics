(()=>{
  console.log("hello");
})();

//............................

((a,b)=>{
    return a+b;
});
const a=(3,5);
console.log(a);

//.............................
const x=()=>{
    return "hello";
}

((sayname,name)=>{
    console.log(sayname()+" "+name);
})(x,"vaishnav");
