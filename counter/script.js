count=0;
let a=document.querySelector(".no");

let p=document.querySelector(".plus");
let m=document.querySelector(".minus");
p.addEventListener("click",function(){
    count++;
    a.innerHTML=count;

});
m.addEventListener("click",function(){
    count--;
    a.innerHTML=count;

});