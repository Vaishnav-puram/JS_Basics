let composition=(a,b)=>{
    return (x)=>{
        return b(a(x)); 
    }
}

let add=(x)=>{
    return x+10;
}
let mul=(y)=>{
    return y*10;
}
let result=composition(add,mul);
console.log(result(5));