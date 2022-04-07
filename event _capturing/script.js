const p=document.querySelector(".parent");
const c=document.querySelector(".child");
p.addEventListener("click",function(){
  alert("parent clicked!!");
},true);
c.addEventListener("click",function(){
    alert("child  clicked!!");
    // event.stopPropagation(); ---> stops event bubbling
  },true);
document.addEventListener('click', () => {
    alert('document clicked');
},true);
window.addEventListener('click', () => {
    alert('window clicked');
},true);