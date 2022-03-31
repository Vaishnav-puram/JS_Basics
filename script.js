var name="john"
// var name="paul"//var is not feasible to use!!!! because it can be reinitialized
document.write(name);
// console.log(name);
// another form of declaring variable is using "let" it can't be changed
// let name="john"
let name1="paul"
document.write(name+"<br>");
const a=10;
document.write(a+"<br><br>");
const arr=[1,2,3,4,5,6,7,8,9,10];
arr[0]="hello";//we can modify array contents but can't reinitialize the array
for(let i=0;i<arr.length;i++){
    document.write(arr[i]+"<br>");
}
let i=0;
while(i<arr.length){
    document.write(arr[i]+"<br>")
    i++;
}
alert("hello");


