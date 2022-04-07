const p=document.querySelector(".parent");
const c=document.querySelector(".child");
p.addEventListener("click",function(){
  alert("parent clicked!!");
});
c.addEventListener("click",function(){
    alert("child  clicked!!");
    // event.stopPropagation(); ---> stops event bubbling
  });
document.addEventListener('click', () => {
    alert('document clicked');
});
window.addEventListener('click', () => {
    alert('window clicked');
});